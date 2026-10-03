import type { Metadata } from "next";
import { ServiceLanding } from "@/components/seo/ServiceLanding";
import { servicePages } from "@/content/seo";
import { pageMetadata } from "@/lib/seo";

const page = servicePages.find((p) => p.slug === "web-development-bhubaneswar")!;

export const metadata: Metadata = pageMetadata({
  path: `/${page.slug}`,
  title: page.title,
  description: page.description,
});

export default function WebDevelopmentPage() {
  return <ServiceLanding page={page} />;
}
