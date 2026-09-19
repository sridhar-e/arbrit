import { blogPosts } from "@/lib/content";
import { ogSize, renderOgCard } from "@/lib/og-card";

export const alt = "Article from Arbrit Safety Training & Consultancy";
export const size = ogSize;
export const contentType = "image/png";

/** Link preview for a blog post: its category and headline on the branded card. */
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.href === `/blog/${slug}`);
  return renderOgCard({
    eyebrow: post?.category ?? "Arbrit Safety blog",
    title: post?.title ?? "HSE Training Insights",
    subtitle: "Arbrit Safety Training & Consultancy",
  });
}
