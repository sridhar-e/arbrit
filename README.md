# Arbrit Safety Training & Consultancy website

Next.js 16 (App Router) + Tailwind CSS 4. Enquiry forms post to `/api/enquiries`, which emails the
team through Resend and appends a row to a Google Sheet (CVs from the Careers form go to Google Drive).

- Design system: [DESIGN.md](DESIGN.md). Product facts: [PRODUCT.md](PRODUCT.md).
- Site content (courses, blog posts, trainers, contact details): `lib/content.ts`, `lib/data.ts`.

## Local development

```bash
npm install
cp .env.example .env.local   # fill in the values; see comments in the file
npm run dev                  # http://localhost:3000
```

Checks before pushing: `npx tsc --noEmit`, `npm run lint`, `npm run build`.

## Deploying on Vercel

1. Import the GitHub repo in Vercel (framework preset: Next.js; no build settings to change).
2. Project → Settings → Environment Variables (Production), add every variable from
   [.env.example](.env.example) **except `NEXT_PUBLIC_SITE_URL`**:
   `RESEND_API_KEY`, `FROM_EMAIL`, `ADMIN_EMAIL`, `GOOGLE_SHEETS_CLIENT_EMAIL`,
   `GOOGLE_SHEETS_PRIVATE_KEY`, `GOOGLE_SHEET_ID`, `GOOGLE_SHEET_TAB_NAME`, `GOOGLE_DRIVE_CV_FOLDER_ID`.
   Paste the private key exactly as it appears in the JSON key, including the `\n` sequences.
3. Deploy, then send one test enquiry from each form (course pop-up, corporate quote, contact,
   careers with a CV) and confirm the email, the Sheet row and the Drive file arrive.

### Site address and search indexing

`lib/site.ts` picks the site address automatically from Vercel's production URL:

| Stage | Address used | Search engines |
|---|---|---|
| Client review | `https://<project>.vercel.app` | Blocked (`noindex`, robots.txt disallows all) |
| Custom domain added in Vercel → Domains | the custom domain | Allowed, sitemap published |
| Preview deployments (branches / PRs) | — | Always blocked |

After adding the domain, **redeploy once** (Deployments → ⋯ → Redeploy) so the new address is baked
into the canonical links and sitemap. Then submit `https://<domain>/sitemap.xml` in Google Search Console.
Set `NEXT_PUBLIC_SITE_URL` only to force a specific address.

For email, `FROM_EMAIL` must be on a domain verified in Resend. Until the client's domain is verified,
use a domain you already verified there.
