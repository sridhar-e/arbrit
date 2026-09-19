"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const PHONE_QUERY = "(max-width: 767px)";
const FALLBACK_SCROLL = 300;

/**
 * Shared show/hide rule for the fixed mobile furniture (Call/Enquire bar, WhatsApp, back-to-top).
 * On phones, a page can mark its hero with `data-reveal-mobile-cta`; the furniture then stays
 * hidden until that hero has scrolled up under the header, so the first screen is clean.
 * Desktop, and pages without a marked hero, fall back to showing after 300px of scroll.
 */
export function useFloatingUiVisible() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const phone = window.matchMedia(PHONE_QUERY);
    let frame = 0;

    const measure = () => {
      frame = 0;
      const hero = phone.matches ? document.querySelector<HTMLElement>("[data-reveal-mobile-cta]") : null;
      if (hero) {
        const header = parseFloat(document.documentElement.style.getPropertyValue("--site-header-height")) || 72;
        setVisible(hero.getBoundingClientRect().bottom <= header);
      } else {
        setVisible(window.scrollY > FALLBACK_SCROLL);
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    phone.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      phone.removeEventListener("change", schedule);
    };
  }, [pathname]);

  return visible;
}
