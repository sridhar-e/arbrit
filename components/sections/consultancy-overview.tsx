import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, MapPin } from "lucide-react";

// Consultancy-specific credentials. Headline scale figures live in the proof strip above.
const credentials = [
  { icon: MapPin, text: "3 offices: Dubai, Abu Dhabi and Riyadh" },
  { icon: Building2, text: "6 sectors, from construction to healthcare" },
  { icon: BadgeCheck, text: "Approved and recognised by Trakhees, DM and RAKEZ" },
];

const displayHeading =
  "font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-balance";

/** What we do: copy and credentials beside a site photo, with a second photo layered behind on desktop. */
export function ConsultancyOverview() {
  return (
    <section aria-labelledby="consultancy-overview-heading" className="bg-[#f5f7fa] py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
        <div>
          <h2 id="consultancy-overview-heading" className={`${displayHeading} text-navy-deep`}>
            HSE consultants who work on your site, not from a template
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-navy-deep/80 md:text-lg">
            Arbrit Safety Training &amp; Consultancy has spent two decades helping contractors, operators and
            facility owners across the UAE and Saudi Arabia build health and safety systems that hold up to client
            audits, regulator inspections and, most importantly, real conditions on site.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-deep/80">
            Because we also run one of the region&apos;s largest accredited training centres, any competency gap an
            audit uncovers can be closed in-house: IOSH, NEBOSH, LEEA, Highfield and Scaffold Training Institute
            programmes delivered by the same team that wrote your findings.
          </p>

          <ul className="mt-8 max-w-xl divide-y divide-navy-deep/10 border-y border-navy-deep/10">
            {credentials.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-4 py-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2]">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="text-[15px] font-medium leading-snug text-navy-deep">{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#consultancy-enquiry"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#0066b2] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#00589a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
            >
              Book a discovery call <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="#consultancy-services"
              className="inline-flex h-12 items-center rounded-full border border-[#0066b2] px-6 text-sm font-semibold text-[#0066b2] transition-colors hover:bg-[#0066b2]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
            >
              See our services
            </Link>
          </div>
        </div>

        <div className="relative lg:pl-10">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-[0_24px_48px_-24px_rgba(18,59,109,0.45)] lg:aspect-[4/5]">
            <Image
              src="/hero/slide-1-construction-safety.jpg"
              alt="Arbrit HSE team in hi-vis vests and hard hats on a construction site in Dubai"
              fill
              sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 42vw, 100vw"
              className="object-cover object-[48%_center]"
            />
          </div>
          {/* Desktop only: the source is 350px wide, so it stays a small tilted inset. */}
          <div className="absolute -bottom-8 -left-6 hidden w-56 rotate-[-3deg] overflow-hidden rounded-[20px] shadow-[0_24px_48px_-24px_rgba(18,59,109,0.45)] ring-4 ring-[#f5f7fa] lg:block xl:-left-10">
            <div className="relative aspect-[7/6]">
              <Image
                src="/general-safety/Oil-and-gas.webp"
                alt="Arbrit HSE support team on an oil and gas facility in the UAE"
                fill
                sizes="14rem"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
