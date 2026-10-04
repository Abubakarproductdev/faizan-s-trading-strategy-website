import { FadeIn } from "@/components/motion-primitives";
import { media } from "@/lib/site";

export function AttentionSection() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#0a0a09] text-white">
      {/* Vibrant Background Strategy Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-80 brightness-105 contrast-125 saturate-150 transition-opacity duration-700"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={media.heroPoster}
        aria-label="Trading strategy execution footage"
      >
        <source src={media.heroVideo} type="video/mp4" />
      </video>

      {/* Dynamic Cinematic Vignette & Color Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/65" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.25)_0%,rgba(5,5,4,0.85)_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(215,255,100,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(215,255,100,.1)_1px,transparent_1px)] [background-size:80px_80px]" />
      
      {/* Electric acid-green ambient center glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-[#d7ff64]/[0.12] blur-[130px]" />

      {/* Centered Quote & Typography */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-10 lg:px-12">
        <FadeIn>
          <h1 className="text-balance text-[clamp(2.4rem,5.6vw,5.4rem)] font-light leading-[1.04] tracking-[-0.055em] text-white [text-shadow:0_4px_24px_rgba(0,0,0,0.8)]">
            You will never win with{" "}
            <span className="font-normal italic text-[#d7ff64] underline decoration-[#d7ff64]/50 decoration-2 underline-offset-8 [text-shadow:0_0_25px_rgba(215,255,100,0.5)]">
              retail tools.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p className="mx-auto mt-8 max-w-2xl text-balance text-[clamp(0.95rem,1.45vw,1.25rem)] font-light leading-[1.7] text-white/85 sm:mt-10 [text-shadow:0_2px_16px_rgba(0,0,0,0.9)]">
            95% of retail traders lose with the same setup: a charting app, gut feeling, and no risk control. Prop desks win with the opposite — quantified strategies, human discretion, and software that enforces the rules.{" "}
            <span className="font-medium text-white underline decoration-white/30 underline-offset-4">
              That stack is what this is.
            </span>
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
