"use client";

import Image from "next/image";
import { MapPin, ArrowDownRight } from "lucide-react";
import { motion } from "motion/react";
import {
  EASE,
  mountFadeUp as fadeUp,
  mountFadeIn as fadeIn,
} from "@/lib/motion";
import { useIntro } from "@/context/IntroContext";

export default function Hero() {
  const { introDone } = useIntro();

  return (
    <section
      id="hero"
      className="font-sans min-h-screen flex items-center px-6 md:px-10 pt-16"
    >
      <div className="max-w-6xl mx-auto w-full py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10 items-center">
        {/* ════ Left — Text Content ════ */}
        <div className="space-y-5 order-2 lg:order-1 lg:col-span-2">
          <motion.p
            {...fadeUp(0.05, introDone)}
            className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 font-medium tracking-widest uppercase"
          >
            Hi, I&apos;m Hlaing Hpone.
          </motion.p>

          <motion.h1
            {...fadeUp(0.15, introDone)}
            className="text-[clamp(2rem,4.5vw,3.75rem)] font-bold text-black dark:text-white leading-tight tracking-tight"
          >
            Next.js
            <span className="text-neutral-200 dark:text-neutral-700 mx-2 font-thin">
              |
            </span>
            TypeScript
            <span className="text-neutral-200 dark:text-neutral-700 mx-2 font-thin">
              |
            </span>
            <br />
            Frontend Developer
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={introDone ? { scaleX: 1 } : undefined}
            transition={{ duration: 0.6, ease: EASE, delay: 0.28 }}
            className="w-12 h-px bg-black dark:bg-white"
          />

          <motion.p
            {...fadeUp(0.36, introDone)}
            className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 font-normal max-w-md leading-relaxed"
          >
            Building scalable, responsive web applications with modern UI
            frameworks.
          </motion.p>

          <motion.div
            {...fadeUp(0.44, introDone)}
            className="flex items-center gap-1.5 text-sm text-neutral-400 dark:text-neutral-500 font-medium tracking-wide"
          >
            <MapPin className="w-4 h-4 shrink-0" strokeWidth={1.75} />
            <span>Yangon, Myanmar</span>
          </motion.div>

          <motion.a
            {...fadeIn(0.62, introDone)}
            href="#about"
            className="inline-flex items-center gap-2 pt-1 text-xs text-neutral-300 hover:text-neutral-500 dark:text-neutral-600 dark:hover:text-neutral-400 font-medium tracking-widest uppercase transition-colors duration-500"
          >
            <span>Scroll to explore</span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="inline-flex"
            >
              <ArrowDownRight className="w-4 h-4" strokeWidth={1.5} />
            </motion.span>
          </motion.a>
        </div>

        {/* ════ Right — Photo ════ */}
        <div className="order-1 lg:order-2 lg:col-span-1 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={introDone ? { opacity: 1, scale: 1, y: 0 } : undefined}
            transition={{ duration: 0.85, ease: EASE, delay: 0.1 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={introDone ? { opacity: 1, x: 12, y: 12 } : undefined}
              transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
              className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-sm"
            />

            <div className="relative w-56 h-64 md:w-72 md:h-88 lg:w-80 lg:h-[26rem] overflow-hidden rounded-sm border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900">
              <Image
                src="/mine3.png"
                alt="Hlaing Hpone — Frontend Developer"
                fill
                sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 320px"
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-black/20 dark:border-white/20 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-black/20 dark:border-white/20 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
