import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { FadeIn } from "@/components/motion-primitives";

export function DisclaimerSection() {
  const discordUrl = process.env.NEXT_PUBLIC_FREE_DISCORD_URL ?? "https://discord.com";

  return (
    <div className="relative flex h-[100svh] w-full flex-col justify-between overflow-hidden bg-[#0a0a09] px-6 pb-6 pt-24 text-white sm:px-12 lg:px-16">
      {/* Subtle ambient green glow */}
      <div className="pointer-events-none absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-[#d7ff64]/10 blur-3xl" />

      <div className="mx-auto w-full max-w-[1600px] flex-1 flex flex-col justify-center">
        {/* Header */}
        <FadeIn>
          <div className="mb-4 inline-flex items-center gap-2.5 border border-[#d7ff64]/30 bg-[#d7ff64]/10 px-3 py-1 text-[9px] uppercase tracking-[0.24em] text-[#d7ff64]">
            <span className="font-semibold text-white">05</span>
            <span className="h-px w-4 bg-[#d7ff64]" />
            <span>Risk Disclosure</span>
          </div>

          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <h2 className="text-balance text-[clamp(2.2rem,4.5vw,4.5rem)] font-light leading-[0.95] tracking-[-0.06em]">
              Read this <span className="text-[#d7ff64]">before you trade.</span>
            </h2>
            <p className="max-w-md text-xs leading-5 text-white/50">
              Markets involve real risk. Responsibility stays with the trader.
            </p>
          </div>
        </FadeIn>

        {/* 4 Compact Risk Cards that fit in 1 screen */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FadeIn delay={0.05}>
            <div className="flex h-44 flex-col justify-between border border-white/15 bg-white/[0.03] p-5 backdrop-blur-sm sm:h-48">
              <span className="font-mono text-[9px] text-[#d7ff64]">01 / Purpose</span>
              <div>
                <h3 className="text-sm font-medium text-white">Educational Only</h3>
                <p className="mt-1.5 text-xs leading-5 text-white/50">
                  All discussion, software, tools, and mentorship are educational and do not constitute financial advice.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex h-44 flex-col justify-between border border-white/15 bg-white/[0.03] p-5 backdrop-blur-sm sm:h-48">
              <span className="font-mono text-[9px] text-[#d7ff64]">02 / Capital</span>
              <div>
                <h3 className="text-sm font-medium text-white">Substantial Risk</h3>
                <p className="mt-1.5 text-xs leading-5 text-white/50">
                  Futures involve high risk of loss. Only trade with genuine risk capital that you can afford to lose.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="flex h-44 flex-col justify-between border border-white/15 bg-white/[0.03] p-5 backdrop-blur-sm sm:h-48">
              <span className="font-mono text-[9px] text-[#d7ff64]">03 / Metrics</span>
              <div>
                <h3 className="text-sm font-medium text-white">No Guarantees</h3>
                <p className="mt-1.5 text-xs leading-5 text-white/50">
                  Simulated and hypothetical backtests have inherent limitations and do not guarantee future profits.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex h-44 flex-col justify-between border border-white/15 bg-white/[0.03] p-5 backdrop-blur-sm sm:h-48">
              <span className="font-mono text-[9px] text-[#d7ff64]">04 / Discretion</span>
              <div>
                <h3 className="text-sm font-medium text-white">Hybrid Control</h3>
                <p className="mt-1.5 text-xs leading-5 text-white/50">
                  FK Futures is not a bot. The trader makes all market entries, exits, sizing, and risk decisions.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Closing Impact Quote */}
        <FadeIn delay={0.25} className="mt-6 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-white/60">
            You make the decision. You place the risk. <span className="text-[#d7ff64] font-medium">You own the outcome.</span>
          </p>
        </FadeIn>
      </div>

      {/* Minimal Bottom Bar */}
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between border-t border-white/10 pt-4 text-[9px] uppercase tracking-[0.18em] text-white/45">
        <p>© {new Date().getFullYear()} FK Futures</p>
        <div className="flex items-center gap-6">
          <Link href="#attention" className="transition-colors hover:text-[#d7ff64]">
            Top ↑
          </Link>
          <a
            href={discordUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 transition-colors hover:text-[#d7ff64]"
          >
            <span>Discord</span>
            <ArrowUpRight className="size-3 text-[#d7ff64]" />
          </a>
        </div>
      </div>
    </div>
  );
}
