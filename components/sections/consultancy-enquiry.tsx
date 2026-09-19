"use client";

import { Building2, ClipboardList, Mail, MapPin, Phone, Send, ShieldCheck, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { NavyBandTexture } from "@/components/ui/navy-band-texture";
import { locationSelectOptions } from "@/lib/data";
import { Honeypot } from "@/components/forms/fields";
import { useLeadForm } from "@/components/forms/use-lead-form";

const serviceOptions = [
  "Project HSE support",
  "Safety audit / gap assessment",
  "HAZOP & SIL studies",
  "Risk assessment & HIRA",
  "HSE management system (ISO 45001)",
  "HSE manpower & competency",
  "Not sure yet — advise me",
];

const assurances = [
  "A senior consultant reviews every enquiry — not a call centre",
  "Scope and fixed price agreed before any work starts",
  "Your project details stay confidential; NDAs signed on request",
];

const fieldClass =
  "h-12 rounded-xl border-transparent bg-[#f5f7fa] pl-10 shadow-none focus-visible:border-[#0066b2] focus-visible:bg-white";
const iconClass =
  "pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-navy-deep/40 transition-colors group-focus-within:text-[#0066b2]";
const labelClass = "text-[13px] font-semibold text-navy-deep";

/** Enquire: the page's one Site Navy band, with the proposal form on a white card (same pattern as QuickEnquiry). */
export function ConsultancyEnquiry() {
  const lead = useLeadForm("consultancy", "consultancy");

  return (
    <section
      id="consultancy-enquiry"
      aria-labelledby="consultancy-enquiry-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-navy-deep py-16 text-white md:py-24"
    >
      <NavyBandTexture gridAt="20% 40%" />
      {/* Phones read heading, form, then assurances; from 1024px the form sits beside both. */}
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-x-16 lg:gap-y-8">
        <div className="lg:self-end">
          <h2
            id="consultancy-enquiry-heading"
            className="font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-balance"
          >
            Tell us what you are up against
          </h2>
          <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-white/85 md:text-lg">
            A failed audit, a new contract requirement, an incident, or a system that has never been written down.
            Describe it in a line or two and we will come back with a scope, a timeline and a fixed price.
          </p>
        </div>

        <div className="rounded-[24px] bg-white p-5 text-navy-deep shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] sm:p-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
          <p className="font-heading text-2xl font-extrabold tracking-[-0.02em]">Request a consultancy proposal</p>
          <p className="mt-1.5 text-[15px] leading-snug text-navy-deep/80">
            A few details help us route your enquiry to the right consultant first time.
          </p>
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
                <Label htmlFor="consultancy-company" className={labelClass}>
                  <span>Company{lead.mark("company")}</span>
                </Label>
                <div className="relative">
                  <Building2 className={iconClass} aria-hidden="true" />
                  <Input
                    id="consultancy-company"
                    {...lead.field("company")}
                    name="company"
                    placeholder="Company name"
                    required
                    className={fieldClass}
                  />
                </div>
                {lead.error("company")}
              </div>

              <div className="group space-y-1.5">
                <Label htmlFor="consultancy-name" className={labelClass}>
                  <span>Contact Name{lead.mark("name")}</span>
                </Label>
                <div className="relative">
                  <User className={iconClass} aria-hidden="true" />
                  <Input
                    id="consultancy-name"
                    {...lead.field("name")}
                    name="name"
                    placeholder="Full name"
                    required
                    className={fieldClass}
                  />
                </div>
                {lead.error("name")}
              </div>

              <div className="group space-y-1.5">
                <Label htmlFor="consultancy-email" className={labelClass}>
                  <span>Work Email{lead.mark("email")}</span>
                </Label>
                <div className="relative">
                  <Mail className={iconClass} aria-hidden="true" />
                  <Input
                    id="consultancy-email"
                    {...lead.field("email")}
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                    className={fieldClass}
                  />
                </div>
                {lead.error("email")}
              </div>

              <div className="group space-y-1.5">
                <Label htmlFor="consultancy-phone" className={labelClass}>
                  <span>Phone{lead.mark("phone")}</span>
                </Label>
                <div className="relative">
                  <Phone className={iconClass} aria-hidden="true" />
                  <Input
                    id="consultancy-phone"
                    {...lead.field("phone")}
                    name="phone"
                    type="tel"
                    placeholder="+971 ..."
                    required
                    className={fieldClass}
                  />
                </div>
                {lead.error("phone")}
              </div>

              <div className="group space-y-1.5">
                <Label htmlFor="consultancy-service" className={labelClass}>
                  <span>Service Required{lead.mark("service")}</span>
                </Label>
                <div className="relative">
                  <ClipboardList className={iconClass} aria-hidden="true" />
                  <Select name="service">
                    <SelectTrigger
                      id="consultancy-service"
                      {...lead.field("service")}
                      className={`w-full data-placeholder:text-navy-deep/70 ${fieldClass}`}
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {lead.error("service")}
              </div>

              <div className="group space-y-1.5">
                <Label htmlFor="consultancy-location" className={labelClass}>
                  <span>Site Location{lead.mark("location")}</span>
                </Label>
                <div className="relative">
                  <MapPin className={iconClass} aria-hidden="true" />
                  <Select name="location">
                    <SelectTrigger
                      id="consultancy-location"
                      {...lead.field("location")}
                      className={`w-full data-placeholder:text-navy-deep/70 ${fieldClass}`}
                    >
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locationSelectOptions.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {lead.error("location")}
              </div>

              <div className="group space-y-1.5 sm:col-span-2">
                <Label htmlFor="consultancy-message" className={labelClass}>
                  <span>What do you need help with?{lead.mark("message")}</span>
                </Label>
                <Textarea
                  id="consultancy-message"
                  {...lead.field("message")}
                  name="message"
                  rows={4}
                  placeholder="e.g. We have a client HSE audit in six weeks and no documented management system."
                  className="min-h-[110px] rounded-xl border-transparent bg-[#f5f7fa] px-3.5 py-3 shadow-none focus-visible:border-[#0066b2] focus-visible:bg-white"
                />
                {lead.error("message")}
              </div>

              <button
                type="submit"
                disabled={lead.sending}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0066b2] text-sm font-semibold text-white transition-colors hover:bg-[#00589a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2] disabled:opacity-70 sm:col-span-2"
              >
                {lead.sending ? "Sending…" : "Request a proposal"} <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {lead.status()}
          </form>
        </div>

        <ul className="max-w-lg divide-y divide-white/15 border-y border-white/15 lg:self-start">
          {assurances.map((item) => (
            <li key={item} className="flex items-center gap-4 py-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                <ShieldCheck className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="text-[15px] font-medium leading-snug text-white">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
