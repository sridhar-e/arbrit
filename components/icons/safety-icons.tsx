import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { strokeWidth?: number };

/** Crane hook block on a rope, drawn to sit beside lucide icons (24px grid, round caps). */
export function LiftingHookIcon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2v4" />
      <rect x="8.5" y="6" width="7" height="4.5" rx="1" />
      <path d="M12 10.5V13" />
      <path d="M12 13v4.5a3.25 3.25 0 0 1-6.5 0V16" />
      <path d="M5.5 16l2 1.5" />
    </svg>
  );
}

/** Two-lift scaffold tower with a brace and base plates. */
export function ScaffoldIcon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 3v17" />
      <path d="M18 3v17" />
      <path d="M4 3.5h16" />
      <path d="M6 9.5h12" />
      <path d="M6 15h12" />
      <path d="M6 15l12-5.5" />
      <path d="M4 20.5h4" />
      <path d="M16 20.5h4" />
    </svg>
  );
}
