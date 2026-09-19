import type { ReactNode } from "react";
import { CalendarDays } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { pageHeaderImages } from "@/lib/page-images";

/** Shared layout for the Privacy Policy and Terms: page header, "last updated" line and readable prose. */
export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <PageHeader title={title} breadcrumbs={[{ label: "Home", href: "/" }, { label: title }]} {...pageHeaderImages.legal} />
      <section aria-label={title} className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          {/* One comfortable reading column (~40rem), left-aligned with the rest of the site. */}
          <div className="max-w-[42rem]">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#f5f7fa] px-3.5 py-1.5 text-[13px] font-semibold text-navy-deep">
              <CalendarDays className="h-3.5 w-3.5 text-[#0066b2]" aria-hidden="true" />
              Last updated: {updated}
            </p>
            <div className="mt-8 space-y-5 text-base leading-[1.7] text-navy-deep/80 [&>p:first-child]:text-[17px] md:[&>p:first-child]:text-lg [&_a]:font-medium [&_a]:text-[#0066b2] [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-12 [&_h2]:border-t [&_h2]:border-navy-deep/10 [&_h2]:pt-10 [&_h2]:font-heading [&_h2]:text-[26px] [&_h2]:font-extrabold [&_h2]:leading-tight [&_h2]:tracking-[-0.02em] [&_h2]:text-navy-deep md:[&_h2]:text-3xl [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-navy-deep [&_strong]:font-semibold [&_strong]:text-navy-deep [&_li]:pl-1 [&_li]:marker:text-[#0066b2] [&_ul]:list-disc [&_ul]:space-y-2.5 [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:space-y-2.5 [&_ol]:pl-5">
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
