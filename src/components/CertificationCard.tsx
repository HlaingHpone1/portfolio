"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Certification } from "@/data/certifications";
import { EASE, VP } from "@/lib/motion";

type Props = {
  certification: Certification;
  index: number;
};

export function CertificationCard({
  certification: { title, issuer, period, url },
  index,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VP}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.12 }}
      className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="space-y-0.5">
        <p className="text-base md:text-lg font-bold text-black dark:text-white tracking-tight">
          {title}
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
          {issuer}
        </p>
      </div>
      <div className="flex items-center gap-4 shrink-0">
        <span className="font-mono text-xs text-neutral-400 font-bold">
          {period}
        </span>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-sm border border-black/80 px-3 py-1.5 text-xs font-semibold tracking-wide text-black transition-colors duration-200 hover:bg-black hover:text-white dark:border-white/80 dark:text-white dark:hover:bg-white dark:hover:text-black"
        >
          <ArrowUpRight className="h-3 w-3" strokeWidth={2.5} />
          View
        </Link>
      </div>
    </motion.div>
  );
}
