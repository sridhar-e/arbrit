# Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the default create-next-app homepage with a premium, conversion-focused homepage for Arbrit Safety Training & Consultancy, per `docs/superpowers/specs/2026-08-03-homepage-redesign-design.md`.

**Architecture:** Server-component section files under `components/sections/`, composed by `app/page.tsx`. A typed content module (`lib/data.ts`) is the single source of truth for nav/course/testimonial/blog/FAQ data. Only components needing interactivity (`Header`, `Testimonials`, `Contact`) are client components. shadcn/ui supplies primitives; Framer Motion supplies scroll-reveal/counter/carousel motion; Lucide supplies all icons. No photography — gradient-mesh placeholder blocks stand in for images.

**Tech Stack:** Next.js 16.2.12, React 19.2.4, TypeScript, Tailwind CSS v4.3.3, shadcn/ui, Framer Motion, lucide-react.

## Global Constraints

- Repo runs Next.js **16.2.12** — `next/image`'s `priority` prop is deprecated in favor of `preload` (not used in this pass since no `next/image` usage is planned; note only applies if a future task adds images).
- No photography/logo image files — placeholders are CSS gradient blocks + Lucide icons (per approved spec).
- Homepage only — nav links to `/courses`, `/about`, `/blog`, `/contact`, etc. are stub `href`s; those routes are not created.
- No live form backend, no live map embed, no dark mode (out of scope per spec).
- Colors/fonts are theme tokens (`--color-navy`, `--color-navy-deep`, `--color-orange`, `--color-surface`, `--color-muted`, `--font-sans`, `--font-heading`) — never hardcode hex/font names in component files.
- Contact phone/email/address in `lib/data.ts` are explicitly flagged placeholders (screenshot source illegible) — do not present them as verified.
- Confirmed via `node_modules/next/dist/docs`: `next/font/google` usage (variable font + `display: 'swap'` + `variable` + Tailwind `@theme inline`) is unchanged from prior Next versions.
- Confirmed via `node_modules/tailwindcss` v4.3.3 compiled output: `bg-gradient-to-*` utilities are still supported (legacy alias alongside `bg-linear-to-*`) — safe to use in this codebase.

---

### Task 1: Install dependencies, scaffold shadcn/ui, add theme tokens

**Files:**
- Modify: `package.json` (via npm install)
- Create: `components.json`, `components/ui/button.tsx`, `components/ui/card.tsx`, `components/ui/badge.tsx`, `components/ui/accordion.tsx`, `components/ui/sheet.tsx`, `components/ui/navigation-menu.tsx`, `components/ui/input.tsx`, `components/ui/textarea.tsx`, `components/ui/select.tsx`, `lib/utils.ts` (all shadcn-CLI-generated)
- Modify: `app/globals.css`

**Interfaces:**
- Produces: Tailwind theme tokens `--color-navy`, `--color-navy-deep`, `--color-orange`, `--color-surface`, `--color-muted` (usable as `bg-navy`, `text-orange`, `border-navy/10`, etc. in every later task) and `--font-sans` / `--font-heading` (usable as `font-sans` / `font-heading`, wired to actual fonts in Task 6). Produces shadcn primitives importable from `@/components/ui/*` and the `cn()` helper from `@/lib/utils`.
- Consumes: nothing (first task).

- [ ] **Step 1: Install framer-motion and lucide-react**

Run:
```bash
npm install framer-motion lucide-react
```

- [ ] **Step 2: Initialize shadcn/ui non-interactively**

Run:
```bash
npx shadcn@latest init -y -d -b slate
```

If the CLI still prompts interactively despite the flags, answer: style = New York, base color = Slate, CSS variables = Yes, overwrite `app/globals.css` = Yes.

- [ ] **Step 3: Add required shadcn/ui components**

Run:
```bash
npx shadcn@latest add button card badge accordion sheet navigation-menu input textarea select -y -o
```

Verify: `components/ui/` now contains `button.tsx`, `card.tsx`, `badge.tsx`, `accordion.tsx`, `sheet.tsx`, `navigation-menu.tsx`, `input.tsx`, `textarea.tsx`, `select.tsx`, and `lib/utils.ts` exports `cn`.

- [ ] **Step 4: Append brand theme tokens to `app/globals.css`**

Open `app/globals.css` (now containing shadcn's generated tokens from Step 2) and append this block to the **end** of the file:

```css
:root {
  --navy: #0b2545;
  --navy-deep: #123b6d;
  --orange: #ff6a1a;
  --surface: #ffffff;
  --muted: #f5f7fa;
}

@theme inline {
  --color-navy: var(--navy);
  --color-navy-deep: var(--navy-deep);
  --color-orange: var(--orange);
  --color-surface: var(--surface);
  --color-muted: var(--muted);
  --font-sans: var(--font-inter);
  --font-heading: var(--font-plus-jakarta-sans);
}

body {
  font-family: var(--font-sans), Arial, Helvetica, sans-serif;
}
```

(`--font-inter` and `--font-plus-jakarta-sans` are defined by the font loaders added in Task 6 — this block only needs to exist now; it will resolve once Task 6 lands.)

- [ ] **Step 5: Typecheck and lint**

Run:
```bash
npx tsc --noEmit
npm run lint
```
Expected: both pass with no errors.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: install shadcn/ui, framer-motion, lucide-react; add brand theme tokens"
```

---

### Task 2: Content data module

**Files:**
- Create: `lib/data.ts`

**Interfaces:**
- Consumes: `LucideIcon` type + icon components (`Anchor`, `ClipboardCheck`, `GraduationCap`, `ShieldCheck`, `Layers`, `Flame`, `LifeBuoy`, `Fuel`, `HardHat`, `HeartPulse`) from `lucide-react` (Task 1).
- Produces (consumed by every later section task): types `NavLink`, `MegaMenuGroup`, `CourseCategory`, `Course`, `Stat`, `Accreditation`, `Testimonial`, `BlogPost`, `Faq`, `FooterLinkGroup`; data arrays `navLinks`, `coursesMegaMenu`, `courseCategories`, `featuredCourses`, `stats`, `accreditations`, `testimonials`, `blogPosts`, `faqs`, `footerCourseColumns`, `courseSelectOptions`, `locationSelectOptions`; object `contactInfo`.

- [ ] **Step 1: Create `lib/data.ts`**

```ts
import type { LucideIcon } from "lucide-react";
import {
  Anchor,
  ClipboardCheck,
  GraduationCap,
  ShieldCheck,
  Layers,
  Flame,
  LifeBuoy,
  Fuel,
  HardHat,
  HeartPulse,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type MegaMenuGroup = {
  title: string;
  links: NavLink[];
};

export type CourseCategory = {
  slug: string;
  title: string;
  icon: LucideIcon;
  href: string;
};

export type Course = {
  slug: string;
  title: string;
  category: "International" | "General Safety";
  duration: string;
  level: string;
  icon: LucideIcon;
  href: string;
};

export type Stat = {
  label: string;
  value: number;
  suffix: string;
};

export type Accreditation = {
  name: string;
  description: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export type BlogPost = {
  title: string;
  excerpt: string;
  category: string;
  href: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type FooterLinkGroup = {
  title: string;
  links: NavLink[];
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Consultancy", href: "/consultancy" },
  { label: "Career", href: "/career" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export const coursesMegaMenu: MegaMenuGroup[] = [
  {
    title: "International Courses",
    links: [
      { label: "Rope Access", href: "/courses/rope-access" },
      { label: "Lead Auditor", href: "/courses/lead-auditor" },
      { label: "Highfield", href: "/courses/highfield" },
      { label: "IOSH", href: "/courses/iosh" },
      { label: "STI Scaffold Training", href: "/courses/sti" },
    ],
  },
  {
    title: "General Safety Courses",
    links: [
      { label: "Fire Fighting", href: "/courses/fire-fighting" },
      { label: "Rescue Training", href: "/courses/rescue-training" },
      { label: "Oil & Gas Safety", href: "/courses/oil-and-gas" },
      { label: "Construction Safety", href: "/courses/construction-safety" },
      { label: "First Aid", href: "/courses/first-aid" },
    ],
  },
  {
    title: "Corporate",
    links: [
      { label: "Corporate Training", href: "/corporate-training" },
      { label: "HSE Officer Supply", href: "/corporate-training#hse-officers" },
    ],
  },
];

export const courseCategories: CourseCategory[] = [
  { slug: "rope-access", title: "Rope Access", icon: Anchor, href: "/courses/rope-access" },
  { slug: "lead-auditor", title: "Lead Auditor", icon: ClipboardCheck, href: "/courses/lead-auditor" },
  { slug: "highfield", title: "Highfield", icon: GraduationCap, href: "/courses/highfield" },
  { slug: "iosh", title: "IOSH", icon: ShieldCheck, href: "/courses/iosh" },
  { slug: "sti", title: "STI Scaffold Training", icon: Layers, href: "/courses/sti" },
  { slug: "fire-fighting", title: "Fire Fighting", icon: Flame, href: "/courses/fire-fighting" },
  { slug: "rescue-training", title: "Rescue Training", icon: LifeBuoy, href: "/courses/rescue-training" },
  { slug: "oil-and-gas", title: "Oil & Gas Safety", icon: Fuel, href: "/courses/oil-and-gas" },
  { slug: "construction-safety", title: "Construction Safety", icon: HardHat, href: "/courses/construction-safety" },
  { slug: "first-aid", title: "First Aid", icon: HeartPulse, href: "/courses/first-aid" },
];

export const featuredCourses: Course[] = [
  { slug: "rope-access", title: "Rope Access", category: "International", duration: "5 Days", level: "All Levels", icon: Anchor, href: "/courses/rope-access" },
  { slug: "lead-auditor", title: "Lead Auditor", category: "International", duration: "5 Days", level: "Advanced", icon: ClipboardCheck, href: "/courses/lead-auditor" },
  { slug: "iosh-managing-safely", title: "IOSH Managing Safely", category: "International", duration: "3 Days", level: "Management", icon: ShieldCheck, href: "/courses/iosh" },
  { slug: "sti-scaffold-inspector", title: "STI Scaffold Inspector", category: "International", duration: "4 Days", level: "Intermediate", icon: Layers, href: "/courses/sti" },
  { slug: "fire-fighting", title: "Fire Fighting", category: "General Safety", duration: "2 Days", level: "All Levels", icon: Flame, href: "/courses/fire-fighting" },
  { slug: "first-aid", title: "Basic First Aid, CPR & AED", category: "General Safety", duration: "1 Day", level: "All Levels", icon: HeartPulse, href: "/courses/first-aid" },
];

export const stats: Stat[] = [
  { label: "Years of Experience", value: 20, suffix: "+" },
  { label: "Students Trained", value: 15000, suffix: "+" },
  { label: "Course Pass Rate", value: 98, suffix: "%" },
  { label: "Accredited Courses", value: 50, suffix: "+" },
];

export const accreditations: Accreditation[] = [
  {
    name: "LEEA",
    description:
      "Official Licensed Training Partner (LTP) — the first in the UAE & KSA — delivering the LEEA Foundation Certificate (FOU) and LAC Diploma.",
  },
  {
    name: "IOSH",
    description:
      "Institution of Occupational Safety and Health recognized Managing Safely and Working Safely programs.",
  },
  {
    name: "OSHAD Aligned",
    description:
      "Training programs structured to meet Abu Dhabi OSHAD occupational health & safety compliance requirements.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Malaakash",
    role: "Course Trainee",
    quote:
      "I fully appreciate and am satisfied with this training. It was very helpful — every topic advertised was covered thoroughly and clearly.",
    rating: 5,
  },
  {
    name: "Hamza Mahar",
    role: "LEEA Trainee",
    quote:
      "I completed my LEEA training at Arbrit Institute and it was a great experience. The instructor was knowledgeable and the institute's coordination was seamless.",
    rating: 5,
  },
  {
    name: "Nadir Khan",
    role: "Corporate Client",
    quote:
      "Arbrit Training & Safety Consultancy provides top-notch training with expert instructors and excellent coordination from start to finish.",
    rating: 5,
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "The Role of Accredited Train the Trainer Courses in Meeting UAE OSHAD Compliance Requirements",
    excerpt:
      "UAE OSHAD regulations require certified trainers. Here's how an accredited Train the Trainer course keeps your organization compliant.",
    category: "Compliance",
    href: "/blog/train-the-trainer-oshad-compliance",
  },
  {
    title: "Renew Your LEEA Lifting Supervisor Certification: 3-Year Validity Explained",
    excerpt:
      "LEEA Lifting Supervisor certification is valid for three years. Here's what's involved in renewing it on time.",
    category: "LEEA",
    href: "/blog/renew-leea-lifting-supervisor-certification",
  },
  {
    title: "LEEA Training Courses Dubai: From Risk Assessment to Method Statements",
    excerpt:
      "A look at how Arbrit's LEEA training courses in Dubai take trainees from risk assessment fundamentals to method statement writing.",
    category: "LEEA",
    href: "/blog/leea-training-courses-dubai",
  },
];

export const faqs: Faq[] = [
  {
    question: "Are Arbrit's courses internationally accredited?",
    answer:
      "Yes. Arbrit is the first LEEA Licensed Training Partner in the UAE & KSA, and also delivers IOSH-recognized programs alongside courses aligned with OSHAD compliance requirements.",
  },
  {
    question: "How long is my certificate valid for?",
    answer:
      "Validity depends on the course — for example, LEEA Lifting Supervisor certification is valid for 3 years. Your certificate will state its exact validity period.",
  },
  {
    question: "Do you offer corporate or group training?",
    answer:
      "Yes. We deliver on-site corporate training for teams of any size, and can tailor course scheduling to your project timeline.",
  },
  {
    question: "Can Arbrit supply HSE officers for our project?",
    answer:
      "Yes. Alongside training, we supply qualified HSE officers for short-term and long-term project deployments.",
  },
  {
    question: "Do you deliver training outside Dubai?",
    answer:
      "Yes. We deliver training across Dubai, Abu Dhabi, and the Kingdom of Saudi Arabia.",
  },
  {
    question: "How soon will I receive my certificate after the course?",
    answer:
      "Certificates are typically issued shortly after successful completion and assessment — your trainer will confirm the exact timeline for your course.",
  },
];

export const footerCourseColumns: FooterLinkGroup[] = [
  {
    title: "Lifting & Access",
    links: [
      { label: "Lead Auditor", href: "/courses/lead-auditor" },
      { label: "Rope Access Training", href: "/courses/rope-access" },
      { label: "Lifting Supervisor Refresher", href: "/courses/lifting-supervisor-refresher" },
      { label: "Crane Rigging & Signalling", href: "/courses/crane-rigging-signalling" },
    ],
  },
  {
    title: "Scaffolding",
    links: [
      { label: "Scaffold Erector", href: "/courses/scaffold-erector" },
      { label: "Scaffold Supervisor", href: "/courses/scaffold-supervisor" },
      { label: "Scaffold Inspector", href: "/courses/scaffold-inspector" },
      { label: "Scaffolding Erection & Inspection", href: "/courses/scaffolding-erection-inspection" },
    ],
  },
  {
    title: "Management Safety",
    links: [
      { label: "IOSH Managing Safely", href: "/courses/iosh-managing-safely" },
      { label: "IOSH Working Safely", href: "/courses/iosh-working-safely" },
      { label: "Train the Trainer", href: "/courses/train-the-trainer" },
      { label: "Working at Height", href: "/courses/working-at-height" },
    ],
  },
  {
    title: "Emergency & Fire",
    links: [
      { label: "Basic First Aid, CPR & AED", href: "/courses/first-aid" },
      { label: "Fire Warden", href: "/courses/fire-warden" },
      { label: "Fire Marshal", href: "/courses/fire-marshal" },
      { label: "Confined Space Entry & Rescue", href: "/courses/confined-space-entry-rescue" },
    ],
  },
];

// TODO(user): verify and replace with confirmed business contact details before
// launch. The reference screenshot was too low-resolution to reliably transcribe
// phone/email/address digits, so these are placeholders, not verified facts.
export const contactInfo = {
  phone: "+971 4 000 0000",
  email: "info@arbritsafety.com",
  address: "Dubai, United Arab Emirates",
};

export const courseSelectOptions = [
  "Rope Access",
  "Lead Auditor",
  "Highfield",
  "IOSH",
  "STI Scaffold Training",
  "Fire Fighting",
  "First Aid",
  "Other",
];

export const locationSelectOptions = ["Dubai", "Abu Dhabi", "Saudi Arabia", "Other"];
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: PASS (no consumers yet, but the file itself must type-check cleanly).

- [ ] **Step 3: Commit**

```bash
git add lib/data.ts
git commit -m "feat: add homepage content data module"
```

---

### Task 3: Shared UI helpers — SectionHeading and AccreditationBadge

**Files:**
- Create: `components/ui/section-heading.tsx`
- Create: `components/ui/accreditation-badge.tsx`

**Interfaces:**
- Consumes: `Accreditation` type from `@/lib/data` (Task 2); `BadgeCheck` icon from `lucide-react`.
- Produces: `SectionHeading({ eyebrow?, title, description?, align? })` and `AccreditationBadge({ name, description })` — used by nearly every section task below.

- [ ] **Step 1: Create `components/ui/section-heading.tsx`**

```tsx
type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange">{eyebrow}</p>
      )}
      <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base text-navy/70">{description}</p>}
    </div>
  );
}
```

- [ ] **Step 2: Create `components/ui/accreditation-badge.tsx`**

```tsx
import type { Accreditation } from "@/lib/data";
import { BadgeCheck } from "lucide-react";

export function AccreditationBadge({ name, description }: Accreditation) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
      <BadgeCheck className="mt-0.5 h-6 w-6 shrink-0 text-orange" aria-hidden="true" />
      <div>
        <p className="font-heading text-base font-semibold text-navy">{name}</p>
        <p className="mt-1 text-sm text-navy/70">{description}</p>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Typecheck**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add components/ui/section-heading.tsx components/ui/accreditation-badge.tsx
git commit -m "feat: add SectionHeading and AccreditationBadge shared components"
```

---

### Task 4: Header (sticky nav + mega menu + mobile sheet)

**Files:**
- Create: `components/layout/header.tsx`

**Interfaces:**
- Consumes: `navLinks`, `coursesMegaMenu`, `contactInfo` from `@/lib/data` (Task 2); `NavigationMenu*` from `@/components/ui/navigation-menu`, `Sheet*` from `@/components/ui/sheet`, `Button` from `@/components/ui/button` (Task 1); `Menu`, `Phone`, `ShieldCheck` from `lucide-react`.
- Produces: `Header()` — a client component, mounted in Task 6's `app/layout.tsx`.

- [ ] **Step 1: Create `components/layout/header.tsx`**

```tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, ShieldCheck } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { navLinks, coursesMegaMenu, contactInfo } from "@/lib/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled ? "bg-surface/90 backdrop-blur shadow-sm" : "bg-surface"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-heading text-xl font-bold text-navy">
          <ShieldCheck className="h-7 w-7 text-orange" aria-hidden="true" />
          Arbrit Safety
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className="px-3 py-2 text-sm font-medium text-navy hover:text-orange">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-navy">
                Courses
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[560px] grid-cols-3 gap-6 p-6">
                  {coursesMegaMenu.map((group) => (
                    <div key={group.title}>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-navy/60">
                        {group.title}
                      </p>
                      <ul className="space-y-2">
                        {group.links.map((link) => (
                          <li key={link.href}>
                            <NavigationMenuLink asChild>
                              <Link href={link.href} className="text-sm text-navy hover:text-orange">
                                {link.label}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {navLinks
              .filter((link) => link.label !== "Home")
              .map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink asChild>
                    <Link href={link.href} className="px-3 py-2 text-sm font-medium text-navy hover:text-orange">
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 text-sm font-medium text-navy">
            <Phone className="h-4 w-4 text-orange" aria-hidden="true" />
            {contactInfo.phone}
          </a>
          <Button asChild className="bg-orange text-white hover:bg-orange/90">
            <Link href="/courses">Enroll Now</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[360px]">
            <SheetTitle className="font-heading text-navy">Menu</SheetTitle>
            <nav className="mt-6 flex flex-col gap-4 px-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-base font-medium text-navy">
                  {link.label}
                </Link>
              ))}
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-navy/60">Courses</p>
                <div className="flex flex-col gap-2">
                  {coursesMegaMenu
                    .flatMap((g) => g.links)
                    .map((link) => (
                      <Link key={link.href} href={link.href} className="text-sm text-navy/80">
                        {link.label}
                      </Link>
                    ))}
                </div>
              </div>
              <Button asChild className="mt-4 bg-orange text-white hover:bg-orange/90">
                <Link href="/courses">Enroll Now</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add components/layout/header.tsx
git commit -m "feat: add sticky header with mega menu and mobile nav"
```

---

### Task 5: Footer

**Files:**
- Create: `components/layout/footer.tsx`

**Interfaces:**
- Consumes: `footerCourseColumns`, `navLinks`, `contactInfo` from `@/lib/data` (Task 2); `Input` from `@/components/ui/input`, `Button` from `@/components/ui/button` (Task 1); `Facebook`, `Instagram`, `Linkedin`, `Mail`, `MapPin`, `Phone`, `Youtube` from `lucide-react`.
- Produces: `Footer()` — server component, mounted in Task 6's `app/layout.tsx`.

- [ ] **Step 1: Create `components/layout/footer.tsx`**

```tsx
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { footerCourseColumns, navLinks, contactInfo } from "@/lib/data";

const socialIcons = [Facebook, Instagram, Linkedin, Youtube];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <p className="font-heading text-xl font-bold">Arbrit Safety</p>
            <p className="mt-3 text-sm text-white/70">
              Arbrit Safety Training &amp; Consultancy LLC — the first LEEA Licensed Training Partner
              in the UAE &amp; KSA, delivering accredited health &amp; safety, lifting, and scaffolding
              training.
            </p>
            <div className="mt-5 space-y-2 text-sm text-white/80">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange" aria-hidden="true" /> {contactInfo.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-orange" aria-hidden="true" /> {contactInfo.email}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-orange" aria-hidden="true" /> {contactInfo.address}
              </p>
            </div>
            <div className="mt-5 flex gap-3">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-orange"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {footerCourseColumns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold uppercase tracking-wide text-white/60">{col.title}</p>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/80 hover:text-orange">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-orange">
                {link.label}
              </Link>
            ))}
          </nav>
          <form className="flex w-full max-w-sm gap-2 md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              placeholder="Subscribe for updates"
              className="border-white/20 bg-white/5 text-white placeholder:text-white/50"
              aria-label="Email address"
              required
            />
            <Button type="submit" className="bg-orange text-white hover:bg-orange/90">
              Join
            </Button>
          </form>
        </div>

        <p className="mt-8 text-xs text-white/50">
          © {new Date().getFullYear()} Arbrit Safety Training &amp; Consultancy LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add components/layout/footer.tsx
git commit -m "feat: add premium footer"
```

---

### Task 6: Wire up `app/layout.tsx` (fonts, Header/Footer, metadata)

**Files:**
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: `Header` from `@/components/layout/header` (Task 4), `Footer` from `@/components/layout/footer` (Task 5), `Inter` and `Plus_Jakarta_Sans` from `next/font/google`.
- Produces: `--font-inter` and `--font-plus-jakarta-sans` CSS variables that Task 1's `globals.css` block references; site-wide `metadata` export.

- [ ] **Step 1: Replace `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Arbrit Safety Training & Consultancy | HSE Courses in Dubai, Abu Dhabi & KSA",
    template: "%s | Arbrit Safety Training & Consultancy",
  },
  description:
    "Arbrit Safety Training & Consultancy is the first LEEA Licensed Training Partner in the UAE & KSA, delivering accredited health & safety, lifting, scaffolding, and fire safety training.",
  openGraph: {
    title: "Arbrit Safety Training & Consultancy",
    description:
      "Accredited health & safety training in Dubai, Abu Dhabi and KSA. First LEEA Licensed Training Partner in the region.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-surface text-navy font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: wire fonts, header, footer, and metadata into root layout"
```

---

### Task 7: Hero section

**Files:**
- Create: `components/sections/hero.tsx`

**Interfaces:**
- Consumes: `accreditations`, `stats` from `@/lib/data` (Task 2); `Button` from `@/components/ui/button` (Task 1); `motion` from `framer-motion`; `ArrowRight`, `ShieldCheck`, `Sparkles` from `lucide-react`.
- Produces: `Hero()` — used in Task 17's `app/page.tsx`.

- [ ] **Step 1: Create `components/sections/hero.tsx`**

```tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { accreditations, stats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-muted">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange/10 px-4 py-1.5 text-sm font-semibold text-orange">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            First LEEA Licensed Training Partner in UAE & KSA
          </span>
          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-navy sm:text-5xl">
            Health &amp; Safety Training That Protects Your People and Your Business
          </h1>
          <p className="mt-5 max-w-xl text-lg text-navy/70">
            Accredited HSE, lifting, scaffolding, and fire safety courses in Dubai, Abu Dhabi and
            KSA — delivered by the region&apos;s first LEEA Licensed Training Partner.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-orange text-white hover:bg-orange/90">
              <Link href="/courses">
                Enroll Now <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-navy text-navy">
              <Link href="/contact">Talk to an Advisor</Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            {accreditations.map((a) => (
              <span key={a.name} className="flex items-center gap-2 text-sm font-semibold text-navy/70">
                <ShieldCheck className="h-4 w-4 text-orange" aria-hidden="true" />
                {a.name}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div
            aria-hidden="true"
            className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-navy via-navy-deep to-orange/60 shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-lg">
            <p className="font-heading text-2xl font-bold text-navy">
              {stats[0].value}
              {stats[0].suffix}
            </p>
            <p className="text-xs text-navy/60">{stats[0].label}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add components/sections/hero.tsx
git commit -m "feat: add hero section"
```

---

### Task 8: TrustedBy and Certifications sections

**Files:**
- Create: `components/sections/trusted-by.tsx`
- Create: `components/sections/certifications.tsx`

**Interfaces:**
- Consumes: `accreditations` from `@/lib/data` (Task 2); `SectionHeading` from `@/components/ui/section-heading` and `AccreditationBadge` from `@/components/ui/accreditation-badge` (Task 3).
- Produces: `TrustedBy()`, `Certifications()` — used in Task 17's `app/page.tsx`.

- [ ] **Step 1: Create `components/sections/trusted-by.tsx`**

```tsx
import { accreditations } from "@/lib/data";

export function TrustedBy() {
  return (
    <section className="border-y border-navy/10 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-navy/50">
          Accredited &amp; Recognized By
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {accreditations.map((a) => (
            <span key={a.name} className="font-heading text-lg font-bold text-navy/70">
              {a.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `components/sections/certifications.tsx`**

```tsx
import { accreditations } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { AccreditationBadge } from "@/components/ui/accreditation-badge";

export function Certifications() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="International Certifications"
          title="Globally Recognized Accreditation"
          description="Every course is delivered under internationally recognized accreditation bodies, so your certificate carries weight wherever you work."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {accreditations.map((a) => (
            <AccreditationBadge key={a.name} {...a} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Typecheck**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add components/sections/trusted-by.tsx components/sections/certifications.tsx
git commit -m "feat: add trusted-by and certifications sections"
```

---

### Task 9: Course Categories section

**Files:**
- Create: `components/sections/course-categories.tsx`

**Interfaces:**
- Consumes: `courseCategories` from `@/lib/data` (Task 2); `SectionHeading` from `@/components/ui/section-heading` (Task 3).
- Produces: `CourseCategories()` — used in Task 17's `app/page.tsx`.

- [ ] **Step 1: Create `components/sections/course-categories.tsx`**

```tsx
import Link from "next/link";
import { courseCategories } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function CourseCategories() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Course Categories"
          title="Find the Right Training Path"
          description="From lifting and access to fire safety and management systems, explore our full range of accredited HSE courses."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {courseCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.slug}
                href={category.href}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-navy/10 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/10 text-orange transition group-hover:bg-orange group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-navy">{category.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add components/sections/course-categories.tsx
git commit -m "feat: add course categories section"
```

---

### Task 10: Featured Courses section

**Files:**
- Create: `components/sections/featured-courses.tsx`

**Interfaces:**
- Consumes: `featuredCourses` from `@/lib/data` (Task 2); `SectionHeading` from `@/components/ui/section-heading` (Task 3); `Button` from `@/components/ui/button` (Task 1); `ArrowRight`, `Clock`, `Signal` from `lucide-react`.
- Produces: `FeaturedCourses()` — used in Task 17's `app/page.tsx`.

- [ ] **Step 1: Create `components/sections/featured-courses.tsx`**

```tsx
import Link from "next/link";
import { ArrowRight, Clock, Signal } from "lucide-react";
import { featuredCourses } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function FeaturedCourses() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Featured Courses"
          title="Popular Accredited Courses"
          description="A selection of our most enrolled international and general safety courses."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.slug}
                className="flex flex-col rounded-2xl border border-navy/10 bg-white shadow-sm transition hover:shadow-lg"
              >
                <div
                  aria-hidden="true"
                  className="flex h-32 items-center justify-center rounded-t-2xl bg-gradient-to-br from-navy to-navy-deep"
                >
                  <Icon className="h-10 w-10 text-orange" aria-hidden="true" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-orange">
                    {course.category}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-bold text-navy">{course.title}</h3>
                  <div className="mt-3 flex items-center gap-4 text-xs text-navy/60">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Signal className="h-3.5 w-3.5" aria-hidden="true" /> {course.level}
                    </span>
                  </div>
                  <Button asChild variant="link" className="mt-4 justify-start px-0 text-orange">
                    <Link href={course.href}>
                      View Course <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" variant="outline" className="border-navy text-navy">
            <Link href="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add components/sections/featured-courses.tsx
git commit -m "feat: add featured courses section"
```

---

### Task 11: Why Choose Us section (animated stat counters)

**Files:**
- Create: `hooks/use-count-up.ts`
- Create: `components/sections/why-choose-us.tsx`

**Interfaces:**
- Consumes: `useInView` from `framer-motion`; `stats` from `@/lib/data` (Task 2).
- Produces: `useCountUp(target: number, durationMs?: number): { ref: RefObject<HTMLDivElement>; value: number }`; `WhyChooseUs()` — used in Task 17's `app/page.tsx`.

- [ ] **Step 1: Create `hooks/use-count-up.ts`**

```ts
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function useCountUp(target: number, durationMs = 1500) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / durationMs, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target, durationMs]);

  return { ref, value };
}
```

- [ ] **Step 2: Create `components/sections/why-choose-us.tsx`**

```tsx
"use client";

import { stats } from "@/lib/data";
import { useCountUp } from "@/hooks/use-count-up";

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: animatedValue } = useCountUp(value);

  return (
    <div ref={ref} className="text-center">
      <p className="font-heading text-4xl font-bold text-white sm:text-5xl">
        {animatedValue.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-white/70">{label}</p>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange">Why Choose Us</p>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Two Decades of Trusted HSE Training
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Typecheck**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add hooks/use-count-up.ts components/sections/why-choose-us.tsx
git commit -m "feat: add why-choose-us section with animated stat counters"
```

---

### Task 12: Corporate Training section

**Files:**
- Create: `components/sections/corporate-training.tsx`

**Interfaces:**
- Consumes: `Button` from `@/components/ui/button` (Task 1); `CheckCircle2`, `Users` from `lucide-react`.
- Produces: `CorporateTraining()` — used in Task 17's `app/page.tsx`.

- [ ] **Step 1: Create `components/sections/corporate-training.tsx`**

```tsx
import Link from "next/link";
import { CheckCircle2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const corporateBenefits = [
  "On-site training delivered at your project location",
  "Flexible scheduling around shift and project timelines",
  "Certified instructors across lifting, scaffolding, and fire safety",
  "Group and bulk enrollment pricing available",
];

export function CorporateTraining() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange">
            Corporate Training
          </p>
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            We Also Supply HSE Officers for Short &amp; Long Term Projects
          </h2>
          <p className="mt-4 text-navy/70">
            Beyond training, Arbrit provides qualified HSE officers and tailored corporate
            training programs so your workforce stays compliant and protected.
          </p>
          <ul className="mt-6 space-y-3">
            {corporateBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-sm text-navy/80">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-navy/10 bg-muted p-8 shadow-sm">
          <Users className="h-10 w-10 text-orange" aria-hidden="true" />
          <h3 className="mt-4 font-heading text-xl font-bold text-navy">
            Request a Corporate Training Quote
          </h3>
          <p className="mt-2 text-sm text-navy/70">
            Tell us your team size and required certifications — we&apos;ll put together a
            tailored proposal.
          </p>
          <Button asChild size="lg" className="mt-6 w-full bg-orange text-white hover:bg-orange/90">
            <Link href="/contact#corporate">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add components/sections/corporate-training.tsx
git commit -m "feat: add corporate training section"
```

---

### Task 13: Testimonials section (carousel)

**Files:**
- Create: `components/sections/testimonials.tsx`

**Interfaces:**
- Consumes: `testimonials` from `@/lib/data` (Task 2); `SectionHeading` from `@/components/ui/section-heading` (Task 3); `Button` from `@/components/ui/button` (Task 1); `motion`, `AnimatePresence` from `framer-motion`; `ChevronLeft`, `ChevronRight`, `Star` from `lucide-react`.
- Produces: `Testimonials()` — used in Task 17's `app/page.tsx`.

- [ ] **Step 1: Create `components/sections/testimonials.tsx`**

```tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (next: number) => {
    setIndex((next + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="Testimonials" title="What Our Students Say" />
        <div className="relative mt-12 rounded-3xl border border-navy/10 bg-muted p-10 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex justify-center gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-orange text-orange" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-5 text-lg text-navy/80">&ldquo;{current.quote}&rdquo;</p>
              <p className="mt-6 font-heading font-semibold text-navy">{current.name}</p>
              <p className="text-sm text-navy/60">{current.role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="border-navy/20"
              onClick={() => goTo(index - 1)}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-navy/20"
              onClick={() => goTo(index + 1)}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add components/sections/testimonials.tsx
git commit -m "feat: add testimonials carousel section"
```

---

### Task 14: Latest Blogs section

**Files:**
- Create: `components/sections/latest-blogs.tsx`

**Interfaces:**
- Consumes: `blogPosts` from `@/lib/data` (Task 2); `SectionHeading` from `@/components/ui/section-heading` (Task 3); `Button` from `@/components/ui/button` (Task 1); `ArrowRight`, `Newspaper` from `lucide-react`.
- Produces: `LatestBlogs()` — used in Task 17's `app/page.tsx`.

- [ ] **Step 1: Create `components/sections/latest-blogs.tsx`**

```tsx
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function LatestBlogs() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Blog" title="Latest From Arbrit" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.href}
              className="flex flex-col rounded-2xl border border-navy/10 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div
                aria-hidden="true"
                className="flex h-36 items-center justify-center rounded-t-2xl bg-gradient-to-br from-navy-deep to-orange/70"
              >
                <Newspaper className="h-9 w-9 text-white" aria-hidden="true" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-orange">
                  {post.category}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-navy">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-navy/70">{post.excerpt}</p>
                <Button asChild variant="link" className="mt-4 justify-start px-0 text-orange">
                  <Link href={post.href}>
                    Read More <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" variant="outline" className="border-navy text-navy">
            <Link href="/blog">View All Blogs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add components/sections/latest-blogs.tsx
git commit -m "feat: add latest blogs section"
```

---

### Task 15: FAQ section

**Files:**
- Create: `components/sections/faq.tsx`

**Interfaces:**
- Consumes: `faqs` from `@/lib/data` (Task 2); `SectionHeading` from `@/components/ui/section-heading` (Task 3); `Accordion*` from `@/components/ui/accordion` (Task 1).
- Produces: `Faq()` — used in Task 17's `app/page.tsx`.

- [ ] **Step 1: Create `components/sections/faq.tsx`**

```tsx
import { faqs } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-heading text-base font-semibold text-navy">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-navy/70">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add components/sections/faq.tsx
git commit -m "feat: add FAQ accordion section"
```

---

### Task 16: Contact section (form + map placeholder)

**Files:**
- Create: `components/sections/contact.tsx`

**Interfaces:**
- Consumes: `contactInfo`, `courseSelectOptions`, `locationSelectOptions` from `@/lib/data` (Task 2); `Button`, `Input`, `Textarea`, `Select*` from `@/components/ui/*` (Task 1); `SectionHeading` from `@/components/ui/section-heading` (Task 3); `Mail`, `MapPin`, `Phone` from `lucide-react`.
- Produces: `Contact()` — used in Task 17's `app/page.tsx`.

- [ ] **Step 1: Create `components/sections/contact.tsx`**

```tsx
"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactInfo, courseSelectOptions, locationSelectOptions } from "@/lib/data";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Contact Us"
          title="Join the Community of HSE Professionals"
          description="Send us your details and our team will get back to you with course and scheduling options."
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl bg-white p-8 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input name="name" placeholder="Full Name" aria-label="Full Name" required />
              <Input type="email" name="email" placeholder="Email" aria-label="Email" required />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input type="tel" name="phone" placeholder="Phone" aria-label="Phone" required />
              <Select name="course">
                <SelectTrigger aria-label="Select Course">
                  <SelectValue placeholder="Select Course" />
                </SelectTrigger>
                <SelectContent>
                  {courseSelectOptions.map((course) => (
                    <SelectItem key={course} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Select name="location">
              <SelectTrigger className="w-full" aria-label="Select Location">
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                {locationSelectOptions.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input name="subject" placeholder="Subject" aria-label="Subject" />
            <Textarea name="message" placeholder="Message" aria-label="Message" rows={4} />
            <Button type="submit" size="lg" className="w-full bg-orange text-white hover:bg-orange/90">
              Send Message
            </Button>
            {submitted && (
              <p role="status" className="text-sm font-medium text-navy">
                Thanks — this form isn&apos;t connected to a backend yet, but we&apos;ve noted your interest.
              </p>
            )}
          </form>

          <div className="flex flex-col gap-6">
            <div className="space-y-4 rounded-3xl bg-white p-8 shadow-sm">
              <p className="flex items-center gap-3 text-sm text-navy/80">
                <Phone className="h-5 w-5 text-orange" aria-hidden="true" /> {contactInfo.phone}
              </p>
              <p className="flex items-center gap-3 text-sm text-navy/80">
                <Mail className="h-5 w-5 text-orange" aria-hidden="true" /> {contactInfo.email}
              </p>
              <p className="flex items-center gap-3 text-sm text-navy/80">
                <MapPin className="h-5 w-5 text-orange" aria-hidden="true" /> {contactInfo.address}
              </p>
            </div>
            <div
              aria-hidden="true"
              className="flex min-h-[220px] flex-1 items-center justify-center rounded-3xl bg-gradient-to-br from-navy to-navy-deep"
            >
              <MapPin className="h-10 w-10 text-orange" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add components/sections/contact.tsx
git commit -m "feat: add contact section with form and map placeholder"
```

---

### Task 17: Assemble `app/page.tsx`

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `Hero` (Task 7), `TrustedBy`/`Certifications` (Task 8), `CourseCategories` (Task 9), `FeaturedCourses` (Task 10), `WhyChooseUs` (Task 11), `CorporateTraining` (Task 12), `Testimonials` (Task 13), `LatestBlogs` (Task 14), `Faq` (Task 15), `Contact` (Task 16).
- Produces: the composed homepage at `/`, page-level `metadata`, and `EducationalOrganization` JSON-LD.

- [ ] **Step 1: Replace `app/page.tsx`**

```tsx
import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { CourseCategories } from "@/components/sections/course-categories";
import { FeaturedCourses } from "@/components/sections/featured-courses";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Certifications } from "@/components/sections/certifications";
import { CorporateTraining } from "@/components/sections/corporate-training";
import { Testimonials } from "@/components/sections/testimonials";
import { LatestBlogs } from "@/components/sections/latest-blogs";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Accredited health & safety training in Dubai, Abu Dhabi and KSA. Arbrit Safety Training & Consultancy is the first LEEA Licensed Training Partner in the region.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Arbrit Safety Training & Consultancy LLC",
  description:
    "Accredited health & safety, lifting, scaffolding and fire safety training in Dubai, Abu Dhabi and KSA.",
  areaServed: ["Dubai", "Abu Dhabi", "Saudi Arabia"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustedBy />
      <CourseCategories />
      <FeaturedCourses />
      <WhyChooseUs />
      <Certifications />
      <CorporateTraining />
      <Testimonials />
      <LatestBlogs />
      <Faq />
      <Contact />
    </>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: build succeeds with no errors.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: compose full homepage from all sections"
```

---

### Task 18: Final verification

**Files:** none (verification only)

**Interfaces:** none.

- [ ] **Step 1: Full lint + typecheck + build**

Run:
```bash
npm run lint
npx tsc --noEmit
npm run build
```
Expected: all three pass with zero errors/warnings.

- [ ] **Step 2: Smoke-test the dev server**

Run (background):
```bash
npm run dev
```
Then, once it reports ready, run:
```bash
curl -s http://localhost:3000 | grep -o "Arbrit Safety" | head -1
```
Expected: outputs `Arbrit Safety` (confirms the page renders and the header/hero text is present). Stop the dev server afterward.

- [ ] **Step 3: Final commit (if any cleanup was needed)**

If Steps 1-2 required fixes, stage and commit them:
```bash
git add -A
git commit -m "fix: resolve final build/lint issues from homepage redesign verification"
```
If no fixes were needed, skip this step — nothing to commit.

---

## Self-Review Notes

- **Spec coverage:** all 13 sections from the spec (Header, Hero, Trusted By, Course Categories, Featured Courses, Why Choose Us, International Certifications, Corporate Training, Testimonials, Latest Blogs, FAQ, Contact+Map, Footer) map 1:1 to Tasks 4-16. Design-system tokens, font setup, SEO metadata/JSON-LD, and the explicit no-photography/placeholder-contact-info constraints are all covered in Tasks 1, 6, and 17.
- **Placeholder scan:** no "TBD"/"implement later" steps; the one intentional placeholder (`contactInfo` in Task 2) is explicit fabricated-data-avoidance per the approved spec, not an unfinished plan step.
- **Type consistency:** `Accreditation`, `Course`, `CourseCategory`, etc. types defined once in Task 2 and consumed identically (same field names) by every downstream task; `SectionHeading`/`AccreditationBadge` prop shapes defined in Task 3 match their usage in Tasks 8-16; `useCountUp` return shape (`{ ref, value }`) defined in Task 11 matches its consumption in the same task's `StatCard`.
- **Scope:** single cohesive deliverable (one homepage), no sub-project decomposition needed.
