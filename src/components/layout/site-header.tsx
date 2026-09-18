"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/logo";
import { UtilityBar } from "@/components/layout/utility-bar";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Container } from "@/components/shared/container";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <UtilityBar />
      <div
        className={cn(
          "border-b border-border bg-white/95 backdrop-blur-md transition-shadow",
          scrolled && "shadow-sm",
        )}
      >
        <Container className="flex h-[72px] items-center justify-between gap-4 md:h-20">
          <Logo />
          <DesktopNav />
          <div className="flex items-center gap-2">
            <WhatsAppButton
              placement="navbar"
              label="WhatsApp'tan Ulaş"
              className="hidden lg:inline-flex"
            />
            <MobileNav />
          </div>
        </Container>
      </div>
    </header>
  );
}
