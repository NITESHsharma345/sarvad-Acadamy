import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

export function createMetadata({
  title,
  description,
  path = "",
  image,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`;

  const fullDescription =
    description || SITE_CONFIG.description;

  const url = `${SITE_CONFIG.url}${path}`;
  const ogImage = image || `${SITE_CONFIG.url}/og-image.jpg`;

  return {
    title: fullTitle,
    description: fullDescription,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE_CONFIG.phone,
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
};
