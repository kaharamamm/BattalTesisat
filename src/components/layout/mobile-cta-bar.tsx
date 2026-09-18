"use client";

import { Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { getPhoneHref, getWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export function MobileCtaBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 gap-2 p-2">
        <Link
          href={getPhoneHref()}
          onClick={() => trackEvent("phone_click", { placement: "mobile_bar" })}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-navy px-3 text-sm font-semibold text-white"
          aria-label="Hemen ara"
        >
          <Phone className="size-4" aria-hidden />
          Hemen Ara
        </Link>
        <Link
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent("whatsapp_click", { placement: "mobile_bar" })
          }
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-whatsapp px-3 text-sm font-semibold text-whatsapp-foreground"
          aria-label="WhatsApp ile yaz"
        >
          <MessageCircle className="size-4" aria-hidden />
          WhatsApp
        </Link>
      </div>
    </div>
  );
}
