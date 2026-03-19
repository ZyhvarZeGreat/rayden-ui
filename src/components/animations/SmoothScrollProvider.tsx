"use client";

import { useEffect } from "react";

export default function SmoothScrollProvider() {
  useEffect(() => {
    type LenisLike = {
      raf: (time: number) => void;
      scrollTo: (
        target: Element | string | number,
        options?: { offset?: number; immediate?: boolean; duration?: number }
      ) => void;
      destroy: () => void;
    };

    let lenis: LenisLike | null = null;
    let rafId: number | null = null;
    let removeClickListener: (() => void) | null = null;

    async function setup() {
      try {
        const mod = await import("@studio-freight/lenis").catch(() => null);
        if (!mod) return;

        const LenisCtor =
          (mod as { default?: new (opts: unknown) => unknown }).default ??
          (mod as unknown as new (opts: unknown) => unknown);

        const instance = new LenisCtor({
          lerp: 0.1,
          smoothWheel: true,
        });

        lenis = instance as unknown as LenisLike;

        const headerOffset = 80; // accounts for fixed header height
        const onClick = (e: MouseEvent) => {
          if (e.defaultPrevented) return;
          if (e.button !== 0) return; // left click only
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

          const el = e.target as HTMLElement | null;
          const anchor = el?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
          if (!anchor) return;

          const href = anchor.getAttribute("href");
          if (!href || href === "#") return;

          const id = href.slice(1);
          const target = document.getElementById(id);
          if (!target) return;

          e.preventDefault();

          // Keep URL/hash in sync for shareability/back button
          try {
            window.history.pushState(null, "", href);
          } catch {
            // ignore
          }

          const top = Math.max(
            0,
            target.getBoundingClientRect().top + window.scrollY - headerOffset
          );

          if (!lenis) {
            window.scrollTo({ top, behavior: "smooth" });
            return;
          }

          lenis.scrollTo(target, { offset: -headerOffset });
        };

        const listenerOptions: AddEventListenerOptions = { capture: true };
        document.addEventListener("click", onClick, listenerOptions);
        removeClickListener = () =>
          document.removeEventListener("click", onClick, listenerOptions);

        const raf = (time: number) => {
          lenis?.raf(time);
          rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);

        // If the page loads with a hash, smoothly scroll to it.
        const hash = window.location.hash?.slice(1);
        if (hash) {
          const target = document.getElementById(hash);
            if (target) {
              const top = Math.max(
                0,
                target.getBoundingClientRect().top + window.scrollY - headerOffset
              );
              if (!lenis) {
                window.scrollTo({ top, behavior: "smooth" });
              } else {
                lenis.scrollTo(target, { offset: -headerOffset });
              }
            }
        }
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
      removeClickListener?.();
    };
  }, []);

  return null;
}

