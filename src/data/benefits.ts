export type Benefit = {
  id: string;
  title: string;
  description: string;
  isPlaceholder: boolean;
};

export const benefits: Benefit[] = [
  {
    id: "benefit-1",
    title: "10+ Yıllık Deneyim",
    description:
      "İsmail Usta liderliğinde yılların birikimiyle tesisat, tadilat ve montaj işlerinde güvenilir çözümler sunuyoruz.",
    isPlaceholder: false,
  },
  {
    id: "benefit-2",
    title: "Geniş Hizmet Kapsamı",
    description:
      "Sıhhi tesisattan duşakabine, kaloriferden gömme rezervuara, tadilattan boya-badanaya kadar birçok işi tek ekipten yönetebilirsiniz.",
    isPlaceholder: false,
  },
  {
    id: "benefit-3",
    title: "Hızlı ve Net İletişim",
    description:
      "Telefon ve WhatsApp ile kolay ulaşım. Talebinizi dinleyip uygun planı birlikte çıkarıyoruz.",
    isPlaceholder: false,
  },
  {
    id: "benefit-4",
    title: "1000+ Tamamlanan İş",
    description:
      "Konut ve işyeri projelerinde biriken tecrübe ile temiz işçilik ve sonucuna güvenebileceğiniz uygulama.",
    isPlaceholder: false,
  },
  {
    id: "benefit-5",
    title: "Eskişehir Odaklı Hizmet",
    description:
      "Tepebaşı ve çevresinde hızlı ulaşım. Yerel ihtiyaçlara alışkın, sahaya yakın çalışma.",
    isPlaceholder: false,
  },
  {
    id: "benefit-6",
    title: "Her Gün 09:00 – 20:00",
    description:
      "Hafta içi ve hafta sonu aynı mesai düzeniyle ulaşılabilirlik. Acil ihtiyaçlarda da iletişime geçebilirsiniz.",
    isPlaceholder: false,
  },
];

export type ProcessStep = {
  id: string;
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: "step-1",
    step: "01",
    title: "Bize Ulaşın",
    description:
      "WhatsApp veya telefon ile ihtiyacınızı iletin. Her gün 09:00 – 20:00 arası bize ulaşabilirsiniz.",
  },
  {
    id: "step-2",
    step: "02",
    title: "İhtiyacı Belirleyelim",
    description:
      "Keşif veya görüşme ile işin kapsamını netleştirip size uygun çözümü anlatıyoruz.",
  },
  {
    id: "step-3",
    step: "03",
    title: "Hizmeti Planlayalım",
    description:
      "Uygun gün ve saat için randevu oluşturup işi planlı ve temiz şekilde tamamlıyoruz.",
  },
];
