"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Lightbox from "./Lightbox";
import { GALLERY_IMAGES } from "@/lib/data";

const spanClasses: Record<string, string> = {
  portrait: "row-span-2 aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  wide: "sm:col-span-2 aspect-[16/7]",
};

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative bg-parchment py-28 sm:py-36">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-14">
        <SectionHeading eyebrow="In The Room" lines={["Gallery"]} size="lg" />

        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.button
              key={img.src}
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className={`group relative overflow-hidden text-left ${spanClasses[img.size]}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-midnight/50 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                <span className="p-4 font-sans text-[11px] tracking-[0.15em] text-parchment uppercase">
                  {img.alt}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        images={GALLERY_IMAGES}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onIndexChange={setActiveIndex}
      />
    </section>
  );
}
