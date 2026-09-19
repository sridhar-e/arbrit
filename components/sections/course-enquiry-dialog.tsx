"use client";

import { useRef, useState, type FormEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BookOpen, Loader2, Mail, Phone, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChoicePills, FieldShell, Honeypot, RequiredNote, TextField } from "@/components/forms/fields";
import { CoursePicker } from "@/components/forms/course-picker";
import { courseNameFromId } from "@/lib/course-catalog";
import { OTHER_OPTION, trainingLocations, validateCourseEnquiry, type EnquiryErrors } from "@/lib/enquiry";
import { submitEnquiry } from "@/lib/submit-enquiry";

/**
 * Course enquiry popup for the Courses page. It opens when the URL carries `?enquire=<course-id>`
 * (set by the Courses menu) with that course already ticked. `?enquire=other&other=<text>` (from a
 * search with no results) ticks "Other" and fills in the text. Closing it strips the parameters, so
 * a refresh or Back does not reopen it. Must be rendered inside a <Suspense> boundary.
 */
export function CourseEnquiryDialog() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const enquire = searchParams.get("enquire");
  const otherText = enquire === "other" ? (searchParams.get("other") ?? "").trim().slice(0, 120) : "";

  const close = () => router.replace(pathname, { scroll: false });

  return (
    <Dialog open={enquire !== null} onOpenChange={(open) => !open && close()}>
      <DialogContent className="max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-[calc(100%-1.5rem)] gap-0 overflow-y-auto overscroll-contain rounded-[24px] bg-white p-0 sm:max-w-lg">
        {/* Keyed by the course so picking a different course from the menu starts a fresh form. */}
        {enquire !== null && (
          <EnquiryForm key={`${enquire}:${otherText}`} clickedCourse={courseNameFromId(enquire)} otherText={otherText} />
        )}
      </DialogContent>
    </Dialog>
  );
}

type Values = {
  name: string;
  email: string;
  phone: string;
  courses: string[];
  otherCourse: string;
  location: string;
};
type FieldName = keyof EnquiryErrors;

const ids = {
  name: "enquiry-popup-name",
  email: "enquiry-popup-email",
  phone: "enquiry-popup-phone",
  courses: "enquiry-popup-courses",
  otherCourse: "enquiry-popup-other-course",
  location: "enquiry-popup-location",
  teamSize: "enquiry-popup-team-size",
} satisfies Record<FieldName, string>;

const fieldOrder: FieldName[] = ["name", "email", "phone", "courses", "otherCourse", "location"];

function EnquiryForm({ clickedCourse, otherText = "" }: { clickedCourse?: string; otherText?: string }) {
  const router = useRouter();
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    phone: "",
    courses: clickedCourse ? [clickedCourse] : otherText ? [OTHER_OPTION] : [],
    otherCourse: otherText,
    location: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [attempted, setAttempted] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverErrors, setServerErrors] = useState<EnquiryErrors>({});
  const [sendError, setSendError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const errors = { ...serverErrors, ...validateCourseEnquiry(values) };
  const visibleError = (field: FieldName) => ((attempted || touched[field]) && errors[field]) || undefined;

  const set = <K extends keyof Values>(field: K, value: Values[K]) => {
    setValues((current) => ({ ...current, [field]: value }));
    setServerErrors((current) => ({ ...current, [field]: undefined }));
    setSendError("");
  };
  const touch = (field: FieldName) => setTouched((current) => ({ ...current, [field]: true }));

  const focusFirstInvalid = (found: EnquiryErrors) => {
    const first = fieldOrder.find((field) => found[field]);
    if (first) formRef.current?.querySelector<HTMLElement>(`#${ids[first]}`)?.focus();
    return Boolean(first);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) return;
    setAttempted(true);
    if (focusFirstInvalid(validateCourseEnquiry(values))) return;

    setSending(true);
    const result = await submitEnquiry({ type: "course", ...values, clickedCourse, website: honeypot });
    if (result.ok) {
      router.push("/thank-you?back=%2Fcourses");
      return;
    }
    setSending(false);
    setSendError(result.message);
    if (result.errors) {
      setServerErrors(result.errors);
      focusFirstInvalid(result.errors);
    }
  };

  const hasErrors = fieldOrder.some((field) => errors[field]);

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="relative p-5 sm:p-7">
      <DialogHeader className="pr-8 text-left">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2]">
          <BookOpen className="h-5 w-5" aria-hidden="true" />
        </span>
        <DialogTitle className="mt-3 font-heading text-2xl font-extrabold tracking-[-0.02em] text-navy-deep">
          Enquire about this course
        </DialogTitle>
        <DialogDescription className="text-sm text-navy-deep/75">
          {clickedCourse
            ? `Tell us a little about you and we'll send dates and fees for ${clickedCourse}.`
            : otherText
              ? `Tell us a little about you and we'll check how we can help with "${otherText}".`
              : "Tell us a little about you and the courses you need, and we'll send dates and fees."}
        </DialogDescription>
      </DialogHeader>
      <RequiredNote className="mt-3" />
      <Honeypot value={honeypot} onChange={setHoneypot} />

      <div className="mt-5 space-y-4">
        <TextField
          id={ids.name}
          name="name"
          label="Full Name"
          icon={User}
          placeholder="Full Name"
          autoComplete="name"
          value={values.name}
          error={visibleError("name")}
          onChange={(value) => set("name", value)}
          onBlur={() => touch("name")}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField
            id={ids.email}
            name="email"
            label="Email"
            icon={Mail}
            type="email"
            placeholder="name@company.com"
            autoComplete="email"
            value={values.email}
            error={visibleError("email")}
            onChange={(value) => set("email", value)}
            onBlur={() => touch("email")}
          />
          <TextField
            id={ids.phone}
            name="phone"
            label="Phone / WhatsApp"
            icon={Phone}
            type="tel"
            placeholder="+971 50 123 4567"
            autoComplete="tel"
            value={values.phone}
            error={visibleError("phone")}
            onChange={(value) => set("phone", value)}
            onBlur={() => touch("phone")}
          />
        </div>

        <FieldShell id={ids.courses} label="Courses of Interest" error={visibleError("courses")}>
          <CoursePicker
            id={ids.courses}
            title="Courses of Interest"
            noun="course"
            value={values.courses}
            onChange={(next) => {
              set("courses", next);
              if (!next.includes(OTHER_OPTION)) set("otherCourse", "");
            }}
            onClose={() => touch("courses")}
            invalid={Boolean(visibleError("courses"))}
            describedBy={visibleError("courses") ? `${ids.courses}-error` : undefined}
          />
        </FieldShell>

        {values.courses.includes(OTHER_OPTION) && (
          <TextField
            id={ids.otherCourse}
            name="otherCourse"
            label="Other Course"
            placeholder="Type the course you need"
            value={values.otherCourse}
            error={visibleError("otherCourse")}
            onChange={(value) => set("otherCourse", value)}
            onBlur={() => touch("otherCourse")}
          />
        )}

        <ChoicePills
          id={ids.location}
          name="location"
          label="Preferred Location"
          options={trainingLocations}
          value={values.location}
          error={visibleError("location")}
          onChange={(value) => {
            set("location", value);
            touch("location");
          }}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={sending}
        className="mt-6 h-12 w-full rounded-full bg-[#0066b2] text-white hover:bg-[#00589a] disabled:opacity-80"
      >
        {sending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" aria-hidden="true" /> Send Enquiry
          </>
        )}
      </Button>

      <div aria-live="polite">
        {sendError ? (
          <p className="mt-4 text-sm font-medium text-[#d92d20]">{sendError}</p>
        ) : (
          attempted && hasErrors && <p className="mt-4 text-sm font-medium text-[#d92d20]">Please fix the highlighted fields above.</p>
        )}
      </div>
    </form>
  );
}
