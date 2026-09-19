import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/content";

const coverAlt = (post: (typeof blogPosts)[number]) =>
  post.imageAlt ?? `Cover image for the Arbrit Safety article “${post.title}”`;

/**
 * Blog list: the newest post (first in the list) as a large photo panel under the navy scrim,
 * the rest as 20px cards. Server component; the homepage keeps its own BlogCardGrid.
 */
export function BlogIndex() {
  const [featured, ...rest] = blogPosts;

  return (
    <section aria-labelledby="blog-index-heading" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <h2
          id="blog-index-heading"
          className="font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-navy-deep text-balance"
        >
          Latest articles
        </h2>
        <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-navy-deep/80 md:text-lg">
          Practical guides on LEEA lifting certification, OSHAD compliance and train-the-trainer, from
          Arbrit Safety&apos;s trainers.
        </p>

        <div className="mt-8 grid gap-5 md:mt-10 md:gap-6 lg:grid-cols-[1.35fr_1fr]">
          {featured && (
            <Link
              href={featured.href}
              className="group relative flex flex-col justify-end overflow-hidden rounded-[24px] p-6 pt-60 text-white shadow-[0_24px_48px_-24px_rgba(18,59,109,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0066b2] sm:pt-80 md:p-8 md:pt-80 lg:min-h-[36rem]"
            >
              <Image
                src={featured.imageWide}
                alt={coverAlt(featured)}
                fill
                preload
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(0deg,#123b6d_0%,rgba(18,59,109,0.9)_50%,rgba(18,59,109,0.35)_75%,rgba(18,59,109,0)_92%)]"
              />
              <span className="relative block max-w-2xl">
                <span className="inline-flex h-7 items-center rounded-full bg-white/15 px-3 text-[13px] font-semibold ring-1 ring-white/25">
                  {featured.category}
                </span>
                <span className="mt-4 block font-heading text-[28px] font-extrabold leading-tight tracking-[-0.02em] text-balance md:text-4xl">
                  {featured.title}
                </span>
                <span className="mt-3 block text-[15px] leading-relaxed text-white/85 md:text-base">
                  {featured.excerpt}
                </span>
                <span className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#0066b2] transition-colors group-hover:bg-[#f5f7fa]">
                  Read article <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </span>
            </Link>
          )}

          <ul className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-1">
            {rest.map((post) => (
              <li key={post.href} className="flex">
                <article className="group relative flex flex-1 flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_18px_40px_-28px_rgba(18,59,109,0.5)] ring-1 ring-navy-deep/10 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_50px_-24px_rgba(18,59,109,0.55)] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#0066b2]">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#f5f7fa]">
                    <Image
                      src={post.image}
                      alt={coverAlt(post)}
                      fill
                      sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <span className="inline-flex h-7 w-fit items-center rounded-full bg-[#f5f7fa] px-3 text-[13px] font-semibold text-navy-deep">
                      {post.category}
                    </span>
                    <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-navy-deep">
                      {/* Stretched link: the whole card is clickable, the link name stays the title. */}
                      <Link
                        href={post.href}
                        className="outline-none after:absolute after:inset-0 after:rounded-[20px] after:content-['']"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-navy-deep/80">{post.excerpt}</p>
                    <span
                      aria-hidden="true"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066b2]"
                    >
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
