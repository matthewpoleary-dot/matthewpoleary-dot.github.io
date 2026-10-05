import About from "@/components/About";
import Contact from "@/components/Contact";
import Decisions from "@/components/Decisions";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import RevealObserver from "@/components/Reveal";
import { person } from "@/content/site";
import { getCv, getPhoto } from "@/lib/cv";

function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 id={`${id}-title`} data-reveal className="display text-[clamp(2.25rem,5vw,3.5rem)]">
          {title}
        </h2>
        {intro ? (
          <p data-reveal className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">
            {intro}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  const cv = getCv();

  return (
    <>
      <Header cv={cv} />
      <main id="main">
        <Hero cv={cv} photo={getPhoto()} />

        <Section
          id="work"
          title="Work"
          intro="Three things I've built. Each one reads two ways: switch to the technical view for how it's built."
        >
          <Projects />
        </Section>

        <Section
          id="decisions"
          title="Decisions"
          intro="Calls I've made on my own projects, with the date and the reason, taken from each project's notes and commit history."
        >
          <Decisions />
        </Section>

        <Section id="experience" title="Experience">
          <Experience />
        </Section>

        <Section id="about" title="About">
          <About />
        </Section>

        <Contact cv={cv} />
      </main>

      <footer className="px-4 pb-10 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 border-t border-rule pt-6 text-sm text-ink-3">
          <p>
            © {new Date().getFullYear()} {person.name}
          </p>
          <a href={`${person.github}/matthewsportfolio`} target="_blank" rel="noopener" className="link hover:text-ink">
            Source on GitHub
          </a>
        </div>
      </footer>

      <RevealObserver />
    </>
  );
}
