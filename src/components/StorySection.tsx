"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp } from "@/lib/motion";

const MILESTONES = [
  {
    year: "1996",
    title: "The Beginning",
    copy: "A single room on the Galle coast road, six tables, and a wood-fired tandoor built by hand.",
  },
  {
    year: "2008",
    title: "A New Chapter",
    copy: "The dining room expanded to the courtyard, and our founder's daughter took over the kitchen.",
  },
  {
    year: "2026",
    title: "The Table Today",
    copy: "Three decades of recipes, refined but never rewritten, served the way they always have been.",
  },
];

export default function StorySection() {
  return (
    <section id="story" className="relative bg-parchment pt-14 pb-28 sm:pt-20 sm:pb-36">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-14">
        <SectionHeading eyebrow="Heritage" lines={["Our Story"]} size="lg" />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative aspect-[3/4] w-full overflow-hidden lg:sticky lg:top-28"
          >
            <Image
              src="/media/story-founder.jpg"
              alt="The founder's family in the original dining room"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          <div className="flex flex-col gap-14">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-lg font-sans text-base leading-relaxed text-espresso sm:text-lg"
            >
              Amrit Palace opened its doors in 1996 with a single ambition:
              to serve the food of home, without compromise, to strangers.
              Every ingredient is sourced with the same care our founder once
              gave her own family&apos;s table — the tandoor still fired with
              wood, the spice still ground by hand each morning. What has
              changed is not the food, but the room around it: a modern
              interpretation of hospitality built on an unchanged foundation.
            </motion.p>

            <div className="flex flex-col gap-10 border-t border-espresso/20 pt-10">
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="grid grid-cols-[auto_1fr] items-baseline gap-x-6"
                >
                  <span className="font-display text-3xl font-light text-saffron sm:text-4xl">
                    {m.year}
                  </span>
                  <div>
                    <h3 className="font-sans text-xs tracking-[0.2em] text-midnight uppercase">
                      {m.title}
                    </h3>
                    <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-espresso">
                      {m.copy}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
