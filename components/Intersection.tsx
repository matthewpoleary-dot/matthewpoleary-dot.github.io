"use client";

import { useRef, useState } from "react";
import { intersections } from "@/content/site";

const LANE = [
  { tone: "text-biz", tag: "Business" },
  { tone: "text-tech", tag: "Data" },
  { tone: "text-tech", tag: "Technology" },
  { tone: "text-accent", tag: "Outcome" },
];

export default function Intersection() {
  const [sel, setSel] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = intersections[sel];

  const onKey = (e: React.KeyboardEvent) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (sel + dir + intersections.length) % intersections.length;
    setSel(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="mt-12" data-reveal>
      <div role="tablist" aria-label="Worked examples" className="flex flex-wrap gap-2" onKeyDown={onKey}>
        {intersections.map((x, i) => (
          <button
            key={x.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            role="tab"
            id={`ix-tab-${x.id}`}
            aria-selected={sel === i}
            aria-controls="ix-panel"
            tabIndex={sel === i ? 0 : -1}
            onClick={() => setSel(i)}
            className={`min-h-11 rounded-full border px-5 text-sm transition-colors ${
              sel === i ? "border-ink bg-ink text-paper" : "border-rule text-ink-2 hover:border-ink/50 hover:text-ink"
            }`}
          >
            {x.project}
          </button>
        ))}
      </div>

      <div id="ix-panel" role="tabpanel" aria-labelledby={`ix-tab-${current.id}`} className="mt-8">
        <ol
          key={current.id}
          className=" grid gap-px overflow-hidden rounded-2xl border border-rule bg-rule md:grid-cols-4"
        >
          {current.steps.map((s, i) => (
            <li
              key={s.k}
              className="rise relative flex flex-col bg-paper p-6 md:min-h-72"
              style={{ "--d": `${i * 120}ms` } as React.CSSProperties}
            >
              <div className="flex items-center justify-between">
                <span className={`label ${LANE[i].tone}`}>
                  {String(i + 1).padStart(2, "0")} · {LANE[i].tag}
                </span>
                {i < 3 ? (
                  <span aria-hidden="true" className="text-ink-3">
                    <span className="hidden md:inline">→</span>
                    <span className="md:hidden">↓</span>
                  </span>
                ) : null}
              </div>
              <h3 className="mt-5 font-medium">{s.k}</h3>
              <p className={`mt-2 leading-relaxed ${i === 3 ? "text-ink" : "text-ink-2"}`}>{s.v}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
