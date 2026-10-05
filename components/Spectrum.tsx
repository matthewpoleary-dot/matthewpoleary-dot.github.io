"use client";

import { useState } from "react";
import { spectrum } from "@/content/site";

/**
 * Where each piece of work sits between business and technology.
 * The shaded band is the overlap, which is where most of it lands.
 */
export default function Spectrum() {
  const [active, setActive] = useState<string>("clients");
  const current = spectrum.find((s) => s.id === active) ?? spectrum[0];

  return (
    <figure className="rise" style={{ "--d": "520ms" } as React.CSSProperties}>
      <figcaption className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
        <span className="label">Where my work sits</span>
        <span className="hidden text-sm text-ink-2 md:inline" aria-live="polite">
          <span className="font-medium text-ink">{current.label}</span>
          <span className="text-ink-3"> · </span>
          {current.where}
        </span>
      </figcaption>

      {/* Desktop: one shared axis */}
      <div className="relative hidden h-28 md:block">
        <div
          aria-hidden="true"
          className="absolute inset-y-6 rounded-sm bg-accent-soft/70"
          style={{ left: "38%", right: "12%" }}
        />
        <span aria-hidden="true" className="label absolute right-[12%] top-0 text-accent">
          the overlap
        </span>
        <div aria-hidden="true" className="absolute inset-x-0 top-1/2 h-px bg-ink/25" />
        <ul className="absolute inset-0">
          {spectrum.map((s, i) => {
            const above = i % 2 === 0;
            const on = s.id === active;
            return (
              <li key={s.id} className="absolute top-1/2" style={{ left: `${s.pos}%` }}>
                <a
                  href={s.href}
                  onMouseEnter={() => setActive(s.id)}
                  onFocus={() => setActive(s.id)}
                  className="group absolute -translate-x-1/2 -translate-y-1/2 p-2"
                  aria-label={`${s.label}, ${s.where}`}
                >
                  <span
                    className={`block size-3 rounded-full border-2 transition-all duration-300 ${
                      on ? "scale-125 border-accent bg-accent" : "border-ink bg-paper group-hover:bg-ink"
                    }`}
                  />
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-sm transition-colors ${
                      above ? "bottom-full mb-1" : "top-full mt-1"
                    } ${on ? "text-ink" : "text-ink-2"}`}
                  >
                    {s.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div aria-hidden="true" className="mt-1 hidden justify-between md:flex">
        <span className="label text-biz">← Business</span>
        <span className="label text-tech">Technology →</span>
      </div>

      {/* Mobile: one row per item, each with its own mini axis */}
      <ul className="md:hidden">
        {spectrum.map((s) => (
          <li key={s.id}>
            <a href={s.href} className="grid min-h-11 grid-cols-[7.5rem_1fr] items-center gap-3">
              <span className="text-sm">{s.label}</span>
              <span aria-hidden="true" className="relative h-3">
                <span
                  className="absolute inset-y-0 rounded-sm bg-accent-soft/70"
                  style={{ left: "38%", right: "12%" }}
                />
                <span className="absolute inset-x-0 top-1/2 h-px bg-ink/25" />
                <span
                  className="absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink"
                  style={{ left: `${s.pos}%` }}
                />
              </span>
            </a>
          </li>
        ))}
        <li aria-hidden="true" className="grid grid-cols-[7.5rem_1fr] gap-3">
          <span />
          <span className="flex justify-between">
            <span className="label text-biz">Business</span>
            <span className="label text-tech">Tech</span>
          </span>
        </li>
      </ul>
    </figure>
  );
}
