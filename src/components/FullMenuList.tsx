"use client";

import { motion } from "framer-motion";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/lib/data";

const slug = (category: string) =>
  category.toLowerCase().replace(/[^a-z]+/g, "-").replace(/(^-|-$)/g, "");

export default function FullMenuList() {
  return (
    <section className="relative bg-parchment py-20 sm:py-28">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-14">
        <nav
          aria-label="Menu categories"
          className="flex flex-wrap gap-x-8 gap-y-3 border-b border-espresso/20 pb-6"
        >
          {MENU_CATEGORIES.map((cat) => (
            <a
              key={cat}
              href={`#${slug(cat)}`}
              className="font-sans text-xs tracking-[0.2em] text-espresso/70 uppercase transition-colors hover:text-saffron"
            >
              {cat}
            </a>
          ))}
        </nav>

        {MENU_CATEGORIES.map((category) => {
          const items = MENU_ITEMS.filter((item) => item.category === category);
          return (
            <div key={category} id={slug(category)} className="scroll-mt-28 border-b border-espresso/15 py-16 last:border-b-0">
              <h2 className="font-display text-3xl font-light uppercase tracking-tight text-midnight sm:text-4xl">
                {category}
              </h2>

              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
                className="mt-8"
              >
                {items.map((item) => (
                  <motion.li
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                    className="border-b border-espresso/15 py-6 last:border-b-0"
                  >
                    <div className="flex items-baseline justify-between gap-6">
                      <h3 className="font-display text-xl font-light uppercase tracking-tight text-midnight sm:text-2xl">
                        {item.name}
                      </h3>
                      <span className="whitespace-nowrap font-display text-lg text-espresso">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-2 max-w-md font-sans text-sm text-espresso/80">
                      {item.description}
                    </p>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          );
        })}

        <div className="pt-4 text-center">
          <p className="font-sans text-sm text-espresso/70">
            A discretionary service charge of 10 percent is added to all bills. Please tell us
            about any allergies or dietary needs when booking.
          </p>
          <a
            href="/#reserve"
            className="mt-8 inline-flex items-center gap-3 border border-midnight/40 px-7 py-3.5 font-sans text-xs tracking-[0.2em] text-midnight uppercase transition-all duration-400 hover:bg-midnight hover:text-parchment"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </section>
  );
}
