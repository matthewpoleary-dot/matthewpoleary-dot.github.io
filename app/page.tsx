import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";
import Decisions from "@/components/Decisions";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intersection from "@/components/Intersection";
import Projects from "@/components/Projects";
import RevealObserver from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { person } from "@/content/site";
import { getCv } from "@/lib/cv";

function Section({ id, children, tone }: { id: string; children: React.ReactNode; tone?: "alt" }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`px-4 py-24 sm:px-8 sm:py-32 ${tone === "alt" ? "bg-paper-2/60" : ""}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export default function Home() {
  const cv = getCv();

  return (
    <>
      <Header cv={cv} />
      <main id="main">
        <Hero cv={cv} />

        <Section id="approach" tone="alt">
          <SectionHead
            id="approach-title"
            n="01"
            label="How I work"
            title={
              <>
                Technology gets interesting <em className="text-accent">once it&apos;s useful</em> to someone.
              </>
            }
            intro="A business student can describe the problem. An engineer can build a solution. I try to hold the whole chain, from the commercial question to the decision it leads to. Three real examples:"
          />
          <Intersection />
        </Section>

        <Section id="capabilities">
          <SectionHead
            id="capabilities-title"
            n="02"
            label="What I can do"
            title="Capabilities, with the evidence next to them."
            intro="No skill bars. Each claim links to the work that backs it up."
          />
          <Capabilities />
        </Section>

        <Section id="work" tone="alt">
          <SectionHead
            id="work-title"
            n="03"
            label="Selected work"
            title="Three things I've built, and why."
            intro="Each case study reads two ways. Business view covers the problem, the people and the commercial thinking. Technical view covers how it's built. Switch whenever you like."
          />
          <Projects />
        </Section>

        <Section id="thinking">
          <SectionHead
            id="thinking-title"
            n="04"
            label="How I think"
            title="A log of decisions, not adjectives."
            intro="Anyone can call themselves analytical. These are real calls I've made on my own projects, with the date and the reasoning, taken from the projects' own notes and history."
          />
          <Decisions />
        </Section>

        <Section id="experience" tone="alt">
          <SectionHead
            id="experience-title"
            n="05"
            label="Experience"
            title="Finance, clients, and a weekly roster."
            intro="Analysis and research on the finance side, building for paying clients on the other, and a part-time job that turned into my best project."
          />
          <Experience />
        </Section>

        <Section id="about">
          <SectionHead id="about-title" n="06" label="About" title="The short version." />
          <About />
        </Section>

        <Contact cv={cv} />
      </main>

      <footer className="bg-ink px-4 pb-10 text-paper/70 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 border-t border-paper/15 pt-6 text-sm">
          <p>
            © {new Date().getFullYear()} {person.name}
          </p>
          <p>
            Built with Next.js ·{" "}
            <a
              href={`${person.github}/matthewsportfolio`}
              target="_blank"
              rel="noopener"
              className="link hover:text-paper"
            >
              Source on GitHub
            </a>
          </p>
        </div>
      </footer>

      <RevealObserver />
    </>
  );
}
