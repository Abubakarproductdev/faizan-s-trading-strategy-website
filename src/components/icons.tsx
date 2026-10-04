import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </IconBase>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </IconBase>
  );
}

export function Check(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m5 12 4 4L19 6" />
    </IconBase>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 8h16M4 16h16" />
    </IconBase>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </IconBase>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8.2 5.5a1 1 0 0 1 1.55-.84l9.15 6.5a1 1 0 0 1 0 1.68l-9.15 6.5a1 1 0 0 1-1.55-.84v-13Z" />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.7 6.2C4.3 7.8 3 10 3 12.8c0 3 1.5 4.8 4 4.8 2.1 0 3.6-1.5 3.6-3.6 0-2-1.4-3.4-3.4-3.4-.3 0-.6 0-.9.1.3-1.3 1.2-2.4 2.7-3.4L6.7 6.2Zm10.4 0c-2.4 1.6-3.7 3.8-3.7 6.6 0 3 1.5 4.8 4 4.8 2.1 0 3.6-1.5 3.6-3.6 0-2-1.4-3.4-3.4-3.4-.3 0-.6 0-.9.1.3-1.3 1.2-2.4 2.7-3.4l-2.3-1.1Z" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3 5 6v5c0 4.6 2.9 8 7 10 4.1-2 7-5.4 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </IconBase>
  );
}