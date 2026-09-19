"use client";

import { useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle2, Loader2, Mail, Phone, User, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FieldShell, Honeypot, RequiredNote, TextField } from "@/components/forms/fields";
import { CoursePicker } from "@/components/forms/course-picker";
import { OTHER_OPTION, validateCorporateEnquiry, type EnquiryErrors } from "@/lib/enquiry";
import { submitEnquiry } from "@/lib/submit-enquiry";

const corporateBenefits = [
  "When employees are properly trained, they are more productive because they miss fewer hours due to illness and accidents.",
  "Safety awareness and appreciation for safety measures that work to reduce your legal liabilities.",
  "Active employee participation to improve workplace health and safety culture and behaviors.",
];

type Values = {
  name: string;
  email: string;
  phone: string;
  teamSize: string;
  courses: string[];
  otherCourse: string;
};
type FieldName = keyof EnquiryErrors;

const initialValues: Values = { name: "", email: "", phone: "", teamSize: "", courses: [], otherCourse: "" };

const ids = {
  name: "corporate-name",
  email: "corporate-email",
  phone: "corporate-phone",
  teamSize: "corporate-team-size",
  courses: "corporate-certifications",
  otherCourse: "corporate-other-certification",
  location: "corporate-location",
} satisfies Record<FieldName, string>;

// On submit, focus moves to the first field in this order that has an error.
const fieldOrder: FieldName[] = ["name", "teamSize", "email", "phone", "courses", "otherCourse"];

export function CorporateTraining() {
  const router = useRouter();
  const [values, setValues] = useState<Values>(initialValues);
  const [honeypot, setHoneypot] = useState("");
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [attempted, setAttempted] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverErrors, setServerErrors] = useState<EnquiryErrors>({});
  const [sendError, setSendError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const errors = { ...serverErrors, ...validateCorporateEnquiry(values) };
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
    if (focusFirstInvalid(validateCorporateEnquiry(values))) return;

    setSending(true);
    const result = await submitEnquiry({ type: "corporate", ...values, website: honeypot });
    if (result.ok) {
      router.push("/thank-you?back=%2F");
      return;
    }
    setSending(false);
    setSendError(result.message);
    if (result.errors) {
      setServerErrors(result.errors);
      focusFirstInvalid(result.errors);
    }
  };

  const otherSelected = values.courses.includes(OTHER_OPTION);
  const hasErrors = fieldOrder.some((field) => errors[field]);

  return (
    <section id="corporate-training" className="scroll-mt-24 bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-14">
        <div>
          <h2 className="font-heading text-[clamp(1.75rem,6.5vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.025em] text-navy-deep text-balance">
            These courses will raise the profile of health and safety in your organization, which
            will help
          </h2>
          <ul className="mt-6 space-y-3">
            {corporateBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-base leading-relaxed text-navy-deep/80">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#0066b2]" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
          <div className="relative mt-8 hidden aspect-[16/9] overflow-hidden rounded-[24px] sm:block">
            <Image
              src="/Hands-on-Experience/constructions.webp"
              alt="Site team in hard hats and hi-vis vests during on-site safety training"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          className="relative rounded-[24px] bg-white p-6 shadow-[0_24px_48px_-24px_rgba(18,59,109,0.45)] ring-1 ring-navy-deep/5 sm:p-8"
        >
          <Users className="h-10 w-10 text-[#0066b2]" aria-hidden="true" />
          <h3 className="mt-4 font-heading text-2xl font-extrabold tracking-[-0.02em] text-navy-deep">
            Request a Corporate Training Quote
          </h3>
          <p className="mt-2 text-sm text-[#000]">
            Tell us your team size and required certifications — we&apos;ll put together a
            tailored proposal.
          </p>
          <RequiredNote className="mt-3" />
          <Honeypot value={honeypot} onChange={setHoneypot} />

          <div className="mt-5 space-y-4">
            <div className="grid gap-4 sm:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
              <TextField
                id={ids.name}
                name="name"
                label="Contact Name"
                icon={User}
                placeholder="Contact Name"
                autoComplete="name"
                value={values.name}
                error={visibleError("name")}
                onChange={(value) => set("name", value)}
                onBlur={() => touch("name")}
              />
              <TextField
                id={ids.teamSize}
                name="teamSize"
                label="Team Size"
                icon={Users}
                placeholder="e.g. 25"
                inputMode="numeric"
                value={values.teamSize}
                error={visibleError("teamSize")}
                onChange={(value) => set("teamSize", value.replace(/[^\d]/g, ""))}
                onBlur={() => touch("teamSize")}
              />
            </div>
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
                label="Phone"
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

            <FieldShell id={ids.courses} label="Required Certifications" error={visibleError("courses")}>
              <CoursePicker
                id={ids.courses}
                title="Required Certifications"
                noun="certification"
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

            {otherSelected && (
              <TextField
                id={ids.otherCourse}
                name="otherCourse"
                label="Other Certification"
                placeholder="Type the certification or course you need"
                value={values.otherCourse}
                error={visibleError("otherCourse")}
                onChange={(value) => set("otherCourse", value)}
                onBlur={() => touch("otherCourse")}
              />
            )}
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
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </>
            )}
          </Button>

          <div aria-live="polite">
            {sendError ? (
              <p className="mt-4 text-sm font-medium text-[#d92d20]">{sendError}</p>
            ) : (
              attempted &&
              hasErrors && <p className="mt-4 text-sm font-medium text-[#d92d20]">Please fix the highlighted fields above.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
