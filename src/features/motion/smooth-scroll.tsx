"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Lenis 1.3.11 smooth scroll — exact match to original site
// Respects prefers-reduced-motion per contract

export function SmoothScroll() {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const lenis = new Lenis({ autoRaf: true });
    return () => { lenis.destroy(); };
  }, []);
  return null;
}