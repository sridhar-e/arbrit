import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets phones on the LAN load dev-only assets (JS chunks, HMR). Without it the page
  // renders server HTML but never hydrates, so scroll-driven and reveal-on-view UI stays frozen.
  allowedDevOrigins: ["192.168.1.213", "192.168.*.*"],
  // Hides the on-screen Next.js dev badge; compile and runtime errors still show.
  devIndicators: false,
  images: {
    // AVIF first, WebP fallback. AVIF is typically 20-30% smaller than WebP at the
    // same visual quality, which is where mobile data savings actually come from.
    formats: ["image/avif", "image/webp"],
    // Next 16 requires every `quality` used in the app to be allow-listed.
    // 65 is for photos sitting under heavy colour overlays, where detail is invisible.
    qualities: [65, 75],
    // Adds a 480px step so two-up mobile grids (~50vw at 2x DPR ≈ 390px) stop
    // rounding all the way up to the 640px device size. Must stay below deviceSizes[0].
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 480],
  },
  // Don't advertise the framework in every response.
  poweredByHeader: false,
  // Baseline security headers for every page and API response. The referrer policy still sends the
  // full path to our own origin, which the enquiry Sheet's "Page" column relies on.
  headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
