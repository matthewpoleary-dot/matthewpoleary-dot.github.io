import { person } from "@/content/site";
import type { Cv } from "@/lib/cv";
import { ArrowUpRight } from "./Icons";

export default function Contact({ cv }: { cv: Cv }) {
  const links = [
    { k: "Email", v: person.email, href: `mailto:${person.email}`, external: false },
    { k: "LinkedIn", v: "Matthew O'Leary", href: person.linkedin, external: true },
    { k: "GitHub", v: person.githubHandle, href: person.github, external: true },
    { k: "CV", v: cv.available ? "PDF, one page" : "Sent on request", href: cv.href, external: cv.available },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-ink px-4 py-24 text-paper sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="label text-paper/75" data-reveal>
          <span className="text-accent-soft">07</span> / Contact
        </p>
        <h2 id="contact-title" data-reveal className="display mt-6 text-[clamp(2.6rem,7vw,5.5rem)]">
          Hiring for summer 2027?
          <span className="block italic text-paper/75">I&apos;d like to hear about it.</span>
        </h2>
        <p data-reveal className="mt-6 max-w-xl text-lg leading-relaxed text-paper/75">
          Business, technology, or the roles that sit between them. Email is the quickest way to reach me, in Dublin now
          and in Montreal from January.
        </p>

        <a
          href={`mailto:${person.email}?subject=${encodeURIComponent("Summer 2027 internship")}`}
          data-reveal
          className="group mt-10 inline-flex max-w-full items-center gap-3 border-b border-paper/30 pb-2 text-[clamp(1.25rem,4vw,2.25rem)] transition-colors hover:border-paper"
        >
          <span className="truncate">{person.email}</span>
          <ArrowUpRight className="size-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>

        <ul className="mt-16 grid border-t border-paper/15 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((l) => (
            <li key={l.k} className="border-b border-paper/15 lg:border-b-0">
              <a
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noopener" } : {})}
                className="flex min-h-11 items-center justify-between gap-3 py-5 pr-4 transition-colors hover:text-accent-soft"
              >
                <span>
                  <span className="label block text-paper/70">{l.k}</span>
                  <span className="mt-1 block break-all">{l.v}</span>
                </span>
                <ArrowUpRight className="size-4 shrink-0" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
