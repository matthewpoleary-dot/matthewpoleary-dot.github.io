import { capabilities, toolbelt } from "@/content/site";

const TONE: Record<string, string> = { Business: "text-biz", Analysis: "text-accent", Technology: "text-tech" };

export default function Capabilities() {
  return (
    <div className="mt-14 space-y-14">
      {capabilities.map((g) => (
        <div key={g.group} className="grid gap-6 border-t border-rule pt-8 md:grid-cols-12">
          <div className="md:col-span-3" data-reveal>
            <h3 className={`label ${TONE[g.group]}`}>{g.group}</h3>
            <p className="mt-3 max-w-xs text-ink-2">{g.lead}</p>
          </div>
          <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2 md:col-span-9 lg:grid-cols-3">
            {g.items.map((c, i) => (
              <li key={c.title} data-reveal style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
                <h4 className="text-lg font-medium leading-snug">{c.title}</h4>
                <p className="mt-2 leading-relaxed text-ink-2">{c.body}</p>
                <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  <span className="label">Evidence</span>
                  {c.evidence.map((e) => (
                    <a key={e.label} href={e.href} className="link text-ink">
                      {e.label}
                    </a>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="grid gap-4 border-t border-rule pt-8 md:grid-cols-12" data-reveal>
        <h3 className="label md:col-span-3">Day-to-day tools</h3>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 leading-relaxed text-ink-2 md:col-span-9">
          {toolbelt.map((t) => (
            <li key={t} className="whitespace-nowrap">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
