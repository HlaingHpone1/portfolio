"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { NAV_LINKS } from "./nav-links";
import Link from "next/link";

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="md:hidden flex items-center gap-2">
        <ThemeToggle />
        <button
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="flex flex-col gap-1.5 p-1.5 rounded"
        >
          <span
            className={`block h-0.5 w-5 bg-black dark:bg-white transition-all duration-200 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-black dark:bg-white transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-black dark:bg-white transition-all duration-200 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* grid-rows 0fr → 1fr animates to the content's natural height (no fixed max-h cap) */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 grid transition-all duration-300 bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-800 ${
          menuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden min-h-0">
          <ul className="flex flex-col px-6 py-4 gap-4 font-sans" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors duration-500 tracking-wide"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-neutral-100 dark:border-neutral-800">
              <Link
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold tracking-wide rounded hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-500"
              >
                <Download className="w-3.5 h-3.5" strokeWidth={2.5} />
                Download CV
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
