import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";
import { PageShell } from "@/components/shared/page-shell";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: `${siteConfig.company.name} gizlilik politikası — KVKK kapsamında kişisel verilerin işlenmesi.`,
  alternates: { canonical: "/gizlilik" },
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

export default function PrivacyPage() {
  const { company, contact, location } = siteConfig;

  return (
    <PageShell>
      <Container className="page-space max-w-3xl">
        <h1 className="text-3xl font-semibold text-navy">Gizlilik Politikası</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Son güncelleme: 18 Eylül 2026
        </p>

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Bu gizlilik politikası, {company.name} (“biz”) tarafından işletilen
          web sitesi üzerinden toplanan kişisel verilerin{" "}
          <strong className="font-medium text-navy">
            6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK)
          </strong>{" "}
          kapsamında nasıl işlendiğini açıklar.
        </p>

        <Section title="1. Veri sorumlusu">
          <p>
            <strong className="font-medium text-navy">{company.name}</strong>
            <br />
            {location.address}
            <br />
            {location.city}
          </p>
          <p>
            Telefon:{" "}
            <a
              href={`tel:${contact.phoneHref}`}
              className="font-medium text-brand hover:underline"
            >
              {contact.phoneDisplay}
            </a>
            <br />
            E-posta:{" "}
            <a
              href={`mailto:${contact.email}`}
              className="font-medium text-brand hover:underline"
            >
              {contact.email}
            </a>
          </p>
        </Section>

        <Section title="2. Hangi verileri işliyoruz?">
          <p>Sitemizde üyelik veya ödeme sistemi yoktur. İşlenebilecek veriler:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Telefon veya WhatsApp ile bize ulaştığınızda paylaştığınız ad,
              telefon numarası ve mesaj içeriği
            </li>
            <li>
              E-posta ile yazarsanız e-posta adresiniz ve mesaj içeriği
            </li>
            <li>
              Siteyi ziyaretinizde teknik veriler (IP adresi, tarayıcı türü,
              ziyaret edilen sayfalar, yaklaşık konum) — Google Analytics
              kullanıldığında
            </li>
          </ul>
        </Section>

        <Section title="3. Verileri neden işliyoruz?">
          <ul className="list-disc space-y-1 pl-5">
            <li>Hizmet taleplerinizi yanıtlamak ve randevu planlamak</li>
            <li>Teklif vermek ve müşteri ilişkilerini yürütmek</li>
            <li>
              Site performansını ölçmek ve iyileştirmek (analitik, açık
              rıza / meşru menfaat kapsamında)
            </li>
            <li>Yasal yükümlülüklerimizi yerine getirmek</li>
          </ul>
        </Section>

        <Section title="4. Verileri kimlerle paylaşıyoruz?">
          <p>
            Verilerinizi satmayız. Yalnızca hizmet için gerekli durumlarda şu
            taraflarla paylaşılabilir:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong className="font-medium text-navy">WhatsApp / Meta</strong> —
              mesajlaşmayı sizin başlatmanız halinde
            </li>
            <li>
              <strong className="font-medium text-navy">Google</strong> — Analytics,
              Haritalar veya Ads kullanıldığında (sunucuları yurt dışında olabilir)
            </li>
            <li>
              <strong className="font-medium text-navy">Hosting sağlayıcısı</strong>{" "}
              — sitenin barındırılması için
            </li>
            <li>Yetkili kamu kurumları — kanunen zorunlu hallerde</li>
          </ul>
        </Section>

        <Section title="5. Saklama süresi">
          <p>
            İletişim kayıtları, talebiniz sonuçlanana ve yasal saklama
            süreleri dolana kadar tutulur. Analitik veriler ilgili sağlayıcının
            saklama politikasına göre tutulur.
          </p>
        </Section>

        <Section title="6. Haklarınız (KVKK md. 11)">
          <p>Kişisel verilerinizle ilgili olarak:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>İşlenip işlenmediğini öğrenme</li>
            <li>İşlenmişse bilgi talep etme</li>
            <li>Amacına uygun kullanılıp kullanılmadığını öğrenme</li>
            <li>Düzeltme veya silme talep etme</li>
            <li>İşlemeye itiraz etme</li>
          </ul>
          <p>
            Talepleriniz için:{" "}
            <a
              href={`mailto:${contact.email}`}
              className="font-medium text-brand hover:underline"
            >
              {contact.email}
            </a>{" "}
            veya{" "}
            <a
              href={`tel:${contact.phoneHref}`}
              className="font-medium text-brand hover:underline"
            >
              {contact.phoneDisplay}
            </a>
          </p>
        </Section>

        <Section title="7. Çerezler">
          <p>
            Çerez kullanımı hakkında detay için{" "}
            <Link
              href="/cerez-politikasi"
              className="font-medium text-brand hover:underline"
            >
              Çerez Politikası
            </Link>{" "}
            sayfamıza bakın.
          </p>
        </Section>

        <Section title="8. Değişiklikler">
          <p>
            Bu politika güncellenebilir. Güncel metin her zaman bu sayfada
            yayınlanır.
          </p>
        </Section>
      </Container>
    </PageShell>
  );
}
