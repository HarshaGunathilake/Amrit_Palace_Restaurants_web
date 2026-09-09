"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp } from "@/lib/motion";

export default function IntroSection() {
  return (
    <section className="relative overflow-hidden bg-parchment pt-28 pb-14 sm:pt-36 sm:pb-20">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:gap-8 lg:px-14">
        <div className="lg:col-span-3">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 font-sans text-xs tracking-[0.25em] text-saffron uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-saffron" aria-hidden="true" />
            Our Philosophy
          </motion.span>
        </div>

        <div className="lg:col-span-9">
          <SectionHeading lines={["Cuisine", "Rooted In", "Memory"]} size="xl" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-10 max-w-xl"
          >
            <p className="font-sans text-base leading-relaxed text-espresso sm:text-lg">
              Every dish at Amrit Palace begins with a memory: a grandmother&apos;s
              hand with the spice grinder, a coastal kitchen at dawn, a fire
              that has never quite gone out. We cook the way our families
              cooked, refined only where refinement serves the flavour, never
              for its own sake.
            </p>
            <a
              href="#story"
              className="mt-6 inline-block border-b border-midnight/30 font-sans text-xs tracking-[0.2em] text-midnight uppercase transition-colors hover:border-saffron"
            >
              Read Our Story
            </a>
          </motion.div>
        </div>
      </div>

      <div className="relative mx-6 mt-20 aspect-[16/9] max-w-[1600px] overflow-hidden sm:mx-10 lg:mx-14 lg:aspect-[21/9]">
        <Image
          src="/media/intro-kitchen.jpg"
          alt="The kitchen at Amrit Palace, mid-service"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
