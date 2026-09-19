"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import Link from "next/link";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { Flame, HardHat, Users } from "lucide-react";
import { HeroCourseSearch } from "@/components/sections/hero-course-search";
import type { SearchableCourse } from "@/lib/course-search";
import { LiftingHookIcon, ScaffoldIcon } from "@/components/icons/safety-icons";

export type HeroSlide = {
  id: string;
  /** Describes the photo (read by search engines; the photo layer itself is decorative for screen readers). */
  alt: string;
  desktopSrcSet: string;
  mobileSrcSet: string;
  src: string;
  width: number;
  height: number;
  /** object-position classes for the landscape crop (md and up). */
  positionClassName: string;
  /** Phones: optional upward shift when the subject's face sits low in the portrait crop. */
  mobileShiftClassName?: string;
};

type CategoryIcon = ComponentType<{ className?: string; strokeWidth?: number; "aria-hidden"?: boolean }>;

// Shortcuts land on the course directory, which reads ?q= / ?category= on mount.
const categories: { label: string; href: string; icon: CategoryIcon }[] = [
  { label: "Workplace Safety", href: "/courses?category=General%20Safety", icon: HardHat },
  { label: "Lifting & Rigging", href: "/courses?q=LEEA", icon: LiftingHookIcon },
  { label: "Fire Safety", href: "/courses?q=Fire", icon: Flame },
  { label: "Scaffolding", href: "/courses?q=STI", icon: ScaffoldIcon },
];

/**
 * Homepage hero: cross-fading photo backdrop behind fixed copy, course search and category
 * shortcuts. Pauses on hover and keyboard focus, skips hidden tabs, and never auto-advances
 * for visitors who prefer reduced motion.
 */
export function HeroCarousel({
  slides,
  courses,
  interval = 6500,
}: {
  slides: HeroSlide[];
  /** Course search index, built on the server (lib/course-links). */
  courses: SearchableCourse[];
  interval?: number;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = usePrefersReducedMotion();
  // Only the first photo loads with the page; the other slides are added once the page has
  // finished loading, well before the first slide change, so they never compete with it.
  const [restLoaded, setRestLoaded] = useState(false);

  useEffect(() => {
    const load = () => window.setTimeout(() => setRestLoaded(true), 1200);
    if (document.readyState === "complete") {
      const id = load();
      return () => window.clearTimeout(id);
    }
    let id = 0;
    const onLoad = () => (id = load());
    window.addEventListener("load", onLoad, { once: true });
    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(id);
    };
  }, []);


  useEffect(() => {
    if (shouldReduceMotion || paused || slides.length < 2) return;
    const id = window.setInterval(() => {
      if (!document.hidden) setActive((index) => (index + 1) % slides.length);
    }, interval);
    return () => window.clearInterval(id);
    // `active` restarts the timer on every change, so a tapped dot always gets a full interval.
  }, [shouldReduceMotion, paused, slides.length, interval, active]);

  return (
    <section
      data-reveal-mobile-cta
      aria-roledescription="carousel"
      aria-label="Arbrit training highlights"
      className="relative isolate z-10 bg-navy-deep text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/*
        Phones: the portrait photo keeps its own aspect ratio (1152x2037) pinned to the top, so the
        subject's face always lands in the same place however tall the browser viewport is, and the
        copy starts below it. From md up the landscape photo covers the whole section.
      */}
      {/* Clips the photos to the section; the section itself does not clip, so search suggestions can overflow it. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[176.8vw] overflow-hidden md:inset-0 md:h-auto">
        {slides.map((slide, index) => (
          <picture
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${slide.mobileShiftClassName ?? ""} ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          >
            {(index === 0 || restLoaded) && (
              <>
            <source media="(min-width: 768px)" srcSet={slide.desktopSrcSet} />
            <source srcSet={slide.mobileSrcSet} />
            {/* Art-directed <picture>: the srcSets already come from next/image's optimiser (getImageProps). */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.src}
              width={slide.width}
              height={slide.height}
              alt={slide.alt}
              decoding="async"
              loading="eager"
              fetchPriority={index === 0 ? "high" : "low"}
              className={`h-full w-full object-cover object-top ${slide.positionClassName} ${
                index === active ? "motion-safe:animate-[hero-settle_7s_cubic-bezier(0.16,1,0.3,1)_both]" : ""
              }`}
            />
              </>
            )}
          </picture>
        ))}
        {/* Phones: clear over the face, deepening to solid navy where the copy sits. */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,59,109,0.6)_0%,rgba(18,59,109,0)_13%,rgba(18,59,109,0)_28%,rgba(18,59,109,0.6)_40%,rgba(18,59,109,0.92)_50%,#123b6d_60%)] md:hidden" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,#123b6d_0%,rgba(18,59,109,0.86)_34%,rgba(18,59,109,0.2)_64%,rgba(18,59,109,0)_100%)] md:block" />
      </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col px-5 pb-2 pt-[max(96px,69vw)] sm:px-6 md:min-h-[min(84svh,780px)] md:justify-center md:pb-6 md:pt-[calc(var(--site-header-height,80px)+2rem)]">
        <div className="max-w-xl [text-shadow:0_2px_18px_rgba(18,59,109,0.55)] md:[text-shadow:none]">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/90 sm:text-sm">
            Accredited Health &amp; Safety Training
          </p>
          <h1 className="mt-3 font-heading text-[clamp(2.5rem,11vw,4.75rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-balance">
            Skills for a Safer Tomorrow
          </h1>
          <p className="mt-4 max-w-[30ch] text-[17px] leading-snug text-white/90 sm:text-lg md:max-w-md md:text-xl">
            Build safer workplaces. Develop competent professionals.
          </p>

          <HeroCourseSearch courses={courses} />

          <nav aria-label="Course categories" className="mt-7 md:mt-10 md:max-w-lg">
            <ul className="grid grid-cols-4 divide-x divide-white/25">
              {categories.map(({ label, href, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group flex h-full min-h-11 flex-col items-center gap-2 rounded-md px-1 py-1 text-center text-[13px] font-medium leading-tight text-white/95 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-sm"
                  >
                    <Icon
                      strokeWidth={1.5}
                      aria-hidden
                      className="h-8 w-8 transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
                    />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {slides.length > 1 && (
        <div className="mx-auto flex max-w-7xl px-5 pb-4 sm:px-6 md:pb-8">
          <div role="group" aria-label="Choose a slide" className="-ml-1 flex items-center">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show photo ${index + 1} of ${slides.length}`}
                aria-current={index === active ? "true" : undefined}
                className="group flex h-11 items-center rounded-full px-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-500 ease-out ${
                    index === active ? "w-7 bg-white" : "w-2 bg-white/45 group-hover:bg-white/80"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="bg-[#0066b2]">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-4 sm:px-6 md:py-5">
          <Users className="h-7 w-7 shrink-0" strokeWidth={1.75} aria-hidden="true" />
          <p className="text-[15px] leading-snug sm:text-base">
            Trusted by <strong className="font-semibold">15,000+ professionals</strong> across the UAE and
            KSA.
          </p>
        </div>
      </div>
    </section>
  );
}
