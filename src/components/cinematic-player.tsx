"use client";

import { useRef, useState } from "react";
import { PlayIcon } from "@/components/icons";
import { media } from "@/lib/site";

export function CinematicPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  async function playVideo() {
    setStarted(true);
    await videoRef.current?.play();
  }

  return (
    <div className="group relative aspect-video overflow-hidden bg-[#0a0a09]">
      <video
        ref={videoRef}
        className="h-full w-full object-cover grayscale"
        controls={started}
        playsInline
        preload="metadata"
        poster={media.explainerPoster}
        onPlay={() => setStarted(true)}
        aria-label="FK Futures execution system explanation"
      >
        <source src={media.explainerVideo} type="video/mp4" />
      </video>
      {!started && (
        <button
          type="button"
          onClick={playVideo}
          className="absolute inset-0 grid place-items-center bg-black/28 transition-colors hover:bg-black/15"
          aria-label="Play system explanation"
        >
          <span className="grid size-20 place-items-center rounded-full bg-[#d7ff64] text-black shadow-[0_0_35px_rgba(215,255,100,0.5)] transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] sm:size-24">
            <PlayIcon className="ml-1 size-7 sm:size-8" />
          </span>
        </button>
      )}
      <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 bg-black/55 px-3 py-2 text-[8px] uppercase tracking-[0.2em] text-white backdrop-blur-md sm:left-6 sm:top-6">
        <span className="size-1.5 rounded-full bg-[#d7ff64]" />
        System film / 06:42
      </div>
    </div>
  );
}