import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Clock, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { courseCategories, courseImageAlt, featuredCourses } from "@/lib/data";

type CourseCardData = {
  slug: string;
  title: string;
  image: string;
  href: string;
  icon: LucideIcon;
  description?: string;
  duration?: string;
  location?: string;
  certification?: string;
};

/**
 * General Safety card: simpler than the International photo card. A white card with the photo on top,
 * a "General Safety" eyebrow over the blue title, a hairline, duration and location rows, and a
 * full-width blue "View Course" button. Every General Safety course ends in the same Arbrit certificate
 * (the section intro says so), so the card leaves it out.
 */
function GeneralCourseCard({ course }: { course: CourseCardData }) {
  const meta = [
    { icon: Clock, value: course.duration },
    { icon: MapPin, value: course.location },
  ].filter((item) => item.value);

  return (
    <Link
      href={course.href}
      className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white text-left ring-1 ring-[#0066b2]/15 shadow-[0_18px_40px_-28px_rgba(18,59,109,0.45)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_50px_-24px_rgba(18,59,109,0.55)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
    >
      <span className="relative block aspect-[3/2] shrink-0 overflow-hidden bg-[#f5f7fa]">
        <Image
          src={course.image}
          alt={courseImageAlt(course)}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 80vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </span>

      <span className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#0066b2]">General Safety</span>
        <span className="mt-2 font-heading text-lg font-bold leading-snug text-[#0066b2]">{course.title}</span>

        <span className="mt-4 block space-y-2 border-t border-navy-deep/10 pt-4 text-[13px] text-navy-deep/75">
          {meta.map(({ icon: MetaIcon, value }) => (
            <span key={value} className="flex items-center gap-2">
              <MetaIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {value}
            </span>
          ))}
        </span>

        <span className="mt-auto pt-5">
          <span className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#0066b2] text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-[#00589a]">
            View Course
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </span>
      </span>
    </Link>
  );
}

/** General Safety courses get the simpler card; internationally accredited ones keep the photo card. */
function CourseCard({ course, variant }: { course: CourseCardData; variant: "international" | "general" }) {
  return variant === "general" ? (
    <GeneralCourseCard course={course} />
  ) : (
    <InternationalCourseCard course={course} />
  );
}

/** International card: a full-bleed photo under a rising Arbrit-blue wash. */
function InternationalCourseCard({ course }: { course: CourseCardData }) {
  const Icon = course.icon;
  const meta = [
    { icon: Clock, value: course.duration },
    { icon: MapPin, value: course.location },
    { icon: BadgeCheck, value: course.certification },
  ].filter((item) => item.value);

  return (
    <Link
      href={course.href}
      className="group relative flex h-full min-h-[23rem] flex-col justify-end overflow-hidden rounded-[20px] p-5 text-left shadow-[0_18px_40px_-28px_rgba(18,59,109,0.55)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_50px_-24px_rgba(18,59,109,0.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2] sm:p-6"
    >
      <Image
        src={course.image}
        alt={courseImageAlt(course)}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 80vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(0deg,#0066b2_0%,rgba(0,102,178,0.9)_38%,rgba(0,102,178,0.45)_68%,rgba(0,102,178,0.08)_100%)]"
      />

      <span className="relative block">
        <span className="flex items-start gap-2.5">
          <Icon className="mt-0.5 h-5 w-5 shrink-0 text-white" aria-hidden="true" />
          <span className="font-heading text-lg font-bold leading-snug text-white">{course.title}</span>
        </span>
        {course.description && (
          <span className="mt-2 block line-clamp-2 text-[13px] leading-snug text-white/90">
            {course.description}
          </span>
        )}
        <span className="mt-3 block space-y-1.5 border-t border-white/30 pt-3 text-[13px] font-medium text-white">
          {meta.map(({ icon: MetaIcon, value }) => (
            <span key={value} className="flex items-center gap-2">
              <MetaIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {value}
            </span>
          ))}
        </span>
        <span className="mt-4 flex h-11 w-full items-center justify-center gap-1.5 rounded-full bg-white text-sm font-semibold text-[#0066b2] transition-colors duration-300 group-hover:bg-[#f5f7fa]">
          View course <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </span>
    </Link>
  );
}

/** A course band: Display heading and intro, then a phone swipe row that becomes a 2/4-column grid. */
export function CourseSection({
  id,
  title,
  description,
  courses,
  viewAllHref,
  tone,
  variant,
}: {
  id: string;
  title: string;
  description: string;
  courses: CourseCardData[];
  /** Omit on the Courses page itself, where every course is already listed. */
  viewAllHref?: string;
  tone: "mist" | "white";
  variant: "international" | "general";
}) {
  return (
    <section
      aria-labelledby={id}
      className={`${tone === "mist" ? "bg-[#f5f7fa]" : "bg-white"} py-16 md:py-24`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <h2
              id={id}
              className="font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-navy-deep text-balance"
            >
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-deep/80 md:text-lg">
              {description}
            </p>
          </div>
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="hidden items-center gap-2 rounded-full border border-[#0066b2] px-5 py-2.5 text-sm font-semibold text-[#0066b2] transition-colors hover:bg-[#0066b2] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2] md:inline-flex"
            >
              View all <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>

      {/* Phones: a swipeable row where the next card peeks in. Tablet and up: a grid. */}
      <ul className="mt-8 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-6 pt-2 [scrollbar-width:none] sm:scroll-px-6 sm:px-6 md:mx-auto md:mt-10 md:grid md:max-w-7xl md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
        {courses.map((course) => (
          <li key={course.slug} className="w-[80%] shrink-0 snap-start sm:w-[46%] md:w-auto">
            <CourseCard course={course} variant={variant} />
          </li>
        ))}
      </ul>

      {viewAllHref && (
        <div className="mt-2 px-5 sm:px-6 md:hidden">
          <Link
            href={viewAllHref}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-[#0066b2] text-sm font-semibold text-[#0066b2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
          >
            View all {title.toLowerCase()} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      )}
    </section>
  );
}

export const internationalCoursesIntro =
  "Certified by LEEA, IOSH, Highfield, STI, PASMA, RoSPA, NFPA and Qualifi, and run at our centres in Dubai, Abu Dhabi and KSA.";
export const generalCoursesIntro =
  "Safety training built around your industry: construction, manufacturing, food, healthcare and oil & gas, plus leadership workshops. Each is completed with an Arbrit certificate.";

export function InternationalCourses() {
  return (
    <CourseSection
      id="international-courses-heading"
      title="International courses"
      description={internationalCoursesIntro}
      courses={courseCategories}
      viewAllHref="/courses?category=International"
      tone="mist"
      variant="international"
    />
  );
}

export function GeneralSafetyCourses() {
  return (
    <CourseSection
      id="general-safety-courses-heading"
      title="General safety courses"
      description={generalCoursesIntro}
      courses={featuredCourses}
      viewAllHref="/courses?category=General%20Safety"
      tone="white"
      variant="general"
    />
  );
}
