import { glance, hero, person } from "@/content/site";
import type { Cv } from "@/lib/cv";
import { ArrowDown, GitHub, LinkedIn, Mail } from "./Icons";
import Spectrum from "./Spectrum";

export default function Hero({ cv }: { cv: Cv }) {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative px-4 pb-16 pt-28 sm:px-8 sm:pt-36">
      <div className="mx-auto max-w-6xl">
        <p className="label rise flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="inline-flex items-center gap-2">
            <span aria-hidden="true" className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-50 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            <span className="text-ink-2">Open to summer 2027 internships</span>
          </span>
          <span aria-hidden="true">/</span>
          <span>{hero.eyebrow}</span>
        </p>

        <h1 id="hero-title" className="display mt-6 text-[clamp(2.6rem,8.4vw,6.6rem)]">
          <span className="sr-only">{person.name}. </span>
          {hero.headline.map((line, i) => (
            <span
              key={line}
              className={`rise block ${i === 2 ? "italic text-accent" : ""}`}
              style={{ "--d": `${80 + i * 110}ms` } as React.CSSProperties}
            >
              {line}
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <p
            className="rise text-lg leading-relaxed text-ink-2 md:col-span-7 md:text-xl"
            style={{ "--d": "380ms" } as React.CSSProperties}
          >
            {hero.sub}
          </p>

          <div
            className="rise flex flex-col gap-5 md:col-span-4 md:col-start-9"
            style={{ "--d": "460ms" } as React.CSSProperties}
          >
            <div className="flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 font-medium text-paper transition-transform hover:-translate-y-px"
              >
                See the work <ArrowDown />
              </a>
              <a
                href={cv.href}
                {...(cv.available ? { target: "_blank", rel: "noopener" } : {})}
                className="inline-flex h-12 items-center rounded-full border border-ink/30 px-6 font-medium transition-colors hover:border-ink"
              >
                {cv.label}
              </a>
            </div>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-2" aria-label="Contact links">
              <li>
                <a href={`mailto:${person.email}`} className="inline-flex min-h-11 items-center gap-2 hover:text-ink">
                  <Mail /> <span className="link">Email</span>
                </a>
              </li>
              <li>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex min-h-11 items-center gap-2 hover:text-ink"
                >
                  <LinkedIn /> <span className="link">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={person.github}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex min-h-11 items-center gap-2 hover:text-ink"
                >
                  <GitHub /> <span className="link">GitHub</span>
                </a>
              </li>
            </ul>
            <p className="text-sm text-ink-3">Dublin · Montreal from January 2027</p>
          </div>
        </div>

        <div className="mt-16 border-t border-rule pt-8">
          <Spectrum />
        </div>

        <dl className="mt-14 grid grid-cols-1 border-y border-rule sm:grid-cols-2 lg:grid-cols-4">
          {glance.map((g, i) => (
            <div
              key={g.label}
              data-reveal
              style={{ "--d": `${i * 70}ms` } as React.CSSProperties}
              className={`py-6 sm:px-5 ${i > 0 ? "border-t border-rule sm:border-t-0" : ""} ${
                i % 2 === 1 ? "sm:border-l" : ""
              } ${i === 2 ? "sm:border-t lg:border-t-0 lg:border-l" : ""} ${i === 3 ? "sm:border-t lg:border-t-0" : ""} border-rule first:sm:pl-0`}
            >
              <dt className="label">{g.label}</dt>
              <dd className="mt-2 text-lg font-medium leading-snug">{g.value}</dd>
              <dd className="mt-1 text-sm text-ink-3">{g.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
