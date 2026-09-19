import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.4c0-.87.24-1.46 1.49-1.46H16.5V4.3c-.26-.03-1.15-.11-2.19-.11-2.17 0-3.66 1.32-3.66 3.76v2.1H8.15v3h2.5V21z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.4 8.75h3.1V21H3.4zM9.6 8.75h2.98v1.68h.04c.42-.78 1.44-1.6 2.96-1.6 3.16 0 3.75 2.02 3.75 4.64V21h-3.1v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.16 1.45-2.16 2.96V21H9.6z" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C1.9 8.9 1.9 12 1.9 12s0 3.1.5 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.5-1.7.5-4.8.5-4.8s0-3.1-.5-4.8ZM9.8 15.3V8.7l5.7 3.3Z" />
    </svg>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2.5c-5.25 0-9.5 4.25-9.5 9.5 0 1.68.44 3.3 1.28 4.73L2.5 21.5l4.9-1.28a9.46 9.46 0 0 0 4.64 1.22h.01c5.25 0 9.5-4.25 9.5-9.5s-4.26-9.44-9.51-9.44Zm0 17.36h-.01a7.85 7.85 0 0 1-4-1.1l-.29-.17-2.9.76.78-2.83-.19-.29a7.86 7.86 0 0 1-1.2-4.23c0-4.35 3.54-7.89 7.9-7.89 2.11 0 4.09.82 5.58 2.32a7.83 7.83 0 0 1 2.31 5.58c0 4.35-3.54 7.85-7.98 7.85Zm4.33-5.9c-.24-.12-1.4-.69-1.62-.77-.22-.08-.37-.12-.53.12-.16.24-.6.77-.74.93-.14.16-.27.18-.5.06-.24-.12-1-.37-1.9-1.17-.7-.63-1.18-1.4-1.31-1.64-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.28-.73-1.76-.19-.46-.39-.4-.53-.4h-.45c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.65.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.4-.57 1.6-1.13.2-.55.2-1.02.14-1.13-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.7 10.6 20.4 3h-1.6l-5.8 6.6L8.4 3H3l7 10-7 8h1.6l6.1-7 5 7H21zm-2.2 2.5-.7-1L5.3 4.2h2.4l4.5 6.4.7 1 5.9 8.3h-2.4z" />
    </svg>
  );
}
