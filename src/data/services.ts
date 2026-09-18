export type ServiceStatus = "primary" | "placeholder";

export type Service = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  status: ServiceStatus;
  icon: "droplets" | "flame" | "thermometer" | "wrench" | "hammer" | "settings";
  image: string;
  imageAlt: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    id: "su-tesisati",
    slug: "su-tesisati",
    name: "Su Tesisatı",
    shortDescription:
      "Su tesisatı hizmet kapsamı müşteri onayından sonra burada detaylandırılacaktır.",
    longDescription:
      "Su tesisatı ile ilgili montaj, bakım ve onarım hizmetlerinin kapsamı henüz kesinleştirilmemiştir. Bu sayfa, onaylanan hizmet içeriği ile güncellenecektir.",
    status: "primary",
    icon: "droplets",
    image: "/images/service-su.svg",
    imageAlt: "Su tesisatı hizmeti görsel alanı",
    highlights: [
      "Hizmet detayı buraya gelecek",
      "Uygulama kapsamı buraya gelecek",
      "Süreç bilgisi buraya gelecek",
    ],
  },
  {
    id: "dogalgaz-tesisati",
    slug: "dogalgaz-tesisati",
    name: "Doğalgaz Tesisatı",
    shortDescription:
      "Doğalgaz tesisatı hizmet kapsamı müşteri onayından sonra burada detaylandırılacaktır.",
    longDescription:
      "Doğalgaz tesisatı ile ilgili montaj ve teknik hizmetlerin kapsamı henüz kesinleştirilmemiştir. Bu sayfa, onaylanan hizmet içeriği ile güncellenecektir.",
    status: "primary",
    icon: "flame",
    image: "/images/service-dogalgaz.svg",
    imageAlt: "Doğalgaz tesisatı hizmeti görsel alanı",
    highlights: [
      "Hizmet detayı buraya gelecek",
      "Uygulama kapsamı buraya gelecek",
      "Süreç bilgisi buraya gelecek",
    ],
  },
  {
    id: "kalorifer-tesisati",
    slug: "kalorifer-tesisati",
    name: "Kalorifer Tesisatı",
    shortDescription:
      "Demo içerik — müşteri onayı sonrası eklenebilir veya kaldırılabilir.",
    longDescription:
      "Bu hizmet henüz onaylanmamıştır. Yer tutucu olarak listelenmiştir.",
    status: "placeholder",
    icon: "thermometer",
    image: "/images/service-placeholder.svg",
    imageAlt: "Kalorifer tesisatı yer tutucu görseli",
    highlights: ["Yer tutucu madde"],
  },
  {
    id: "kombi-montaji",
    slug: "kombi-montaji",
    name: "Kombi Montajı",
    shortDescription:
      "Demo içerik — müşteri onayı sonrası eklenebilir veya kaldırılabilir.",
    longDescription:
      "Bu hizmet henüz onaylanmamıştır. Yer tutucu olarak listelenmiştir.",
    status: "placeholder",
    icon: "settings",
    image: "/images/service-placeholder.svg",
    imageAlt: "Kombi montajı yer tutucu görseli",
    highlights: ["Yer tutucu madde"],
  },
  {
    id: "sihhi-tesisat",
    slug: "sihhi-tesisat",
    name: "Sıhhi Tesisat",
    shortDescription:
      "Demo içerik — müşteri onayı sonrası eklenebilir veya kaldırılabilir.",
    longDescription:
      "Bu hizmet henüz onaylanmamıştır. Yer tutucu olarak listelenmiştir.",
    status: "placeholder",
    icon: "wrench",
    image: "/images/service-placeholder.svg",
    imageAlt: "Sıhhi tesisat yer tutucu görseli",
    highlights: ["Yer tutucu madde"],
  },
  {
    id: "tadilat-montaj",
    slug: "tadilat-montaj",
    name: "Tadilat / Montaj",
    shortDescription:
      "Demo içerik — müşteri onayı sonrası eklenebilir veya kaldırılabilir.",
    longDescription:
      "Bu hizmet henüz onaylanmamıştır. Yer tutucu olarak listelenmiştir.",
    status: "placeholder",
    icon: "hammer",
    image: "/images/service-placeholder.svg",
    imageAlt: "Tadilat ve montaj yer tutucu görseli",
    highlights: ["Yer tutucu madde"],
  },
];

export function getPrimaryServices(): Service[] {
  return services.filter((s) => s.status === "primary");
}

export function getPlaceholderServices(): Service[] {
  return services.filter((s) => s.status === "placeholder");
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
