"use client";

import Link from "next/link";
import { MapPin, Navigation } from "lucide-react";
import { siteConfig } from "@/config/site";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { trackEvent } from "@/lib/analytics";

export function ContactMap() {
  const embed = siteConfig.location.googleMapsEmbedUrl;
  const directionsUrl = siteConfig.location.googleMapsUrl;

  return (
    <div className="space-y-5">
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
        <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-3.5">
          <div className="flex items-center gap-2">
            <MapPin className="size-4 text-brand" aria-hidden />
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Konum
            </p>
          </div>
          <p className="truncate text-sm text-navy">
            {siteConfig.location.googleBusinessName}
          </p>
        </div>

        {embed ? (
          <iframe
            title={`${siteConfig.company.name} konum haritası`}
            src={embed}
            className="aspect-[16/9] w-full min-h-[280px] border-0 md:min-h-[420px]"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div className="flex min-h-[280px] flex-col items-center justify-center bg-white p-8 text-center md:min-h-[420px]">
            <MapPin className="mb-3 size-8 text-brand" aria-hidden />
            <p className="max-w-sm text-sm text-muted-foreground">
              Google Maps konumu müşteri bilgileri eklendiğinde burada
              gösterilecek.
            </p>
            <div className="mt-3">
              <PlaceholderBadge label="Harita bekleniyor" />
            </div>
          </div>
        )}
      </div>

      <div>
        {directionsUrl ? (
          <Link
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("directions_click", { placement: "contact" })
            }
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-navy px-5 text-sm font-semibold text-white hover:bg-navy-dark"
          >
            <Navigation className="size-4" aria-hidden />
            Yol Tarifi Al
          </Link>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex min-h-11 cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-navy/40 px-5 text-sm font-semibold text-white"
          >
            <Navigation className="size-4" aria-hidden />
            Yol Tarifi Al
          </button>
        )}
      </div>
    </div>
  );
}
