import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock,
  ExternalLink,
  HardHat,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { courseHeaderImage } from "@/lib/page-images";
import { JoinCourseDialog } from "@/components/sections/join-course-dialog";
import { CourseClientsCarousel } from "@/components/sections/course-clients-carousel";
import { CourseSection } from "@/components/sections/home-courses";
import { contactInfo, courseCategories, courseImageAlt, featuredCourses } from "@/lib/data";
import { courseDetails } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return courseDetails.map((course) => ({ slug: course.slug }));
}

function renderWithMailtoLinks(text: string) {
  const parts = text.split(/([\w.+-]+@[\w-]+\.[\w.-]+)/g);
  return parts.map((part, i) =>
    /^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(part) ? (
      <a key={i} href={`mailto:${part}`} className="break-all font-medium text-[#0066b2] underline underline-offset-4">
        {part}
      </a>
    ) : (
      part
    )
  );
}

function renderWithBoldLabels(text: string) {
  const parts = text.split(/([A-Za-z0-9()\s]+:)/g).filter(Boolean);
  return parts.map((part, i) =>
    part.endsWith(":") ? (
      <strong key={i} className="font-semibold text-navy-deep">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

const displayHeading =
  "font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-balance";
const subHeading = "font-heading text-[28px] font-extrabold leading-tight tracking-[-0.02em] text-navy-deep md:text-4xl";

const telHref = (number: string) => `tel:${number.replace(/[^+\d]/g, "")}`;

// Site-wide training commitments from the About page, so even a one-line course page says how Arbrit trains.
const trainingProof = [
  { icon: MapPin, text: "Training at our centres in Dubai, Abu Dhabi and KSA, or on your site" },
  { icon: HardHat, text: "Hands-on practice on the same equipment your teams use at work" },
  { icon: Users, text: "Certified trainers who bring years of site experience into every course" },
];

const internationalPattern = /LEEA|IOSH|\bSTI\b|IRCA|Highfield|Lead Auditor/i;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = courseDetails.find((c) => c.slug === slug);
  if (!course) return {};
  // Fuller course pages have no one-line aim, so fall back to their first paragraph or a summary.
  const summary =
    course.aim ??
    course.courseInfoParagraphs?.[0] ??
    `${course.title} training in Dubai, Abu Dhabi and KSA with Arbrit Safety. Accredited trainers, hands-on practice and recognised certification.`;
  return pageMetadata({
    title: `${course.title} Training in Dubai & Abu Dhabi`,
    description: summary.length > 160 ? `${summary.slice(0, 157).trimEnd()}…` : summary,
    path: `/courses/${course.slug}`,
    ownImage: true,
  });
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = courseDetails.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();

  const course = courseDetails[index];
  const prevCourse = courseDetails.length > 1 ? courseDetails[(index - 1 + courseDetails.length) % courseDetails.length] : null;
  const nextCourse = courseDetails.length > 1 ? courseDetails[(index + 1) % courseDetails.length] : null;

  // Course structured data for Google (course listings / rich results).
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description:
      course.aim ??
      course.courseInfoParagraphs?.[0] ??
      `${course.title} training in Dubai, Abu Dhabi and KSA with Arbrit Safety Training & Consultancy.`,
    url: `${siteUrl}/courses/${course.slug}`,
    image: `${siteUrl}${course.image}`,
    inLanguage: "en",
    provider: {
      "@type": "EducationalOrganization",
      name: "Arbrit Safety Training & Consultancy",
      sameAs: siteUrl,
    },
  };

  // Duration, location and certification also live on the course cards in lib/data.
  const href = `/courses/${course.slug}`;
  const card = [...courseCategories, ...featuredCourses].find((c) => c.href === href);
  const duration = course.duration ?? card?.duration;
  const facts: { icon: LucideIcon; label: string; value: string }[] = [
    ...(duration ? [{ icon: Clock, label: "Duration", value: duration }] : []),
    { icon: MapPin, label: "Where", value: card?.location ?? "Dubai · Abu Dhabi · KSA" },
    ...(card?.certification ? [{ icon: BadgeCheck, label: "Certification", value: card.certification }] : []),
  ];

  const logos = course.accreditationLogos ?? (course.accreditationLogo ? [course.accreditationLogo] : []);

  const [lead, ...moreParagraphs] = [...(course.aim ? [course.aim] : []), ...(course.courseInfoParagraphs ?? [])];

  const details: { label: string; content: ReactNode }[] = [];
  if (course.durationHeading) details.push({ label: "Duration", content: renderWithBoldLabels(course.durationHeading) });
  if (course.targetDelegates) details.push({ label: "Who it's for", content: course.targetDelegates });
  if (course.certificationIntro) {
    details.push({
      label: "Certification",
      content: (
        <>
          {course.certificationIntro}
          {course.certificationLinkUrl && (
            <>
              {" "}
              <a
                href={course.certificationLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 break-all font-medium text-[#0066b2] underline underline-offset-4"
              >
                {course.certificationLinkUrl} <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              </a>
            </>
          )}
        </>
      ),
    });
  }

  const isInternational = courseCategories.some((c) => c.href === href) || internationalPattern.test(course.title);
  const related = isInternational
    ? {
        title: "More international courses",
        description:
          "Certified by LEEA, IRCA, STI, Highfield and IOSH, and run at our centres in Dubai, Abu Dhabi and KSA.",
        courses: courseCategories.filter((c) => c.href !== href).slice(0, 4),
      }
    : {
        title: "More safety courses",
        description: "Practical one to three-day courses for everyday site safety, each completed with an Arbrit certificate.",
        courses: featuredCourses.filter((c) => c.href !== href).slice(0, 4),
      };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd).replace(/</g, "\\u003c") }} />
      <PageHeader
        title={course.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: course.title },
        ]}
        {...courseHeaderImage(course.title)}
      />

      <section aria-labelledby="course-overview-heading" className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_23rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_25rem]">
          <div className="min-w-0">
            {/* Group pages are only a table, so the table takes the section heading. */}
            <h2 id="course-overview-heading" className={`${displayHeading} text-navy-deep`}>
              {!lead && course.courseTable ? "Courses in this group" : "About this course"}
            </h2>
            {lead && (
              <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-navy-deep/80 md:text-lg">
                {renderWithMailtoLinks(lead)}
              </p>
            )}
            {moreParagraphs.length > 0 && (
              <div className="mt-4 max-w-2xl space-y-4 text-base leading-relaxed text-navy-deep/80">
                {moreParagraphs.map((paragraph, i) => (
                  <p key={i}>{renderWithMailtoLinks(paragraph)}</p>
                ))}
              </div>
            )}

            {course.topics && (
              <div className="mt-12 md:mt-14">
                <h3 className={subHeading}>What&apos;s covered</h3>
                <ul className="mt-5 grid border-t border-navy-deep/10 sm:grid-cols-2 sm:gap-x-8">
                  {course.topics.map((topic, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 border-b border-navy-deep/10 py-3.5 text-[15px] font-medium leading-snug text-navy-deep"
                    >
                      <CheckCircle2 className="mt-px h-5 w-5 shrink-0 text-[#0066b2]" strokeWidth={1.75} aria-hidden="true" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {course.courseOfferings && (
              <div className="mt-12 md:mt-14">
                <h3 className={subHeading}>Courses offered</h3>
                <ol className="mt-5 divide-y divide-navy-deep/10 border-y border-navy-deep/10">
                  {course.courseOfferings.map((offering, i) => (
                    <li key={offering.label} className="flex gap-5 py-6 md:gap-7">
                      <span
                        aria-hidden="true"
                        className="w-12 shrink-0 font-heading text-[40px] font-extrabold leading-none tracking-[-0.04em] text-[#0066b2] md:w-16 md:text-5xl"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="font-heading text-lg font-bold leading-snug text-navy-deep md:text-xl">{offering.label}</h4>
                        <p className="mt-1.5 text-base leading-relaxed text-navy-deep/80">{offering.description}</p>
                        {offering.href && (
                          <Link
                            href={offering.href}
                            className="mt-2 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-[#0066b2] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
                          >
                            Read more<span className="sr-only">: {offering.label}</span>
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          </Link>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {course.courseTable && (
              <div className={lead ? "mt-12 md:mt-14" : "mt-8 md:mt-10"}>
                {lead && <h3 className={subHeading}>Courses in this group</h3>}
                <div className="mt-5 overflow-hidden rounded-[20px] ring-1 ring-navy-deep/10">
                  <table className="w-full border-collapse text-left text-[15px] text-navy-deep">
                    <thead className="bg-[#f5f7fa] text-[13px] font-semibold text-navy-deep/80">
                      <tr>
                        <th scope="col" className="px-4 py-3 sm:px-5">
                          Course Name
                        </th>
                        <th scope="col" className="hidden px-4 py-3 sm:table-cell sm:px-5">
                          Course Type
                        </th>
                        <th scope="col" className="hidden px-4 py-3 sm:table-cell sm:px-5">
                          Starts
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-navy-deep/10">
                      {course.courseTable.map((row) => (
                        <tr key={row.name}>
                          <td className="px-4 py-3 font-medium sm:px-5">
                            {row.name}
                            {/* Phones fold the other two columns under the name. */}
                            <span className="mt-0.5 block text-[13px] font-normal text-navy-deep/75 sm:hidden">
                              {row.type} · Starts {row.starts.toLowerCase()}
                            </span>
                          </td>
                          <td className="hidden px-4 py-3 text-navy-deep/80 sm:table-cell sm:px-5">{row.type}</td>
                          <td className="hidden px-4 py-3 text-navy-deep/80 sm:table-cell sm:px-5">{row.starts}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {details.length > 0 && (
              <dl className="mt-12 divide-y divide-navy-deep/10 border-y border-navy-deep/10 md:mt-14">
                {details.map(({ label, content }) => (
                  <div key={label} className="grid gap-2 py-6 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-8">
                    <dt className="font-heading text-lg font-extrabold tracking-[-0.01em] text-navy-deep md:text-xl">{label}</dt>
                    <dd className="max-w-2xl text-base leading-relaxed text-navy-deep/80">{content}</dd>
                  </div>
                ))}
              </dl>
            )}

            {course.certificationHighlight && (
              <p className="mt-6 flex items-center gap-4 rounded-[20px] bg-[#f5f7fa] p-5 text-[15px] font-semibold leading-snug text-navy-deep">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2]">
                  <BadgeCheck className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                {course.certificationHighlight}
              </p>
            )}

            <div className="mt-12 md:mt-14">
              <h3 className={subHeading}>How you&apos;ll train</h3>
              <ul className="mt-5 max-w-2xl divide-y divide-navy-deep/10 border-y border-navy-deep/10">
                {trainingProof.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-4 py-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2]">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="text-[15px] font-medium leading-snug text-navy-deep">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* On phones this card follows the copy; from 1024px it sticks beside it. */}
          <aside aria-labelledby="course-glance-heading" className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_24px_48px_-24px_rgba(18,59,109,0.45)] ring-1 ring-navy-deep/10">
              {/* Some course photos are only 350px wide, so the photo stays card-sized. */}
              <div className="relative aspect-[16/10] bg-[#f5f7fa]">
                <Image
                  src={course.image}
                  alt={courseImageAlt(course)}
                  fill
                  sizes="(min-width: 1280px) 25rem, (min-width: 1024px) 23rem, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h2 id="course-glance-heading" className="font-heading text-2xl font-extrabold tracking-[-0.02em] text-navy-deep">
                  At a glance
                </h2>
                <dl className="mt-3 divide-y divide-navy-deep/10 border-y border-navy-deep/10">
                  {facts.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-3.5 py-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2]">
                        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <dt className="text-[13px] font-semibold text-navy-deep/75">{label}</dt>
                        <dd className="text-[15px] font-semibold leading-snug text-navy-deep">{value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>

                {logos.length > 0 && (
                  <div className="mt-4">
                    <p className="text-[13px] font-semibold text-navy-deep/75">Accredited by</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {logos.map((logo, i) => (
                        <li key={logo} className="relative h-16 w-28 overflow-hidden rounded-xl bg-[#f5f7fa]">
                          <Image
                            src={logo}
                            alt={`${course.title} accrediting body logo${logos.length > 1 ? ` ${i + 1}` : ""} — Arbrit Safety accredited training provider`}
                            fill
                            sizes="112px"
                            className="object-contain p-2.5 mix-blend-multiply"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <JoinCourseDialog
                  courseTitle={course.title}
                  preselectCourse={course.title}
                  trigger={
                    <button
                      type="button"
                      className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0066b2] text-sm font-semibold text-white transition-colors hover:bg-[#00589a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
                    >
                      Join this course <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  }
                />
                <a
                  href={telHref(contactInfo.phones[0].number)}
                  className="mt-3 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-navy-deep/15 text-sm font-semibold text-navy-deep transition-colors hover:border-[#0066b2] hover:text-[#0066b2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call {contactInfo.phones[0].label} {contactInfo.phones[0].number}
                </a>
              </div>
            </div>
          </aside>
        </div>

        {prevCourse && nextCourse && (
          <nav aria-label="Previous and next course" className="mx-auto mt-12 grid max-w-7xl gap-3 px-5 sm:grid-cols-2 sm:px-6 md:mt-16">
            <Link
              href={`/courses/${prevCourse.slug}`}
              className="group flex min-h-16 items-center gap-3 rounded-[20px] bg-[#f5f7fa] px-5 py-4 transition duration-300 hover:bg-white hover:shadow-[0_26px_50px_-24px_rgba(18,59,109,0.55)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
            >
              <ArrowLeft className="h-4 w-4 shrink-0 text-[#0066b2] transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-[13px] font-semibold text-navy-deep/75">Previous course</span>
                <span className="block font-heading text-[15px] font-bold leading-snug text-navy-deep">{prevCourse.title}</span>
              </span>
            </Link>
            <Link
              href={`/courses/${nextCourse.slug}`}
              className="group flex min-h-16 items-center justify-end gap-3 rounded-[20px] bg-[#f5f7fa] px-5 py-4 text-right transition duration-300 hover:bg-white hover:shadow-[0_26px_50px_-24px_rgba(18,59,109,0.55)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
            >
              <span className="min-w-0">
                <span className="block text-[13px] font-semibold text-navy-deep/75">Next course</span>
                <span className="block font-heading text-[15px] font-bold leading-snug text-navy-deep">{nextCourse.title}</span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-[#0066b2] transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </nav>
        )}
      </section>

      {course.clientLogos && (
        <section aria-labelledby="course-clients-heading" className="bg-[#f5f7fa] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <h2 id="course-clients-heading" className={`${displayHeading} text-navy-deep`}>
              Our clients
            </h2>
            <div className="mt-8 md:mt-10">
              <CourseClientsCarousel logos={course.clientLogos} />
            </div>
          </div>
        </section>
      )}

      <CourseSection
        id="related-courses-heading"
        title={related.title}
        description={related.description}
        courses={related.courses}
        viewAllHref="/courses"
        tone={course.clientLogos ? "white" : "mist"}
      />
    </>
  );
}
