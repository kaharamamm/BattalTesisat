"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Mail } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { getPrimaryServices } from "@/data/services";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { cn } from "@/lib/utils";

const mobileLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/projeler", label: "Projeler" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const services = getPrimaryServices();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-white text-navy lg:hidden"
        aria-label="Menüyü aç"
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[min(100%,22rem)] p-0">
        <SheetHeader className="border-b border-border px-5 py-4 text-left">
          <SheetTitle className="text-navy">{siteConfig.company.name}</SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobil menü" className="flex flex-col gap-1 p-3">
          {mobileLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex min-h-11 items-center rounded-xl px-3 text-base font-medium",
                  active ? "bg-surface text-navy" : "text-navy/85 hover:bg-surface",
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="my-2 border-t border-border pt-2">
            <p className="px-3 py-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Hizmetler
            </p>
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/hizmetler/${service.slug}`}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-xl px-3 text-base text-navy/85 hover:bg-surface"
              >
                {service.name}
              </Link>
            ))}
          </div>
          <div className="mt-2 flex flex-col gap-2 border-t border-border p-3">
            <Link
              href={`mailto:${siteConfig.contact.email}`}
              onClick={() => setOpen(false)}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-white font-semibold text-navy"
            >
              <Mail className="size-4 text-brand" aria-hidden />
              {siteConfig.contact.email}
            </Link>
            <WhatsAppButton
              placement="navbar"
              className="w-full"
              label="WhatsApp"
            />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
