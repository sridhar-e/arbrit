"use client";

import Image from "next/image";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import type { ClientLogo } from "@/lib/data";

function LogoCard({ src, alt }: ClientLogo) {
  return (
    <div className="flex h-24 w-40 shrink-0 items-center justify-center rounded-[20px] bg-white p-5 shadow-[0_18px_40px_-28px_rgba(18,59,109,0.5)] ring-1 ring-navy-deep/5">
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={`${alt} — Arbrit Safety corporate training client logo`}
          fill
          sizes="160px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

/** Client logos drifting sideways with faded edges; a wrapped, still grid for reduced motion. */
export function CourseClientsCarousel({ logos }: { logos: ClientLogo[] }) {
  const shouldReduceMotion = usePrefersReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="flex flex-wrap gap-4">
        {logos.map((logo) => (
          <LogoCard key={logo.src} {...logo} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]" style={{ animationDuration: "30s" }}>
        {[...logos, ...logos].map((logo, i) => (
          // Right padding instead of a gap keeps the -50% loop seamless.
          <div key={`${logo.src}-${i}`} className="pr-4" aria-hidden={i >= logos.length ? true : undefined}>
            <LogoCard {...logo} />
          </div>
        ))}
      </div>
    </div>
  );
}
