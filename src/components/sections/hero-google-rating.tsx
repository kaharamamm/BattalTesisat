"use client";

import { Star } from "lucide-react";
import { useGoogleReviews } from "@/hooks/use-google-reviews";
import { siteConfig } from "@/config/site";

/** Live Google rating card for Ana Sayfa trust strip. */
export function HeroGoogleRating() {
  const { ratingValue, reviewCount } = useGoogleReviews();
  const displayRating =
    ratingValue ?? siteConfig.trust.googleRatingValue ?? "5,0";
  const displayCount =
    reviewCount ?? siteConfig.trust.googleReviewCount ?? null;
  const value =
    displayCount != null
      ? `${displayRating} (${displayCount} yorum)`
      : displayRating;

  return (
    <div className="flex h-full min-h-[9.5rem] flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition-transform hover:-translate-y-0.5">
      <div className="mb-3">
        <Star className="size-5 text-brand" aria-hidden />
      </div>
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {siteConfig.trust.googleRatingLabel}
      </p>
      <p className="mt-1 flex-1 text-base font-semibold text-navy">{value}</p>
    </div>
  );
}
