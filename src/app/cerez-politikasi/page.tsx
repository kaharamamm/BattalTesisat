import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";
import { PageShell } from "@/components/shared/page-shell";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: `${siteConfig.company.name} çerez politikası.`,
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
          Son güncelleme: 9 Ekim 2026
        </p>

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Bu Çerez Politikası, {company.name} web sitesinde kullanılan çerezler
          ve benzeri teknolojiler hakkında bilgilendirme amacıyla
          hazırlanmıştır. Kişisel verilerin işlenmesine ilişkin genel kurallar
          için{" "}
          <Link
            href="/gizlilik"
            className="font-medium text-brand hover:underline"
          >
            Gizlilik Politikası
          </Link>
          ’nı inceleyebilirsiniz.
        </p>

        <Section title="1. Çerez nedir?">
          <p>
            Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız
            tarafından cihazınıza kaydedilen küçük metin dosyalarıdır. Çerezler;
            sitenin düzgün çalışmasını sağlamak, tercihlerinizi hatırlamak veya
            ziyaret istatistiklerini ölçmek amacıyla kullanılabilir.
          </p>
        </Section>

        <Section title="2. Hangi tür çerezleri kullanıyoruz?">
          <p>
            <strong className="font-medium text-navy">Zorunlu çerezler</strong>
            <br />
            Sitenin temel işlevleri, güvenlik ve teknik işleyiş için gerekli
            olan çerezlerdir. Bu çerezler olmadan site düzgün çalışmayabilir.
          </p>
          <p>
            <strong className="font-medium text-navy">
              Performans / analitik çerezler
            </strong>
            <br />
            {analyticsEnabled ? (
              <>
                Sitemizde Google Analytics (GA4) kullanılmaktadır. Bu çerezler
                sayesinde sayfa görüntülemeleri, yaklaşık konum, cihaz ve
                tarayıcı bilgileri gibi istatistikler toplanabilir. Amaç,
                siteyi iyileştirmek ve kullanımını anlamaktır.
              </>
            ) : (
              <>
                Google Analytics yapılandırıldığında ziyaretçi sayısı, sayfa
                görüntülemeleri ve benzeri istatistikler toplanabilir. Şu an
                için analitik ölçümü yapılandırılmamış olabilir; yapılandırma
                sonrası bu madde geçerlidir.
              </>
            )}
          </p>
          <p>
            <strong className="font-medium text-navy">
              Üçüncü taraf çerezler
            </strong>
            <br />
            Sitede yer alan Google Haritalar gömülü haritası, WhatsApp
            yönlendirmeleri veya benzeri dış hizmetler, ilgili sağlayıcıların
            kendi çerezlerini kullanmasına yol açabilir.
          </p>
        </Section>

        <Section title="3. Çerezlerin kullanım amaçları">
          <ul className="list-disc space-y-1 pl-5">
            <li>Web sitesinin teknik olarak çalışmasını sağlamak</li>
            <li>Güvenliği artırmak ve hataları tespit etmek</li>
            <li>Ziyaretçi istatistiklerini ölçmek ve siteyi geliştirmek</li>
            <li>Harita ve iletişim gibi üçüncü taraf içerikleri sunmak</li>
          </ul>
        </Section>

        <Section title="4. Çerezleri nasıl yönetebilirsiniz?">
          <p>
            Tarayıcı ayarlarınızdan çerezleri silebilir, engelleyebilir veya
            belirli siteler için sınırlandırabilirsiniz. Çerezleri tamamen
            kapatmanız bazı özelliklerin çalışmasını engelleyebilir.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Google Chrome: Ayarlar → Gizlilik ve güvenlik → Üçüncü taraf çerezleri</li>
            <li>Mozilla Firefox: Ayarlar → Gizlilik ve Güvenlik</li>
            <li>Safari: Tercihler → Gizlilik</li>
            <li>Microsoft Edge: Ayarlar → Çerezler ve site izinleri</li>
          </ul>
          <p>
            Google’ın gizlilik uygulamaları için:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand hover:underline"
            >
              policies.google.com/privacy
            </a>
          </p>
        </Section>

        <Section title="5. İletişim">
          <p>
            Çerezler veya kişisel verilerinizle ilgili sorularınız için
            bizimle iletişime geçebilirsiniz:
          </p>
          <p>
            <a
              href={`mailto:${contact.email}`}
              className="font-medium text-brand hover:underline"
            >
              {contact.email}
            </a>
            {" · "}
            <a
              href={`tel:${contact.phoneHref}`}
              className="font-medium text-brand hover:underline"
            >
              {contact.phoneDisplay}
            </a>
          </p>
        </Section>

        <Section title="6. Değişiklikler">
          <p>
            Bu Çerez Politikası gerektiğinde güncellenebilir. Güncel metin bu
            sayfada yayınlanır.
          </p>
        </Section>
      </Container>
    </PageShell>
  );
}
