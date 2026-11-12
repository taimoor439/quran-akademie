/**
 * Prefix a public/ asset path with the site's basePath.
 *
 * The GitHub Pages preview serves the site under "/quran-akademie", while
 * the live site at onlinekoran.de serves from the root. NEXT_PUBLIC_BASE_PATH
 * is set to the same value as `basePath` in next.config.js, so the two can
 * never drift apart. Use this for every hard-coded public/ asset URL
 * (logo images, favicon, ...) — never hard-code the basePath.
 */
export function assetPath(p: string): string {
  const path = p.startsWith("/") ? p : `/${p}`;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
