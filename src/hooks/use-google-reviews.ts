"use client";

import { useEffect, useState } from "react";
import {
  getFallbackGoogleReviews,
  loadGoogleReviewsForVisit,
  retainGoogleReviewsVisit,
  type GoogleReviewsPayload,
} from "@/lib/google-reviews";

export function useGoogleReviews(): GoogleReviewsPayload & {
  loading: boolean;
} {
  const [payload, setPayload] = useState<GoogleReviewsPayload>(() =>
    getFallbackGoogleReviews(),
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const release = retainGoogleReviewsVisit();
    let cancelled = false;

    setLoading(true);
    loadGoogleReviewsForVisit().then((data) => {
      if (!cancelled) {
        setPayload(data);
        setLoading(false);
      }
    });

    return () => {
      cancelled = true;
      release();
    };
  }, []);

  return { ...payload, loading };
}
