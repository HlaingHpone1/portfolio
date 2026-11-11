export const EASE = [0.22, 1, 0.36, 1] as const;

// Scroll-triggered viewport config (once: true prevents re-firing on scroll back)
export const VP = { once: true, margin: "-80px" } as const;

// Scroll-triggered fade + slide up (whileInView sections)
export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VP,
  transition: { duration: 0.65, ease: EASE, delay },
});

// Mount-time fade + slide up (Hero — uses animate, not whileInView)
// `play` = false holds the element at `initial` (e.g. while the intro loader runs)
export const mountFadeUp = (delay = 0, play = true) => ({
  initial: { opacity: 0, y: 28 },
  animate: play ? { opacity: 1, y: 0 } : undefined,
  transition: { duration: 0.7, ease: EASE, delay },
});

// Mount-time fade in (Hero scroll hint)
export const mountFadeIn = (delay = 0, play = true) => ({
  initial: { opacity: 0 },
  animate: play ? { opacity: 1 } : undefined,
  transition: { duration: 0.7, ease: EASE, delay },
});
