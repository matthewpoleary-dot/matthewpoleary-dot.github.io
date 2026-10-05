import { education, experience, toolbox } from "@/content/site";

export default function Experience() {
  return (
    <div className="mt-12 grid gap-14 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <h3 className="label">Work</h3>
        <ol className="mt-3 border-t border-rule">
          {experience.map((e, i) => (
            <li
              key={e.org}
              data-reveal
              style={{ "--d": `${i * 50}ms` } as React.CSSProperties}
              className="grid gap-2 border-b border-rule py-6 sm:grid-cols-[10rem_1fr] sm:gap-6"
            >
              <p className="label pt-1">{e.when}</p>
              <div>
                <h4 className="text-lg font-semibold tracking-tight">
                  {e.role}, {e.org}
                </h4>
                <p className="mt-2 leading-relaxed text-ink-2">{e.did}</p>
                {e.why ? <p className="mt-2 leading-relaxed text-ink-3">{e.why}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-12 lg:col-span-5">
        <div data-reveal>
          <h3 className="label">Education</h3>
          <div className="mt-3 grid gap-2 border-y border-rule py-6 sm:grid-cols-[8rem_1fr] sm:gap-6">
            <p className="label pt-1">{education.when}</p>
            <div>
              <h4 className="text-lg font-semibold tracking-tight">{education.degree}</h4>
              <p className="mt-1 text-ink-2">{education.institution}</p>
              <p className="mt-2 text-ink-2">{education.detail}</p>
              <p className="mt-2 text-ink-3">{education.exchange}</p>
            </div>
          </div>
        </div>

        <div data-reveal>
          <h3 className="label">Toolbox</h3>
          <dl className="mt-3 border-t border-rule">
            {toolbox.map((t) => (
              <div key={t.k} className="grid grid-cols-[6rem_1fr] gap-4 border-b border-rule py-4">
                <dt className="label pt-0.5">{t.k}</dt>
                <dd>{t.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
