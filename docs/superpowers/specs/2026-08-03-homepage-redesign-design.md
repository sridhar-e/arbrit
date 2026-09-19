# Homepage Redesign — Design Spec

Date: 2026-08-03

## Goal

Replace the default create-next-app homepage (`app/page.tsx`) with a modern, premium, conversion-focused homepage for Arbrit Safety Training & Consultancy (Health & Safety training institute, Dubai/Abu Dhabi/KSA), built from scratch — not a copy of the existing WordPress-style layout shown in the reference screenshot. Reuse real content (course names, testimonials, accreditation context, section copy) from the reference screenshot; do not reuse its visual layout.

Scope: homepage only (`app/page.tsx` + supporting layout/components). Nav links to other routes (`/courses`, `/about`, `/blog`, `/contact`, etc.) are stubbed hrefs — those pages are out of scope and not created in this pass.

## Stack note (important)

This repo runs **Next.js 16.2.12 / React 19.2.4**, not Next 15 — per `AGENTS.md`, behavior can differ from training-data assumptions. Confirmed from `node_modules/next/dist/docs`:

- `next/image`: `priority` prop is **deprecated as of v16** in favor of `preload` — use `preload={true}` for the LCP/hero image, not `priority`.
- `next/image` config: `images.qualities` allowlist is **required as of v16** if any `quality` prop other than the default (75) is used anywhere — add `images: { qualities: [75] }` (or whatever set is used) to `next.config.ts` if needed.
- `next/font/google` usage is unchanged from prior versions (variable-font pattern, `display: 'swap'`, `variable` + Tailwind `@theme inline` wiring).

No photos are used in this pass (see Content below), so most Image-config edge cases don't apply yet, but the header/hero build must not use the deprecated `priority` prop if/when an `<Image>` is introduced.

## Dependencies to add

- `shadcn/ui` — init with "new-york" style; pulls in `class-variance-authority`, `tailwind-merge`, `clsx`, relevant `@radix-ui/*` packages as components are added (Button, Card, Accordion, Sheet, NavigationMenu, Input, Textarea, Select, Badge).
- `framer-motion` — scroll-triggered reveals, animated counters, testimonial carousel, mega-menu/accordion transitions.
- `lucide-react` — all iconography (nav, course category icons, stat icons, socials).

Tailwind v4 is already installed (`@tailwindcss/postcss`); no separate Tailwind config file is needed — theme tokens go in `app/globals.css` via `@theme`.

## Design system

- **Colors** (defined as CSS variables + Tailwind `@theme` tokens, never hardcoded hex in component files):
  - `--color-navy` `#0B2545` — primary brand color (header, footings, dark sections, headline text)
  - `--color-navy-deep` `#123B6D` — secondary navy for gradients/accents
  - `--color-orange` `#FF6A1A` — CTA/accent color (buttons, highlights, active states)
  - `--color-surface` `#FFFFFF` — page background
  - `--color-muted` `#F5F7FA` — light-gray section background (alternating sections)
- **Typography**: two Google fonts via `next/font/google`, both self-hosted, `display: 'swap'`:
  - Headings: `Plus Jakarta Sans` (geometric, premium feel)
  - Body: `Inter`
  - Wired into Tailwind via `--font-sans` / `--font-heading` CSS variables in `@theme inline`, same pattern as the current `Geist` setup in `app/layout.tsx`.
- **Cards/surfaces**: `rounded-2xl`, soft shadow (`shadow-lg shadow-navy/5` equivalent), thin hairline border on white cards over gray backgrounds.
- **Spacing**: `py-20 md:py-28` per section, `max-w-7xl mx-auto px-6` container standard.
- **Motion**: Framer Motion `whileInView` fade/slide-up (`once: true`) for section content; count-up animation for stats; carousel for testimonials. All motion respects `prefers-reduced-motion` (via Tailwind's `motion-safe:`/`motion-reduce:` variants or Framer's `useReducedMotion` hook).

## File architecture

```
app/
  layout.tsx                     -- fonts, global metadata, mounts Header/Footer
  page.tsx                       -- composes section components, page metadata, JSON-LD
  globals.css                    -- @theme tokens (colors, fonts)
components/
  layout/
    header.tsx                   -- sticky header, mega menu, mobile Sheet (client component)
    footer.tsx
  sections/
    hero.tsx
    trusted-by.tsx
    course-categories.tsx
    featured-courses.tsx
    why-choose-us.tsx             -- animated stats
    certifications.tsx
    corporate-training.tsx
    testimonials.tsx
    latest-blogs.tsx
    faq.tsx
    contact.tsx                   -- form + map placeholder
  ui/                             -- shadcn primitives (button, card, accordion, sheet,
                                      navigation-menu, input, textarea, select, badge)
lib/
  data.ts                         -- typed content: nav items, courses, categories, stats,
                                      accreditations, testimonials, blog posts, faqs
  utils.ts                        -- cn() helper (shadcn default)
```

Each section component takes no props (reads from `lib/data.ts` directly) — keeps `page.tsx` a simple composition root. Section components are server components by default; only components needing interactivity (`Header` mega menu/mobile sheet, `Testimonials` carousel, `Faq` accordion trigger, `Contact` form, any `motion.div` wrapper) are marked `'use client'`.

## Content plan (from reference screenshot, adapted)

Reused verbatim/near-verbatim where legible in the screenshot:

- **Brand**: Arbrit Safety Training & Consultancy LLC. Markets: Dubai, Abu Dhabi, KSA.
- **Headline story**: Arbrit is the first LEEA Licensed Training Partner (LTP) in UAE & KSA, delivering the LEEA Foundation Certificate (FOU) and LAC Diploma — used as the hero's lead announcement/badge.
- **About copy**: platform for quality HSE training programs — Occupational Health & Safety, STI (Scaffold Training Institute), First Aid, Construction Safety, Approved Person for lifting operations, IOSH.
- **Value props** (3 bullets): trained employees are more productive / miss fewer hours; safety awareness reduces legal liability; active participation improves workplace safety culture.
- **International courses**: Rope Access, Lead Auditor, Highfield, IOSH, STI.
- **General safety courses**: Fire Fighting, Rescue Training, Oil & Gas, Construction Safety, First Aid.
- **Resources column**: Revision Materials, White Papers, Interactive, Video, Health & Safety at Work Act 1974, Student Support.
- **HSE Life & Research column**: Programs and Areas, Research, Continuing Certification, Course Calendars.
- **Accreditation badges**: LEEA, IOSH, and comparable HSE accreditation marks — rendered as styled text/badge components (no logo image files available), not fabricated as image assets.
- **Testimonials**: 3 short reviews (paraphrased from screenshot, since exact OCR text is partly illegible) — 5-star ratings, reviewer first name + role only.
- **Blog titles** (3, reused verbatim): "The Role of Accredited Train the Trainer Courses in Meeting UAE OSHAD Compliance Requirements"; "Renew Your LEEA Lifting Supervisor Certification: 3-Year Validity Explained"; "LEEA Training Courses Dubai: From Risk Assessment to Method Statements".
- **Footer course list**: reused category names visible in screenshot footer (Lead Auditor, Rope Access Training, Confined Space Entry & Rescue, Working at Height, Scaffold Erector/Supervisor/Inspector, IOSH Managing/Working Safely, Basic First Aid CPR AED, Fire Warden/Marshal, Gas Awareness, Crane Rigging & Signalling, Environmental Safety Awareness, etc).
- **Tagline banner**: "Start Building Your Own Skills" + "We Also Supply HSE Officers for Short Term and Long Term Projects" — reused as two separate CTA banners (hero secondary CTA + a mid-page corporate-training CTA).

**Not reused (explicitly, to avoid publishing unverified business info)**: exact phone numbers, email addresses, and street address from the screenshot are low-resolution/partly illegible. `lib/data.ts` will use clearly-marked placeholder contact fields (e.g. `phone: "+971 4 XXX XXXX"`, `email: "info@arbritsafety.com"` only if legible, else a placeholder) with a short code comment flagging them for the user to confirm/replace — not invented digits presented as real.

**No photography**: hero, course cards, blog cards, testimonial avatars use gradient-mesh placeholder blocks (navy/orange CSS gradients) and Lucide icon motifs instead of photos, per your direction. Structured so swapping in real `next/image` assets later requires no component logic changes — just replacing the placeholder block with an `<Image>` in the same slot.

## Sections (in order) and behavior

1. **Header** — sticky, backdrop-blur + shadow once scrolled past hero. Left: wordmark. Center/right: nav with shadcn `NavigationMenu`-based mega menu under "Courses" (grouped: International / General Safety / Corporate). Right: phone + "Enroll Now" button (orange). Mobile: shadcn `Sheet` slide-out nav.
2. **Hero** — two-column: left headline ("First LEEA Licensed Training Partner in UAE & KSA" framing) + subhead + dual CTA (primary "Enroll Now" orange, secondary "Talk to an Advisor" outline) + inline trust strip (accreditation badges). Right: gradient-mesh visual block with floating stat/badge cards (Framer Motion float animation).
3. **Trusted By / Accreditation** — logo-style badge row (LEEA, IOSH, etc as styled badges), label "Accredited & Recognized By".
4. **Course Categories** — icon grid (Lucide icon per category), hover-lift card, links to course filter (stub href).
5. **Featured Courses** — card grid (Rope Access, Lead Auditor, Highfield, IOSH, STI, +General ones), each card: icon/gradient thumb, title, duration/level badge, "View Course" link.
6. **Why Choose Us** — animated stat counters (e.g. years active, students trained, pass rate, accredited courses) using Framer Motion `useInView` + count-up, 4-stat grid over navy background band.
7. **International Certifications** — badge showcase with 1-line description per certification body (LEEA, IOSH, etc), consistent with Trusted By but more detailed.
8. **Corporate Training** — split section: left copy ("We Also Supply HSE Officers for Short & Long Term Projects" + bullet value props), right CTA card "Request Corporate Training Quote".
9. **Student Testimonials** — Framer Motion carousel (auto-advance + manual controls), star rating, quote, reviewer name.
10. **Latest Blogs** — 3-card grid using the 3 real blog titles, gradient placeholder thumb, "Read More" link (stub href).
11. **FAQ** — shadcn `Accordion`, 5-6 common HSE-training questions (course validity, accreditation recognition, group bookings, corporate training, certificate delivery).
12. **Contact + Map** — two columns: form (Name, Email, Phone, Course select, Location select, Message — shadcn `Input`/`Select`/`Textarea`, client component, local state only, no backend submit wired in this pass — button shows a "not yet connected" no-op or simple validation-only state) + map placeholder (styled div with pin icon, not a live embed, to avoid requiring an API key).
13. **Footer** — 4-column: courses list (from footer content plan above), company info + placeholder contact fields, newsletter input, quick links, social icons (Lucide), copyright line.

## SEO & accessibility

- `metadata` export in `app/layout.tsx` (site-wide title template, description, OpenGraph, robots) and `app/page.tsx` (page-specific title/description).
- JSON-LD `EducationalOrganization` structured data script in `page.tsx`.
- Semantic landmarks (`header`, `nav`, `main`, `section` per block, `footer`), single `h1` in hero, logical `h2`/`h3` per section.
- All interactive elements keyboard-reachable with visible focus rings (orange focus-visible ring token); form inputs have associated `<label>`s; icon-only buttons get `aria-label`.
- Images (once introduced) require descriptive `alt`; decorative gradient blocks are `aria-hidden`.

## Out of scope

- Any route other than `/` (no `/courses`, `/about`, `/blog`, `/contact` pages — nav links stub to these paths).
- Real photography/logo image files.
- Live form submission backend / email sending.
- Live map embed (requires API key).
- Dark mode (not requested).
