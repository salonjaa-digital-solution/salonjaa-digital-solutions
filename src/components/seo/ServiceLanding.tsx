import Link from "next/link";
import { GradientButton } from "@/components/ui/GradientButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionReveal, SectionRevealItem } from "@/components/ui/SectionReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { site, team } from "@/content/site";
import { contact } from "@/content/contact";
import type { ServicePage } from "@/content/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";
import { withWhatsappMessage } from "@/lib/whatsapp";

/** Shared landing-page layout for the local service pages (/web-development-bhubaneswar, etc.). */
export function ServiceLanding({ page }: { page: ServicePage }) {
  const whatsapp = withWhatsappMessage(team.kumar.whatsapp, contact.whatsappMessage);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(page),
          faqSchema(page.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: page.name, path: `/${page.slug}` },
          ]),
        ]}
      />

      <section className="relative pb-16 pt-36 sm:pt-44">
        <div className="container-app max-w-4xl">
          <SectionReveal>
            <SectionLabel>{page.eyebrow}</SectionLabel>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">{page.h1}</h1>
            <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">{page.intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <GradientButton href="/#contact" size="lg">
                Start Your Project
              </GradientButton>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="text-sm font-medium text-cyan hover:text-white"
              >
                Chat on WhatsApp →
              </a>
            </div>
          </SectionReveal>

          <SectionReveal as="div" stagger={0.08} className="mt-14">
            <h2 className="font-display text-2xl font-semibold text-white">What&apos;s included</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {page.includes.map((item) => (
                <SectionRevealItem key={item}>
                  <GlassCard className="h-full">
                    <p className="text-sm leading-relaxed text-text-secondary">{item}</p>
                  </GlassCard>
                </SectionRevealItem>
              ))}
            </div>
            {page.pricingNote && <p className="mt-6 text-sm text-text-muted">{page.pricingNote}</p>}
          </SectionReveal>

          <SectionReveal className="mt-14">
            <h2 className="font-display text-2xl font-semibold text-white">Frequently asked questions</h2>
            <dl className="mt-6 space-y-4">
              {page.faqs.map((faq) => (
                <div key={faq.question} className="card-glass p-5">
                  <dt className="font-display text-base font-semibold text-white">{faq.question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-text-secondary">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </SectionReveal>

          <SectionReveal className="mt-14 text-sm text-text-muted">
            <p>
              Explore more: <Link href="/#services" className="text-cyan hover:text-white">all services</Link>,{" "}
              <Link href="/#plans" className="text-cyan hover:text-white">plans and pricing</Link>, and{" "}
              <Link href="/#work" className="text-cyan hover:text-white">recent work</Link>. Based in{" "}
              {site.address.line2}.
            </p>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
