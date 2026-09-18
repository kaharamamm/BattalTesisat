import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  getPrimaryServices,
  getPlaceholderServices,
} from "@/data/services";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";
import { PageShell } from "@/components/shared/page-shell";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { FinalCtaSection } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Hizmetler",
  description: `${siteConfig.company.name} hizmetleri — su tesisatı, doğalgaz tesisatı ve olası ek hizmetler.`,
  alternates: { canonical: "/hizmetler" },
};

export default function ServicesPage() {
  const primary = getPrimaryServices();
  const placeholders = getPlaceholderServices();

  return (
    <>
      <PageShell>
        <Container className="page-space">
          <h1 className="sr-only">Hizmetlerimiz</h1>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {primary.map((service) => (
              <Link
                key={service.id}
                href={`/hizmetler/${service.slug}`}
                className="group block min-w-0 overflow-hidden rounded-2xl border border-border bg-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <div className="relative aspect-[4/3] bg-surface">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-brand">
                    <span>Tesisat</span>
                    <span className="text-border">•</span>
                    <span className="text-muted-foreground">
                      {siteConfig.location.city}
                    </span>
                  </div>
                  <h2 className="mt-2 text-lg font-semibold text-navy">
                    {service.name}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <h2 className="text-xl font-semibold text-navy">
                Olası ek hizmetler
              </h2>
              <PlaceholderBadge label="Onay bekliyor" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {placeholders.map((service) => (
                <article
                  key={service.id}
                  className="rounded-2xl border border-border bg-white p-5"
                >
                  <h3 className="text-lg font-semibold text-navy">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.shortDescription}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </PageShell>
      <FinalCtaSection />
    </>
  );
}
