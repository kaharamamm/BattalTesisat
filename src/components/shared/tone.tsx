import { cn } from "@/lib/utils";

export type SectionTone =
  | "orange"
  | "sky"
  | "teal"
  | "amber"
  | "blue"
  | "emerald"
  | "cyan"
  | "none";

type Rgb = readonly [number, number, number];

const toneRgb: Record<Exclude<SectionTone, "none">, Rgb> = {
  orange: [249, 115, 22],
  sky: [14, 165, 233],
  teal: [20, 184, 166],
  amber: [245, 158, 11],
  blue: [59, 130, 246],
  emerald: [16, 185, 129],
  cyan: [6, 182, 212],
};

function rgba([r, g, b]: Rgb, a: number) {
  return `rgba(${r},${g},${b},${a})`;
}

type Intensity = "strong" | "soft";

const intensityScale: Record<
  Intensity,
  { veil: [number, number, number]; right: number; left: number }
> = {
  /** Hero / page top */
  strong: { veil: [0.14, 0.07, 0.025], right: 0.16, left: 0.13 },
  /** Legacy softer wash (unused on Ana Sayfa mid sections) */
  soft: { veil: [0.07, 0.035, 0.012], right: 0.08, left: 0.065 },
};

/**
 * Top-heavy washes with left-edge coverage.
 * Use `strong` for hero / page tops only.
 */
export function ToneBackdrop({
  tone,
  blendTo,
  intensity = "strong",
  className,
}: {
  tone?: SectionTone;
  blendTo?: Exclude<SectionTone, "none">;
  intensity?: Intensity;
  className?: string;
}) {
  if ((!tone || tone === "none") && !blendTo) return null;

  const rgb = tone && tone !== "none" ? toneRgb[tone] : null;
  const blendRgb = blendTo ? toneRgb[blendTo] : null;
  const scale = intensityScale[intensity];

  return (
    <div className={cn("pointer-events-none absolute inset-0", className)} aria-hidden>
      {rgb ? (
        <>
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, ${rgba(rgb, scale.veil[0])} 0%, ${rgba(rgb, scale.veil[1])} 26%, ${rgba(rgb, scale.veil[2])} 50%, transparent 74%)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 100% 80% at 100% -8%, ${rgba(rgb, scale.right)}, transparent 68%)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 95% 78% at -5% 0%, ${rgba(rgb, scale.left)}, transparent 66%)`,
            }}
          />
        </>
      ) : null}

      {blendRgb ? (
        <div
          className="absolute inset-x-0 bottom-0 h-20 md:h-28"
          style={{
            background: `linear-gradient(to bottom, transparent 0%, ${rgba(blendRgb, 0.012)} 55%, ${rgba(blendRgb, 0.028)} 100%)`,
          }}
        />
      ) : null}
    </div>
  );
}
