"use client";

import { useLeadForm } from "@/components/forms/use-lead-form";
import { LeeaLeadFields, LeeaRequiredNote } from "@/components/sections/leea-lead-fields";

/** Admission enquiry card in the LEEA page heroes. "Book your seat" links jump to #leea-name. */
export function LeeaFoundationEnquiryForm() {
  const lead = useLeadForm("leea-foundation", "leea");

  return (
    <div className="rounded-[24px] bg-white p-5 text-navy-deep shadow-[0_24px_48px_-24px_rgba(18,59,109,0.45)] sm:p-8">
      <h2 id="leea-form-heading" className="font-heading text-2xl font-extrabold leading-tight tracking-[-0.02em]">
        Secure your spot in our upcoming batch
      </h2>
      <LeeaRequiredNote />

      <form {...lead.formProps} aria-labelledby="leea-form-heading" className="mt-6 w-full">
        <LeeaLeadFields lead={lead} idPrefix="leea" submitLabel="Request course details" />
      </form>
    </div>
  );
}
