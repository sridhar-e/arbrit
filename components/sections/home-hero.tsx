import { getImageProps } from "next/image";
import { HeroCarousel, type HeroSlide } from "@/components/sections/hero-carousel";
import { searchableCourses } from "@/lib/course-links";

// Each slide ships a portrait crop for phones and a landscape crop from md up.
const slideSources = [
  { name: "hero", position: "md:object-[75%_center]", alt: "Safety-trained worker in a hard hat and safety glasses on a Dubai construction site with a tower crane" },
  // This worker looks up at the hook, so his face sits lower in the portrait crop.
  { name: "hero-2", position: "md:object-[75%_center]", mobileShift: "max-md:-translate-y-[14vw]", alt: "Arbrit trainer explaining crane hook and sling rigging to delegates during lifting operations training" },
  { name: "hero-3", position: "md:object-[75%_center]", alt: "Worker in a full-body harness training for work at height on scaffolding above the Dubai skyline" },
];

/** Builds optimised srcsets on the server; the carousel itself only receives plain data. */
export function HomeHero() {
  const slides: HeroSlide[] = slideSources.map(({ name, position, mobileShift, alt }) => {
    const common = { alt: "", quality: 75, sizes: "100vw" };
    const {
      props: { srcSet: desktopSrcSet },
    } = getImageProps({ ...common, src: `/home/${name}-desktop.webp`, width: 2560, height: 1448 });
    const {
      props: { srcSet: mobileSrcSet, src },
    } = getImageProps({ ...common, src: `/home/${name}-mobile.webp`, width: 1152, height: 2037 });
    return {
      id: name,
      alt,
      desktopSrcSet: desktopSrcSet ?? "",
      mobileSrcSet: mobileSrcSet ?? "",
      src,
      width: 1152,
      height: 2037,
      positionClassName: position,
      mobileShiftClassName: mobileShift,
    };
  });

  return <HeroCarousel slides={slides} courses={searchableCourses} />;
}
