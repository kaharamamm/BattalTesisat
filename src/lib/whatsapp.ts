import { siteConfig } from "@/config/site";

export function getWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(
    message ?? siteConfig.contact.whatsappDefaultMessage,
  );
  const number = siteConfig.contact.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${text}`;
}

export function getPhoneHref(): string {
  return `tel:${siteConfig.contact.phoneHref}`;
}
