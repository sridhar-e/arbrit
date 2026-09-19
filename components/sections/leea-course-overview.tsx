import { Award, BadgeCheck, Clock, Users, type LucideIcon } from "lucide-react";
import { leeaDisplayHeading, leeaLead, leeaPrimaryPill } from "@/components/sections/leea-styles";

type Detail = { icon: LucideIcon; label: string; description: string };

const overviews: Record<"fou" | "lac", { aim: string; details: Detail[] }> = {
  fou: {
    aim: "To provide participants with a clear understanding of lifting equipment, industry terminology, and safe working practices, enabling them to support lifting operations effectively.",
    details: [
      { icon: Clock, label: "Duration", description: "3 Days of intensive training." },
      { icon: Award, label: "Accreditation", description: "LEEA Approved (Lifting Equipment Engineers Association)." },
      {
        icon: Users,
        label: "Who Should Attend",
        description: "Beginners, safety assistants, technicians, and entry-level workers.",
      },
    ],
  },
  lac: {
    aim: "To equip participants with advanced technical knowledge and practical skills to inspect, assess, and verify lifting accessories, ensuring they meet international safety standards and remain fit for purpose in demanding operational environments.",
    details: [
      {
        icon: BadgeCheck,
        label: "Entry Requirement",
        description:
          "Completion of the LEEA Foundation course or previous Part 1 Entry (P1E) qualification. Participants must be over 16 years of age.",
      },
      { icon: Clock, label: "Duration", description: "5 Days" },
      { icon: Award, label: "Accreditation", description: "LEEA Approved (Lifting Equipment Engineers Association)." },
      {
        icon: Users,
        label: "Who Should Attend",
        description: "Inspectors, technicians, engineers, and safety professionals.",
      },
    ],
  },
};

/** Course aim beside the key facts as hairline rows (not icon cards). */
export function LeeaCourseOverview({ course }: { course: "fou" | "lac" }) {
  const { aim, details } = overviews[course];

  return (
    <section aria-labelledby="leea-overview-heading" className="bg-white py-16 md:py-24">
      {/* Phones read heading, facts, then the button; from 1024px the facts sit beside both. */}
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8">
        <div className="lg:self-end">
          <h2 id="leea-overview-heading" className={`${leeaDisplayHeading} text-navy-deep`}>
            Course overview &amp; aim
          </h2>
          <p className={`mt-5 max-w-xl text-navy-deep/80 ${leeaLead}`}>{aim}</p>
        </div>

        <dl className="divide-y divide-navy-deep/10 border-y border-navy-deep/10 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
          {details.map(({ icon: Icon, label, description }) => (
            <div key={label} className="flex gap-4 py-5 md:gap-5 md:py-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2]">
                <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <dt className="font-heading text-lg font-bold leading-snug text-navy-deep">{label}</dt>
                <dd className="mt-1 text-base leading-relaxed text-navy-deep/80">{description}</dd>
              </div>
            </div>
          ))}
        </dl>

        <div className="lg:self-start">
          <a href="#leea-name" className={leeaPrimaryPill}>
            Book admission now
          </a>
        </div>
      </div>
    </section>
  );
}
