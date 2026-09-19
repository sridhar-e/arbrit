import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/social-icons";
import { PageHeader } from "@/components/layout/page-header";
import { pageHeaderImages } from "@/lib/page-images";
import { trainers } from "@/lib/content";

export function generateStaticParams() {
  return trainers.map((trainer) => ({ slug: trainer.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const trainer = trainers.find((t) => t.slug === slug);
  if (!trainer) return {};
  return {
    ...pageMetadata({ title: `${trainer.name}, HSE Trainer`, description: trainer.shortBio, path: `/about/trainers/${slug}`, type: "profile", ownImage: true }),
  };
}

const displayHeading =
  "font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-balance";

function CredentialChips({ credentials }: { credentials: string }) {
  return (
    <span className="flex flex-wrap gap-1.5">
      {credentials.split(",").map((credential) => (
        <span
          key={credential}
          className="rounded-full bg-[#0066b2]/10 px-3 py-1 text-[13px] font-semibold leading-tight text-[#0066b2]"
        >
          {credential.trim()}
        </span>
      ))}
    </span>
  );
}

export default async function TrainerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trainer = trainers.find((t) => t.slug === slug);
  if (!trainer) notFound();

  const others = trainers.filter((t) => t.slug !== trainer.slug);
  const [leadParagraph, ...bio] = trainer.bio;

  return (
    <>
      <PageHeader
        title={trainer.name}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: trainer.name },
        ]}
        {...pageHeaderImages.trainers}
      />

      <section aria-labelledby="trainer-profile-heading" className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[22rem_minmax(0,1fr)] lg:gap-16">
          {/* Profile card: sticks beside the biography from 1024px. */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[20px] bg-[#f5f7fa] p-5 sm:p-6">
              <div className="flex items-center gap-5 lg:flex-col lg:items-start">
                {/* Source portraits are 200px squares, so they never render larger than 160px. */}
                <span className="relative block h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-white sm:h-32 sm:w-32 lg:h-40 lg:w-40">
                  <Image
                    src={trainer.image}
                    alt={`${trainer.name}, safety trainer at Arbrit Safety`}
                    fill
                    sizes="160px"
                    className="object-cover object-top"
                    priority
                  />
                </span>
                <div className="min-w-0">
                  <h2 id="trainer-profile-heading" className="font-heading text-2xl font-extrabold leading-tight tracking-[-0.02em] text-navy-deep">
                    {trainer.name}
                  </h2>
                  <div className="mt-3">
                    <CredentialChips credentials={trainer.credentials} />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/courses"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0066b2] text-sm font-semibold text-white transition-colors hover:bg-[#00589a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
                >
                  Book a course <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                {trainer.linkedin ? (
                  <a
                    href={trainer.linkedin}
                    target={trainer.linkedin.startsWith("http") ? "_blank" : undefined}
                    rel={trainer.linkedin.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white text-sm font-semibold text-[#0066b2] ring-1 ring-navy-deep/10 transition-colors hover:ring-[#0066b2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
                  >
                    <LinkedinIcon className="h-4 w-4" aria-hidden="true" />
                    {trainer.name} on LinkedIn
                  </a>
                ) : null}
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <blockquote className="border-l-2 border-[#0066b2] pl-5 md:pl-7">
              <p className="font-heading text-[clamp(1.5rem,5.5vw,2.25rem)] font-extrabold leading-[1.2] tracking-[-0.02em] text-navy-deep text-balance">
                &ldquo;{trainer.quote}&rdquo;
              </p>
            </blockquote>

            <h2 id="trainer-bio-heading" className="mt-12 font-heading text-[28px] font-extrabold leading-tight tracking-[-0.02em] text-navy-deep md:mt-14 md:text-4xl">
              Biography
            </h2>
            <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-navy-deep/80 md:text-lg">{leadParagraph}</p>
            {bio.length > 0 && (
              <div className="mt-4 max-w-2xl space-y-4 text-base leading-relaxed text-navy-deep/80">
                {bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section aria-labelledby="other-trainers-heading" className="bg-[#f5f7fa] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
              <div>
                <h2 id="other-trainers-heading" className={`${displayHeading} text-navy-deep`}>
                  Meet the other trainers
                </h2>
                <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-navy-deep/80 md:text-lg">
                  Certified experts who bring years of site experience into every course they lead.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-[#0066b2] px-6 text-sm font-semibold text-[#0066b2] transition-colors hover:bg-[#0066b2] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" /> About Arbrit
                </Link>
                <Link
                  href="/courses"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-[#0066b2] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#00589a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
                >
                  Browse courses <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <ul className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2 md:gap-6">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/about/trainers/${other.slug}`}
                    className="group flex h-full flex-col rounded-[20px] bg-white p-5 shadow-[0_18px_40px_-28px_rgba(18,59,109,0.5)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_50px_-24px_rgba(18,59,109,0.55)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2] md:p-6"
                  >
                    <span className="flex items-center gap-4">
                      <span className="relative block h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-[#f5f7fa] md:h-24 md:w-24">
                        <Image
                          src={other.image}
                          alt={`${other.name}, safety trainer at Arbrit Safety`}
                          fill
                          sizes="96px"
                          className="object-cover object-top"
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-heading text-lg font-bold leading-snug text-navy-deep">{other.name}</span>
                        <span className="mt-2 block">
                          <CredentialChips credentials={other.credentials} />
                        </span>
                      </span>
                    </span>
                    <span className="mt-5 block text-[15px] leading-relaxed text-navy-deep/80">{other.shortBio}</span>
                    <span className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-semibold text-[#0066b2]">
                      View profile<span className="sr-only">: {other.name}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
