# Ada Tesisat&Hırdavat

Eskişehir Tepebaşı odaklı su ve doğalgaz tesisatı / hırdavat firması için statik Next.js web sitesi.

Production dosyaları `out/` klasörüne üretilir ve shared hosting / cPanel `public_html` altına yüklenebilir.

## Teknoloji

- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn/ui (Button, Sheet, Accordion, Card, Badge, Separator)
- Lucide React
- Motion (hafif reveal animasyonları)
- Static export (`output: "export"`)

Backend, API route, Server Action, veritabanı, Firebase veya kimlik doğrulama **yoktur**.

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

## Müşteri verileri nerede düzenlenir?

| Bilgi | Dosya |
| --- | --- |
| Firma adı, usta, telefon, WhatsApp, e-posta, adres, çalışma saatleri, SEO, domain | `src/config/site.ts` |
| Hizmetler | `src/data/services.ts` |
| Projeler / fotoğraflar | `src/data/projects.ts` + `public/images/project-*.svg` |
| Google puanı / yorumlar | `src/config/site.ts` (`trust`) + `src/data/reviews.ts` + `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` |
| SSS | `src/data/faqs.ts` |
| Avantaj maddeleri | `src/data/benefits.ts` |
| Görseller | `public/images/` (aynı dosya adlarını koruyarak değiştirin) |

WhatsApp varsayılan mesajı: `src/config/site.ts` → `contact.whatsappDefaultMessage`

Google yorumları (canlı): Ana Sayfa her ziyarette Google Places üzerinden puan ve en yüksek puanlı yorumları çeker (`NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`). Anahtar yoksa `src/data/reviews.ts` yedek olarak kullanılır. Google API en fazla 5 yorum döndürür; liste döngüde gösterilir ve fare ile sürüklenerek kaydırılabilir.

## Customer data checklist

- [x] Telefon / WhatsApp
- [x] Google Maps URL + embed URL (Eskişehir Tepebaşı)
- [x] Google Business linki
- [x] Usta / sahip adı (İsmail Usta)
- [x] Fiziksel adres
- [x] Marka adı (Ada Tesisat&Hırdavat)
- [ ] E-posta adresi
- [ ] Çalışma saatleri
- [ ] Google puanı ve yorum sayısı (`trust`)
- [ ] Gerçek müşteri yorumları (`src/data/reviews.ts`)
- [ ] Hizmet açıklamalarının müşteri onayı
- [ ] Proje fotoğrafları ve açıklamaları
- [ ] Deneyim / tamamlanan iş sayıları
- [ ] Sosyal medya linkleri
- [ ] Production domain (`seo.siteUrl`)
- [ ] OG / favicon nihai görselleri
- [ ] Gizlilik ve çerez politikası metinleri
- [ ] Google Analytics ölçüm ID’si (`NEXT_PUBLIC_GA_MEASUREMENT_ID`)

## Bağlantılar (canlı)

| Kanal | Değer |
| --- | --- |
| Telefon / WhatsApp | +90 552 018 18 97 |
| Google Maps | https://maps.app.goo.gl/Bi19ZQ3URZdfmYnTA |
| Adres | Çamlıca, Gündüz Ökçün Blv., 26100 Tepebaşı/Eskişehir |
| Usta | İsmail Usta |

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
