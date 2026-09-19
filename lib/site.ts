/**
 * Public origin of the site (no trailing slash), for canonical links, the sitemap, structured data
 * and the link inside notification emails. First match wins:
 *   1. NEXT_PUBLIC_SITE_URL, when set explicitly (local development uses http://localhost:3000).
 *   2. VERCEL_PROJECT_PRODUCTION_URL, which Vercel sets on every build: the *.vercel.app address
 *      until a custom domain is added, then that domain. No manual change is needed at go-live.
 *   3. The final domain.
 */
function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel}`;
  return "https://www.arbritsafety.com";
}

export const siteUrl = resolveSiteUrl();

/**
 * Search engines may index the site only on its real domain. Vercel preview deployments and the
 * *.vercel.app address used for client review stay out of search results, so the review copy
 * never competes with the live site. Indexing switches on by itself once the domain is added.
 */
export const allowIndexing =
  process.env.VERCEL_ENV !== "preview" && !new URL(siteUrl).hostname.endsWith(".vercel.app") && !siteUrl.includes("localhost");
