"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

interface AnimatedCharsButtonProps {
  href: string;
  label: string;
  ariaLabel?: string;
  className?: string;
}

export default function AnimatedCharsButton({
  href,
  label,
  ariaLabel,
  className = "",
}: AnimatedCharsButtonProps) {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const offsetIncrement = 0.01;
    const text = label;
    el.innerHTML = "";

    [...text].forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.transitionDelay = `${index * offsetIncrement}s`;
      if (char === " ") {
        span.style.whiteSpace = "pre";
      }
      el.appendChild(span);
    });
  }, [label]);

  return (
    <Link
      href={href}
      aria-label={ariaLabel ?? label}
      className={`btn-animate-chars font-host ${className}`}
    >
      <div className="btn-animate-chars__bg" />
      <span
        data-button-animate-chars=""
        ref={textRef}
        className="btn-animate-chars__text"
      >
        {label}
      </span>
    </Link>
  );
}

