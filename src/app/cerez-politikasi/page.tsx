import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";
import { PageShell } from "@/components/shared/page-shell";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: `${siteConfig.company.name} çerez politikası — sitede kullanılan çerezler hakkında bilgilendirme.`,
  alternates: { canonical: "/cerez-politikasi" },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-semibold text-navy">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

export default function CookiePolicyPage() {
  const { company, contact } = siteConfig;
  const analyticsEnabled = Boolean(
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim(),
  );

  return (
    <PageShell>
      <Container className="page-space max-w-3xl">
        <h1 className="text-3xl font-semibold text-navy">Çerez Politikası</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Son güncelleme: 18 Eylül 2026
        </p>

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Bu sayfa, {company.name} web sitesinde çerezlerin nasıl
          kullanıldığını açıklar. Kişisel verilerle ilgili genel bilgilendirme
          için{" "}
          <Link
            href="/gizlilik"
            className="font-medium text-brand hover:underline"
          >
            Gizlilik Politikası
          </Link>
          ’na bakın.
        </p>

        <Section title="1. Çerez nedir?">
          <p>
            Çerezler, web sitesini ziyaret ettiğinizde tarayıcınıza kaydedilen
            küçük metin dosyalarıdır. Siteyi çalıştırmak, tercihleri hatırlamak
            veya ziyaret istatistiklerini ölçmek için kullanılabilir.
          </p>
        </Section>

        <Section title="2. Bu sitede hangi çerezler kullanılıyor?">
          <p>
            <strong className="font-medium text-navy">Zorunlu / teknik</strong>
            <br />
            Sitenin temel çalışması için gereken teknik kayıtlar. Bunlar
            olmadan site düzgün çalışmayabilir; pazarlama amacı taşımazlar.
          </p>

          <p>
            <strong className="font-medium text-navy">Analitik (Google Analytics)</strong>
            <br />
            {analyticsEnabled ? (
              <>
                Sitede Google Analytics (GA4) aktiftir. Ziyaretçi sayısı, hangi
                sayfaların görüldüğü, yaklaşık konum ve cihaz bilgisi gibi
                istatistikler toplanabilir. Bu veriler siteyi iyileştirmek için
                kullanılır.
              </>
            ) : (
              <>
                Google Analytics şu an yapılandırılmamıştır. Analytics
                bağlandığında bu tür çerezler devreye girebilir; bu sayfa buna
                göre geçerlidir.
              </>
            )}
          </p>

          <p>
            <strong className="font-medium text-navy">Üçüncü taraf içerikler</strong>
            <br />
            İletişim sayfasındaki Google Haritalar gömülü haritası ve WhatsApp
            yönlendirmeleri, ilgili şirketlerin kendi çerezlerini
            kullanmasına yol açabilir.
          </p>
        </Section>

        <Section title="3. Çerezleri nasıl yönetebilirsiniz?">
          <p>
            Tarayıcı ayarlarından çerezleri silebilir veya engelleyebilirsiniz.
            Engelleme bazı site özelliklerini bozabilir.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Chrome: Ayarlar → Gizlilik ve güvenlik → Çerezler</li>
            <li>Safari: Tercihler → Gizlilik</li>
            <li>Firefox: Ayarlar → Gizlilik ve Güvenlik</li>
            <li>Edge: Ayarlar → Çerezler ve site izinleri</li>
          </ul>
          <p>
            Google Analytics için ek bilgi:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand hover:underline"
            >
              Google Gizlilik Politikası
            </a>
          </p>
        </Section>

        <Section title="4. İletişim">
          <p>
            Sorularınız için:{" "}
            <a
              href={`mailto:${contact.email}`}
              className="font-medium text-brand hover:underline"
            >
              {contact.email}
            </a>{" "}
            ·{" "}
            <a
              href={`tel:${contact.phoneHref}`}
              className="font-medium text-brand hover:underline"
            >
              {contact.phoneDisplay}
            </a>
          </p>
        </Section>
      </Container>
    </PageShell>
  );
}
