"use client";

import { useFloatingUiVisible } from "@/components/ui/use-floating-ui-visible";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const visible = useFloatingUiVisible();

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
      className={`fixed bottom-[5.25rem] right-6 z-50 md:bottom-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#0066b2] text-white shadow-lg transition-all duration-300 hover:bg-[#0066b2]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
