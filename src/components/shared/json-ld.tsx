import { isPlaceholderText, siteConfig } from "@/config/site";

export function JsonLd() {
  const streetAddress = isPlaceholderText(siteConfig.location.address)
    ? undefined
    : siteConfig.location.address;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.company.name,
    alternateName: siteConfig.location.googleBusinessName || undefined,
    description: siteConfig.company.description,
    url: siteConfig.seo.siteUrl,
    telephone: siteConfig.contact.phoneHref,
    email: isPlaceholderText(siteConfig.contact.email)
      ? undefined
      : siteConfig.contact.email,
    image: `${siteConfig.seo.siteUrl}${siteConfig.seo.ogImage}`,
    employee: {
      "@type": "Person",
      name: siteConfig.company.ownerName,
      jobTitle: siteConfig.company.ownerTitle,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressCountry: "TR",
      streetAddress,
    },
  };

  if (siteConfig.location.googleMapsUrl) {
    data.hasMap = siteConfig.location.googleMapsUrl;
  }

  if (
    siteConfig.trust.googleRatingValue &&
    siteConfig.trust.googleReviewCount != null
  ) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: siteConfig.trust.googleRatingValue,
      reviewCount: siteConfig.trust.googleReviewCount,
      bestRating: "5",
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
