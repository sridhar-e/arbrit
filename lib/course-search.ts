/**
 * One course search for the whole site (Courses page search and the course directory). Covers every
 * course in the Courses menu plus the category and featured course pages, and understands common
 * words people type that are not in course names ("rigging", "work at height", "H2S"...).
 */
import { courseCategories, featuredCourses, type MegaMenuGroup } from "@/lib/data";
import { courseId } from "@/lib/course-catalog";

export type SearchableCourse = {
  title: string;
  href: string;
  /** Group in the Courses menu, e.g. "Fire & Scaffolding Courses". */
  category: string;
  /** Courses page filter: internationally accredited (LEEA, IOSH, STI...) or general safety. */
  track: "International" | "General Safety";
  duration?: string;
  /** Extra words this course should be found by. */
  keywords: string;
};

/** Words people search with, attached to every course whose name matches the pattern. */
const topicKeywords: [RegExp, string][] = [
  [/leea|appointed person|aplo|foug/i, "LEEA lifting rigging rigger slinging slinger crane"],
  [/lifting|crane|hoist/i, "lifting rigging rigger slinging crane hoist"],
  [/scaffold|\bsti\b/i, "scaffold scaffolding STI work at height working at height"],
  [/rope access|manlift|scissor|cradle|mewp/i, "work at height working at height access"],
  [/first aid|cpr|aed/i, "first aid first aider CPR AED medical emergency"],
  [/fire/i, "fire firefighting fire fighter extinguisher fire warden fire marshal"],
  [/confined/i, "confined space rescue"],
  [/tunnel|rescue/i, "rescue emergency"],
  [/h2s|gas/i, "H2S hydrogen sulphide sulfide gas testing gas detection"],
  [/iosh|risk|hazop|ptw|tra\b|coshh|highfield|safety awareness|general safety/i, "HSE health and safety management"],
  [/operator|forklift|excavator|roller|shovel|dumber|concrete|block cutting|flagman/i, "plant equipment machinery operator driver"],
  [/electrical/i, "electrical electricity electrician"],
  [/auditor|\biso\b/i, "audit auditor ISO 45001 14001 9001 22000 27001 lead auditor internal auditor"],
  [/ptw/i, "permit to work"],
  [/tra\b/i, "task risk assessment"],
  [/driving|rospa/i, "driver driving defensive driving road safety vehicle fleet RoSPA ADNOC"],
  [/nfpa/i, "NFPA fire alarm sprinkler electrical safety NEC 70E arc flash"],
  [/qualifi|diploma in ohsm/i, "diploma level 7 OHSM HSE manager CMIOSH GradIOSH European Safety Council"],
  [/construction/i, "construction site safety work at height scaffolding excavation confined space"],
  [/manufacturing/i, "manufacturing factory plant machine LOTO lockout process safety"],
  [/healthcare|hospital/i, "healthcare hospital infection control patient safety clinic"],
  [/pasma|tower/i, "PASMA mobile access tower work at height working at height"],
  [/ohs pic|person in charge|hse training/i, "OHS PIC person in charge Dubai Municipality TSI HSE officer"],
  [/oil (&|and) gas/i, "oil gas HAZOP HAZID PSM LOPA SIL SIMOPS H2S process safety ADNOC Aramco"],
  [/seminar|workshop/i, "seminar workshop leadership safety culture"],
  [/oil|spil/i, "oil gas offshore spill"],
  [/food/i, "food hygiene HACCP catering"],
  [/train the trainer/i, "TTT trainer training instructor OSHAD"],
  [/dangerous goods/i, "dangerous goods hazmat DG"],
  [/environmental/i, "environment environmental ISO 14001"],
];

const internationalPattern = /leea|iosh|\bsti\b|irca|\biso\b|lead auditor|highfield|rospa|nfpa|qualifi|pasma|ohs pic|hse training|aplo|foug/i;
const trackFor = (title: string): SearchableCourse["track"] => (internationalPattern.test(title) ? "International" : "General Safety");

const keywordsFor = (title: string) =>
  topicKeywords
    .filter(([pattern]) => pattern.test(title))
    .map(([, words]) => words)
    .join(" ");

/**
 * Every searchable course, de-duplicated by name (featured/category data wins for duration).
 * Takes the Courses menu with its links already resolved (see lib/course-links), so it can run in
 * the browser without the course detail pages.
 */
export function buildSearchableCourses(courseMenu: MegaMenuGroup[]): SearchableCourse[] {
  const byName = new Map<string, SearchableCourse>();
  const add = (course: Omit<SearchableCourse, "keywords" | "track">) => {
    const key = courseId(course.title);
    const existing = byName.get(key);
    byName.set(key, {
      ...existing,
      ...course,
      category: existing?.category ?? course.category,
      duration: course.duration ?? existing?.duration,
      track: trackFor(course.title),
      keywords: keywordsFor(course.title),
    });
  };
  for (const group of courseMenu) {
    for (const link of group.links) {
      if (!byName.has(courseId(link.label))) add({ title: link.label, href: link.href, category: group.title });
    }
  }
  // A card whose menu item has a different name ("RoSPA" / "RoSPA Defensive Driving") joins that item.
  const menuItemFor = (href: string) => [...byName.values()].find((item) => item.href === href);
  for (const course of courseCategories) {
    const known = byName.get(courseId(course.title)) ?? menuItemFor(course.href);
    if (known && known.title !== course.title) {
      add({ ...known, duration: course.duration ?? known.duration });
      continue;
    }
    add({ title: course.title, href: known?.href ?? course.href, category: known?.category ?? "Accredited courses", duration: course.duration ?? known?.duration });
  }
  for (const course of featuredCourses) {
    const known = byName.get(courseId(course.title)) ?? menuItemFor(course.href);
    add({ title: course.title, href: known?.href ?? course.href, category: known?.category ?? "Safety courses", duration: course.duration });
  }
  return [...byName.values()];
}

const normalise = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const words = (text: string) => normalise(text).split(" ").filter(Boolean);
/** "courses" matches "course", "scaffolders" matches "scaffold"... */
const stem = (word: string) => word.replace(/(ers|ing|es|s)$/, "") || word;

/** Words that describe any course, ignored when the search has something more specific. */
const fillerWords = new Set(["course", "courses", "training", "trainings", "certificate", "certification", "class", "classes", "in", "for", "and", "the", "dubai", "uae"]);

/**
 * Courses matching a free-text query, best first. Every word typed must start a word in the
 * course's name, category or keywords (so "fire war" finds Fire Warden); exact name matches rank
 * above keyword matches.
 */
export function searchCourses(query: string, courses: SearchableCourse[]) {
  const allTyped = words(query);
  const specific = allTyped.filter((word) => !fillerWords.has(word));
  const typed = specific.length ? specific : [];
  if (typed.length === 0) return courses;
  const phrase = typed.join(" ");

  return courses
    .map((course) => {
      const title = normalise(course.title);
      const titleWords = words(course.title);
      const allWords = [...titleWords, ...words(course.keywords)];
      const hit = (word: string, pool: string[]) => pool.some((candidate) => candidate.startsWith(word) || stem(candidate) === stem(word));
      if (!typed.every((word) => hit(word, allWords))) return null;
      const score =
        (title.startsWith(phrase) ? 4 : 0) +
        (title.includes(phrase) ? 2 : 0) +
        (typed.every((word) => hit(word, titleWords)) ? 2 : 0) +
        (normalise(course.keywords).includes(phrase) ? 1 : 0);
      return { course, score };
    })
    .filter((match): match is { course: SearchableCourse; score: number } => match !== null)
    .sort((a, b) => b.score - a.score || a.course.title.localeCompare(b.course.title))
    .map((match) => match.course);
}

/** Link that opens the Courses enquiry popup with "Other" ticked and the search text filled in. */
export const enquireAboutHref = (query: string) => `/courses?enquire=other&other=${encodeURIComponent(query.trim().slice(0, 120))}`;
