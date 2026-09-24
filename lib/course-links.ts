/**
 * Where each Courses menu item goes. Server-only: deciding needs the full course detail pages,
 * which stay out of browser bundles. Layouts and pages pass the resolved menu down as props.
 */
import { coursesMegaMenu, type MegaMenuGroup } from "@/lib/data";
import { courseDetails } from "@/lib/content";
import type { CourseDetail } from "@/lib/data";
import { courseId } from "@/lib/course-catalog";
import { buildSearchableCourses } from "@/lib/course-search";

const detailBySlug = new Map(courseDetails.map((detail) => [detail.slug, detail]));

/** A detail page is worth sending people to only when it has more than a title, photo and one line. */
function hasRichContent(detail: CourseDetail) {
  return Boolean(
    detail.topics?.length ||
      detail.sections?.length ||
      detail.courseInfoParagraphs?.length ||
      detail.courseOfferings?.length ||
      detail.courseTable?.length ||
      detail.certificationIntro,
  );
}

/**
 * Where a Courses menu item should go: its own detail page when that page has real content,
 * otherwise the Courses page with the enquiry popup open and this course ticked.
 */
export function menuCourseHref(link: { label: string; href: string }) {
  // Hand-built pages under /course/ are always full pages.
  if (link.href.startsWith("/course/")) return link.href;
  if (link.href.startsWith("/courses/")) {
    const detail = detailBySlug.get(link.href.slice("/courses/".length));
    if (detail && hasRichContent(detail)) return link.href;
  }
  return `/courses?enquire=${courseId(link.label)}`;
}

/** The Courses menu with every link already pointing where it should. */
export const courseMenu: MegaMenuGroup[] = coursesMegaMenu.map((group) => ({
  ...group,
  links: group.links.map((link) => ({ ...link, href: menuCourseHref(link) })),
}));

/** The site-wide course search index, for the hero search and the Courses page. */
export const searchableCourses = buildSearchableCourses(courseMenu);
