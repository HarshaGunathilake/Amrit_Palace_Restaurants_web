"use client";

import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/data";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M14 9h3V5.5h-3c-2.2 0-4 1.8-4 4V12H7.5v3.5H10V21h3.5v-5.5H16l.7-3.5h-3.2v-1.7c0-.7.6-1.3 1.3-1.3Z" />
    </svg>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const resolveHref = (href: string) => (isHome ? href : `/${href}`);

  return (
    <footer className="bg-midnight pt-20 pb-10 text-parchment">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-14 border-b border-parchment/15 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="font-display text-[clamp(48px,8vw,110px)] font-light uppercase leading-[0.9] tracking-tight">
              Uncle Yoon
            </span>
            <p className="mt-4 font-sans text-xs tracking-[0.25em] text-parchment/50 uppercase">
              Korean Restaurant · Melbourne
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs tracking-[0.2em] text-parchment/50 uppercase">Navigate</h4>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={resolveHref(link.href)}
                    className="font-sans text-sm text-parchment/80 transition-colors hover:text-walnut"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={resolveHref("#reserve")}
                  className="font-sans text-sm text-parchment/80 transition-colors hover:text-walnut"
                >
                  Reserve a Table
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs tracking-[0.2em] text-parchment/50 uppercase">Visit</h4>
            <div className="mt-5 flex flex-col gap-2 font-sans text-sm text-parchment/80">
              <span>205–207 Russell St</span>
              <span>Melbourne VIC 3000</span>
              <span>+61 406 824 200</span>
              <span>Daily · 12 PM – 10 PM</span>
              <a
                href="https://maps.app.goo.gl/ZJ3NibjazkBm3WoN7"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-parchment/80 underline decoration-parchment/30 underline-offset-4 transition-colors hover:text-walnut hover:decoration-walnut"
              >
                Get Directions
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-parchment/70 transition-colors hover:text-walnut">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Facebook" className="text-parchment/70 transition-colors hover:text-walnut">
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 pt-10 sm:flex-row sm:items-end">
          <span className="font-display text-2xl font-light italic text-parchment/90 sm:text-3xl">
            See you at the table.
          </span>
          <span className="font-sans text-xs text-parchment/40">
            © {new Date().getFullYear()} Uncle Yoon. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
