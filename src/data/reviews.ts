export type Review = {
  author: string;
  rating: number;
  text: string;
  date?: string;
  source: "Google";
  isPlaceholder: boolean;
};

/**
 * Real Google Business reviews from ADA HIRDAVAT TESİSAT
 * (https://maps.app.goo.gl/Bi19ZQ3URZdfmYnTA).
 * Owner / self reviews intentionally omitted.
 * Carousel shows up to 10 five-star reviews.
 */
export const reviews: Review[] = [
  {
    author: "Safiye Kale",
    rating: 5,
    text: "Evimin şu tesisatını yaptırdım söz verdiği saatte geldiler Neslihan hanım gayet ilgili ve güler yüzlü hizmet verdi teşekkür ederim",
    date: "2 ay önce",
    source: "Google",
    isPlaceholder: false,
  },
  {
    author: "Gokay koku",
    rating: 5,
    text: "Çok güzel bir tesisatçı ürünleri çok kaliteli herkese tavsiye ederim 👍🏻",
    date: "2 ay önce",
    source: "Google",
    isPlaceholder: false,
  },
  {
    author: "dogus duzgun",
    rating: 5,
    text: "Ufak bir tesisat sorunumuz için çağırmıştık. Sağolsunlar gelmişken evin tüm tesisat sorunlarını çözüp gittiler. Oldukça memnun kaldık.",
    date: "bir ay önce",
    source: "Google",
    isPlaceholder: false,
  },
  {
    author: "Tr Tr",
    rating: 5,
    text: "Fiyatlar ucuz kaliteli ve abla çok samimi",
    date: "2 ay önce",
    source: "Google",
    isPlaceholder: false,
  },
  {
    author: "taner akyazı",
    rating: 5,
    text: "Kesinlikle yaptığı işin arkasında duruyor. Öneririm.",
    date: "2 ay önce",
    source: "Google",
    isPlaceholder: false,
  },
  {
    author: "İsmail Demirci",
    rating: 5,
    text: "Bol çeşit uygun fiyat tavsiye ederim",
    date: "2 ay önce",
    source: "Google",
    isPlaceholder: false,
  },
  {
    author: "Hamza Şen",
    rating: 5,
    text: "Çok güzel bir tesisatçı ürünleri çok kaliteli herkese tavsiye ederim 👍🏻",
    date: "2 ay önce",
    source: "Google",
    isPlaceholder: false,
  },
  {
    author: "Aytaç BİRİK",
    rating: 5,
    text: "Güler yüzlü gönlü hoş bir esnaf. Allah tuttuğunu altın etsin, ne zaman yanına gitsem misafirperverliğiyle öne çıkıyor. İyiki varsın Neslihan ustam.",
    date: "3 hafta önce",
    source: "Google",
    isPlaceholder: false,
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
