"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Rgb = readonly [number, number, number];

/** Cool / mid tones — safe next to brand orange text on Ana Sayfa */
const coolPalette: Rgb[] = [
  [14, 165, 233], // sky
  [20, 184, 166], // teal
  [59, 130, 246], // blue
  [16, 185, 129], // emerald
  [6, 182, 212], // cyan
  [99, 102, 241], // indigo
  [139, 92, 246], // violet
];

/** Extra warm options for inner pages only */
const warmPalette: Rgb[] = [
  [249, 115, 22], // orange
  [245, 158, 11], // amber
  [244, 63, 94], // rose
];

function rgba([r, g, b]: Rgb, a: number) {
  return `rgba(${r},${g},${b},${a})`;
}

function pickDistinct(pool: Rgb[], count: number): Rgb[] {
  const copy = [...pool];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(count, copy.length));
}

type AnimatedWashProps = {
  /** Skip orange / amber / rose (use on Ana Sayfa) */
  excludeWarm?: boolean;
  /** page = fixed top band; hero = full section */
  variant?: "page" | "hero";
  className?: string;
};

/**
 * Soft multi-blob color wash — random colors per visit, slow drift animation.
 */
export function AnimatedWash({
  excludeWarm = false,
  variant = "page",
  className,
}: AnimatedWashProps) {
  const defaults = coolPalette.slice(0, 3);
  const [colors, setColors] = useState<Rgb[]>(defaults);

  useEffect(() => {
    const pool = excludeWarm
      ? coolPalette
      : [...coolPalette, ...warmPalette];
    setColors(pickDistinct(pool, 3));
  }, [excludeWarm]);

  const [a, b, c] = colors;

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 overflow-hidden",
        variant === "page" ? "h-[40rem]" : "inset-0 h-auto",
        className,
      )}
      aria-hidden
    >
      {/* Soft vertical veil from primary color */}
      <div
        className="absolute inset-0 transition-[background] duration-1000"
        style={{
          background: `linear-gradient(
            180deg,
            ${rgba(a, 0.13)} 0%,
            ${rgba(a, 0.08)} 22%,
            ${rgba(b, 0.05)} 45%,
            ${rgba(c, 0.02)} 65%,
            transparent 90%
          )`,
        }}
      />

      {/* Drifting color blobs */}
      <div
        className="page-wash-blob page-wash-blob-a absolute -top-16 -right-10 size-[28rem] rounded-full blur-3xl md:size-[34rem]"
        style={{
          background: `radial-gradient(circle, ${rgba(a, 0.22)} 0%, transparent 68%)`,
        }}
      />
      <div
        className="page-wash-blob page-wash-blob-b absolute -top-8 -left-16 size-[24rem] rounded-full blur-3xl md:size-[30rem]"
        style={{
          background: `radial-gradient(circle, ${rgba(b, 0.18)} 0%, transparent 70%)`,
        }}
      />
      <div
        className="page-wash-blob page-wash-blob-c absolute top-24 left-1/3 size-[22rem] rounded-full blur-3xl md:size-[28rem]"
        style={{
          background: `radial-gradient(circle, ${rgba(c, 0.14)} 0%, transparent 72%)`,
        }}
      />
    </div>
  );
}
