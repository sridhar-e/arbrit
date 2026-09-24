"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronRight, MessageSquare, Search, SlidersHorizontal, X } from "lucide-react";
import type { MegaMenuGroup } from "@/lib/data";
import { courseId } from "@/lib/course-catalog";
import { buildSearchableCourses, enquireAboutHref, searchCourses } from "@/lib/course-search";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const ALL = "All Categories";

/**
 * Shortlist shown on phones in place of the full course directory, which makes
 * the bottom of every page far too long on a small screen. Hrefs stay as "#", the
 * same as the rest of the directory, until the real course URLs are confirmed.
 */
const POPULAR_COURSES = [
  "IOSH",
  "LEEA",
  "Scaffold Training",
  "First Aid",
  "Fire Safety",
  "Food Safety",
  "NFPA",
];

export function CoursesDirectory({ courseMenu }: { courseMenu: MegaMenuGroup[] }) {
  const courses = useMemo(() => buildSearchableCourses(courseMenu), [courseMenu]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL);
  const [openGroup, setOpenGroup] = useState<number | null>(null);

  const trimmed = query.trim().toLowerCase();
  const isFiltering = trimmed.length > 0 || category !== ALL;

  const groups = useMemo(() => {
    // Same matching as the Courses page search: names plus common search words.
    const matched = trimmed.length > 0 ? new Set(searchCourses(trimmed, courses).map((course) => courseId(course.title))) : null;
    return courseMenu
      .map((group) => ({
        title: group.title,
        links:
          trimmed.length > 0
            ? group.links.filter((link) => matched?.has(courseId(link.label)))
            : group.links,
      }))
      .filter((group) => group.links.length > 0)
      .filter((group) => category === ALL || group.title === category);
  }, [trimmed, category, courses, courseMenu]);

  const total = groups.reduce((count, group) => count + group.links.length, 0);

  return (
    <section id="all-courses" className="scroll-mt-28 bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title={
            <>
              <span className="sm:hidden">Popular Courses</span>
              <span className="hidden sm:inline">Courses</span>
            </>
          }
          align="left"
        />

        {/* Phones get a short curated list plus a way through to the full listing. */}
        <div className="mt-6 sm:hidden">
          <ul className="divide-y divide-navy/10 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
            {POPULAR_COURSES.map((label) => (
              <li key={label}>
                <Link
                  href={`/courses?q=${encodeURIComponent(label)}`}
                  className="flex items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-[#000] transition-colors hover:bg-orange/5 hover:text-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
                >
                  {label}
                  <ChevronRight className="h-4 w-4 shrink-0 text-orange/60" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/courses"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066b2] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
          >
            View All Courses
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Tablet and up keep the searchable, category-grouped directory. */}
        <div className="hidden sm:block">
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="group relative w-full sm:max-w-sm">
            <Label htmlFor="directory-search" className="sr-only">
              Search courses
            </Label>
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40"
              aria-hidden="true"
            />
            <Input
              id="directory-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search all courses"
              className="h-12 rounded-xl border-navy/15 bg-white pl-10 pr-10 shadow-sm [&::-webkit-search-cancel-button]:appearance-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-navy-deep/75 transition hover:bg-navy/5 hover:text-navy"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </div>

          <div className="relative w-full sm:max-w-xs">
            <Label htmlFor="directory-category" className="sr-only">
              Filter by category
            </Label>
            <SlidersHorizontal
              className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-navy/40"
              aria-hidden="true"
            />
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger
                id="directory-category"
                className="h-12 w-full rounded-xl border-navy/15 bg-white pl-10 shadow-sm"
              >
                <SelectValue placeholder={ALL} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL}>{ALL}</SelectItem>
                {courseMenu.map((group) => (
                  <SelectItem key={group.title} value={group.title}>
                    {group.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <p role="status" aria-live="polite" className="mt-3 text-sm text-navy-deep/75">
          {isFiltering
            ? `${total} ${total === 1 ? "course" : "courses"} found`
            : `${total} courses — tap a category to browse`}
        </p>

        {groups.length > 0 ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {groups.map((group, groupIndex) => {
              const isOpen = isFiltering || openGroup === groupIndex;

              return (
                <div
                  key={group.title}
                  className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition hover:border-orange/30 hover:shadow-lg"
                >
                  <button
                    type="button"
                    onClick={() => setOpenGroup(isOpen && !isFiltering ? null : groupIndex)}
                    aria-expanded={isOpen}
                    aria-controls={`course-group-${groupIndex}`}
                    className="flex w-full items-center justify-between gap-2 text-left font-heading text-base font-bold text-[#0066b2] sm:pointer-events-none"
                  >
                    <span className="flex items-baseline gap-2">
                      {group.title}
                      <span className="text-xs font-medium text-navy-deep/75">{group.links.length}</span>
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 transition-transform sm:hidden",
                        isOpen && "rotate-180"
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  <ul
                    id={`course-group-${groupIndex}`}
                    className={cn(
                      "mt-3 space-y-1 border-t border-navy/10 pt-2.5 sm:block",
                      !isOpen && "hidden"
                    )}
                  >
                    {group.links.map((link, linkIndex) => (
                      <li key={`${groupIndex}-${linkIndex}`}>
                        <Link
                          href={link.href}
                          className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-[#000] transition-colors hover:bg-orange/5 hover:text-orange"
                        >
                          <ChevronRight
                            className="h-3.5 w-3.5 shrink-0 text-orange/60 transition-transform group-hover:translate-x-0.5 group-hover:text-orange"
                            aria-hidden="true"
                          />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-navy/10 bg-muted p-6 text-sm text-navy/70">
            <p>No courses match your search. Try a different keyword or category.</p>
            {trimmed && (
              <Link
                href={enquireAboutHref(query)}
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#0066b2] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#00589a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
              >
                <MessageSquare className="h-4 w-4" aria-hidden="true" />
                We may still be able to help: enquire about &ldquo;{query.trim()}&rdquo;
              </Link>
            )}
          </div>
        )}
        </div>
      </div>
    </section>
  );
}
