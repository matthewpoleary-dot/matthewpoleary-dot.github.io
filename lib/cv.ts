import { existsSync } from "node:fs";
import { join } from "node:path";
import { person } from "@/content/site";

/**
 * The CV buttons point at /public/<cvFile> once it exists. Until then they
 * fall back to an email asking for it, so there is never a broken link.
 */
export function getCv() {
  const available = existsSync(join(process.cwd(), "public", person.cvFile));
  return available
    ? { available, href: `/${person.cvFile}`, label: "View CV" }
    : {
        available,
        href: `mailto:${person.email}?subject=${encodeURIComponent("CV request")}`,
        label: "Request CV",
      };
}

export type Cv = ReturnType<typeof getCv>;
