import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { BlogCardGrid } from "@/components/sections/blog-card-grid";

export function LatestBlogs() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading variant="home" title="Latest From Arbrit" />
        <div className="mt-12">
          <BlogCardGrid />
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" variant="outline" className="border-[#0066b2] text-[#0066b2]">
            <Link href="/blog">
              View All Blogs <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
