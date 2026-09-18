import { siteConfig } from "@/config/site";
import { reviews as fallbackReviews, type Review } from "@/data/reviews";

export type GoogleReviewsPayload = {
  ratingValue: string | null;
  reviewCount: number | null;
  reviews: Review[];
  source: "live" | "fallback";
};

type GoogleMapsWindow = Window & {
  google?: {
    maps?: {
      importLibrary?: (name: string) => Promise<PlacesLibrary>;
    };
  };
};

type PlacesLibrary = {
  Place: {
    new (options: { id: string }): PlaceInstance;
    searchByText: (request: {
      textQuery: string;
      fields: string[];
      language?: string;
      maxResultCount?: number;
    }) => Promise<{ places?: PlaceInstance[] }>;
  };
};

type PlaceInstance = {
  id?: string;
  rating?: number | null;
  userRatingCount?: number | null;
  reviews?: Array<{
    rating?: number | null;
    text?: string | null | { text?: string };
    relativePublishTimeDescription?: string | null;
    authorAttribution?: { displayName?: string | null } | null;
  }> | null;
  fetchFields: (options: { fields: string[] }) => Promise<void>;
};

const OWNER_NAME_HINTS = [
  "neslihan satıcı",
  "ada neslihan",
  "ismailbattal",
];

let mapsLoader: Promise<PlacesLibrary> | null = null;
let visitFetch: Promise<GoogleReviewsPayload> | null = null;
let subscribers = 0;

function getApiKey(): string {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() ?? "";
}

function formatRating(rating: number): string {
  return rating.toLocaleString("tr-TR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

function reviewText(
  text: string | null | undefined | { text?: string },
): string {
  if (!text) return "";
  if (typeof text === "string") return text.trim();
  return text.text?.trim() ?? "";
}

function isLikelyOwnerReview(author: string): boolean {
  const a = author.toLowerCase();
  return OWNER_NAME_HINTS.some((hint) => a.includes(hint));
}

function toReview(
  raw: NonNullable<PlaceInstance["reviews"]>[number],
): Review | null {
  const author =
    raw.authorAttribution?.displayName?.trim() || "Google kullanıcı";
  const text = reviewText(raw.text);
  const rating = typeof raw.rating === "number" ? raw.rating : 0;
  if (!text || rating < 1) return null;
  if (isLikelyOwnerReview(author)) return null;

  return {
    author,
    rating,
    text,
    date: raw.relativePublishTimeDescription ?? undefined,
    source: "Google",
    isPlaceholder: false,
  };
}

function sortHighestFirst(list: Review[]): Review[] {
  return [...list].sort((a, b) => {
    if (b.rating !== a.rating) return b.rating - a.rating;
    return b.text.length - a.text.length;
  });
}

export function getFallbackGoogleReviews(): GoogleReviewsPayload {
  return {
    ratingValue: siteConfig.trust.googleRatingValue,
    reviewCount: siteConfig.trust.googleReviewCount,
    reviews: sortHighestFirst(
      fallbackReviews.filter((r) => !r.isPlaceholder && r.rating >= 5),
    ).slice(0, 10),
    source: "fallback",
  };
}

function loadPlacesLibrary(apiKey: string): Promise<PlacesLibrary> {
  const w = window as GoogleMapsWindow;
  if (w.google?.maps?.importLibrary) {
    return w.google.maps.importLibrary("places") as Promise<PlacesLibrary>;
  }

  if (mapsLoader) return mapsLoader;

  mapsLoader = new Promise<PlacesLibrary>((resolve, reject) => {
    const script = document.createElement("script");
    script.dataset.googleMapsReviews = "true";
    script.async = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&v=weekly&loading=async`;
    script.onload = () => {
      const importLibrary = (window as GoogleMapsWindow).google?.maps
        ?.importLibrary;
      if (!importLibrary) {
        reject(new Error("google.maps.importLibrary unavailable"));
        return;
      }
      resolve(importLibrary("places") as Promise<PlacesLibrary>);
    };
    script.onerror = () =>
      reject(new Error("Google Maps script failed to load"));
    document.head.appendChild(script);
  });

  return mapsLoader;
}

async function resolvePlaceId(
  Place: PlacesLibrary["Place"],
): Promise<string | null> {
  if (siteConfig.location.googlePlaceId) {
    return siteConfig.location.googlePlaceId;
  }

  const envPlaceId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID?.trim();
  if (envPlaceId) return envPlaceId;

  try {
    const cached = sessionStorage.getItem("ada-google-place-id");
    if (cached) return cached;
  } catch {
    // sessionStorage may be blocked
  }

  const { places } = await Place.searchByText({
    textQuery: siteConfig.location.googlePlaceQuery,
    fields: ["id", "displayName"],
    language: "tr",
    maxResultCount: 1,
  });

  const id = places?.[0]?.id ?? null;
  if (id) {
    try {
      sessionStorage.setItem("ada-google-place-id", id);
    } catch {
      // ignore
    }
  }
  return id;
}

async function fetchLiveReviews(): Promise<GoogleReviewsPayload> {
  const apiKey = getApiKey();
  if (!apiKey) return getFallbackGoogleReviews();

  const { Place } = await loadPlacesLibrary(apiKey);
  const placeId = await resolvePlaceId(Place);
  if (!placeId) return getFallbackGoogleReviews();

  const place = new Place({ id: placeId });
  await place.fetchFields({
    fields: ["rating", "userRatingCount", "reviews"],
  });

  const live = sortHighestFirst(
    (place.reviews ?? [])
      .map(toReview)
      .filter((r): r is Review => r != null && r.rating >= 4),
  );

  // Places API returns at most 5 reviews — pad carousel with curated 5★ fallbacks.
  const keys = new Set(live.map((r) => `${r.author}|${r.text}`));
  const extras = sortHighestFirst(
    fallbackReviews.filter(
      (r) =>
        !r.isPlaceholder &&
        r.rating >= 5 &&
        !keys.has(`${r.author}|${r.text}`),
    ),
  );
  const merged = [...live, ...extras].slice(0, 10);
  const fallback = getFallbackGoogleReviews();

  return {
    ratingValue:
      typeof place.rating === "number"
        ? formatRating(place.rating)
        : fallback.ratingValue,
    reviewCount:
      typeof place.userRatingCount === "number"
        ? place.userRatingCount
        : fallback.reviewCount,
    reviews: merged.length > 0 ? merged : fallback.reviews,
    source: "live",
  };
}

/**
 * Shared fetch for one Ana Sayfa visit (hero + reviews section).
 * Cleared when the last subscriber unmounts so the next visit refetches.
 */
export function loadGoogleReviewsForVisit(): Promise<GoogleReviewsPayload> {
  if (typeof window === "undefined") {
    return Promise.resolve(getFallbackGoogleReviews());
  }

  if (!visitFetch) {
    visitFetch = fetchLiveReviews().catch(() => getFallbackGoogleReviews());
  }
  return visitFetch;
}

export function retainGoogleReviewsVisit(): () => void {
  subscribers += 1;
  return () => {
    subscribers = Math.max(0, subscribers - 1);
    if (subscribers === 0) {
      visitFetch = null;
    }
  };
}
