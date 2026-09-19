# Contact Page Redesign — Design Spec

Date: 2026-08-06

## Goal

Redesign `/contact` (`app/contact/page.tsx` + `components/sections/offices-contact-block.tsx` + `components/sections/contact-form.tsx`) into a premium, modern, 2026-grade layout. No content changes — same offices, phones, addresses, email, socials, form fields, map embed. Visual/layout/motion only.

## Chosen approach: Split hero + floating cards

Selected over a sticky-sidebar-rail layout and a full-bleed dark/light split, both considered and rejected as too dashboard-like or too heavy a departure from the site's existing card-based marketing style (see homepage/course/blog patterns already in the repo).

- Intro band stays centered copy, unchanged text.
- 3 office cards become elevated cards: icon badge, gradient top accent, hover-lift (extends existing `hover:-translate-y-1` pattern), staggered fade-up on scroll via `framer-motion` (already a dependency, used in `hero.tsx`, `testimonials.tsx`).
- Email + socials row becomes a single glass/tinted pill card.
- Form + map become a two-panel "contact console": form on a soft-tinted card with refined input focus states; map gets a rounded frame, ring border, and a floating address badge overlaid on one corner (address text only, from existing `contactInfo.address` — no new content).
- All motion wrapped with `viewport={{ once: true }}` and respects `prefers-reduced-motion` per existing site convention (`globals.css` already guards `hero-ken-burns`).

## Design system (reuse, no new tokens)

- Colors: `--navy`, `--orange`, `--muted`, `--surface` from `app/globals.css` — no new hex values.
- Radii: `rounded-2xl`/`rounded-3xl` per existing card convention.
- Spacing: `py-20 md:py-28` sections, `max-w-7xl mx-auto px-6` container — matches every other page.
- Icons: `lucide-react`, already imported in `offices-contact-block.tsx` / `contact-form.tsx`.
- `PageHeader` (hero band with breadcrumbs) is shared across all pages — out of scope, left untouched.

## Files touched

- `components/sections/offices-contact-block.tsx` — restyle cards, email/social pill, add motion.
- `components/sections/contact-form.tsx` — restyle card/inputs, keep all fields/handlers/validation identical.
- `app/contact/page.tsx` — restructure map panel (floating badge, frame), section spacing/eyebrows.

## Out of scope

- Any copy/content change (office data, phone numbers, addresses, email, socials, form fields, map location).
- Form submit behavior (still local-state no-op, per existing `handleSubmit`).
- `PageHeader` component (shared, used by every page).
- Dark mode.
