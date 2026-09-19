import Image from "next/image";
import { leeaDisplayHeading, leeaLead } from "@/components/sections/leea-styles";

const outcomes = [
  "Understand key legislation, standards, and terminology",
  "Identify different types of lifting equipment & applications",
  "Recognise roles and responsibilities within lifting teams",
  "Apply basic lifting principles (Load Weight & CoG)",
  "Identify hazards and apply control measures",
  "Understand inspection awareness, tagging, and traceability",
  "Communicate effectively using standard lifting signals",
  "Demonstrate awareness of risk assessment & lift planning",
];

/** Learning outcomes: a photo panel beside numbered hairline rows. */
export function LeeaCompetenceExcellence() {
  return (
    <section aria-labelledby="leea-outcomes-heading" className="bg-[#f5f7fa] py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="leea-outcomes-heading" className={`${leeaDisplayHeading} text-navy-deep`}>
            Learning outcomes
          </h2>
          <p className={`mt-5 max-w-xl text-navy-deep/80 ${leeaLead}`}>
            Upon successful completion, participants will be able to demonstrate mastery in critical lifting
            operation facets.
          </p>
          <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-[24px] shadow-[0_24px_48px_-24px_rgba(18,59,109,0.45)]">
            <Image
              src="/course/LEEA-Appointed-Lifting-Person.jpg"
              alt="LEEA lifting equipment training in progress, with delegates inspecting slings and shackles in Dubai, UAE"
              fill
              sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <ol className="divide-y divide-navy-deep/10 border-y border-navy-deep/10 lg:self-center">
          {outcomes.map((outcome, index) => (
            <li key={outcome} className="flex items-baseline gap-5 py-4 md:gap-6 md:py-5">
              <span
                aria-hidden="true"
                className="w-9 shrink-0 font-heading text-2xl font-extrabold leading-none tracking-[-0.03em] text-[#0066b2] md:w-11 md:text-[28px]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-base font-medium leading-snug text-navy-deep md:text-[17px]">{outcome}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
