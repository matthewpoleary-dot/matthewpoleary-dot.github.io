import { existsSync } from "node:fs";
import { join } from "node:path";
import { person } from "@/content/site";
import { asset } from "@/lib/site-url";

const inPublic = (file: string) => existsSync(join(process.cwd(), "public", file));

/**
 * The CV buttons point at /public/<cvFile> once it exists. Until then they
 * fall back to an email asking for it, so there is never a broken link.
 */
export function getCv() {
  const available = inPublic(person.cvFile);
  return available
    ? { available, href: asset(`/${person.cvFile}`), label: "View CV" }
    : {
        available,
        href: `mailto:${person.email}?subject=${encodeURIComponent("CV request")}`,
        label: "Request CV",
      };
}

/** Drop a photo at /public/matthew.jpg and the hero uses it instead of the Tally screenshot. */
export function getPhoto() {
  return inPublic("matthew.jpg") ? asset("/matthew.jpg") : null;
}

export type Cv = ReturnType<typeof getCv>;
