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
  sub: "Business and Computer Science at Trinity College Dublin. Two summers as a data analysis intern at Unio Wealth Management, a year as a junior analyst in the Trinity Student Managed Fund, and founder of StudyWith.",
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
      "A shift and pay tracker for part-time workers in Ireland. Enter the week's roster, confirm what you actually worked, and it tells you what the week is worth and whether your savings goal lands on time. I built it for my own bar job.",
    detail:
      "It stores the actual finish time and break for every shift, because that's where part-time pay goes missing. Money is kept in whole cents so totals always add up, and the AI assistant can only quote figures the app has calculated.",
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
    oneLiner:
      "An AI tutoring platform for Leaving Cert students. The tutor asks questions instead of handing over answers, and students can turn their own notes into flashcards and quizzes.",
    detail:
      "I built it end to end, including Stripe billing with a free tier, credit packs, a subscription and school plans. I also did the cold outreach to Irish grinds and tutoring providers, and got positive engagement from an established grinds company.",
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
    oneLiner:
      "Website and lesson-request system for an RSA-approved driving instructor in Dublin. Live since August 2025, and I still maintain it.",
    detail:
      "Available lesson slots are worked out from the instructor's weekly hours, lesson length, gaps between lessons and days off, so learners only see times he can actually do.",
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

export const decisions = [
  {
    date: "2026-09-23",
    project: "Tally",
    decision: "Only computed totals go to the AI. Never a merchant name or a transaction description.",
    why: "Bank data is personal. The model only needs aggregates to be useful.",
    tag: "Data",
  },
  {
    date: "2026-09-21",
    project: "Tally",
    decision: "The AI proposes and the user confirms. It never writes silently.",
    why: "Changes to pay or savings data should always be something the user has seen and agreed to.",
    tag: "Product",
  },
  {
    date: "2026-09-21",
    project: "Tally",
    decision: "No streaks.",
    why: "A daily counter on a data-entry chore rewards made-up entries, which would destroy the log's value as evidence.",
    tag: "Product",
  },
  {
    date: "2026-09-20",
    project: "Tally",
    decision: "Every shift stores the rate it was worked at.",
    why: "Otherwise a pay rise would quietly change what last month was worth.",
    tag: "Engineering",
  },
  {
    date: "2026-09-20",
    project: "Tally",
    decision: '"Not sure" is a real answer, stored as null. It is not the same as "no".',
    why: "That difference is what lets the app later flag a possible Sunday entitlement. Collapse it to zero and the flag can never fire.",
    tag: "Data",
  },
  {
    date: "2026-08-10",
    project: "StudyWith",
    decision: "A failed AI action refunds the student's credit automatically.",
    why: "Students shouldn't lose a credit for a request that failed on our side.",
    tag: "Commercial",
  },
  {
    date: "2026-08-10",
    project: "StudyWith",
    decision: "Rebuild access around entitlements, but keep the old column for rollback.",
    why: "If the new access model had a problem, the old data was still there to fall back to.",
    tag: "Engineering",
  },
  {
    date: "2025-08-20",
    project: "Driving School",
    decision: "Launch contact-first. The booking flow waits.",
    why: "It got the site live sooner. The booking pages were taken out of the first release and kept separate.",
    tag: "Commercial",
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
    when: "One year",
    role: "Junior Analyst, Financial Banks",
    org: "Trinity Student Managed Fund",
    did: "Equity research on the financial banks sector.",
  },
  {
    when: "Aug 2024 – Present",
    role: "Bar work",
    org: "Dublin",
    did: "Bar and table service alongside college: The Swan Bar, then Rody Boland's in Rathmines, and now The Dropping Well.",
  },
];

export const education = [
  {
    when: "2024 – Present",
    title: "BA Business and Computer Science",
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
];

export const about = {
  paragraphs: [
    "I'm in third year of Business and Computer Science at Trinity College Dublin. From January 2027 I'm on exchange at McGill University in Montreal.",
    "I like building things that solve a problem I can see. Tally started because I wanted to check my pay from the bar against the hours I'd actually worked. StudyWith is bigger: a product, a pricing model, and pitching it to tutoring companies.",
    "Next summer I want to work somewhere I can see how a business decides what to build, buy or change: consulting, product, data, fintech, or a technology team close to the commercial side.",
  ],
  now: [
    { k: "Studying", v: "Year 3, Business and Computer Science, Trinity" },
    { k: "Next", v: "McGill University, Montreal, from January 2027" },
    { k: "Building", v: "Tally and StudyWith" },
    { k: "Outside work", v: "Marathon training, golf, padel and rugby" },
  ],
};
