import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "@/components/icons";
import { FadeIn } from "@/components/motion-primitives";

export function PricingSection() {
  const discordUrl = process.env.NEXT_PUBLIC_FREE_DISCORD_URL ?? "https://discord.com";

  return (
    <div className="relative flex h-full w-full flex-col justify-center overflow-hidden bg-[#d7ff64] px-6 text-[#0a0a09] sm:px-12 lg:px-16">
      <div className="mx-auto w-full max-w-[1500px]">
        {/* Header (No numbering box!) */}
        <FadeIn>
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-black/60">
                Choose Your Level
              </p>
              <h2 className="mt-1 text-balance text-[clamp(2.4rem,4.8vw,4.8rem)] font-light leading-[0.95] tracking-[-0.06em] text-black">
                The System & Pricing.
              </h2>
            </div>
            <p className="max-w-md text-xs leading-5 text-black/70">
              One complete ecosystem. Start with Lifetime Access or add personal 1:1 execution coaching.
            </p>
          </div>
        </FadeIn>

        {/* Pricing Cards Grid */}
        <div className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Card 1: Lifetime Access */}
          <FadeIn delay={0.06}>
            <div className="flex flex-col justify-between border-2 border-black bg-white p-6 shadow-xl sm:p-8">
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <span className="rounded-full bg-black px-3 py-1 text-[8px] font-bold uppercase tracking-[0.18em] text-[#d7ff64]">
                      Most Popular
                    </span>
                    <h3 className="mt-3 text-3xl font-light tracking-tight text-black">
                      Lifetime Access
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-black/50">
                      One payment • Not a subscription
                    </p>
                  </div>
                  <p className="text-4xl font-light tracking-tight text-black sm:text-5xl">
                    $249
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2 text-xs text-black/80">
                  <div className="flex items-center gap-2">
                    <Check className="size-3.5 stroke-[3] text-black" />
                    <span>Complete Strategy Videos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-3.5 stroke-[3] text-black" />
                    <span>Free Trade Copier</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-3.5 stroke-[3] text-black" />
                    <span>Premium Discord Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-3.5 stroke-[3] text-black" />
                    <span>Trading Journal & Sim</span>
                  </div>
                </div>
              </div>

              <Link
                href="/api/checkout?offer=lifetime"
                className="group mt-6 flex items-center justify-between border-2 border-black bg-black px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-[#d7ff64] hover:text-black"
              >
                <span>Get Lifetime Access — $249</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>
          </FadeIn>

          {/* Card 2: 1:1 Mentorship */}
          <FadeIn delay={0.12}>
            <div className="flex flex-col justify-between border-2 border-black bg-black p-6 text-white shadow-2xl sm:p-8">
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <span className="rounded-full bg-[#d7ff64] px-3 py-1 text-[8px] font-bold uppercase tracking-[0.18em] text-black">
                      Intensive Coaching
                    </span>
                    <h3 className="mt-3 text-3xl font-light tracking-tight text-white">
                      1:1 Mentorship
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-white/50">
                      Application required before checkout
                    </p>
                  </div>
                  <p className="text-4xl font-light tracking-tight text-[#d7ff64] sm:text-5xl">
                    $999
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2 text-xs text-white/80">
                  <div className="flex items-center gap-2">
                    <Check className="size-3.5 stroke-[3] text-[#d7ff64]" />
                    <span>Everything in Lifetime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-3.5 stroke-[3] text-[#d7ff64]" />
                    <span>Weekly 1:1 Meetings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-3.5 stroke-[3] text-[#d7ff64]" />
                    <span>Daily Personal Check-ins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-3.5 stroke-[3] text-[#d7ff64]" />
                    <span>Target $10k/Month Coaching</span>
                  </div>
                </div>
              </div>

              <Link
                href="#section-5"
                className="group mt-6 flex items-center justify-between border-2 border-[#d7ff64] bg-[#d7ff64] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-black shadow-lg transition-all hover:bg-white hover:border-white"
              >
                <span>Apply for Mentorship — $999</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Free Discord Banner Bar */}
        <FadeIn delay={0.18}>
          <div className="mt-5 flex items-center justify-between border-t border-black/20 pt-4 text-xs font-medium text-black">
            <span>Not ready to buy yet? Test our daily market guidance first.</span>
            <a
              href={discordUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-bold uppercase tracking-[0.16em] underline underline-offset-4 hover:opacity-75"
            >
              <span>Join Free Discord</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
