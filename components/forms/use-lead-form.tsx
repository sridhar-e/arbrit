"use client";

import { useRef, useState, type FocusEvent, type FormEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FieldError, RequiredMark } from "@/components/forms/fields";
import { leadForms, validateLead, type LeadField, type LeadFormKey, type LeadValues } from "@/lib/lead-forms";
import { submitEnquiry } from "@/lib/submit-enquiry";
import { cvFileError } from "@/lib/cv-file";

/**
 * Wires one of the site's lead forms (see lib/lead-forms) to /api/enquiries without changing its
 * markup: values are read from the form's own named inputs (Radix Selects included, via their
 * hidden native select), errors appear under each field, and success goes to /thank-you with a
 * way back to the current page. Field ids must follow `${idPrefix}-${fieldName}`.
 * File inputs (e.g. the Careers CV) are checked with the CV rules and sent with the rest as
 * multipart form data.
 */
/** Colours for forms that sit on Arbrit Blue, where plain red text would not be readable. */
export const onDarkFormTones = {
  mark: "text-[#ffb4ab]",
  error: "w-fit rounded-md bg-white px-2 py-1 text-[#b42318]",
  status: "mt-3 w-fit rounded-md bg-white px-3 py-2 text-sm font-medium text-[#b42318]",
};

/** A lead field, or the name of a file input such as "cvFile". */
type FieldName = LeadField | (string & {});
type Errors = Partial<Record<string, string>>;

export function useLeadForm(form: LeadFormKey, idPrefix: string, tones: Partial<typeof onDarkFormTones> = {}) {
  const router = useRouter();
  const pathname = usePathname();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [serverErrors, setServerErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<string, boolean>>>({});
  const [attempted, setAttempted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const fields: LeadField[] = leadForms[form].fields;
  const optional: readonly LeadField[] = (leadForms[form] as { optional?: LeadField[] }).optional ?? [];

  /** File inputs in the form, by name (only ones with a file chosen). */
  const files = (): Record<string, File> => {
    const data = formRef.current ? new FormData(formRef.current) : new FormData();
    const found: Record<string, File> = {};
    for (const [name, value] of data.entries()) if (value instanceof File && value.size > 0) found[name] = value;
    return found;
  };
  const fileNames = () =>
    Array.from(formRef.current?.querySelectorAll<HTMLInputElement>("input[type=file][name]") ?? []).map((input) => input.name);

  const validate = (): Errors => {
    const found: Errors = { ...validateLead(form, read()) };
    const chosen = files();
    for (const name of fileNames()) {
      const error = cvFileError(chosen[name]);
      if (error) found[name] = error;
    }
    return found;
  };

  const read = (): LeadValues => {
    const data = formRef.current ? new FormData(formRef.current) : new FormData();
    return Object.fromEntries(fields.map((field) => [field, String(data.get(field) ?? "")]));
  };
  const revalidate = () => setErrors(validate());

  const errorFor = (field: FieldName) =>
    (attempted || touched[field]) ? (serverErrors[field] ?? errors[field]) : undefined;
  const id = (field: FieldName) => `${idPrefix}-${field}`;

  const focusFirst = (found: Errors) => {
    const first = [...fields, ...fileNames()].find((field) => found[field]);
    if (first) formRef.current?.querySelector<HTMLElement>(`#${id(first)}`)?.focus();
    return Boolean(first);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) return;
    setAttempted(true);
    const values = read();
    const found = validate();
    setErrors(found);
    if (focusFirst(found)) return;

    setSending(true);
    const payload = new FormData();
    payload.set("type", "lead");
    payload.set("form", form);
    for (const [field, value] of Object.entries(values)) payload.set(field, value ?? "");
    payload.set("website", String(new FormData(formRef.current!).get("website") ?? ""));
    for (const [name, file] of Object.entries(files())) payload.set(name, file, file.name);
    const result = await submitEnquiry(payload);
    if (result.ok) {
      router.push(`/thank-you?back=${encodeURIComponent(pathname)}`);
      return;
    }
    setSending(false);
    setSendError(result.message);
    if (result.errors) {
      setServerErrors(result.errors as Errors);
      focusFirst(result.errors as Errors);
    }
  };

  const onChange = (event: FormEvent<HTMLFormElement>) => {
    const name = (event.target as unknown as HTMLInputElement).name;
    if (name) setServerErrors((current) => ({ ...current, [name]: undefined }));
    setSendError("");
    revalidate();
  };

  const onBlur = (event: FocusEvent<HTMLFormElement>) => {
    const name = (event.target as unknown as HTMLInputElement).name;
    if (name && (fields.includes(name as LeadField) || fileNames().includes(name))) {
      setTouched((current) => ({ ...current, [name]: true }));
      revalidate();
    }
  };

  const hasErrors = Object.values({ ...errors, ...serverErrors }).some(Boolean);

  return {
    formProps: { ref: formRef, onSubmit, onChange, onBlur, noValidate: true },
    sending,
    /** aria wiring for a field's control (Input, Textarea or SelectTrigger). */
    field: (field: FieldName) => {
      const error = errorFor(field);
      return {
        "aria-invalid": error ? true : undefined,
        "aria-describedby": error ? `${id(field)}-error` : undefined,
      } as const;
    },
    /** Red asterisk for required fields; nothing for optional ones. */
    mark: (field: LeadField) => (optional.includes(field) ? null : <RequiredMark className={tones.mark} />),
    /** The error line to render directly under a field. */
    error: (field: FieldName) => <FieldError id={id(field)} error={errorFor(field)} className={tones.error} />,
    /** Summary under the submit button: the server's message, or a nudge to fix fields. */
    status: (className = tones.status ?? "mt-3 text-sm font-medium text-[#d92d20]") => (
      <div aria-live="polite">
        {sendError ? (
          <p className={className}>{sendError}</p>
        ) : (
          attempted && hasErrors && <p className={className}>Please fix the highlighted fields above.</p>
        )}
      </div>
    ),
  };
}
