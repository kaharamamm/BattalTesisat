import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { getPrimaryServices, getServiceBySlug } from "@/data/services";
import { Container } from "@/components/shared/container";
import { PageShell } from "@/components/shared/page-shell";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { PhoneLink } from "@/components/shared/phone-link";
import { FinalCtaSection } from "@/components/sections/final-cta";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPrimaryServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.shortDescription,
    alternates: { canonical: `/hizmetler/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service || service.status !== "primary") {
    notFound();
  }

  return (
    <>
      <PageShell tone="blue">
        <Container className="page-space">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
              <Image
                src={service.image}
                alt={service.imageAlt}
                width={800}
                height={560}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <h1 className="text-3xl font-semibold text-navy sm:text-4xl">
                {service.name}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {service.longDescription}
              </p>
              <ul className="mt-6 space-y-3">
                {service.highlights.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-navy">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-brand"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton placement="contact" label="WhatsApp'tan Sor" />
                <PhoneLink
                  placement="contact"
                  label="Hemen Ara"
                  showNumber={false}
                  className="border border-border px-5 text-navy hover:bg-surface"
                />
              </div>
            </div>
          </div>
        </Container>
      </PageShell>
      <FinalCtaSection />
    </>
  );
}
