import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { pageHeaderImages } from "@/lib/page-images";
import { ConsultancyEnquiry } from "@/components/sections/consultancy-enquiry";
import { ConsultancyOverview } from "@/components/sections/consultancy-overview";
import { ConsultancyProcess } from "@/components/sections/consultancy-process";
import { ConsultancySectors } from "@/components/sections/consultancy-sectors";
import { ConsultancyServices } from "@/components/sections/consultancy-services";
import { ConsultancyTeam } from "@/components/sections/consultancy-team";
import { ConsultancyTrustStrip } from "@/components/sections/consultancy-trust-strip";
import { OfficesContactBlock } from "@/components/sections/offices-contact-block";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "HSE Consultancy Services | Audits, HAZOP & SIL, Project Support",
  description:
    "Independent HSE consultancy in Dubai, Abu Dhabi and Saudi Arabia: safety audits, HAZOP and SIL studies, ISO 45001 systems, risk assessment and project HSE support.",
  path: "/consultancy",
});

const dubaiPhone =
  contactInfo.phones.find((phone) => phone.label === "Dubai")?.number ?? contactInfo.phones[0].number;

export default function ConsultancyPage() {
  return (
    <>
      <PageHeader
        title="HSE Consultancy"
        eyebrow="Dubai · Abu Dhabi · Kingdom of Saudi Arabia"
        description="Cut your risk, pass the audit, and get your people home safe — with HSE consultants who walk your site, not just your paperwork."
        {...pageHeaderImages.consultancy}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Consultancy" }]}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-white font-semibold text-[#0066b2] hover:bg-white/90">
            <Link href="#consultancy-enquiry">
              Request a Consultation <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/70 bg-transparent font-semibold text-white hover:bg-white/10"
          >
            <Link href={`tel:${dubaiPhone.replace(/\s/g, "")}`}>
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              {dubaiPhone}
            </Link>
          </Button>
        </div>
      </PageHeader>

      {/* The story: what we do, how we work, who we are, proof, then the enquiry. */}
      <ConsultancyTrustStrip />
      <ConsultancyOverview />
      <ConsultancyServices />
      <ConsultancyProcess />
      <ConsultancyTeam />
      <ConsultancySectors />
      <ConsultancyEnquiry />

      <section aria-labelledby="consultancy-contact-heading" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div>
              <h2
                id="consultancy-contact-heading"
                className="font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-navy-deep text-balance"
              >
                Contact details
              </h2>
              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-navy-deep/80 md:text-lg">
                Three offices across the UAE and Saudi Arabia. Call the one nearest your site, or send us the details
                and we will route your enquiry to the right consultant.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:shrink-0">
              <Link
                href="#consultancy-enquiry"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[#0066b2] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#00589a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
              >
                Request a Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href={`tel:${dubaiPhone.replace(/\s/g, "")}`}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-[#0066b2] px-6 text-sm font-semibold text-[#0066b2] transition-colors hover:bg-[#0066b2]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Talk to our consultants
              </Link>
            </div>
          </div>
          <div className="mt-10">
            <OfficesContactBlock showMaps />
          </div>
        </div>
      </section>
    </>
  );
}
