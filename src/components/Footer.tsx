"use client";

import { Mail } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { EASE, VP } from "@/lib/motion";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-black text-white px-6 md:px-10 pt-14 pb-10 md:pt-20 md:pb-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col h-full">
        <SectionLabel label="06 — Contact" className="mb-6 !text-neutral-500" />

        <div className="mb-8 md:mb-10 overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.85, ease: EASE, delay: 0.08 }}
            className="text-[clamp(2.5rem,8vw,7rem)] font-bold tracking-tight leading-[0.95] text-white"
          >
            Let&apos;s Build
            <br />
            Something.
          </motion.h2>
        </div>

        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VP}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          className="w-full h-px bg-white/10 mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.65, ease: EASE, delay: 0.2 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <Link
            href="mailto:hlainghpone1@gmail.com"
            className="group inline-flex items-center gap-3 text-white"
          >
            <span className="flex items-center justify-center w-9 h-9 border border-white/20 rounded-sm group-hover:bg-white group-hover:border-white transition-colors duration-200">
              <Mail
                className="w-4 h-4 text-white group-hover:text-black transition-colors duration-200"
                strokeWidth={1.75}
              />
            </span>
            <span className="text-lg md:text-xl font-semibold tracking-tight underline underline-offset-4 decoration-white/20 hover:decoration-white transition-all duration-200">
              hlainghpone1@gmail.com
            </span>
          </Link>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VP}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.1, delayChildren: 0.3 },
              },
            }}
            className="flex items-center gap-3"
          >
            {[
              {
                href: "https://github.com/hlainghpone1",
                label: "GitHub",
                Icon: GitHubIcon,
              },
              {
                href: "https://linkedin.com/in/hlainghpone",
                label: "LinkedIn",
                Icon: LinkedInIcon,
              },
            ].map(({ href, label, Icon }) => (
              <motion.a
                key={label}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  show: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.4, ease: EASE },
                  },
                }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-10 h-10 border border-white/20 rounded-sm text-white hover:bg-white hover:text-black transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VP}
          transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-neutral-600 font-mono"
        >
          <span>© {year} Hlaing Hpone. All rights reserved.</span>
          <span>Built with Next.js &amp; TypeScript.</span>
        </motion.div>
      </div>
    </footer>
  );
}
