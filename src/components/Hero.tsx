"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { lineReveal, staggerContainer } from "@/lib/motion";

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex h-[100svh] w-full items-center overflow-hidden bg-midnight"
    >
      <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 9, ease: "easeOut" }}
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
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-midnight/25" />
      <div className="grain pointer-events-none absolute inset-0" />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col px-6 pt-24 sm:px-10 lg:px-14"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.12, 0.3)}
          className="flex flex-col"
        >
          <span className="text-reveal-mask">
            <motion.span
              variants={lineReveal}
              className="block font-sans text-xs tracking-[0.35em] text-walnut uppercase"
            >
              Melbourne · Korean Cuisine
            </motion.span>
          </span>

          <h1 className="mt-5 font-display text-[clamp(38px,13vw,192px)] font-medium uppercase leading-[0.86] tracking-tight text-parchment">
            <span className="text-reveal-mask block">
              <motion.span variants={lineReveal} className="block">
                A Taste
              </motion.span>
            </span>
            <span className="text-reveal-mask block">
              <motion.span variants={lineReveal} className="block">
                Of Korea
              </motion.span>
            </span>
            <span className="text-reveal-mask block">
              <motion.span variants={lineReveal} className="block text-walnut">
                In Melbourne
              </motion.span>
            </span>
          </h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-md font-display text-xl font-light italic text-parchment/85 sm:text-2xl"
          >
            Bold Korean flavours, comforting classics and dishes made to be shared.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="#reserve"
              className="group inline-flex items-center gap-3 rounded-full border border-korean-red bg-korean-red px-7 py-3.5 font-sans text-xs tracking-[0.2em] text-parchment uppercase transition-all duration-400 hover:bg-transparent hover:text-parchment"
            >
              Reserve a Table
              <span className="transition-transform duration-400 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] text-parchment/80 uppercase underline decoration-transparent underline-offset-4 transition-colors hover:decoration-walnut hover:text-parchment"
            >
              Explore Menu
            </a>
          </motion.div>

          <motion.span
            variants={item}
            className="mt-16 font-sans text-xs tracking-[0.3em] text-parchment/50 uppercase"
          >
            205–207 Russell St · Melbourne
          </motion.span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-sans text-[10px] tracking-[0.3em] text-parchment/50 uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-parchment/40"
        />
      </motion.div>
    </section>
  );
}
