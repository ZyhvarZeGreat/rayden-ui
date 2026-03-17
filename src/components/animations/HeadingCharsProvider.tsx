"use client";

import { useEffect } from "react";

export default function HeadingCharsProvider() {
  useEffect(() => {
    const offsetIncrement = 0.01;
    const selectors = "[data-heading-animate-chars]";

    document.querySelectorAll<HTMLElement>(selectors).forEach((el) => {
      // Skip if we've already processed this element
      if (el.dataset.headingCharsInitialized === "true") return;

      const text = el.textContent || "";
      el.textContent = "";

      [...text].forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.display = "inline-block";
        span.style.transitionDelay = `${index * offsetIncrement}s`;

        if (char === " ") {
          span.style.whiteSpace = "pre";
        }

        el.appendChild(span);
      });

      el.dataset.headingCharsInitialized = "true";
    });
  }, []);

  return null;
}

