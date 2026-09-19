"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Popover as PopoverPrimitive } from "radix-ui";
import { Check, ChevronDown, Search, X } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { courseGroups } from "@/lib/course-catalog";
import { OTHER_OPTION } from "@/lib/enquiry";

// Matches the breakpoint where the fixed Call/Enquire bar disappears.
const PHONE_QUERY = "(max-width: 767px)";

function useIsPhone() {
  const [isPhone, setIsPhone] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(PHONE_QUERY);
    const update = () => setIsPhone(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return isPhone;
}

type CoursePickerProps = {
  id: string;
  /** Heading of the phone sheet and accessible name of the dropdown, e.g. "Courses of Interest". */
  title: string;
  /** Singular noun used in the summary and hints, e.g. "course" or "certification". */
  noun: string;
  value: string[];
  onChange: (next: string[]) => void;
  invalid?: boolean;
  describedBy?: string;
  onClose?: () => void;
};

/**
 * Multi-select of every course Arbrit runs, grouped as in the Courses menu, with a search box and
 * a final "Other" option. Tablets and desktops get an anchored dropdown; phones get a bottom sheet,
 * because a dropdown squeezed between the header and the fixed Call/Enquire bar leaves room for
 * only one or two rows. Selections show as removable chips under the trigger.
 */
export function CoursePicker({ id, title, noun, value, onChange, invalid, describedBy, onClose }: CoursePickerProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const triggerRef = useRef<HTMLButtonElement>(null);
  const isPhone = useIsPhone();

  const setOpenState = (next: boolean) => {
    setOpen(next);
    if (!next) {
      setQuery("");
      onClose?.();
    }
  };

  const toggle = (option: string) =>
    onChange(value.includes(option) ? value.filter((item) => item !== option) : [...value, option]);

  const summary =
    value.length === 0
      ? `Select ${noun}s`
      : value.length === 1
        ? value[0]
        : `${value.length} ${noun}s selected`;

  const panel = (
    <OptionsPanel
      query={query}
      onQuery={setQuery}
      value={value}
      onToggle={toggle}
      onDone={() => setOpenState(false)}
      roomy={isPhone}
    />
  );

  const trigger = (
    <button
      ref={triggerRef}
      id={id}
      type="button"
      onClick={() => setOpenState(!open)}
      aria-haspopup="dialog"
      aria-expanded={open}
      aria-describedby={describedBy}
      className={`flex h-12 w-full items-center justify-between gap-2 rounded-xl border bg-[#f5f7fa] px-3 text-left text-sm outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-[#0066b2]/40 ${
        invalid ? "border-[#d92d20]" : "border-transparent"
      }`}
    >
      <span className={`truncate ${value.length ? "text-navy-deep" : "text-navy-deep/75"}`}>{summary}</span>
      <ChevronDown
        className={`h-4 w-4 shrink-0 text-navy-deep/75 transition-transform ${open ? "rotate-180" : ""}`}
        aria-hidden="true"
      />
    </button>
  );

  return (
    <div>
      {isPhone ? (
        <>
          {trigger}
          <Sheet open={open} onOpenChange={setOpenState}>
            <SheetContent
              side="bottom"
              className="gap-0 rounded-t-[24px] bg-white p-0 data-[side=bottom]:h-[85dvh]"
              onCloseAutoFocus={(event) => {
                event.preventDefault();
                triggerRef.current?.focus();
              }}
            >
              <div className="px-5 pb-3 pt-5">
                <SheetTitle className="font-heading text-lg font-extrabold tracking-[-0.01em] text-navy-deep">
                  {title}
                </SheetTitle>
                <SheetDescription className="mt-0.5 text-[13px] text-navy-deep/70">
                  Tick every course you need. Tick Other if yours is not listed.
                </SheetDescription>
              </div>
              {panel}
            </SheetContent>
          </Sheet>
        </>
      ) : (
        <PopoverPrimitive.Root open={open} onOpenChange={setOpenState}>
          <PopoverPrimitive.Anchor asChild>{trigger}</PopoverPrimitive.Anchor>
          <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
              align="start"
              sideOffset={6}
              collisionPadding={{ top: 96, bottom: 16, left: 12, right: 12 }}
              aria-label={title}
              onPointerDownOutside={(event) => {
                // Let the trigger's own click close the panel instead of closing then reopening it.
                if (triggerRef.current?.contains(event.target as Node)) event.preventDefault();
              }}
              onCloseAutoFocus={(event) => {
                event.preventDefault();
                triggerRef.current?.focus();
              }}
              className="z-50 flex w-[var(--radix-popover-trigger-width)] min-w-[18rem] max-w-[calc(100vw-24px)] flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_24px_48px_-24px_rgba(18,59,109,0.45)] ring-1 ring-navy-deep/10 max-h-[min(26rem,var(--radix-popover-content-available-height))]"
            >
              {panel}
            </PopoverPrimitive.Content>
          </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>
      )}

      {value.length > 0 && (
        <ul aria-label={`Selected ${noun}s`} className="mt-2 flex flex-wrap gap-1.5">
          {value.map((item) => (
            <li
              key={item}
              className="inline-flex max-w-full items-center gap-1 rounded-full bg-[#0066b2]/10 py-1 pl-3 pr-1 text-[13px] font-semibold text-[#0066b2]"
            >
              <span className="truncate">{item}</span>
              <button
                type="button"
                onClick={() => toggle(item)}
                aria-label={`Remove ${item}`}
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full hover:bg-[#0066b2]/15 focus-visible:outline-2 focus-visible:outline-[#0066b2]"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Search box, grouped checkbox list with "Other" last, and a footer with the count and Done. */
function OptionsPanel({
  query,
  onQuery,
  value,
  onToggle,
  onDone,
  roomy,
}: {
  query: string;
  onQuery: (next: string) => void;
  value: string[];
  onToggle: (option: string) => void;
  onDone: () => void;
  roomy: boolean;
}) {
  const listId = useId();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return courseGroups;
    return courseGroups
      .map((group) => ({ ...group, courses: group.courses.filter((course) => course.toLowerCase().includes(q)) }))
      .filter((group) => group.courses.length > 0);
  }, [query]);

  return (
    <>
      <div className={`relative border-b border-navy-deep/10 ${roomy ? "px-5 pb-3" : "p-2"}`}>
        <Search
          className={`pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 ${roomy ? "left-8 -mt-1.5" : "left-5"}`}
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(event) => onQuery(event.target.value)}
          placeholder="Search courses"
          aria-label="Search courses"
          aria-controls={listId}
          className={`w-full rounded-full bg-[#f5f7fa] pl-9 pr-3 text-navy-deep outline-none focus-visible:ring-2 focus-visible:ring-[#0066b2]/40 ${
            roomy ? "h-11 text-base" : "h-10 text-sm"
          }`}
        />
      </div>

      <div
        id={listId}
        role="group"
        aria-label="Courses"
        className={`min-h-0 flex-1 overflow-y-auto overscroll-contain ${roomy ? "px-3 py-2" : "p-2"}`}
      >
        {filtered.map((group) => (
          <fieldset key={group.title} className="mb-2">
            <legend className="px-2 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-navy-deep/75">
              {group.title}
            </legend>
            {group.courses.map((course) => (
              <Option key={course} label={course} checked={value.includes(course)} onToggle={() => onToggle(course)} />
            ))}
          </fieldset>
        ))}
        {filtered.length === 0 && (
          <p className="px-2 py-3 text-sm text-navy-deep/75">
            No course matches &ldquo;{query}&rdquo;. Tick Other to type it in.
          </p>
        )}
        <div className="mt-1 border-t border-navy-deep/10 pt-2">
          <Option label={OTHER_OPTION} checked={value.includes(OTHER_OPTION)} onToggle={() => onToggle(OTHER_OPTION)} />
        </div>
      </div>

      <div
        className={`flex items-center justify-between gap-3 border-t border-navy-deep/10 ${
          roomy ? "px-5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3" : "px-4 py-2.5"
        }`}
      >
        <span className="text-[13px] font-medium text-navy-deep/70">{value.length} selected</span>
        <button
          type="button"
          onClick={onDone}
          className={`rounded-full bg-[#0066b2] font-semibold text-white hover:bg-[#00589a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2] ${
            roomy ? "h-11 px-8 text-sm" : "px-4 py-1.5 text-[13px]"
          }`}
        >
          Done
        </button>
      </div>
    </>
  );
}

function Option({ label, checked, onToggle }: { label: string; checked: boolean; onToggle: () => void }) {
  return (
    <label className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl px-2 py-2 text-sm text-navy-deep hover:bg-[#f5f7fa] has-[:focus-visible]:bg-[#f5f7fa]">
      <input type="checkbox" checked={checked} onChange={onToggle} className="peer sr-only" />
      <span
        aria-hidden="true"
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-[#0066b2]/40 ${
          checked ? "border-[#0066b2] bg-[#0066b2] text-white" : "border-navy-deep/25 bg-white"
        }`}
      >
        {checked && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
      </span>
      <span className="leading-snug">{label}</span>
    </label>
  );
}
