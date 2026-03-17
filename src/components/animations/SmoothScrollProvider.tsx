"use client";

import { useEffect } from "react";

export default function SmoothScrollProvider() {
  useEffect(() => {
    let lenis: any;
    let rafId: number | null = null;

    async function setup() {
      try {
        const mod = await import("@studio-freight/lenis").catch(() => null);
        if (!mod) return;

        const Lenis = (mod as any).default || (mod as any);
        lenis = new Lenis({
          lerp: 0.1,
          smoothWheel: true,
        });

        const raf = (time: number) => {
          lenis?.raf(time);
          rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);
      } catch {
        // silently ignore if lenis is not available
      }
    }

    setup();

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return null;
}

