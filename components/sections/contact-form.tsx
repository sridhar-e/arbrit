"use client";

import { BookOpen, Loader2, Mail, Phone, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { FormTrustSignals } from "@/components/ui/form-trust-signals";
import { courseSelectOptions } from "@/lib/data";
import { Honeypot } from "@/components/forms/fields";
import { useLeadForm } from "@/components/forms/use-lead-form";

export function ContactForm() {
  const lead = useLeadForm("contact", "contact");

  return (
    <form
      {...lead.formProps}
      className="reveal relative space-y-5 overflow-hidden rounded-3xl border border-navy/10 bg-gradient-to-br from-white to-muted/60 p-8 shadow-sm"
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-[#0066b2]"
      />
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[#0066b2]">Get In Touch</p>
        <h2 className="mt-1 font-heading text-2xl font-bold text-[#0066b2]">Send Us a Message</h2>
      </div>
      <FormTrustSignals />
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="group space-y-1.5">
          <Label htmlFor="contact-name">
            <span>
              Full Name
              {lead.mark("name")}
            </span>
          </Label>
          <div className="relative">
            <User
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-orange"
              aria-hidden="true"
            />
            <Input
              id="contact-name"
              {...lead.field("name")}
              name="name"
              placeholder="Full Name"
              required
              className="h-12 rounded-xl border-navy/15 bg-white pl-10 shadow-sm"
            />
          </div>
          {lead.error("name")}
        </div>
        <div className="group space-y-1.5">
          <Label htmlFor="contact-email">
            <span>
              Email
              {lead.mark("email")}
            </span>
          </Label>
          <div className="relative">
            <Mail
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-orange"
              aria-hidden="true"
            />
            <Input
              id="contact-email"
              {...lead.field("email")}
              type="email"
              name="email"
              placeholder="Email"
              required
              className="h-12 rounded-xl border-navy/15 bg-white pl-10 shadow-sm"
            />
          </div>
          {lead.error("email")}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="group space-y-1.5">
          <Label htmlFor="contact-phone">
            <span>
              Phone / WhatsApp
              {lead.mark("phone")}
            </span>
          </Label>
          <div className="relative">
            <Phone
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-orange"
              aria-hidden="true"
            />
            <Input
              id="contact-phone"
              {...lead.field("phone")}
              type="tel"
              name="phone"
              placeholder="Phone / WhatsApp"
              required
              className="h-12 rounded-xl border-navy/15 bg-white pl-10 shadow-sm"
            />
          </div>
          {lead.error("phone")}
        </div>
        <div className="group space-y-1.5">
          <Label htmlFor="contact-course">
            <span>
              Course of Interest
              {lead.mark("course")}
            </span>
          </Label>
          <div className="relative">
            <BookOpen
              className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-orange"
              aria-hidden="true"
            />
            <Select name="course">
              <SelectTrigger
                id="contact-course"
                {...lead.field("course")}
                className="h-12 w-full rounded-xl border-navy/15 bg-white pl-10 shadow-sm"
              >
                <SelectValue placeholder="Select Course" />
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
      </div>
      <div className="group space-y-1.5">
        <Label htmlFor="contact-message">
          Message <span className="font-normal text-navy-deep/75">(optional)</span>
        </Label>
        <Textarea
          id="contact-message"
          {...lead.field("message")}
          name="message"
          rows={3}
          placeholder="Tell us briefly what you need"
          className="min-h-[88px] rounded-xl border-navy/15 bg-white px-3.5 py-2.5 shadow-sm"
        />
        {lead.error("message")}
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={lead.sending}
        className="w-full rounded-xl bg-[#0066b2] text-white shadow-md shadow-[#0066b2]/20 transition hover:bg-[#0066b2]/90 hover:shadow-lg hover:shadow-[#0066b2]/30"
      >
        {lead.sending ? (
          <>
            Sending… <Loader2 className="ml-2 h-4 w-4 animate-spin" aria-hidden="true" />
          </>
        ) : (
          <>
            Send Enquiry <Send className="ml-2 h-4 w-4" aria-hidden="true" />
          </>
        )}
      </Button>
      {lead.status()}
    </form>
  );
}
