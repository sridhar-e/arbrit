import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import { BadgeCheck, Flag, HardHat, MapPin, Users } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { pageHeaderImages } from "@/lib/page-images";
import { PosterVideo } from "@/components/ui/poster-video";
import { AboutPhotoStrip } from "@/components/sections/about-photo-strip";
import { NavyBandTexture } from "@/components/ui/navy-band-texture";
import { historyGallery } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "About Arbrit Safety | LEEA Licensed Training Partner in the UAE",
  description:
    "Arbrit Safety Training & Consultancy delivers accredited HSE training and consultancy across Dubai, Abu Dhabi and KSA. See how we train.",
  path: "/about",
});

const proof = [
  { icon: MapPin, text: "Training at our centres in Dubai, Abu Dhabi and KSA, or on your site" },
  { icon: HardHat, text: "Hands-on practice on the same equipment your teams use at work" },
  { icon: BadgeCheck, text: "Accredited by LEEA, IOSH, IRCA, STI and Highfield" },
];

const milestones = [
  {
    icon: Flag,
    year: "2006",
    title: "Founded in Dubai",
    description: "Arbrit Safety Training & Consultancy opens with a single focus: practical, accredited HSE training.",
  },
  {
    icon: BadgeCheck,
    year: "Licensed",
    title: "First LEEA Training Partner in the UAE & KSA",
    description: "Appointed an official LEEA Licensed Training Partner for the Foundation Certificate (FOU) and LAC Diploma.",
  },
  {
    icon: Users,
    year: "Today",
    title: "15,000+ delegates trained",
    description: "50+ accredited courses delivered from offices across the UAE, UK, Qatar and India.",
  },
];

const approach = [
  {
    title: "Real scenarios, current material",
    text: "Every course is grounded in real, practical scenarios, and we revise the material whenever standards or site practice change.",
  },
  {
    title: "The equipment you use at work",
    text: "Delegates train on the same equipment they use on site, so what they learn transfers straight to the job.",
  },
  {
    title: "One provider for the whole programme",
    text: "From entry-level awareness through to accredited international qualifications, your whole HSE programme sits with one team.",
  },
  {
    title: "Agreed service, workforce-wide prices",
    text: "Service levels are agreed up front, at prices that let you train your entire workforce, not just a handful of people.",
  },
];

const displayHeading =
  "font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-balance";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        eyebrow="Committed to Safer Workplaces Since 2006"
        description="We are committed to delivering quality, practical HSE training and consultancy that build safer workplaces and stronger safety cultures across the UAE."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        {...pageHeaderImages.about}
      />

      {/* Mission: copy and proof beside the company video. */}
      <section aria-labelledby="mission-heading" className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
          <div>
            <h2 id="mission-heading" className={`${displayHeading} text-navy-deep`}>
              Safety standards that never slip
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-navy-deep/80 md:text-lg">
              Arbrit Safety Training &amp; Consultancy delivers accredited HSE training that gives workers the
              practical skills to do their jobs safely, and gives employers the confidence that their teams are
              competent, compliant and ready for the risks of the job.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-deep/80">
              Since 2006 we have grown into a training provider with offices across the UAE, UK, Qatar and India,
              advising organisations across every major industry on their wider HSE needs. That growth comes from
              getting the fundamentals right: qualified trainers, current equipment, course material we keep up to
              date, and one standard of delivery on every programme.
            </p>

            <ul className="mt-8 max-w-xl divide-y divide-navy-deep/10 border-y border-navy-deep/10">
              {proof.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-4 py-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="text-[15px] font-medium leading-snug text-navy-deep">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-[28rem] lg:justify-self-end">
            {/* Desktop only: a hands-on photo layered behind the video card. */}
            <div
              aria-hidden="true"
              className="absolute -left-28 top-16 hidden w-60 -rotate-3 overflow-hidden rounded-[20px] shadow-[0_24px_48px_-24px_rgba(18,59,109,0.45)] ring-1 ring-navy-deep/10 lg:block xl:-left-40 xl:w-72"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/Hands-on-Experience/LEEA-Courses-Dubai-UAE-1-1.webp"
                  alt=""
                  fill
                  sizes="18rem"
                  className="object-cover"
                />
              </div>
            </div>
            <PosterVideo
              src="/videos/arbrit-safety.mp4"
              poster="/about/arbrit-video-poster-training.webp"
              posterAlt="Arbrit Safety trainer demonstrating a lifting sling beside a model crane in a classroom"
              label="Play the Arbrit Safety company video"
              caption="Watch our story"
              subcaption="Inside Arbrit Safety Training"
              duration="0:59"
              sizeClassName="aspect-[4/5]"
              sizes="(min-width: 1024px) 28rem, (min-width: 448px) 28rem, 100vw"
              posterPosition="object-[center_18%]"
              className="relative"
            />
          </div>
        </div>
      </section>

      {/* Our story: milestones on a rail, then photos from the years since. */}
      <section aria-labelledby="story-heading" className="relative isolate overflow-hidden bg-navy-deep py-16 text-white md:py-24">
        <NavyBandTexture />
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="max-w-3xl">
            <h2 id="story-heading" className={displayHeading}>
              A bold history that fuels the future
            </h2>
            <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-white/85 md:text-lg">
              Since 2006 we have grown into one of the leading HSE training providers in the UAE. The principles we
              started with have not changed: internationally recognised standards, proven best practice, and training
              that genuinely improves safety on the job.
            </p>
          </div>

          <ol className="relative mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
            {/* The rail: down the left on phones, across the top from 768px. */}
            <span aria-hidden="true" className="absolute bottom-2 left-5 top-2 w-0.5 bg-white/15 md:hidden" />
            <span aria-hidden="true" className="absolute left-5 right-0 top-5 hidden h-0.5 bg-white/15 md:block" />
            {milestones.map(({ icon: Icon, year, title, description }) => (
              <li key={year} className="relative pl-16 md:pl-0">
                <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#0066b2] shadow-[0_8px_20px_-6px_rgba(0,102,178,0.8)] ring-4 ring-navy-deep md:relative">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <p className="font-heading text-[44px] font-extrabold leading-none tracking-[-0.04em] md:mt-6 md:text-6xl">
                  {year}
                </p>
                <h3 className="mt-3 font-heading text-lg font-bold leading-snug">{title}</h3>
                <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-white/80">{description}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 md:mt-20">
          <AboutPhotoStrip photos={historyGallery} />
        </div>
      </section>

      {/* Training approach: a hands-on photo beside four numbered commitments. */}
      <section aria-labelledby="approach-heading" className="bg-[#f5f7fa] py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 id="approach-heading" className={`${displayHeading} text-navy-deep`}>
              How we train
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-navy-deep/80 md:text-lg">
              Arbrit courses train contractor staff in a range of core skills to an international standard.
            </p>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-[24px] shadow-[0_24px_48px_-24px_rgba(18,59,109,0.45)] lg:aspect-[5/4]">
              <Image
                src="/home/step-practise.webp"
                alt="Delegates practising a hands-on safety exercise during an Arbrit Safety course"
                fill
                sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[center_35%]"
              />
            </div>
          </div>

          <ol className="divide-y divide-navy-deep/10 border-y border-navy-deep/10 lg:self-center">
            {approach.map(({ title, text }, index) => (
              <li key={title} className="flex gap-5 py-7 md:gap-8 md:py-9">
                <span
                  aria-hidden="true"
                  className="w-14 shrink-0 font-heading text-[44px] font-extrabold leading-none tracking-[-0.04em] text-[#0066b2] md:w-20 md:text-6xl"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-extrabold leading-snug tracking-[-0.01em] text-navy-deep md:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-navy-deep/80">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
