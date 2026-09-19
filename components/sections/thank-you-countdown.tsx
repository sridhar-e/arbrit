"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

/**
 * Visible countdown that returns to `href` after `seconds`, with a button to go now and a link to
 * stay (WCAG 2.2.1: people must be able to stop a time limit).
 */
export function ThankYouCountdown({ href, label, seconds }: { href: string; label: string; seconds: number }) {
  const router = useRouter();
  const [remaining, setRemaining] = useState(seconds);
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    router.prefetch(href);
  }, [router, href]);

  useEffect(() => {
    if (cancelled) return;
    if (remaining <= 0) {
      router.replace(href);
      return;
    }
    const id = window.setTimeout(() => setRemaining((value) => value - 1), 1000);
    return () => window.clearTimeout(id);
  }, [cancelled, remaining, router, href]);

  return (
    <div className="mt-8">
      <Link
        href={href}
        replace
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0066b2] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#00589a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Go back to {label}
      </Link>
      <p className="mt-5 text-sm text-navy-deep/80" aria-live="polite">
        {cancelled ? (
          "Auto-return stopped. Use the button when you're ready."
        ) : (
          <>
            Returning to {label} in <span className="font-semibold text-navy-deep">{Math.max(remaining, 0)}</span>…{" "}
            <button
              type="button"
              onClick={() => setCancelled(true)}
              className="inline-flex min-h-11 items-center font-semibold text-[#0066b2] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
            >
              Stay on this page
            </button>
          </>
        )}
      </p>
    </div>
  );
}
