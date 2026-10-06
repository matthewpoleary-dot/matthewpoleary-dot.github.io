import { education, experience, toolbox } from "@/content/site";

type Row = { when: string; title: string; sub: string; lines: string[] };

function List({ label, rows }: { label: string; rows: Row[] }) {
  return (
    <div data-reveal>
      <h3 className="label">{label}</h3>
      <ol className="mt-3 border-t border-rule">
        {rows.map((r) => (
          <li key={r.title + r.sub} className="grid gap-2 border-b border-rule py-6 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
            <p className="label pt-1">{r.when}</p>
            <div>
              <h4 className="text-lg font-semibold tracking-tight">
                {r.title}, {r.sub}
              </h4>
              {r.lines.map((l) => (
                <p key={l} className="mt-2 leading-relaxed text-ink-2">
                  {l}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="mt-12 grid gap-14 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <List
          label="Work"
          rows={experience.map((e) => ({ when: e.when, title: e.role, sub: e.org, lines: [e.did] }))}
        />
      </div>

      <div className="space-y-12 lg:col-span-5">
        <List
          label="Education"
          rows={education.map((e) => ({ when: e.when, title: e.title, sub: e.place, lines: e.lines }))}
        />

        <div data-reveal>
          <h3 className="label">Also</h3>
          <dl className="mt-3 border-t border-rule">
            {toolbox.map((t) => (
              <div key={t.k} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-rule py-4">
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
