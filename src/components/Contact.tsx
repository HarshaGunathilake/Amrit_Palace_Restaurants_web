"use client";

import { motion } from "framer-motion";
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
        <SectionHeading eyebrow="Visit Us" lines={["Come To", "The Table"]} size="lg" />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-2"
          >
            <div>
              <h3 className="font-sans text-xs tracking-[0.2em] text-espresso uppercase">Address</h3>
              <p className="mt-3 font-display text-xl font-light text-midnight">
                12 King Street
                <br />
                Galle, Sri Lanka
              </p>
            </div>
            <div>
              <h3 className="font-sans text-xs tracking-[0.2em] text-espresso uppercase">Phone</h3>
              <p className="mt-3 font-display text-xl font-light text-midnight">+94 91 000 0000</p>
            </div>
            <div>
              <h3 className="font-sans text-xs tracking-[0.2em] text-espresso uppercase">Email</h3>
              <p className="mt-3 font-display text-xl font-light text-midnight">hello@amritpalace.com</p>
            </div>
            <div>
              <h3 className="font-sans text-xs tracking-[0.2em] text-espresso uppercase">Opening Hours</h3>
              <p className="mt-3 font-display text-xl font-light text-midnight">
                Wed to Sun
                <br />
                17:30 to 23:00
              </p>
            </div>

            <div className="col-span-2 flex items-center gap-5 pt-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-midnight transition-colors hover:text-saffron"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-midnight transition-colors hover:text-saffron"
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
            className="relative aspect-[4/3] w-full overflow-hidden bg-onyx/10 lg:aspect-auto"
          >
            <iframe
              title="Amrit Palace location"
              className="h-full w-full grayscale"
              style={{ border: 0, filter: "sepia(0.2) contrast(0.95)" }}
              loading="lazy"
              src="https://www.google.com/maps?q=Galle,Sri+Lanka&output=embed"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
