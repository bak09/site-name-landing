"use client";

import { useEffect, useState } from "react";
import Container from "./ui/container";

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path d={d} fill="currentColor" />
    </svg>
  );
}

const links = [
  { href: "#smart-contracts", label: "Smart Contracts" },
  { href: "#services", label: "Services" },
  { href: "#solutions", label: "Solutions" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#whitepaper", label: "Whitepaper" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/40 backdrop-blur-xl">
      <Container>
        <div className="flex h-[110px] items-start justify-between pt-10">
          <div className="text-white font-medium text-[24px] leading-[29px]">
            SITE NAME
          </div>

          <nav
            className="hidden md:flex items-center gap-10 text-white text-[18px] leading-[22px] font-normal"
            style={{ fontFamily: "var(--font-space)" }}
            aria-label="Primary"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:opacity-80">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4 text-white">
            <a href="#" aria-label="GitHub" className="hover:opacity-80">
              <Icon d="M12 .5C5.7.5.6 5.7.6 12.1c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.8-.7 2.2-1.2.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.4 5.7 18.3.5 12 .5Z" />
            </a>
            <a href="#" aria-label="Discord" className="hover:opacity-80">
              <Icon d="M20.3 4.4A19.2 19.2 0 0 0 16 3.1l-.2.4a17.8 17.8 0 0 1 3.5 1.8 12.3 12.3 0 0 0-14.6 0A18 18 0 0 1 8.2 3.5l-.2-.4A19.2 19.2 0 0 0 3.7 4.4C1.2 8 1.5 11.6 1.5 11.6A19 19 0 0 0 6.3 14l.6-.8a11.3 11.3 0 0 1-1.8-.9l.4-.3a13.5 13.5 0 0 0 13 0l.4.3a11.3 11.3 0 0 1-1.8.9l.6.8a19 19 0 0 0 4.8-2.4s.3-3.6-2.2-7.2ZM8 11.1c-.7 0-1.3-.6-1.3-1.3S7.3 8.5 8 8.5s1.3.6 1.3 1.3S8.7 11.1 8 11.1Zm8 0c-.7 0-1.3-.6-1.3-1.3S15.3 8.5 16 8.5s1.3.6 1.3 1.3S16.7 11.1 16 11.1Z" />
            </a>
            <a href="#" aria-label="Reddit" className="hover:opacity-80">
              <Icon d="M14.6 3.5 13.6 7c2.5.2 4.5 1.5 5.6 3.2.9-.2 1.8.5 1.8 1.5 0 .8-.6 1.4-1.3 1.5.1.4.1.8.1 1.2 0 3-3.4 5.4-7.6 5.4S4.6 17.4 4.6 14.4c0-.4 0-.8.1-1.2-.7-.1-1.3-.7-1.3-1.5 0-1 .9-1.7 1.8-1.5C6.3 8.5 8.3 7.2 10.8 7l1.1-4c.1-.3.4-.5.7-.4l2 .5ZM8.7 13.5c0 .8-.6 1.4-1.4 1.4S5.9 14.3 5.9 13.5c0-.8.6-1.4 1.4-1.4s1.4.6 1.4 1.4Zm10.1 0c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4c0-.8.6-1.4 1.4-1.4s1.4.6 1.4 1.4ZM9.1 16.4c.9.9 2 1.3 3.1 1.3s2.2-.4 3.1-1.3l.7.7c-1.1 1.1-2.4 1.6-3.8 1.6s-2.7-.5-3.8-1.6l.7-.7Z" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-80">
              <Icon d="M18.9 2H22l-6.8 7.8L23.2 22h-6.4l-5-6.5L6 22H2.8l7.3-8.4L.8 2h6.6l4.5 6L18.9 2Zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20Z" />
            </a>
          </div>

          <button
            className="md:hidden rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="rounded-2xl border border-white/10 bg-black/70 p-3 backdrop-blur-xl">
              <nav className="grid gap-1 text-white/90" aria-label="Mobile">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 hover:bg-white/10"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}