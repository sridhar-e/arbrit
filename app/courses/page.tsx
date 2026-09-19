import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Suspense } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { pageHeaderImages } from "@/lib/page-images";
import { CourseSearch, CourseSearchFromUrl } from "@/components/sections/course-search";
import { searchableCourses } from "@/lib/course-links";
import { CoursesProofStrip } from "@/components/sections/courses-proof-strip";
import { CourseSection } from "@/components/sections/home-courses";
import { TrainingVenues } from "@/components/sections/training-venues";
import { QuickEnquiry } from "@/components/sections/quick-enquiry";
import { AdvisorPrompt } from "@/components/sections/advisor-prompt";
import { CourseEnquiryDialog } from "@/components/sections/course-enquiry-dialog";
import { courseCategories, featuredCourses } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "HSE & Safety Training Courses in Dubai, Abu Dhabi & KSA",
  description:
    "Browse accredited HSE courses: LEEA lifting, IOSH Managing Safely, STI scaffolding, rope access, confined space, fire safety, first aid and plant operator training.",
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
        description="Certified by LEEA, IRCA, STI, Highfield and IOSH, and run at our centres in Dubai, Abu Dhabi and KSA."
        courses={courseCategories}
        tone="mist"
      />
      <CourseSection
        id="general-safety-courses-heading"
        title="General safety courses"
        description="Practical one to three-day courses for everyday site safety, each completed with an Arbrit certificate."
        courses={featuredCourses}
        tone="white"
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
