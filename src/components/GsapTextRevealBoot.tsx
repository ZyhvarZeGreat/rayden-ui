"use client";

import { useEffect } from "react";
import { initMaskTextScrollReveal } from "@/lib/gsap-split-text";

export default function GsapTextRevealBoot() {
  useEffect(() => {
    if (typeof document !== "undefined" && (document as any).fonts?.ready) {
      (document as any).fonts.ready.then(() => initMaskTextScrollReveal());
    } else {
      initMaskTextScrollReveal();
    }
  }, []);

  return null;
}

