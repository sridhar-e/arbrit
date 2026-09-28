"use client";

import { useEffect, useId, useMemo, useRef, useState, type ComponentProps, type ComponentType, type KeyboardEvent } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

/** `rank` is the country's place among those sharing its dial code (0 = the main one, e.g. GB for +44). */
type Country = { code: string; dial: string; name: string; rank?: number };
type FlagComponent = ComponentType<{ title?: string; className?: string }>;

/** Shown first in the list, in this order: the UAE and Saudi Arabia (where Arbrit trains), then India. */
const PINNED = ["AE", "SA", "IN"];
/** Everyday names people search by: Abu Dhabi and Dubai share the UAE's +971, and KSA is Saudi Arabia (+966). */
const ALIASES: Record<string, string> = {
  AE: "uae emirates dubai abu dhabi sharjah ajman ras al khaimah fujairah",
  SA: "ksa saudi riyadh jeddah dammam khobar jubail",
};
const DEFAULT_COUNTRY: Country = { code: "AE", dial: "971", name: "United Arab Emirates" };

let loaded: Promise<{ countries: Country[]; flags: Record<string, FlagComponent> }> | null = null;

/**
 * The country list (libphonenumber-js) and flags (country-flag-icons) load the first time someone
 * opens the picker, so pages with a phone field do not carry either up front.
 */
function loadCountries() {
  loaded ??= Promise.all([
    import("libphonenumber-js/min"),
    import("libphonenumber-js/metadata.min.json"),
    import("country-flag-icons/react/3x2"),
  ]).then(([phone, metadata, flagSet]) => {
    const names = new Intl.DisplayNames(["en"], { type: "region" });
    const byDial = (metadata.default ?? metadata).country_calling_codes as Record<string, string[]>;
    const all: Country[] = phone.getCountries().map((code) => {
      const dial = String(phone.getCountryCallingCode(code));
      return { code, dial, name: names.of(code) ?? code, rank: byDial[dial]?.indexOf(code) ?? 0 };
    });
    const pinned = PINNED.flatMap((code) => all.filter((country) => country.code === code));
    const rest = all.filter((country) => !PINNED.includes(country.code)).sort((a, b) => a.name.localeCompare(b.name));
    return { countries: [...pinned, ...rest], flags: flagSet as unknown as Record<string, FlagComponent> };
  });
  return loaded;
}

/**
 * Phone field with a country-code picker. Closed, the button shows only the dial code (+971); open,
 * a searchable list shows each country's flag, dial code and name. The number input keeps its own
 * `name` (default "phone"); the code travels in a hidden input (`codeName`, default "phoneCode") that
 * lib/lead-forms joins onto the number. Controlled forms get the joined value through `onValueChange`.
 */
export function PhoneInput({
  id,
  name = "phone",
  codeName = "phoneCode",
  className,
  onValueChange,
  onBlur,
  ...inputProps
}: Omit<ComponentProps<"input">, "type" | "value" | "defaultValue" | "onChange"> & {
  id: string;
  codeName?: string;
  /** Called with "+971 50 123 4567" whenever the code or the number changes. */
  onValueChange?: (value: string) => void;
}) {
  const [country, setCountry] = useState<Country>(DEFAULT_COUNTRY);
  const [number, setNumber] = useState("");
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [data, setData] = useState<{ countries: Country[]; flags: Record<string, FlagComponent> } | null>(null);

  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listId = useId();

  const joined = (dial: string, value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return "";
    return trimmed.startsWith("+") ? trimmed : `+${dial} ${trimmed}`;
  };

  const matches = useMemo(() => {
    if (!data) return [];
    const q = query.trim().toLowerCase().replace(/^\+/, "");
    if (!q) return data.countries;
    const found = data.countries.filter(
      (c) => c.name.toLowerCase().includes(q) || c.dial.startsWith(q) || c.code.toLowerCase() === q || ALIASES[c.code]?.includes(q),
    );
    // Typing a code: exact code first, and the main country for that code before its territories.
    if (!/^\d+$/.test(q)) return found;
    return [...found].sort(
      (a, b) => Number(a.dial !== q) - Number(b.dial !== q) || (a.rank ?? 0) - (b.rank ?? 0) || a.name.localeCompare(b.name),
    );
  }, [data, query]);

  const openList = () => {
    setOpen(true);
    setQuery("");
    loadCountries().then((result) => {
      setData(result);
      setActive(Math.max(0, result.countries.findIndex((c) => c.code === country.code)));
    });
  };

  const close = (refocus = true) => {
    setOpen(false);
    if (refocus) inputRef.current?.focus();
  };

  const choose = (next: Country) => {
    setCountry(next);
    onValueChange?.(joined(next.dial, number));
    close();
  };

  // Close when the pointer goes down outside the field and its list.
  useEffect(() => {
    if (!open) return;
    const onDown = (event: PointerEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) close(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  useEffect(() => {
    if (open) searchRef.current?.focus();
  }, [open]);

  // Keep the highlighted country in view as the arrow keys move through the list.
  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>(`[data-index="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active, matches]);

  const onSearchKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((i) => Math.min(i + 1, matches.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (matches[active]) choose(matches[active]);
    } else if (event.key === "Escape") {
      event.preventDefault();
      close();
    } else if (event.key === "Tab") {
      close(false);
    }
  };

  return (
    <div ref={wrapRef} className="relative">
      <input type="hidden" name={codeName} value={`+${country.dial}`} />
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-label={`Country code: ${country.name} +${country.dial}. Change country`}
        onClick={() => (open ? close() : openList())}
        className="absolute inset-y-1 left-1 z-10 flex items-center gap-1 rounded-lg px-2.5 text-sm font-semibold tabular-nums text-navy-deep transition-colors hover:bg-navy-deep/5 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[#0066b2]"
      >
        +{country.dial}
        <ChevronDown className={cn("h-3.5 w-3.5 text-navy-deep/50 transition-transform", open && "rotate-180")} aria-hidden="true" />
        <span aria-hidden="true" className="ml-1.5 h-5 w-px bg-navy-deep/15" />
      </button>

      <Input
        ref={inputRef}
        id={id}
        name={name}
        type="tel"
        inputMode="tel"
        autoComplete="tel-national"
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
          onValueChange?.(joined(country.dial, event.target.value));
        }}
        onBlur={onBlur}
        className={cn(className, "pl-[5.5rem]")}
        {...inputProps}
      />

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-[min(20rem,calc(100vw-2.5rem))] overflow-hidden rounded-2xl bg-white text-navy-deep shadow-[0_24px_48px_-24px_rgba(18,59,109,0.55)] ring-1 ring-navy-deep/10">
          <div className="relative border-b border-navy-deep/10 p-2">
            <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-deep/40" aria-hidden="true" />
            <input
              ref={searchRef}
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setActive(0);
              }}
              onKeyDown={onSearchKey}
              placeholder="Search country or code"
              aria-label="Search country or code"
              aria-controls={listId}
              aria-activedescendant={matches[active] ? `${listId}-${matches[active].code}` : undefined}
              autoComplete="off"
              className="h-10 w-full rounded-xl bg-[#f5f7fa] pl-9 pr-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[#0066b2]/40"
            />
          </div>
          <ul ref={listRef} id={listId} role="listbox" aria-label="Countries" className="max-h-64 overflow-y-auto py-1">
            {!data && <li className="px-4 py-3 text-sm text-navy-deep/70">Loading countries…</li>}
            {data && matches.length === 0 && <li className="px-4 py-3 text-sm text-navy-deep/70">No country matches “{query}”.</li>}
            {matches.map((c, index) => {
              const Flag = data?.flags[c.code];
              const selected = c.code === country.code;
              return (
                <li
                  key={c.code}
                  id={`${listId}-${c.code}`}
                  data-index={index}
                  role="option"
                  aria-selected={selected}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => choose(c)}
                  onMouseEnter={() => setActive(index)}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 px-4 py-2 text-sm",
                    index === active && "bg-[#0066b2]/10",
                    selected && "font-semibold",
                    index === PINNED.length - 1 && !query && "border-b border-navy-deep/10",
                  )}
                >
                  <span className="flex h-4 w-6 shrink-0 overflow-hidden rounded-[3px] ring-1 ring-navy-deep/10">
                    {Flag ? <Flag className="h-full w-full" /> : null}
                  </span>
                  <span className="w-12 shrink-0 tabular-nums text-navy-deep/70">+{c.dial}</span>
                  <span className="min-w-0 truncate">{c.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
