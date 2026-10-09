import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

type LogoProps = {
  className?: string;
  compact?: boolean;
};

export function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex min-w-0 items-center gap-2.5 focus-visible:outline-brand",
        className,
      )}
      aria-label={`${siteConfig.company.name} ana sayfa`}
    >
      <span className="relative size-10 shrink-0 overflow-hidden sm:size-11">
        <Image
          src="/images/logo-mark.png"
          alt=""
          width={88}
          height={88}
          className="h-full w-full object-contain"
          priority
        />
      </span>
      <span className={cn("min-w-0", compact && "sr-only sm:not-sr-only")}>
        <span className="block truncate text-base font-semibold text-navy group-hover:text-navy-dark">
          {siteConfig.company.shortName}
        </span>
        <span className="block truncate text-xs text-muted-foreground">
          {siteConfig.company.ownerName}
        </span>
      </span>
    </Link>
  );
}
