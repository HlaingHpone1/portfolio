"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useIntro } from "@/context/IntroContext";

const NAME = ["HLAING", "HPONE"];
const SEEN_KEY = "intro-seen";

function hasSeenIntro() {
  try {
    return sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

function markIntroSeen() {
  try {
    sessionStorage.setItem(SEEN_KEY, "1");
  } catch {}
}

export default function Preloader() {
  const { finishIntro } = useIntro();
  const [visible, setVisible] = useState(true);

  const root = useRef<HTMLDivElement>(null);
  const counter = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      /* ── Already played this session — skip straight to the page ── */
      if (hasSeenIntro()) {
        finishIntro();
        setVisible(false);
        return;
      }

      const html = document.documentElement;
      html.style.overflow = "hidden";

      const done = () => {
        markIntroSeen();
        html.style.overflow = "";
        setVisible(false);
      };

      /* ── Reduced motion: short fade, no counter theatrics ── */
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        finishIntro();
        gsap.to(root.current, { autoAlpha: 0, duration: 0.3, onComplete: done });
        return () => {
          html.style.overflow = "";
        };
      }

      const progress = { v: 0 };
      const tl = gsap.timeline({ onComplete: done });

      /* Start states are inline in the markup (hidden before JS runs) — tween *to* rest */
      tl.to(".pl-letter", {
        y: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.05,
      })
        .to(
          progress,
          {
            v: 100,
            duration: 2,
            ease: "power2.inOut",
            onUpdate: () => {
              if (counter.current)
                counter.current.textContent = String(Math.round(progress.v));
            },
          },
          0.2
        )
        .to(
          ".pl-line",
          { scaleX: 1, duration: 2, ease: "power2.inOut" },
          0.2
        )
        .to(
          ".pl-meta",
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          0.3
        )
        .to(
          ".pl-sub",
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
          0.7
        )
        .to(".pl-content", {
          y: -40,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power2.in",
        })
        .addLabel("reveal", "-=0.15")
        .call(finishIntro, undefined, "reveal+=0.35")
        .to(
          ".pl-panel",
          {
            yPercent: -100,
            duration: 1.2,
            ease: "expo.inOut",
            stagger: 0.12,
          },
          "reveal"
        );

      return () => {
        html.style.overflow = "";
      };
    },
    { scope: root }
  );

  if (!visible) return null;

  return (
    <div
      ref={root}
      aria-hidden="true"
      className="preloader fixed inset-0 z-[100] font-sans text-white pointer-events-none"
    >
      {/* Back panel trails the front one for a layered curtain */}
      <div className="pl-panel absolute inset-0 bg-neutral-800 will-change-transform" />
      <div className="pl-panel absolute inset-0 bg-neutral-950 will-change-transform flex items-center justify-center px-6">
        <div className="pl-content w-full max-w-3xl">
          <h2 className="flex flex-wrap gap-x-[0.35em] text-[clamp(2.25rem,9vw,6.5rem)] font-bold leading-none tracking-tight">
            {NAME.map((word) => (
              <span key={word} className="flex">
                {word.split("").map((ch, i) => (
                  <span key={i} className="inline-block overflow-hidden pb-[0.08em]">
                    <span
                      className="pl-letter inline-block will-change-transform"
                      style={{ transform: "translateY(110%)" }}
                    >
                      {ch}
                    </span>
                  </span>
                ))}
              </span>
            ))}
          </h2>

          <div className="pl-meta mt-6 flex items-center gap-4" style={{ opacity: 0 }}>
            <div className="flex-1 h-px bg-white/15">
              <div
                className="pl-line h-full bg-white origin-left"
                style={{ transform: "scaleX(0)" }}
              />
            </div>
            <span className="font-mono text-sm md:text-base tabular-nums w-12 text-right">
              <span ref={counter}>0</span>%
            </span>
          </div>

          <p
            style={{ opacity: 0, transform: "translateY(16px)" }}
            className="pl-sub mt-4 text-xs md:text-sm text-neutral-400 font-medium tracking-widest uppercase">
            Frontend Developer
          </p>
        </div>
      </div>
    </div>
  );
}
