import { cn } from "@/lib/utils";

type PlaceholderBadgeProps = {
  label?: string;
  className?: string;
};

/** Visible marker so placeholder claims are never mistaken for real data. */
export function PlaceholderBadge({
  label = "Yer tutucu",
  className,
}: PlaceholderBadgeProps) {
  return (
    <span className={cn("placeholder-mark", className)} data-placeholder="true">
      {label}
    </span>
  );
}
