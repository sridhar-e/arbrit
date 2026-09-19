import { trainers } from "@/lib/content";
import { ogSize, renderOgCard } from "@/lib/og-card";

export const alt = "Trainer at Arbrit Safety Training & Consultancy";
export const size = ogSize;
export const contentType = "image/png";

/** Link preview for a trainer profile: name and credentials on the branded card. */
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trainer = trainers.find((item) => item.slug === slug);
  return renderOgCard({
    eyebrow: "Meet our trainers",
    title: trainer?.name ?? "Arbrit Safety Trainers",
    subtitle: trainer?.credentials ?? "Accredited HSE trainers in Dubai, Abu Dhabi & KSA",
  });
}
