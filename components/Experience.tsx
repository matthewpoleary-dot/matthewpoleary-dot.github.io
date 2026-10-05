import { experience } from "@/content/site";

export default function Experience() {
  return (
    <ol className="mt-12 border-t border-rule">
      {experience.map((e, i) => (
        <li
          key={e.org}
          data-reveal
          style={{ "--d": `${i * 60}ms` } as React.CSSProperties}
          className="grid gap-4 border-b border-rule py-8 md:grid-cols-12 md:gap-6"
        >
          <div className="md:col-span-4">
            <p className="label">{e.track}</p>
            <h3 className="mt-2 text-xl font-medium leading-snug">{e.role}</h3>
            <p className="mt-1 text-ink-2">{e.org}</p>
          </div>
          <div className="md:col-span-4">
            <p className="label">What I did</p>
            <p className="mt-2 leading-relaxed">{e.did}</p>
          </div>
          <div className="md:col-span-4">
            <p className="label text-accent">Why it matters</p>
            <p className="mt-2 leading-relaxed text-ink-2">{e.why}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
