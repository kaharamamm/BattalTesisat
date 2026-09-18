# Battal Tesisat

Ankara odaklı su ve doğalgaz tesisatı firması için statik Next.js web sitesi.

Production dosyaları `out/` klasörüne üretilir ve shared hosting / cPanel `public_html` altına yüklenebilir.

## Teknoloji

- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn/ui (Button, Sheet, Accordion, Card, Badge, Separator)
- Lucide React
- Motion (hafif reveal animasyonları)
- Static export (`output: "export"`)

Backend, API route, Server Action, veritabanı veya kimlik doğrulama **yoktur**.

## Kurulum

```bash
npm install
```

## Yerel geliştirme

```bash
npm run dev
```

## Production build (statik export)

```bash
npm run build
```

Başarılı build sonrası yüklemeye hazır dosyalar:

```text
out/
```

Bu klasörün içeriğini Linux/cPanel hosting üzerinde `public_html` (veya ilgili web kökü) içine yükleyebilirsiniz.

## Müşteri verileri nerede düzenlenir?

| Bilgi | Dosya |
| --- | --- |
| Firma adı, telefon, WhatsApp, e-posta, adres, çalışma saatleri, SEO, domain | `src/config/site.ts` |
| Hizmetler | `src/data/services.ts` |
| Projeler / fotoğraflar | `src/data/projects.ts` + `public/images/project-*.svg` |
| Google puanı / yorumlar | `src/config/site.ts` (`trust`) + `src/data/reviews.ts` |
| SSS | `src/data/faqs.ts` |
| Avantaj maddeleri | `src/data/benefits.ts` |
| Görseller | `public/images/` (aynı dosya adlarını koruyarak değiştirin) |

WhatsApp varsayılan mesajı: `src/config/site.ts` → `contact.whatsappDefaultMessage`

Analitik olayları: `src/lib/analytics.ts` (GA bağlanana kadar no-op)

## Customer data checklist

Aşağıdakiler hâlâ yer tutucudur ve canlıya çıkmadan önce gerçek değerlerle değiştirilmelidir:

- [ ] Telefon numarası (`phoneDisplay`, `phoneHref`)
- [ ] WhatsApp numarası (`whatsapp`)
- [ ] E-posta adresi
- [ ] Fiziksel adres
- [ ] Çalışma saatleri
- [ ] Google Maps URL + embed URL
- [ ] Google Business / yorumlar linki
- [ ] Google puanı ve yorum sayısı
- [ ] Gerçek müşteri yorumları
- [ ] Hizmet açıklamalarının müşteri onayı
- [ ] Proje fotoğrafları ve açıklamaları
- [ ] Firma hakkında metin / deneyim bilgisi
- [ ] Sosyal medya linkleri
- [ ] Production domain (`seo.siteUrl`) — şu an `https://example.com`
- [ ] OG / favicon nihai görselleri
- [ ] Gizlilik ve çerez politikası metinleri
- [ ] Google Analytics ölçüm ID’si (isteğe bağlı)

## Rotalar

- `/`
- `/hizmetler`
- `/hizmetler/su-tesisati`
- `/hizmetler/dogalgaz-tesisati`
- `/hakkimizda`
- `/projeler`
- `/sss`
- `/iletisim`
- `/gizlilik`
- `/cerez-politikasi`

## Notlar

- Sarı **Yer tutucu** rozetleri, sahte iş iddialarının canlı veri sanılmasını önlemek içindir.
- Floating WhatsApp yalnızca masaüstünde görünür; mobilde alt dönüşüm çubuğu kullanılır.
- `npm run build` sonrası `out/` klasörünü yükleyin; Vercel zorunlu değildir.
