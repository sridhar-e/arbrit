"use client";

import { useEffect, useState, type ComponentType } from "react";
import { Award, Briefcase, CalendarClock, FileUp, Link2, Mail, MapPin, Phone, Send, TrendingUp, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Honeypot } from "@/components/forms/fields";
import { useLeadForm } from "@/components/forms/use-lead-form";
import { contactInfo } from "@/lib/data";
import { CV_ACCEPT } from "@/lib/cv-file";
import {
  careerCurrentLocationOptions,
  careerExperienceOptions,
  careerNoticePeriodOptions,
  careerPositionOptions,
  type LeadField,
} from "@/lib/lead-forms";

type Icon = ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" }>;

const iconClass =
  "pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-navy-deep/40 transition-colors group-focus-within:text-[#0066b2]";
const controlClass =
  "h-12 w-full rounded-xl border-transparent bg-[#f5f7fa] pl-10 shadow-none focus-visible:border-[#0066b2] focus-visible:bg-white";
const labelClass = "text-[13px] font-semibold text-navy-deep";

/** Window event the openings list fires to pre-select a position (detail: the position name). */
export const careerPositionEvent = "career:select-position";

/** Job application for the Careers page: who they are, the role, and where to find their CV. */
export function CareerForm() {
  const lead = useLeadForm("career", "career");
  // Controlled only so an "Apply" link can pre-select the role; the value still reaches the hook
  // through the Select's hidden native select, as before.
  const [position, setPosition] = useState("");

  useEffect(() => {
    const select = (event: Event) => {
      const value = (event as CustomEvent<string>).detail;
      if (careerPositionOptions.includes(value)) setPosition(value);
    };
    window.addEventListener(careerPositionEvent, select);
    return () => window.removeEventListener(careerPositionEvent, select);
  }, []);

  const label = (field: LeadField, text: string, hint?: string) => (
    <Label htmlFor={`career-${field}`} className={labelClass}>
      <span>
        {text}
        {lead.mark(field)}
        {hint && <span className="ml-1 font-normal text-navy-deep/75">{hint}</span>}
      </span>
    </Label>
  );

  const text = (field: LeadField, labelText: string, icon: Icon, props: { type?: string; placeholder: string; autoComplete?: string; hint?: string }) => {
    const FieldIcon = icon;
    return (
      <div className="group space-y-1.5">
        {label(field, labelText, props.hint)}
        <div className="relative">
          <FieldIcon className={iconClass} aria-hidden="true" />
          <Input
            id={`career-${field}`}
            {...lead.field(field)}
            name={field}
            type={props.type ?? "text"}
            placeholder={props.placeholder}
            autoComplete={props.autoComplete}
            className={controlClass}
          />
        </div>
        {lead.error(field)}
      </div>
    );
  };

  const choice = (field: LeadField, labelText: string, icon: Icon, placeholder: string, options: readonly string[]) => {
    const FieldIcon = icon;
    const controlled = field === "position" ? { value: position, onValueChange: setPosition } : {};
    return (
      <div className="group space-y-1.5">
        {label(field, labelText)}
        <div className="relative">
          <FieldIcon className={iconClass} aria-hidden="true" />
          <Select name={field} {...controlled}>
            <SelectTrigger
              id={`career-${field}`}
              {...lead.field(field)}
              className={`data-placeholder:text-navy-deep/70 ${controlClass}`}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {lead.error(field)}
      </div>
    );
  };

  return (
    <form
      {...lead.formProps}
      className="space-y-5 rounded-[24px] bg-white p-5 text-navy-deep shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] sm:p-8"
    >
      <Honeypot />
      <div>
        <p className="font-heading text-2xl font-extrabold tracking-[-0.02em]">Submit your application</p>
        <p className="mt-1.5 text-[13px] text-navy-deep/75">
        <span className="font-semibold text-[#d92d20]" aria-hidden="true">
          *
        </span>{" "}
        Required fields. Our recruitment team reviews every application.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">{text("name", "Full Name", User, { placeholder: "Full Name", autoComplete: "name" })}</div>
        {text("email", "Email", Mail, { type: "email", placeholder: "name@example.com", autoComplete: "email" })}
        {text("phone", "Phone / WhatsApp", Phone, { type: "tel", placeholder: "+971 50 123 4567", autoComplete: "tel" })}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          {choice("position", "Position Applying For", Briefcase, "Select a position", careerPositionOptions)}
        </div>
        {choice("experience", "Years of HSE Experience", TrendingUp, "Select experience", careerExperienceOptions)}
        {choice("currentLocation", "Current Location", MapPin, "Where are you based?", careerCurrentLocationOptions)}
        {choice("noticePeriod", "Notice Period", CalendarClock, "When could you start?", careerNoticePeriodOptions)}
        {text("certifications", "Certifications Held", Award, { placeholder: "e.g. NEBOSH IGC, IOSH MS, LEEA APLO", hint: "(optional)" })}
      </div>

      <div className="group space-y-1.5">
        <Label htmlFor="career-cvFile" className={labelClass}>
          <span>
            Upload Your CV
            <span className="ml-1 font-normal text-navy-deep/75">(optional, PDF or Word, up to 4 MB)</span>
          </span>
        </Label>
        <div className="relative">
          <FileUp className={iconClass} aria-hidden="true" />
          <input
            id="career-cvFile"
            {...lead.field("cvFile")}
            name="cvFile"
            type="file"
            accept={CV_ACCEPT}
            className="flex h-12 w-full cursor-pointer items-center rounded-xl border border-transparent bg-[#f5f7fa] pl-10 pr-2 text-sm text-navy-deep/80 transition-colors outline-none file:mr-3 file:mt-[9px] file:h-[30px] file:cursor-pointer file:rounded-full file:border-0 file:bg-[#0066b2]/10 file:px-3.5 file:text-[13px] file:font-semibold file:text-[#0066b2] hover:file:bg-[#0066b2]/15 focus-visible:border-[#0066b2] focus-visible:bg-white focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20"
          />
        </div>
        {lead.error("cvFile")}
      </div>

      <div className="group space-y-1.5">
        {label("cvLink", "Or Link to Your CV", "(optional)")}
        <div className="relative">
          <Link2 className={iconClass} aria-hidden="true" />
          <Input
            id="career-cvLink"
            {...lead.field("cvLink")}
            name="cvLink"
            type="url"
            inputMode="url"
            placeholder="https://drive.google.com/… or your LinkedIn profile"
            className={controlClass}
          />
        </div>
        <p className="text-[13px] text-navy-deep/75">
          A Google Drive, Dropbox or LinkedIn link works too. You can also email your CV to{" "}
          <a href={`mailto:${contactInfo.email}`} className="font-medium text-[#0066b2] underline-offset-4 hover:underline">
            {contactInfo.email}
          </a>
          .
        </p>
        {lead.error("cvLink")}
      </div>

      <div className="group space-y-1.5">
        {label("message", "Cover Note", "(optional)")}
        <Textarea
          id="career-message"
          {...lead.field("message")}
          name="message"
          rows={3}
          placeholder="A few lines about your experience and the kind of role you want"
          className="min-h-[88px] rounded-xl border-transparent bg-[#f5f7fa] px-3.5 py-3 shadow-none focus-visible:border-[#0066b2] focus-visible:bg-white"
        />
        {lead.error("message")}
      </div>

      <button
        type="submit"
        disabled={lead.sending}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0066b2] text-sm font-semibold text-white transition-colors hover:bg-[#00589a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2] disabled:opacity-70"
      >
        {lead.sending ? "Sending…" : "Submit Application"} <Send className="h-4 w-4" aria-hidden="true" />
      </button>
      {lead.status()}
    </form>
  );
}
