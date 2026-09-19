import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { ArrowRight, CheckCircle2, Mail, Search, Target } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { pageHeaderImages } from "@/lib/page-images";
import { NavyBandTexture } from "@/components/ui/navy-band-texture";
import { CareerForm } from "@/components/sections/career-form";
import { CareerApplyLink } from "@/components/sections/career-apply-link";
import { careerJobOpenings, contactInfo } from "@/lib/data";
import { GENERAL_APPLICATION } from "@/lib/lead-forms";

export const metadata: Metadata = pageMetadata({
  title: "HSE Jobs & Careers in the UAE",
  description:
    "Apply for HSE jobs with Arbrit Safety: HSE managers, HSE engineers, safety trainers and lifting specialists across the UAE. Submit your application and CV online.",
  path: "/career",
});

const intro = [
  {
    icon: Search,
    title: "Welcome to HSE Job Finder",
    text: "We provide human resource in the field of HSE throughout the UAE. You can find job openings related to construction, manufacturing and more. We select professionals with high ability and help companies manage their HSE human resource needs.",
  },
  {
    icon: Target,
    title: "Our expertise",
    text: "So whether you are wanting to advance in your health and safety career or looking to break into the industry, we can definitely help you!",
  },
];

const jobSeekerOffers = [
  "Competitive salary for those wishing to apply and get selected for the vacancies.",
  "Health and safety trainings with all the accreditations for those who want to get into the industry.",
];

const employerOffers = [
  "As specialists in health and safety, we review and advise on policy and working practices for organisations of all kinds and sizes.",
  "We provide a true & comprehensive ‘360’ recruitment service.",
  "Short term and long term commitments.",
];

const displayHeading =
  "font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-balance";
const subHeading = "font-heading text-[28px] font-extrabold leading-tight tracking-[-0.02em] text-navy-deep md:text-4xl";

function OfferList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className={subHeading}>{title}</h3>
      <ul className="mt-6 divide-y divide-navy-deep/10 border-y border-navy-deep/10">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-4 py-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2]">
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="pt-2 text-[15px] font-medium leading-normal text-navy-deep">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CareerPage() {
  return (
    <>
      <PageHeader
        title="Career"
        eyebrow="Build Your HSE Career With Us"
        description="Welcome to HSE Job Finder — HSE job openings and recruitment across the UAE."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Career" }]}
        {...pageHeaderImages.career}
      />

      {/* Intro: who the page is for, beside a photo from 1024px. */}
      <section aria-labelledby="career-intro-heading" className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 id="career-intro-heading" className={`${displayHeading} text-navy-deep`}>
              Careers at Arbrit Safety
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-navy-deep/80 md:text-lg">
              We connect HSE talent with employers across the UAE, and help professionals grow into the industry.
            </p>
            <ul className="mt-8 divide-y divide-navy-deep/10 border-y border-navy-deep/10">
              {intro.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4 py-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="max-w-xl">
                    <h3 className="font-heading text-xl font-extrabold leading-snug tracking-[-0.01em] text-navy-deep">
                      {title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-navy-deep/80">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-[0_24px_48px_-24px_rgba(18,59,109,0.45)] lg:aspect-[4/5]">
            <Image
              src="/home/step-certified.webp"
              alt="HSE professionals holding their certificates after completing a course with Arbrit Safety"
              fill
              sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* What we offer: two hairline lists, side by side from 1024px. */}
      <section aria-labelledby="career-offer-heading" className="bg-[#f5f7fa] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <h2 id="career-offer-heading" className={`${displayHeading} text-navy-deep`}>
            What we offer
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-navy-deep/80 md:text-lg">
            Tailored support whether you&apos;re looking for your next role or building your HSE team.
          </p>
          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <OfferList title="What we offer job seekers" items={jobSeekerOffers} />
            <OfferList title="What we offer employers and recruiters" items={employerOffers} />
          </div>
        </div>
      </section>

      {/* Openings: numbered rows, each with an Apply link that pre-selects the role in the form. */}
      <section aria-labelledby="career-openings-heading" className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 id="career-openings-heading" className={`${displayHeading} text-navy-deep`}>
              Current job openings
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-navy-deep/80 md:text-lg">
              We are continuously looking for talented people who would be interested in long-term careers with us.
              Our employment environment offers great opportunities for learning, developing and contributing in
              different functions, regions and countries.
            </p>
          </div>

          <div>
            <ol className="divide-y divide-navy-deep/10 border-y border-navy-deep/10">
              {careerJobOpenings.map((job, index) => (
                <li key={job} className="flex items-center gap-4 py-5 sm:gap-6 md:py-6">
                  <span
                    aria-hidden="true"
                    className="w-10 shrink-0 font-heading text-[28px] font-extrabold leading-none tracking-[-0.04em] text-[#0066b2] sm:w-14 sm:text-[40px]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="min-w-0 flex-1 font-heading text-lg font-extrabold leading-snug tracking-[-0.01em] text-navy-deep md:text-2xl">
                    {job}
                  </h3>
                  <CareerApplyLink
                    position={job}
                    className="inline-flex h-11 shrink-0 items-center gap-1.5 rounded-full bg-[#0066b2] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#00589a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
                  >
                    Apply
                    <span className="sr-only"> for {job}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </CareerApplyLink>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-[15px] leading-relaxed text-navy-deep/80">
              Don&apos;t see your role?{" "}
              <CareerApplyLink
                position={GENERAL_APPLICATION}
                className="font-semibold text-[#0066b2] underline underline-offset-4 hover:text-[#00589a]"
              >
                Send a general application
              </CareerApplyLink>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Apply: the page's one navy band, heading and CV note beside the white form card. */}
      <section
        id="apply"
        aria-labelledby="career-apply-heading"
        className="relative isolate scroll-mt-24 overflow-hidden bg-navy-deep py-16 text-white md:py-24"
      >
        <NavyBandTexture gridAt="20% 40%" />
        {/* Phones read heading, form, then the email option; from 1024px the form sits beside both. */}
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-x-16 lg:gap-y-8">
          <div className="lg:self-end">
            <h2 id="career-apply-heading" className={displayHeading}>
              Apply for a role
            </h2>
            <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-white/85 md:text-lg">
              Tell us about your experience and the role you want. If your profile matches an opening, our
              recruitment team will contact you.
            </p>
          </div>

          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
            <CareerForm />
          </div>

          <div className="lg:self-start">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex min-h-14 max-w-lg items-center gap-4 rounded-2xl bg-white/[0.07] px-4 py-3 ring-1 ring-white/10 transition-colors hover:bg-white/[0.12] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Mail className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[13px] text-white/75">Prefer email? Send your CV to</span>
                <span className="block break-all font-semibold">{contactInfo.email}</span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-white/60" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
