export type Review = {
  author: string;
  rating: number;
  text: string;
  date?: string;
  source: "Google";
  isPlaceholder: boolean;
};

/**
 * Do NOT invent customer names or fake review quotes.
 * Replace with real Google Business reviews when available.
 * Carousel shows up to 10 five-star reviews.
 */
export const reviews: Review[] = [
  {
    author: "Müşteri adı buraya gelecek",
    rating: 5,
    text: "Gerçek Google yorumu buraya gelecek.",
    source: "Google",
    isPlaceholder: true,
  },
  {
    author: "Müşteri adı buraya gelecek",
    rating: 5,
    text: "Gerçek Google yorumu buraya gelecek.",
    source: "Google",
    isPlaceholder: true,
  },
  {
    author: "Müşteri adı buraya gelecek",
    rating: 5,
    text: "Gerçek Google yorumu buraya gelecek.",
    source: "Google",
    isPlaceholder: true,
  },
  {
    author: "Müşteri adı buraya gelecek",
    rating: 5,
    text: "Gerçek Google yorumu buraya gelecek.",
    source: "Google",
    isPlaceholder: true,
  },
  {
    author: "Müşteri adı buraya gelecek",
    rating: 5,
    text: "Gerçek Google yorumu buraya gelecek.",
    source: "Google",
    isPlaceholder: true,
  },
  {
    author: "Müşteri adı buraya gelecek",
    rating: 5,
    text: "Gerçek Google yorumu buraya gelecek.",
    source: "Google",
    isPlaceholder: true,
  },
  {
    author: "Müşteri adı buraya gelecek",
    rating: 5,
    text: "Gerçek Google yorumu buraya gelecek.",
    source: "Google",
    isPlaceholder: true,
  },
  {
    author: "Müşteri adı buraya gelecek",
    rating: 5,
    text: "Gerçek Google yorumu buraya gelecek.",
    source: "Google",
    isPlaceholder: true,
  },
  {
    author: "Müşteri adı buraya gelecek",
    rating: 5,
    text: "Gerçek Google yorumu buraya gelecek.",
    source: "Google",
    isPlaceholder: true,
  },
  {
    author: "Müşteri adı buraya gelecek",
    rating: 5,
    text: "Gerçek Google yorumu buraya gelecek.",
    source: "Google",
    isPlaceholder: true,
  },
];

export function getTopFiveStarReviews(limit = 10): Review[] {
  return reviews.filter((review) => review.rating === 5).slice(0, limit);
}

export const reviewsSummary = {
  heading: "Müşterilerimiz Ne Diyor?",
  ratingPlaceholder: "Google puanı buraya gelecek",
  countPlaceholder: "Yorum sayısı buraya gelecek",
  ctaLabel: "Google'da Tüm Yorumları Gör",
};
