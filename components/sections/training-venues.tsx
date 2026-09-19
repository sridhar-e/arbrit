import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const venues = [
  {
    title: "At our training centres",
    text: "Classrooms and practical areas in Dubai, Abu Dhabi and KSA, equipped for hands-on training.",
    image: "/home/step-learn.webp",
    alt: "Trainer leading a classroom session at an Arbrit Safety training centre",
    cta: "Find a centre",
    href: "/contact",
  },
  {
    title: "On your site",
    text: "We bring trainers and course material to your premises and train your teams on their own equipment.",
    image: "/home/step-assess.webp",
    alt: "Arbrit Safety trainer assessing a worker on scaffolding at a client site",
    cta: "Plan on-site training",
    href: "/#corporate-training",
  },
];

/** Where courses run: two photo panels with the navy scrim, for individuals and company buyers. */
export function TrainingVenues() {
  return (
    <section aria-labelledby="venues-heading" className="bg-[#f5f7fa] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <h2
          id="venues-heading"
          className="font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-navy-deep text-balance"
        >
          Train at our centre or on your site
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-deep/80 md:text-lg">
          Every course runs at our own centres or at your premises, for one delegate or your whole workforce.
        </p>

        <ul className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2 md:gap-6">
          {venues.map((venue) => (
            <li key={venue.title}>
              <Link
                href={venue.href}
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[24px] p-6 text-white shadow-[0_24px_48px_-24px_rgba(18,59,109,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0066b2] sm:aspect-[16/11] md:p-8"
              >
                <Image
                  src={venue.image}
                  alt={venue.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-[center_30%] transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(0deg,#123b6d_0%,rgba(18,59,109,0.9)_30%,rgba(18,59,109,0.35)_60%,rgba(18,59,109,0)_80%)]"
                />
                <span className="relative block max-w-md">
                  <span className="block font-heading text-[28px] font-extrabold leading-tight tracking-[-0.02em] md:text-4xl">
                    {venue.title}
                  </span>
                  <span className="mt-2 block text-[15px] leading-relaxed text-white/85 md:text-base">{venue.text}</span>
                  <span className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#0066b2] transition-colors duration-300 group-hover:bg-[#f5f7fa]">
                    {venue.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
