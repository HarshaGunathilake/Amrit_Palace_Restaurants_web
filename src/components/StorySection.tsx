"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp } from "@/lib/motion";

export default function StorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="story" className="relative bg-parchment pt-14 pb-28 sm:pt-20 sm:pb-36">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <div ref={ref} className="relative aspect-[4/5] w-full overflow-hidden lg:sticky lg:top-28">
            <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[8%] h-[116%]">
              <Image
                src="/media/story-founder.jpg"
                alt="Inside Uncle Yoon, Russell Street"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="flex flex-col justify-center gap-10">
            <SectionHeading eyebrow="Our Story" lines={["Korean Flavour,", "Made To Share."]} size="lg" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex max-w-lg flex-col gap-5 font-sans text-base leading-relaxed text-espresso/85 sm:text-lg"
            >
              <p>
                Uncle Yoon celebrates the bold, comforting and generous
                character of Korean cuisine.
              </p>
              <p>
                From sizzling favourites to hearty noodles and shareable
                dishes, every plate is designed to bring people together
                around the table.
              </p>
            </motion.div>

            <motion.a
              href="#menu"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group inline-flex w-fit items-center gap-3 border-b border-midnight/30 pb-1 font-sans text-xs tracking-[0.2em] text-midnight uppercase transition-colors hover:border-korean-red hover:text-korean-red"
            >
              Discover Our Story
              <span className="transition-transform duration-400 group-hover:translate-x-1">→</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
