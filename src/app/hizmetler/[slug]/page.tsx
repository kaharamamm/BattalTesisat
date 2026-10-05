import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import {
  getPrimaryServices,
  getServiceBySlug,
  type Service,
  type ServiceSubsection,
} from "@/data/services";
import { Container } from "@/components/shared/container";
import { PageShell } from "@/components/shared/page-shell";
import { ImageLightbox } from "@/components/shared/image-lightbox";
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

function ServiceBlock({
  title,
  description,
  image,
  imageAlt,
  highlights,
  headingLevel = "h1",
}: {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;

  return (
    <div className="grid items-start gap-10 lg:grid-cols-2">
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
        <div className="relative aspect-[4/3] bg-surface">
          <ImageLightbox
            src={image}
            alt={imageAlt}
            width={800}
            height={600}
            roundedClassName="rounded-none"
            className="absolute inset-0 h-full"
            imageClassName="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="min-w-0">
        <Heading
          className={
            headingLevel === "h1"
              ? "text-3xl font-semibold text-navy sm:text-4xl"
              : "text-2xl font-semibold text-navy sm:text-3xl"
          }
        >
          {title}
        </Heading>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
        <ul className="mt-6 space-y-3">
          {highlights.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-navy">
              <CheckCircle2
                className="mt-0.5 size-4 shrink-0 text-brand"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ServiceSubsections({
  service,
  subsections,
}: {
  service: Service;
  subsections: ServiceSubsection[];
}) {
  return (
    <div className="space-y-16">
      <div>
        <h1 className="text-3xl font-semibold text-navy sm:text-4xl">
          {service.name}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
          {service.longDescription}
        </p>
      </div>

      {subsections.map((section) => (
        <ServiceBlock
          key={section.title}
          title={section.title}
          description={section.description}
          image={section.image}
          imageAlt={section.imageAlt}
          highlights={section.highlights}
          headingLevel="h2"
        />
      ))}
    </div>
  );
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service || service.status !== "primary") {
    notFound();
  }

  const subsections = service.subsections;

  return (
    <>
      <PageShell>
        <Container className="page-space">
          {subsections?.length ? (
            <ServiceSubsections service={service} subsections={subsections} />
          ) : (
            <ServiceBlock
              title={service.name}
              description={service.longDescription}
              image={service.image}
              imageAlt={service.imageAlt}
              highlights={service.highlights}
            />
          )}
        </Container>
      </PageShell>
      <FinalCtaSection />
    </>
  );
}
