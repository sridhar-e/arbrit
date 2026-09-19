/** Shared class strings for the two LEEA landing pages (DESIGN.md: Display heading, pills, form fields). */

export const leeaDisplayHeading =
  "font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-balance";

export const leeaLead = "text-[17px] leading-relaxed md:text-lg";

const pillBase =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

/** Arbrit Blue pill for white and Mist bands. */
export const leeaPrimaryPill = `${pillBase} bg-[#0066b2] text-white hover:bg-[#00589a] focus-visible:outline-[#0066b2]`;

/** Secondary pill on white and Mist bands. */
export const leeaOutlinePill = `${pillBase} bg-white text-[#0066b2] ring-1 ring-inset ring-[#0066b2]/30 hover:bg-[#0066b2]/5 focus-visible:outline-[#0066b2]`;

/** White pill with blue text for Site Navy bands. */
export const leeaLightPill = `${pillBase} bg-white text-[#0066b2] hover:bg-[#f5f7fa] focus-visible:outline-white`;

/** Secondary pill for Site Navy bands. */
export const leeaGhostPill = `${pillBase} text-white ring-1 ring-inset ring-white/30 hover:bg-white/10 focus-visible:outline-white`;

export const leeaFieldClass =
  "h-12 rounded-xl border-transparent bg-[#f5f7fa] pl-10 shadow-none focus-visible:border-[#0066b2] focus-visible:bg-white";
export const leeaFieldIconClass =
  "pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-navy-deep/40 transition-colors group-focus-within:text-[#0066b2]";
export const leeaLabelClass = "text-[13px] font-semibold text-navy-deep";
export const leeaSubmitClass =
  "inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0066b2] text-sm font-semibold text-white transition-colors hover:bg-[#00589a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2] disabled:opacity-70";
