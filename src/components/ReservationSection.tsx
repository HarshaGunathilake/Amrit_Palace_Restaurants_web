"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ReservationForm from "./ReservationForm";

export default function ReservationSection() {
  return (
    <section id="reserve" className="relative overflow-hidden bg-midnight py-28 sm:py-36">
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/media/reservation-bg.jpg"
          alt="Table set for sharing at Uncle Yoon"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/85 to-midnight" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-14">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="font-display text-[clamp(48px,9vw,120px)] font-light uppercase leading-[0.88] tracking-tightest text-parchment"
          >
            Your Table
            <br />
            Awaits.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-md font-sans text-base text-parchment/70"
          >
            Join us for Korean flavours, generous plates and good company.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-16 border-t border-parchment/15 pt-14"
        >
          <ReservationForm />
        </motion.div>
      </div>
    </section>
  );
}
