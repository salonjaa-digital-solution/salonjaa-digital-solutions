/**
 * Search-facing copy: page titles, meta descriptions, and the landing-page
 * content for each service page. Keep claims here limited to what the rest of
 * the site already says — the FAQ answers and schema are built from this file,
 * so they must stay true to the plans, services, and about copy.
 */

export const homeSeo = {
  title: "Web Development & SEO in Bhubaneswar, Odisha | Salonjaa",
  description:
    "Custom websites, e-commerce & booking portals, apps and SEO from a digital studio in Bhubaneswar, Odisha. Domain and hosting handled by us, with WhatsApp support.",
};

export type ServicePage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  includes: string[];
  pricingNote?: string;
  faqs: { question: string; answer: string }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "web-development-bhubaneswar",
    name: "Web Development in Bhubaneswar",
    title: "Web Development Company in Bhubaneswar, Odisha | Salonjaa",
    description:
      "Custom websites, e-commerce stores, booking portals and web apps built in Bhubaneswar, Odisha. Mobile-first and SEO-ready, with domain, hosting and SSL managed by us.",
    eyebrow: "Web & app development",
    h1: "Web Development in Bhubaneswar, Odisha",
    intro:
      "Salonjaa Digital Solutions designs and builds custom, responsive websites, e-commerce stores, booking portals and web apps for businesses in Bhubaneswar and across Odisha. You talk directly to the developer building your site, not an account manager.",
    includes: [
      "Custom, responsive design built around your brand, not a recycled template",
      "Mobile-first layouts that work across phones, tablets and desktops",
      "React and Next.js builds with SEO structure from the first line of code",
      "Contact forms, WhatsApp, Google Maps and social media integration",
      "Domain, hosting and SSL set up and managed by us",
    ],
    pricingNote:
      "Plans start at ₹6,999 (MRP). The final price is confirmed after a discussion with your designer.",
    faqs: [
      {
        question: "Do you build e-commerce and booking websites?",
        answer:
          "Yes. We build e-commerce stores and booking platforms, alongside brochure websites, web apps and mobile apps.",
      },
      {
        question: "Do you handle domain and hosting?",
        answer:
          "Yes. We set up and manage your domain, hosting and SSL, so you have one point of contact for the whole site.",
      },
      {
        question: "Where are you based?",
        answer:
          "We are based in Khandagiri, Bhubaneswar. We work with clients across Odisha and nationwide.",
      },
      {
        question: "Are your websites SEO-friendly?",
        answer:
          "Yes. Every plan includes basic SEO, and higher plans add on-page and advanced SEO.",
      },
    ],
  },
  {
    slug: "seo-services-bhubaneswar",
    name: "SEO Services in Bhubaneswar",
    title: "SEO Services in Bhubaneswar, Odisha | Salonjaa",
    description:
      "SEO for Odisha businesses: on-page and technical SEO, structured data and content, built into every website we launch and offered as ongoing marketing support.",
    eyebrow: "SEO & digital marketing",
    h1: "SEO Services in Bhubaneswar, Odisha",
    intro:
      "Search visibility starts with how a website is built. Every site we launch from Bhubaneswar includes SEO, and we offer ongoing content, social and campaign support so customers in Odisha keep finding your business after launch.",
    includes: [
      "On-page SEO: page titles, meta descriptions, headings and internal links",
      "Technical SEO: sitemap, robots rules, clean URLs and mobile-friendly pages",
      "Structured data that tells search engines what your business does and where it is",
      "A blog section and content aimed at what your customers search for",
      "Google Ads and Meta Ads campaigns",
      "Analytics set up so you can see visits and enquiries",
    ],
    faqs: [
      {
        question: "Is SEO included in a website plan?",
        answer:
          "Yes. Plan A includes basic SEO, Plan B adds on-page SEO, and Plans C to E include advanced SEO.",
      },
      {
        question: "Can you help my business show up in local searches in Bhubaneswar?",
        answer:
          "Yes. We write page titles, descriptions and content around the places and services your customers search for. No agency can guarantee a specific Google ranking, but we build the signals search engines use to decide.",
      },
      {
        question: "How do you measure results?",
        answer:
          "Analytics is part of our marketing service, so you can see how many people visit, which pages they use and where enquiries come from.",
      },
    ],
  },
];

/** Routes that should never appear in search results. */
export const privateRoutes = ["/admin", "/account", "/login", "/forgot-password", "/reset-password", "/api/"];
