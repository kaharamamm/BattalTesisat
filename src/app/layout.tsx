import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MobileCtaBar } from "@/components/layout/mobile-cta-bar";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { JsonLd } from "@/components/shared/json-ld";
import { AnalyticsScript } from "@/components/shared/analytics-script";
import { DevSignature } from "@/components/shared/dev-signature";
import { builderSignature } from "@/config/signature";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s | ${siteConfig.company.name}`,
  },
  description: siteConfig.seo.defaultDescription,
  applicationName: siteConfig.company.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.company.name,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.company.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [siteConfig.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const sourceComment = ` ${builderSignature.name} — ${builderSignature.message} `;

  return (
    <html
      lang="tr"
      className={`${inter.variable} h-full`}
      data-builder={builderSignature.name}
    >
      <body className="flex min-h-full flex-col bg-white font-sans">
        <div
          dangerouslySetInnerHTML={{ __html: `<!--${sourceComment}-->` }}
          style={{ display: "none" }}
          aria-hidden
        />
        <AnalyticsScript />
        <JsonLd />
        <DevSignature />
        <SiteHeader />
        <main className="flex-1 bg-white pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
          {children}
        </main>
        <SiteFooter />
        <FloatingWhatsApp />
        <MobileCtaBar />
      </body>
    </html>
  );
}
