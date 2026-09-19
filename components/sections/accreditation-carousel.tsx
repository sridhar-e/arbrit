"use client";

import Image from "next/image";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

const logos = [
  { src: "/accreditation/adnoc.png", alt: "ADNOC" },
  { src: "/accreditation/HABCLogo.jpg", alt: "HABC" },
  { src: "/accreditation/ICV.webp", alt: "ICV" },
  { src: "/accreditation/iemalogo.jpg", alt: "IEMA" },
  { src: "/accreditation/iosh.png", alt: "IOSH" },
  { src: "/accreditation/LEEA-Logo.png", alt: "LEEA" },
  { src: "/accreditation/medic-first-aid.jpg", alt: "Medic First Aid" },
  { src: "/accreditation/permit.png", alt: "Permit" },
  { src: "/accreditation/PSMA.webp", alt: "PSMA" },
  { src: "/accreditation/Rakez-Logo.jpg", alt: "RAKEZ" },
  { src: "/accreditation/STI-LOGO.jpg", alt: "STI" },
  { src: "/accreditation/taqa.webp", alt: "TAQA" },
  { src: "/accreditation/trakhees.jpg", alt: "Trakhees" },
  { src: "/accreditation/tsi-logo.webp", alt: "TSI" },
];

const edgeFade = {
  maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
  WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
};

function LogoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl bg-white p-4 shadow-[0_10px_24px_-18px_rgba(18,59,109,0.45)] sm:h-24 sm:w-40">
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={`${alt} accredited training partner logo`}
          fill
          sizes="160px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export function AccreditationCarousel() {
  const shouldReduceMotion = usePrefersReducedMotion();

  return (
    <section aria-labelledby="accreditation-heading" className="overflow-hidden bg-[#f5f7fa] py-12 md:py-16">
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
          <div className="mt-6 flex flex-wrap gap-3 sm:gap-4 lg:mt-0 lg:flex-1">
            {logos.map((logo) => (
              <LogoCard key={logo.src} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        ) : (
          <div className="relative mt-6 overflow-hidden py-3 lg:mt-0 lg:min-w-0 lg:flex-1" style={edgeFade}>
            <div
              className="flex w-max gap-4 animate-marquee"
              style={{ animationDuration: "36s" }}>
              {[...logos, ...logos].map((logo, i) => (
                <LogoCard key={`${logo.src}-${i}`} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
