/*
 * Every fact on the site lives in this file.
 *
 * The rule: nothing goes in here that isn't true. Each entry is traceable to
 * Matthew's CV, a public repo, or something he confirmed.
 */

export const person = {
  name: "Matthew O'Leary",
  email: "matthewpoleary@gmail.com",
  linkedin: "https://www.linkedin.com/in/matthew-o-leary-135436332",
  github: "https://github.com/matthewpoleary-dot",
  /** Drop the PDF into /public with this name and every CV button goes live. */
  cvFile: "Matthew-OLeary-CV.pdf",
};

export const hero = {
  headline: "I build software for a Dublin driving school, and for my own part\u2011time job.",
  sub: "Computer Science (major) and Business (minor) at Trinity College Dublin. Two summers as a data analysis intern at Unio Wealth Management, a year as a junior analyst in the Trinity Student Managed Fund, and creator of StudyWith.",
  status: "Looking for a summer 2027 internship. Available May to September 2027.",
};

export const stats = [
  { value: "2", label: "Summers as a data analysis intern at Unio Wealth Management" },
  { value: "1,200+", label: "Organic Google search clicks on the driving school site I built" },
  { value: "90%", label: "Programming Project, my top result at Trinity" },
  { value: "2:1", label: "Current grade at Trinity" },
];

export type Project = {
  id: string;
  name: string;
  kind: string;
  oneLiner: string;
  detail: string;
  stack: string[];
  links: { label: string; href: string }[];
  images: { src: string; alt: string; w: number; h: number; phone?: boolean }[];
};

export const projects: Project[] = [
  {
    id: "tally",
    name: "Tally",
    kind: "Creator · Sept 2026 – Present",
    oneLiner:
      "A pay tracker for part-time workers in Ireland, built for my own job. Log the week's shifts and it tells you what they're worth and whether you'll hit your savings goal.",
    detail:
      "I use it daily. Data access is locked down per user and tested, and every figure its AI assistant quotes is calculated in code, not by the model.",
    stack: ["Next.js", "TypeScript", "Supabase", "Postgres", "Gemini API"],
    links: [
      { label: "Code", href: "https://github.com/matthewpoleary-dot/paytrackingapp" },
      { label: "Live app", href: "https://paytrackingapp.vercel.app" },
    ],
    images: [
      {
        src: "/work/tally-month.jpg",
        alt: "Tally's month view with sample data: an estimated total for three shifts, a week calendar, and a notice that a Sunday was worked with no Sunday rate set.",
        w: 1170,
        h: 2180,
        phone: true,
      },
      {
        src: "/work/tally-ask.jpg",
        alt: "Tally's Ask tab, with suggested questions such as 'Am I on track?'.",
        w: 1170,
        h: 1680,
        phone: true,
      },
    ],
  },
  {
    id: "studywith",
    name: "StudyWith",
    kind: "Creator · 2025 – 2026",
    oneLiner: "An AI tutoring platform for Leaving Cert students. The tutor asks questions instead of giving answers.",
    detail:
      "I added product analytics with PostHog and iterated on the tutor across several versions. An established Irish grinds company then approached me about acquiring it, and I weighed white-label licensing against a sale.",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "PostHog"],
    links: [{ label: "Code", href: "https://github.com/matthewpoleary-dot/Studywith" }],
    images: [
      {
        src: "/work/studywith.jpg",
        alt: "StudyWith's landing page, showing a tutor asking a biology student guiding questions.",
        w: 2560,
        h: 1600,
      },
    ],
  },
  {
    id: "clients",
    name: "The Driving School Dublin",
    kind: "Developer · 2026 – Present",
    oneLiner:
      "A booking and payments system for a Dublin driving school, now pre-launch, plus the live marketing site, which has drawn over 1,200 organic Google search clicks.",
    detail:
      "Stripe webhooks are the single source of truth for booking state, and confirmed lessons sync to Google Calendar.",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe"],
    links: [
      { label: "Website", href: "https://thedrivingschooldublin.com" },
      { label: "Code", href: "https://github.com/matthewpoleary-dot/TheDrivingSchoolDublin" },
    ],
    images: [
      {
        src: "/work/driving-school.jpg",
        alt: "The Driving School Dublin homepage, with contact and pricing buttons.",
        w: 2560,
        h: 1600,
      },
    ],
  },
];

export const experience = [
  {
    when: "Summers 2025, 2026",
    role: "Data Analysis Intern",
    org: "Unio Wealth Management",
    did: "Cleansed and validated about 6,000 records, using SQL to find and fix data quality issues. Helped move pension payroll from paper to electronic processing, saving the finance department hours of manual work. Returned for a second summer.",
  },
  {
    when: "Sept 2025 – May 2026",
    role: "Junior Analyst, Financial Banks",
    org: "Trinity Student Managed Fund",
    did: "Equity research on listed financial-sector banks for a student-run investment fund.",
  },
];

export const education = [
  {
    when: "2024 – 2028 (expected)",
    title: "BA Computer Science (Major) and Business (Minor)",
    place: "Trinity College Dublin",
    lines: ["Current grade 2:1. Top results: Programming Project 90%, Information Management 80%, Programming II 73%."],
  },
  {
    when: "2018 – 2024",
    title: "Leaving Certificate, 589 points",
    place: "St Conleth's College",
    lines: [
      "H1s in French, Spanish and Biology, H2 in Maths. John Kelly Award for Spanish.",
      "Head Boy and Senior Cup Rugby Captain.",
    ],
  },
];

/** Shown high on the page, for technical recruiters. */
export const skills = [
  {
    group: "Languages",
    items: ["Java", "TypeScript", "SQL", "ARM Assembly", "Haskell", "Prolog", "C (basic)", "Python (learning)"],
  },
  {
    group: "Computer science",
    items: [
      "Data structures and algorithms",
      "Relational database design",
      "Automated testing",
      "Access control and data security",
    ],
  },
  {
    group: "Web and cloud",
    items: ["React", "Next.js", "Node.js", "Tailwind CSS", "Postgres", "Supabase", "AWS", "Vercel"],
  },
  {
    group: "APIs and tools",
    items: ["Git", "Stripe", "PostHog", "Anthropic API", "Gemini and Groq APIs", "Claude Code", "Codex", "Excel"],
  },
];

export const toolbox = [
  { k: "Business", v: "Excel modelling, PowerPoint, data cleansing, equity research" },
  { k: "Languages", v: "English, French, Spanish, Irish" },
  { k: "Outside work", v: "Running, golf, padel, rugby, chess, Classics, travelling" },
];
