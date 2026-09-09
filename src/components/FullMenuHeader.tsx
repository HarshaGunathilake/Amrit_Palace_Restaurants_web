"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export default function FullMenuHeader() {
  return (
    <section className="relative flex h-[62svh] min-h-[440px] w-full items-end overflow-hidden bg-midnight">
      <div className="absolute inset-0">
        <Image
          src="/media/gallery-01.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-midnight/70" />
      </div>
      <div className="grain pointer-events-none absolute inset-0" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 sm:px-10 lg:px-14"
      >
        <motion.span
          variants={item}
          className="mb-6 block font-sans text-xs tracking-[0.3em] text-saffron uppercase"
        >
          À La Carte
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display text-[clamp(48px,9vw,120px)] font-light uppercase leading-[0.9] tracking-tightest text-parchment"
        >
          The Menu
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-md font-sans text-sm tracking-[0.04em] text-parchment/80 sm:text-base"
        >
          Every dish we serve, from the first course to the last.
        </motion.p>

        <motion.div variants={item} className="mt-10">
          <a
            href="/#reserve"
            className="group inline-flex items-center gap-3 border border-parchment px-7 py-3.5 font-sans text-xs tracking-[0.2em] text-parchment uppercase transition-all duration-400 hover:bg-parchment hover:text-midnight"
          >
            Reserve a Table
            <span className="transition-transform duration-400 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
