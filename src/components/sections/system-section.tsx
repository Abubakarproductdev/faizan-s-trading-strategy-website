import Link from "next/link";
import { CinematicPlayer } from "@/components/cinematic-player";
import { ArrowRight } from "@/components/icons";
import { FadeIn } from "@/components/motion-primitives";

export function SystemSection() {
  return (
    <div className="relative flex h-[100svh] w-full flex-col justify-center overflow-hidden bg-[#0a0a09] px-6 text-white sm:px-12 lg:px-16">
      {/* Subtle ambient green glow */}
      <div className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-[#d7ff64]/10 blur-3xl" />

      <div className="mx-auto w-full max-w-[1600px]">
        {/* Section Tag */}
        <FadeIn>
          <div className="mb-6 inline-flex items-center gap-2.5 border border-[#d7ff64]/30 bg-[#d7ff64]/10 px-3 py-1 text-[9px] uppercase tracking-[0.24em] text-[#d7ff64]">
            <span className="font-semibold text-white">02</span>
            <span className="h-px w-4 bg-[#d7ff64]" />
            <span>The System & Access</span>
          </div>
        </FadeIn>

        {/* 2-Column Layout: Left Video (35-40%), Right Compact Pricing (55%) */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[38%_1fr] lg:gap-14">
          {/* Left: Video (38% screen width) + Small Text */}
          <FadeIn delay={0.06}>
            <div className="flex flex-col">
              <div className="border border-white/15 bg-black p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <CinematicPlayer />
              </div>
              <div className="mt-3.5">
                <h3 className="text-sm font-medium tracking-wide text-white">
                  The Hybrid Execution System
                </h3>
                <p className="mt-1 text-xs leading-5 text-white/55">
                  The infrastructure closing the gap between knowing and doing. Human decision at the core.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right: Compact Pricing Plans (Heading, Price, Button) */}
          <FadeIn delay={0.12}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Plan 1: Lifetime Access */}
              <div className="relative flex flex-col justify-between border border-white/15 bg-white/[0.04] p-6 shadow-xl backdrop-blur-md transition-all hover:border-[#d7ff64]/50 hover:bg-white/[0.06] sm:p-7">
                <div className="absolute inset-x-0 top-0 h-1 bg-[#d7ff64]" />
                <div>
                  <span className="inline-block rounded-full bg-[#d7ff64]/20 px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.16em] text-[#d7ff64]">
                    Lifetime
                  </span>
                  <h4 className="mt-2.5 text-2xl font-light tracking-tight text-white">
                    Lifetime Access
                  </h4>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/45">
                    One payment • Not a subscription
                  </p>
                  <p className="mt-5 text-4xl font-light tracking-[-0.04em] text-[#d7ff64]">
                    $249
                  </p>
                </div>

                <Link
                  href="/api/checkout?offer=lifetime"
                  className="group mt-6 flex items-center justify-between rounded-full border border-white/20 bg-white/10 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all hover:border-[#d7ff64] hover:bg-[#d7ff64] hover:text-black"
                >
                  <span>Get Lifetime Access</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Plan 2: 1:1 Mentorship */}
              <div className="relative flex flex-col justify-between border border-[#d7ff64]/30 bg-[#d7ff64]/[0.03] p-6 shadow-xl backdrop-blur-md transition-all hover:border-[#d7ff64] hover:bg-[#d7ff64]/[0.06] sm:p-7">
                <div className="absolute inset-x-0 top-0 h-1 bg-[#d7ff64]" />
                <div>
                  <span className="inline-block rounded-full bg-[#d7ff64] px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.16em] text-black">
                    Intensive Coaching
                  </span>
                  <h4 className="mt-2.5 text-2xl font-light tracking-tight text-white">
                    1:1 Mentorship
                  </h4>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#d7ff64]/70">
                    Application required
                  </p>
                  <p className="mt-5 text-4xl font-light tracking-[-0.04em] text-[#d7ff64]">
                    $999
                  </p>
                </div>

                <Link
                  href="#section-4"
                  className="group mt-6 flex items-center justify-between rounded-full border border-[#d7ff64] bg-[#d7ff64] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-black shadow-[0_0_20px_rgba(215,255,100,0.3)] transition-all hover:bg-white hover:border-white"
                >
                  <span>Apply for Mentorship</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
