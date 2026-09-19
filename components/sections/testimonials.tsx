import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { TestimonialRail } from "@/components/sections/testimonial-rail";

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2
            id="testimonials-heading"
            className="font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-navy-deep text-balance"
          >
            What our trainees say
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-navy-deep/80 md:text-lg">
            Feedback from individuals and companies who trained with Arbrit.
          </p>
          <div className="mt-8 overflow-hidden rounded-[24px] bg-navy-deep shadow-[0_24px_48px_-24px_rgba(18,59,109,0.45)]">
            {/* Poster frame instead of preloading: nothing downloads until play is pressed. WebM for
                modern browsers, H.264 MP4 for older iPhones (iOS before 17.4 cannot play WebM). */}
            <video
              controls
              preload="none"
              playsInline
              poster="/videos/testimonials-poster.webp"
              width={1280}
              height={720}
              aria-label="Arbrit trainee stories video"
              className="aspect-video w-full object-cover"
            >
              <source src="/Testimonials.webm" type="video/webm" />
              <source src="/videos/testimonials.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <TestimonialRail className="relative -mx-5 flex gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
          {testimonials.map((item) => (
            <li key={item.name} className="w-[85%] shrink-0 sm:w-auto">
              <figure className="flex h-full flex-col rounded-[20px] bg-[#f5f7fa] p-6">
                <div role="img" aria-label={`Rated ${item.rating} out of 5`} className="flex gap-0.5">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      aria-hidden="true"
                      className={`h-4 w-4 ${
                        index < item.rating ? "fill-[#0066b2] text-[#0066b2]" : "text-navy-deep/25"
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-navy-deep">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0066b2] text-sm font-semibold text-white"
                  >
                    {initials(item.name)}
                  </span>
                  <span>
                    <span className="block font-heading text-[15px] font-bold text-navy-deep">{item.name}</span>
                    <span className="block text-[13px] text-navy-deep/75">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </TestimonialRail>
      </div>
    </section>
  );
}
