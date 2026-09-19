import { ArrowUpRight, Star } from "lucide-react";
import { leeaDisplayHeading, leeaLead, leeaOutlinePill } from "@/components/sections/leea-styles";

type Review = { name: string; role: string; quote: string };

const reviews: Record<"fou" | "lac", Review[]> = {
  fou: [
    {
      name: "Amsil Iqbal",
      role: "Verified Student",
      quote:
        "The LEEA Foundation Certificate course was exceptional. The instructors are truly industry experts and the facilities in Dubai are top-notch. Highly recommended for safety professionals.",
    },
    {
      name: "Hamza Mehar",
      role: "Safety Supervisor",
      quote:
        "Arbrit provides a highly professional environment for LEEA training. The Foundation course was easy to follow and helped build a strong understanding of lifting principles and safety practices.",
    },
    {
      name: "Mekalesh Jijuashok",
      role: "Operations Lead",
      quote:
        "I’m very satisfied with the training. The course covered all the fundamentals, and the practical examples made it easier to understand real-world lifting scenarios.",
    },
  ],
  lac: [
    {
      name: "Rajesh Kumar",
      role: "QC Inspector",
      quote:
        "The LEEA LAC Diploma training was exceptionally thorough. As an inspector in the oil and gas sector, this certification has been vital for my career growth in the UAE. Highly recommended!",
    },
    {
      name: "Ahmed Mansoor",
      role: "Safety Engineer",
      quote:
        "Excellent practical sessions. Arbrit’s instructors really know their stuff when it comes to lifting accessories. The 5-day course was intense but very rewarding.",
    },
    {
      name: "Steven Smith",
      role: "Offshore Supervisor",
      quote:
        "Getting my LEEA LAC Diploma from Arbrit was a smooth process. The training environment in Dubai is world-class, and the certification is recognized everywhere.",
    },
  ],
};

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

/** Student reviews as Testimonial Cards (Mist, blue stars), with a link out to Google reviews. */
export function LeeaGlobalTrust({ course }: { course: "fou" | "lac" }) {
  return (
    <section aria-labelledby="leea-reviews-heading" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <div>
            <h2 id="leea-reviews-heading" className={`${leeaDisplayHeading} text-navy-deep`}>
              Student success stories
            </h2>
            <p className={`mt-5 max-w-xl text-navy-deep/80 ${leeaLead}`}>
              Join thousands of satisfied professionals who have advanced their careers with Arbrit Safety.
            </p>
          </div>
          <a
            href="https://maps.app.goo.gl/cciJYuNWaQn3dzVB7"
            target="_blank"
            rel="noopener noreferrer"
            className={leeaOutlinePill}
          >
            Read more Google reviews
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>

        <ul className="mt-10 grid gap-5 md:mt-12 lg:grid-cols-3 lg:gap-6">
          {reviews[course].map((review) => (
            <li key={review.name}>
              <figure className="flex h-full flex-col rounded-[20px] bg-[#f5f7fa] p-6 md:p-7">
                <div className="flex gap-1" role="img" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#0066b2] text-[#0066b2]" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-navy-deep">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0066b2] text-sm font-semibold text-white"
                  >
                    {initials(review.name)}
                  </span>
                  <span>
                    <span className="block font-heading font-bold text-navy-deep">{review.name}</span>
                    <span className="block text-sm text-navy-deep/75">{review.role}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
