"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { ArrowRight, Headset, Phone, X } from "lucide-react";
import { contactInfo } from "@/lib/data";

/** Scroll depth (px) at which a visitor is deep enough into the grid to be weighing options. */
const SHOW_AFTER_PX = 900;
const DISMISS_KEY = "arbrit:advisor-prompt-dismissed";
const DISMISS_EVENT = "arbrit:advisor-prompt-change";

function subscribeToDismissal(onChange: () => void) {
  window.addEventListener(DISMISS_EVENT, onChange);
  return () => window.removeEventListener(DISMISS_EVENT, onChange);
}

/** Fallback when sessionStorage is unavailable, so dismissing still works for this page view. */
let memoryDismissed = false;

function readDismissal() {
  try {
    return window.sessionStorage.getItem(DISMISS_KEY) === "1" || memoryDismissed;
  } catch {
    return memoryDismissed;
  }
}

export function AdvisorPrompt({
  targetId = "quick-enquiry",
}: {
  /** Id of the enquiry section this prompt scrolls to — also hides the prompt while in view. */
  targetId?: string;
} = {}) {
  const [scrolledEnough, setScrolledEnough] = useState(false);
  const [targetInView, setTargetInView] = useState(false);
  // Server snapshot is `true` so the prompt renders hidden until the client reads storage.
  const dismissed = useSyncExternalStore(subscribeToDismissal, readDismissal, () => true);

  useEffect(() => {
    const onScroll = () => setScrolledEnough(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Stay quiet while the enquiry form itself is on screen.
  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setTargetInView(entry.isIntersecting),
      { rootMargin: "-10% 0px" },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [targetId]);

  const dismiss = useCallback(() => {
    memoryDismissed = true;
    try {
      window.sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Private mode or storage disabled — dismissal just won't persist across pages.
    }
    window.dispatchEvent(new Event(DISMISS_EVENT));
  }, []);

  const scrollToForm = useCallback(() => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "center" });
    dismiss();
  }, [targetId, dismiss]);

  const visible = scrolledEnough && !targetInView && !dismissed;
  const phone = contactInfo.phones[0];

  return (
    <div
      role="complementary"
      aria-label="Course guidance"
      aria-hidden={!visible}
      className={`fixed bottom-[9.5rem] left-4 right-4 z-40 md:bottom-24 transition-all duration-500 sm:left-auto sm:right-6 sm:w-[21rem] ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <div className="relative overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_18px_40px_-18px_rgba(18,59,109,0.55)]">
        <div aria-hidden="true" className="h-1 bg-gradient-to-r from-[#0066b2] via-[#0066b2]/40 to-[#0066b2]" />

        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss course guidance"
          tabIndex={visible ? undefined : -1}
          className="absolute right-2.5 top-3.5 flex h-7 w-7 items-center justify-center rounded-full text-navy-deep/75 transition hover:bg-navy/5 hover:text-navy-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>

        <div className="flex gap-3 p-4 pr-10">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0066b2]/10 text-[#0066b2] ring-1 ring-inset ring-[#0066b2]/15"
          >
            <Headset className="h-5 w-5" />
          </span>

          <div className="min-w-0">
            <p className="font-heading text-sm font-bold leading-snug text-navy-deep">
              Not sure which course is right for you?
            </p>
            <p className="mt-1 text-xs leading-snug text-navy-deep/75">
              Our training advisors will match you to the right accreditation.
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={scrollToForm}
                tabIndex={visible ? undefined : -1}
                className="inline-flex items-center rounded-lg bg-[#0066b2] px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#0066b2]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
              >
                Talk to an advisor
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" aria-hidden="true" />
              </button>

              {phone && (
                <a
                  href={`tel:${phone.number.replace(/\s+/g, "")}`}
                  tabIndex={visible ? undefined : -1}
                  className="inline-flex items-center rounded-lg border border-navy/15 px-3 py-2 text-xs font-semibold text-[#0066b2] transition hover:bg-[#0066b2]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
                >
                  <Phone className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                  Call
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
