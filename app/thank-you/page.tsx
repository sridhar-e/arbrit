import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ThankYouCountdown } from "@/components/sections/thank-you-countdown";
import { safeReturnPath } from "@/lib/lead-forms";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your enquiry has been received.",
  robots: { index: false, follow: false },
};

const pageNames: Record<string, string> = {
  "/": "Home",
  "/courses": "Courses",
  "/contact": "Contact",
  "/career": "Careers",
  "/consultancy": "Consultancy",
};

function returnLabel(href: string) {
  if (pageNames[href]) return pageNames[href];
  if (href.startsWith("/course")) return "the course page";
  return "the previous page";
}

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { back } = await searchParams;
  // Internal paths only: the URL can never send people to another site.
  const href = safeReturnPath(Array.isArray(back) ? back[0] : back);
  const label = returnLabel(href);

  return (
    <section aria-labelledby="thank-you-heading" className="bg-[#f5f7fa] px-5 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-2xl rounded-[24px] bg-white px-6 py-10 text-center shadow-[0_24px_48px_-24px_rgba(18,59,109,0.45)] sm:px-12 sm:py-14">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2]">
          <CheckCircle2 className="h-8 w-8" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h1
          id="thank-you-heading"
          className="mt-6 font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-navy-deep text-balance"
        >
          Thank you!
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[17px] leading-relaxed text-navy-deep/80 md:text-lg">
          We&apos;ve received your enquiry and our team will contact you shortly.
        </p>
        <ThankYouCountdown href={href} label={label} seconds={5} />
      </div>
    </section>
  );
}
