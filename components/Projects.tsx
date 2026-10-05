"use client";

import Image from "next/image";
import { useState } from "react";
import { coursework, projects, type Project } from "@/content/site";
import { ArrowUpRight } from "./Icons";
import PayLeakDemo from "./PayLeakDemo";

type Lens = "business" | "technical";

export default function Projects() {
  const [lens, setLens] = useState<Lens>("business");

  return (
    <div className="mt-10">
      {/* One switch reframes every case study for the person reading. */}
      <div className="pointer-events-none sticky top-[4.5rem] z-20 flex justify-end">
        <div
          role="radiogroup"
          aria-label="Read the projects as"
          className="pointer-events-auto grid w-full grid-cols-2 rounded-full border border-rule bg-paper/90 p-1 shadow-[0_12px_32px_-20px_rgb(0_0_0/0.6)] backdrop-blur-md sm:inline-flex sm:w-auto"
        >
          {(["business", "technical"] as const).map((l) => (
            <button
              key={l}
              type="button"
              role="radio"
              aria-checked={lens === l}
              onClick={() => setLens(l)}
              className={`min-h-10 rounded-full px-4 text-sm transition-colors ${
                lens === l ? "bg-ink text-paper" : "text-ink-2 hover:text-ink"
              }`}
            >
              {l === "business" ? "Business view" : "Technical view"}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {projects.map((p) => (
          <CaseStudy key={p.id} p={p} lens={lens} />
        ))}
      </div>

      <div className="mt-20" data-reveal>
        <h3 className="display text-3xl">From the degree</h3>
        <ul className="mt-8 grid border-t border-rule sm:grid-cols-2">
          {coursework.map((c, i) => (
            <li
              key={c.title}
              className={`py-6 ${i === 1 ? "border-t border-rule sm:border-l sm:border-t-0 sm:pl-8" : "sm:pr-8"}`}
            >
              <h4 className="text-lg font-semibold tracking-tight">{c.title}</h4>
              <p className="mt-2 leading-relaxed text-ink-2">{c.body}</p>
              <p className="label mt-4">{c.module}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CaseStudy({ p, lens }: { p: Project; lens: Lens }) {
  const [open, setOpen] = useState(false);
  const rows = lens === "business" ? p.business : p.technical;
  const visible = open ? rows : rows.slice(0, 3);
  const phones = p.images.every((i) => i.phone);

  return (
    <article
      id={`work-${p.id}`}
      aria-labelledby={`${p.id}-title`}
      data-reveal
      className="scroll-mt-36 overflow-hidden rounded-3xl border border-rule bg-paper-2"
    >
      <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-12 lg:p-10">
        <header className="lg:col-span-5">
          <p className="label">
            {p.kind} · {p.period}
          </p>
          <h3 id={`${p.id}-title`} className="display mt-3 text-4xl sm:text-5xl">
            {p.name}
          </h3>
          <p className="mt-5 leading-relaxed text-ink-2 sm:text-lg">{p.oneLiner}</p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Built with">
            {p.stack.map((s) => (
              <li key={s} className="rounded-full border border-rule px-3 py-1 font-mono text-xs text-ink-2">
                {s}
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-1">
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
        </header>

        <div className={`lg:col-span-7 ${phones ? "flex items-start justify-center gap-4 sm:gap-6" : ""}`}>
          {p.images.map((img, i) =>
            img.phone ? (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                width={img.w}
                height={img.h}
                sizes="(min-width: 1024px) 260px, 42vw"
                className={`aspect-[1170/1680] w-[42%] max-w-[16rem] rounded-[1.75rem] border border-rule object-cover object-top ${
                  i === 1 ? "mt-10" : ""
                }`}
              />
            ) : (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                width={img.w}
                height={img.h}
                sizes="(min-width: 1024px) 640px, 100vw"
                className="w-full rounded-xl border border-rule"
              />
            ),
          )}
        </div>
      </div>

      {p.id === "tally" ? (
        <div className="border-t border-rule p-6 sm:p-8 lg:p-10">
          <PayLeakDemo />
        </div>
      ) : null}

      <div className="border-t border-rule p-6 sm:p-8 lg:p-10">
        <p className="label" aria-live="polite">
          {lens === "business" ? "Business view" : "Technical view"}
        </p>
        <dl key={lens} className="mt-5 grid gap-x-10 gap-y-7 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((r, i) => (
            <div key={r.k} className="rise" style={{ "--d": `${i * 50}ms` } as React.CSSProperties}>
              <dt className="font-semibold tracking-tight">{r.k}</dt>
              <dd className="mt-2 leading-relaxed text-ink-2">{r.v}</dd>
            </div>
          ))}
        </dl>

        {open ? (
          <div className="mt-8 border-t border-rule pt-6">
            <p className="label">What it shows about how I work</p>
            <p className="mt-2 max-w-3xl leading-relaxed">{p.learned}</p>
          </div>
        ) : null}

        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full border border-rule px-5 text-sm transition-colors hover:border-ink-3"
        >
          {open ? "Show less" : "Read the full case study"}
          <span aria-hidden="true" className={`transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
            +
          </span>
        </button>
      </div>
    </article>
  );
}
