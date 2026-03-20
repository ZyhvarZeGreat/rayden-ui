"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import AnimatedCharsButton from "@/components/AnimatedCharsButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const aboutHeadingText =
  "Rayden UI is a React component package that helps teams ship interfaces faster with consistent, production-ready design. From primitives to full sections, every piece is built to match your design system so you can focus on product while Rayden handles the UI details.";

export default function AboutSection() {
  const aboutHeadingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const heading = aboutHeadingRef.current;
    if (!heading) return;

    const words = aboutHeadingText.split(" ");
    heading.innerHTML = words
      .map((word) => `<span class="about-word" style="color: rgba(31,41,55,0.4)">${word}</span>`)
      .join(" ");

    const wordElements = heading.querySelectorAll<HTMLSpanElement>(".about-word");
    const tween = gsap.to(wordElements, {
      color: "#111827",
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: heading,
        start: "top 85%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section
      id="works"
      className="w-full bg-white text-gray-900 px-6 md:px-8 lg:px-12 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-340">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-3 flex flex-col justify-between items-start">
            <div className="flex items-center gap-2 mt-3 lg:mt-2">
              <div className="w-1.5 h-1.5 bg-[#f15a29]" />
              <span className="text-xs uppercase tracking-[0.15em] text-gray-500 font-normal">
                About Rayden UI
              </span>
            </div>

            <div className="grow hidden lg:block" />

            <AnimatedCharsButton
              href="#contact"
              label="Learn about the package"
              className="mt-10 lg:mt-0 bg-[#f15a29] px-7 text-base text-white hover:bg-[#d94a1d]"
            />
          </div>

          <div className="lg:col-span-9 lg:pl-4 xl:pl-8">
            <h2
              ref={aboutHeadingRef}
              className="text-[clamp(1.75rem,4.2vw,2.9rem)] leading-[1.2] tracking-tight font-normal text-gray-700 w-full max-w-none text-balance wrap-break-word"
            >
              {aboutHeadingText}
            </h2>
          </div>
        </div>

        <hr className="w-full border-t border-gray-100 my-16 lg:my-20" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          <div className="sm:col-span-2 lg:col-span-3">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
              alt="Team collaborating"
              className="w-full max-w-[220px] h-auto aspect-[1.4] object-cover rounded-xl shadow-sm border border-gray-50"
            />
          </div>

          <div className="sm:col-span-1 lg:col-span-2">
            <h3 className="text-5xl sm:text-6xl tracking-tight font-normal text-gray-900">24+</h3>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed pr-6 sm:pr-2">
              Production-ready React components covering forms, navigation, data, and feedback.
            </p>
          </div>

          <div className="sm:col-span-1 lg:col-span-2">
            <h3 className="text-5xl sm:text-6xl tracking-tight font-normal text-gray-900">95%</h3>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed pr-6 sm:pr-2">
              Teams report smoother handoff and repeatable UI patterns across products.
            </p>
          </div>

          <div className="sm:col-span-2 lg:col-span-5 lg:pl-10 mt-2 lg:mt-3">
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-lg">
              Rayden UI is focused on building meaningful product experiences through type-safe
              components, thoughtful UX defaults, and Tailwind v4-friendly tokens. It gives you a
              consistent foundation for buttons, forms, navigation, and layout so every screen
              feels like part of the same system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

