"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "@/lib/gsap";
import { navLinks } from "@/content/nav";
import { sectionHref } from "@/lib/nav";
import { GradientButton } from "@/components/ui/GradientButton";
import { AccountNavLink } from "./AccountNavLink";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    if (open) {
      gsap.fromTo(panel, { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      className="card-glass container-app fixed inset-x-4 top-20 z-50 flex flex-col gap-1 p-4 md:hidden"
    >
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={sectionHref(link.href, pathname)}
          onClick={onClose}
          data-cursor-hover
          className="rounded-lg px-3 py-2.5 font-medium text-text-secondary transition-colors hover:bg-white/5 hover:text-white"
        >
          {link.label}
        </a>
      ))}
      <AccountNavLink
        onClick={onClose}
        className="rounded-lg px-3 py-2.5 font-medium text-text-secondary transition-colors hover:bg-white/5 hover:text-white"
      />
      <div className="mt-2">
        <GradientButton href={sectionHref("#contact", pathname)} onClick={onClose} className="w-full">
          Book A Free Call
        </GradientButton>
      </div>
    </div>
  );
}
