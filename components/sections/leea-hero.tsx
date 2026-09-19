import { CheckCircle2, ShieldCheck } from "lucide-react";
import { LeeaFoundationEnquiryForm } from "@/components/sections/leea-foundation-enquiry-form";
import { leeaPrimaryPill } from "@/components/sections/leea-styles";

/** LEEA landing-page hero: copy and highlights beside the admission enquiry card. */
export function LeeaHero({ title, lead, highlights }: { title: string; lead: string; highlights: string[] }) {
  return (
    <section id="enquiry" aria-labelledby="leea-hero-heading" className="relative overflow-hidden bg-[#f5f7fa]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0066b2]/10 px-3 py-1 text-[13px] font-semibold text-[#0066b2]">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Authorised LEEA Training Provider
          </span>

          <h1
            id="leea-hero-heading"
            className="mt-5 font-heading text-[clamp(2.25rem,9vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-navy-deep text-balance"
          >
            {title}
          </h1>

          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-navy-deep/80 md:text-lg">{lead}</p>

          <ul className="mt-7 max-w-xl space-y-3">
            {highlights.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[15px] font-medium leading-snug text-navy-deep">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0066b2]" strokeWidth={1.75} aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>

          <a href="#leea-name" className={`mt-8 ${leeaPrimaryPill}`}>
            Book your seat now
          </a>
        </div>

        <LeeaFoundationEnquiryForm />
      </div>
    </section>
  );
}
