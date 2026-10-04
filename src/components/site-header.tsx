"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const discordUrl = process.env.NEXT_PUBLIC_FREE_DISCORD_URL ?? "https://discord.com";

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-500 ease-out pointer-events-none p-3 sm:p-5">
      <nav
        aria-label="Primary navigation"
        className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ease-out border backdrop-blur-2xl ${
          scrolled
            ? "w-auto max-w-fit rounded-full border-white/20 bg-black/70 px-4 py-2 sm:px-6 sm:py-2.5 shadow-[0_16px_45px_rgba(0,0,0,0.75)] hover:border-[#d7ff64]/40"
            : "w-full max-w-[1600px] rounded-none border-transparent bg-black/25 px-4 py-3 sm:px-8 sm:py-4 shadow-none"
        }`}
      >
        {/* Brand (Top-Left) */}
        <Link
          href="#attention"
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-85"
          aria-label="FK Futures home"
        >
          <span className="grid size-7 place-items-center rounded-full border border-[#d7ff64]/50 bg-[#d7ff64]/10 text-[9px] font-bold tracking-tight text-[#d7ff64] shadow-[0_0_10px_rgba(215,255,100,0.25)] transition-transform group-hover:scale-105">
            FK
          </span>
          <span className="text-[12px] font-semibold uppercase tracking-[0.24em] text-white">
            Futures
          </span>
        </Link>

        {/* Dynamic Center Indicator (shown when compressed) */}
        {scrolled && (
          <div className="hidden md:flex items-center gap-2 mx-4 text-[9px] uppercase tracking-[0.2em] text-white/60">
            <span className="signal-pulse size-1.5 rounded-full bg-[#d7ff64] shadow-[0_0_8px_#d7ff64]" />
            <span className="text-[#d7ff64]">Active</span>
          </div>
        )}

        {/* Buttons (Top-Right): 1:1 Mentorship and Get Discord */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <a
            href={discordUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.05] px-3.5 py-1.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80 transition-all hover:border-[#d7ff64] hover:bg-[#d7ff64]/10 hover:text-[#d7ff64]"
          >
            <span>Get Discord</span>
            <ArrowUpRight className="size-3 text-[#d7ff64]" />
          </a>

          <Link
            href="#section-5"
            className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#d7ff64] bg-[#d7ff64] px-4 py-1.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.16em] text-black shadow-[0_0_15px_rgba(215,255,100,0.3)] transition-all hover:border-white hover:bg-white hover:shadow-[0_0_25px_rgba(215,255,100,0.5)]"
          >
            <span>1:1 Mentorship</span>
            <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </nav>
    </header>
  );
}