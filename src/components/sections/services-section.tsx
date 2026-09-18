import Image from "next/image";
import Link from "next/link";
import {
  Droplets,
  Flame,
  Thermometer,
  Wrench,
  Hammer,
  Settings,
} from "lucide-react";
import {
  getPrimaryServices,
  getPlaceholderServices,
  type Service,
} from "@/data/services";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/shared/section";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { Reveal } from "@/components/shared/reveal";

const iconMap = {
  droplets: Droplets,
  flame: Flame,
  thermometer: Thermometer,
  wrench: Wrench,
  hammer: Hammer,
  settings: Settings,
};

/** Same scale and chrome as Projelerimiz cards. */
function FeaturedServiceCard({ service }: { service: Service }) {
  return (
    <Link
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
          <span className="text-muted-foreground">{siteConfig.location.city}</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-navy">{service.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {service.shortDescription}
        </p>
      </div>
    </Link>
  );
}

function CompactServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon];

  return (
    <article className="group flex h-full min-w-0 flex-col rounded-2xl border border-border bg-white p-5 transition-transform hover:-translate-y-0.5">
      <div className="mb-3 flex items-start justify-between gap-2">
        <div className="inline-flex size-10 items-center justify-center rounded-xl bg-accent text-brand">
          <Icon className="size-5" aria-hidden />
        </div>
        {service.status === "placeholder" ? (
          <PlaceholderBadge label="Demo / Yer tutucu" />
        ) : null}
      </div>
      <h3 className="text-lg font-semibold text-navy">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.shortDescription}
      </p>
      <p className="mt-4 text-xs text-muted-foreground">
        Onay sonrası eklenebilir veya kaldırılabilir.
      </p>
    </article>
  );
}

export function ServicesSection() {
  const primary = getPrimaryServices();
  const placeholders = getPlaceholderServices();

  return (
    <Section
      id="hizmetler"
      title="Hizmetlerimiz"
      description="Öncelikli hizmetlerimiz su ve doğalgaz tesisatıdır. Diğer başlıklar müşteri onayı sonrası netleştirilecektir."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {primary.map((service, i) => (
          <Reveal key={service.id} delay={i * 0.05}>
            <FeaturedServiceCard service={service} />
          </Reveal>
        ))}
      </div>

      {placeholders.length > 0 ? (
        <div className="mt-12">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <h3 className="text-lg font-semibold text-navy">
              Olası ek hizmetler
            </h3>
            <PlaceholderBadge label="Onay bekliyor" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {placeholders.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.04}>
                <CompactServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      ) : null}
    </Section>
  );
}
