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
  sub: "Computer Science (major) and Business (minor) at Trinity College Dublin. Two summers as a data analysis intern at Unio Wealth Management, a year as a junior analyst in the Trinity Student Managed Fund, and founder of StudyWith.",
  status: "Looking for a summer 2027 internship.",
};

export const stats = [
  { value: "2", label: "Summers as a data analysis intern at Unio Wealth Management" },
  { value: "3", label: "Products built end to end: Tally, StudyWith and a client's booking site" },
  { value: "589", label: "Leaving Certificate points" },
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
    kind: "Personal project · 2026",
    oneLiner:
      "A pay tracker for part-time workers in Ireland, built for my own job. Log the week's shifts and it tells you what they're worth and whether you'll hit your savings goal.",
    detail: "Every figure its AI assistant quotes is calculated in code, not by the model.",
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
    kind: "Founder · 2025 – Present",
    oneLiner: "An AI tutoring platform for Leaving Cert students. The tutor asks questions instead of giving answers.",
    detail:
      "Built end to end with Stripe billing, then pitched to Irish grinds companies, with positive engagement from an established one.",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Groq"],
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
    kind: "Client work through ML Webdesign · 2025 – Present",
    oneLiner: "Booking website for an RSA-approved driving instructor in Dublin. Live since August 2025.",
    detail: "Lesson slots are generated from his weekly hours, lesson length and days off.",
    stack: ["Next.js", "TypeScript", "Supabase", "Resend"],
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
    when: "2025 – Present",
    role: "Founder",
    org: "StudyWith",
    did: "Built an AI tutoring platform for Leaving Cert students from prototype to a formal business listing. Led cold outreach to Irish grinds and tutoring providers.",
  },
  {
    when: "Aug 2025 – Present",
    role: "Founder",
    org: "ML Webdesign",
    did: "Freelance web design. Built and maintain the website and lesson-request system for The Driving School Dublin.",
  },
  {
    when: "Summers 2025, 2026",
    role: "Data Analysis Intern",
    org: "Unio Wealth Management",
    did: "Cleansed and validated large datasets for the data team, used SQL to track down and fix data quality issues, and organised the team's meetings.",
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
    when: "2024 – Present",
    title: "BA Computer Science (Major) and Business (Minor)",
    place: "Trinity College Dublin",
    lines: [
      "Year 3, currently achieving a 2:1.",
      "Exchange semester at McGill University, Montreal, from January 2027.",
    ],
  },
  {
    when: "2018 – 2024",
    title: "Leaving Certificate, 589 points",
    place: "St Conleth's College",
    lines: [
      "H1s in French, Spanish and Biology, H2 in Maths. John Kelly Award for Academic Excellence in Spanish.",
      "Head Boy and Senior Cup Rugby Captain.",
    ],
  },
];

export const toolbox = [
  { k: "Code", v: "Java, TypeScript, SQL, ARM Assembly" },
  { k: "Web", v: "React, Next.js, Tailwind CSS, Postgres, Supabase" },
  { k: "Services", v: "Stripe, Vercel, AWS, Resend, Gemini and Groq APIs" },
  { k: "Business", v: "Excel modelling, PowerPoint, data cleansing, equity research" },
  { k: "Languages", v: "English, French, Spanish, Irish" },
  { k: "Outside work", v: "Running, golf, padel, rugby, Classics and ancient history, quiz nights" },
];
