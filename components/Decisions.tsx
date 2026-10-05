import { decisions } from "@/content/site";

const TAG: Record<string, string> = {
  Commercial: "text-biz",
  Product: "text-accent",
  Data: "text-tech",
  Engineering: "text-tech",
};

/** A ledger of real, dated decisions, taken from the projects' own docs and commit history. */
export default function Decisions() {
  return (
    <div className="mt-12 overflow-hidden rounded-2xl border border-rule">
      <div
        aria-hidden="true"
        className="hidden grid-cols-12 gap-6 border-b border-rule bg-paper-2/60 px-6 py-3 md:grid"
      >
        <span className="label col-span-2">Date</span>
        <span className="label col-span-5">Decision</span>
        <span className="label col-span-5">Why</span>
      </div>
      <ol>
        {decisions.map((d, i) => (
          <li
            key={d.decision}
            data-reveal
            style={{ "--d": `${(i % 4) * 60}ms` } as React.CSSProperties}
            className="group grid gap-2 border-b border-rule px-5 py-5 transition-colors last:border-none hover:bg-paper-2/50 sm:px-6 md:grid-cols-12 md:gap-6"
          >
            <p className="flex items-baseline gap-3 md:col-span-2 md:block">
              <time dateTime={d.date} className="label tnum text-ink-2">
                {d.date}
              </time>
              <span className="text-sm text-ink-3 md:mt-1 md:block">{d.project}</span>
            </p>
            <p className="text-lg font-medium leading-snug md:col-span-5">{d.decision}</p>
            <p className="leading-relaxed text-ink-2 md:col-span-5">
              <span className={`label mr-2 ${TAG[d.tag]}`}>{d.tag}</span>
              {d.why}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
