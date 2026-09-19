"use client";

import Link from "next/link";
import { Send } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/social-icons";
import { useFloatingUiVisible } from "@/components/ui/use-floating-ui-visible";

/**
 * Fixed bottom action bar shown on phones only.
 * Desktop already surfaces these CTAs in the header, and shows the round WhatsApp button
 * instead of this bar, so it hides at `md`.
 * It slides in once the homepage hero has been scrolled past (see useFloatingUiVisible).
 */
export function MobileCtaBar() {
  const visible = useFloatingUiVisible();

  return (
    <div
      role="region"
      aria-label="Quick contact"
      inert={!visible}
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-navy/10 bg-white/95 shadow-[0_-8px_24px_-12px_rgba(18,59,109,0.45)] backdrop-blur-sm transition-[transform,opacity] duration-300 ease-out md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5">
        <a
          href="https://wa.me/971586695300"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#25D366] bg-white text-sm font-semibold text-[#075E54] transition active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#075E54]"
        >
          <WhatsappIcon className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
          WhatsApp
        </a>

        <Link
          href="/contact"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#0066b2] text-sm font-semibold text-white shadow-sm transition active:scale-[0.98] hover:bg-[#0066b2]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          Enquire Now
        </Link>
      </div>
    </div>
  );
}
