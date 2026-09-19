"use client";

import type { ReactNode } from "react";
import { careerPositionEvent } from "@/components/sections/career-form";

/**
 * Jumps to the application form and asks it to pre-select this position. Without JavaScript it is
 * still a plain link to #apply.
 */
export function CareerApplyLink({ position, className, children }: { position: string; className?: string; children: ReactNode }) {
  return (
    <a
      href="#apply"
      onClick={() => window.dispatchEvent(new CustomEvent(careerPositionEvent, { detail: position }))}
      className={className}
    >
      {children}
    </a>
  );
}
