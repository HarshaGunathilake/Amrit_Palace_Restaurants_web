"use client";

import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export default function Hero() {
  return (
    <section id="home" className="relative flex h-[100svh] w-full items-center overflow-hidden bg-midnight">
      <MotionConfig reducedMotion="user">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.09 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        >
          <Image
            src="/media/hero-poster.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-90"
          />
        </motion.div>
      </MotionConfig>
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/45 to-midnight/20" />
      <div className="ember-glow pointer-events-none absolute inset-0" />
      <div className="grain pointer-events-none absolute inset-0" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col px-6 pt-24 sm:px-10 lg:px-14"
      >
        <motion.h1
          variants={item}
          className="font-display text-[clamp(72px,16vw,232px)] font-medium uppercase leading-[0.82] tracking-tightest text-parchment"
        >
          Amrit
          <br />
          <span className="text-saffron">Palace</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-md font-display text-2xl font-light italic text-parchment/85 sm:text-3xl"
        >
          A modern expression of timeless Indian cuisine.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="#reserve"
            className="group inline-flex items-center gap-3 border border-saffron bg-saffron px-7 py-3.5 font-sans text-xs tracking-[0.2em] text-parchment uppercase transition-all duration-400 hover:bg-transparent hover:text-parchment"
          >
            Reserve a Table
            <span className="transition-transform duration-400 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] text-parchment/80 uppercase underline decoration-transparent underline-offset-4 transition-colors hover:decoration-saffron hover:text-parchment"
          >
            Explore the Menu
          </a>
        </motion.div>

        <motion.span
          variants={item}
          className="mt-16 font-sans text-xs tracking-[0.3em] text-parchment/50 uppercase"
        >
          Established 1996, Galle
        </motion.span>
      </motion.div>
    </section>
  );
}
