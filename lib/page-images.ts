/**
 * Header photos for inner pages. Only sharp landscape sources 1900px+ wide are used: the header spans the
 * full screen and crops to a wide strip, so portrait or small photos get zoomed in and look blurry.
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
    image: "/blog/leea-training-courses-dubai-hero.webp",
    imageAlt: "HSE consultant and site engineer reviewing drawings together on site",
  },
  contact: {
    image: "/home/hero-2-desktop.webp",
    imageAlt: "Site supervisor directing a crane lift with a colleague on site",
  },
  career: {
    image: "/home/hero-3-desktop.webp",
    imageAlt: "HSE professional in a full-body harness working at height above the city",
  },
  blog: {
    image: "/home/hero-desktop.webp",
    imageAlt: "Safety officer in a hard hat overlooking a construction site in Dubai",
  },
  trainers: {
    image: "/hero/slide-2-training-classroom.jpg",
    imageAlt: "Arbrit Safety trainer presenting to a class of delegates in hard hats",
  },
  legal: {
    image: "/hero/slide-3-lifting-operations.jpg",
    imageAlt: "Mobile crane lifting a steel beam at sunset on a construction site",
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
      image: "/hero/slide-2-training-classroom.jpg",
      imageAlt: "Delegates in hard hats attending a workplace health and safety class",
    }
  );
}
