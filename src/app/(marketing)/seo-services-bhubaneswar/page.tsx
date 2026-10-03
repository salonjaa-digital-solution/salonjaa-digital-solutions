import type { Metadata } from "next";
import { ServiceLanding } from "@/components/seo/ServiceLanding";
import { servicePages } from "@/content/seo";
import { pageMetadata } from "@/lib/seo";

const page = servicePages.find((p) => p.slug === "seo-services-bhubaneswar")!;

export const metadata: Metadata = pageMetadata({
  path: `/${page.slug}`,
  title: page.title,
  description: page.description,
});

export default function SeoServicesPage() {
  return <ServiceLanding page={page} />;
}
