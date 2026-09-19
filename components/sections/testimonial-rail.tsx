"use client";

import { Children, cloneElement, isValidElement, useEffect, useRef, type ReactElement, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

/**
 * Phones: the testimonial row drifts slowly and endlessly, like the accreditation marquee, but it
 * moves the row's real scroll position, so visitors can still swipe either way at any time.
 * The cards are rendered twice; when the drift (or a swipe) passes the first copy it jumps back by
 * exactly one copy's width, which is invisible. Hover, touch and keyboard focus pause it; after a
 * swipe it waits for the momentum to settle before drifting again.
 *
 * The duplicate copy is aria-hidden, hidden from `sm` (where the row becomes a static grid) and
 * hidden for reduced-motion visitors via CSS, so server and client render the same markup.
 */
export function TestimonialRail({
  children,
  className,
  speed = 28,
  resumeDelay = 1500,
}: {
  children: ReactNode;
  className?: string;
  /** Drift speed in CSS pixels per second. */
  speed?: number;
  /** How long to wait after the last touch or swipe before drifting again. */
  resumeDelay?: number;
}) {
  const railRef = useRef<HTMLUListElement>(null);
  const shouldReduceMotion = usePrefersReducedMotion();

  const items = Children.toArray(children).filter(isValidElement) as ReactElement<{ className?: string }>[];
  const duplicates = items.map((item, index) =>
    cloneElement(item, {
      key: `duplicate-${item.key ?? index}`,
      "aria-hidden": true,
      className: `${item.props.className ?? ""} sm:hidden motion-reduce:hidden`,
    } as Partial<{ className: string }>),
  );

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || shouldReduceMotion) return;

    let visible = false;
    let held = false;
    let resumeAt = 0;
    let position = rail.scrollLeft;
    let lastWritten = rail.scrollLeft;
    let lastTime = 0;
    let frame = 0;

    // Width of one copy of the cards: the offset of the first duplicate from the first card.
    const loopWidth = () => {
      const first = rail.children[0] as HTMLElement | undefined;
      const firstDuplicate = rail.children[items.length] as HTMLElement | undefined;
      return first && firstDuplicate ? firstDuplicate.offsetLeft - first.offsetLeft : 0;
    };

    const tick = (time: number) => {
      frame = requestAnimationFrame(tick);
      const delta = lastTime ? Math.min(time - lastTime, 64) : 0;
      lastTime = time;

      const scrollable = rail.scrollWidth - rail.clientWidth > 1;
      const loop = loopWidth();
      if (!scrollable || loop <= 0 || !visible || document.hidden) return;

      // A swipe or wheel moved the row: follow it, and keep the loop seamless in both directions.
      if (Math.abs(rail.scrollLeft - lastWritten) > 1) {
        position = rail.scrollLeft;
        if (position >= loop) rail.scrollLeft = position -= loop;
        else if (position <= 0 && !held) rail.scrollLeft = position += loop;
        lastWritten = rail.scrollLeft;
        resumeAt = Math.max(resumeAt, performance.now() + 600);
        return;
      }

      if (held || performance.now() < resumeAt) return;

      position += (speed * delta) / 1000;
      if (position >= loop) position -= loop;
      rail.scrollLeft = position;
      lastWritten = rail.scrollLeft;
    };

    const observer = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting), { threshold: 0.2 });
    observer.observe(rail);

    const hold = () => (held = true);
    const release = () => {
      held = false;
      resumeAt = performance.now() + resumeDelay;
    };
    const nudge = () => (resumeAt = performance.now() + resumeDelay);
    const onPointerEnter = (event: PointerEvent) => event.pointerType === "mouse" && hold();
    const onPointerLeave = (event: PointerEvent) => event.pointerType === "mouse" && release();
    const onFocusOut = (event: FocusEvent) => !rail.contains(event.relatedTarget as Node) && release();

    rail.addEventListener("pointerenter", onPointerEnter);
    rail.addEventListener("pointerleave", onPointerLeave);
    rail.addEventListener("focusin", hold);
    rail.addEventListener("focusout", onFocusOut);
    rail.addEventListener("touchstart", hold, { passive: true });
    rail.addEventListener("touchend", release, { passive: true });
    rail.addEventListener("touchcancel", release, { passive: true });
    rail.addEventListener("wheel", nudge, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      rail.removeEventListener("pointerenter", onPointerEnter);
      rail.removeEventListener("pointerleave", onPointerLeave);
      rail.removeEventListener("focusin", hold);
      rail.removeEventListener("focusout", onFocusOut);
      rail.removeEventListener("touchstart", hold);
      rail.removeEventListener("touchend", release);
      rail.removeEventListener("touchcancel", release);
      rail.removeEventListener("wheel", nudge);
    };
  }, [shouldReduceMotion, speed, resumeDelay, items.length]);

  return (
    <ul ref={railRef} className={className}>
      {items}
      {duplicates}
    </ul>
  );
}
