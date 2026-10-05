"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type ImageLightboxProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  roundedClassName?: string;
};

/**
 * Clickable cropped preview → fullscreen lightbox with zoom-from-center animation.
 */
export function ImageLightbox({
  src,
  alt,
  width = 1200,
  height = 900,
  priority = false,
  className,
  imageClassName = "h-full w-full object-cover",
  roundedClassName = "rounded-2xl",
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(true);
        }}
        className={cn(
          "group/lightbox relative block w-full cursor-zoom-in overflow-hidden bg-surface text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
          roundedClassName,
          className,
        )}
        aria-label={`${alt} — tam boyutta görüntüle`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={imageClassName}
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="absolute inset-0 bg-navy/90 backdrop-blur-sm"
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.25 }}
            />

            <p id={titleId} className="sr-only">
              {alt}
            </p>

            <motion.button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-10 inline-flex size-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Kapat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: reduceMotion ? 0 : 0.15, duration: 0.2 }}
            >
              <X className="size-5" aria-hidden />
            </motion.button>

            <motion.div
              className="relative z-10 max-h-full max-w-full"
              onClick={(e) => e.stopPropagation()}
              initial={
                reduceMotion
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.72 }
              }
              animate={{ opacity: 1, scale: 1 }}
              exit={
                reduceMotion
                  ? { opacity: 0, scale: 1 }
                  : { opacity: 0, scale: 0.85 }
              }
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 26,
                mass: 0.85,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- fullscreen preview needs natural aspect */}
              <img
                src={src}
                alt={alt}
                className="max-h-[min(90vh,900px)] max-w-[min(95vw,1200px)] object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
