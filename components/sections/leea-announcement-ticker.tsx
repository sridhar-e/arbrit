import { Megaphone } from "lucide-react";

const edgeFade = {
  maskImage: "linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)",
  WebkitMaskImage: "linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)",
};

/**
 * Arbrit Blue announcement strip under a LEEA hero. Pure CSS marquee that pauses on hover: the row
 * renders twice with the copy hidden from screen readers; for reduced motion it stops, the copy
 * hides and the row wraps or scrolls by hand.
 */
export function LeeaAnnouncementTicker({ items }: { items: string[] }) {
  return (
    <section aria-label="Announcements" className="bg-[#0066b2] text-white sm:flex sm:items-stretch">
      <p className="flex items-center gap-2 bg-navy-deep px-5 py-3 text-[13px] font-semibold sm:px-6">
        <Megaphone className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
        Announcement
      </p>
      <div className="min-w-0 flex-1 overflow-hidden motion-reduce:overflow-x-auto" style={edgeFade}>
        <ul
          className="flex w-max animate-marquee items-center hover:[animation-play-state:paused] motion-reduce:px-5"
          style={{ animationDuration: "28s" }}
        >
          {[...items, ...items].map((item, index) => {
            const isCopy = index >= items.length;
            return (
              <li
                key={`${item}-${index}`}
                aria-hidden={isCopy || undefined}
                className={`flex items-center gap-3 whitespace-nowrap py-3.5 pr-8 text-[15px] font-medium ${
                  isCopy ? "motion-reduce:hidden" : ""
                }`}
              >
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
