"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, MapPin, Play, ShieldCheck } from "lucide-react";

const proof = [
  { icon: ShieldCheck, text: "First LEEA Licensed Training Partner in the UAE and KSA" },
  { icon: MapPin, text: "Training across Dubai, Sharjah, RAK, Abu Dhabi and KSA" },
  { icon: BadgeCheck, text: "IOSH, STI, Highfield, IRCA Lead Auditor and RAKEZ-approved courses" },
];

/** Poster first; the YouTube player only loads once the visitor presses play. */
function CompanyVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-navy-deep shadow-[0_30px_60px_-30px_rgba(0,0,0,0.65)]">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src="https://www.youtube-nocookie.com/embed/yIJkf2ja3Gw?autoplay=1&rel=0"
          title="Arbrit Safety Training & Consultancy company video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <span className="sr-only">Play the Arbrit Safety company video: </span>
          <Image
            src="/about/arbrit-video-poster.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 30rem, 100vw"
            className="object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(0deg,#123b6d_0%,rgba(18,59,109,0.55)_35%,rgba(18,59,109,0)_65%)]"
          />
          <span className="absolute inset-x-5 bottom-5 flex items-center gap-4 sm:inset-x-7 sm:bottom-7">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[#0066b2] shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out group-hover:scale-110">
              <Play className="ml-0.5 h-6 w-6 fill-current" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-heading text-xl font-extrabold tracking-[-0.01em] text-white">
                Watch our story
              </span>
              <span className="mt-0.5 block text-sm text-white/85">Inside Arbrit Safety Training</span>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

export function AboutUs() {
  return (
    <section aria-labelledby="about-heading" className="relative isolate overflow-hidden bg-navy-deep text-white">
      {/* Blueprint grid and the Arbrit shield mark give the navy field structure without new colour. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 70% 60% at 75% 35%, #000 0%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 75% 35%, #000 0%, transparent 75%)",
          }}
        />
        <svg
          viewBox="0 0 167 192"
          fill="currentColor"
          className="absolute -right-32 -top-10 h-[760px] w-auto text-white/[0.045] md:-right-20"
        >
          <path d="M83.24,191.03l-3.57-1.93c-29.65-16.06-53.36-38.83-66.77-64.11C4.46,109.05.12,92.03.01,74.43V27.35S83.15,0,83.15,0l83.13,27.36v46.15c.02,17.850-4.29,35.09-12.8,51.21-5.5,10.43-12.57,20.19-21.62,29.86-12.88,13.56-27.61,24.83-45.07,34.49l-3.55,1.96ZM14.81,38.07v36.3c.11,15.15,3.87,29.87,11.18,43.68,11.52,21.73,31.74,41.52,57.17,56.04,14.57-8.46,27.01-18.2,37.91-29.68,8.09-8.65,14.42-17.37,19.3-26.61,7.37-13.970,11.1-28.87,11.08-44.28v-35.44S83.15,15.59,83.15,15.59L14.81,38.07Z" />
          <path d="M60.28,92.47c6.53,1.82,11.63,6.920,13.45,13.450l9.41,33.77,9.41-33.77c1.82-6.53,6.92-11.63,13.45-13.450l33.77-9.410-33.77-9.41c-6.53-1.82-11.63-6.92-13.45-13.45l-.3-1.08c-3.53-12.69-5.33-25.8-5.33-38.97V7.57h-7.56v12.59c0,13.17-1.790,26.28-5.33,38.97l-.3,1.08c-1.82,6.53-6.92,11.63-13.45,13.45l-33.77,9.41,33.77,9.41Z" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:py-24 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
        <div>
          <h2
            id="about-heading"
            className="font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-balance"
          >
            About Arbrit
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/90 md:text-lg">
            Arbrit Safety Training &amp; Consultancy L.L.C. delivers quality training in Occupational
            Health and Safety, scaffolding, first aid, construction safety and lifting operations.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">
            We help people improve their knowledge and skills, reduce risk, and build healthier,
            safer workplaces that perform better over the long term.
          </p>

          <ul className="mt-8 max-w-xl divide-y divide-white/15 border-y border-white/15">
            {proof.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-4 py-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="text-[15px] font-medium leading-snug">{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-navy-deep transition-colors hover:bg-[#f5f7fa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              More about Arbrit <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center rounded-full border border-white/45 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Talk to us
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-[30rem] lg:justify-self-end">
          {/* Desktop only: hands-on photos layered behind the video card. */}
          <div
            aria-hidden="true"
            className="absolute -left-36 top-14 hidden w-60 -rotate-3 overflow-hidden rounded-[20px] shadow-[0_24px_48px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10 lg:block xl:-left-44 xl:w-72"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src="/Hands-on-Experience/IOSH-Managing-Safely.webp"
                alt="Delegates in an IOSH Managing Safely course at Arbrit Safety"
                fill
                sizes="18rem"
                className="object-cover"
              />
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute -left-24 bottom-12 hidden w-52 rotate-2 overflow-hidden rounded-[20px] shadow-[0_24px_48px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10 lg:block xl:-left-32 xl:w-60"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src="/Hands-on-Experience/LEEA-Courses-Dubai-UAE-1-1.webp"
                alt="Hands-on LEEA lifting course in Dubai, UAE"
                fill
                sizes="15rem"
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative">
            <CompanyVideo />
          </div>
        </div>
      </div>

    </section>
  );
}
