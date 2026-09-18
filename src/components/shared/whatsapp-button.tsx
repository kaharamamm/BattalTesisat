"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import {
  trackEvent,
  type AnalyticsPlacement,
} from "@/lib/analytics";

type WhatsAppButtonProps = {
  placement: AnalyticsPlacement;
  label?: string;
  className?: string;
  message?: string;
  showIcon?: boolean;
  variant?: "solid" | "outline" | "ghost";
};

export function WhatsAppButton({
  placement,
  label = "WhatsApp'tan Ulaş",
  className,
  message,
  showIcon = true,
  variant = "solid",
}: WhatsAppButtonProps) {
  const href = getWhatsAppUrl(message);

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { placement })}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
        variant === "solid" &&
          "bg-whatsapp text-whatsapp-foreground hover:bg-[#1ebe57] focus-visible:outline-whatsapp",
        variant === "outline" &&
          "border border-whatsapp/40 bg-white text-[#128C7E] hover:bg-[#f0fdf4] focus-visible:outline-whatsapp",
        variant === "ghost" &&
          "text-[#128C7E] hover:bg-[#f0fdf4] focus-visible:outline-whatsapp",
        className,
      )}
    >
      {showIcon ? <MessageCircle className="size-4 shrink-0" aria-hidden /> : null}
      <span>{label}</span>
    </Link>
  );
}
