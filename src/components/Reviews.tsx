"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { REVIEWS } from "@/lib/data";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1 text-korean-red">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function Reviews() {
  const hasReviews = REVIEWS.length > 0;

  return (
    <section id="reviews" className="relative bg-parchment py-28 sm:py-36">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-14">
        <SectionHeading eyebrow="Guest Voices" lines={["What Our", "Guests Say"]} align="center" size="lg" />

        {hasReviews ? (
          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((review, i) => (
              <motion.figure
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
                className="flex flex-col gap-5"
              >
                <Quote size={28} strokeWidth={1.2} className="text-walnut/60" />
                <blockquote className="font-display text-2xl font-light leading-snug text-midnight sm:text-3xl">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <Stars />
                <figcaption className="flex items-baseline justify-between gap-4 font-sans text-xs tracking-[0.1em] text-espresso/70">
                  <span className="uppercase">{review.name}</span>
                  <span className="whitespace-nowrap text-espresso/50">
                    {review.platform}, {review.date}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mt-16 flex max-w-xl flex-col items-center gap-4 text-center"
          >
            <Quote size={36} strokeWidth={1.1} className="text-walnut/50" />
            <p className="font-display text-2xl font-light italic text-espresso/70 sm:text-3xl">
              Customer reviews coming soon.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
