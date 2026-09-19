import Image from "next/image";

const logos = [
  { src: "/accreditation/adnoc.png", alt: "ADNOC" },
  { src: "/accreditation/ICV.webp", alt: "ICV" },
  { src: "/accreditation/iemalogo.jpg", alt: "IEMA" },
  { src: "/accreditation/iosh.png", alt: "IOSH" },
  { src: "/accreditation/LEEA-Logo.png", alt: "LEEA" },
  { src: "/accreditation/LEEA-Logo.webp", alt: "LEEA" },
  { src: "/accreditation/medic-first-aid.jpg", alt: "Medic First Aid" },
  { src: "/accreditation/permit.png", alt: "Permit" },
  { src: "/accreditation/PSMA.webp", alt: "PSMA" },
  { src: "/accreditation/STI-LOGO.jpg", alt: "STI" },
  { src: "/accreditation/taqa.webp", alt: "TAQA" },
  { src: "/accreditation/tsi-logo.webp", alt: "TSI" },
];

const edgeFade = {
  maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
  WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
};

/**
 * Accreditations as a short strip: heading beside a logo marquee (as on the homepage). Pure CSS:
 * the row renders twice with the copy hidden from screen readers, pauses on hover, and for reduced
 * motion it stops, the copy hides and the row scrolls by hand.
 */
export function LeeaGlobalStandards() {
  return (
    <section aria-labelledby="leea-accreditations-heading" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:flex lg:items-center lg:gap-12">
        <div className="shrink-0 lg:w-72">
          <h2
            id="leea-accreditations-heading"
            className="font-heading text-[28px] font-extrabold leading-tight tracking-[-0.02em] text-navy-deep md:text-4xl"
          >
            Our accreditations &amp; partnerships
          </h2>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-navy-deep/80">
            Arbrit Safety is certified by the world&rsquo;s most prestigious safety organisations.
          </p>
        </div>

        <div
          className="mt-6 overflow-hidden py-3 motion-reduce:overflow-x-auto lg:mt-0 lg:min-w-0 lg:flex-1"
          style={edgeFade}
        >
          <ul
            className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused] motion-reduce:px-4"
            style={{ animationDuration: "36s" }}
          >
            {[...logos, ...logos].map((logo, index) => {
              const isCopy = index >= logos.length;
              return (
                <li
                  key={`${logo.src}-${index}`}
                  aria-hidden={isCopy || undefined}
                  className={`flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl bg-[#f5f7fa] p-4 sm:h-24 sm:w-40 ${
                    isCopy ? "motion-reduce:hidden" : ""
                  }`}
                >
                  <span className="relative h-full w-full">
                    <Image
                      src={logo.src}
                      alt={isCopy ? "" : `${logo.alt} accredited training partner logo`}
                      fill
                      sizes="160px"
                      className="object-contain mix-blend-multiply"
                    />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
