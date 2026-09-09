"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { COUNTRY_CODES, type CountryCode } from "@/lib/data";

type PhoneCountrySelectProps = {
  value: string;
  onChange: (country: CountryCode) => void;
};

/**
 * Renders a real flag graphic (from the `flag-icons` package) rather than a
 * Unicode flag emoji — Windows has no flag glyphs in its emoji font and
 * falls back to showing the raw two-letter country code as text.
 */
function FlagIcon({ iso2, size = 18 }: { iso2: string; size?: number }) {
  return (
    <span
      className={`fi fi-${iso2.toLowerCase()} shrink-0 rounded-[2px]`}
      style={{ fontSize: size }}
      aria-hidden="true"
    />
  );
}

export default function PhoneCountrySelect({ value, onChange }: PhoneCountrySelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  // Selecting an option removes it (and the whole panel) from the DOM as part
  // of the same click gesture that opened it; the browser can end up
  // re-targeting that click at whatever is left underneath, which is the
  // trigger button, immediately re-opening the panel it just closed. This
  // guard makes the trigger ignore a toggle that lands right after a select.
  const justSelectedRef = useRef(false);

  const selected = COUNTRY_CODES.find((c) => c.iso2 === value) ?? COUNTRY_CODES[0];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRY_CODES;
    return COUNTRY_CODES.filter(
      (c) => c.name.toLowerCase().includes(q) || c.dial.includes(q)
    );
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleSelect = (country: CountryCode) => {
    justSelectedRef.current = true;
    onChange(country);
    setOpen(false);
    setQuery("");
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => {
          if (justSelectedRef.current) {
            justSelectedRef.current = false;
            return;
          }
          setOpen((o) => !o);
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Country code, currently ${selected.name} ${selected.dial}`}
        className="flex h-full items-center gap-1.5 border border-r-0 border-parchment/20 bg-parchment/[0.04] px-3 py-3.5 transition-colors hover:bg-parchment/[0.07] focus:border-saffron focus:outline-none"
      >
        <FlagIcon iso2={selected.iso2} size={18} />
        <ChevronDown
          size={13}
          strokeWidth={1.5}
          className={`text-parchment/50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-[calc(100%+8px)] z-30 w-[320px] max-w-[min(320px,85vw)] border border-parchment/15 bg-midnight shadow-2xl">
          <div className="border-b border-parchment/15 p-3">
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  if (filtered.length === 1) handleSelect(filtered[0]);
                }
              }}
              placeholder="Search"
              className="w-full border-b border-parchment/20 bg-transparent px-1 py-2 font-sans text-sm text-parchment placeholder:text-parchment/40 focus:border-saffron focus:outline-none"
            />
          </div>

          <ul role="listbox" className="phone-country-list max-h-72 overflow-y-auto py-1">
            {filtered.map((c) => (
              <li key={c.iso2}>
                <button
                  type="button"
                  role="option"
                  aria-selected={c.iso2 === selected.iso2}
                  onClick={() => handleSelect(c)}
                  className={`flex w-full items-center justify-between gap-3 border-l-2 px-4 py-2.5 text-left font-sans text-sm transition-colors ${
                    c.iso2 === selected.iso2
                      ? "border-saffron bg-parchment/[0.05] text-parchment"
                      : "border-transparent text-parchment/85 hover:border-saffron/40 hover:bg-parchment/[0.05]"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <FlagIcon iso2={c.iso2} size={17} />
                    {c.name}
                  </span>
                  <span className="whitespace-nowrap text-parchment/50">{c.dial}</span>
                </button>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="px-4 py-6 text-center font-sans text-sm text-parchment/40">
                No countries found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
