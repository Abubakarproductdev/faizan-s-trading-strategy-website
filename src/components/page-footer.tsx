import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a09] text-white">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-5 px-5 py-7 text-[9px] uppercase tracking-[0.18em] text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p>© {new Date().getFullYear()} FK Futures</p>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <Link href="#disclaimer" className="transition-colors hover:text-[#d7ff64]">
            Risk disclosure
          </Link>
          <a
            href={process.env.NEXT_PUBLIC_FREE_DISCORD_URL ?? "https://discord.com"}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-[#d7ff64]"
          >
            Free Discord <ArrowUpRight className="size-3 text-[#d7ff64]" />
          </a>
        </div>
      </div>
    </footer>
  );
}

// Retain PageFooter export as alias to avoid breaking any references if needed
export const PageFooter = SiteFooter;