"use client";

import { type ReactNode } from "react";

type CurtainSectionProps = {
  id: string;
  index: number;
  className?: string;
  children: ReactNode;
  elevated?: boolean;
  isLast?: boolean;
};

export function CurtainSection({
  id,
  index,
  className = "",
  children,
  elevated = true,
  isLast = false,
}: CurtainSectionProps) {
  // Elevated shadow on top edge for incoming sections sliding up over preceding ones
  const shadowClass =
    elevated && index > 1
      ? "shadow-[0_-35px_80px_rgba(0,0,0,0.65)]"
      : "";

  return (
    <div
      id={id}
      className="relative w-full"
      style={{ height: isLast ? "100svh" : "175svh" }}
    >
      <div
        style={{
          zIndex: index * 10,
          top: 0,
        }}
        className={`sticky top-0 h-[100svh] w-full overflow-hidden transition-shadow duration-300 ${shadowClass} ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
