import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/layout/page-header";
import { pageHeaderImages } from "@/lib/page-images";
import { BlogIndex } from "@/components/sections/blog-index";

export const metadata: Metadata = pageMetadata({
  title: "HSE Training Blog | Safety Guides & Industry Updates",
  description:
    "Practical guides on LEEA lifting certification, OSHAD compliance, train-the-trainer and workplace safety training in the UAE, from Arbrit Safety's trainers.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        eyebrow="Insights From the Field"
        description="Latest articles and updates from Arbrit Safety Training & Consultancy."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        {...pageHeaderImages.blog}
      />

      <BlogIndex />
    </>
  );
}
