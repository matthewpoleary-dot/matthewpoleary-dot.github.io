import { person } from "@/content/site";
import type { Cv } from "@/lib/cv";

type P = { className?: string };
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function PdfIcon({ className = "size-[1.15rem]" }: P) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M14 2.5H6.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8Z" {...stroke} />
      <path d="M14 2.5V8h5.5" {...stroke} />
      <text
        x="12"
        y="17.5"
        textAnchor="middle"
        fontSize="5.6"
        fontWeight="700"
        fill="currentColor"
        fontFamily="sans-serif"
      >
        PDF
      </text>
    </svg>
  );
}

function LinkedInIcon({ className = "size-[1.15rem]" }: P) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2.5" {...stroke} />
      <path d="M8 10.5v6M12 16.5v-6M12 13.25a2.25 2.25 0 0 1 4.5 0v3.25" {...stroke} />
      <circle cx="8" cy="7.6" r="1" fill="currentColor" />
    </svg>
  );
}

function GitHubIcon({ className = "size-[1.15rem]" }: P) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
        {...stroke}
      />
      <path d="M9 18c-4.51 2-5-2-7-2" {...stroke} />
    </svg>
  );
}

/** CV, LinkedIn and GitHub as outlined pills with an icon and a label. */
export default function LinkPills({ cv, className = "" }: { cv: Cv; className?: string }) {
  const links = [
    { label: cv.available ? "CV" : "Request CV", href: cv.href, Icon: PdfIcon, external: cv.available },
    { label: "LinkedIn", href: person.linkedin, Icon: LinkedInIcon, external: true },
    { label: "GitHub", href: person.github, Icon: GitHubIcon, external: true },
  ];

  return (
    <ul className={`flex flex-wrap gap-2 sm:gap-3 ${className}`}>
      {links.map(({ label, href, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            {...(external ? { target: "_blank", rel: "noopener" } : {})}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-rule px-4 text-ink-2 sm:gap-2.5 sm:px-5 transition-colors hover:border-ink-3 hover:text-ink"
          >
            <Icon />
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
