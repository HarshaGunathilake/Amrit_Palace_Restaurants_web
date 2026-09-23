"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Lightbox from "./Lightbox";
import { GALLERY_IMAGES } from "@/lib/data";

const aspectClasses: Record<string, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  wide: "aspect-[16/8]",
};

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative bg-parchment py-28 sm:py-36">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-14">
        <SectionHeading eyebrow="In The Room" lines={["Gallery"]} size="lg" />

        <div className="mt-16 columns-1 gap-3 sm:columns-2 sm:gap-4 lg:columns-3">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.button
              key={img.src}
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.06 }}
              className={`group relative mb-3 block w-full break-inside-avoid overflow-hidden text-left sm:mb-4 ${aspectClasses[img.size]}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/0 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-5 opacity-0 transition-all duration-400 group-hover:opacity-100">
                <span className="translate-y-2 font-sans text-[11px] tracking-[0.2em] text-parchment uppercase transition-transform duration-400 group-hover:translate-y-0">
                  {img.alt}
                </span>
              </div>

              <div className="absolute right-4 top-4 flex h-9 w-9 -translate-y-2 items-center justify-center rounded-full border border-parchment/60 bg-midnight/30 text-parchment opacity-0 backdrop-blur-sm transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                <Expand size={14} strokeWidth={1.5} />
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
