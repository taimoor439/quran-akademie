import Link from "next/link";

/** Eight-pointed star mark: two overlapping squares, a classic Islamic geometric motif. */
export function StarMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="2.5">
        <rect x="12" y="12" width="24" height="24" rx="1" />
        <rect
          x="12"
          y="12"
          width="24"
          height="24"
          rx="1"
          transform="rotate(45 24 24)"
        />
      </g>
      <circle cx="24" cy="24" r="4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Logo({
  dark = false,
  className = "",
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <span className="text-gold">
        <StarMark />
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-[1.35rem] font-bold tracking-tight ${
            dark ? "text-white" : "text-brand"
          }`}
        >
          Quran Akademie
        </span>
        <span
          className={`block text-[0.65rem] font-semibold uppercase tracking-[0.22em] ${
            dark ? "text-gold-light" : "text-gold-dark"
          }`}
        >
          Online · Live · 1-zu-1
        </span>
      </span>
    </Link>
  );
}
