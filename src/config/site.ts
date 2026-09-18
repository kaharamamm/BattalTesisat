/**
 * CENTRAL CUSTOMER DATA
 * Edit business information here before going to production.
 * Replace all PLACEHOLDER / empty values with confirmed customer details.
 */

export type SiteConfig = {
  company: {
    name: string;
    shortName: string;
    legalName: string;
    description: string;
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
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
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

export const siteConfig: SiteConfig = {
  company: {
    name: "Battal Tesisat",
    shortName: "Battal Tesisat",
    legalName: "Battal Tesisat",
    description:
      "Ankara bölgesinde su ve doğalgaz tesisatı hizmetleri. Detaylı hizmet kapsamı müşteri onayından sonra güncellenecektir.",
  },

  contact: {
    phoneDisplay: "0 (5XX) XXX XX XX",
    phoneHref: "+905XXXXXXXXX",
    whatsapp: "905XXXXXXXXX",
    whatsappDefaultMessage:
      "Merhaba, web siteniz üzerinden ulaşıyorum. Hizmetleriniz hakkında bilgi almak istiyorum.",
    email: "info@example.com",
  },

  location: {
    city: "Ankara",
    address: "Adres bilgisi buraya gelecek",
    districtPlaceholder: "Hizmet bölgesi bilgisi buraya gelecek",
    googleMapsUrl: "",
    googleMapsEmbedUrl: "",
  },

  workingHours: {
    weekdays: "Çalışma saatleri buraya gelecek",
    saturday: "Cumartesi saatleri buraya gelecek",
    sunday: "Pazar saatleri buraya gelecek",
    display: "Çalışma saatleri buraya gelecek",
  },

  social: {
    instagram: "",
    facebook: "",
    googleBusiness: "",
  },

  seo: {
    // TODO: Replace https://example.com with the real domain before production.
    siteUrl: "https://example.com",
    defaultTitle: "Battal Tesisat | Ankara Su ve Doğalgaz Tesisatı",
    defaultDescription:
      "Battal Tesisat — Ankara'da su ve doğalgaz tesisatı hizmetleri. İletişim ve hizmet detayları yakında güncellenecektir.",
    ogImage: "/images/og-default.svg",
  },

  trust: {
    googleRatingLabel: "Google Puanı",
    googleRatingValue: null,
    googleReviewCount: null,
    experienceLabel: "Deneyim",
    experienceValue: "Deneyim bilgisi buraya gelecek",
    completedJobsLabel: "Tamamlanan İşler",
    completedJobsValue: "İş sayısı buraya gelecek",
    serviceAreaLabel: "Hizmet Bölgesi",
    serviceAreaValue: "Ankara (detaylar güncellenecek)",
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
