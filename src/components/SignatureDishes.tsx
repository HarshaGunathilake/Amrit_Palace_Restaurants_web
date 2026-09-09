"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { SIGNATURE_DISHES } from "@/lib/data";

export default function SignatureDishes() {
  return (
    <section className="relative bg-midnight py-28 text-parchment sm:py-36">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-14">
        <SectionHeading eyebrow="Signature" lines={["Signatures"]} tone="light" size="lg" />

        <div className="mt-16 flex flex-col">
          {SIGNATURE_DISHES.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`group grid grid-cols-1 items-center gap-8 border-t border-parchment/15 py-10 last:border-b sm:gap-12 lg:grid-cols-12 ${
                i % 2 === 1 ? "lg:text-right" : ""
              }`}
            >
              <div
                className={`relative aspect-[4/5] w-full max-w-xs overflow-hidden lg:col-span-4 ${
                  i % 2 === 1 ? "lg:order-2 lg:ml-auto" : ""
                }`}
              >
                <Image
                  src={dish.image}
                  alt={dish.name.join(" ")}
                  fill
                  sizes="(min-width: 1024px) 25vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <div
                className={`lg:col-span-8 ${
                  i % 2 === 1 ? "lg:order-1 flex flex-col lg:items-end" : ""
                }`}
              >
                <h3 className="font-display text-3xl font-light uppercase leading-[0.95] tracking-tight transition-transform duration-500 group-hover:translate-x-1 sm:text-5xl lg:text-6xl">
                  {dish.name.map((line, li) => (
                    <span key={li} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
                <p className="mt-4 max-w-sm font-sans text-sm text-parchment/70">
                  {dish.description}
                  {dish.dietary && (
                    <span className="ml-2 inline-block border border-saffron/60 px-1.5 py-0.5 text-[10px] tracking-[0.15em] text-saffron">
                      {dish.dietary}
                    </span>
                  )}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-saffron opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                  <span className="font-display text-2xl font-light text-saffron">
                    {dish.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
