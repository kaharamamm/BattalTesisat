import type { Metadata } from "next";
import Image from "next/image";
import { isPlaceholderText, siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";
import { PageShell } from "@/components/shared/page-shell";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { WhyUsSection } from "@/components/sections/why-us";
import { FinalCtaSection } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: `${siteConfig.company.name} — ${siteConfig.company.ownerName} ile Eskişehir'de tesisat, tadilat ve dekorasyon.`,
  alternates: { canonical: "/hakkimizda" },
};

export default function AboutPage() {
  const hoursPending = isPlaceholderText(siteConfig.workingHours.display);

  return (
    <>
      <PageShell>
        <Container className="page-space pb-0">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
              <Image
                src="/images/about.jpg"
                alt={`${siteConfig.company.name} ekip çalışması`}
                width={1000}
                height={750}
                className="aspect-[4/3] h-auto w-full object-cover"
              />
            </div>
            <div className="min-w-0 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-semibold text-navy sm:text-3xl">
                  {siteConfig.company.name}
                </h1>
              </div>
              <p className="text-lg font-medium text-navy">
                {siteConfig.company.ownerName}
                <span className="mt-1 block text-sm font-normal text-muted-foreground">
                  {siteConfig.company.ownerTitle}
                </span>
              </p>
              <p className="text-muted-foreground">
                {siteConfig.company.description}
              </p>
              <p className="text-muted-foreground">
                10+ yıllık deneyim ve 1000+ tamamlanan işle{" "}
                {siteConfig.company.ownerName} olarak Eskişehir&apos;de yanınızdayız.
                Telefon ve WhatsApp: {siteConfig.contact.phoneDisplay}.
              </p>
              <ul className="space-y-3 rounded-2xl border border-border bg-white p-5 text-sm text-navy shadow-sm">
                <li>• Çalışma bölgesi: {siteConfig.location.city}</li>
                <li>• Adres: {siteConfig.location.address}</li>
                <li className="flex flex-wrap items-center gap-2">
                  <span>• Çalışma saatleri: {siteConfig.workingHours.display}</span>
                  {hoursPending ? <PlaceholderBadge /> : null}
                </li>
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
