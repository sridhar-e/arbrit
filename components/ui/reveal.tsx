import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Seconds of stagger for siblings; pushes the start of the reveal slightly later in the scroll. */
  delay?: number;
  /** Direction the element travels in from. */
  from?: "bottom" | "left" | "right";
  className?: string;
};

/**
 * Fades and slides its content in as it scrolls into view. Pure CSS (see `.reveal` in
 * globals.css): no JavaScript, and content is never hidden if the browser lacks scroll timelines
 * or the visitor prefers reduced motion.
 */
export function Reveal({ children, delay = 0, from = "bottom", className }: RevealProps) {
  const style: CSSProperties | undefined = delay
    ? { animationRangeStart: `entry ${Math.min(40, Math.round(delay * 60))}%` }
    : undefined;
  return (
    <div className={["reveal", from !== "bottom" ? `reveal-${from}` : "", className ?? ""].filter(Boolean).join(" ")} style={style}>
      {children}
    </div>
  );
}
