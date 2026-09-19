import type { Metadata } from "next";

export const SITE_NAME = "Arbrit Safety Training & Consultancy";

type PageMetaInput = {
  /** Page title; the layout template appends " | Arbrit Safety". */
  title: string;
  /** 120–160 characters works best in search results and link previews. */
  description: string;
  /** Path of the page, e.g. "/courses/rope-access". Used for the canonical URL and og:url. */
  path: string;
  /** Title shown in link previews, if it should differ from the page title. */
  shareTitle?: string;
  type?: "website" | "article" | "profile";
  /** Set to use an absolute title (no template), e.g. on the homepage. */
  absoluteTitle?: boolean;
  keywords?: string[];
  /** The page has its own opengraph-image file; leave the image out so that file is used. */
  ownImage?: boolean;
};

/**
 * Title, description, canonical URL and link-preview tags (Open Graph and Twitter/X) for a page.
 * The preview image comes from the nearest opengraph-image file (the site card, or a titled card
 * on course, blog and trainer pages), so every shared link shows a real image and real copy.
 */
export function pageMetadata({
  title,
  description,
  path,
  shareTitle,
  type = "website",
  absoluteTitle,
  keywords,
  ownImage,
}: PageMetaInput): Metadata {
  // Keep preview titles short: add the brand only when the title doesn't already name it.
  const previewTitle = shareTitle ?? (/arbrit/i.test(title) ? title : `${title} | Arbrit Safety`);
  // Site card by default. An explicit image here would override a page's own opengraph-image
  // file, so pages with one (courses, blog posts, trainers) pass ownImage and set none.
  const images = ownImage
    ? undefined
    : [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${SITE_NAME}: accredited HSE training in Dubai, Abu Dhabi and KSA` }];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: previewTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_AE",
      type,
      ...(images && { images }),
    },
    twitter: {
      card: "summary_large_image",
      title: previewTitle,
      description,
      ...(images && { images: images.map((image) => image.url) }),
    },
  };
}
