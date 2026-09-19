import { MessageCircle, Phone } from "lucide-react";
import { NavyBandTexture } from "@/components/ui/navy-band-texture";
import {
  leeaDisplayHeading,
  leeaGhostPill,
  leeaLead,
  leeaLightPill,
} from "@/components/sections/leea-styles";

const edge = [
  {
    title: "Technical Precision",
    description:
      "Our curriculum is meticulously aligned with the latest LEEA technical standards and global safety regulations.",
  },
  {
    title: "Expert Mentorship",
    description:
      "Learn from LEEA approved instructors with decades of hands-on experience in oil & gas, construction, and offshore.",
  },
  {
    title: "18+ Years Legacy",
    description:
      "Established in 2006, we have a proven track record of empowering thousands of safety professionals across the GCC.",
  },
  {
    title: "Global Recognition",
    description: "Our LEEA certificates are internationally recognised, opening doors to career opportunities worldwide.",
  },
  {
    title: "Elite Facilities",
    description: "State-of-the-art practical training areas and modern classrooms designed for immersive learning.",
  },
  {
    title: "Career Growth",
    description: "Beyond training, we provide a pathway for advanced LEEA diplomas and professional networking.",
  },
];

/**
 * "Why choose Arbrit?": the page's Site Navy band. Merges the former "Trusted worldwide" intro and
 * "The Arbrit Edge" grid, which made the same case twice, into one set of numbered rows.
 */
export function LeeaWhyArbrit() {
  return (
    <section
      aria-labelledby="leea-why-heading"
      className="relative isolate overflow-hidden bg-navy-deep py-16 text-white md:py-24"
    >
      <NavyBandTexture />
      {/* Phones read heading, the six rows, then the buttons; from 1024px the rows sit beside both. */}
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-x-16 lg:gap-y-8">
        <div className="lg:self-end">
          <h2 id="leea-why-heading" className={leeaDisplayHeading}>
            Why choose Arbrit?
          </h2>
          <p className={`mt-5 max-w-xl text-white/85 ${leeaLead}`}>
            Arbrit Safety is a globally established health and safety training and consultancy provider with a strong
            presence across the UAE and the Middle East. Since its inception in 2006, Arbrit has trained thousands of
            professionals and built a reputation for delivering internationally accredited programmes aligned with
            leading bodies such as LEEA and IOSH.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85">
            We go beyond simple certification to ensure every student gains real-world competence.
          </p>
        </div>

        <ol className="grid gap-x-10 border-b border-white/15 sm:grid-cols-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
          {edge.map(({ title, description }, index) => (
            <li key={title} className="flex gap-5 border-t border-white/15 py-6 sm:block md:py-8">
              <span
                aria-hidden="true"
                className="w-12 shrink-0 font-heading text-[44px] font-extrabold leading-none tracking-[-0.04em] text-white sm:block"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="sm:mt-4">
                <h3 className="font-heading text-xl font-extrabold leading-snug tracking-[-0.01em]">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/80">{description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="flex flex-wrap gap-3 lg:col-start-1 lg:row-start-2 lg:self-start">
          <a href="#leea-name" className={leeaLightPill}>
            Enquire now
          </a>
          <a href="tel:+971586695300" className={leeaGhostPill}>
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call for consultation
          </a>
          <a
            href="https://wa.me/971586695300"
            target="_blank"
            rel="noopener noreferrer"
            className={leeaGhostPill}
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
