import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { blogPosts } from "@/lib/content";
import { siteUrl } from "@/lib/site";

const toSlug = (href: string) => href.replace("/blog/", "");

/** Anchor id for a section heading, used by the desktop outline. */
const headingId = (heading: string) =>
  heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: toSlug(post.href) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => toSlug(p.href) === slug);
  if (!post) return {};
  return {
    ...pageMetadata({ title: post.title, description: post.excerpt, path: `/blog/${slug}`, type: "article", ownImage: true }),
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = blogPosts.findIndex((p) => toSlug(p.href) === slug);
  if (index === -1) notFound();

  const post = blogPosts[index];
  const prevPost = blogPosts[(index - 1 + blogPosts.length) % blogPosts.length];
  const nextPost = blogPosts[(index + 1) % blogPosts.length];
  const sections = (post.content ?? []).flatMap((section) => (section.heading ? [section.heading] : []));

  // Article structured data for Google.
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${siteUrl}${post.imageWide ?? post.image}`,
    url: `${siteUrl}${post.href}`,
    mainEntityOfPage: `${siteUrl}${post.href}`,
    articleSection: post.category,
    inLanguage: "en",
    author: { "@type": "Organization", name: "Arbrit Safety Training & Consultancy", url: siteUrl },
    publisher: {
      "@type": "Organization",
      name: "Arbrit Safety Training & Consultancy",
      logo: { "@type": "ImageObject", url: `${siteUrl}/arbritsafety-logo.png` },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <PageHeader
        title={post.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.category },
        ]}
        image={post.imageWide}
        imageAlt={post.imageAlt ?? post.title}
      />

      <article aria-label={post.title} className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[minmax(0,42rem)_minmax(0,18rem)] lg:justify-between lg:gap-16">
          <div className="min-w-0">
            <span className="inline-flex h-7 items-center rounded-full bg-[#0066b2]/10 px-3 text-[13px] font-semibold text-[#0066b2]">
              {post.category}
            </span>

            <div className="mt-6 space-y-10 text-[17px] leading-[1.75] text-navy-deep/85 md:text-lg">
              {post.content?.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h2
                      id={headingId(section.heading)}
                      className="scroll-mt-28 font-heading text-[26px] font-extrabold leading-tight tracking-[-0.02em] text-navy-deep text-balance md:text-[32px]"
                    >
                      {section.heading}
                    </h2>
                  )}
                  <div className={section.heading ? "mt-4 space-y-5" : "space-y-5"}>
                    {section.paragraphs.map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bulletList && (
                    <ul className="mt-5 space-y-3">
                      {section.bulletList.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-[0.3em] h-5 w-5 shrink-0 text-[#0066b2]" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              {!post.content && <p>{post.excerpt}</p>}
            </div>
          </div>

          {/* Desktop only: a sticky outline of the article's sections. */}
          {sections.length > 0 && (
            <aside className="hidden lg:block">
              <nav aria-labelledby="post-outline-heading" className="sticky top-28">
                <p id="post-outline-heading" className="font-heading text-lg font-bold text-navy-deep">
                  In this article
                </p>
                <ol className="mt-4 divide-y divide-navy-deep/10 border-y border-navy-deep/10">
                  {sections.map((heading) => (
                    <li key={heading}>
                      <a
                        href={`#${headingId(heading)}`}
                        className="block py-3 text-[15px] font-medium leading-snug text-navy-deep/80 transition-colors hover:text-[#0066b2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
                      >
                        {heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
          )}
        </div>
      </article>

      <section aria-labelledby="keep-reading-heading" className="bg-[#f5f7fa] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <h2
            id="keep-reading-heading"
            className="font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-navy-deep text-balance"
          >
            Keep reading
          </h2>

          <ul className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2 md:gap-6">
            {[
              { label: "Previous article", item: prevPost, direction: "prev" },
              { label: "Next article", item: nextPost, direction: "next" },
            ].map(({ label, item, direction }) => (
              <li key={label} className="flex">
                <Link
                  href={item.href}
                  className="group flex flex-1 items-center gap-4 rounded-[20px] bg-white p-3 pr-5 shadow-[0_18px_40px_-28px_rgba(18,59,109,0.5)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_50px_-24px_rgba(18,59,109,0.55)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
                >
                  <span className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-[14px] sm:w-28">
                    <Image src={item.image} alt="" fill sizes="112px" className="object-cover" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-1 text-[13px] font-semibold text-[#0066b2]">
                      {direction === "prev" && <ChevronLeft className="h-4 w-4" aria-hidden="true" />}
                      {label}
                      {direction === "next" && <ChevronRight className="h-4 w-4" aria-hidden="true" />}
                    </span>
                    <span className="mt-1 block font-heading text-base font-bold leading-snug text-navy-deep group-hover:text-[#0066b2] sm:text-lg">
                      {item.title}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-[24px] bg-white px-6 py-10 text-navy-deep shadow-[0_18px_40px_-28px_rgba(18,59,109,0.5)] md:mt-12 md:px-10 md:py-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <p className="font-heading text-[28px] font-extrabold leading-tight tracking-[-0.02em] md:text-4xl">
                  Ready to train your team?
                </p>
                <p className="mt-3 text-[17px] leading-relaxed text-navy-deep/80">
                  Browse our accredited HSE courses, or tell us what your site needs and we will help you plan it.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/courses"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0066b2] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#00589a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
                >
                  Browse courses <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#0066b2] px-6 text-sm font-semibold text-[#0066b2] transition-colors hover:bg-[#0066b2] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
