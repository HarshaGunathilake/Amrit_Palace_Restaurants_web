"use client";

import RevealText from "./RevealText";

type SectionHeadingProps = {
  eyebrow?: string;
  lines: string[];
  align?: "left" | "center";
  tone?: "dark" | "light";
  size?: "md" | "lg" | "xl";
};

const sizeMap = {
  md: "text-[clamp(40px,6vw,72px)]",
  lg: "text-[clamp(48px,8vw,120px)]",
  xl: "text-[clamp(56px,10vw,160px)]",
};

export default function SectionHeading({
  eyebrow,
  lines,
  align = "left",
  tone = "dark",
  size = "lg",
}: SectionHeadingProps) {
  const toneClass = tone === "dark" ? "text-midnight" : "text-parchment";
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass}`}>
      {eyebrow && (
        <span className="mb-5 inline-flex items-center gap-2.5 font-sans text-xs tracking-[0.25em] text-saffron uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-saffron" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <RevealText
        lines={lines}
        as="h2"
        className={`font-display font-light uppercase leading-[0.92] tracking-tightest ${sizeMap[size]} ${toneClass}`}
      />
    </div>
  );
}
