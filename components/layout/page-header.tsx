import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

type Crumb = {
  label: string;
  href?: string;
};

const dotGridStyle = {
  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.55) 1.4px, transparent 1.4px)",
  backgroundSize: "16px 16px",
};

export function PageHeader({
  title,
  breadcrumbs,
  image = "/slide-1-construction-safety.webp",
  imageAlt,
  imagePosition = "object-center",
  eyebrow,
  description,
  children,
}: {
  title: string;
  breadcrumbs: Crumb[];
  image?: string;
  imageAlt?: string;
  /** Focal point when the photo is cropped, e.g. "object-[center_25%]" for portrait sources. */
  imagePosition?: string;
  eyebrow?: string;
  description?: string;
  /** Optional content rendered below the breadcrumbs, e.g. a search box. */
  children?: ReactNode;
}) {
  return (
    <section
      className="relative overflow-hidden bg-navy"
      style={{ marginTop: "calc(-1 * var(--site-header-height, 80px))" }}
    >
      <Image
        src={image}
        alt={
          imageAlt ??
          "Construction site safety supervision by Arbrit Safety Training & Consultancy in Dubai, UAE"
        }
        fill
        preload
        quality={65}
        sizes="100vw"
        className={`object-cover ${imagePosition} motion-safe:animate-[hero-settle_1.8s_cubic-bezier(0.16,1,0.3,1)_both]`}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0066b2] via-[#0066b2]/90 to-[#0066b2]/20"
        aria-hidden="true"
      />
      {/* Navy depth rising from the bottom so the photo side does not read flat. */}
      <div
        className="absolute inset-0 bg-[linear-gradient(0deg,rgba(18,59,109,0.55)_0%,rgba(18,59,109,0)_55%)]"
        aria-hidden="true"
      />

      <div aria-hidden="true" className="absolute right-10 top-10 hidden h-24 w-32 opacity-70 sm:block" style={dotGridStyle} />
      <div aria-hidden="true" className="absolute bottom-28 left-[30%] hidden h-16 w-28 opacity-30 md:block" style={dotGridStyle} />

      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-16 w-full text-white sm:h-24"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path fill="currentColor" d="M0,100 L0,60 C240,10 480,90 720,50 C960,10 1200,90 1440,40 L1440,100 Z" />
      </svg>

      <div
        className="relative z-10 mx-auto max-w-7xl px-6 pb-24 sm:pb-32"
        style={{ paddingTop: "calc(var(--site-header-height, 80px) + 2.5rem)" }}
      >
        <Reveal className="max-w-2xl">
          {eyebrow && (
            <p className="inline-flex max-w-full items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-[13px] font-semibold text-white ring-1 ring-white/25 backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {eyebrow}
            </p>
          )}
          <h1
            className={`break-words font-heading text-[clamp(2.25rem,9vw,4.25rem)] leading-[1.04] font-extrabold tracking-[-0.03em] text-white text-balance ${eyebrow ? "mt-4" : ""}`}
          >
            {title}
          </h1>
          {description && <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/90 sm:text-lg">{description}</p>}

          <nav
            aria-label="Breadcrumb"
            className="mt-8 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full bg-[#fff] px-5 py-2.5 text-sm text-[#000] shadow-lg"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex min-w-0 items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />}
                {crumb.href ? (
                  <Link href={crumb.href} className="flex items-center gap-1.5 hover:text-[#0066b2]">
                    {i === 0 && <Home className="h-4 w-4 shrink-0" aria-hidden="true" />}
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="max-w-[60vw] truncate font-semibold sm:max-w-xs">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>

          {children}
        </Reveal>
      </div>
    </section>
  );
}
