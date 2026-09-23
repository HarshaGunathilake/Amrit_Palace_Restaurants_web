"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CinematicBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  const hungryOpacity = useTransform(scrollYProgress, [0.15, 0.42, 0.58], [1, 1, 0]);
  const hungryY = useTransform(scrollYProgress, [0.42, 0.58], ["0%", "-30%"]);
  const happyOpacity = useTransform(scrollYProgress, [0.5, 0.66, 0.9], [0, 1, 1]);
  const happyY = useTransform(scrollYProgress, [0.5, 0.66], ["30%", "0%"]);

  return (
    <section ref={ref} className="relative h-[130svh] w-full overflow-hidden bg-midnight">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0">
          <Image
            src="/media/fire-to-table.jpg"
            alt="Flames rising from the wok"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-midnight/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/40" />
        </motion.div>
        <div className="grain pointer-events-none absolute inset-0" />

        <motion.div
          style={{ y }}
          className="relative z-10 flex h-full items-center justify-center px-6 text-center"
        >
          <motion.h2
            style={{ opacity: hungryOpacity, y: hungryY }}
            className="absolute font-display text-[clamp(48px,11vw,200px)] font-medium uppercase leading-[0.82] tracking-tight text-parchment"
          >
            Come Hungry.
          </motion.h2>
          <motion.h2
            style={{ opacity: happyOpacity, y: happyY }}
            className="absolute font-display text-[clamp(48px,11vw,200px)] font-medium uppercase leading-[0.82] tracking-tight text-walnut"
          >
            Leave Happy.
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}
