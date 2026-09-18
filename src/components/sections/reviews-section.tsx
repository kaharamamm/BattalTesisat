"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { reviewsSummary } from "@/data/reviews";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/shared/section";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { Reveal } from "@/components/shared/reveal";
import { ReviewsCarousel } from "@/components/sections/reviews-carousel";
import { useGoogleReviews } from "@/hooks/use-google-reviews";
import { trackEvent } from "@/lib/analytics";

export function ReviewsSection() {
  const { ratingValue, reviewCount, reviews, loading } = useGoogleReviews();
  const googleUrl = siteConfig.social.googleBusiness;
  const hasGoogleUrl = Boolean(googleUrl);
  const hasRating = Boolean(ratingValue);

  return (
    <Section
      title={reviewsSummary.heading}
      description="Müşterilerimizin Google üzerinden bıraktığı en yüksek puanlı yorumlar. Ana sayfa her açılışta güncel puan ve yorumları yükler."
    >
      <Reveal>
        <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between md:p-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Star className="size-5 fill-brand text-brand" aria-hidden />
              <div>
                <p className="text-sm text-muted-foreground">Google puanı</p>
                <p className="font-semibold text-navy">
                  {ratingValue ?? reviewsSummary.ratingPlaceholder}
                  {loading ? (
                    <span className="ml-2 text-xs font-normal text-muted-foreground">
                      güncelleniyor…
                    </span>
                  ) : null}
                </p>
              </div>
            </div>
            <div className="h-8 w-px bg-border" aria-hidden />
            <div>
              <p className="text-sm text-muted-foreground">Yorum sayısı</p>
              <p className="font-semibold text-navy">
                {reviewCount != null
                  ? `${reviewCount} yorum`
                  : reviewsSummary.countPlaceholder}
              </p>
            </div>
            {!hasRating ? <PlaceholderBadge /> : null}
          </div>
          {hasGoogleUrl ? (
            <Link
              href={googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("directions_click", { placement: "reviews" })
              }
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-navy px-5 text-sm font-semibold text-white hover:bg-navy-dark"
            >
              {reviewsSummary.ctaLabel}
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex min-h-11 cursor-not-allowed items-center justify-center rounded-xl bg-navy/40 px-5 text-sm font-semibold text-white"
              title="Google işletme bağlantısı henüz eklenmedi"
            >
              {reviewsSummary.ctaLabel}
            </button>
          )}
        </div>
      </Reveal>

      <ReviewsCarousel reviews={reviews} />
    </Section>
  );
}
