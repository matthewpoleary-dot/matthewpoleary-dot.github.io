import { about, education } from "@/content/site";

export default function About() {
  return (
    <div className="mt-12 grid gap-12 md:grid-cols-12">
      <div className="space-y-5 text-lg leading-relaxed md:col-span-7">
        {about.paragraphs.map((p, i) => (
          <p
            key={i}
            data-reveal
            style={{ "--d": `${i * 70}ms` } as React.CSSProperties}
            className={i === 0 ? "" : "text-ink-2"}
          >
            {p}
          </p>
        ))}
        <p data-reveal className="border-l-2 border-accent pl-5 text-base text-ink-2">
          <span className="label block pb-1">Off the clock</span>
          {about.offClock}
        </p>
      </div>

      <aside className="space-y-10 md:col-span-4 md:col-start-9" aria-label="Now and education">
        <div data-reveal>
          <h3 className="label">Right now</h3>
          <dl className="mt-4 divide-y divide-rule border-y border-rule">
            {about.now.map((n) => (
              <div key={n.k} className="grid grid-cols-[6.5rem_1fr] gap-3 py-3">
                <dt className="text-sm text-ink-3">{n.k}</dt>
                <dd className="text-sm">{n.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div data-reveal>
          <h3 className="label">Education</h3>
          <div className="mt-4">
            <p className="display text-3xl">{education.institution}</p>
            <p className="mt-2">{education.degree}</p>
            <p className="mt-1 text-sm text-ink-2">{education.detail}</p>
            <p className="mt-4 text-sm text-ink-2">{education.exchange}</p>
            <p className="mt-4 text-sm text-ink-3">
              Relevant modules include {education.modules.slice(0, -1).join(", ")} and {education.modules.at(-1)}.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
