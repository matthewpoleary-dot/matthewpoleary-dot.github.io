type Props = { n: string; label: string; title: React.ReactNode; intro?: React.ReactNode; id: string };

export default function SectionHead({ n, label, title, intro, id }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-12">
      <p className="label md:col-span-3" data-reveal>
        <span className="text-accent">{n}</span> / {label}
      </p>
      <div className="md:col-span-9">
        <h2 id={id} data-reveal className="display text-[clamp(2.1rem,5vw,3.75rem)]">
          {title}
        </h2>
        {intro ? (
          <p
            data-reveal
            style={{ "--d": "80ms" } as React.CSSProperties}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2"
          >
            {intro}
          </p>
        ) : null}
      </div>
    </div>
  );
}
