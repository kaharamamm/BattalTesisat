export type ServiceStatus = "primary" | "placeholder";

export type ServiceIcon =
  | "droplets"
  | "flame"
  | "thermometer"
  | "wrench"
  | "hammer"
  | "settings"
  | "paintbrush"
  | "zap"
  | "bath"
  | "sparkles";

export type ServiceGalleryImage = {
  src: string;
  alt: string;
};

export type ServiceSubsection = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
};

export type Service = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  status: ServiceStatus;
  icon: ServiceIcon;
  image: string;
  imageAlt: string;
  highlights: string[];
  /** Optional subsections (e.g. Tadilat → Banyo / Mutfak) */
  subsections?: ServiceSubsection[];
};

export const services: Service[] = [
  {
    id: "sihhi-tesisat",
    slug: "sihhi-tesisat",
    name: "Sıhhi Tesisat",
    shortDescription:
      "Su tesisatı montajı, kaçak tespiti, boru değişimi ve sıhhi tesisat tamiri.",
    longDescription:
      "Konut ve işyerlerinde sıhhi tesisat işlerinizi uçtan uca planlıyoruz. Yeni tesisat, boru değişimi, kaçak onarımı ve bakım çalışmalarında temiz ve güvenli uygulama sunuyoruz.",
    status: "primary",
    icon: "droplets",
    image: "/images/service-sihhi.jpg",
    imageAlt: "Sıhhi tesisat boru ve gömme batarya montajı",
    highlights: [
      "Su tesisatı montaj ve yenileme",
      "Kaçak tespiti ve onarım",
      "Boru ve armatür değişimi",
    ],
  },
  {
    id: "kalorifer",
    slug: "kalorifer",
    name: "Kalorifer",
    shortDescription:
      "Kalorifer tesisatı, radyatör montajı, bakım ve ısıtma sistemi düzenlemeleri.",
    longDescription:
      "Kalorifer ve ısıtma sistemlerinde montaj, bakım ve onarım hizmeti veriyoruz. Radyatör yerleşimi, tesisat düzenlemesi ve sistem iyileştirmelerinde yerinde keşif ile ilerliyoruz.",
    status: "primary",
    icon: "thermometer",
    image: "/images/service-kalorifer.jpg",
    imageAlt: "Kalorifer radyatör tesisatı uygulaması",
    highlights: [
      "Radyatör montajı ve değişimi",
      "Kalorifer tesisatı düzenleme",
      "Isıtma sistemi bakım desteği",
    ],
  },
  {
    id: "tamir",
    slug: "tamir",
    name: "Tamir",
    shortDescription:
      "Tesisat, rezervuar, armatür ve genel arıza tamiri — hızlı müdahale.",
    longDescription:
      "Ani arızalarda hızlı destek sunuyoruz. Su kaçağı, tıkanıklık, rezervuar ve armatür sorunlarında yerinde tespit ve onarım yapıyoruz.",
    status: "primary",
    icon: "wrench",
    image: "/images/service-tamir.jpg",
    imageAlt: "Tesisat tamir ve gömme sistem onarımı",
    highlights: [
      "Acil arıza müdahalesi",
      "Armatür ve rezervuar tamiri",
      "Kaçak ve tıkanıklık çözümü",
    ],
  },
  {
    id: "tadilat",
    slug: "tadilat",
    name: "Tadilat",
    shortDescription:
      "Banyo ve mutfak tadilatı — tesisat, seramik ve yenileme işleri.",
    longDescription:
      "Tadilat işlerinde tesisattan seramiğe kadar süreci birlikte planlıyoruz. Yenileme, düzenleme ve modernizasyon işlerinde temiz işçilik hedefliyoruz.",
    status: "primary",
    icon: "hammer",
    image: "/images/service-tadilat.jpg",
    imageAlt: "Tadilat sırasında tesisat ve drenaj uygulaması",
    highlights: [
      "Banyo yenileme",
      "Mutfak yenileme",
      "Tesisat + seramik koordinasyonu",
    ],
    subsections: [
      {
        title: "Banyo",
        description:
          "Banyo tadilatında tesisat, seramik, duş alanı ve rezervuar işlerini birlikte planlıyoruz. Yenileme veya kısmi onarımda temiz ve kullanılabilir sonuç hedefliyoruz.",
        image: "/images/hero.jpg",
        imageAlt: "Banyo tadilatı örneği",
        highlights: [
          "Banyo yenileme",
          "Tesisat ve seramik uygulaması",
          "Duş alanı düzenleme",
        ],
      },
      {
        title: "Mutfak",
        description:
          "Mutfak tadilatında su tesisatı, tezgâh çevresi ve yenileme işlerinde destek sunuyoruz. İhtiyaca göre montaj ve düzenleme planı çıkarıyoruz.",
        image: "/images/service-tadilat.jpg",
        imageAlt: "Mutfak tadilatı görsel alanı",
        highlights: [
          "Mutfak yenileme",
          "Su tesisatı düzenleme",
          "Tezgâh çevresi montaj desteği",
        ],
      },
    ],
  },
  {
    id: "elektrik",
    slug: "elektrik",
    name: "Elektrik",
    shortDescription:
      "Tadilat ve montaj süreçlerinde elektrik işleri desteği.",
    longDescription:
      "Tadilat ve montaj projelerinde ihtiyaç duyulan elektrik işlerinde destek sağlıyoruz. Aydınlatma, priz ve hat düzenlemelerinde güvenli uygulama önemsiyoruz.",
    status: "primary",
    icon: "zap",
    image: "/images/service-elektrik.jpg",
    imageAlt: "Elektrik ve altyapı düzenleme çalışması",
    highlights: [
      "Tadilat içi elektrik desteği",
      "Priz ve aydınlatma düzenleme",
      "Güvenli hattın kontrolü",
    ],
  },
  {
    id: "boya-badana",
    slug: "boya-badana",
    name: "Boya & Badana",
    shortDescription:
      "İç mekân boya ve badana uygulamaları — tadilat sonrası yenileme.",
    longDescription:
      "Tadilat sonrası veya bağımsız boya-badana işlerinde yüzey hazırlığı ve uygulama desteği sunuyoruz. Temiz, düzgün ve yaşanabilir sonuç hedefliyoruz.",
    status: "primary",
    icon: "paintbrush",
    image: "/images/service-boya.jpg",
    imageAlt: "Boya ve badana yenileme alanı",
    highlights: [
      "İç mekân boya uygulaması",
      "Yüzey hazırlığı",
      "Tadilat sonrası yenileme",
    ],
  },
  {
    id: "dekorasyon",
    slug: "dekorasyon",
    name: "Dekorasyon",
    shortDescription:
      "Banyo ve iç mekân dekorasyon uygulamaları ile modern görünüm.",
    longDescription:
      "Banyo ve iç mekânlarda dekoratif uygulamalarla daha modern bir görünüm hedefliyoruz. Malzeme seçimi ve uygulama sürecinde sizinle birlikte ilerliyoruz.",
    status: "primary",
    icon: "sparkles",
    image: "/images/service-dekorasyon.jpg",
    imageAlt: "Modern banyo dekorasyon uygulaması",
    highlights: [
      "Banyo dekorasyon uygulamaları",
      "Modern malzeme seçimi",
      "Uyumlu bitiş detayları",
    ],
  },
  {
    id: "dusakabin",
    slug: "dusakabin",
    name: "Duşakabin",
    shortDescription:
      "Duşakabin ölçümü, montajı ve değişimi — cam kabin çözümleri.",
    longDescription:
      "Duşakabin montajı ve değişiminde ölçüye uygun uygulama yapıyoruz. Cam kabin sistemlerinde sızdırmazlık ve düzgün montaja özen gösteriyoruz.",
    status: "primary",
    icon: "bath",
    image: "/images/service-dusakabin.jpg",
    imageAlt: "Cam duşakabin montajı tamamlanmış banyo",
    highlights: [
      "Ölçüye özel montaj",
      "Cam duşakabin kurulumu",
      "Değişim ve sızdırmazlık kontrolü",
    ],
  },
  {
    id: "gomme-rezervuar",
    slug: "gomme-rezervuar",
    name: "Gömme Rezervuar",
    shortDescription:
      "Gömme rezervuar montajı, tamiri ve bakımı.",
    longDescription:
      "Gömme rezervuar montajı, tamiri ve bakımında deneyimli ekibimizle hizmet veriyoruz. Duvara gömme sistemlerde doğru montaj ve uzun ömürlü kullanım için özenli çalışıyoruz.",
    status: "primary",
    icon: "settings",
    image: "/images/service-gomme.jpg",
    imageAlt: "Gömme rezervuar montaj çerçevesi kurulumu",
    highlights: [
      "Gömme rezervuar montajı",
      "Tamir ve bakım",
      "Duvara gömme sistem kurulumu",
    ],
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
