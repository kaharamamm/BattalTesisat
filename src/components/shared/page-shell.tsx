import { cn } from "@/lib/utils";
import { AnimatedWash } from "@/components/shared/animated-wash";

type PageShellProps = {
  children: React.ReactNode;
  /** Skip warm/orange tones (Ana Sayfa) */
  excludeWarm?: boolean;
  className?: string;
};

/**
 * Soft top wash for every inner page — random colors + gentle drift.
 */
export function PageShell({
  children,
  excludeWarm = false,
  className,
}: PageShellProps) {
  return (
    <div className={cn("relative bg-white", className)}>
      <AnimatedWash variant="page" excludeWarm={excludeWarm} />
      <div className="relative">{children}</div>
    </div>
  );
}
