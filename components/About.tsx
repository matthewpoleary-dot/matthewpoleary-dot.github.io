import { about } from "@/content/site";

export default function About() {
  return (
    <div className="mt-10 grid gap-12 lg:grid-cols-12">
      <div className="space-y-5 text-lg leading-relaxed lg:col-span-7">
        {about.paragraphs.map((p, i) => (
          <p key={i} data-reveal className={i === 0 ? "" : "text-ink-2"}>
            {p}
          </p>
        ))}
        <p data-reveal className="text-base text-ink-3">
          {about.offClock}
        </p>
      </div>

      <div className="lg:col-span-5" data-reveal>
        <h3 className="label">Right now</h3>
        <dl className="mt-3 border-t border-rule">
          {about.now.map((n) => (
            <div key={n.k} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-rule py-4">
              <dt className="label pt-0.5">{n.k}</dt>
              <dd>{n.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
