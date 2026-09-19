"use client";

import { ArrowRight, BookOpen, Mail, MessageCircle, Phone, Send, User } from "lucide-react";
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
import { NavyBandTexture } from "@/components/ui/navy-band-texture";
import { contactInfo, courseSelectOptions } from "@/lib/data";
import { Honeypot } from "@/components/forms/fields";
import { useLeadForm } from "@/components/forms/use-lead-form";

const fieldClass =
  "h-12 rounded-xl border-transparent bg-[#f5f7fa] pl-10 shadow-none focus-visible:border-[#0066b2] focus-visible:bg-white";
const iconClass =
  "pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-navy-deep/40 transition-colors group-focus-within:text-[#0066b2]";
const labelClass = "text-[13px] font-semibold text-navy-deep";

const telHref = (number: string) => `tel:${number.replace(/[^+\d]/g, "")}`;

/**
 * "Not sure which course fits?": a Site Navy band with an advisor's phone lines beside a white
 * enquiry card. The AdvisorPrompt scrolls to #quick-enquiry, so the id stays.
 */
export function QuickEnquiry() {
  const lead = useLeadForm("quick-enquiry", "enquiry");

  return (
    <section
      id="quick-enquiry"
      aria-labelledby="quick-enquiry-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-navy-deep py-16 text-white md:py-24"
    >
      <NavyBandTexture gridAt="20% 40%" />
      {/* Phones read heading, form, then phone lines; from 1024px the form sits beside both. */}
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-x-16 lg:gap-y-8">
        <div className="lg:self-end">
          <h2
            id="quick-enquiry-heading"
            className="font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-balance"
          >
            Not sure which course fits?
          </h2>
          <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-white/85 md:text-lg">
            Tell us about your role or your team. A training advisor will call you back with the right course,
            dates and price.
          </p>
        </div>

        <div className="rounded-[24px] bg-white p-5 text-navy-deep shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] sm:p-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
          <p className="font-heading text-2xl font-extrabold tracking-[-0.02em]">Request a call back</p>
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
                <Label htmlFor="enquiry-name" className={labelClass}>
                  <span>Full Name{lead.mark("name")}</span>
                </Label>
                <div className="relative">
                  <User className={iconClass} aria-hidden="true" />
                  <Input
                    id="enquiry-name"
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
                <Label htmlFor="enquiry-email" className={labelClass}>
                  <span>Email{lead.mark("email")}</span>
                </Label>
                <div className="relative">
                  <Mail className={iconClass} aria-hidden="true" />
                  <Input
                    id="enquiry-email"
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
                <Label htmlFor="enquiry-phone" className={labelClass}>
                  <span>Phone / WhatsApp{lead.mark("phone")}</span>
                </Label>
                <div className="relative">
                  <Phone className={iconClass} aria-hidden="true" />
                  <Input
                    id="enquiry-phone"
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
                <Label htmlFor="enquiry-course" className={labelClass}>
                  <span>Course of Interest{lead.mark("course")}</span>
                </Label>
                <div className="relative">
                  <BookOpen className={iconClass} aria-hidden="true" />
                  <Select name="course">
                    <SelectTrigger
                      id="enquiry-course"
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
                <Label htmlFor="enquiry-message" className={labelClass}>
                  Message <span className="font-normal text-navy-deep/75">(optional)</span>
                </Label>
                <Textarea
                  id="enquiry-message"
                  {...lead.field("message")}
                  name="message"
                  rows={3}
                  placeholder="Number of delegates, preferred dates, location…"
                  className="min-h-[88px] rounded-xl border-transparent bg-[#f5f7fa] px-3.5 py-3 shadow-none focus-visible:border-[#0066b2] focus-visible:bg-white"
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

        <div className="lg:self-start">
          <ul className="grid max-w-lg gap-3">
            {contactInfo.phones.map((phone) => (
              <li key={phone.label}>
                <a
                  href={telHref(phone.number)}
                  className="flex min-h-14 items-center gap-4 rounded-2xl bg-white/[0.07] px-4 py-3 ring-1 ring-white/10 transition-colors hover:bg-white/[0.12] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Phone className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13px] text-white/75">{phone.label}</span>
                    <span className="block font-semibold tracking-wide">{phone.number}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-white/60" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/971586695300"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Or message us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
