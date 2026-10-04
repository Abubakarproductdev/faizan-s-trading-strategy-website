"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowRight, CloseIcon } from "@/components/icons";

type SubmissionState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "error"; message: string }
  | { status: "success"; applicationId: string };

const fieldClass =
  "mt-2 w-full border border-white/15 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#d7ff64]";
const labelClass = "block text-[9px] uppercase tracking-[0.18em] text-white/55";

export function MentorshipApplication() {
  const [open, setOpen] = useState(false);
  const [submission, setSubmission] = useState<SubmissionState>({ status: "idle" });
  const firstInput = useRef<HTMLInputElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    firstInput.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  async function submitApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmission({ status: "submitting" });

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        error?: string;
        applicationId?: string;
      };

      if (!response.ok || !result.applicationId) {
        throw new Error(result.error ?? "Unable to submit the application.");
      }

      setSubmission({ status: "success", applicationId: result.applicationId });
    } catch (error) {
      setSubmission({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to submit the application.",
      });
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group flex w-full items-center justify-between bg-[#d7ff64] px-5 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.16em] text-black transition-colors hover:bg-white"
      >
        Apply for mentorship
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-end justify-end bg-black/75 backdrop-blur-sm md:items-stretch"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.25 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setOpen(false);
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="application-title"
              className="max-h-[94svh] w-full overflow-y-auto border-l border-white/15 bg-[#0d0d0b] text-white md:max-h-none md:max-w-2xl"
              initial={{ x: reduceMotion ? 0 : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: reduceMotion ? 0 : "100%" }}
              transition={{ duration: reduceMotion ? 0.01 : 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0d0d0b]/95 px-5 py-4 backdrop-blur-lg sm:px-8">
                <p className="text-[9px] uppercase tracking-[0.22em] text-white/50">
                  $999 / One-on-one mentorship
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid size-10 place-items-center border border-white/15 transition-colors hover:bg-white hover:text-black"
                  aria-label="Close application"
                >
                  <CloseIcon className="size-4" />
                </button>
              </div>

              {submission.status === "success" ? (
                <div className="flex min-h-[70svh] flex-col justify-center px-5 py-16 sm:px-8 md:px-12">
                  <span className="mb-7 grid size-12 place-items-center rounded-full bg-[#d7ff64] text-xl text-black">✓</span>
                  <p className="text-[9px] uppercase tracking-[0.22em] text-white/45">Application received</p>
                  <h2 id="application-title" className="mt-4 text-5xl font-light leading-[0.95] tracking-[-0.06em] sm:text-6xl">
                    You’ve taken the first step.
                  </h2>
                  <p className="mt-6 max-w-md text-sm leading-6 text-white/55">
                    Your answers are securely on file. Continue to the mentorship checkout to reserve your place.
                  </p>
                  <a
                    href={`/api/checkout?offer=mentorship&applicationId=${encodeURIComponent(submission.applicationId)}`}
                    className="group mt-10 flex items-center justify-between bg-[#d7ff64] px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-black transition-colors hover:bg-white"
                  >
                    Continue to checkout — $999
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
                  </a>
                </div>
              ) : (
                <form onSubmit={submitApplication} className="px-5 py-10 sm:px-8 md:px-12 md:py-12">
                  <p className="text-[9px] uppercase tracking-[0.22em] text-[#d7ff64]">Fit application</p>
                  <h2 id="application-title" className="mt-4 max-w-lg text-[clamp(2.4rem,6vw,4.4rem)] font-light leading-[0.96] tracking-[-0.06em]">
                    Let’s understand where you are.
                  </h2>
                  <p className="mt-5 max-w-lg text-sm leading-6 text-white/50">
                    Answer with detail. This ensures the personal guidance matches your stage, capacity, and available time.
                  </p>

                  <div className="mt-10 grid gap-6 sm:grid-cols-2">
                    <label className={labelClass}>
                      Name
                      <input ref={firstInput} className={fieldClass} name="name" autoComplete="name" required placeholder="Your full name" />
                    </label>
                    <label className={labelClass}>
                      Email
                      <input className={fieldClass} name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
                    </label>
                    <label className={`${labelClass} sm:col-span-2`}>
                      Phone number
                      <input className={fieldClass} name="phone" type="tel" autoComplete="tel" required placeholder="Include country code" />
                    </label>
                    <label className={labelClass}>
                      Trading experience / skill level
                      <select className={fieldClass} name="experienceLevel" required defaultValue="">
                        <option value="" disabled>Select experience</option>
                        <option>New — under 6 months</option>
                        <option>Developing — 6–18 months</option>
                        <option>Experienced — 18+ months</option>
                        <option>Consistently profitable</option>
                      </select>
                    </label>
                    <label className={labelClass}>
                      Investment capacity
                      <select className={fieldClass} name="investmentCapacity" required defaultValue="">
                        <option value="" disabled>Select capacity</option>
                        <option>Under $1,000</option>
                        <option>$1,000–$5,000</option>
                        <option>$5,000–$15,000</option>
                        <option>$15,000+</option>
                      </select>
                    </label>
                    <label className={`${labelClass} sm:col-span-2`}>
                      Current stage of your journey
                      <textarea className={`${fieldClass} min-h-28 resize-y`} name="currentStage" required placeholder="Tell us what you trade, how often, and what your process looks like today." />
                    </label>
                    <label className={`${labelClass} sm:col-span-2`}>
                      Primary goals
                      <textarea className={`${fieldClass} min-h-28 resize-y`} name="primaryGoals" required placeholder="What would a successful next 6–12 months look like?" />
                    </label>
                    <label className={`${labelClass} sm:col-span-2`}>
                      Specific areas needing help
                      <textarea className={`${fieldClass} min-h-28 resize-y`} name="helpNeeded" required placeholder="Execution, risk, discipline, account management, consistency…" />
                    </label>
                    <label className={`${labelClass} sm:col-span-2`}>
                      Available time commitment
                      <select className={fieldClass} name="timeCommitment" required defaultValue="">
                        <option value="" disabled>Select weekly availability</option>
                        <option>Under 5 hours / week</option>
                        <option>5–10 hours / week</option>
                        <option>10–20 hours / week</option>
                        <option>20+ hours / week</option>
                      </select>
                    </label>
                  </div>

                  {submission.status === "error" && (
                    <p role="alert" className="mt-6 border border-red-400/30 bg-red-400/10 px-4 py-3 text-xs leading-5 text-red-200">
                      {submission.message}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submission.status === "submitting"}
                    className="group mt-8 flex w-full items-center justify-between bg-[#d7ff64] px-5 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.16em] text-black transition-colors hover:bg-white disabled:cursor-wait disabled:opacity-60"
                  >
                    {submission.status === "submitting" ? "Submitting application…" : "Submit application"}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
                  </button>
                  <p className="mt-4 text-[9px] leading-4 text-white/35">
                    Checkout is only available after this application is submitted. Mentorship is educational and cannot guarantee income or trading outcomes.
                  </p>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}