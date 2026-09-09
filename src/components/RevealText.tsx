"use client";

import { motion } from "framer-motion";
import { lineReveal, staggerContainer } from "@/lib/motion";

type RevealTextProps = {
  lines: string[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
};

/**
 * Reveals text line-by-line as it scrolls into view: each line sits inside
 * an overflow-hidden mask so it slides up from below rather than fading in
 * flat. Used for editorial display headings throughout the site.
 */
export default function RevealText({
  lines,
  as = "h2",
  className = "",
  delay = 0,
}: RevealTextProps) {
  const Tag = as;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={staggerContainer(0.12, delay)}
    >
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={i} className="text-reveal-mask">
            <motion.span variants={lineReveal} className="block">
              {line}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}
