import { person } from "@/content/site";
import type { Cv } from "@/lib/cv";
import { ArrowUpRight } from "./Icons";
import LinkPills from "./LinkPills";

export default function Contact({ cv }: { cv: Cv }) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-rule px-4 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 id="contact-title" data-reveal className="display text-[clamp(2.25rem,5vw,3.5rem)]">
          Contact
        </h2>
        <p data-reveal className="mt-5 max-w-xl text-lg leading-relaxed text-ink-2">
          I&apos;m looking for a summer 2027 internship in business or technology. Email is the quickest way to reach
          me.
        </p>

        <a
          href={`mailto:${person.email}?subject=${encodeURIComponent("Summer 2027 internship")}`}
          data-reveal
          className="group mt-10 inline-flex max-w-full items-center gap-3 text-[clamp(1.35rem,4vw,2.5rem)] font-semibold tracking-tight text-accent"
        >
          <span className="link truncate">{person.email}</span>
          <ArrowUpRight className="size-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>

        <LinkPills cv={cv} className="mt-12" />
      </div>
    </section>
  );
}
