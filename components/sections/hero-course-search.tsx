"use client";

import { useId, useMemo, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Search } from "lucide-react";
import { searchCourses, type SearchableCourse } from "@/lib/course-search";

/** Shown when the field is focused but empty: the courses people ask about most. */
const popularTitles = [
  "LEEA Diploma",
  "LEEA Appointed Person for Lifting Operations (APLO)",
  "IOSH Managing Safely",
  "Highfield First Aid (Levels 1–4)",
  "STI – Scaffold Training Institute",
  "NFPA Training",
];
const MAX_RESULTS = 6;

/**
 * Homepage hero search: a combobox whose list shows popular courses on focus and filters as you
 * type. Picking a course goes straight to it (its page, or the Courses enquiry popup, like the
 * menu). Enter without a pick searches the Courses page; an empty search opens all courses.
 * Without JavaScript it is still a plain GET form to /courses?q=.
 */
export function HeroCourseSearch({ courses }: { courses: SearchableCourse[] }) {
  const router = useRouter();
  const listId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const popular = useMemo(
    () =>
      popularTitles
        .map((title) => courses.find((course) => course.title === title))
        .filter((course): course is SearchableCourse => Boolean(course)),
    [courses],
  );
  const trimmed = query.trim();
  const matches = useMemo(
    () => (trimmed ? searchCourses(trimmed, courses).slice(0, MAX_RESULTS) : popular),
    [trimmed, courses, popular],
  );
  // Options: the course matches, plus "search all" when something has been typed.
  const optionCount = matches.length + (trimmed ? 1 : 0);
  const showList = open && optionCount > 0;

  const optionId = (index: number) => `${listId}-option-${index}`;

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };
  const searchAll = () => go(trimmed ? `/courses?q=${encodeURIComponent(trimmed)}` : "/courses");
  const choose = (index: number) => (index < matches.length ? go(matches[index].href) : searchAll());

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (showList && activeIndex >= 0) choose(activeIndex);
    else searchAll();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((index) => (optionCount ? (index + 1) % optionCount : -1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((index) => (optionCount ? (index <= 0 ? optionCount - 1 : index - 1) : -1));
    } else if (event.key === "Escape") {
      setOpen(false);
      setActiveIndex(-1);
    }
  };

  return (
    <form
      action="/courses"
      method="get"
      role="search"
      onSubmit={onSubmit}
      className="relative hidden md:mt-8 md:block md:max-w-lg"
      onBlur={(event) => {
        // Close when focus leaves the whole search (input and list), not when moving between them.
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <div className="flex h-14 items-center rounded-full bg-white pl-5 pr-1.5 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)] focus-within:ring-4 focus-within:ring-white/35 md:h-16 md:pr-2">
        <Search className="h-5 w-5 shrink-0 text-navy-deep" aria-hidden="true" />
        <label htmlFor="hero-course-search" className="sr-only">
          Search for a course
        </label>
        <input
          ref={inputRef}
          id="hero-course-search"
          name="q"
          type="search"
          autoComplete="off"
          placeholder="Search for a course…"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={showList}
          aria-controls={listId}
          aria-activedescendant={showList && activeIndex >= 0 ? optionId(activeIndex) : undefined}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
            setActiveIndex(-1);
          }}
          onFocus={() => {
            setOpen(true);
            // Phones: the box sits low in the hero, so lift it under the header; otherwise the
            // on-screen keyboard would cover the suggestions.
            if (window.matchMedia("(max-width: 767px)").matches && inputRef.current) {
              const header = parseFloat(document.documentElement.style.getPropertyValue("--site-header-height")) || 72;
              const top = inputRef.current.getBoundingClientRect().top + window.scrollY - header - 16;
              window.scrollTo({ top, behavior: "smooth" });
            }
          }}
          onClick={() => setOpen(true)}
          onKeyDown={onKeyDown}
          className="h-full min-w-0 flex-1 bg-transparent px-3 text-base text-navy-deep placeholder:text-navy-deep/60 focus:outline-none [&::-webkit-search-cancel-button]:appearance-none"
        />
        <button
          type="submit"
          aria-label="Search courses"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0066b2] text-white transition-colors duration-200 hover:bg-[#00589a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2] md:h-12 md:w-12"
        >
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div
        className={`absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-[20px] bg-white text-navy-deep shadow-[0_24px_48px_-24px_rgba(18,59,109,0.55)] ring-1 ring-navy-deep/10 [text-shadow:none] ${
          showList ? "" : "hidden"
        }`}
      >
        <p className="border-b border-navy-deep/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-navy-deep/75">
          {trimmed ? (matches.length ? "Matching courses" : "No exact match") : "Popular courses"}
        </p>
        <ul id={listId} role="listbox" aria-label="Course suggestions" className="max-h-[min(20rem,50vh)] overflow-y-auto py-1">
          {matches.map((course, index) => (
            <li
              key={course.title}
              id={optionId(index)}
              role="option"
              aria-selected={index === activeIndex}
              // mousedown keeps focus in the input so the list does not close before the click lands.
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => choose(index)}
              onMouseEnter={() => setActiveIndex(index)}
              className={`flex min-h-11 cursor-pointer items-center gap-3 px-4 py-2 ${index === activeIndex ? "bg-[#0066b2]/10" : ""}`}
            >
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-navy-deep">{course.title}</span>
                <span className="block text-xs text-navy-deep/75">
                  {course.track}
                  {course.duration ? ` · ${course.duration}` : ""}
                </span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-[#0066b2]" aria-hidden="true" />
            </li>
          ))}
          {trimmed && (
            <li
              id={optionId(matches.length)}
              role="option"
              aria-selected={activeIndex === matches.length}
              onMouseDown={(event) => event.preventDefault()}
              onClick={searchAll}
              onMouseEnter={() => setActiveIndex(matches.length)}
              className={`flex min-h-11 cursor-pointer items-center gap-2 border-t border-navy-deep/10 px-4 py-2 text-sm font-semibold text-[#0066b2] ${
                activeIndex === matches.length ? "bg-[#0066b2]/10" : ""
              }`}
            >
              <Search className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="truncate">Search all courses for &ldquo;{trimmed}&rdquo;</span>
            </li>
          )}
        </ul>
      </div>
    </form>
  );
}
