import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Suspense } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { pageHeaderImages } from "@/lib/page-images";
import { CourseSearch, CourseSearchFromUrl } from "@/components/sections/course-search";
import { searchableCourses } from "@/lib/course-links";
import { CoursesProofStrip } from "@/components/sections/courses-proof-strip";
import { CourseSection, generalCoursesIntro, internationalCoursesIntro } from "@/components/sections/home-courses";
import { TrainingVenues } from "@/components/sections/training-venues";
import { QuickEnquiry } from "@/components/sections/quick-enquiry";
import { AdvisorPrompt } from "@/components/sections/advisor-prompt";
import { CourseEnquiryDialog } from "@/components/sections/course-enquiry-dialog";
import { courseCategories, featuredCourses } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "HSE & Safety Training Courses in Dubai, Abu Dhabi & KSA",
  description:
    "Browse accredited HSE courses: LEEA lifting, IOSH, Highfield first aid and fire safety, STI scaffolding, ISO Lead Auditor, PASMA, RoSPA, NFPA, oil & gas and industry safety training.",
  path: "/courses",
});

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        title="Courses"
        eyebrow="International & General Safety Training"
        description="Explore accredited HSE courses designed to build safer, more capable workplaces."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Courses" }]}
        {...pageHeaderImages.courses}
      >
        {/* Reads ?q= / ?category= from the URL; the plain search bar shows while that loads. */}
        <Suspense fallback={<CourseSearch courses={searchableCourses} />}>
          <CourseSearchFromUrl courses={searchableCourses} />
        </Suspense>
      </PageHeader>
      <CoursesProofStrip />
      <CourseSection
        id="international-courses-heading"
        title="International courses"
        description={internationalCoursesIntro}
        courses={courseCategories}
        tone="mist"
        variant="international"
      />
      <CourseSection
        id="general-safety-courses-heading"
        title="General safety courses"
        description={generalCoursesIntro}
        courses={featuredCourses}
        tone="white"
        variant="general"
      />
      <TrainingVenues />
      <QuickEnquiry />
      <AdvisorPrompt />
      {/* Opens when the Courses menu links here with ?enquire=<course>. Reads the URL, so it needs Suspense. */}
      <Suspense fallback={null}>
        <CourseEnquiryDialog />
      </Suspense>
    </>
  );
}
