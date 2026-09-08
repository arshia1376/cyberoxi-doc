import type { ReactNode } from "react";

type IconProps = { className?: string };

const base = "h-5 w-5 shrink-0";

export function IconSoftware({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="4.5" width="18" height="12.5" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 20.5h8M12 17v3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconMachinery({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M4 18h16M6 18V9l4-4h4l4 4v9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="12.5" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconCamera({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="7" width="13" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 10.5 21 8v9l-5-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconFire({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 3c1.5 3 1 5-1 7 3 .2 5 2.2 5 5a6 6 0 1 1-12 0c0-3.4 2.4-6.2 4-8 0 2 1 3.4 2 4-1.5-3 .2-5.8 2-8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconShield({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 3 5 6.5v5.2c0 4.2 2.8 7.2 7 8.8 4.2-1.6 7-4.6 7-8.8V6.5L12 3Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 12.2 11.1 14.4 15.2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconUsers({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.8 19c.6-2.8 2.7-4.5 5.2-4.5S13.6 16.2 14.2 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="17" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16.2 14.6c2 .3 3.5 1.8 4 4.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconLayers({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="m12 4 8 4-8 4-8-4 8-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m4 12 8 4 8-4M4 16l8 4 8-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconClock({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8v4.2L15 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconPhone({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M7.2 3.8h2.6l1.2 3.1-1.6 1.1a12.5 12.5 0 0 0 5.6 5.6l1.1-1.6 3.1 1.2v2.6c0 .7-.6 1.3-1.3 1.3C10.4 17 7 13.6 7 6.1c0-.7.6-1.3 1.3-1.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconMail({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3.5" y="6" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4.5 8 7.5 5 7.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconCheck({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="m8.6 12.2 2.3 2.3 4.6-4.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconPen({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M14.2 5.2 18.8 9.8 9 19.6H4.4V15L14.2 5.2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m12.8 6.6 4.6 4.6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconFactory({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M3 20V9l5 3V9l5 3V8h8v12H3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7 20v-3M12 20v-3M17 20v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconChat({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M5 6.5h14v9.2H9.2L5 19V6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8.5 10.2h7M8.5 13h4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconMenu({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M5 8h14M5 12h14M5 16h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="m7 7 10 10M17 7 7 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconShuttle({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 3.4c2.4 1.1 4.1 4.6 4.4 8.4H7.6C7.9 8 9.6 4.5 12 3.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9.2 7.2 12 11.2l2.8-4M8.4 10.2h7.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <ellipse cx="12" cy="16.6" rx="3.1" ry="3.6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 11.8v1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconBadge({
  children,
  tone = "gold",
}: {
  children: ReactNode;
  tone?: "gold" | "cyan" | "fire";
}) {
  const color =
    tone === "cyan"
      ? "text-[var(--cyan)] border-[var(--cyan)]/25 bg-[rgba(94,234,212,0.08)]"
      : tone === "fire"
        ? "text-[#ff6b3d] border-[#ff6b3d]/25 bg-[rgba(255,107,61,0.1)]"
        : "text-[var(--gold)] border-[var(--gold)]/25 bg-[rgba(224,177,90,0.1)]";

  return (
    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl border ${color}`}>
      {children}
    </span>
  );
}
