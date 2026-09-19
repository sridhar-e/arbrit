/**
 * Header photos for inner pages, one per page so no two sections of the site open on the same
 * picture. Only wide sources (1200px+) are used, since the header spans the full screen.
 */
type HeaderImage = { image: string; imageAlt: string; imagePosition?: string };

export const pageHeaderImages = {
  about: {
    image: "/slide-1-construction-safety.webp",
    imageAlt: "Construction site safety supervision by Arbrit Safety Training & Consultancy in Dubai, UAE",
  },
  courses: {
    image: "/hero/slide-2-training-classroom.jpg",
    imageAlt: "Delegates in hard hats attending a workplace health and safety class",
  },
  consultancy: {
    image: "/slider-bannder.webp",
    imageAlt: "HSE consultant reviewing a site at sunrise",
  },
  contact: {
    image: "/slider-img.webp",
    imageAlt: "Site engineers in hard hats reviewing documents together",
  },
  career: {
    image: "/home/step-arrive.webp",
    imageAlt: "HSE professionals arriving on site with their hard hats and hi-vis vests",
    // Portrait source: keep the faces in the wide crop.
    imagePosition: "object-[center_22%]",
  },
  blog: {
    image: "/home/hero-desktop.webp",
    imageAlt: "Safety officer in a hard hat overlooking a construction site in Dubai",
  },
  trainers: {
    image: "/home/step-learn.webp",
    imageAlt: "Arbrit Safety trainer presenting to a class of delegates",
    imagePosition: "object-[center_6%]",
  },
  legal: {
    image: "/Hands-on-Experience/Crane-slider.webp",
    imageAlt: "Tower cranes silhouetted against a sunset over a construction site",
  },
} satisfies Record<string, HeaderImage>;

const courseTopics: [RegExp, HeaderImage][] = [
  [
    /leea|lifting|crane|rigg|slinging|hoist|aplo|appointed person/i,
    { image: "/hero/slide-3-lifting-operations.jpg", imageAlt: "Mobile crane lifting a steel beam on a construction site" },
  ],
  [
    /scaffold|sti\b|height|rope access|manlift|cradle|scissor|mewp/i,
    { image: "/home/hero-3-desktop.webp", imageAlt: "Worker in a full-body harness working at height above the city" },
  ],
  [
    /operator|forklift|excavator|roller|shovel|dumper|dumber|concrete|flagman|power hand tools/i,
    { image: "/home/hero-2-desktop.webp", imageAlt: "Rigger directing a crane lift with a banksman on site" },
  ],
];

/** Header photo for a course page, chosen by the course's subject. */
export function courseHeaderImage(title: string): HeaderImage {
  return (
    courseTopics.find(([pattern]) => pattern.test(title))?.[1] ?? {
      image: "/home/step-certified.webp",
      imageAlt: "Delegates celebrating after completing a safety training course",
      imagePosition: "object-[center_35%]",
    }
  );
}
