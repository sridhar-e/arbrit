import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Home, Info, Phone } from "lucide-react";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

const routes = [
  { icon: BookOpen, label: "International courses", href: "/courses?category=International" },
  { icon: Info, label: "About Arbrit Safety", href: "/about" },
  { icon: Home, label: "Back to the home page", href: "/" },
];

/** Shown for any URL that does not exist (old links, typos, removed pages). */
export default function NotFound() {
  const phone = contactInfo.phones[0];

  return (
    <section aria-labelledby="not-found-heading" className="bg-[#f5f7fa] py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p aria-hidden="true" className="font-heading text-[64px] font-extrabold leading-none tracking-[-0.04em] text-[#0066b2] md:text-[88px]">
            404
          </p>
          <h1
            id="not-found-heading"
            className="mt-4 font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-navy-deep text-balance"
          >
            We couldn&apos;t find that page
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-navy-deep/80 md:text-lg">
            The link may be old or mistyped. Browse our courses, or get in touch and we&apos;ll point you to the right
            training.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/courses"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0066b2] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#00589a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
            >
              Browse courses <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#0066b2] bg-white px-7 text-sm font-semibold text-[#0066b2] transition-colors hover:bg-[#0066b2] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
            >
              Contact us
            </Link>
          </div>

          <ul className="mt-10 max-w-xl divide-y divide-navy-deep/10 border-y border-navy-deep/10">
            {routes.map(({ icon: Icon, label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex min-h-16 items-center gap-4 py-3 text-[15px] font-semibold text-navy-deep transition-colors hover:text-[#0066b2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="flex-1">{label}</span>
                  <ArrowRight className="h-4 w-4 text-[#0066b2] transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`tel:${phone.number.replace(/\s+/g, "")}`}
                className="group flex min-h-16 items-center gap-4 py-3 text-[15px] font-semibold text-navy-deep transition-colors hover:text-[#0066b2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2]">
                  <Phone className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="flex-1">
                  Call {phone.label} <span className="whitespace-nowrap">{phone.number}</span>
                </span>
                <ArrowRight className="h-4 w-4 text-[#0066b2] transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <div className="relative hidden aspect-[5/4] overflow-hidden rounded-[24px] shadow-[0_24px_48px_-24px_rgba(18,59,109,0.45)] lg:block">
          <Image
            src="/home/step-arrive.webp"
            alt="Delegates arriving for a practical safety course at an Arbrit Safety training centre"
            fill
            sizes="(min-width: 1280px) 38rem, 45vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
