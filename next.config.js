/** @type {import('next').NextConfig} */
// The GitHub Pages preview serves the site under /quran-akademie, while the
// live site at onlinekoran.de serves from the root. Keep basePath and the
// NEXT_PUBLIC_BASE_PATH env value in one place so they can never drift apart.
const basePath =
  process.env.GITHUB_PAGES === "true"
    ? process.env.BASE_PATH || "/quran-akademie"
    : "";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
