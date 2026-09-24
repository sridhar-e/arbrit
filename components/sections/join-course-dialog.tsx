"use client";

import type { ReactNode } from "react";
import { BookOpen, GraduationCap, Mail, Phone, Send, User } from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormTrustSignals } from "@/components/ui/form-trust-signals";
import { joinCourseOptions } from "@/lib/data";
import { Honeypot } from "@/components/forms/fields";
import { useLeadForm } from "@/components/forms/use-lead-form";

const fieldClass =
  "h-12 rounded-xl border-transparent bg-[#f5f7fa] pl-10 shadow-none focus-visible:border-[#0066b2] focus-visible:bg-white";
const iconClass =
  "pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-navy-deep/40 transition-colors group-focus-within:text-[#0066b2]";
const labelClass = "text-[13px] font-semibold text-navy-deep";

export function JoinCourseDialog({
  courseTitle,
  preselectCourse,
  trigger,
}: {
  courseTitle: string;
  /** Pre-selects this course in the Course dropdown. Pass the page's course title on course detail pages. */
  preselectCourse?: string;
  trigger?: ReactNode;
}) {
  const courseOptions =
    preselectCourse && !joinCourseOptions.includes(preselectCourse)
      ? [preselectCourse, ...joinCourseOptions]
      : joinCourseOptions;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button
            size="lg"
            className="h-12 rounded-full bg-[#0066b2] px-7 text-white hover:bg-[#00589a]"
          >
            Join Course
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-[calc(100%-1.5rem)] overflow-y-auto overscroll-contain rounded-[24px] bg-white p-5 sm:max-w-lg sm:p-7">
        <DialogHeader className="pr-8 text-left">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2]">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
          <DialogTitle className="mt-3 font-heading text-2xl font-extrabold tracking-[-0.02em] text-navy-deep">
            Join Course
          </DialogTitle>
          <DialogDescription className="text-sm text-navy-deep/75">{courseTitle}</DialogDescription>
        </DialogHeader>
        <FormTrustSignals />
        {/* The dialog unmounts its content when closed, so every opening starts a fresh form. */}
        <JoinCourseForm courseOptions={courseOptions} preselectCourse={preselectCourse} />
      </DialogContent>
    </Dialog>
  );
}

function JoinCourseForm({ courseOptions, preselectCourse }: { courseOptions: string[]; preselectCourse?: string }) {
  const lead = useLeadForm("join-course", "join");

  return (
    <form {...lead.formProps} className="space-y-4">
      <Honeypot />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="group space-y-1.5">
          <Label className={labelClass} htmlFor="join-name"><span>Full Name{lead.mark("name")}</span></Label>
          <div className="relative">
            <User
              className={iconClass}
              aria-hidden="true"
            />
            <Input id="join-name" {...lead.field("name")} name="name" placeholder="Full Name" required className={fieldClass} />
          </div>
          {lead.error("name")}
        </div>
        <div className="group space-y-1.5">
          <Label className={labelClass} htmlFor="join-email"><span>Email{lead.mark("email")}</span></Label>
          <div className="relative">
            <Mail
              className={iconClass}
              aria-hidden="true"
            />
            <Input
              id="join-email"
              {...lead.field("email")}
              type="email"
              name="email"
              placeholder="Email"
              required
              className={fieldClass}
            />
          </div>
          {lead.error("email")}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="group space-y-1.5">
          <Label className={labelClass} htmlFor="join-phone"><span>Phone / WhatsApp{lead.mark("phone")}</span></Label>
          <div className="relative">
            <Phone
              className={iconClass}
              aria-hidden="true"
            />
            <Input
              id="join-phone"
              {...lead.field("phone")}
              type="tel"
              name="phone"
              placeholder="Phone / WhatsApp"
              required
              className={fieldClass}
            />
          </div>
          {lead.error("phone")}
        </div>
        <div className="group space-y-1.5">
          <Label className={labelClass} htmlFor="join-course"><span>Course of Interest{lead.mark("course")}</span></Label>
          <div className="relative">
            <BookOpen
              className={iconClass}
              aria-hidden="true"
            />
            <Select name="course" defaultValue={preselectCourse}>
              <SelectTrigger id="join-course" {...lead.field("course")} className={`w-full data-placeholder:text-navy-deep/70 ${fieldClass}`}>
                <SelectValue placeholder="Select Course" />
              </SelectTrigger>
              <SelectContent>
                {courseOptions.map((course) => (
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
        <Label className={labelClass} htmlFor="join-message">
          Message <span className="font-normal text-navy-deep/75">(optional)</span>
        </Label>
        <Textarea
          id="join-message"
          {...lead.field("message")}
          name="message"
          rows={3}
          placeholder="Tell us briefly what you need"
          className="min-h-[88px] rounded-xl border-transparent bg-[#f5f7fa] px-3.5 py-3 shadow-none focus-visible:border-[#0066b2] focus-visible:bg-white"
        />
        {lead.error("message")}
      </div>
      <Button
        type="submit"
        disabled={lead.sending}
        size="lg"
        className="h-12 w-full rounded-full bg-[#0066b2] text-white hover:bg-[#00589a]"
      >
        {lead.sending ? "Sending…" : "Enquire Now"} <Send className="ml-2 h-4 w-4" aria-hidden="true" />
      </Button>
      {lead.status()}
    </form>
  );
}
