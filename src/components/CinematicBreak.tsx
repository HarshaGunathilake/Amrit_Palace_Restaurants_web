"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CinematicBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-midnight">
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src="/media/fire-to-table.jpg"
          alt="Flames rising from the tandoor"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-midnight/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/40" />
      </motion.div>
      <div className="ember-glow pointer-events-none absolute inset-0" />
      <div className="grain pointer-events-none absolute inset-0" />

      <motion.div
        style={{ y }}
        className="relative z-10 flex h-full items-center justify-center px-6 text-center"
      >
        <h2 className="font-display text-[clamp(56px,13vw,220px)] font-medium uppercase leading-[0.82] tracking-tightest text-parchment">
          From Fire
          <br />
          <span className="text-saffron">To Table</span>
        </h2>
      </motion.div>
    </section>
  );
}
