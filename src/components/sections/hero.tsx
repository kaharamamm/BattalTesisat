import Image from "next/image";
import {
  ShieldCheck,
  MapPin,
  Award,
  Briefcase,
  MapPinned,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { Reveal } from "@/components/shared/reveal";
import { AnimatedWash } from "@/components/shared/animated-wash";
import { HeroGoogleRating } from "@/components/sections/hero-google-rating";

const trustItems = [
  {
    icon: Award,
    label: siteConfig.trust.experienceLabel,
    value: siteConfig.trust.experienceValue,
    placeholder: true,
  },
  {
    icon: Briefcase,
    label: siteConfig.trust.completedJobsLabel,
    value: siteConfig.trust.completedJobsValue,
    placeholder: true,
  },
  {
    icon: MapPinned,
    label: siteConfig.trust.serviceAreaLabel,
    value: siteConfig.trust.serviceAreaValue,
    placeholder: false,
  },
];

/** Hero + trust cards share one continuous wash (unique to Ana Sayfa). */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <AnimatedWash variant="hero" excludeWarm />

      <Container className="relative grid items-center gap-10 pt-12 md:gap-12 md:pt-16 lg:grid-cols-2 lg:pt-20">
        <Reveal className="min-w-0">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-brand">
            <MapPin className="size-4" aria-hidden />
            {siteConfig.location.city} • {siteConfig.company.ownerName}
          </p>
          <h1 className="text-[2rem] leading-tight text-balance sm:text-5xl lg:text-[3.5rem]">
            Su ve Doğalgaz Tesisatında Profesyonel Çözümler
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            {siteConfig.company.name} olarak {siteConfig.company.ownerName} ile{" "}
            {siteConfig.location.city}
            &apos;de su ve doğalgaz tesisatı hizmeti sunuyoruz. Hemen arayın veya
            WhatsApp&apos;tan yazın.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-brand" aria-hidden />
              Güvenilir iletişim odaklı yaklaşım
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" aria-hidden />
            <span>Yerel {siteConfig.location.city} hizmet odağı</span>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="min-w-0">
          <div className="relative">
            <div
              className="absolute -inset-3 -z-10 rounded-[1.5rem] bg-gradient-to-br from-sky-200/45 via-transparent to-cyan-200/30"
              aria-hidden
            />
            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
              <Image
                src="/images/hero.svg"
                alt={`${siteConfig.company.name} proje ve teknisyen görsel alanı`}
                width={1200}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </Container>

      <Container className="relative pt-10 pb-12 md:pt-12 md:pb-16 lg:pb-20">
        <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0} className="h-full">
            <HeroGoogleRating />
          </Reveal>
          {trustItems.map((item, index) => (
            <Reveal
              key={item.label}
              delay={(index + 1) * 0.05}
              className="h-full"
            >
              <div className="flex h-full min-h-[9.5rem] flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition-transform hover:-translate-y-0.5">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <item.icon className="size-5 text-brand" aria-hidden />
                  {item.placeholder ? <PlaceholderBadge /> : null}
                </div>
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {item.label}
                </p>
                <p className="mt-1 flex-1 text-base font-semibold text-navy">
                  {item.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
