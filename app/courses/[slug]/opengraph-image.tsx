import { courseDetails } from "@/lib/content";
import { ogSize, renderOgCard } from "@/lib/og-card";

export const alt = "Accredited course at Arbrit Safety Training & Consultancy";
export const size = ogSize;
export const contentType = "image/png";

/** Link preview for a course page: the course name on the branded card. */
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courseDetails.find((item) => item.slug === slug);
  return renderOgCard({
    eyebrow: "Accredited training course",
    title: course?.title ?? "HSE Training Courses",
    subtitle: "Dubai · Abu Dhabi · KSA · Arbrit Safety",
  });
}
