"use client";

import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/data";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const resolveHref = (href: string) => (isHome ? href : `/${href}`);

  return (
    <footer className="bg-midnight py-16 text-parchment">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-12 border-b border-parchment/15 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="font-display text-4xl font-light tracking-tight">Amrit Palace</span>
            <p className="mt-4 max-w-xs font-sans text-sm text-parchment/60">
              A modern expression of timeless Indian cuisine. Galle, Sri Lanka.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs tracking-[0.2em] text-parchment/50 uppercase">Navigate</h4>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={resolveHref(link.href)}
                    className="font-sans text-sm text-parchment/80 transition-colors hover:text-saffron"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-sans text-xs tracking-[0.2em] text-parchment/50 uppercase">Contact</h4>
            <div className="mt-5 flex flex-col gap-2 font-sans text-sm text-parchment/80">
              <span>12 King Street, Galle, Sri Lanka</span>
              <span>+94 91 000 0000</span>
              <span>hello@amritpalace.com</span>
            </div>
            <a
              href={resolveHref("#reserve")}
              className="mt-6 inline-block border border-parchment/50 px-6 py-3 font-sans text-xs tracking-[0.2em] uppercase transition-all duration-400 hover:bg-parchment hover:text-midnight"
            >
              Reserve a Table
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 sm:flex-row sm:items-center">
          <span className="font-sans text-xs text-parchment/40">
            © {new Date().getFullYear()} Amrit Palace. All rights reserved.
          </span>
          <span className="font-sans text-xs tracking-[0.2em] text-parchment/40 uppercase">
            Crafted with intention.
          </span>
        </div>
      </div>
    </footer>
  );
}
