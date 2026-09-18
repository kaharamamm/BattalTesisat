import type { Metadata } from "next";
import { Mail, MapPin, Clock, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { PhoneLink } from "@/components/shared/phone-link";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { ContactMap } from "@/components/sections/contact-map";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "İletişim",
  description: `${siteConfig.company.name} iletişim bilgileri — telefon, WhatsApp ve konum.`,
  alternates: { canonical: "/iletisim" },
};

function ContactCard({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl p-1 transition-transform hover:-translate-y-0.5",
        className,
      )}
    >
      {/* Spinning conic fill — only the 3px frame shows around the white panel */}
      <div
        className="contact-card-orbit pointer-events-none absolute top-1/2 left-1/2 aspect-square w-[220%]"
        aria-hidden
      />
      <div className="relative z-10 rounded-[1.35rem] bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          {label}
        </p>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Container className="page-space">
      <h1 className="sr-only">İletişim</h1>

      <ContactMap />

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <ContactCard label="Telefon">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-brand">
              <Phone className="size-5" aria-hidden />
            </span>
            <PhoneLink
              placement="contact"
              showIcon={false}
              className="justify-start text-lg text-navy hover:text-brand"
            />
          </div>
        </ContactCard>

        <ContactCard label="WhatsApp">
          <WhatsAppButton placement="contact" label="WhatsApp'tan Yaz" />
        </ContactCard>

        <ContactCard label="E-posta" className="md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-brand">
              <Mail className="size-5" aria-hidden />
            </span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="min-w-0 break-all text-lg font-semibold text-navy hover:text-brand"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </ContactCard>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <ContactCard label="Adres">
          <div className="flex gap-3">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-brand">
              <MapPin className="size-5" aria-hidden />
            </span>
            <div className="min-w-0">
              <div className="mb-1">
                <PlaceholderBadge />
              </div>
              <p className="text-base text-navy">
                {siteConfig.location.address}
                <br />
                <span className="text-muted-foreground">
                  {siteConfig.location.city}
                </span>
              </p>
            </div>
          </div>
        </ContactCard>

        <ContactCard label="Çalışma Saatleri">
          <div className="flex gap-3">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-brand">
              <Clock className="size-5" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <div className="mb-3">
                <PlaceholderBadge />
              </div>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex justify-between gap-4 border-b border-border/70 pb-2">
                  <span>Hafta içi</span>
                  <span className="font-medium text-navy">
                    {siteConfig.workingHours.weekdays}
                  </span>
                </li>
                <li className="flex justify-between gap-4 border-b border-border/70 pb-2">
                  <span>Cumartesi</span>
                  <span className="font-medium text-navy">
                    {siteConfig.workingHours.saturday}
                  </span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Pazar</span>
                  <span className="font-medium text-navy">
                    {siteConfig.workingHours.sunday}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </ContactCard>
      </div>
    </Container>
  );
}
