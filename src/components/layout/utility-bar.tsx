import Link from "next/link";
import { MapPin, Clock, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";

export function UtilityBar() {
  return (
    <div className="hidden border-b border-border bg-navy text-white/90 md:block">
      <Container className="flex h-10 items-center justify-between gap-4 text-xs lg:text-sm">
        <div className="flex min-w-0 items-center gap-6">
          <span className="inline-flex min-w-0 items-center gap-1.5">
            <MapPin className="size-3.5 shrink-0 text-brand" aria-hidden />
            <span className="truncate">
              {siteConfig.location.city} — {siteConfig.location.districtPlaceholder}
            </span>
          </span>
          <span className="inline-flex min-w-0 items-center gap-1.5">
            <Clock className="size-3.5 shrink-0 text-brand" aria-hidden />
            <span className="truncate">{siteConfig.workingHours.display}</span>
          </span>
        </div>
        <Link
          href={`mailto:${siteConfig.contact.email}`}
          className="inline-flex shrink-0 items-center gap-1.5 font-medium text-white hover:text-brand focus-visible:outline-brand"
        >
          <Mail className="size-3.5 text-brand" aria-hidden />
          {siteConfig.contact.email}
        </Link>
      </Container>
    </div>
  );
}
