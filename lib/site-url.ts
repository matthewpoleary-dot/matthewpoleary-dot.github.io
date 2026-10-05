/** Set NEXT_PUBLIC_SITE_URL once the domain is sorted. The Pages workflow sets it automatically. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a file in /public with the base path, so links work under a sub-path too. */
export const asset = (path: string) => `${basePath}${path}`;
