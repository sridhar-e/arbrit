import { ArrowRight, Clock3, MapPin } from "lucide-react";
import { NavyBandTexture } from "@/components/ui/navy-band-texture";
import { LeeaEnrollForm } from "@/components/sections/leea-enroll-form";
import { leeaDisplayHeading, leeaLead } from "@/components/sections/leea-styles";

/** Closing Site Navy band: heading and office details beside the white enrolment card. */
export function LeeaEnrollToday() {
  return (
    <section
      aria-labelledby="leea-enroll-heading"
      className="relative isolate overflow-hidden bg-navy-deep py-16 text-white md:py-24"
    >
      <NavyBandTexture gridAt="20% 40%" />
      {/* Phones read heading, form, then office details; from 1024px the form sits beside both. */}
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-x-16 lg:gap-y-8">
        <div className="lg:self-end">
          <h2 id="leea-enroll-heading" className={leeaDisplayHeading}>
            Secure your future in lifting safety
          </h2>
          <p className={`mt-5 max-w-lg text-white/85 ${leeaLead}`}>
            Arbrit Safety is the premier destination for LEEA certification in the Middle East. Our graduates are
            highly sought after in Oil &amp; Gas, Construction, and Offshore sectors worldwide.
          </p>
        </div>

        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
          <LeeaEnrollForm />
        </div>

        <ul className="grid max-w-lg gap-3 lg:self-start">
          <li className="flex items-start gap-4 rounded-2xl bg-white/[0.07] px-4 py-4 ring-1 ring-white/10">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
              <MapPin className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-[13px] text-white/75">Regional Headquarters</span>
              <span className="mt-0.5 block text-[15px] font-medium leading-snug">
                Office 305, Al Twar Center, Al Nahda Street, Al Qusais, Dubai, UAE
              </span>
            </span>
          </li>
          <li>
            <a
              href="tel:+971586695300"
              className="flex items-start gap-4 rounded-2xl bg-white/[0.07] px-4 py-4 ring-1 ring-white/10 transition-colors hover:bg-white/[0.12] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Clock3 className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[13px] text-white/75">24/7 Support</span>
                <span className="mt-0.5 block text-[15px] leading-snug">
                  Message us for instant course details &amp; availability.
                </span>
                <span className="mt-1 block font-semibold tracking-wide">+971 58 669 5300</span>
              </span>
              <ArrowRight className="mt-3 h-4 w-4 shrink-0 text-white/60" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
