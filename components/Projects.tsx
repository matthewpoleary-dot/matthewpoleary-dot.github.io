import Image from "next/image";
import { asset } from "@/lib/site-url";
import { projects, type Project } from "@/content/site";
import { ArrowUpRight } from "./Icons";

export default function Projects() {
  return (
    <div className="mt-12 space-y-20 sm:space-y-24">
      {projects.map((p, i) => (
        <ProjectRow key={p.id} p={p} flip={i % 2 === 1} />
      ))}
    </div>
  );
}

function ProjectRow({ p, flip }: { p: Project; flip: boolean }) {
  const phones = p.images.every((img) => img.phone);

  return (
    <article id={`work-${p.id}`} aria-labelledby={`${p.id}-title`} className="scroll-mt-24" data-reveal>
      <div className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
        <div className={`md:col-span-6 ${flip ? "md:order-last" : ""}`}>
          {phones ? (
            <div className="flex items-start justify-center gap-4 rounded-2xl border border-rule bg-paper-2 px-6 pt-8 sm:gap-6">
              {p.images.map((img, i) => (
                <Image
                  key={img.src}
                  src={asset(img.src)}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  sizes="(min-width: 768px) 200px, 40vw"
                  className={`aspect-[1170/1500] w-[42%] max-w-[12.5rem] rounded-t-[1.5rem] border border-b-0 border-rule object-cover object-top ${
                    i === 1 ? "mt-8" : ""
                  }`}
                />
              ))}
            </div>
          ) : (
            p.images.map((img) => (
              <Image
                key={img.src}
                src={asset(img.src)}
                alt={img.alt}
                width={img.w}
                height={img.h}
                sizes="(min-width: 768px) 560px, 100vw"
                className="w-full rounded-2xl border border-rule"
              />
            ))
          )}
        </div>

        <div className="md:col-span-6">
          <p className="label">{p.kind}</p>
          <h3 id={`${p.id}-title`} className="display mt-3 text-3xl sm:text-4xl">
            {p.name}
          </h3>
          <p className="mt-4 text-lg leading-relaxed">{p.oneLiner}</p>
          <p className="mt-4 leading-relaxed text-ink-2">{p.detail}</p>
          <p className="mt-5 font-mono text-sm text-ink-3">{p.stack.join(" / ")}</p>
          <ul className="mt-3 flex flex-wrap gap-x-5">
            {p.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex min-h-11 items-center gap-1 font-mono text-sm text-accent"
                >
                  <span className="link">{l.label}</span> <ArrowUpRight />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
