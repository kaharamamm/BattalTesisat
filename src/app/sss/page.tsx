import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";
import { PageShell } from "@/components/shared/page-shell";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description: `${siteConfig.company.name} hakkında sıkça sorulan sorular — hizmetler, çalışma saatleri ve iletişim.`,
  alternates: { canonical: "/sss" },
};

export default function FaqPage() {
  return (
    <>
      <PageShell>
        <Container className="page-space">
          <h1 className="text-[1.75rem] text-balance sm:text-4xl lg:text-[2.5rem]">
            Sıkça Sorulan Sorular
          </h1>
          <p className="mt-4 max-w-3xl text-base text-muted-foreground sm:text-lg">
            Yanıtlar müşteri politikaları onaylanana kadar yer tutucu
            niteliktedir.
          </p>
          <FaqSection bare showHeader={false} />
        </Container>
      </PageShell>
      <FinalCtaSection />
    </>
  );
}
