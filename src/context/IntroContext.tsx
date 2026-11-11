"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface IntroCtx {
  introDone: boolean;
  finishIntro: () => void;
}

const Ctx = createContext<IntroCtx>({ introDone: true, finishIntro: () => {} });

export function IntroProvider({ children }: { children: ReactNode }) {
  /* ── Starts false on server + client so hydration matches; Preloader flips it ── */
  const [introDone, setIntroDone] = useState(false);

  return (
    <Ctx.Provider value={{ introDone, finishIntro: () => setIntroDone(true) }}>
      {children}
    </Ctx.Provider>
  );
}

export const useIntro = () => useContext(Ctx);
