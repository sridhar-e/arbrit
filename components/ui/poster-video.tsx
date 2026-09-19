"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Shows a poster image with a play button and only mounts the <video> once the
 * visitor clicks, so the page never downloads video bytes on first load.
 * Playback starts with sound because it is always user-initiated.
 */
export function PosterVideo({
  src,
  poster,
  posterAlt,
  label,
  caption = "Watch our story",
  subcaption,
  duration,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  sizeClassName = "aspect-video",
  posterPosition = "object-center",
  className,
}: {
  src: string;
  poster: string;
  posterAlt: string;
  /** Accessible name for the play button, e.g. "Play the Arbrit Safety company video". */
  label: string;
  /** Overlay text on the poster. */
  caption?: string;
  /** Smaller second line under the caption. */
  subcaption?: string;
  /** Optional runtime badge, e.g. "2:14". */
  duration?: string;
  sizes?: string;
  /** Sizing classes for the frame — an aspect ratio or explicit heights. */
  sizeClassName?: string;
  /** Which part of the poster to keep when the frame crops it, e.g. "object-[center_22%]". */
  posterPosition?: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[24px] bg-navy-deep shadow-[0_30px_60px_-30px_rgba(0,0,0,0.65)]",
        sizeClassName,
        className,
      )}
    >
      {playing ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        >
          <a href={src}>Download the Arbrit Safety video</a>
        </video>
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0066b2]"
        >
          <span className="sr-only">{label}: </span>
          {/* Inside a button the photo is decorative; posterAlt describes it for the page's image list. */}
          <Image
            src={poster}
            alt=""
            title={posterAlt}
            fill
            sizes={sizes}
            className={cn(
              "transform-gpu object-cover transition-transform duration-700 ease-out [backface-visibility:hidden] group-hover:scale-105",
              posterPosition,
            )}
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(0deg,#123b6d_0%,rgba(18,59,109,0.55)_35%,rgba(18,59,109,0)_65%)]"
          />
          <span className="absolute inset-x-5 bottom-5 flex items-center gap-4 sm:inset-x-7 sm:bottom-7">
            <span
              aria-hidden="true"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[#0066b2] shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out group-hover:scale-110"
            >
              <Play className="ml-0.5 h-6 w-6 fill-current" />
            </span>
            <span className="min-w-0 flex-1 text-left">
              <span className="block font-heading text-xl font-extrabold tracking-[-0.01em] text-white">{caption}</span>
              {subcaption && <span className="mt-0.5 block text-sm text-white/85">{subcaption}</span>}
            </span>
            {duration && (
              <span className="shrink-0 self-end rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                {duration}
              </span>
            )}
          </span>
        </button>
      )}
    </div>
  );
}
