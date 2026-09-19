"use client";

import { Building2, BookOpen, Mail, Phone, Send, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Honeypot } from "@/components/forms/fields";
import type { useLeadForm } from "@/components/forms/use-lead-form";
import {
  leeaFieldClass,
  leeaFieldIconClass,
  leeaLabelClass,
  leeaSubmitClass,
} from "@/components/sections/leea-styles";

const leeaCourseOptions = ["LEEA Foundation Certificate (FOU)", "LEEA Lifting Accessories Diploma (LAC)"];

/**
 * The fields both LEEA lead forms share (name, email, phone, company, course). Ids follow
 * `${idPrefix}-${field}` as useLeadForm expects; the form element and its hook stay with each caller.
 */
export function LeeaLeadFields({
  lead,
  idPrefix,
  submitLabel,
}: {
  lead: ReturnType<typeof useLeadForm>;
  idPrefix: string;
  submitLabel: string;
}) {
  return (
    <>
      <Honeypot />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="group space-y-1.5">
          <Label htmlFor={`${idPrefix}-name`} className={leeaLabelClass}>
            <span>Name{lead.mark("name")}</span>
          </Label>
          <div className="relative">
            <User className={leeaFieldIconClass} aria-hidden="true" />
            <Input
              id={`${idPrefix}-name`}
              {...lead.field("name")}
              name="name"
              autoComplete="name"
              placeholder="Your full name"
              required
              className={leeaFieldClass}
            />
          </div>
          {lead.error("name")}
        </div>

        <div className="group space-y-1.5">
          <Label htmlFor={`${idPrefix}-email`} className={leeaLabelClass}>
            <span>Email{lead.mark("email")}</span>
          </Label>
          <div className="relative">
            <Mail className={leeaFieldIconClass} aria-hidden="true" />
            <Input
              id={`${idPrefix}-email`}
              {...lead.field("email")}
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@company.com"
              required
              className={leeaFieldClass}
            />
          </div>
          {lead.error("email")}
        </div>

        <div className="group space-y-1.5">
          <Label htmlFor={`${idPrefix}-phone`} className={leeaLabelClass}>
            <span>Phone{lead.mark("phone")}</span>
          </Label>
          <div className="relative">
            <Phone className={leeaFieldIconClass} aria-hidden="true" />
            <Input
              id={`${idPrefix}-phone`}
              {...lead.field("phone")}
              type="tel"
              name="phone"
              autoComplete="tel"
              placeholder="+971 5X XXX XXXX"
              required
              className={leeaFieldClass}
            />
          </div>
          {lead.error("phone")}
        </div>

        <div className="group space-y-1.5">
          <Label htmlFor={`${idPrefix}-company`} className={leeaLabelClass}>
            <span>Company Name{lead.mark("company")}</span>
          </Label>
          <div className="relative">
            <Building2 className={leeaFieldIconClass} aria-hidden="true" />
            <Input
              id={`${idPrefix}-company`}
              {...lead.field("company")}
              name="company"
              autoComplete="organization"
              placeholder="Company name"
              className={leeaFieldClass}
            />
          </div>
          {lead.error("company")}
        </div>

        <div className="group space-y-1.5 sm:col-span-2">
          <Label htmlFor={`${idPrefix}-course`} className={leeaLabelClass}>
            <span>Course{lead.mark("course")}</span>
          </Label>
          <div className="relative">
            <BookOpen className={leeaFieldIconClass} aria-hidden="true" />
            <Select name="course">
              <SelectTrigger
                id={`${idPrefix}-course`}
                {...lead.field("course")}
                className={`w-full data-placeholder:text-navy-deep/70 ${leeaFieldClass}`}
              >
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                {leeaCourseOptions.map((course) => (
                  <SelectItem key={course} value={course}>
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {lead.error("course")}
        </div>

        <button type="submit" disabled={lead.sending} className={`${leeaSubmitClass} sm:col-span-2`}>
          {lead.sending ? "Sending…" : submitLabel} <Send className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      {lead.status()}
    </>
  );
}

/** The "* Required fields" note under a form card's title. */
export function LeeaRequiredNote() {
  return (
    <p className="mt-1.5 text-[13px] text-navy-deep/75">
      <span className="font-semibold text-[#d92d20]" aria-hidden="true">
        *
      </span>{" "}
      Required fields
    </p>
  );
}
