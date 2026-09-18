import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";
import { PageShell } from "@/components/shared/page-shell";
import { ProjectsSection } from "@/components/sections/projects-section";
import { FinalCtaSection } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Projelerimiz",
  description: `${siteConfig.company.name} tamamlanan iş örnekleri. Proje görselleri müşteri tarafından sağlandığında yayınlanacaktır.`,
  alternates: { canonical: "/projeler" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageShell>
        <Container className="page-space">
          <h1 className="text-[1.75rem] text-balance sm:text-4xl lg:text-[2.5rem]">
            Yaptığımız İşlerden
          </h1>
          <p className="mt-4 max-w-3xl text-base text-muted-foreground sm:text-lg">
            Proje görselleri ve açıklamaları müşteri tarafından sağlandığında
            burada yayınlanacaktır.
          </p>
          <ProjectsSection bare showHeader={false} />
        </Container>
      </PageShell>
      <FinalCtaSection />
    </>
  );
}
