"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { RATING_SUMMARY, REVIEWS } from "@/lib/data";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1 text-saffron">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-parchment py-28 sm:py-36">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-14">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Guest Voices" lines={["At The Table"]} size="lg" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start gap-2 border-l border-espresso/25 pl-6 lg:items-end lg:border-l-0 lg:border-r lg:pl-0 lg:pr-6"
          >
            <span className="font-display text-4xl font-light text-midnight">{RATING_SUMMARY.score}</span>
            <span className="font-sans text-xs tracking-[0.2em] text-espresso uppercase">
              {RATING_SUMMARY.label}
            </span>
            <Stars />
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <motion.figure
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
              className="flex flex-col gap-5 border-t border-espresso/20 pt-6"
            >
              <Stars />
              <blockquote className="font-display text-xl font-light leading-snug text-midnight sm:text-2xl">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-baseline justify-between gap-4 font-sans text-xs tracking-[0.1em] text-espresso/70">
                <span className="uppercase">{review.name}</span>
                <span className="whitespace-nowrap text-espresso/50">
                  {review.platform}, {review.date}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
