import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/projects-section";
import { FinalCtaSection } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Projelerimiz",
  description:
    "Battal Tesisat tamamlanan iş örnekleri. Proje görselleri müşteri tarafından sağlandığında yayınlanacaktır.",
  alternates: { canonical: "/projeler" },
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsSection spacing="page" />
      <FinalCtaSection />
    </>
  );
}
