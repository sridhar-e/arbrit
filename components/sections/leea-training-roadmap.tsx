import { Check, Clock } from "lucide-react";
import { leeaDisplayHeading, leeaLead } from "@/components/sections/leea-styles";

type Session = { letter?: string; title: string; duration: string };

const days: { label: string; sessions: Session[] }[] = [
  {
    label: "Day 1",
    sessions: [
      { title: "Foundation Introduction Session", duration: "1 Hour 30 Min" },
      { letter: "A", title: "Legislations and Regulations", duration: "2 Hours 45 Min" },
      { letter: "B", title: "Managing Risk", duration: "2 Hours 15 Min" },
    ],
  },
  {
    label: "Day 2",
    sessions: [
      { letter: "C", title: "Industry Relevant Definitions", duration: "2.5 Hours" },
      { letter: "D", title: "Manufacturing of Lifting Equipment", duration: "1.5 Hours" },
      { letter: "E", title: "Materials and Properties", duration: "2.5 Hours" },
    ],
  },
  {
    label: "Day 3",
    sessions: [
      { letter: "F", title: "Lifting Accessories", duration: "2.5 Hours" },
      { letter: "G", title: "Lifting Appliances", duration: "2 Hours" },
      { letter: "H", title: "Purchasing and Control of Lifting Equipment", duration: "2 Hours" },
    ],
  },
];

const lacModules = [
  {
    label: "Module 1",
    title: "Slinging Accessories",
    topics: [
      "Examiners’ tools and equipment",
      "Types of examination",
      "Textile slings",
      "Chain and chain slings",
      "Wire rope and wire rope slings",
      "Eyebolts",
      "Hoist rings",
      "Shackles",
      "Rigging screws and turnbuckles",
    ],
  },
  {
    label: "Module 2",
    title: "Non-Fixed Load Attachments",
    topics: [
      "Plate clamps",
      "Beam clamps (including traditional types)",
      "Lifting beams",
      "Lifting magnets",
      "Vacuum lifting devices",
      "‘C’ hooks",
      "Crane forks",
      "Lifting inserts",
    ],
  },
];

const intro = {
  fou: "Three days of structured sessions, from legislation and risk through to the purchasing and control of lifting equipment.",
  lac: "Two modules over five days: slinging accessories first, then non-fixed load attachments.",
};

const numeral =
  "w-14 shrink-0 font-heading text-[44px] font-extrabold leading-none tracking-[-0.04em] text-[#0066b2] md:w-24 md:text-6xl";

/** Course modules as numbered rows: the FOU day-by-day timetable, or the two LAC modules. */
export function LeeaTrainingRoadmap({ course }: { course: "fou" | "lac" }) {
  return (
    <section aria-labelledby="leea-modules-heading" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <h2 id="leea-modules-heading" className={`${leeaDisplayHeading} text-navy-deep`}>
          Course modules
        </h2>
        <p className={`mt-5 max-w-xl text-navy-deep/80 ${leeaLead}`}>{intro[course]}</p>

        <ol className="mt-10 divide-y divide-navy-deep/10 border-y border-navy-deep/10 md:mt-12">
          {course === "fou"
            ? days.map((day, index) => (
                <li key={day.label} className="flex flex-col gap-5 py-8 md:flex-row md:gap-8 md:py-10">
                  <div className="flex items-center gap-4 md:w-56 md:shrink-0 md:flex-col md:items-start md:gap-3">
                    <span aria-hidden="true" className={numeral}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-2xl font-extrabold tracking-[-0.02em] text-navy-deep md:text-[28px]">
                      {day.label}
                    </h3>
                  </div>
                  <ul className="grid flex-1 gap-3">
                    {day.sessions.map((session) => (
                      <li
                        key={session.title}
                        className="flex items-center gap-4 rounded-[20px] bg-[#f5f7fa] px-4 py-4 md:px-5"
                      >
                        <span
                          aria-hidden="true"
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-heading text-[15px] font-extrabold ${
                            session.letter ? "bg-[#0066b2] text-white" : "bg-white text-[#0066b2] ring-1 ring-[#0066b2]/25"
                          }`}
                        >
                          {session.letter ?? "i"}
                        </span>
                        <span className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between sm:gap-4">
                          <span className="block text-base font-semibold leading-snug text-navy-deep">
                            {session.letter && <span className="sr-only">Module {session.letter}: </span>}
                            {session.title}
                          </span>
                          <span className="mt-1 flex shrink-0 items-center gap-1.5 text-sm text-navy-deep/75 sm:mt-0">
                            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                            {session.duration}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))
            : lacModules.map((module, index) => (
                <li key={module.title} className="flex flex-col gap-5 py-8 md:flex-row md:gap-8 md:py-10">
                  <div className="flex items-center gap-4 md:w-56 md:shrink-0 md:flex-col md:items-start md:gap-3">
                    <span aria-hidden="true" className={numeral}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-2xl font-extrabold leading-tight tracking-[-0.02em] text-navy-deep md:text-[28px]">
                      <span className="sr-only">{module.label}: </span>
                      {module.title}
                    </h3>
                  </div>
                  <ul className="grid flex-1 gap-x-8 gap-y-3 sm:grid-cols-2 md:self-center">
                    {module.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-3 text-base leading-snug text-navy-deep">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2]">
                          <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                        </span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
        </ol>
      </div>
    </section>
  );
}
