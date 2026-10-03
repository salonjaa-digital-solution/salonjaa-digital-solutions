/**
 * In-page links ("#services") only work on the homepage, where the sections
 * live. From any other route they must point back to the homepage ("/#services").
 * Pass the current pathname from usePathname().
 */
export function sectionHref(href: string, pathname: string | null) {
  if (!href.startsWith("#") || pathname === "/") return href;
  return `/${href}`;
}
