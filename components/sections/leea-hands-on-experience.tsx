import Image from "next/image";
import { leeaDisplayHeading, leeaLead } from "@/components/sections/leea-styles";

const gallery = [
  // Portrait sources, so the 4:5 panels keep the whole scene instead of a sliver of a wide photo.
  { image: "/home/step-practise.webp", title: "Practical Lifting Area" },
  { image: "/home/step-learn.webp", title: "Modern Classrooms" },
  { image: "/home/step-assess.webp", title: "Safety Inspection Lab" },
  { image: "/home/step-certified.webp", title: "Certification Ceremony" },
];

/** Learning environment: four photo panels with the navy scrim under each caption. */
export function LeeaHandsOnExperience() {
  return (
    <section aria-labelledby="leea-environment-heading" className="bg-[#f5f7fa] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <h2 id="leea-environment-heading" className={`${leeaDisplayHeading} text-navy-deep`}>
          Our learning environment
        </h2>
        <p className={`mt-5 max-w-xl text-navy-deep/80 ${leeaLead}`}>
          Premium facilities designed to bridge the gap between theoretical knowledge and industrial application.
        </p>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 md:mt-12 lg:grid-cols-4 lg:gap-6">
          {gallery.map(({ image, title }) => (
            <li
              key={title}
              className="relative flex aspect-[4/5] items-end overflow-hidden rounded-[20px] p-4 shadow-[0_18px_40px_-28px_rgba(18,59,109,0.5)] md:p-6"
            >
              <Image
                src={image}
                alt={`${title} — LEEA lifting equipment training in progress at the Arbrit Safety centre in Dubai, UAE`}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(0deg,#123b6d_0%,rgba(18,59,109,0.9)_14%,rgba(18,59,109,0.25)_38%,rgba(18,59,109,0)_55%)]"
              />
              <p className="relative font-heading text-[15px] font-bold leading-snug text-white md:text-lg">{title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
