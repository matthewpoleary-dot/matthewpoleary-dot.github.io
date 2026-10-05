"use client";

import { useEffect, useRef, useState } from "react";
import type { Cv } from "@/lib/cv";

const NAV = [
  { href: "#work", id: "work", label: "Work" },
  { href: "#thinking", id: "thinking", label: "Thinking" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#about", id: "about", label: "About" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export default function Header({ cv }: { cv: Cv }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 8);
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-300 ${
        scrolled || open ? "border-b border-rule bg-paper/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="px-4 sm:px-8">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4">
          <a href="#top" className="group flex items-baseline gap-2" aria-label="Matthew O'Leary, back to top">
            <span className="display text-[1.35rem] leading-none">Matthew O&apos;Leary</span>
            <span className="label hidden transition-colors group-hover:text-accent md:inline">
              Business × Technology
            </span>
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    href={n.href}
                    aria-current={active === n.id ? "location" : undefined}
                    className={`relative inline-flex min-h-11 items-center px-3 text-sm transition-colors hover:text-ink ${
                      active === n.id ? "text-ink" : "text-ink-2"
                    }`}
                  >
                    {n.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 bottom-2 h-px origin-left bg-accent transition-transform duration-300 ${
                        active === n.id ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={cv.href}
              {...(cv.available ? { target: "_blank", rel: "noopener" } : {})}
              className="inline-flex h-10 items-center rounded-full bg-ink px-4 text-sm font-medium text-paper transition-transform hover:-translate-y-px active:translate-y-0"
            >
              {cv.label}
            </a>
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
        <ul className="mx-auto max-w-6xl px-4 py-2">
          {NAV.map((n, i) => (
            <li key={n.id} className="border-b border-rule last:border-none">
              <a href={n.href} onClick={() => setOpen(false)} className="flex items-baseline justify-between py-4">
                <span className="display text-3xl">{n.label}</span>
                <span className="label">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
