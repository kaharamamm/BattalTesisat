import Link from "next/link";
import { MapPin, Clock, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getPrimaryServices } from "@/data/services";
import { Container } from "@/components/shared/container";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { PhoneLink } from "@/components/shared/phone-link";
import { SocialLinks } from "@/components/shared/social-links";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const services = getPrimaryServices();

  return (
    <footer className="border-t border-border bg-navy text-white">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="min-w-0">
            <p className="text-lg font-semibold">{siteConfig.company.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {siteConfig.company.description}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-white/90 uppercase">
              Hizmetler
            </p>
            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/hizmetler/${service.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-brand"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-white/90 uppercase">
              Kurumsal
            </p>
            <ul className="mt-4 space-y-2">
              {[
                { href: "/hakkimizda", label: "Hakkımızda" },
                { href: "/projeler", label: "Projeler" },
                { href: "/sss", label: "SSS" },
                { href: "/iletisim", label: "İletişim" },
                { href: "/gizlilik", label: "Gizlilik" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-white/90 uppercase">
              İletişim
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <PhoneLink
                  placement="footer"
                  className="justify-start gap-2 text-white/80 hover:text-brand"
                />
              </li>
              <li>
                <WhatsAppButton
                  placement="footer"
                  label="WhatsApp"
                  variant="ghost"
                  className="justify-start px-0 text-white/80 hover:bg-transparent hover:text-brand"
                />
              </li>
              <li>
                <SocialLinks tone="dark" showEmpty />
              </li>
              <li className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                <span>
                  {siteConfig.location.address}
                  <br />
                  {siteConfig.location.city}
                </span>
              </li>
              <li className="flex gap-2">
                <Clock className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                <span>{siteConfig.workingHours.display}</span>
              </li>
              <li className="flex gap-2">
                <Mail className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-brand"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col gap-3 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.company.name}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/gizlilik" className="hover:text-brand">
              Gizlilik
            </Link>
            <Link href="/cerez-politikasi" className="hover:text-brand">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
