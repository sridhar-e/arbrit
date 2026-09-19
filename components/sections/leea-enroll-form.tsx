"use client";

import { useLeadForm } from "@/components/forms/use-lead-form";
import { LeeaLeadFields, LeeaRequiredNote } from "@/components/sections/leea-lead-fields";

/** White enrolment card for the Site Navy "Enroll today" band (the quick-enquiry pattern). */
export function LeeaEnrollForm() {
  const lead = useLeadForm("leea-enroll", "enroll");

  return (
    <div className="rounded-[24px] bg-white p-5 text-navy-deep shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] sm:p-8">
      <p id="enroll-form-heading" className="font-heading text-2xl font-extrabold leading-tight tracking-[-0.02em]">
        Start your certification
      </p>
      <p className="mt-1.5 text-[15px] text-navy-deep/80">Join the elite class of LEEA certified professionals.</p>
      <LeeaRequiredNote />

      <form {...lead.formProps} aria-labelledby="enroll-form-heading" className="mt-6 w-full">
        <LeeaLeadFields lead={lead} idPrefix="enroll" submitLabel="Enquire now" />
      </form>
    </div>
  );
}
