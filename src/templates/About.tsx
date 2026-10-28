"use client";

import { motion } from "motion/react";
import { SKILLS } from "@/data/skills";
import { SectionLabel } from "@/components/SectionLabel";
import { EASE, VP, fadeUp } from "@/lib/motion";

const categoryContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const categoryItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const tagContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0 } },
};

const tagItem = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: EASE } },
};

export default function About() {
  return (
    <section
      id="about"
      className="font-sans px-6 md:px-10 py-16 md:py-20 border-t border-neutral-100 dark:border-neutral-800"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">
        {/* ════ Left — Section label + Bio ════ */}
        <div className="space-y-5">
          <SectionLabel label="01 — About" />

          <motion.h2
            {...fadeUp(0.08)}
            className="text-3xl md:text-4xl font-bold text-black dark:text-white tracking-tight leading-tight"
          >
            A developer who cares about
            <br />
            the details.
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VP}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.12, delayChildren: 0.2 },
              },
            }}
            className="space-y-3 text-base md:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-prose"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: EASE },
                },
              }}
            >
              With{" "}
              <span className="text-black dark:text-white font-semibold">
                2+ year of hands-on experience
              </span>{" "}
              specialising in
              <span className="text-black dark:text-white font-semibold">
                React.js and Next.js
              </span>
              , I build performant, accessible interfaces that users actually
              enjoy.
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: EASE },
                },
              }}
            >
              I thrive in{" "}
              <span className="text-black dark:text-white font-semibold">
                agile environments
              </span>
              , moving fast without cutting corners — focusing on clean
              component architecture, type-safe codebases, and delivering
              high-quality user experiences from first commit to production.
            </motion.p>
          </motion.div>
        </div>

        {/* ════ Right — Skills Grid ════ */}
        <div className="space-y-5">
          <p className="hidden lg:block text-xs font-semibold tracking-widest uppercase text-transparent select-none">
            —
          </p>

          <motion.h3
            {...fadeUp(0.05)}
            className="text-xl font-bold text-black dark:text-white tracking-tight"
          >
            Technical Arsenal
          </motion.h3>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VP}
            variants={categoryContainer}
            className="space-y-4"
          >
            {SKILLS.map(({ category, items }) => (
              <motion.div
                key={category}
                variants={categoryItem}
                className="space-y-2"
              >
                <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400">
                  {category}
                </p>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={VP}
                  variants={tagContainer}
                  className="flex flex-wrap gap-2"
                >
                  {items.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={tagItem}
                      className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-black dark:text-white border border-black/20 dark:border-white/20 rounded-sm tracking-wide hover:border-black dark:hover:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-500 cursor-default select-none"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
