/*
 * Every fact on the site lives in this file.
 *
 * The rule: nothing goes in here that isn't true. Each entry is traceable to
 * a public repo, the GitHub profile README, or something Matthew confirmed.
 * If you want to add something, add the evidence first.
 */

export const person = {
  name: "Matthew O'Leary",
  shortName: "Matthew",
  email: "matthewpoleary@gmail.com",
  linkedin: "https://www.linkedin.com/in/matthew-o-leary-135436332",
  github: "https://github.com/matthewpoleary-dot",
  githubHandle: "matthewpoleary-dot",
  university: "Trinity College Dublin",
  degree: "Computer Science (major) with Business (minor)",
  year: "Third year, 2026–27",
  result: "Currently achieving a 2:1",
  location: "Dublin",
  exchange: "Exchange semester at McGill University, Montreal, from January 2027",
  seeking: "Summer 2027 internships across business and technology",
  /** Drop the PDF into /public with this name and every CV button goes live. */
  cvFile: "Matthew-OLeary-CV.pdf",
};

export const hero = {
  headline: "I build software for small businesses, and for my own part‑time job.",
  sub: "Computer Science and Business at Trinity College Dublin. Data analysis at Unio Wealth Management, equity research with the Trinity Student Managed Fund, and my own web design business on the side.",
};

/** Hero numbers. Small, but every one is checkable in a repo or on my transcript. */
export const stats = [
  { value: "2", label: "Client websites live, built through ML Webdesign" },
  { value: "4", label: "Ways to pay in StudyWith: free, credit pack, subscription, schools" },
  { value: "30", label: "Security tests on Tally that try to read another user's data" },
  { value: "2:1", label: "Current grade in Computer Science and Business" },
];

export const toolbox = [
  { k: "Code", v: "TypeScript, Java, SQL" },
  { k: "Web", v: "React, Next.js, Tailwind CSS, Postgres, Supabase" },
  { k: "Services", v: "Stripe, Vercel, AWS, Resend, Gemini and Groq APIs" },
  { k: "Business", v: "Equity research, financial reporting, data cleansing, pricing design" },
];

export type Project = {
  id: string;
  index: string;
  name: string;
  kind: string;
  period: string;
  oneLiner: string;
  links: { label: string; href: string }[];
  business: { k: string; v: string }[];
  technical: { k: string; v: string }[];
  stack: string[];
  learned: string;
  images: { src: string; alt: string; w: number; h: number; phone?: boolean }[];
};

export const projects: Project[] = [
  {
    id: "tally",
    index: "01",
    name: "Tally",
    kind: "Personal product",
    period: "2026",
    oneLiner:
      "I work shifts in a Dublin pub and was tracking my hours in my Notes app. Tally replaces that: enter the week's roster, confirm what you actually worked, and see what the week is worth and whether your savings goal lands on time.",
    links: [
      { label: "Code", href: "https://github.com/matthewpoleary-dot/paytrackingapp" },
      { label: "Live app (sign-in required)", href: "https://paytrackingapp.vercel.app" },
    ],
    business: [
      {
        k: "The problem",
        v: "Part-time pay leaks where payroll assumes a default. It assumes you left at close, that you took your unpaid break, that no break was owed. Nobody writes down when that isn't true.",
      },
      {
        k: "Who it's for",
        v: "One user: me. Paid hourly, roster arrives Sunday night, entering a week of shifts on a phone.",
      },
      {
        k: "Competing with the Notes app",
        v: 'The Notes app. If logging a shift is slower than typing "fri 6-close", Tally loses. So the standing bar is four seconds from a cold start, and the ritual is weekly, not a daily nag.',
      },
      {
        k: "The insight",
        v: "Storing planned and actual times for every shift makes the log evidence, not arithmetic. It's a record the employer doesn't have, built without ever parsing a payslip.",
      },
      {
        k: "Getting the law right",
        v: "There is no statutory Sunday premium in Ireland. Section 14 of the Organisation of Working Time Act 1997 allows Sunday work to be built into the rate. So the app applies the user's own contract and only flags where an entitlement might exist. Every rule carries a source and the date it was checked.",
      },
      {
        k: "Outcome",
        v: "Live and in use for my own pay and savings. No other users, by design. The goal it serves: saving for my exchange semester.",
      },
    ],
    technical: [
      {
        k: "Architecture",
        v: "Next.js App Router and React 19 on Vercel, with Supabase for Postgres, auth and row-level security. Domain logic lives in plain TypeScript modules (lib/pay, lib/budget) that the UI and the AI share.",
      },
      {
        k: "Money and time",
        v: "Money is integer cents and durations are integer minutes, with timestamps stored in UTC and shown in Europe/Dublin. Shifts that cross midnight or a clock change are ordinary cases. Rounding is per shift, half up, and a period total is the sum of the rounded shifts, so the screen always reconciles.",
      },
      {
        k: "History is immutable",
        v: "Every shift stores the rate it was worked at. Changing your rate is a pay rise, not a rewrite: last month never quietly becomes worth more than it was.",
      },
      {
        k: "AI that can't invent numbers",
        v: "Gemini with tool-calling. The model narrates and the code calculates: every euro figure it states comes back from a tool. Every write it proposes is a card you confirm. Only computed aggregates are sent to it, never a merchant name.",
      },
      {
        k: "Security, tested",
        v: "Every table carries a user_id with an RLS policy, and a test suite attempts cross-user reads and asserts they fail. There are also domain, budget, CSV-import and AI test suites.",
      },
      {
        k: "Data import",
        v: "Parses a Revolut CSV statement into a spending breakdown. Open banking and payslip OCR were scoped out on purpose.",
      },
    ],
    stack: ["Next.js", "TypeScript", "Supabase / Postgres", "Row-level security", "Gemini tool-calling", "Vercel"],
    images: [
      {
        src: "/work/tally-month.jpg",
        alt: "Tally's month view: an estimated total for three shifts, a week calendar, and a notice that a Sunday was worked with no Sunday rate set.",
        w: 1170,
        h: 2180,
        phone: true,
      },
      {
        src: "/work/tally-ask.jpg",
        alt: "Tally's Ask tab, with suggested questions such as 'Am I on track?' answered from the app's own calculations.",
        w: 1170,
        h: 1680,
        phone: true,
      },
    ],
    learned:
      "Most of the work was deciding what the app should refuse to do: no invented pay rules, no estimates shown as fact, no streaks. Constraints written down early made every later decision faster.",
  },
  {
    id: "studywith",
    index: "02",
    name: "StudyWith",
    kind: "AI product",
    period: "2026",
    oneLiner:
      "An AI study workspace for Irish Leaving Certificate students. A Socratic tutor that asks rather than tells, flashcards and quizzes generated from your own notes, and a revision planner weighted by how confident you are in each subject.",
    links: [{ label: "Code", href: "https://github.com/matthewpoleary-dot/Studywith" }],
    business: [
      {
        k: "The problem",
        v: "A chatbot that hands over answers doesn't help someone who has to sit an exam alone. The tutor is built to question, not to do the work for you.",
      },
      {
        k: "The commercial question",
        v: "Every AI action has a real cost. The product had to stay generous enough to try and still not lose money on heavy use.",
      },
      {
        k: "The model",
        v: "Four ways in: a small monthly free allowance, a one-off credit pack, a recurring Pro plan with a daily fair-use limit, and school cohorts. Access is worked out from one entitlements table, so a new tier is a row, not a rewrite.",
      },
      {
        k: "Refunds",
        v: "If an AI action fails, the credit is refunded automatically. Charging students for our errors would cost more trust than it saves.",
      },
      {
        k: "Outcome",
        v: "Built end to end, including checkout, subscriptions and a billing portal. The access model was rebuilt in August 2026 without destroying the old one, so rollback stayed possible.",
      },
    ],
    technical: [
      {
        k: "Architecture",
        v: "Next.js 16 and React 19, with Supabase for auth, Postgres and private file storage, Groq for model inference, and Stripe for checkout, subscriptions and the customer portal.",
      },
      {
        k: "Metering in the database",
        v: "A Postgres function decides, per AI action, whether it's allowed. It checks active entitlements, consumes a credit under a row lock, and logs a usage event. A matching function refunds it if the call fails.",
      },
      {
        k: "Payments",
        v: "Stripe webhook handling for checkout, subscription and invoice events, with processed events recorded in their own table.",
      },
      {
        k: "Study tools",
        v: "Uploaded notes, including PDFs, become flashcards and quizzes. The planner shares out weekly sessions by a weight built from each subject's confidence and priority.",
      },
      {
        k: "Safe migrations",
        v: "A non-destructive v2 migration: the legacy column stayed for rollback, client access to legacy functions was removed, and attachments were locked to server-side access.",
      },
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Groq", "PDF parsing"],
    images: [
      {
        src: "/work/studywith.jpg",
        alt: "StudyWith's landing page, showing a tutor asking a Leaving Cert biology student guiding questions instead of giving the answer.",
        w: 2560,
        h: 1600,
      },
    ],
    learned:
      "Pricing is a product decision, not a page you add at the end. Deciding who gets what, and what happens when something fails, shaped the database before it shaped the UI.",
  },
  {
    id: "clients",
    index: "03",
    name: "ML Webdesign",
    kind: "Own freelance business · client work",
    period: "2025 – now",
    oneLiner:
      "My freelance web design business, building fast, clean websites for small businesses in Ireland. Two client sites are live: an RSA-approved driving instructor and a Dublin grinds school.",
    links: [
      { label: "The Driving School Dublin", href: "https://thedrivingschooldublin.com" },
      { label: "Grinds school site", href: "https://grinds-website.vercel.app/" },
      { label: "Code", href: "https://github.com/matthewpoleary-dot/TheDrivingSchoolDublin" },
    ],
    business: [
      {
        k: "The clients",
        v: "An RSA-approved driving instructor serving learners across Dublin, and a grinds school covering primary, Junior Cert and Leaving Cert.",
      },
      {
        k: "What they needed",
        v: "For the instructor: learners finding him, seeing prices and requesting lessons. For the grinds school: a clear way for parents to book a free consultation.",
      },
      {
        k: "Scoping in phases",
        v: "The driving school site launched contact-first in August 2025 and gained structure after that. Shipping something useful early beat waiting for the full system.",
      },
      {
        k: "After launch",
        v: "I've kept maintaining it. In 2026 that meant restructuring the pricing layout and moving weekend pricing into the FAQ. Client work doesn't end at handover.",
      },
    ],
    technical: [
      {
        k: "Availability engine",
        v: "Slots are computed from a weekly template (working hours, slot interval, buffer after each lesson), then adjusted for one-off openings, blackout periods and existing bookings, checking for overlaps.",
      },
      {
        k: "Lesson requests",
        v: "Validated with Zod, stored in Postgres, and confirmed by email through Resend. A token-protected admin view manages bookings and status changes.",
      },
      {
        k: "Getting time right",
        v: "Fixed timezone drift so emails and the admin view format consistently in Europe/Dublin.",
      },
      {
        k: "Grinds site",
        v: "Consultation requests are stored in Supabase and trigger an email notification through Nodemailer. Server-side environment handling was fixed so keys aren't baked in at build time.",
      },
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Resend", "Zod", "Vercel"],
    images: [
      {
        src: "/work/driving-school.jpg",
        alt: "The Driving School Dublin homepage: professional driving lessons in Dublin, with contact and pricing buttons.",
        w: 2560,
        h: 1600,
      },
    ],
    learned:
      "A client cares whether the phone rings, not about the stack. Translating a small business's problem into a site, then staying around to change it, taught me more than any brief.",
  },
];

/** Smaller pieces from the degree. Group work, and labelled as such. */
export const coursework = [
  {
    title: "Ryanair's social media strategy",
    module: "Principles of Marketing · group essay",
    body: "My section was the evidence base: a channel audit of Ryanair across TikTok, X and Instagram covering posting frequency, tone, and which content actually earns engagement.",
  },
  {
    title: "TCD Societies Hub",
    module: "Information Management · group report",
    body: "Designing an information system for student societies, including how to stop an AI recommender favouring big societies over small ones.",
  },
];

/** Dated, real decisions taken from the projects' own docs and history. */
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
    when: "Internship",
    org: "Unio Wealth Management",
    role: "Data Analysis Intern",
    track: "Finance · Analysis",
    did: "SQL, data cleansing and financial reporting.",
    why: "",
  },
  {
    when: "Student society",
    org: "Trinity Student Managed Fund",
    role: "Junior Analyst, Financial Banks",
    track: "Finance · Research",
    did: "Equity research covering the financial banks sector.",
    why: "",
  },
  {
    when: "Aug 2025 – Present",
    org: "ML Webdesign",
    role: "Founder, freelance web design",
    track: "Clients · Building",
    did: "Running my own small web business: finding the brief, building the site, and maintaining it for clients including The Driving School Dublin and a Dublin grinds school.",
    why: "The clients are small businesses, and I keep maintaining their sites after launch.",
  },
  {
    when: "Alongside college",
    org: "a Dublin pub",
    role: "Part-time job",
    track: "Work",
    did: "Weekly rosters and evening shifts alongside my degree.",
    why: "Where Tally came from: I wanted to check my pay against the hours I actually worked.",
  },
];

export const about = {
  paragraphs: [
    "I'm in third year of Computer Science with a Business minor at Trinity. I work shifts in a Dublin pub, which is where Tally came from: I wanted to know whether the money that landed matched the hours I'd actually worked.",
    "That's the pattern in most of what I do. Something is being done by hand, guessed at or assumed, and I want to know what it's really worth and whether software can make the answer clearer. Sometimes that means building. Sometimes it means a SQL query, a research note, or reading the legislation.",
    "Next summer I want to be somewhere I can see how a business actually decides what to build, buy or change: consulting, product, data, fintech, or a technology team that sits close to the commercial side.",
  ],
  now: [
    { k: "Studying", v: "Year 3, Computer Science + Business, Trinity" },
    { k: "Next", v: "Exchange semester at McGill University, Montreal, from January 2027" },
    { k: "Building", v: "Tally, one weekly roster at a time" },
    { k: "Looking for", v: "Summer 2027 internships, business and technology" },
  ],
  offClock:
    "My electives are in literature and classics. In 2026 that meant group work on ransom in Homer's Iliad, and an essay on Robert Louis Stevenson's Travels with a Donkey.",
};

export const education = {
  when: "2024 – Present",
  institution: "Trinity College Dublin",
  degree: "Computer Science (major) with Business (minor)",
  detail: "Year 3 · Currently achieving a 2:1",
  exchange: "McGill University, Montreal · Exchange semester from January 2027",
  modules: ["Information Management", "Principles of Marketing", "Economics"],
};
