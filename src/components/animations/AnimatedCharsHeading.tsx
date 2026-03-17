"use client";

import { useEffect, useRef } from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4";

interface AnimatedCharsHeadingProps {
  as?: HeadingTag;
  text: string;
  className?: string;
}

export default function AnimatedCharsHeading({
  as = "h2",
  text,
  className = "",
}: AnimatedCharsHeadingProps) {
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const offsetIncrement = 0.01;
    el.innerHTML = "";

    [...text].forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.transitionDelay = `${index * offsetIncrement}s`;
      span.className =
        "inline-block transition-transform duration-300 will-change-transform";

      if (char === " ") {
        span.style.whiteSpace = "pre";
      }

      el.appendChild(span);
    });
  }, [text]);

  const Component = as;

  return (
    <Component className={`group ${className}`}>
      <span ref={spanRef} />
    </Component>
  );
}

