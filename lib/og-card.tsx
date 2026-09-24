import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/**
 * The branded link-preview card (1200x630): Arbrit logo, a headline and a supporting line on the
 * brand blue gradient, with the main accreditation bodies along the bottom.
 */
export async function renderOgCard({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle: string }) {
  const logo = await readFile(join(process.cwd(), "public", "footer-logo.svg"));
  const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`;
  const titleSize = title.length > 60 ? 50 : title.length > 36 ? 58 : 68;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          background: "linear-gradient(135deg, #0066b2 0%, #123b6d 100%)",
          color: "#ffffff",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={400} height={109} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {eyebrow && (
            <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.8 }}>{eyebrow}</div>
          )}
          <div style={{ marginTop: eyebrow ? 12 : 0, fontSize: titleSize, fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.02em" }}>
            {title}
          </div>
          <div style={{ marginTop: 18, fontSize: 30, opacity: 0.9 }}>{subtitle}</div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 24, fontWeight: 700 }}>
          {["LEEA", "IOSH", "Highfield", "STI"].map((body) => (
            <div key={body} style={{ padding: "8px 22px", borderRadius: 999, background: "rgba(255,255,255,0.14)" }}>
              {body}
            </div>
          ))}
        </div>
      </div>
    ),
    ogSize,
  );
}
