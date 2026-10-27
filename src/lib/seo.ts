import type { Metadata } from "next";
import { site, team } from "@/content/site";
import type { ServicePage } from "@/content/seo";

/** Entity @id values let every JSON-LD block point at the same organization node. */
const orgId = `${site.url}/#organization`;

export function pageMetadata({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", title, description, url: path, siteName: site.name, locale: "en_IN" },
    twitter: { card: "summary_large_image", title, description },
  };
}

const phoneE164 = team.kumar.phoneHref.replace("tel:", "");

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": orgId,
    name: site.name,
    alternateName: [site.shortName, "Salonjaa Digital Solutions Bhubaneswar"],
    url: site.url,
    logo: `${site.url}/images/logo-mark.png`,
    description: site.description,
    telephone: phoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: "Bhubaneswar",
      addressRegion: "Odisha",
      postalCode: site.address.postalCode,
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", ...site.geo },
    hasMap: site.mapsUrl,
    areaServed: [
      { "@type": "City", name: "Bhubaneswar" },
      { "@type": "State", name: "Odisha" },
      { "@type": "Country", name: "India" },
    ],
    founder: [
      {
        "@type": "Person",
        name: team.kumar.name,
        jobTitle: team.kumar.role,
        sameAs: [team.kumar.github, team.kumar.linkedin],
      },
      {
        "@type": "Person",
        name: team.saroj.name,
        jobTitle: team.saroj.role,
      },
    ],
    sameAs: [site.mapsUrl, team.kumar.github, team.kumar.linkedin],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    // Google's site-name system reads name/alternateName from this node on the homepage.
    alternateName: [site.shortName, "salonjaa.com"],
    inLanguage: "en-IN",
    publisher: { "@id": orgId },
  };
}

export function serviceSchema(page: ServicePage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.name,
    description: page.description,
    url: `${site.url}/${page.slug}`,
    serviceType: page.eyebrow,
    provider: { "@id": orgId },
    areaServed: [
      { "@type": "City", name: "Bhubaneswar" },
      { "@type": "State", name: "Odisha" },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
