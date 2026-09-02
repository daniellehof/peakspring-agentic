"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Exact Webflow IX2 slideInBottom contract:
// opacity 0 + translateY(100px) → opacity 1 + translateY(0) in 1000ms outQuart
// Some triggers have 0/200/400/600ms delays, scroll offset 0-3%

export function useSlideInBottom(delay: number = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(el,
      { opacity: 0, y: 100 },
      {
        opacity: 1, y: 0, duration: 1, delay: delay / 1000,
        ease: "power3.out", // closest to outQuart
        scrollTrigger: { trigger: el, start: "top 97%", toggleActions: "play none none none" },
      }
    );
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, [delay]);
  return ref;
}

// Exact Webflow IX2 slideInLeft contract:
// opacity 0 + translateX(-100px) → opacity 1 + translateX(0) in 1000ms outQuart

export function useSlideInLeft(delay: number = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(el,
      { opacity: 0, x: -100 },
      {
        opacity: 1, x: 0, duration: 1, delay: delay / 1000,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 97%", toggleActions: "play none none none" },
      }
    );
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, [delay]);
  return ref;
}

// Reduced motion guard
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}