import Image from "next/image";
import { hero, person, stats } from "@/content/site";
import type { Cv } from "@/lib/cv";
import { GitHub, LinkedIn } from "./Icons";

export default function Hero({ cv, photo }: { cv: Cv; photo: string | null }) {
  const cvProps = cv.available ? { target: "_blank", rel: "noopener" } : {};

  return (
    <section id="top" aria-labelledby="hero-title" className="px-4 pb-20 pt-28 sm:px-8 sm:pt-36">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="rise md:col-span-7">
            <p className="font-mono text-[0.95rem] text-accent">{person.name}</p>
            <h1 id="hero-title" className="display mt-5 text-[clamp(2.25rem,5vw,3.6rem)] text-balance">
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">{hero.sub}</p>

            <div className="mt-9 flex flex-wrap items-center gap-2 sm:gap-3">
              <a
                href="#work"
                className="inline-flex h-12 items-center rounded-full bg-accent px-5 sm:px-6 font-medium text-accent-ink transition-opacity hover:opacity-90"
              >
                View work
              </a>
              <a
                href={cv.href}
                {...cvProps}
                className="inline-flex h-12 items-center rounded-full border border-rule px-5 sm:px-6 font-medium transition-colors hover:border-ink-3"
              >
                {cv.label}
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                className="inline-flex size-12 items-center justify-center rounded-full border border-rule text-ink-2 transition-colors hover:border-ink-3 hover:text-ink"
              >
                <LinkedIn />
              </a>
              <a
                href={person.github}
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                className="inline-flex size-12 items-center justify-center rounded-full border border-rule text-ink-2 transition-colors hover:border-ink-3 hover:text-ink"
              >
                <GitHub />
              </a>
            </div>
            <p className="mt-6 text-sm text-ink-3">
              Looking for a summer 2027 internship in business or technology. Dublin, and Montreal from January 2027.
            </p>
          </div>

          <div className="rise md:col-span-5" style={{ "--d": "120ms" } as React.CSSProperties}>
            {photo ? (
              <Image
                src={photo}
                alt={person.name}
                width={900}
                height={900}
                priority
                className="aspect-square w-full rounded-2xl object-cover shadow-[0_30px_80px_-30px_rgb(0_0_0/0.6)]"
              />
            ) : (
              <figure className="relative pb-10 pr-6 sm:pr-10">
                <Image
                  src="/work/driving-school.jpg"
                  alt="The Driving School Dublin website, which I built and maintain for a client."
                  width={2560}
                  height={1600}
                  priority
                  sizes="(min-width: 768px) 440px, 90vw"
                  className="w-full rounded-xl border border-rule"
                />
                <Image
                  src="/work/tally-month.jpg"
                  alt="Tally, the pay tracker I built for my part-time job, with sample data."
                  width={1170}
                  height={2180}
                  priority
                  sizes="(min-width: 768px) 150px, 36vw"
                  className="absolute bottom-0 right-0 aspect-[1170/1700] w-[36%] rounded-[1.25rem] border border-rule object-cover object-top shadow-[0_24px_60px_-20px_rgb(0_0_0/0.7)]"
                />
                <figcaption className="label mt-3 pr-[40%]">Client site, and Tally with sample data</figcaption>
              </figure>
            )}
          </div>
        </div>

        <ul className="mt-20 grid grid-cols-2 border-t border-rule lg:grid-cols-4">
          {stats.map((s, i) => (
            <li
              key={s.label}
              data-reveal
              style={{ "--d": `${i * 60}ms` } as React.CSSProperties}
              className={`py-6 pr-4 ${i % 2 === 1 ? "border-l border-rule pl-5" : ""} ${
                i === 2 ? "border-t border-rule lg:border-l lg:border-t-0 lg:pl-5" : ""
              } ${i === 3 ? "border-t lg:border-t-0" : ""}`}
            >
              <p className="font-mono text-4xl tracking-tight sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm leading-snug text-ink-2">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
