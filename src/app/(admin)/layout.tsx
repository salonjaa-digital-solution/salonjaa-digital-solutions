import type { Metadata } from "next";

// Staff-only admin panel — keep it out of search results.
export const metadata: Metadata = { robots: { index: false, follow: false } };

// Bare pass-through — src/app/(admin)/admin/layout.tsx (AdminShell) owns
// all the real chrome now (sidebar, topbar). This just guarantees a themed
// background behind anything that renders before that, e.g. a 404.
export default function AdminGroupLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-void">{children}</div>;
}
