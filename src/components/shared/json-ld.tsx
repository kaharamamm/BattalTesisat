import { siteConfig } from "@/config/site";

export function JsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.company.name,
    description: siteConfig.company.description,
    url: siteConfig.seo.siteUrl,
    telephone: siteConfig.contact.phoneHref,
    email: siteConfig.contact.email,
    image: `${siteConfig.seo.siteUrl}${siteConfig.seo.ogImage}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressCountry: "TR",
      streetAddress: siteConfig.location.address.includes("PLACEHOLDER")
        ? undefined
        : siteConfig.location.address.includes("buraya gelecek")
          ? undefined
          : siteConfig.location.address,
    },
  };

  if (siteConfig.location.googleMapsUrl) {
    data.hasMap = siteConfig.location.googleMapsUrl;
  }

  // Intentionally omit aggregateRating / review until real Google data exists.

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
