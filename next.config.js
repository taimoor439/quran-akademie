/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath:
    process.env.GITHUB_PAGES === "true"
      ? process.env.BASE_PATH || "/quran-akademie"
      : "",
};

module.exports = nextConfig;
