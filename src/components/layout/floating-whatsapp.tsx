"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

/** Desktop-only floating WhatsApp — hidden on mobile when sticky CTA bar is present. */
export function FloatingWhatsApp() {
  return (
    <Link
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { placement: "floating" })}
      className="fixed right-5 bottom-5 z-40 hidden size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp md:inline-flex"
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle className="size-6" aria-hidden />
    </Link>
  );
}
