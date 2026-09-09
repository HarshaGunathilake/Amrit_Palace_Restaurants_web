"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => !!el
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  const resolveHref = (href: string) => (isHome ? href : `/${href}`);

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (!isHome) {
      window.location.href = `/${href}`;
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-midnight/90 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 sm:px-10 lg:px-14">
          <a
            href={resolveHref("#home")}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="font-display text-xl tracking-[0.15em] text-parchment"
          >
            AP
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="relative">
                <a
                  href={resolveHref(link.href)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-sans text-[11px] tracking-[0.2em] text-parchment/90 uppercase transition-colors hover:text-parchment"
                >
                  {link.label}
                </a>
                {isHome && active === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 h-px w-full bg-saffron"
                  />
                )}
              </li>
            ))}
          </ul>

          <a
            href={resolveHref("#reserve")}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#reserve");
            }}
            className="group hidden border border-parchment/60 px-5 py-2.5 font-sans text-[11px] tracking-[0.2em] text-parchment uppercase transition-all duration-400 hover:bg-parchment hover:text-midnight lg:inline-block"
          >
            Reserve a Table
          </a>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="text-parchment lg:hidden"
          >
            <Menu size={26} strokeWidth={1.5} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[60] flex flex-col bg-midnight px-8 py-8"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xl tracking-[0.15em] text-parchment">AP</span>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-parchment">
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>

            <ul className="flex flex-1 flex-col items-start justify-center gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                >
                  <a
                    href={resolveHref(link.href)}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="font-display text-5xl font-light uppercase tracking-tight text-parchment"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <a
              href={resolveHref("#reserve")}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#reserve");
              }}
              className="border border-parchment/60 px-6 py-4 text-center font-sans text-xs tracking-[0.2em] text-parchment uppercase"
            >
              Reserve a Table
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
