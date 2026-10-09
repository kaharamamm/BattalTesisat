import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";
import { PageShell } from "@/components/shared/page-shell";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: `${siteConfig.company.name} gizlilik politikası.`,
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
          Son güncelleme: 9 Ekim 2026
        </p>

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Bu Gizlilik Politikası, {company.name} (“Şirket”, “biz”) tarafından
          işletilen web sitesi üzerinden toplanan kişisel verilerin 6698 sayılı
          Kişisel Verilerin Korunması Kanunu (“KVKK”) ve ilgili mevzuat
          kapsamında nasıl işlendiğini açıklamak amacıyla hazırlanmıştır.
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

        <Section title="2. İşlenen kişisel veriler">
          <p>
            Sitemizde üyelik, ödeme veya hesap oluşturma sistemi bulunmamaktadır.
            Aşağıdaki veriler işlenebilir:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Kimlik ve iletişim bilgileri: ad-soyad, telefon numarası, e-posta
              adresi (bizimle iletişime geçtiğinizde)
            </li>
            <li>
              Mesaj içeriği: WhatsApp, telefon veya e-posta yoluyla ilettiğiniz
              talep ve açıklamalar
            </li>
            <li>
              Teknik veriler: IP adresi, tarayıcı türü, cihaz bilgisi, ziyaret
              edilen sayfalar, yaklaşık konum (Google Analytics kullanıldığında)
            </li>
          </ul>
        </Section>

        <Section title="3. Kişisel verilerin işlenme amaçları">
          <ul className="list-disc space-y-1 pl-5">
            <li>Hizmet taleplerinizi almak, yanıtlamak ve randevu planlamak</li>
            <li>Teklif sunmak ve müşteri ilişkilerini yürütmek</li>
            <li>
              Web sitesinin işleyişini sağlamak, güvenliğini korumak ve
              performansını iyileştirmek
            </li>
            <li>Yasal yükümlülükleri yerine getirmek</li>
          </ul>
        </Section>

        <Section title="4. Hukuki sebepler">
          <p>Kişisel verileriniz KVKK’nın 5. maddesi kapsamında;</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Açık rızanızın bulunması</li>
            <li>Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması</li>
            <li>Hukuki yükümlülüğümüzün yerine getirilmesi</li>
            <li>
              Meşru menfaatlerimiz için veri işlenmesinin zorunlu olması
              (site güvenliği ve temel analitik dahil)
            </li>
          </ul>
          <p>hukuki sebeplerine dayanılarak işlenebilir.</p>
        </Section>

        <Section title="5. Verilerin aktarılması">
          <p>
            Kişisel verileriniz satılmaz. Hizmetin sunulması için gerekli
            olduğu ölçüde aşağıdaki taraflarla paylaşılabilir:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              WhatsApp / Meta — iletişimi sizin başlatmanız halinde
            </li>
            <li>
              Google — Analytics, Haritalar veya Ads kullanıldığında (sunucular
              yurt dışında olabilir)
            </li>
            <li>Hosting / altyapı sağlayıcıları</li>
            <li>Yetkili kamu kurum ve kuruluşları — kanunen zorunlu hallerde</li>
          </ul>
        </Section>

        <Section title="6. Saklama süresi">
          <p>
            Kişisel veriler, işleme amacının gerektirdiği süre boyunca ve
            ilgili mevzuatta öngörülen zamanaşımı / saklama süreleri dikkate
            alınarak muhafaza edilir. Süre sonunda veriler silinir, yok edilir
            veya anonim hale getirilir.
          </p>
        </Section>

        <Section title="7. Veri güvenliği">
          <p>
            Kişisel verilerinizin yetkisiz erişim, kayıp veya kötüye kullanıma
            karşı korunması için makul teknik ve idari tedbirler alınmaktadır.
            Buna rağmen internet üzerinden yapılan iletimlerin tamamen
            risksiz olduğu garanti edilemez.
          </p>
        </Section>

        <Section title="8. KVKK kapsamındaki haklarınız">
          <p>
            KVKK’nın 11. maddesi uyarınca; kişisel verilerinizin işlenip
            işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme,
            amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde
            veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya
            yanlış işlenmişse düzeltilmesini isteme, silinmesini veya yok
            edilmesini isteme, otomatik sistemler ile analiz edilmesine itiraz
            etme ve kanuna aykırı işleme nedeniyle zararın giderilmesini talep
            etme haklarına sahipsiniz.
          </p>
          <p>
            Başvurularınızı{" "}
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
            </a>{" "}
            üzerinden iletebilirsiniz.
          </p>
        </Section>

        <Section title="9. Çerezler">
          <p>
            Web sitemizde çerez kullanımı hakkında detaylı bilgi için{" "}
            <Link
              href="/cerez-politikasi"
              className="font-medium text-brand hover:underline"
            >
              Çerez Politikası
            </Link>{" "}
            sayfamızı inceleyebilirsiniz.
          </p>
        </Section>

        <Section title="10. Politika değişiklikleri">
          <p>
            Bu politika zaman zaman güncellenebilir. Güncel sürüm her zaman bu
            sayfada yayınlanır. Önemli değişikliklerde makul ölçüde bilgilendirme
            yapılmaya çalışılır.
          </p>
        </Section>
      </Container>
    </PageShell>
  );
}
