export type Faq = {
  id: string;
  question: string;
  answer: string;
  isPlaceholder: boolean;
};

export const faqs: Faq[] = [
  {
    id: "faq-1",
    question: "Hangi bölgelere hizmet veriyorsunuz?",
    answer:
      "Eskişehir Tepebaşı ve çevresine hizmet veriyoruz. Talebinize göre yakın ilçelerde de destek sağlayabiliyoruz.",
    isPlaceholder: false,
  },
  {
    id: "faq-2",
    question: "Hangi hizmetleri sunuyorsunuz?",
    answer:
      "Sıhhi tesisat, kalorifer, tamir, tadilat, elektrik, boya & badana, dekorasyon, duşakabin ve gömme rezervuar (montaj, tamir, bakım) hizmetleri sunuyoruz.",
    isPlaceholder: false,
  },
  {
    id: "faq-3",
    question: "Çalışma saatleriniz nedir?",
    answer:
      "Haftanın her günü 09:00 – 20:00 saatleri arasında hizmet veriyoruz.",
    isPlaceholder: false,
  },
  {
    id: "faq-4",
    question: "Fiyatlandırma nasıl yapılıyor?",
    answer:
      "İşin kapsamına göre yerinde veya telefon/WhatsApp üzerinden keşif yapıp net teklif sunuyoruz. Ücret, malzeme ve işçilik ihtiyacına göre belirlenir.",
    isPlaceholder: false,
  },
  {
    id: "faq-5",
    question: "Randevu nasıl oluşturabilirim?",
    answer:
      "Telefon veya WhatsApp üzerinden bize yazmanız yeterli. Uygun gün ve saati birlikte planlarız.",
    isPlaceholder: false,
  },
];
