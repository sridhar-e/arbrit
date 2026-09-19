import { Award, BookOpenCheck, Clock, Users, type LucideIcon } from "lucide-react";
import { stats } from "@/lib/data";

const figure = (label: string, fallback: number) =>
  (stats.find((stat) => stat.label === label)?.value ?? fallback).toLocaleString("en-US");

const proof: { icon: LucideIcon; figure: string; text: string }[] = [
  {
    icon: Clock,
    figure: `${figure("Years of Experience", 20)}+ years`,
    text: "advising on HSE across the Gulf",
  },
  {
    icon: Users,
    figure: `${figure("Students Trained", 15000)}+`,
    text: "professionals trained in Dubai, Abu Dhabi and Saudi Arabia",
  },
  {
    icon: Award,
    figure: `${figure("Course Pass Rate", 98)}%`,
    text: "course pass rate: competency that stands up to audit",
  },
  {
    icon: BookOpenCheck,
    figure: `${figure("Accredited Courses", 50)}+`,
    text: "accredited courses to close any gap we find on site",
  },
];

/** Four proof lines under the Consultancy hero, split by hairlines (same pattern as the Courses page). */
export function ConsultancyTrustStrip() {
  return (
    <section aria-label="Why clients choose Arbrit" className="bg-white">
      <ul className="mx-auto grid max-w-7xl divide-y divide-navy-deep/10 px-5 py-6 sm:px-6 lg:grid-cols-4 lg:divide-x lg:divide-y-0 lg:py-10">
        {proof.map(({ icon: Icon, figure, text }) => (
          <li key={text} className="flex items-center gap-4 py-4 lg:px-6 lg:py-0 lg:first:pl-0 lg:last:pr-0">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2]">
              <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <p className="text-[15px] leading-snug text-navy-deep/80">
              <span className="block font-heading text-2xl font-extrabold leading-tight tracking-[-0.02em] text-navy-deep">
                {figure}
              </span>
              {text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
