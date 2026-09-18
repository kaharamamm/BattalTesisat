import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";
import { PageShell } from "@/components/shared/page-shell";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { WhyUsSection } from "@/components/sections/why-us";
import { FinalCtaSection } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: `${siteConfig.company.name} hakkında bilgiler. Firma geçmişi ve detaylar müşteri onayından sonra güncellenecektir.`,
  alternates: { canonical: "/hakkimizda" },
};

export default function AboutPage() {
  return (
    <>
      <PageShell tone="emerald">
        <Container className="page-space pb-0">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
              <Image
                src="/images/team.svg"
                alt="Battal Tesisat firma görsel alanı"
                width={1000}
                height={750}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="min-w-0 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-semibold text-navy sm:text-3xl">
                  {siteConfig.company.name}
                </h1>
                <PlaceholderBadge label="İçerik bekleniyor" />
              </div>
              <p className="text-muted-foreground">
                {siteConfig.company.description}
              </p>
              <p className="text-muted-foreground">
                Deneyim bilgisi buraya gelecek. Firma tarihi, ekip yapısı ve
                yetkinlik açıklamaları müşteri tarafından sağlandığında bu sayfa
                güncellenecektir.
              </p>
              <ul className="space-y-3 rounded-2xl border border-border bg-white p-5 text-sm text-navy shadow-sm">
                <li>• Çalışma bölgesi: {siteConfig.location.city}</li>
                <li>• Adres: {siteConfig.location.address}</li>
                <li>• Çalışma saatleri: {siteConfig.workingHours.display}</li>
              </ul>
            </div>
          </div>
        </Container>
      </PageShell>
      <WhyUsSection />
      <FinalCtaSection />
    </>
  );
}
