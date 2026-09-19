# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Individual workers and professionals** in the UAE and Saudi Arabia who need an accredited safety, lifting, scaffolding, fire or equipment-operator certificate for their job or next role. Most arrive on a phone.
- **Company HSE, HR and training managers** booking group, on-site or corporate training and HSE consultancy for their workforce.
- Open decision: which of the two is primary for the homepage has not been confirmed; the current site serves both, with enquiry as the shared goal.

## Product Purpose

Arbrit Safety Training & Consultancy LLC delivers accredited health & safety training and HSE consultancy from centres in Dubai, Abu Dhabi and KSA. The website exists to help visitors find the right course, trust the accreditation behind it, and enquire (form, call or WhatsApp) so an advisor can follow up. Success is qualified course and corporate-training enquiries.

## Positioning

First LEEA Licensed Training Partner in the UAE & KSA. Courses are delivered under international awarding bodies (LEEA, IOSH, IRCA, STI, Highfield) alongside Arbrit's own certificates, on Arbrit's premises or the client's site.

## Operating Context

- Delivery: classroom plus hands-on practical training, on-site at client locations or at Arbrit centres in Dubai, Abu Dhabi and Saudi Arabia.
- Conversion paths: enquiry forms (quick enquiry, course enquiry, contact), phone, WhatsApp; a fixed mobile Call Now / Enquire Now bar.
- Regulatory context referenced in content: UAE OSHAD compliance, LEEA certification validity and renewal.

## Capabilities and Constraints

- Next.js 16 (App Router, React 19), Tailwind CSS v4, shadcn/ui (radix-nova), framer-motion, lucide-react icons. Content lives in `lib/data.ts`.
- Course catalogue: International courses (LEEA Foundation, LEEA APLO, LEEA Diploma, IRCA Lead Auditor, Rope Access, STI scaffolding, Highfield, IOSH) and General Safety courses (Fire Fighting, Rescue, Oil & Gas, Construction Safety, First Aid, Forklift, Safety Awareness), plus equipment-operator and safety-management courses in the mega menu.
- Other routes: About, Trainers, Blog, Career, Consultancy, Contact, Courses, and dedicated LEEA course pages.

## Brand Commitments

- Client likes the current UI and colours and wants them kept: Arbrit blue `#0066b2` (logo colour) and navy `#123b6d` on white.
- Use the existing logo files (`public/header-logo.svg`, `public/footer-logo.svg`) as-is, without the "Guarding you every day" tagline shown in the client mockup, until the client supplies a tagline logo.
- Homepage revamp is mobile-first, then scaled up to desktop; the client wants a "wow factor" the current site lacks.
- The client's mobile hero mockup is binding: full-bleed worker/crane photo, eyebrow "Accredited Health & Safety Training", headline "Skills for a Safer Tomorrow", subline "Build safer workplaces. Develop competent professionals.", rounded course search with blue arrow button, four category shortcuts (Workplace Safety, Lifting & Rigging, Fire Safety, Scaffolding), and a blue "Trusted by 15,000+ professionals across the UAE and KSA" band.

## Evidence on Hand

- Stats in `lib/data.ts`: 15,000+ students trained, 98% course pass rate, 50+ accredited courses, 20+ years of experience.
- Conflict to resolve with the client: the hero says "20+ Years Legacy" while `components/sections/leea-our-commitment.tsx` says "18+ Years". Do not pick one silently.
- Accreditation logos and course imagery in `public/international`, `public/general-safety`, `public/accreditation`; hero photos in `public/hero`; trainer, testimonial (incl. `Testimonials.webm`) and blog imagery in `public/`.
- Written and video testimonials, blog posts, FAQs, trainer profiles and office details exist in `lib/data.ts`.
- Absent: named corporate client case studies with results, pricing, and course dates. Do not fabricate them.

## Product Principles

1. Accreditation is the proof: every claim of quality points to a real awarding body, licence or number.
2. Finding the right course fast beats browsing; search and categories come before storytelling.
3. Enquiry is always one tap away, especially on phones.
4. Serve both the individual worker and the company buyer without making either feel secondary.

## Accessibility & Inclusion

Audience includes non-native English readers across the UAE and KSA: plain, short copy, large tap targets, readable contrast over photography, and respect for reduced-motion preferences (already honoured in the incumbent code).
