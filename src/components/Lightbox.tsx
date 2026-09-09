"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/lib/data";

type LightboxProps = {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export default function Lightbox({ images, index, onClose, onIndexChange }: LightboxProps) {
  const isOpen = index !== null;

  const goNext = useCallback(() => {
    if (index === null) return;
    onIndexChange((index + 1) % images.length);
  }, [index, images.length, onIndexChange]);

  const goPrev = useCallback(() => {
    if (index === null) return;
    onIndexChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndexChange]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, goNext, goPrev]);

  return (
    <AnimatePresence>
      {isOpen && index !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-midnight/97 px-4"
        >
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute right-6 top-6 text-parchment/80 transition-colors hover:text-parchment"
          >
            <X size={28} strokeWidth={1.5} />
          </button>

          <button
            aria-label="Previous image"
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-parchment/70 transition-colors hover:text-parchment sm:left-8"
          >
            <ChevronLeft size={32} strokeWidth={1.2} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative h-[70vh] w-full max-w-4xl"
            >
              <Image
                src={images[index].src}
                alt={images[index].alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>

          <button
            aria-label="Next image"
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-parchment/70 transition-colors hover:text-parchment sm:right-8"
          >
            <ChevronRight size={32} strokeWidth={1.2} />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-sans text-xs tracking-[0.2em] text-parchment/60 uppercase">
            {index + 1} of {images.length} — {images[index].alt}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
