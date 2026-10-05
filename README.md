# matthewsportfolio

Personal site for Matthew O'Leary: Computer Science and Business at Trinity College Dublin, looking for summer 2027 internships across business and technology.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (fully static)
npm run lint
npm run format
```

Deploy by importing the repo into Vercel. No environment variables are required.

## Editing content

Every fact on the site lives in [`content/site.ts`](content/site.ts): hero copy, projects, experience, decisions, education and links. Components only lay that content out. The rule for that file is simple: nothing goes in that isn't true.

## Before launch

1. **Add the CV.** Put the PDF at `public/Matthew-OLeary-CV.pdf`. Every CV button switches from "Request CV" (an email link) to "View CV" automatically on the next build.
2. **Add a photo (optional).** Put a square photo at `public/matthew.jpg` and the hero shows it instead of the screenshot collage.
3. **Set the domain.** Once it's bought, set `NEXT_PUBLIC_SITE_URL` (e.g. `https://example.com`) in Vercel so canonical URLs, Open Graph and the sitemap use it. Until then the Vercel production URL is used.

## How it's put together

- Next.js App Router, TypeScript, Tailwind CSS v4, Geist Sans and Geist Mono. No animation library: scroll reveals use one IntersectionObserver and CSS.
- Dark by default, with a light theme toggle (remembered per visitor).
- `public/work/`: project screenshots. Tally's come from the seeded test data in its own repo; the driving school and StudyWith shots are their public landing pages.
- `app/`: layout and metadata, Open Graph image, robots, sitemap, favicon.
- `components/`: one file per section. `Projects.tsx` holds the business/technical lens; `PayLeakDemo.tsx` is the interactive Tally demo.
- Respects `prefers-reduced-motion`. Checked with axe in both themes.
