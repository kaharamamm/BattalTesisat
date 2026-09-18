"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getPhoneHref } from "@/lib/whatsapp";
import {
  trackEvent,
  type AnalyticsPlacement,
} from "@/lib/analytics";
import { cn } from "@/lib/utils";

type PhoneLinkProps = {
  placement: AnalyticsPlacement;
  label?: string;
  className?: string;
  showIcon?: boolean;
  showNumber?: boolean;
};

export function PhoneLink({
  placement,
  label,
  className,
  showIcon = true,
  showNumber = true,
}: PhoneLinkProps) {
  const display = label ?? (showNumber ? siteConfig.contact.phoneDisplay : "Hemen Ara");

  return (
    <Link
      href={getPhoneHref()}
      onClick={() => trackEvent("phone_click", { placement })}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
        className,
      )}
    >
      {showIcon ? <Phone className="size-4 shrink-0" aria-hidden /> : null}
      <span>{display}</span>
    </Link>
  );
}
