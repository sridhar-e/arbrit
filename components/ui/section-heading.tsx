import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  /** ReactNode so sections can swap copy per breakpoint inside a single heading. */
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  /** "home" is the revamped homepage voice: left-aligned, navy, extra-bold display size. */
  variant?: "default" | "home";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  variant = "default",
}: SectionHeadingProps) {
  if (variant === "home") {
    return (
      <Reveal className="max-w-3xl text-left">
        <h2 className="font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-navy-deep text-balance">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-deep/80 md:text-lg">{description}</p>
        )}
      </Reveal>
    );
  }

  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#0066b2]">{eyebrow}</p>
      )}
      <h2 className="font-heading text-3xl font-bold text-[#0066b2] sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base text-[#000]">{description}</p>}
    </Reveal>
  );
}
