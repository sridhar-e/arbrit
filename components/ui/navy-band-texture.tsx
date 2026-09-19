/**
 * Blueprint grid plus the Arbrit shield mark for Site Navy bands (DESIGN.md: Navy Band Texture).
 * Place inside a `relative isolate overflow-hidden` section. `gridAt` moves the grid's soft spot.
 */
export function NavyBandTexture({ gridAt = "25% 30%" }: { gridAt?: string } = {}) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: `radial-gradient(ellipse 70% 60% at ${gridAt}, #000 0%, transparent 75%)`,
          WebkitMaskImage: `radial-gradient(ellipse 70% 60% at ${gridAt}, #000 0%, transparent 75%)`,
        }}
      />
      <svg
        viewBox="0 0 167 192"
        fill="currentColor"
        className="absolute -right-32 -top-10 h-[760px] w-auto text-white/[0.045] md:-right-20"
      >
        <path d="M83.24,191.03l-3.57-1.93c-29.65-16.06-53.36-38.83-66.77-64.11C4.46,109.05.12,92.03.01,74.43V27.35S83.15,0,83.15,0l83.13,27.36v46.15c.02,17.850-4.29,35.09-12.8,51.21-5.5,10.43-12.57,20.19-21.62,29.86-12.88,13.56-27.61,24.83-45.07,34.49l-3.55,1.96ZM14.81,38.07v36.3c.11,15.15,3.87,29.87,11.18,43.68,11.52,21.73,31.74,41.52,57.17,56.04,14.57-8.46,27.01-18.2,37.91-29.68,8.09-8.65,14.42-17.37,19.3-26.61,7.37-13.970,11.1-28.87,11.08-44.28v-35.44S83.15,15.59,83.15,15.59L14.81,38.07Z" />
        <path d="M60.28,92.47c6.53,1.82,11.63,6.920,13.45,13.450l9.41,33.77,9.41-33.77c1.82-6.53,6.92-11.63,13.45-13.450l33.77-9.410-33.77-9.41c-6.53-1.82-11.63-6.92-13.45-13.45l-.3-1.08c-3.53-12.69-5.33-25.8-5.33-38.97V7.57h-7.56v12.59c0,13.17-1.790,26.28-5.33,38.97l-.3,1.08c-1.82,6.53-6.92,11.63-13.45,13.45l-33.77,9.41,33.77,9.41Z" />
      </svg>
    </div>
  );
}
