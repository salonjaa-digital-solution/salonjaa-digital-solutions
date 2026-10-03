import Image from "next/image";

/**
 * A real screenshot of a finished project, shown inside a plain browser frame.
 * Used for each Works panel in place of the old CSS placeholder dashboard.
 */
export function WorkScreenshot({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="h-auto w-full"
      />
    </div>
  );
}
