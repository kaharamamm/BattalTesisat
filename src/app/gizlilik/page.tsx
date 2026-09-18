import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";
import { PageShell } from "@/components/shared/page-shell";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: `${siteConfig.company.name} gizlilik politikası yer tutucu sayfası.`,
  alternates: { canonical: "/gizlilik" },
};

export default function PrivacyPage() {
  return (
    <PageShell tone="amber">
      <Container className="page-space prose prose-neutral max-w-3xl">
        <h1 className="text-3xl font-semibold text-navy">Gizlilik Politikası</h1>
        <p className="mt-4 text-muted-foreground">
          Battal Tesisat web sitesi üzerinden toplanabilecek iletişim talepleri
          yalnızca hizmet sunumu amacıyla değerlendirilecektir. Detaylı gizlilik
          politikası metni henüz hazırlanmamıştır.
        </p>
        <p className="mt-4 text-muted-foreground">
          İletişim: {siteConfig.contact.email}
        </p>
      </Container>
    </PageShell>
  );
}
