"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function useCountUp(target: number, durationMs = 1500) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();
  // Seed with the real final value so SSR/no-JS output is never "0".
  const [value, setValue] = useState(target);

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      // Initial state already equals `target`, so no update is needed here.
      return;
    }

    // Animate up from 0 now that we're in view client-side. The first
    // rAF frame below sets progress to 0, so no separate reset is needed.
    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / durationMs, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target, durationMs, shouldReduceMotion]);

  return { ref, value };
}
