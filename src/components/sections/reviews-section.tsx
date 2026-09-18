"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { getTopFiveStarReviews, reviewsSummary } from "@/data/reviews";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/shared/section";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { Reveal } from "@/components/shared/reveal";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

function ReviewCard({
  author,
  rating,
  text,
  source,
  isPlaceholder,
}: {
  author: string;
  rating: number;
  text: string;
  source: string;
  isPlaceholder: boolean;
}) {
  return (
    <article className="flex h-full w-[min(100%,20rem)] shrink-0 flex-col rounded-2xl border border-border bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="flex gap-0.5" aria-hidden>
          {Array.from({ length: 5 }).map((_, star) => (
            <Star
              key={star}
              className={cn(
                "size-4",
                rating > star ? "fill-brand text-brand" : "text-border",
              )}
            />
          ))}
        </div>
        {isPlaceholder ? <PlaceholderBadge /> : null}
      </div>
      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
        “{text}”
      </p>
      <div className="mt-4 border-t border-border pt-4">
        <p className="text-sm font-semibold text-navy">{author}</p>
        <p className="text-xs text-muted-foreground">{source}</p>
      </div>
    </article>
  );
}

export function ReviewsSection() {
  const googleUrl = siteConfig.social.googleBusiness;
  const hasGoogleUrl = Boolean(googleUrl);
  const topReviews = getTopFiveStarReviews(10);
  const loopReviews = [...topReviews, ...topReviews];

  return (
    <Section
      title={reviewsSummary.heading}
      description="Gerçek Google işletme puanı ve müşteri yorumları manuel olarak eklenecektir. Aşağıdakiler yer tutucudur."
    >
      <Reveal>
        <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between md:p-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Star className="size-5 fill-brand text-brand" aria-hidden />
              <div>
                <p className="text-sm text-muted-foreground">Google puanı</p>
                <p className="font-semibold text-navy">
                  {siteConfig.trust.googleRatingValue ??
                    reviewsSummary.ratingPlaceholder}
                </p>
              </div>
            </div>
            <div className="h-8 w-px bg-border" aria-hidden />
            <div>
              <p className="text-sm text-muted-foreground">Yorum sayısı</p>
              <p className="font-semibold text-navy">
                {siteConfig.trust.googleReviewCount != null
                  ? `${siteConfig.trust.googleReviewCount} yorum`
                  : reviewsSummary.countPlaceholder}
              </p>
            </div>
            <PlaceholderBadge />
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

      <div className="relative -mx-4 overflow-hidden sm:-mx-6 lg:-mx-8">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent sm:w-12"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent sm:w-12"
          aria-hidden
        />
        <div className="group flex overflow-hidden">
          <div className="animate-marquee flex w-max gap-5 py-1 pr-5 group-hover:[animation-play-state:paused]">
            {loopReviews.map((review, i) => (
              <ReviewCard
                key={`${review.author}-${i}`}
                author={review.author}
                rating={review.rating}
                text={review.text}
                source={review.source}
                isPlaceholder={review.isPlaceholder}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
