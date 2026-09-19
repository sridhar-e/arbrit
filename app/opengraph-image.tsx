import { ogSize, renderOgCard } from "@/lib/og-card";

/** Site-wide link preview, used by every page without a more specific card. */
export const alt = "Arbrit Safety Training & Consultancy: accredited HSE training in Dubai, Abu Dhabi and KSA";
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOgCard({ title: "Skills for a Safer Tomorrow", subtitle: "Accredited HSE training in Dubai, Abu Dhabi & KSA" });
}
