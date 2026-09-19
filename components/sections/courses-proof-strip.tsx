import { Award, BookOpenCheck, Users } from "lucide-react";
import { stats } from "@/lib/data";

const figure = (label: string, fallback: number) =>
  (stats.find((stat) => stat.label === label)?.value ?? fallback).toLocaleString("en-US");

const proof = [
  {
    icon: BookOpenCheck,
    figure: `${figure("Accredited Courses", 50)}+`,
    text: "accredited courses in HSE, lifting, scaffolding and fire safety",
  },
  {
    icon: Users,
    figure: `${figure("Students Trained", 15000)}+`,
    text: "professionals trained across Dubai, Abu Dhabi and KSA",
  },
  {
    icon: Award,
    figure: "First",
    text: "LEEA Licensed Training Partner in the UAE and KSA",
  },
];

/** Three proof lines under the Courses hero, split by hairlines; not stat tiles. */
export function CoursesProofStrip() {
  return (
    <section aria-label="Why train with Arbrit" className="bg-white">
      <ul className="mx-auto grid max-w-7xl divide-y divide-navy-deep/10 px-5 py-6 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 md:py-10">
        {proof.map(({ icon: Icon, figure, text }) => (
          <li key={text} className="flex items-center gap-4 py-4 md:px-8 md:py-0 md:first:pl-0 md:last:pr-0">
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
