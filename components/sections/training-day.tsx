"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { BadgeCheck, MapPin } from "lucide-react";

type Step = {
  title: string;
  body: string;
  image: string;
  alt: string;
  chips?: { label: string; kind: "place" | "body" }[];
};

const steps: Step[] = [
  {
    title: "Arrive",
    body: "Train at our centres in Dubai, Abu Dhabi and KSA, or we come to your site.",
    image: "/home/step-arrive.webp",
    alt: "Delegates carrying hard hats and hi-vis vests arriving at a training centre in Dubai",
    chips: [
      { label: "Dubai", kind: "place" },
      { label: "Abu Dhabi", kind: "place" },
      { label: "KSA", kind: "place" },
    ],
  },
  {
    title: "Learn",
    body: "Accredited trainers take you through the theory, standard by standard.",
    image: "/home/step-learn.webp",
    alt: "Trainer explaining sling angles to delegates in hi-vis vests in a classroom",
  },
  {
    title: "Practise",
    body: "Hands-on training with real lifting, rigging and access equipment.",
    image: "/home/step-practise.webp",
    alt: "Trainees in hard hats attaching a shackle and sling to a crane hook",
  },
  {
    title: "Assess",
    body: "Your competence is assessed against the awarding body's standard. 98% course pass rate.",
    image: "/home/step-assess.webp",
    alt: "Assessor with a clipboard watching a harnessed trainee inspect a scaffold",
  },
  {
    title: "Certified",
    body: "Leave with a certificate recognised by international awarding bodies.",
    image: "/home/step-certified.webp",
    alt: "Delegate receiving a framed certificate with a handshake from a trainer",
    chips: [
      { label: "LEEA", kind: "body" },
      { label: "IOSH", kind: "body" },
      { label: "IRCA", kind: "body" },
      { label: "STI", kind: "body" },
    ],
  },
];

/** Exponential ease-out used by every transition in this section. */
const easeClass = "ease-[cubic-bezier(0.16,1,0.3,1)]";

const stepNumber = (index: number) => String(index + 1).padStart(2, "0");

function Chips({ chips }: { chips?: Step["chips"] }) {
  if (!chips) return null;
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {chips.map((chip) => (
        <li
          key={chip.label}
          className="inline-flex items-center gap-1.5 rounded-full bg-[#0066b2]/10 px-3 py-1 text-[13px] font-semibold text-[#0066b2]"
        >
          {chip.kind === "place" ? (
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          ) : (
            <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
          )}
          {chip.label}
        </li>
      ))}
    </ul>
  );
}

/**
 * Phones and tablets: a vertical journey. Each step is its own photo card on a rail that fills
 * as you scroll, and a slim progress bar sticks under the header while the journey is on screen.
 * The active step comes from where each card sits in the viewport, measured on scroll, so it
 * follows native page scrolling (including momentum) without hijacking it.
 */
function StepJourney() {
  const listRef = useRef<HTMLOListElement>(null);
  const railFillRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    let frame = 0;
    const measure = () => {
      frame = 0;
      const line = window.innerHeight * 0.5;
      let next = 0;
      Array.from(list.children).forEach((child, index) => {
        if (child.getBoundingClientRect().top < line) next = index;
      });
      setActive((current) => (current === next ? current : next));
      // Rail fill: how far the middle of the screen has travelled through the list (0 to 1).
      const box = list.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (line - box.top) / Math.max(1, box.height)));
      if (railFillRef.current) railFillRef.current.style.transform = `scaleY(${progress})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Progress segments scroll the step's card to just below the sticky bar.
  const goTo = (index: number) => {
    const card = listRef.current?.children[index] as HTMLElement | undefined;
    if (!card) return;
    const header = parseFloat(document.documentElement.style.getPropertyValue("--site-header-height")) || 72;
    window.scrollTo({ top: card.getBoundingClientRect().top + window.scrollY - header - 72, behavior: "smooth" });
  };

  return (
    <div className="mx-auto mt-8 max-w-2xl pb-16 md:mt-10 lg:hidden">
      <div className="sticky top-[var(--site-header-height,72px)] z-20 bg-white/90 px-5 py-3 backdrop-blur-md sm:px-6">
        <div className="flex items-baseline justify-between gap-3" aria-hidden="true">
          <p className="font-heading text-[15px] font-extrabold tracking-[-0.01em] text-navy-deep">
            <span className="text-[#0066b2]">{stepNumber(active)}</span>
            <span className="text-navy-deep/75"> / {stepNumber(steps.length - 1)}</span>
            <span className="ml-2">{steps[active].title}</span>
          </p>
          <p className="text-[13px] font-semibold text-navy-deep/75">Your training day</p>
        </div>
        <div role="group" aria-label="Go to a step" className="mt-1 grid grid-cols-5 gap-1.5">
          {steps.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Step ${index + 1}: ${item.title}`}
              aria-current={index === active ? "step" : undefined}
              className="rounded-full py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
            >
              <span className="block h-1.5 overflow-hidden rounded-full bg-navy-deep/10">
                <span
                  className={`block h-full origin-left rounded-full bg-[#0066b2] transition-transform duration-500 ease-out ${
                    index <= active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="relative mt-4 px-5 sm:px-6">
        {/* Rail: a hairline track with a blue fill tied to scroll position. */}
        <span
          aria-hidden="true"
          className="absolute bottom-24 left-[39px] top-6 w-0.5 rounded-full bg-navy-deep/10 sm:left-[43px]"
        />
        <span
          ref={railFillRef}
          aria-hidden="true"
          style={{ transform: "scaleY(0)" }}
          className="absolute bottom-24 left-[39px] top-6 w-0.5 origin-top rounded-full bg-[#0066b2] sm:left-[43px]"
        />

        <ol ref={listRef} aria-label="Training day steps" className="relative flex flex-col gap-10">
          {steps.map((item, index) => {
            const isActive = index === active;
            return (
              <li key={item.title} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3">
                <span
                  aria-hidden="true"
                  className={`relative z-10 mt-2 flex h-10 w-10 items-center justify-center rounded-full border-2 font-heading text-[13px] font-extrabold transition-all duration-500 ${
                    index <= active
                      ? "border-[#0066b2] bg-[#0066b2] text-white shadow-[0_8px_18px_-8px_rgba(0,102,178,0.8)]"
                      : "border-navy-deep/15 bg-white text-navy-deep/75"
                  } ${isActive ? "scale-110" : "scale-100"}`}
                >
                  {stepNumber(index)}
                </span>

                <article
                  className={`overflow-hidden rounded-[24px] bg-white ring-1 ring-navy-deep/5 transition-shadow duration-500 ${
                    isActive
                      ? "shadow-[0_24px_48px_-24px_rgba(18,59,109,0.45)]"
                      : "shadow-[0_18px_40px_-28px_rgba(18,59,109,0.5)]"
                  }`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-navy-deep sm:aspect-[16/11]">
                    <div
                      className={`absolute inset-0 transition-transform duration-[1100ms] ${easeClass} ${
                        isActive ? "scale-100" : "scale-[1.06]"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 640px) 560px, 85vw"
                        className="object-cover"
                      />
                    </div>
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 via-40% to-transparent"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <span
                        aria-hidden="true"
                        className="block font-heading text-[64px] font-extrabold leading-[0.8] tracking-[-0.05em] text-white/30"
                      >
                        {stepNumber(index)}
                      </span>
                      <h3 className="mt-1 font-heading text-[30px] font-extrabold leading-tight tracking-[-0.02em] text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-[15px] leading-relaxed text-navy-deep/80">{item.body}</p>
                    <Chips chips={item.chips} />
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

/** Desktop: the photo pins while a vertical step index advances with page scroll. */
function PinnedStory() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Progress through the pinned track (0 at its top, 1 when its end reaches the bottom of the
  // screen) picks the step: five equal slices.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const measure = () => {
      frame = 0;
      const box = track.getBoundingClientRect();
      const span = Math.max(1, box.height - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -box.top / span));
      const next = Math.min(steps.length - 1, Math.floor(progress * steps.length));
      setActive((current) => (current === next ? current : next));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Step buttons scroll to the middle of that step's slice of the pinned track.
  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const top = track.getBoundingClientRect().top + window.scrollY;
    const span = track.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (span * (index + 0.5)) / steps.length, behavior: "smooth" });
  };

  return (
    <div className="hidden lg:block">
      {/* Every step stays in the reading order for assistive tech; the pinned stage is visual. */}
      <ol className="sr-only">
        {steps.map((item, index) => (
          <li key={item.title}>
            Step {index + 1}, {item.title}: {item.body}
          </li>
        ))}
      </ol>

      <div ref={trackRef} className="relative mt-12 h-[500svh]">
        <div className="sticky top-[calc(var(--site-header-height,72px)+0.5rem)] h-[calc(100svh-var(--site-header-height,72px)-1rem)] px-6 pb-6">
          <div className="relative mx-auto grid h-full max-w-7xl grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-center gap-14">
            <ol aria-label="Training day steps" className="order-1 flex flex-col">
              {steps.map((item, index) => {
                const isActive = index === active;
                return (
                  <li
                    key={item.title}
                    className={`border-l-2 pl-8 transition-colors duration-500 ${
                      index <= active ? "border-[#0066b2]" : "border-navy-deep/10"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => goTo(index)}
                      aria-current={isActive ? "step" : undefined}
                      className="group flex w-full items-baseline gap-5 rounded-md py-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
                    >
                      <span
                        className={`w-16 shrink-0 font-heading font-extrabold leading-none tracking-[-0.04em] transition-all duration-500 ease-out ${
                          isActive ? "text-6xl text-[#0066b2]" : "text-2xl text-navy-deep/75 group-hover:text-navy-deep/75"
                        }`}
                      >
                        {stepNumber(index)}
                      </span>
                      <span
                        className={`font-heading font-extrabold leading-tight tracking-[-0.02em] transition-all duration-500 ease-out ${
                          isActive ? "text-5xl text-navy-deep" : "text-2xl text-navy-deep/75 group-hover:text-navy-deep/80"
                        }`}
                      >
                        {item.title}
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                        isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden pl-[6.25rem]">
                        <p className="max-w-md text-lg leading-relaxed text-navy-deep/80">{item.body}</p>
                        <Chips chips={item.chips} />
                        <div className="h-5" />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>

            <div aria-hidden="true" className="relative order-2 h-full overflow-hidden rounded-[24px] bg-navy-deep">
              {steps.map((item, index) => (
                <div
                  key={item.image}
                  className={`absolute inset-0 transition-[opacity,transform] duration-[900ms] ${easeClass} ${
                    index === active ? "scale-100 opacity-100" : "scale-[1.08] opacity-0"
                  }`}
                >
                  <Image src={item.image} alt="" fill sizes="60vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TrainingDay() {
  const shouldReduceMotion = usePrefersReducedMotion();

  return (
    <section aria-labelledby="training-day-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-6 md:pt-24">
        <h2
          id="training-day-heading"
          className="max-w-[16ch] font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-navy-deep text-balance"
        >
          From arrival to certified.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-deep/80 md:text-lg">
          How a training day at Arbrit comes together, from the moment you arrive to the certificate
          in your hand.
        </p>
      </div>

      {shouldReduceMotion ? (
        <ol className="mx-auto mt-10 grid max-w-7xl gap-12 px-5 pb-20 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((item, index) => (
            <li key={item.title}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-navy-deep">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-5">
                <span className="block font-heading text-[44px] font-extrabold leading-none tracking-[-0.04em] text-[#0066b2]">
                  {stepNumber(index)}
                </span>
                <h3 className="mt-2 font-heading text-3xl font-extrabold tracking-[-0.02em] text-navy-deep">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-deep/80">{item.body}</p>
                <Chips chips={item.chips} />
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <>
          <StepJourney />
          <PinnedStory />
        </>
      )}
    </section>
  );
}
