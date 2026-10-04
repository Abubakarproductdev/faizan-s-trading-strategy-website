import { FadeIn } from "@/components/motion-primitives";

export function DecidingDbdSection() {
  return (
    <div className="flex min-h-[100svh] flex-col justify-between bg-[#f1f0eb] px-5 pb-20 pt-36 text-[#0a0a09] sm:px-8 md:pb-28 md:pt-44 lg:px-12">
      <div className="mx-auto w-full max-w-[1600px]">
        <FadeIn>
          <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-black/45">
            <span>04</span>
            <span className="h-px w-8 bg-[#d7ff64]" />
            Deciding DBD
          </div>
          <h2 className="mt-8 text-balance text-[clamp(4.5rem,15vw,16rem)] font-light leading-[0.78] tracking-[-0.08em]">
            Deciding DBD
          </h2>
        </FadeIn>
      </div>

      <div className="mx-auto w-full max-w-[1600px] border-t border-black/15 pt-8">
        <FadeIn delay={0.1}>
          <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
            <p className="max-w-xl text-base leading-7 text-black/60">
              Module architecture and discretionary decision framework. The disciplined bridge between market observation and decisive position sizing.
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 md:text-right">
              Execution Module / In Development
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
