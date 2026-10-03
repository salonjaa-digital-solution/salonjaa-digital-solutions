import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: `${site.name} — Web Development & SEO in Bhubaneswar, Odisha`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  authors: [{ name: "Kumar Prasannajit Sahu" }, { name: "Saroj Kumar Sahu" }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { telephone: true, email: true, address: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    title: `${site.name} — Web Development & SEO in Bhubaneswar, Odisha`,
    description: site.ogDescription,
    siteName: site.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Web Development & SEO in Bhubaneswar, Odisha`,
    description: site.ogDescription,
  },
  // Set GOOGLE_SITE_VERIFICATION to the token from Google Search Console to verify ownership.
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  // Favicon is picked up automatically from src/app/icon.png (Next.js file convention).
};

// Bare shell only — fonts, global CSS, metadata. The marketing chrome
// (Navbar/Footer/CustomCursor/Lenis/GSAP smooth-scroll) lives in
// (marketing)/layout.tsx instead, since the client portal and admin panel
// under (portal) and (admin) want none of it.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}>
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-1000 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
