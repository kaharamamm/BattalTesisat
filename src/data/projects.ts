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

/**
 * Do not invent real completed projects.
 * Replace these with confirmed customer project photos and details.
 */
export const projects: Project[] = [
  {
    id: "project-1",
    title: "Proje Görseli",
    serviceType: "Su Tesisatı",
    location: "Eskişehir",
    description: "Proje bilgileri müşteri tarafından sağlanacaktır.",
    image: "/images/project-1.svg",
    imageAlt: "Tamamlanan su tesisatı projesi yer tutucu görseli",
    isPlaceholder: true,
  },
  {
    id: "project-2",
    title: "Proje Görseli",
    serviceType: "Doğalgaz Tesisatı",
    location: "Eskişehir",
    description: "Proje bilgileri müşteri tarafından sağlanacaktır.",
    image: "/images/project-2.svg",
    imageAlt: "Tamamlanan doğalgaz tesisatı projesi yer tutucu görseli",
    isPlaceholder: true,
  },
  {
    id: "project-3",
    title: "Proje Görseli",
    serviceType: "Su Tesisatı",
    location: "Eskişehir",
    description: "Proje bilgileri müşteri tarafından sağlanacaktır.",
    image: "/images/project-3.svg",
    imageAlt: "Tamamlanan tesisat projesi yer tutucu görseli",
    isPlaceholder: true,
  },
  {
    id: "project-4",
    title: "Proje Görseli",
    serviceType: "Doğalgaz Tesisatı",
    location: "Eskişehir",
    description: "Proje bilgileri müşteri tarafından sağlanacaktır.",
    image: "/images/project-4.svg",
    imageAlt: "Tamamlanan montaj projesi yer tutucu görseli",
    isPlaceholder: true,
  },
  {
    id: "project-5",
    title: "Proje Görseli",
    serviceType: "Su Tesisatı",
    location: "Eskişehir",
    description: "Proje bilgileri müşteri tarafından sağlanacaktır.",
    image: "/images/project-5.svg",
    imageAlt: "Tamamlanan sıhhi tesisat projesi yer tutucu görseli",
    isPlaceholder: true,
  },
  {
    id: "project-6",
    title: "Proje Görseli",
    serviceType: "Doğalgaz Tesisatı",
    location: "Eskişehir",
    description: "Proje bilgileri müşteri tarafından sağlanacaktır.",
    image: "/images/project-6.svg",
    imageAlt: "Tamamlanan teknik tesisat projesi yer tutucu görseli",
    isPlaceholder: true,
  },
];
