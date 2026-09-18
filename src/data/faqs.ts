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
      "Hizmet bölgeleri henüz kesinleştirilmemiştir. Onaylanan ilçe ve mahalle listesi buraya eklenecektir.",
    isPlaceholder: true,
  },
  {
    id: "faq-2",
    question: "Hangi hizmetleri sunuyorsunuz?",
    answer:
      "Başlangıç olarak su ve doğalgaz tesisatı odaklı yapılandırılmıştır. Nihai hizmet listesi müşteri onayı sonrası güncellenecektir.",
    isPlaceholder: true,
  },
  {
    id: "faq-3",
    question: "Çalışma saatleriniz nedir?",
    answer:
      "Çalışma saatleri müşteri tarafından onaylandığında burada yayınlanacaktır.",
    isPlaceholder: true,
  },
  {
    id: "faq-4",
    question: "Fiyatlandırma nasıl yapılıyor?",
    answer:
      "Fiyatlandırma politikası henüz tanımlanmamıştır. Keşif ve teklif süreci onaylandıktan sonra burada açıklanacaktır.",
    isPlaceholder: true,
  },
  {
    id: "faq-5",
    question: "Randevu nasıl oluşturabilirim?",
    answer:
      "Şimdilik WhatsApp veya telefon üzerinden iletişim tercih edilmektedir. Randevu süreci detayları daha sonra netleştirilecektir.",
    isPlaceholder: true,
  },
];
