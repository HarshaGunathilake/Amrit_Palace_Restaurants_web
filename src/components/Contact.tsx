"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M14 9h3V5.5h-3c-2.2 0-4 1.8-4 4V12H7.5v3.5H10V21h3.5v-5.5H16l.7-3.5h-3.2v-1.7c0-.7.6-1.3 1.3-1.3Z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative bg-parchment py-28 sm:py-36">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-14">
        <SectionHeading eyebrow="Visit Us" lines={["Come Find Us"]} size="lg" />

        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-10 lg:col-span-4"
          >
            <div>
              <h3 className="font-sans text-xs tracking-[0.2em] text-espresso uppercase">Address</h3>
              <p className="mt-3 font-display text-xl font-light text-midnight">
                205–207 Russell St
                <br />
                Melbourne VIC 3000, Australia
              </p>
            </div>
            <div>
              <h3 className="font-sans text-xs tracking-[0.2em] text-espresso uppercase">Phone</h3>
              <p className="mt-3 font-display text-xl font-light text-midnight">+61 406 824 200</p>
            </div>
            <div>
              <h3 className="font-sans text-xs tracking-[0.2em] text-espresso uppercase">Opening Hours</h3>
              <p className="mt-3 font-display text-xl font-light text-midnight">
                Daily
                <br />
                12:00 PM – 10:00 PM
              </p>
            </div>

            <a
              href="https://maps.app.goo.gl/ZJ3NibjazkBm3WoN7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-midnight/30 px-5 py-2.5 font-sans text-xs tracking-[0.2em] text-midnight uppercase transition-colors hover:border-korean-red hover:text-korean-red"
            >
              <MapPin size={14} strokeWidth={1.5} />
              Get Directions
            </a>

            <div className="flex items-center gap-5 border-t border-espresso/15 pt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="text-midnight transition-colors hover:text-korean-red"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-midnight transition-colors hover:text-korean-red"
              >
                <FacebookIcon />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative aspect-[4/3] w-full overflow-hidden bg-onyx/10 lg:col-span-8 lg:aspect-auto"
          >
            <iframe
              title="Uncle Yoon location"
              className="h-full w-full grayscale"
              style={{ border: 0, filter: "sepia(0.15) contrast(0.97) brightness(1.02)" }}
              loading="lazy"
              src="https://www.google.com/maps?q=205-207+Russell+St,+Melbourne+VIC+3000,+Australia&output=embed"
            />
            <div className="pointer-events-none absolute inset-0 bg-walnut/10 mix-blend-multiply" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
