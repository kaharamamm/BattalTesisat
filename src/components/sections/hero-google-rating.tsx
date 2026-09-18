"use client";

import { Star } from "lucide-react";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { useGoogleReviews } from "@/hooks/use-google-reviews";
import { siteConfig } from "@/config/site";

/** Live Google rating card for Ana Sayfa trust strip. */
export function HeroGoogleRating() {
  const { ratingValue, reviewCount, loading } = useGoogleReviews();
  const value = ratingValue
    ? `${ratingValue}${reviewCount != null ? ` (${reviewCount} yorum)` : ""}`
    : "Google puanı buraya gelecek";

  return (
    <div className="flex h-full min-h-[9.5rem] flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition-transform hover:-translate-y-0.5">
      <div className="mb-3 flex items-start justify-between gap-2">
        <Star className="size-5 text-brand" aria-hidden />
        {!ratingValue ? <PlaceholderBadge /> : null}
      </div>
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {siteConfig.trust.googleRatingLabel}
      </p>
      <p className="mt-1 flex-1 text-base font-semibold text-navy">
        {value}
        {loading ? (
          <span className="mt-1 block text-xs font-normal text-muted-foreground">
            Google&apos;dan güncelleniyor…
          </span>
        ) : null}
      </p>
    </div>
  );
}
