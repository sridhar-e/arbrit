"use client";

import { BookOpen, Mail, Phone, Send, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { courseSelectOptions } from "@/lib/data";
import { Honeypot } from "@/components/forms/fields";
import { useLeadForm } from "@/components/forms/use-lead-form";

const fieldClass =
  "h-12 rounded-xl border-transparent bg-[#f5f7fa] pl-10 shadow-none focus-visible:border-[#0066b2] focus-visible:bg-white";
const iconClass =
  "pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-navy-deep/40 transition-colors group-focus-within:text-[#0066b2]";
const labelClass = "text-[13px] font-semibold text-navy-deep";

/**
 * The Contact page's enquiry form on a white card. Same lead form as contact-form.tsx (form key
 * "contact", ids "contact-*", same field names); only the styling differs, since that file is
 * frozen with the homepage.
 */
export function ContactPageForm() {
  const lead = useLeadForm("contact", "contact");

  return (
    <div className="rounded-[24px] bg-white p-5 text-navy-deep shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] sm:p-8">
      <p className="font-heading text-2xl font-extrabold tracking-[-0.02em]">Send us a message</p>
      <p className="mt-1.5 text-[13px] text-navy-deep/75">
        <span className="font-semibold text-[#d92d20]" aria-hidden="true">
          *
        </span>{" "}
        Required fields
      </p>

      <form {...lead.formProps} className="mt-6 w-full">
        <Honeypot />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="group space-y-1.5">
            <Label htmlFor="contact-name" className={labelClass}>
              <span>Full Name{lead.mark("name")}</span>
            </Label>
            <div className="relative">
              <User className={iconClass} aria-hidden="true" />
              <Input
                id="contact-name"
                {...lead.field("name")}
                name="name"
                autoComplete="name"
                placeholder="Your full name"
                required
                className={fieldClass}
              />
            </div>
            {lead.error("name")}
          </div>

          <div className="group space-y-1.5">
            <Label htmlFor="contact-email" className={labelClass}>
              <span>Email{lead.mark("email")}</span>
            </Label>
            <div className="relative">
              <Mail className={iconClass} aria-hidden="true" />
              <Input
                id="contact-email"
                {...lead.field("email")}
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@company.com"
                required
                className={fieldClass}
              />
            </div>
            {lead.error("email")}
          </div>

          <div className="group space-y-1.5">
            <Label htmlFor="contact-phone" className={labelClass}>
              <span>Phone / WhatsApp{lead.mark("phone")}</span>
            </Label>
            <div className="relative">
              <Phone className={iconClass} aria-hidden="true" />
              <Input
                id="contact-phone"
                {...lead.field("phone")}
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="+971 5X XXX XXXX"
                required
                className={fieldClass}
              />
            </div>
            {lead.error("phone")}
          </div>

          <div className="group space-y-1.5">
            <Label htmlFor="contact-course" className={labelClass}>
              <span>Course of Interest{lead.mark("course")}</span>
            </Label>
            <div className="relative">
              <BookOpen className={iconClass} aria-hidden="true" />
              <Select name="course">
                <SelectTrigger
                  id="contact-course"
                  {...lead.field("course")}
                  className={`w-full data-placeholder:text-navy-deep/70 ${fieldClass}`}
                >
                  <SelectValue placeholder="Select a course" />
                </SelectTrigger>
                <SelectContent>
                  {courseSelectOptions.map((course) => (
                    <SelectItem key={course} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {lead.error("course")}
          </div>

          <div className="group space-y-1.5 sm:col-span-2">
            <Label htmlFor="contact-message" className={labelClass}>
              Message <span className="font-normal text-navy-deep/75">(optional)</span>
            </Label>
            <Textarea
              id="contact-message"
              {...lead.field("message")}
              name="message"
              rows={3}
              placeholder="Tell us briefly what you need"
              className="min-h-[104px] rounded-xl border-transparent bg-[#f5f7fa] px-3.5 py-3 shadow-none focus-visible:border-[#0066b2] focus-visible:bg-white"
            />
            {lead.error("message")}
          </div>

          <button
            type="submit"
            disabled={lead.sending}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0066b2] text-sm font-semibold text-white transition-colors hover:bg-[#00589a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2] disabled:opacity-70 sm:col-span-2"
          >
            {lead.sending ? "Sending…" : "Send enquiry"} <Send className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {lead.status()}
      </form>
    </div>
  );
}
