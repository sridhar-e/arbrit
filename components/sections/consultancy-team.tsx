import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/social-icons";
import { trainers } from "@/lib/content";

/**
 * Who we are: the consultants as Mist cards, matching the About page trainer cards. The card itself is
 * not one big link because it also holds a LinkedIn link, so "View profile" is the card's own link.
 */
export function ConsultancyTeam() {
  return (
    <section aria-labelledby="consultancy-team-heading" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <h2
          id="consultancy-team-heading"
          className="font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-navy-deep text-balance"
        >
          The people who turn up on your site
        </h2>
        <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-navy-deep/80 md:text-lg">
          Our consultants are qualified, Dubai Municipality-recognised HSE professionals who spend their weeks
          between client sites and our training rooms.
        </p>

        <ul className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
          {trainers.map((person) => (
            <li key={person.slug} className="flex h-full flex-col rounded-[20px] bg-[#f5f7fa] p-5 md:p-6">
              <div className="flex items-center gap-4">
                {/* Source portraits are 200px squares, so they stay small enough to render crisp. */}
                <span className="relative block h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-white md:h-24 md:w-24">
                  <Image
                    src={person.image}
                    alt={`${person.name}, HSE consultant and trainer at Arbrit Safety`}
                    fill
                    sizes="96px"
                    className="object-cover object-top"
                  />
                </span>
                <div className="min-w-0">
                  <h3 className="font-heading text-lg font-bold leading-snug text-navy-deep">{person.name}</h3>
                  <p className="mt-2 flex flex-wrap gap-1.5">
                    {person.credentials.split(",").map((credential) => (
                      <span
                        key={credential}
                        className="rounded-full bg-[#0066b2]/10 px-2.5 py-1 text-[12px] font-semibold leading-none text-[#0066b2]"
                      >
                        {credential.trim()}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-[15px] leading-relaxed text-navy-deep/80">{person.shortBio}</p>

              <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                <Link
                  href={`/about/trainers/${person.slug}`}
                  className="group inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-[#0066b2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
                >
                  View profile<span className="sr-only">: {person.name}</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </Link>
                {person.linkedin ? (
                  <a
                    href={person.linkedin}
                    target={person.linkedin.startsWith("http") ? "_blank" : undefined}
                    rel={person.linkedin.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={`${person.name} on LinkedIn`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0066b2] transition-colors hover:bg-[#0066b2] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
                  >
                    <LinkedinIcon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
