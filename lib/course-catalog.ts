import { coursesMegaMenu } from "@/lib/data";

/** Stable, URL-safe id for a course name, e.g. "LEEA – Foundation Course (FOUG)" -> "leea-foundation-course-foug". */
export function courseId(label: string) {
  return label
    .normalize("NFKD")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Every course from the Courses menu, grouped as in the menu, with duplicate names removed. */
export const courseGroups: { title: string; courses: string[] }[] = (() => {
  const seen = new Set<string>();
  return coursesMegaMenu
    .map((group) => ({
      title: group.title,
      courses: group.links
        .map((link) => link.label)
        .filter((label) => (seen.has(label) ? false : (seen.add(label), true))),
    }))
    .filter((group) => group.courses.length > 0);
})();

export const allCourseNames: string[] = courseGroups.flatMap((group) => group.courses);

const courseNameById = new Map(allCourseNames.map((name) => [courseId(name), name]));

/** Resolves a `?enquire=` id back to its course name, or undefined if it is not a known course. */
export function courseNameFromId(id: string | null | undefined) {
  return id ? courseNameById.get(id) : undefined;
}
