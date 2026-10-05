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
  eyebrow: "Computer Science & Business · Trinity College Dublin",
  headline: ["I find out what a problem", "is really costing,", "then build the fix."],
  sub: "I'm a third-year student who builds software for real businesses and keeps asking the commercial question behind it. So far that means websites for paying clients, an AI study product with its own pricing model, and a pay tracker built around Irish employment law. Alongside that: data analysis at a wealth manager and equity research in Trinity's student fund.",
};

/** The 10-second scan. Four facts, all checkable. */
export const glance = [
  { label: "Studying", value: "Computer Science + Business", note: "Trinity College Dublin · Year 3 · 2:1" },
  { label: "Analysis", value: "Data Analysis Intern", note: "Unio Wealth Management" },
  { label: "Research", value: "Junior Analyst, Financial Banks", note: "Trinity Student Managed Fund" },
  { label: "Building", value: "Own web business + 2 products", note: "ML Webdesign · StudyWith · Tally" },
];

/** Placement on the hero spectrum is Matthew's own reading of each piece of work. */
export const spectrum = [
  { id: "tsmf", label: "Equity research", where: "Trinity Student Managed Fund", pos: 6, href: "#experience" },
  { id: "unio", label: "Data analysis", where: "Unio Wealth Management", pos: 28, href: "#experience" },
  { id: "clients", label: "Client websites", where: "ML Webdesign", pos: 50, href: "#work-clients" },
  { id: "studywith", label: "StudyWith", where: "Pricing model + AI product", pos: 66, href: "#work-studywith" },
  { id: "tally", label: "Tally", where: "Employment law + pay engine", pos: 82, href: "#work-tally" },
];

/** The signature section: business question → data/tech → build → decision. */
export const intersections = [
  {
    id: "tally",
    project: "Tally",
    steps: [
      { k: "The question", v: "Is the money that lands in my account what my hours were actually worth?" },
      {
        k: "The data",
        v: "Planned and actual finish times and breaks for every shift, plus pay rules read from the Organisation of Working Time Act, each with a source and a date.",
      },
      {
        k: "The build",
        v: "A phone-first app with a pay engine that works in whole cents, so every row on screen adds up to its total.",
      },
      {
        k: "The decision",
        v: "Store what really happened, not what payroll assumes. That turns a calculator into a record you can argue with.",
      },
    ],
  },
  {
    id: "studywith",
    project: "StudyWith",
    steps: [
      { k: "The question", v: "How do you charge for an AI product when every single use costs you money?" },
      { k: "The data", v: "One usage event per AI action, checked against what the student's plan entitles them to." },
      {
        k: "The build",
        v: "Four ways in: a small free allowance, a one-off credit pack, a subscription with a fair-use cap, and school cohorts. Billing runs through Stripe.",
      },
      {
        k: "The decision",
        v: "If the AI call fails, the student gets the credit back. Nobody should pay for our errors.",
      },
    ],
  },
  {
    id: "clients",
    project: "The Driving School Dublin",
    steps: [
      { k: "The question", v: "How do learners see when an instructor can actually take them, without a phone call?" },
      {
        k: "The data",
        v: "Weekly working hours, lesson length, buffers between lessons, one-off openings and blackout days.",
      },
      {
        k: "The build",
        v: "An availability engine that turns those rules into requestable slots, with an admin view and email notifications.",
      },
      {
        k: "The decision",
        v: "Ship in phases. The first release in August 2025 was contact-first; structure came once the site was running.",
      },
    ],
  },
];

export type Capability = { title: string; body: string; evidence: { label: string; href: string }[] };

export const capabilities: { group: string; lead: string; items: Capability[] }[] = [
  {
    group: "Business",
    lead: "Understanding what something is worth and who it's for.",
    items: [
      {
        title: "Designing how a product makes money",
        body: "Free allowance, credit pack, subscription and school tiers for an AI product, with usage limits that protect the margin.",
        evidence: [{ label: "StudyWith", href: "#work-studywith" }],
      },
      {
        title: "Delivering for real clients",
        body: "Scoping, building and then maintaining sites for small Irish businesses, including changes to pricing and FAQs months after launch.",
        evidence: [{ label: "ML Webdesign", href: "#work-clients" }],
      },
      {
        title: "Research from primary sources",
        body: "Equity research on banks, a social media channel audit of Ryanair, and reading Irish employment law closely enough to build on it.",
        evidence: [
          { label: "Student Managed Fund", href: "#experience" },
          { label: "Tally", href: "#work-tally" },
        ],
      },
    ],
  },
  {
    group: "Analysis",
    lead: "Getting from messy information to a number you can trust.",
    items: [
      {
        title: "SQL and data cleaning",
        body: "SQL, data cleansing and financial reporting in a wealth management setting, and Postgres schemas behind every product I've built.",
        evidence: [
          { label: "Unio", href: "#experience" },
          { label: "Projects", href: "#work" },
        ],
      },
      {
        title: "Handling money properly",
        body: "Integer cents, rounding rules stated up front, and totals that always reconcile with the rows above them.",
        evidence: [{ label: "Tally", href: "#work-tally" }],
      },
      {
        title: "Turning data into a decision",
        body: "A bank statement export becomes a spending breakdown, which becomes a yes or no on whether a savings goal lands by its deadline.",
        evidence: [{ label: "Tally", href: "#work-tally" }],
      },
    ],
  },
  {
    group: "Technology",
    lead: "Building the thing, properly, and knowing where it can break.",
    items: [
      {
        title: "Full-stack web products",
        body: "TypeScript, React and Next.js on the front, Postgres via Supabase behind it, deployed on Vercel. Payments through Stripe.",
        evidence: [
          { label: "Tally", href: "#work-tally" },
          { label: "StudyWith", href: "#work-studywith" },
        ],
      },
      {
        title: "AI with guardrails",
        body: "Language models that call tools for every figure they state, propose changes instead of making them, and only ever see aggregates.",
        evidence: [{ label: "Tally", href: "#work-tally" }],
      },
      {
        title: "Protecting people's data",
        body: "Row-level security on every table, tested by trying to read another user's data and checking it fails.",
        evidence: [{ label: "Tally", href: "#work-tally" }],
      },
    ],
  },
];

export const toolbelt = [
  "TypeScript",
  "React",
  "Next.js",
  "SQL / Postgres",
  "Supabase",
  "Stripe",
  "Java",
  "AWS",
  "Git",
  "Tailwind CSS",
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
        v: "One user: me. Paid hourly, roster arrives Sunday night, entering a week of shifts on a phone. Designing for one real person kept every decision honest.",
      },
      {
        k: "The real competitor",
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
        k: "Fairness as policy",
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
    why: "If you can't see what changed, you can't trust the numbers.",
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
    why: "Otherwise a pay rise silently re-prices last month, and the record stops being a record.",
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
    why: "Customers shouldn't pay for our errors.",
    tag: "Commercial",
  },
  {
    date: "2026-08-10",
    project: "StudyWith",
    decision: "Rebuild access around entitlements, but keep the old column for rollback.",
    why: "A migration you can't undo is a bet. This one stayed reversible.",
    tag: "Engineering",
  },
  {
    date: "2025-08-20",
    project: "Driving School",
    decision: "Launch contact-first. The booking flow waits.",
    why: "A working site in a client's hands beats a complete one on my laptop.",
    tag: "Commercial",
  },
];

export const experience = [
  {
    org: "Unio Wealth Management",
    role: "Data Analysis Intern",
    track: "Finance · Analysis",
    did: "SQL, data cleansing and financial reporting.",
    why: "The analytical side of the same skill I use when building: getting data into a state where the numbers can be trusted, then reporting them to people who make decisions from them.",
  },
  {
    org: "Trinity Student Managed Fund",
    role: "Junior Analyst, Financial Banks",
    track: "Finance · Research",
    did: "Equity research covering the financial banks sector.",
    why: "Reading a business from the outside: how it makes money, what could change that, and what the market already assumes.",
  },
  {
    org: "ML Webdesign",
    role: "Founder, freelance web design",
    track: "Clients · Building",
    did: "Running my own small web business: finding the brief, building the site, and maintaining it for clients including The Driving School Dublin and a Dublin grinds school.",
    why: "Real clients, real deadlines, and the work isn't finished when it launches.",
  },
  {
    org: "A Dublin pub",
    role: "Part-time, hospitality",
    track: "Work",
    did: "Weekly rosters and evening shifts alongside my degree.",
    why: "Where Tally came from. A problem I lived with every week became the most rigorous thing I've built.",
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
  institution: "Trinity College Dublin",
  degree: "Computer Science (major) with Business (minor)",
  detail: "Year 3 · Currently achieving a 2:1",
  exchange: "McGill University, Montreal · Exchange semester from January 2027",
  modules: ["Information Management", "Principles of Marketing", "Economics"],
};
