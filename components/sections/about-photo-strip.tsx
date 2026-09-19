import Image from "next/image";

type Photo = { src: string; alt: string };

const edgeFade = {
  maskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
  WebkitMaskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
};

/**
 * A row of photos from Arbrit's history that drifts slowly sideways, like the accreditation
 * marquee, and pauses on hover. Pure CSS: the row is rendered twice for a seamless loop, the copy
 * is hidden from screen readers, and for reduced motion the row stops and scrolls by hand instead.
 * Source photos are only 300px wide, so tiles never grow past that.
 */
export function AboutPhotoStrip({ photos }: { photos: Photo[] }) {
  return (
    <div className="overflow-hidden py-2 motion-reduce:overflow-x-auto" style={edgeFade}>
      <ul
        className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused] motion-reduce:px-5"
        style={{ animationDuration: "70s" }}
      >
        {[...photos, ...photos].map((photo, index) => {
          const isCopy = index >= photos.length;
          return (
            <li
              key={`${photo.src}-${index}`}
              aria-hidden={isCopy || undefined}
              className={`relative aspect-[4/3] w-56 shrink-0 overflow-hidden rounded-[20px] ring-1 ring-white/10 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.6)] sm:w-64 ${
                isCopy ? "motion-reduce:hidden" : ""
              }`}
            >
              <Image src={photo.src} alt={isCopy ? "" : photo.alt} fill sizes="256px" className="object-cover" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
