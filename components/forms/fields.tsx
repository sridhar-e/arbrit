"use client";

import type { ChangeEvent, ComponentType, ReactNode } from "react";
import { AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/** Red asterisk after a required label. Decorative: the "All fields are required" note carries the meaning. */
export function RequiredMark({ className = "text-[#d92d20]" }: { className?: string }) {
  return (
    <span className={`ml-0.5 ${className}`} aria-hidden="true">
      *
    </span>
  );
}

export function RequiredNote({ className = "" }: { className?: string }) {
  return (
    <p className={`text-[13px] text-navy-deep/70 ${className}`}>
      <span className="font-semibold text-[#d92d20]" aria-hidden="true">
        *
      </span>{" "}
      All fields are required.
    </p>
  );
}

/** Red message under a field. On dark backgrounds pass a className (e.g. a white chip) for contrast. */
export function FieldError({ id, error, className = "text-[#d92d20]" }: { id: string; error?: string; className?: string }) {
  if (!error) return null;
  return (
    <p id={`${id}-error`} className={`flex items-start gap-1.5 text-[13px] font-medium leading-snug ${className}`}>
      <AlertCircle className="mt-px h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {error}
    </p>
  );
}

/** Label with a red required asterisk, the control, then its error message underneath. */
export function FieldShell({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>
        <span>
          {label}
          <RequiredMark />
        </span>
      </Label>
      {children}
      <FieldError id={id} error={error} />
    </div>
  );
}

export function TextField({
  id,
  name,
  label,
  icon: Icon,
  type = "text",
  placeholder,
  autoComplete,
  inputMode,
  value,
  error,
  onChange,
  onBlur,
}: {
  id: string;
  name: string;
  label: string;
  icon?: ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" }>;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "numeric" | "text" | "email" | "tel";
  value: string;
  error?: string;
  onChange: (value: string) => void;
  onBlur: () => void;
}) {
  return (
    <FieldShell id={id} label={label} error={error}>
      <div className="relative">
        {Icon && (
          <Icon
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40"
            aria-hidden="true"
          />
        )}
        <Input
          id={id}
          name={name}
          type={type}
          inputMode={inputMode}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          required
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`h-12 rounded-xl bg-[#f5f7fa] ${Icon ? "pl-10" : ""} ${
            error ? "border-[#d92d20] aria-invalid:ring-[#d92d20]/20" : "border-transparent"
          }`}
        />
      </div>
    </FieldShell>
  );
}

/** Single-choice pill group (radio buttons), e.g. preferred training location. */
export function ChoicePills({
  id,
  name,
  label,
  options,
  value,
  error,
  onChange,
}: {
  id: string;
  name: string;
  label: string;
  options: readonly string[];
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset
      id={id}
      tabIndex={-1}
      aria-describedby={error ? `${id}-error` : undefined}
      className="space-y-1.5 outline-none"
    >
      <legend className="mb-1.5 text-sm font-medium leading-none">
        {label}
        <RequiredMark />
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const checked = value === option;
          return (
            <label
              key={option}
              className={`inline-flex min-h-11 cursor-pointer items-center rounded-full border px-4 text-sm font-semibold transition-colors has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-[#0066b2]/40 ${
                checked
                  ? "border-[#0066b2] bg-[#0066b2] text-white"
                  : error
                    ? "border-[#d92d20] bg-[#f5f7fa] text-navy-deep"
                    : "border-transparent bg-[#f5f7fa] text-navy-deep hover:bg-[#0066b2]/10"
              }`}
            >
              <input
                type="radio"
                name={name}
                value={option}
                checked={checked}
                onChange={() => onChange(option)}
                className="sr-only"
              />
              {option}
            </label>
          );
        })}
      </div>
      <FieldError id={id} error={error} />
    </fieldset>
  );
}

/**
 * Spam trap: hidden from people and assistive tech; bots that fill every input reveal themselves.
 * Controlled when `value`/`onChange` are passed; otherwise read from the form's data as "website".
 */
export function Honeypot({ value, onChange }: { value?: string; onChange?: (value: string) => void }) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Website
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          {...(onChange ? { value: value ?? "", onChange: (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value) } : { defaultValue: "" })}
        />
      </label>
    </div>
  );
}
