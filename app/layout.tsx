import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { person } from "@/content/site";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

const title = "Matthew O'Leary · Computer Science & Business, Trinity College Dublin";
const description =
  "Third-year Computer Science and Business student at Trinity College Dublin. Builds software for real businesses, with experience in data analysis and equity research. Looking for summer 2027 internships across business and technology.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s · Matthew O'Leary" },
  description,
  applicationName: "Matthew O'Leary",
  authors: [{ name: person.name, url: person.linkedin }],
  keywords: [
    "Matthew O'Leary",
    "Trinity College Dublin",
    "Computer Science and Business",
    "internship",
    "business technology",
    "consulting",
    "product",
    "data analytics",
    "fintech",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    title,
    description,
    url: "/",
    siteName: "Matthew O'Leary",
    locale: "en_IE",
    firstName: "Matthew",
    lastName: "O'Leary",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0b0c0e" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0c0e" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  url: siteUrl,
  email: `mailto:${person.email}`,
  jobTitle: "Computer Science and Business student",
  alumniOf: { "@type": "CollegeOrUniversity", name: "Trinity College Dublin" },
  address: { "@type": "PostalAddress", addressLocality: "Dublin", addressCountry: "IE" },
  sameAs: [person.linkedin, person.github],
  knowsAbout: [
    "Financial reporting",
    "Data analysis",
    "SQL",
    "Software development",
    "Equity research",
    "Product development",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IE" suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}>
      <head>
        {/* Opt in to reveal animations only when JS runs, so content is never hidden without it. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');if(t==='light')d.dataset.theme='light'}catch(e){}",
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-dvh overflow-x-clip">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
