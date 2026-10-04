import { PlayIcon, QuoteIcon } from "@/components/icons";
import { FadeIn } from "@/components/motion-primitives";
import { media } from "@/lib/site";

export function HallOfFameSection() {
  return (
    <div className="relative flex h-full w-full flex-col justify-center overflow-hidden bg-[#0a0a09] px-6 text-white sm:px-10 lg:px-14">
      {/* Ambient green glow */}
      <div className="pointer-events-none absolute -left-28 top-1/4 h-80 w-80 rounded-full bg-[#d7ff64]/[0.08] blur-3xl" />

      <div className="mx-auto w-full max-w-[1500px]">
        {/* Header (No numbering box!) */}
        <FadeIn>
          <div className="mb-4 flex flex-col justify-between gap-1 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d7ff64]">
                Verified Member Results
              </p>
              <h2 className="text-balance text-[clamp(2rem,4vw,3.8rem)] font-light leading-[0.96] tracking-[-0.06em] text-white">
                Process, <span className="text-[#d7ff64]">made visible.</span>
              </h2>
            </div>
            <p className="max-w-sm text-xs leading-5 text-white/50">
              The proof is a trader who can execute and explain the decision inside predefined risk.
            </p>
          </div>
        </FadeIn>

        {/* Reverted Rich Bento Grid Adjusted to fit 100% within single screen */}
        <div className="grid auto-rows-[68px] sm:auto-rows-[82px] lg:auto-rows-[96px] gap-2.5 md:grid-cols-2 xl:grid-cols-4">
          {/* Bento 01: Member Interview (Span 2 col, Span 3 row) */}
          <div className="relative row-span-3 overflow-hidden border border-white/12 bg-[#151513] md:col-span-2 xl:row-span-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={media.explainerPoster}
              alt="Trader reviewing screen"
              className="absolute inset-0 h-full w-full object-cover opacity-35 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
            <div className="relative flex h-full flex-col justify-between p-4 sm:p-5">
              <span className="text-[8px] uppercase tracking-[0.2em] text-white/50">
                Member interview
              </span>
              <button
                type="button"
                className="grid size-11 place-items-center rounded-full bg-[#d7ff64] text-black shadow-lg transition-transform hover:scale-105 sm:size-12"
                aria-label="Play member interview"
              >
                <PlayIcon className="ml-0.5 size-4" />
              </button>
              <div>
                <p className="text-[clamp(1.1rem,1.9vw,1.8rem)] font-light leading-tight tracking-tight text-white">
                  “I stopped reacting and started following a process.”
                </p>
                <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-[#d7ff64]">
                  Execution debrief / 08:14
                </p>
              </div>
            </div>
          </div>

          {/* Bento 02: Payout Receipt (Span 2 row) */}
          <div className="row-span-2 flex flex-col justify-between border border-[#d7ff64] bg-[#d7ff64] p-4 text-black shadow-lg sm:p-5">
            <span className="text-[8px] uppercase tracking-[0.2em] text-black/60">
              Payout receipt
            </span>
            <div>
              <p className="text-[8px] uppercase tracking-[0.2em] text-black/60">Status</p>
              <p className="text-2xl font-light tracking-tight text-black sm:text-3xl">Approved</p>
            </div>
            <div className="border-t border-black/20 pt-2 text-[8px] uppercase tracking-[0.16em] text-black/70">
              Amount / Member redacted
            </div>
          </div>

          {/* Bento 03: Discord Review (Span 3 row) */}
          <div className="row-span-3 flex flex-col justify-between border border-white/12 bg-[#121210] p-4 sm:p-5">
            <span className="text-[8px] uppercase tracking-[0.2em] text-white/50">
              Discord review
            </span>
            <QuoteIcon className="size-6 text-[#d7ff64]" />
            <div>
              <p className="text-xs leading-5 text-white/90 sm:text-sm">
                “The daily context is valuable, but learning when not to trade changed everything.”
              </p>
              <p className="mt-2 text-[8px] uppercase tracking-[0.16em] text-[#d7ff64]">
                Premium member
              </p>
            </div>
          </div>

          {/* Bento 04: Community Recap (Span 2 row) */}
          <div className="row-span-2 flex flex-col justify-between border border-white/12 bg-[#f1f0eb] p-4 text-black sm:p-5">
            <span className="text-[8px] uppercase tracking-[0.2em] text-black/60">
              Trade recap
            </span>
            <div className="space-y-1">
              {[32, 58, 42, 76, 86].map((h, i) => (
                <div key={h} className="flex items-center gap-2">
                  <span className="w-4 text-[7px] text-black/50">0{i + 1}</span>
                  <span className="h-1 bg-black" style={{ width: `${h}%` }} />
                </div>
              ))}
            </div>
            <div className="flex items-end justify-between border-t border-black/15 pt-2">
              <span className="text-[8px] uppercase tracking-[0.16em] text-black/60">Score</span>
              <span className="text-xl font-bold tracking-tight text-black">A−</span>
            </div>
          </div>

          {/* Bento 05: Live Review (Span 2 row) */}
          <div className="row-span-2 flex flex-col justify-between border border-white/12 bg-[#151513] p-4 sm:p-5">
            <span className="text-[8px] uppercase tracking-[0.2em] text-white/50">
              Live review
            </span>
            <div className="grid grid-cols-2 gap-2">
              <div className="border border-white/10 p-2 text-center">
                <p className="text-sm font-light">Manual</p>
                <p className="text-[7px] uppercase tracking-[0.14em] text-white/40">Decision</p>
              </div>
              <div className="border border-[#d7ff64]/40 bg-[#d7ff64]/10 p-2 text-center">
                <p className="text-sm font-medium text-[#d7ff64]">On plan</p>
                <p className="text-[7px] uppercase tracking-[0.14em] text-[#d7ff64]/80">Execution</p>
              </div>
            </div>
            <p className="text-[10px] text-white/50">Managed inside predefined risk.</p>
          </div>

          {/* Bento 06: Trade Result (Span 2 row) */}
          <div className="row-span-2 flex flex-col justify-between border border-white/12 bg-white p-4 text-black sm:p-5">
            <span className="text-[8px] uppercase tracking-[0.2em] text-black/60">
              Result archive
            </span>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[8px] uppercase text-black/50">Rule adherence</p>
                <p className="text-2xl font-bold text-black sm:text-3xl">100%</p>
              </div>
              <span className="grid size-9 place-items-center rounded-full bg-[#d7ff64] text-base font-bold text-black">
                ✓
              </span>
            </div>
            <p className="border-t border-black/15 pt-2 text-[8px] uppercase text-black/60">
              Verified asset slot
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
