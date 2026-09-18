import { cn } from "@/lib/utils";
import { ToneBackdrop, type SectionTone } from "@/components/shared/tone";

type PageShellProps = {
  children: React.ReactNode;
  tone?: Exclude<SectionTone, "none">;
  className?: string;
};

/** Top-only wash for inner pages (no bottom blend). */
export function PageShell({
  children,
  tone = "sky",
  className,
}: PageShellProps) {
  return (
    <div className={cn("relative overflow-hidden bg-white", className)}>
      <ToneBackdrop tone={tone} intensity="strong" />
      <div className="relative">{children}</div>
    </div>
  );
}
