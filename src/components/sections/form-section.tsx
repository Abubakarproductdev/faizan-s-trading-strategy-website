"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { FadeIn } from "@/components/motion-primitives";

export function FormSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const discordUrl = process.env.NEXT_PUBLIC_FREE_DISCORD_URL ?? "https://discord.com";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok || !result.applicationId) {
        throw new Error(result.error ?? "Failed to submit application.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Submission failed.");
    }
  }

  return (
    <div
      id="section-5"
      className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#f1f0eb] px-6 pb-6 pt-24 text-[#0a0a09] sm:px-10 lg:px-14"
    >
      <div className="mx-auto w-full max-w-[1500px] flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Left: 1:1 Mentorship Application Form */}
          <FadeIn>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/50">
                Application & Fit
              </p>
              <h2 className="mt-1 text-balance text-[clamp(2.2rem,4vw,3.8rem)] font-light leading-[0.96] tracking-[-0.06em] text-black">
                Apply for <span className="font-normal italic text-[#4a6114]">1:1 Mentorship.</span>
              </h2>
              <p className="mt-2 text-xs leading-5 text-black/60">
                Direct accountability, personal check-ins, and execution coaching.
              </p>

              {status === "success" ? (
                <div className="mt-6 border border-black/20 bg-white p-6 text-center shadow-lg">
                  <span className="mx-auto mb-3 grid size-10 place-items-center rounded-full bg-[#d7ff64] text-lg font-bold text-black shadow-md">
                    ✓
                  </span>
                  <h3 className="text-xl font-light text-black">Application Received</h3>
                  <p className="mt-1.5 text-xs text-black/60">
                    We will review your trading background and follow up directly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-[8px] uppercase tracking-[0.16em] text-black/60">
                      Full Name
                    </label>
                    <input
                      name="name"
                      required
                      placeholder="Your name"
                      className="mt-1 w-full border border-black/15 bg-white px-3.5 py-2 text-xs text-black placeholder-black/30 outline-none transition-colors focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-[8px] uppercase tracking-[0.16em] text-black/60">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="mt-1 w-full border border-black/15 bg-white px-3.5 py-2 text-xs text-black placeholder-black/30 outline-none transition-colors focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-[8px] uppercase tracking-[0.16em] text-black/60">
                      Experience Level
                    </label>
                    <select
                      name="experienceLevel"
                      required
                      defaultValue=""
                      className="mt-1 w-full border border-black/15 bg-white px-3.5 py-2 text-xs text-black outline-none transition-colors focus:border-black"
                    >
                      <option value="" disabled>Select experience</option>
                      <option>New (&lt;6 months)</option>
                      <option>Developing (6–18 months)</option>
                      <option>Experienced (18+ months)</option>
                      <option>Consistently profitable</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[8px] uppercase tracking-[0.16em] text-black/60">
                      Monthly Target
                    </label>
                    <select
                      name="investmentCapacity"
                      required
                      defaultValue=""
                      className="mt-1 w-full border border-black/15 bg-white px-3.5 py-2 text-xs text-black outline-none transition-colors focus:border-black"
                    >
                      <option value="" disabled>Select target</option>
                      <option>Under $1,000</option>
                      <option>$1,000–$5,000</option>
                      <option>$5,000–$15,000</option>
                      <option>$15,000+</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[8px] uppercase tracking-[0.16em] text-black/60">
                      Primary Goals & Current Struggle
                    </label>
                    <textarea
                      name="currentStage"
                      rows={2}
                      required
                      placeholder="What holds your execution back today?"
                      className="mt-1 w-full resize-none border border-black/15 bg-white px-3.5 py-1.5 text-xs text-black placeholder-black/30 outline-none transition-colors focus:border-black"
                    />
                  </div>

                  {status === "error" && (
                    <p className="sm:col-span-2 text-xs text-red-600">{errorMessage}</p>
                  )}

                  <div className="sm:col-span-2 mt-1">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group flex w-full items-center justify-between border-2 border-black bg-black px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white shadow-md transition-all hover:bg-[#d7ff64] hover:text-black hover:border-black disabled:opacity-60"
                    >
                      <span>{status === "submitting" ? "Submitting…" : "Submit Application — $999"}</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Right: Legal & Risk Disclosure Cards */}
          <FadeIn delay={0.1}>
            <div className="space-y-3">
              <div className="border border-black/15 bg-white p-4 shadow-sm">
                <span className="font-mono text-[8px] font-bold text-[#4a6114]">01 / Purpose</span>
                <h3 className="mt-1 text-xs font-semibold text-black">Educational Only</h3>
                <p className="mt-1 text-[11px] leading-4 text-black/60">
                  All training, tools, and mentorship are educational and do not constitute financial advice.
                </p>
              </div>

              <div className="border border-black/15 bg-white p-4 shadow-sm">
                <span className="font-mono text-[8px] font-bold text-[#4a6114]">02 / Capital Risk</span>
                <h3 className="mt-1 text-xs font-semibold text-black">Substantial Risk of Loss</h3>
                <p className="mt-1 text-[11px] leading-4 text-black/60">
                  Futures involve high risk. Only trade with genuine risk capital that you can afford to lose.
                </p>
              </div>

              <div className="border border-black/15 bg-white p-4 shadow-sm">
                <span className="font-mono text-[8px] font-bold text-[#4a6114]">03 / Discretion</span>
                <h3 className="mt-1 text-xs font-semibold text-black">Trader Responsibility</h3>
                <p className="mt-1 text-[11px] leading-4 text-black/60">
                  FK Futures is not a bot. The trader makes and owns all market entries, exits, sizing, and risk decisions.
                </p>
              </div>

              <p className="mt-3 text-center text-xs uppercase tracking-[0.16em] text-black/70">
                You make the decision. You place the risk. <strong className="font-bold text-black">You own the outcome.</strong>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Minimal Footer */}
      <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between border-t border-black/15 pt-3 text-[9px] uppercase tracking-[0.18em] text-black/50">
        <p>© {new Date().getFullYear()} FK Futures</p>
        <div className="flex items-center gap-5">
          <Link href="#attention" className="transition-colors hover:text-black">
            Top ↑
          </Link>
          <a
            href={discordUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 transition-colors hover:text-black"
          >
            <span>Free Discord</span>
            <ArrowUpRight className="size-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
