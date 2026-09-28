"use client";

import Image from "next/image";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

// Trimmed copies in /accreditation/tiles: the blank margin in the original files made some marks tiny.
// `scale` evens out visual weight: wide or solid marks fill a tile with more ink than tall ones.
const logos: { src: string; alt: string; scale?: number }[] = [
  { src: "/accreditation/tiles/adnoc.webp", alt: "ADNOC" },
  { src: "/accreditation/tiles/highfield.webp", alt: "Highfield", scale: 0.9 },
  { src: "/accreditation/tiles/icv.webp", alt: "ICV" },
  { src: "/accreditation/tiles/iosh.webp", alt: "IOSH" },
  { src: "/accreditation/tiles/leea.webp", alt: "LEEA" },
  { src: "/accreditation/tiles/medic-first-aid.webp", alt: "Medic First Aid", scale: 0.8 },
  { src: "/accreditation/tiles/nfpa.webp", alt: "NFPA Authorized Training Provider" },
  { src: "/accreditation/tiles/dcas-permit.webp", alt: "DCAS permit", scale: 0.72 },
  { src: "/accreditation/tiles/pasma.webp", alt: "PASMA", scale: 0.88 },
  { src: "/accreditation/tiles/rakez.webp", alt: "RAKEZ" },
  { src: "/accreditation/tiles/rospa.webp", alt: "RoSPA", scale: 0.8 },
  { src: "/accreditation/tiles/european-safety-council.webp", alt: "European Safety Council" },
  { src: "/accreditation/tiles/sti.webp", alt: "STI" },
  { src: "/accreditation/tiles/taqa.webp", alt: "TAQA", scale: 0.82 },
  { src: "/accreditation/tiles/trakhees-mark.webp", alt: "Trakhees", scale: 0.9 },
  { src: "/accreditation/tiles/tsi.webp", alt: "TSI" },
];

const edgeFade = {
  maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
  WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
};

function LogoCard({ src, alt, scale = 1 }: { src: string; alt: string; scale?: number }) {
  return (
    <div className="flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl bg-white px-3 py-2.5 shadow-[0_10px_24px_-18px_rgba(18,59,109,0.45)] sm:h-28 sm:w-48 sm:px-4 sm:py-3">
      <div className="relative" style={{ width: `${scale * 100}%`, height: `${scale * 100}%` }}>
        <Image
          src={src}
          alt={`${alt} accredited training partner logo`}
          fill
          sizes="(min-width: 640px) 160px, 120px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export function AccreditationCarousel() {
  const shouldReduceMotion = usePrefersReducedMotion();

  return (
    <section aria-labelledby="accreditation-heading" className="overflow-hidden bg-[#f5f7fa] pb-6 pt-7 md:py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:flex lg:items-center lg:gap-12">
        <div className="shrink-0 lg:w-64">
          <h2
            id="accreditation-heading"
            className="font-heading text-[28px] font-extrabold leading-tight tracking-[-0.02em] text-navy-deep md:text-4xl"
          >
            Accreditations and approvals
          </h2>
        </div>

        {shouldReduceMotion ? (
          <div className="mt-4 flex flex-wrap gap-3 sm:gap-4 lg:mt-0 lg:flex-1">
            {logos.map((logo) => (
              <LogoCard key={logo.src} {...logo} />
            ))}
          </div>
        ) : (
          <div className="relative mt-3 overflow-hidden py-3 lg:mt-0 lg:min-w-0 lg:flex-1" style={edgeFade}>
            <div
              className="flex w-max gap-4 animate-marquee"
              style={{ animationDuration: "36s" }}>
              {[...logos, ...logos].map((logo, i) => (
                <LogoCard key={`${logo.src}-${i}`} {...logo} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
