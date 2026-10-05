"use client";

import { useState } from "react";
import { coursework, projects, type Project } from "@/content/site";
import { ArrowUpRight } from "./Icons";
import PayLeakDemo from "./PayLeakDemo";

type Lens = "business" | "technical";

const LENSES: { id: Lens; label: string; hint: string }[] = [
  { id: "business", label: "Business view", hint: "Problem, users, commercial thinking, outcome" },
  { id: "technical", label: "Technical view", hint: "Architecture, implementation, engineering decisions" },
];

export default function Projects() {
  const [lens, setLens] = useState<Lens>("business");

  return (
    <div className="mt-12">
      {/* One switch reframes every case study for the person reading. */}
      <div className="pointer-events-none sticky top-[4.5rem] z-20 flex justify-end">
        <div className="pointer-events-auto flex w-full items-center justify-between gap-4 rounded-full border border-rule bg-paper/90 p-1 shadow-[0_12px_32px_-20px_rgb(0_0_0/0.35)] backdrop-blur-md sm:w-auto sm:pl-5">
          <p aria-hidden="true" className="hidden text-sm text-ink-2 sm:block">
            Read the projects as
          </p>
          <div
            role="radiogroup"
            aria-label="Read the projects as"
            className="grid w-full grid-cols-2 sm:inline-flex sm:w-auto"
          >
            {LENSES.map((l) => (
              <button
                key={l.id}
                type="button"
                role="radio"
                aria-checked={lens === l.id}
                title={l.hint}
                onClick={() => setLens(l.id)}
                className={`min-h-10 rounded-full px-4 text-sm transition-colors ${
                  lens === l.id
                    ? `${l.id === "business" ? "bg-biz" : "bg-tech"} text-paper`
                    : "text-ink-2 hover:text-ink"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-8">
        {projects.map((p) => (
          <CaseStudy key={p.id} p={p} lens={lens} />
        ))}
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-12" data-reveal>
        <h3 className="label md:col-span-3">From the degree</h3>
        <ul className="grid gap-6 sm:grid-cols-2 md:col-span-9">
          {coursework.map((c) => (
            <li key={c.title} className="border-t border-rule pt-5">
              <p className="label">{c.module}</p>
              <h4 className="mt-2 text-lg font-medium">{c.title}</h4>
              <p className="mt-2 leading-relaxed text-ink-2">{c.body}</p>
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
  const featured = p.id === "tally";

  return (
    <article
      id={`work-${p.id}`}
      aria-labelledby={`${p.id}-title`}
      data-reveal
      className="scroll-mt-36 rounded-3xl border border-rule bg-paper p-5 transition-shadow duration-500 hover:shadow-[0_1px_0_var(--rule),0_24px_48px_-32px_rgb(0_0_0/0.25)] sm:p-8 lg:p-10"
    >
      <header className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="label">
            <span className="text-accent">{p.index}</span> · {p.kind} · {p.period}
          </p>
          <h3 id={`${p.id}-title`} className="display mt-3 text-5xl sm:text-6xl">
            {p.name}
          </h3>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {p.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex min-h-11 items-center gap-1 text-ink-2 hover:text-ink"
                >
                  <span className="link">{l.label}</span> <ArrowUpRight />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-lg leading-relaxed lg:col-span-7 lg:text-xl">{p.oneLiner}</p>
      </header>

      {featured ? (
        <div className="mt-8">
          <PayLeakDemo />
        </div>
      ) : null}

      <div className="mt-8 border-t border-rule pt-6">
        <p className={`label ${lens === "business" ? "text-biz" : "text-tech"}`} aria-live="polite">
          {lens === "business" ? "Business view" : "Technical view"}
        </p>
        <dl key={lens} className="mt-4 grid gap-x-10 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((r, i) => (
            <div key={r.k} className="rise" style={{ "--d": `${i * 60}ms` } as React.CSSProperties}>
              <dt className="font-medium">{r.k}</dt>
              <dd className="mt-1.5 leading-relaxed text-ink-2">{r.v}</dd>
            </div>
          ))}
        </dl>

        {open ? (
          <div className="mt-8 grid gap-6 rounded-2xl bg-paper-2/60 p-5 sm:p-6 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="label">What it shows about how I work</p>
              <p className="mt-2 leading-relaxed">{p.learned}</p>
            </div>
            <div className="md:col-span-4">
              <p className="label">Built with</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{p.stack.join(" · ")}</p>
            </div>
          </div>
        ) : null}

        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-rule px-5 text-sm transition-colors hover:border-ink"
        >
          {open ? "Show less" : `Read the full case study`}
          <span aria-hidden="true" className={`transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
            +
          </span>
        </button>
      </div>
    </article>
  );
}
