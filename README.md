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

## Deploying to GitHub Pages

The site is a static export (`out/`), built and deployed by `.github/workflows/deploy.yml` on every push to `main`.

1. Create a `main` branch from the current work and make it the default branch (Settings → General → Default branch).
2. Rename the repo to `matthewpoleary-dot.github.io` (Settings → General → Repository name). It is then served at `https://matthewpoleary-dot.github.io`. If you keep the current name it is served at `https://matthewpoleary-dot.github.io/matthewsportfolio` instead; the workflow handles either.
3. Settings → Pages → Build and deployment → Source: **GitHub Actions**.
4. Push to `main` (or run the workflow from the Actions tab).

It also still deploys on Vercel with no settings.

## Editing content

Every fact on the site lives in [`content/site.ts`](content/site.ts): hero copy, stats, projects, experience, education and links. The hero photo is `public/matthew.jpg`; the favicon is cropped from it (`app/icon.png`, `app/apple-icon.png`). Components only lay that content out. The rule for that file is simple: nothing goes in that isn't true.

## Before launch

1. **Updating the CV.** Replace `public/Matthew-OLeary-CV.pdf` with the new PDF (same file name). If the file is ever missing, the CV buttons fall back to an email request.
2. **Set the domain.** Once it's bought, set `NEXT_PUBLIC_SITE_URL` (e.g. `https://example.com`) in Vercel so canonical URLs, Open Graph and the sitemap use it. Until then the Vercel production URL is used.

## How it's put together

- Next.js App Router, TypeScript, Tailwind CSS v4, Geist Sans and Geist Mono. No animation library: scroll reveals use one IntersectionObserver and CSS.
- Dark by default, with a light theme toggle (remembered per visitor).
- `public/work/`: project screenshots. Tally's come from the seeded test data in its own repo; the driving school and StudyWith shots are their public landing pages.
- `app/`: layout and metadata, Open Graph image, robots, sitemap, favicon.
- `components/`: one file per section (header, hero, projects, experience, contact).
- Respects `prefers-reduced-motion`. Checked with axe in both themes.
