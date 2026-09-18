import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";
import { PageShell } from "@/components/shared/page-shell";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: `${siteConfig.company.name} çerez politikası yer tutucu sayfası.`,
  alternates: { canonical: "/cerez-politikasi" },
};

export default function CookiePolicyPage() {
  return (
    <PageShell tone="orange">
      <Container className="page-space max-w-3xl">
        <h1 className="text-3xl font-semibold text-navy">Çerez Politikası</h1>
        <p className="mt-4 text-muted-foreground">
          Şu anda sitede üçüncü taraf analitik çerezleri yapılandırılmamıştır.
          Google Analytics eklendiğinde bu sayfa güncellenecektir.
        </p>
        <p className="mt-4 text-muted-foreground">
          İletişim: {siteConfig.contact.email}
        </p>
      </Container>
    </PageShell>
  );
}
