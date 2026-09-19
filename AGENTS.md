<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Design system

All UI work follows [DESIGN.md](DESIGN.md), recorded from the revamped mobile-first homepage (Arbrit blue `#0066b2` and navy `#123b6d` on white, Plus Jakarta Sans 800 headings, pill controls, 20px cards). Read it before building or restyling any page or component. Product facts and brand commitments live in [PRODUCT.md](PRODUCT.md). Reference design systems live in `.design-library/design-md/` (gitignored) — inspiration only, not the active system.

For non-website artifacts (slide decks, handouts, certificates, reports), use one of the ten presets in [THEMES.md](THEMES.md). Never apply those themes to site pages.
