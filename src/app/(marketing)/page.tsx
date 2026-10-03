import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Testimonials } from "@/components/sections/Testimonials";
import { Plans } from "@/components/sections/Plans";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeSeo } from "@/content/seo";
import { organizationSchema, pageMetadata, websiteSchema } from "@/lib/seo";

// PLACEHOLDER CHECKLIST — replace before launch:
// - Plans pricing (src/content/plans.ts): confirm current INR pricing is still accurate.
// - Testimonials (src/content/testimonials.ts): invented quotes/names — swap for real client testimonials.
//   Do NOT add Review / AggregateRating schema until these are real.
// - Contact form backend (src/app/api/contact/route.ts): requires RESEND_API_KEY,
//   CONTACT_FROM_EMAIL, CONTACT_TO_KUMAR, CONTACT_TO_SAROJ env vars — see .env.local.example.
// - site.url (src/content/site.ts): confirm the final production domain.
export const metadata: Metadata = pageMetadata({
  path: "/",
  title: homeSeo.title,
  description: homeSeo.description,
});

export default function Home() {
  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema()]} />
      <Hero />
      <About />
      <Services />
      <Work />
      <Testimonials />
      <Plans />
      <Team />
      <Contact />
    </>
  );
}
