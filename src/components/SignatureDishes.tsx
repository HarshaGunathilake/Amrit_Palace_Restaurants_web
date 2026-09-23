"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { SIGNATURE_DISHES } from "@/lib/data";

export default function SignatureDishes() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const panel = el.querySelector("[data-panel]") as HTMLElement | null;
    const amount = (panel?.offsetWidth ?? el.clientWidth * 0.7) + 24;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="relative bg-midnight py-28 text-parchment sm:py-36">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-14">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <SectionHeading eyebrow="From Our Kitchen" lines={["Signature", "Dishes"]} tone="light" size="lg" />
            <p className="mt-6 max-w-md font-sans text-sm text-parchment/60 sm:text-base">
              Korean favourites with bold flavours and serious comfort.
            </p>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              aria-label="Scroll left"
              onClick={() => scrollByAmount(-1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-parchment/25 text-parchment transition-colors hover:border-walnut hover:text-walnut"
            >
              <ArrowLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => scrollByAmount(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-parchment/25 text-parchment transition-colors hover:border-walnut hover:text-walnut"
            >
              <ArrowRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 sm:px-10 lg:px-14"
      >
        {SIGNATURE_DISHES.map((dish, i) => (
          <motion.div
            key={dish.id}
            data-panel
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.06 }}
            className="group relative w-[85vw] shrink-0 snap-start overflow-hidden sm:w-[70vw] lg:w-[68vw] xl:w-[64vw]"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={dish.image}
                alt={dish.name.join(" ")}
                fill
                sizes="70vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
                <span className="font-sans text-xs tracking-[0.25em] text-walnut uppercase">
                  {dish.category}
                </span>
                <h3 className="mt-3 font-display text-3xl font-light uppercase leading-[0.95] tracking-tight text-parchment sm:text-5xl lg:text-6xl">
                  {dish.name.map((line, li) => (
                    <span key={li} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
                <p className="mt-4 max-w-md font-sans text-sm text-parchment/75 sm:text-base">
                  {dish.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* trailing spacer so the last panel can reach a comfortable stopping point */}
        <div className="w-px shrink-0" aria-hidden="true" />
      </div>
    </section>
  );
}
