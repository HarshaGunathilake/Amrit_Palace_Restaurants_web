"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RevealText from "./RevealText";
import { fadeUp } from "@/lib/motion";

export default function IntroSection() {
  return (
    <section className="relative overflow-hidden bg-parchment pt-28 pb-14 sm:pt-36 sm:pb-20">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-6 sm:px-10 lg:grid-cols-12 lg:gap-6 lg:px-14">
        <div className="lg:col-span-7 lg:col-start-1">
          <RevealText
            lines={["Korean Food.", "Bold Flavour.", "Good Company."]}
            as="h2"
            className="font-display text-[clamp(40px,6.5vw,96px)] font-light uppercase leading-[0.96] tracking-tight text-midnight"
          />
        </div>

        <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-sans text-base leading-relaxed text-espresso/80 sm:text-lg"
          >
            Uncle Yoon brings the bold flavours and comforting character of
            Korean cuisine to Russell Street, Melbourne.
          </motion.p>
        </div>
      </div>

      <div className="relative mx-6 mt-20 aspect-[16/9] max-w-[1600px] overflow-hidden sm:mx-10 lg:mx-14 lg:ml-auto lg:aspect-[21/9] lg:w-[86%]">
        <Image
          src="/media/intro-kitchen.jpg"
          alt="The kitchen at Uncle Yoon, mid-service"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
