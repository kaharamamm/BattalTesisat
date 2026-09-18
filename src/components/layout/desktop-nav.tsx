"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { getPrimaryServices } from "@/data/services";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler", hasChildren: true },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/projeler", label: "Projelerimiz" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export function DesktopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const wrapRef = useRef<HTMLLIElement>(null);
  const services = getPrimaryServices();

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <nav aria-label="Ana menü" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {links.map((link) => {
          const active =
            link.href === "/"
              ? pathname === "/"
              : pathname === link.href || pathname.startsWith(`${link.href}/`);

          if ("hasChildren" in link && link.hasChildren) {
            return (
              <li key={link.href} ref={wrapRef} className="relative">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={menuId}
                  aria-haspopup="menu"
                  onClick={() => setOpen((v) => !v)}
                  className={cn(
                    "inline-flex min-h-11 items-center gap-1 rounded-lg px-3 text-sm font-medium transition-colors",
                    active || open
                      ? "bg-surface text-navy"
                      : "text-navy/80 hover:bg-surface hover:text-navy",
                  )}
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "size-4 transition-transform",
                      open && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
                {open ? (
                  <ul
                    id={menuId}
                    role="menu"
                    className="absolute top-full left-0 z-50 mt-1 min-w-56 rounded-xl border border-border bg-white p-2 shadow-lg"
                  >
                    {services.map((service) => (
                      <li key={service.id} role="none">
                        <Link
                          role="menuitem"
                          href={`/hizmetler/${service.slug}`}
                          className="block rounded-lg px-3 py-2.5 text-sm text-navy/80 hover:bg-surface hover:text-navy"
                          onClick={() => setOpen(false)}
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          }

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-medium transition-colors",
                  active
                    ? "bg-surface text-navy"
                    : "text-navy/80 hover:bg-surface hover:text-navy",
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
