import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";

export function BlogCardGrid({ excludeHref }: { excludeHref?: string }) {
  const posts = excludeHref ? blogPosts.filter((post) => post.href !== excludeHref) : blogPosts;

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {posts.map((post, i) => (
        <Reveal key={post.href} delay={(i % 3) * 0.1} className="flex">
        <article
          className="group relative flex flex-1 flex-col rounded-2xl border border-navy/10 bg-white shadow-sm transition hover:shadow-lg focus-within:ring-2 focus-within:ring-[#0066b2] focus-within:ring-offset-2"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl bg-muted">
            <Image
              src={post.image}
              alt={post.imageAlt ?? `Cover image for the Arbrit Safety article “${post.title}”`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <span className="text-xs font-semibold uppercase tracking-wide text-[#0066b2]">
              {post.category}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-[#0066b2]">
              {/*
                Stretched link: the whole card is clickable via the ::after overlay,
                while the accessible link name stays just the post title.
              */}
              <Link
                href={post.href}
                className="outline-none after:absolute after:inset-0 after:rounded-2xl after:content-['']"
              >
                {post.title}
              </Link>
            </h3>
            {/* Phones get a 2-line teaser; tablets up have the width for the full excerpt. */}
            <p className="mt-3 line-clamp-2 flex-1 text-sm text-[#000] sm:line-clamp-none">
              {post.excerpt}
            </p>
            {/* Visual affordance only — the stretched link above already covers the card. */}
            <span
              aria-hidden="true"
              className="mt-4 inline-flex h-8 items-center text-sm font-medium text-[#0066b2] underline-offset-4 group-hover:underline"
            >
              Read More <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </div>
        </article>
        </Reveal>
      ))}
    </div>
  );
}
