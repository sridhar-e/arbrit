import Image from "next/image";

const sectors = [
  {
    name: "Construction & Infrastructure",
    image: "/general-safety/constructions.webp",
    note: "Work at height, lifting operations, excavation and Trakhees / municipality approvals.",
  },
  {
    name: "Oil, Gas & Petrochemical",
    image: "/general-safety/Oil-and-gas.webp",
    note: "HAZOP and SIL studies, permit-to-work systems, confined space and hot work control.",
  },
  {
    name: "Manufacturing",
    image: "/general-safety/Forklift-Operator.webp",
    note: "Machine guarding, LOTO, materials handling and ISO 45001 system build-out.",
  },
  {
    name: "Healthcare",
    image: "/general-safety/first-aid.webp",
    note: "Infection control interfaces, emergency response planning and staff competency records.",
  },
  {
    name: "Facilities Management",
    image: "/Hands-on-Experience/Crane-slider.webp",
    note: "Contractor control, lifting equipment registers and planned inspection regimes.",
  },
  {
    name: "Logistics & Warehousing",
    image: "/general-safety/Rescue-Training.webp",
    note: "Traffic management, racking inspection, fire strategy and rescue arrangements.",
  },
];

/**
 * Proof: the sectors our consultants know, as hairline rows with a small photo. Most sources are 350px wide,
 * so the photos stay thumbnail-sized rather than stretched into large panels.
 */
export function ConsultancySectors() {
  return (
    <section aria-labelledby="consultancy-sectors-heading" className="bg-[#f5f7fa] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <h2
          id="consultancy-sectors-heading"
          className="font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-navy-deep text-balance"
        >
          Industries we work in
        </h2>
        <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-navy-deep/80 md:text-lg">
          The hazards differ; the discipline does not. These are the sectors our consultants know from the inside.
        </p>

        <ul className="mt-10 grid border-b border-navy-deep/10 md:mt-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
          {sectors.map((sector) => (
            <li key={sector.name} className="flex items-center gap-5 border-t border-navy-deep/10 py-5 md:py-6">
              <span className="relative block h-20 w-24 shrink-0 overflow-hidden rounded-2xl shadow-[0_18px_40px_-28px_rgba(18,59,109,0.5)] md:h-24 md:w-32">
                <Image
                  src={sector.image}
                  alt={`${sector.name} HSE consultancy by Arbrit Safety in Dubai, Abu Dhabi and Saudi Arabia`}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </span>
              <div className="min-w-0">
                <h3 className="font-heading text-lg font-bold leading-snug text-navy-deep md:text-xl">{sector.name}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-navy-deep/80">{sector.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
