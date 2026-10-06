import { skills } from "@/content/site";

export default function Skills() {
  return (
    <dl className="mt-10 border-t border-rule">
      {skills.map((g, i) => (
        <div
          key={g.group}
          data-reveal
          style={{ "--d": `${i * 50}ms` } as React.CSSProperties}
          className="grid gap-3 border-b border-rule py-5 sm:grid-cols-[11rem_1fr] sm:gap-6"
        >
          <dt className="label pt-1.5">{g.group}</dt>
          <dd>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li key={item} className="rounded-full border border-rule px-3 py-1 font-mono text-sm text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}
