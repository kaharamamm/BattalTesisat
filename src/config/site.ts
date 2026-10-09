/**
 * CENTRAL CUSTOMER DATA
 * Edit business information here before going to production.
 * Replace remaining PLACEHOLDER / empty values with confirmed customer details.
 */

export type SiteConfig = {
  company: {
    name: string;
    shortName: string;
    legalName: string;
    description: string;
    /** Craftsman / owner shown on About and trust copy */
    ownerName: string;
    ownerTitle: string;
    /** Logo mark initials */
    initials: string;
  };
  contact: {
    phoneDisplay: string;
    phoneHref: string;
    whatsapp: string;
    whatsappDefaultMessage: string;
    email: string;
  };
  location: {
    city: string;
    address: string;
    districtPlaceholder: string;
    /** Public Google Maps / share link (directions + business profile) */
    googleMapsUrl: string;
    /** iframe-friendly embed URL (no API key) */
    googleMapsEmbedUrl: string;
    /** Name as shown on the linked Google Business listing */
    googleBusinessName: string;
    /**
     * Google Place ID (ChIJ…). Optional — if empty, resolved via googlePlaceQuery
     * when NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is set.
     */
    googlePlaceId: string;
    /** Text query used to resolve Place ID / match the Maps listing */
    googlePlaceQuery: string;
  };
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    display: string;
  };
  social: {
    instagram: string;
    facebook: string;
    youtube: string;
    twitter: string;
    googleBusiness: string;
  };
  seo: {
    /** TODO: Replace with the real production domain before launch. */
    siteUrl: string;
    defaultTitle: string;
    defaultDescription: string;
    ogImage: string;
  };
  trust: {
    googleRatingLabel: string;
    googleRatingValue: string | null;
    googleReviewCount: number | null;
    experienceLabel: string;
    experienceValue: string;
    completedJobsLabel: string;
    completedJobsValue: string;
    serviceAreaLabel: string;
    serviceAreaValue: string;
  };
};

/** True while a field still looks like unfinished placeholder copy. */
export function isPlaceholderText(value: string): boolean {
  const v = value.trim().toLowerCase();
  return (
    !v ||
    v.includes("buraya gelecek") ||
    v.includes("placeholder") ||
    v.includes("example.com") ||
    /^0?\s*\(5x+/i.test(value) ||
    value.includes("XXXX")
  );
}

export const siteConfig: SiteConfig = {
  company: {
    name: "Ada Tesisat & Hırdavat",
    shortName: "Ada Tesisat & Hırdavat",
    legalName: "Ada Tesisat & Hırdavat",
    description:
      "Eskişehir Tepebaşı'nda sıhhi tesisat, kalorifer, tadilat, duşakabin, gömme rezervuar ve daha fazlası. İsmail Usta liderliğinde keşif, montaj, tamir ve bakım.",
    ownerName: "İsmail Usta",
    ownerTitle: "Uzman Tesisatçı",
    initials: "AT",
  },

  contact: {
    phoneDisplay: "0 (552) 018 18 97",
    phoneHref: "+905520181897",
    whatsapp: "905520181897",
    whatsappDefaultMessage:
      "Merhaba İsmail Usta, Ada Tesisat & Hırdavat web siteniz üzerinden ulaşıyorum. Hizmetleriniz hakkında bilgi almak istiyorum.",
    email: "ismailbattal260@gmail.com",
  },

  location: {
    city: "Eskişehir",
    address: "Çamlıca, Gündüz Ökçün Blv., 26100 Tepebaşı/Eskişehir",
    districtPlaceholder: "Tepebaşı / Çamlıca",
    googleMapsUrl: "https://maps.app.goo.gl/Bi19ZQ3URZdfmYnTA",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.9087464280615!2d30.455794594663857!3d39.78660322039493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc173b795118b7%3A0xa6a9271737d65012!2sADA%20HIRDAVAT%20TES%C4%B0SAT!5e0!3m2!1str!2str!4v1789727388630!5m2!1str!2str",
    googleBusinessName: "ADA HIRDAVAT TESİSAT",
    googlePlaceId: "",
    googlePlaceQuery:
      "ADA HIRDAVAT TESİSAT Çamlıca Gündüz Ökçün Blv Tepebaşı Eskişehir",
  },

  workingHours: {
    weekdays: "09:00 – 20:00",
    saturday: "09:00 – 20:00",
    sunday: "09:00 – 20:00",
    display: "Her gün 09:00 – 20:00",
  },

  social: {
    // TODO: Replace with real profile URLs when confirmed by the customer.
    instagram: "",
    facebook: "",
    youtube: "",
    twitter: "",
    googleBusiness: "https://maps.app.goo.gl/Bi19ZQ3URZdfmYnTA",
  },

  seo: {
    // TODO: Replace https://example.com with the real domain before production.
    siteUrl: "https://example.com",
    defaultTitle: "Ada Tesisat & Hırdavat",
    defaultDescription:
      "Ada Tesisat & Hırdavat — Eskişehir Tepebaşı'nda İsmail Usta ile sıhhi tesisat, kalorifer, tadilat, duşakabin ve gömme rezervuar. Telefon ve WhatsApp: 0 (552) 018 18 97.",
    ogImage: "/images/og-default.jpg",
  },

  trust: {
    googleRatingLabel: "Google Puanı",
    googleRatingValue: "5,0",
    googleReviewCount: 11,
    experienceLabel: "Deneyim",
    experienceValue: "10+ yıl",
    completedJobsLabel: "Tamamlanan İşler",
    completedJobsValue: "1000+",
    serviceAreaLabel: "Hizmet Bölgesi",
    serviceAreaValue: "Eskişehir Tepebaşı ve çevresi",
  },
};

export const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler", hasChildren: true },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/projeler", label: "Projelerimiz" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
] as const;
