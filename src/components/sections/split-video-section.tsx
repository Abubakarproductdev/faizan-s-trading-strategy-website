import { FadeIn } from "@/components/motion-primitives";
import { media } from "@/lib/site";

export function SplitVideoSection() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-white text-[#0a0a09]">
      <div className="grid h-full w-full grid-cols-1 lg:grid-cols-2">
        {/* Half 1: Full-Half Screen Autoplaying Video */}
        <div className="relative h-full w-full overflow-hidden bg-black">
          <video
            className="h-full w-full object-cover grayscale brightness-95"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={media.explainerPoster}
            aria-label="Execution system demonstration footage"
          >
            <source src={media.explainerVideo} type="video/mp4" />
          </video>
          {/* Subtle gradient overlay on video edge */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/30" />
        </div>

        {/* Half 2: 10 to 12 Words Written Beautifully */}
        <div className="flex h-full w-full flex-col justify-center px-8 py-16 sm:px-14 lg:px-20">
          <FadeIn>
            <h2 className="text-balance text-[clamp(2.4rem,4.5vw,4.8rem)] font-light leading-[1.08] tracking-[-0.055em] text-[#0a0a09]">
              Human discretion at the center. Quantified execution infrastructure{" "}
              <span className="font-normal italic text-[#4a6114] underline decoration-[#d7ff64] decoration-4 underline-offset-8">
                enforcing every rule.
              </span>
            </h2>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
