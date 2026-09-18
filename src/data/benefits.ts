export type Benefit = {
  id: string;
  title: string;
  description: string;
  isPlaceholder: boolean;
};

/**
 * Neutral placeholder benefit labels — replace with confirmed selling points.
 */
export const benefits: Benefit[] = [
  {
    id: "benefit-1",
    title: "Uzmanlık Bilgisi",
    description: "Uzmanlık ve deneyim açıklaması buraya gelecek.",
    isPlaceholder: true,
  },
  {
    id: "benefit-2",
    title: "Hizmet Kapsamı",
    description: "Sunulan hizmet kapsamı buraya gelecek.",
    isPlaceholder: true,
  },
  {
    id: "benefit-3",
    title: "Çalışma Prensibi",
    description: "Çalışma prensibi ve süreç yaklaşımı buraya gelecek.",
    isPlaceholder: true,
  },
  {
    id: "benefit-4",
    title: "Garanti / Destek Bilgisi",
    description: "Garanti ve destek koşulları buraya gelecek.",
    isPlaceholder: true,
  },
  {
    id: "benefit-5",
    title: "Hizmet Bölgesi",
    description: "Hizmet verilen bölgeler buraya gelecek.",
    isPlaceholder: true,
  },
  {
    id: "benefit-6",
    title: "Yetki / Belge Bilgisi",
    description: "Yetki ve belge bilgileri buraya gelecek.",
    isPlaceholder: true,
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
      "WhatsApp veya telefon ile ihtiyacınızı iletin. İletişim kanalları her zaman açıktır.",
  },
  {
    id: "step-2",
    step: "02",
    title: "İhtiyacı Belirleyelim",
    description:
      "Talebinizi birlikte netleştirelim. Detaylı keşif süreci müşteri onayı sonrası tanımlanacaktır.",
  },
  {
    id: "step-3",
    step: "03",
    title: "Hizmeti Planlayalım",
    description:
      "Uygun bir çalışma planı oluşturalım. Planlama detayları onaylandıktan sonra güncellenecektir.",
  },
];
