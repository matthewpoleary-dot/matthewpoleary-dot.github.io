import type { NextConfig } from "next";

// Static export so the site can be served from GitHub Pages (or any static host).
// NEXT_PUBLIC_BASE_PATH is set by the Pages workflow when the site lives under a
// sub-path (e.g. /matthewsportfolio); it is empty for a <username>.github.io repo.
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
