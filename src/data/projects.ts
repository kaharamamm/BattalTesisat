export type Project = {
  id: string;
  title: string;
  serviceType: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
  isPlaceholder: boolean;
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Modern Banyo Tadilatı",
    serviceType: "Tadilat / Duşakabin",
    location: "Eskişehir",
    description:
      "Duşakabin, gömme rezervuar ve dekoratif aydınlatmalı modern banyo uygulaması.",
    image: "/images/project-1.jpg",
    imageAlt: "Tamamlanmış modern banyo tadilatı",
    isPlaceholder: false,
  },
  {
    id: "project-2",
    title: "Gömme Rezervuar Montajı",
    serviceType: "Gömme Rezervuar",
    location: "Eskişehir",
    description:
      "Duvara gömme rezervuar çerçevesi ve bağlantı tesisatı kurulumu.",
    image: "/images/project-2.jpg",
    imageAlt: "Gömme rezervuar montaj çalışması",
    isPlaceholder: false,
  },
  {
    id: "project-3",
    title: "Gömme Batarya Tesisatı",
    serviceType: "Sıhhi Tesisat",
    location: "Eskişehir",
    description:
      "Banyo duvarında gömme batarya ve PPRC boru tesisatı uygulaması.",
    image: "/images/project-3.jpg",
    imageAlt: "Sıhhi tesisat gömme batarya montajı",
    isPlaceholder: false,
  },
  {
    id: "project-4",
    title: "Duş Drenaj ve Tesisat",
    serviceType: "Tadilat / Sıhhi Tesisat",
    location: "Eskişehir",
    description:
      "Yürüme duş alanında lineer drenaj ve su tesisatı yenilemesi.",
    image: "/images/project-4.jpg",
    imageAlt: "Duş drenaj ve tesisat tadilatı",
    isPlaceholder: false,
  },
  {
    id: "project-5",
    title: "Kalorifer Radyatör Uygulaması",
    serviceType: "Kalorifer",
    location: "Eskişehir",
    description:
      "Koridor hattında kalorifer radyatör ve ısıtma tesisatı çalışması.",
    image: "/images/project-5.jpg",
    imageAlt: "Kalorifer radyatör tesisatı",
    isPlaceholder: false,
  },
  {
    id: "project-6",
    title: "Hassas Montaj Çalışması",
    serviceType: "Tadilat",
    location: "Eskişehir",
    description:
      "Lazer hizalama ile yüksek noktada hassas montaj ve tadilat uygulaması.",
    image: "/images/project-6.jpg",
    imageAlt: "Ekip ile tadilat ve montaj çalışması",
    isPlaceholder: false,
  },
];
