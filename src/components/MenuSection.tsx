"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { MENU_CATEGORIES, MENU_ITEMS, type MenuCategory } from "@/lib/data";

export default function MenuSection() {
  const [category, setCategory] = useState<MenuCategory>("ENTREES");
  const [hovered, setHovered] = useState<string | null>(null);

  const items = useMemo(
    () => MENU_ITEMS.filter((item) => item.category === category),
    [category]
  );

  const hoveredItem = MENU_ITEMS.find((i) => i.name === hovered);

  return (
    <section id="menu" className="relative bg-parchment py-28 sm:py-36">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-14">
        <SectionHeading eyebrow="À La Carte" lines={["The Menu"]} size="lg" />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-3">
            <nav className="flex gap-x-6 gap-y-3 overflow-x-auto lg:sticky lg:top-32 lg:flex-col lg:overflow-visible lg:border-l lg:border-espresso/15">
              {MENU_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`relative shrink-0 py-1 text-left font-sans text-xs tracking-[0.2em] uppercase transition-colors lg:py-2 lg:pl-6 ${
                    category === cat ? "text-korean-red" : "text-espresso/55 hover:text-midnight"
                  }`}
                >
                  {category === cat && (
                    <motion.span
                      layoutId="menu-cat-indicator"
                      className="absolute inset-x-0 -bottom-1 h-px bg-korean-red lg:inset-y-0 lg:left-0 lg:h-auto lg:w-px"
                    />
                  )}
                  {cat}
                </button>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.ul
                key={category}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
              >
                {items.map((item) => (
                  <motion.li
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                    onMouseEnter={() => setHovered(item.name)}
                    onMouseLeave={() => setHovered(null)}
                    className="group border-b border-espresso/15 py-6 first:pt-0"
                  >
                    <div className="flex items-baseline gap-4">
                      <h3 className="font-display text-xl font-light uppercase tracking-tight text-midnight transition-colors group-hover:text-korean-red sm:text-2xl">
                        {item.name}
                      </h3>
                      <span
                        className="flex-1 border-b border-dotted border-espresso/25 translate-y-[-4px]"
                        aria-hidden="true"
                      />
                      <span className="whitespace-nowrap font-display text-lg text-espresso">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-2 max-w-md font-sans text-sm text-espresso/75">
                      {item.description}
                    </p>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>

            <a
              href="/menu"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-midnight/40 px-6 py-3 font-sans text-xs tracking-[0.2em] text-midnight uppercase transition-all duration-400 hover:bg-midnight hover:text-parchment"
            >
              View Full Menu →
            </a>
          </div>

          <div className="relative mt-10 hidden aspect-[4/5] overflow-hidden lg:col-span-3 lg:mt-0 lg:block">
            <AnimatePresence mode="wait">
              {hoveredItem ? (
                <motion.div
                  key={hoveredItem.image}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={hoveredItem.image}
                    alt={hoveredItem.name}
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-onyx/5"
                >
                  <span className="font-sans text-xs tracking-[0.2em] text-espresso/50 uppercase">
                    Hover a dish
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
