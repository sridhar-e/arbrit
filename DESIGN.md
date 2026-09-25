---
name: Arbrit Safety Training & Consultancy
description: Accredited health & safety training in the UAE and KSA, told as a training day on site.
colors:
  arbrit-blue: "#0066b2"
  arbrit-blue-press: "#00589a"
  navy-deep: "#123b6d"
  canvas: "#ffffff"
  mist: "#f5f7fa"
  ink-soft: "rgba(18, 59, 109, 0.8)"
typography:
  display-hero:
    fontFamily: "Plus Jakarta Sans, Inter, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 11vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  display:
    fontFamily: "Plus Jakarta Sans, Inter, Arial, sans-serif"
    fontSize: "clamp(2.125rem, 8.5vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  numeral:
    fontFamily: "Plus Jakarta Sans, Inter, Arial, sans-serif"
    fontSize: "44px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Plus Jakarta Sans, Inter, Arial, sans-serif"
    fontSize: "30px"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  subtitle:
    fontFamily: "Plus Jakarta Sans, Inter, Arial, sans-serif"
    fontSize: "28px"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  card-title:
    fontFamily: "Plus Jakarta Sans, Inter, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.375
  lead:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.625
  body-sm:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.5
  body:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.2
rounded:
  card: "20px"
  panel: "24px"
  pill: "9999px"
spacing:
  gutter-mobile: "20px"
  gutter: "24px"
  card-padding: "20px"
  section-mobile: "64px"
  section: "96px"
components:
  search-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.navy-deep}"
    rounded: "{rounded.pill}"
    height: "56px"
  button-search-submit:
    backgroundColor: "{colors.arbrit-blue}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.pill}"
    size: "44px"
  button-search-submit-hover:
    backgroundColor: "{colors.arbrit-blue-press}"
  button-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.arbrit-blue}"
    rounded: "{rounded.pill}"
    height: "44px"
  chip:
    backgroundColor: "rgba(0, 102, 178, 0.1)"
    textColor: "{colors.arbrit-blue}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  course-card:
    backgroundColor: "{colors.arbrit-blue}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "20px"
  about-band:
    backgroundColor: "{colors.navy-deep}"
    textColor: "{colors.canvas}"
    padding: "64px 20px"
  step-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.navy-deep}"
    rounded: "{rounded.card}"
    padding: "20px"
  trust-band:
    backgroundColor: "{colors.arbrit-blue}"
    textColor: "{colors.canvas}"
    padding: "16px 20px"
---

# Design System: Arbrit Safety Training & Consultancy

## Overview

**Creative North Star: "The Site Induction"**

Arbrit's site reads like the best first morning on a job site: sunlit, organised, and led by people who know the standard. Full-bleed photography of real work (hard hats, hooks, scaffolds, classrooms) carries the atmosphere; clean white surfaces and one confident blue carry the instructions. The page does not sell with stat tiles; it walks a visitor through what actually happens, from arriving at a centre to holding a certificate.

Density is generous on phones first. Large heavy headlines, short plain sentences, and big tap targets serve an audience that often reads English as a second language, on a phone, between shifts. Motion is concentrated in one authored place, the pinned training-day story, and everything else stays still and legible.

**Key Characteristics:**
- White canvas, one working blue, navy headlines; no second accent.
- Heavy geometric display type (Plus Jakarta Sans 800) with tight tracking over a plain Inter body.
- Soft, friendly rounding: 20px cards, 24px photo panels, fully rounded pills for search, tabs and chips.
- Sunlit on-site photography as the primary material, darkened toward navy where text sits on it.
- One signature interaction: the training-day story. Desktop pins a photo that changes per step beside a step index; phones scroll a photo-card journey with a filling rail and a sticky progress bar.

## Colors

A restrained palette: neutrals plus one blue that does all the pointing.

### Primary
- **Arbrit Blue** (#0066b2): the logo colour and the only accent. Primary actions (search submit, active tab, CTAs), the trust band, step numerals, active rail dots, chip text and icon tints.
- **Arbrit Blue, Pressed** (#00589a): hover and pressed state for blue fills.

### Neutral
- **Site Navy** (#123b6d): all headings, dark hero ground, and the gradient that photography fades into behind text.
- **Canvas White** (#ffffff): default section and card surface.
- **Mist** (#f5f7fa): alternate section band (course picker, FAQ) and chip fill on white cards.
- **Soft Navy Ink** (navy at 80%): body copy and supporting lines on white; navy at 75% for small inactive labels.

### Named Rules
**The One Blue Rule.** Arbrit Blue is the only saturated colour in the interface. Warm colour comes from photography (hi-vis vests, cranes, sunlight), never from UI fills.

**The Navy Scrim Rule.** Text never sits on raw photography; the photo fades into Site Navy (to at least 90% opacity) wherever headlines or controls overlay it.

## Typography

**Display Font:** Plus Jakarta Sans (with Inter, Arial fallback)
**Body Font:** Inter (with Arial, Helvetica fallback)

**Character:** A heavy, compact geometric display face gives headlines the weight of site signage; Inter keeps every sentence plain and quick to read.

### Hierarchy
- **Display Hero** (800, clamp(2.5rem, 11vw, 4.75rem), 1.02): the homepage H1 only.
- **Display** (800, clamp(2.125rem, 8.5vw, 3.75rem), 1.04): section headings, left-aligned, balanced wrapping.
- **Numeral** (800, 44px on phones to 72px on desktop, 1): step numbers in the training-day story, in Arbrit Blue.
- **Title** (800, 30px on phones to 48px on desktop): step titles and major sub-heads.
- **Subtitle** (800, 28px on phones to 36px on desktop): sub-section heads inside a section, such as "Meet your trainers".
- **Card Title** (700, 18px, 1.375): course card names and trainer names.
- **Lead** (400, 17px, 1.625; up to 20px in the hero): the first paragraph under a heading.
- **Body** (400, 16px, 1.625): paragraphs, kept to about 36rem wide.
- **Body Small** (500, 15px, 1.5): proof lines, step text and dense list rows.
- **Label** (600, 13px): chips, card meta rows, rail labels (11px on phones).

### Named Rules
**The Heading Speaks Alone Rule.** Headings carry their own weight. No small uppercase label sits above a section heading.

**The Heavy Headline Rule.** Display sizes are always weight 800 with negative tracking (-0.03em); a light or regular-weight headline reads as a different brand.

## Layout

Mobile-first. Content sits in a 1280px (max-w-7xl) container with 20px side gutters on phones and 24px from 640px. Sections breathe with 64px vertical padding on phones and 96px from 768px, alternating Canvas White and Mist bands.

Phones stack everything in one column. International and General Safety courses are two separate sections (Mist band, then white) rather than tabs; in each, course cards become a horizontal snap rail on phones (cards about 80% of the viewport so the next card peeks), turning into a 2-column grid at 768px and 4 columns at 1024px. The About band is Site Navy, splitting copy and a portrait video card into two columns from 1024px, with trainers in a row below. The hero is art-directed: a portrait photo with text low in the frame on phones, a landscape photo with text in the left half from 768px. The training-day story is a vertical photo-card journey on phones and tablets, with a progress bar pinned below the header; on desktop it becomes a pinned stage with the step index in a left column beside a tall photo on the right.

Desktop (1024px and up) earns its width with two-column compositions rather than centred single columns: the training-day story shows a vertical step index beside the photo, Testimonials and FAQ pair a sticky left column (heading, supporting video or advisor card) with a right column of cards, Corporate training pairs copy and a photo with the quote form, and Accreditations sit as a short Mist strip with the heading beside the logo marquee.

Fixed mobile furniture (the Call Now / Enquire Now bar, WhatsApp and back-to-top buttons) occupies the bottom 9rem of a phone screen; pinned or bottom-anchored content must clear it. The furniture stays hidden while the homepage hero (marked `data-reveal-mobile-cta`) is on screen and slides in once the hero has scrolled under the header, so the first screen is clean; pages without a marked hero, and desktop, show it after 300px of scroll.

**The Page Scrolls Rule.** `<body>` uses `overflow-x: clip`, never `overflow-x: hidden`: hidden can make the body its own scroll container on mobile browsers, which silently breaks everything that reads window scroll (the header's scrolled state, back-to-top, the WhatsApp button, the advisor prompt) and any `position: sticky` inside it. Scroll-driven effects are also never the only way to reach content on phones — below 1024px, sequence content is swipeable and tracks its own scroller.

## Elevation & Depth

Mostly flat, with soft navy-tinted shadows that lift white cards off photography or Mist bands. Shadows always have a vertical offset and a wide blur; there are no glows and no hard offset shadows.

### Shadow Vocabulary
- **Card Rest** (`box-shadow: 0 18px 40px -28px rgba(18,59,109,0.5)`): course cards on Mist.
- **Card Hover** (`box-shadow: 0 26px 50px -24px rgba(18,59,109,0.55)`): course card hover.
- **Floating Card** (`box-shadow: 0 24px 48px -24px rgba(18,59,109,0.45)`): the step card overlapping a photo.
- **Control on Photo** (`box-shadow: 0 18px 40px -18px rgba(0,0,0,0.6)`): the hero search pill over photography.

## Shapes

Friendly and rounded, never sharp. Cards use 20px corners, photo panels 24px, and every control that holds a single line (search, tabs, chips, round submit buttons) is a full pill. Dividers are 1px hairlines; the step rail uses a 2px line that fills blue as steps complete.

## Components

### Search Pill
- **Shape:** full pill, 56px tall (64px from 768px), white.
- **Content:** navy search icon, borderless input with 60% navy placeholder, and a 44px round Arbrit Blue submit button holding an arrow.
- **Focus:** 4px translucent white ring around the whole pill; submit button hovers to Arbrit Blue, Pressed.
- **Behaviour:** a plain GET form to `/courses?q=`, working without JavaScript.

### Category Shortcuts
- **Style:** four equal columns separated by 1px white hairlines at 25% opacity; 32px line icons (1.5 stroke) above 13px medium white labels. Icons lift 2px on hover.

### Trust Band
- **Style:** full-width Arbrit Blue strip closing the hero; outline people icon with one sentence, key figure in semibold.

### Chips
- **Style:** Arbrit Blue at 10% fill, Arbrit Blue label text, full pill, optional 14px leading icon (map pin for places, check badge for awarding bodies). On white cards, Mist fill with navy text.

### Course Card
International and General Safety courses use two different cards, chosen per course: anything awarded by an outside body gets the International card, Arbrit-certified courses get the simpler General Safety card.

**International (photo card)**
- **Character:** a full-bleed course photo washed with Arbrit Blue rising from the bottom (solid blue at the base to near-clear at the top), so the card reads as the brand colour with the subject showing through.
- **Corner Style:** 20px, at least 23rem tall.
- **Content (bottom-anchored, white):** course icon and title, optional two-line description, a hairline, then duration / location / certification rows with 14px icons, and a full-width white pill "View course" button in Arbrit Blue.
- **States:** hover lifts the card 4px, deepens the shadow (Card Hover) and eases the photo to 105%; the button fill shifts to Mist.

**General Safety (simple card)**
- **Character:** quieter than the International card. A white card (20px, 1px Arbrit Blue 15% ring, Card Rest shadow) with a 3:2 photo on top and content on white below.
- **Content:** a 12px uppercase "General Safety" eyebrow and the Card Title, both in Arbrit Blue; a hairline; duration and location rows (14px icons, 13px navy at 75%); and a full-width Arbrit Blue "View Course" button (44px, 8px corners) pinned to the bottom. The certificate is left off because every General Safety course ends in the same Arbrit certificate.
- **States:** hover lifts the card 4px, deepens the shadow (Card Hover), eases the photo to 105% and darkens the button to #00589a.

### Hero Slider
- **Behaviour:** full-bleed photos cross-fade (1.2s) every 5s behind fixed copy, search and shortcuts; each slide has a portrait crop for phones and a landscape crop from 768px, and settles from 108% scale while active.
- **Dots:** bottom-left inside the content column; 8px white dots at 45%, the active dot stretches to a 28px white pill. Each dot is a 44px-tall button.
- **Rules:** pauses on hover and keyboard focus, skips hidden tabs, restarts its timer whenever the slide changes, and never auto-advances for reduced-motion visitors. Every slide keeps the navy scrim so white text stays legible.
- **Phones:** the portrait photo keeps its own aspect ratio pinned to the top of the hero (never cover-scaled to the viewport height), so the subject's face lands in the same place on every phone. Copy starts below the face (about 69vw from the top), over a scrim that is clear across the face and solid navy by the headline. A slide whose face sits low shifts up rather than letting copy cross it.

### Navy Band Texture
- **Style:** Site Navy sections carry a white 56px blueprint grid at 8% opacity, masked to a soft ellipse, plus the Arbrit shield mark enlarged to about 760px at 4.5% white bleeding off the top-right edge. On desktop, two tilted hands-on photos (20px, 1px white ring at 10%) layer behind the section's main card.

### Form Fields and Validation
- **Required marker:** every required label ends in a red asterisk (#d92d20, aria-hidden); a one-line "* All fields are required." note sits under the form intro.
- **Fields:** 48px Mist inputs with 12px corners and an optional 16px navy-40% leading icon; no visible border at rest.
- **Errors:** validated on blur and on submit (native browser bubbles are off). An invalid field gets a red border and a 13px red message with a 14px alert icon directly under the field, linked via aria-describedby. Submitting focuses the first invalid field and adds a red summary line under the button.
- **Multi-select (Required Certifications):** a Mist trigger showing a summary ("3 certifications selected"), selections as removable Arbrit Blue chips below it. The options panel has a pill search box, courses grouped as in the Courses menu with 20px checkboxes, "Other" last (ticking it reveals a required text field), and a count plus Done footer. From 768px it is an anchored dropdown (20px, Floating Card shadow); on phones it is an 85dvh bottom sheet, because a dropdown between the header and the fixed Call/Enquire bar leaves room for only one or two rows.

### Enquiry Flow
- **Course links:** Courses menu and directory items open the course's own page only when it has real content (topics, offerings, certification details); otherwise they go to `/courses?enquire=<course-id>`, where a popup enquiry form opens with that course ticked. Closing it clears the parameter.
- **Course enquiry popup:** 24px white dialog (92dvh max, scrolls inside) with a Mist icon disc, title, one-line intro and the shared required-field rules; Full Name, Email, Phone / WhatsApp, Courses of Interest (the multi-select) and Preferred Location as single-choice pills (selected pill Arbrit Blue).
- **After submit:** `/courses/thank-you` shows a Mist page with a centred white card (check disc, "Thank you!", a Back pill) and a visible 5-second countdown with a "Stay on this page" link; it returns to Courses, or Home for the corporate form.

### Testimonial Card
- **Style:** Mist fill, 20px corners, Arbrit Blue star rating, quote in 16px navy, initials avatar in an Arbrit Blue circle with name and role.
- **Phones:** a free-scrolling row (cards about 85% wide, no snap) that drifts slowly and endlessly at about 28px/s, like the accreditation marquee, by moving the row's real scroll position so visitors can still swipe it either way. Cards render twice for a seamless loop (the copy is aria-hidden and hidden from 640px and for reduced motion). Hover, touch and keyboard focus pause it; it resumes 1.5s after the last touch, only while on screen and the tab is visible, and never moves for reduced-motion visitors. From 640px it is a static two-column grid.

### Advisor Card
- **Style:** Site Navy card (20px) with a short heading, office phone rows as translucent white panels, and a white pill enquiry button.

### Video Poster Card
- **Style:** 4:5 portrait card (24px) with a navy wash from the bottom, a 56px white round play button and a two-line caption. The YouTube player (privacy-enhanced) only loads after the visitor presses play.

### Trainer Row
- **Style:** translucent white panel (5% fill, 10% ring, 20px) holding a 80–96px rounded portrait beside the name (Card Title) and credentials. Portrait sources are small, so they are never shown larger than 96px.

### Training-Day Story (signature)
- **Phones and tablets (below 1024px):** a vertical journey on normal page scroll (never scroll-jacked). Each step is a white card (24px) with a 4:5 photo (16:11 from 640px) under a navy wash rising from the bottom, a faint 64px white numeral and the white title low in the photo; body and chips sit below the photo. A 40px numbered node sits left of each card on a 2px rail whose blue fill is tied to scroll. A slim progress bar ("03 / 05 Practise" plus five 6px pill segments) sticks under the header while the journey is on screen; segments are buttons that scroll to a step. The active step is the last card whose top has passed the middle of the viewport.
- **Desktop structure:** a 500svh track with a sticky stage: photo panel (24px) cross-fading and settling from 108% scale per step, a vertical step index whose active step opens, and the same five-dot language in the rail.
- **Rail (phones):** 40px numbered nodes; reached nodes filled blue with a soft blue shadow, the active one scaled 110%, upcoming nodes white with a navy 15% border. The active card lifts to the Floating Card shadow and its photo settles from 106% scale.
- **Motion:** exponential ease-out (cubic-bezier(0.16, 1, 0.3, 1)); desktop photos cross-fade per step; progress segments and nodes fill over 500ms.
- **Reduced motion:** the stage is replaced by a plain grid of photo-and-text steps; all step text is always present for screen readers.

### Navigation
- **Style:** existing site header. Transparent over the homepage hero with the white logo and a 28px, 2.25-stroke menu icon; turns white with the blue logo after scrolling.

### About Page
- **Hero:** the shared page header (photo, title, breadcrumb pill), unchanged.
- **Mission (white):** Display heading, lead and body copy, then three proof rows between hairlines (40px Arbrit Blue 10% icon disc, 15px medium navy text). Beside it from 1024px, the company video as a 4:5 Video Poster Card with one tilted hands-on photo (20px, navy 10% ring) layered behind on the left.
- **Our story (Site Navy with the Navy Band Texture):** heading and lead, then the milestones on a 2px white 15% rail: down the left on phones, across the top from 768px. Each milestone has a 40px Arbrit Blue icon node ringed in navy, a white Numeral (the year or stage), a Card Title and a short line. Below, a full-width strip of history photos (4:3 tiles, 224–256px wide because the sources are 300px) drifts sideways at a slow marquee pace with faded edges and pauses on hover. It is pure CSS: the row renders twice with the copy aria-hidden, and for reduced motion it stops, the copy hides and the row scrolls by hand.
- **How we train (Mist):** heading, lead and a 24px photo panel in a left column that sticks from 1024px; beside it four commitments as hairline-divided rows, each led by a blue Numeral (01–04) with a 20–24px heading and body copy. Not icon cards.
- **Meet your trainers (white):** heading, lead and a blue "Book a course" pill; three Mist cards (20px) with the 80–96px portrait beside the name and credential chips, the short bio, the trainer's quote behind a 2px blue left rule, and a "View profile" link. The whole card links to the profile; hover lifts 4px, turns the card white and adds the Card Hover shadow.
- **After the page:** the HSE officers CTA and the course directory follow, as on every other page.

### Courses Page
- **Hero:** the shared page header with the category filter and course search, unchanged.
- **Proof strip (white):** three proof lines split by hairlines (48px Arbrit Blue 10% icon disc, a 24px navy 800 figure over one 15px line): course count, delegates trained, first LEEA partner. Not stat tiles.
- **International courses (Mist) and General safety courses (white):** the homepage course bands reused as-is (Display heading, intro, Course Cards in a phone swipe row that becomes a 2/4-column grid), without the "View all" link since the page itself is the full list.
- **Train at our centre or on your site (Mist):** two 24px photo panels (4:5 on phones, 16:11 from 640px) with the navy scrim, a 28–36px white title, one line and a white pill: "Find a centre" to Contact, "Plan on-site training" to the homepage corporate form (`/#corporate-training`).
- **Not sure which course fits? (Site Navy with the Navy Band Texture):** heading and lead, the office phone lines as translucent white rows (56px, 16px corners, round phone icon) and a WhatsApp link, beside a white 24px form card with Mist fields. On phones the order is heading, form, then phone lines, so the form is reached first. Keeps the `#quick-enquiry` id the advisor prompt scrolls to.

### Other Inner Pages
All inner pages follow the About and Courses language: Display headings with no eyebrow labels, alternating white and Mist bands, at most one or two Site Navy bands (with the Navy Band Texture), hairline or numbered rows instead of icon-card grids, and forms on a white 24px card with Mist fields.
- **Consultancy:** proof strip; "What we do" copy with credential rows beside a site photo; the nine services as two-column hairline rows, each with a "Scope, timeline and deliverables" disclosure; "How we work" as five numbered steps beside a sticky photo; consultant cards as on About; sectors as hairline rows with small photos; the enquiry in the navy band; office contact block.
- **Contact:** "Call, message or visit us" with the three offices as Mist cards (map, tap-to-call pills, address, directions), an email row and social buttons; the enquiry form in the navy band (`contact-page-form.tsx`; the homepage keeps `contact-form.tsx`).
- **Career:** intro with hairline rows beside a photo; what we offer as two lists; openings as numbered rows whose Apply pill jumps to the form with that role selected; the application form (with CV upload) in the navy band.
- **Blog:** the first post as a large photo panel with the navy scrim, the rest as 20px cards. Posts use a 42rem reading column with a sticky "In this article" list on desktop, then previous/next cards and a white CTA card on Mist.
- **Course detail:** the course tagline as the Display heading (or "About this course"), intro copy, "Courses offered" as numbered rows linking to sub-courses, then content sections (modules, who should attend, outcomes, duration, benefits) as check lists — two columns when every item is short, one column otherwise — the outline facts and certification as a hairline list, and "How you'll train" rows, all beside a sticky "At a glance" card (photo, duration, where, certification, accreditation logos, Join and Call pills); previous/next links; a Mist FAQ band (the site FAQ layout with the course's own questions); four related course cards in the course's track. Sub-courses add their parent to the breadcrumb.
- **Trainer profile:** a sticky Mist profile card (portrait up to 160px, credential chips, Book a course) beside the quote and biography; the other trainers below.
- **LEEA course pages:** custom hero with the enquiry card; announcement ticker; overview facts; numbered learning outcomes beside a photo; modules by day; certification; "Why choose Arbrit" in navy; reviews; learning environment photos; accreditation marquee; FAQ accordion; enrol form in navy.
- **Legal, 404 and thank-you:** a 42rem reading column; a Mist 404 with Display heading and link rows; the thank-you card with its 5-second countdown.

### Page Header (inner pages)
- **Structure:** full-bleed photo under an Arbrit Blue wash that fades from solid on the left to 20% on the right, a navy depth shade rising from the bottom, faint dot grids, and a white wave closing the band. The photo settles from 108% scale on load (skipped for reduced motion).
- **Photo focal point:** portrait sources pass `imagePosition` (e.g. `object-[center_22%]`) so faces stay in the wide crop.
- **Content:** an optional eyebrow as a translucent white chip (15% fill, 25% ring, map pin), the page title in 800 weight at clamp(2.25rem, 9vw, 4.25rem) with -0.03em tracking, an optional 17–18px lead, then the white breadcrumb pill. Page-specific controls (course search, CTA buttons) sit below the breadcrumb.

### Page Header Photos
- **One photo per page:** every inner page opens on its own header photo, set in `lib/page-images.ts`, so no two pages share a picture. Blog posts use their own cover photo; course pages pick a wide photo by subject (lifting, work at height, plant operators, or a general one) because most course photos are too small to fill a header.
- **Sources:** only photos at least 1200px wide, since the header spans the full screen behind the blue wash.

## Do's and Don'ts

### Do:
- **Do** let photography supply warmth and colour; keep UI fills to Arbrit Blue, Site Navy, white and Mist.
- **Do** fade photos into Site Navy behind any overlaid text.
- **Do** set section headings in Display (800, -0.03em), left-aligned, navy.
- **Do** make single-line controls full pills and cards 20px.
- **Do** keep pinned and bottom-anchored content clear of the bottom 9rem on phones.
- **Do** use real figures from the content source (15,000+ trained, 98% pass rate, 50+ courses) and real course durations.

### Don't:
- **Don't** add a second accent colour or gradient text.
- **Don't** put small uppercase labels above section headings.
- **Don't** use stat-tile grids or rows of identical icon cards as page structure.
- **Don't** use hard offset shadows or coloured glows.
- **Don't** scatter entrance animations on every section; the training-day story is the page's motion moment.
