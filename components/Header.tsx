"use client";

import { useEffect, useRef, useState } from "react";
import type { Cv } from "@/lib/cv";

const NAV = [
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#work", id: "work", label: "Work" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export default function Header({ cv }: { cv: Cv }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    let frame = 0;
    const update = () => {
      frame = 0;
      // The active section is the last one whose top has passed the middle of the screen.
      const line = window.innerHeight * 0.45;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current: string | null = null;
      for (const s of sections) if (s.getBoundingClientRect().top <= line) current = s.id;
      setActive(atBottom ? "contact" : current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const toggleTheme = () => {
    const next = document.documentElement.dataset.theme !== "light";
    if (next) document.documentElement.dataset.theme = "light";
    else delete document.documentElement.dataset.theme;
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {}
  };

  const cvProps = cv.available ? { target: "_blank", rel: "noopener" } : {};

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-rule bg-paper/85 backdrop-blur-md">
      <div className="px-4 sm:px-8">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4">
          <a href="#top" className="font-semibold tracking-tight">
            Matthew O&apos;Leary
          </a>

          <div className="flex items-center gap-1 sm:gap-2">
            <nav aria-label="Primary" className="hidden md:block">
              <ul className="flex items-center">
                {NAV.map((n) => (
                  <li key={n.id}>
                    <a
                      href={n.href}
                      aria-current={active === n.id ? "location" : undefined}
                      className={`inline-flex min-h-11 items-center px-3 text-[0.95rem] transition-colors hover:text-ink ${
                        active === n.id ? "text-ink" : "text-ink-2"
                      }`}
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={cv.href}
                    {...cvProps}
                    className="inline-flex min-h-11 items-center px-3 text-[0.95rem] text-ink-2 transition-colors hover:text-ink"
                  >
                    CV
                  </a>
                </li>
              </ul>
            </nav>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Switch between light and dark theme"
              className="inline-flex size-10 items-center justify-center rounded-full border border-rule text-ink-2 transition-colors hover:text-ink"
            >
              <svg viewBox="0 0 20 20" aria-hidden="true" className="size-4">
                <circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 3a7 7 0 0 1 0 14Z" fill="currentColor" />
              </svg>
            </button>

            <button
              ref={menuButton}
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full border border-rule md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              <span aria-hidden="true" className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 h-px w-4 bg-ink transition-transform duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-4 bg-ink transition-transform duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <nav id="mobile-nav" aria-label="Primary" hidden={!open} className="border-t border-rule bg-paper md:hidden">
        <ul className="px-4 py-2">
          {[...NAV, { href: cv.href, id: "cv", label: "CV" }].map((n) => (
            <li key={n.id} className="border-b border-rule last:border-none">
              <a
                href={n.href}
                {...(n.id === "cv" ? cvProps : {})}
                onClick={() => setOpen(false)}
                className="flex min-h-14 items-center text-2xl font-semibold tracking-tight"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
