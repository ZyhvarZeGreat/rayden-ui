"use client";

import Link from "next/link";
import { useState } from "react";
import AnimatedCharsButton from "@/components/AnimatedCharsButton";
import Image from "next/image";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav className="flex h-14 max-w-2xl flex-1 items-center justify-between rounded-full border border-white/6 bg-[#050505]/90 px-4 backdrop-blur-xl">
        <div className="flex items-center gap-2.5">
          <Link href="/" className="flex items-center gap-2.5 pr-2">
          <Image className="h-8 w-8" src="/main-logo.png" alt="Rayden UI" width={22} height={20} />
        </Link>
        </div>

        <div className="hidden items-center gap-0.5 md:flex">
          {[
            { label: "Home", href: "#top" },
            { label: "Works", href: "#works" },
            { label: "Capabilities", href: "#services" },
            { label: "FAQ", href: "#faq" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-host rounded-full px-4 py-1.5 text-[13px] text-white/50 transition-colors hover:bg-white/6 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden h-5 w-px bg-white/8 md:block" />

          <AnimatedCharsButton
            href="/components"
            label="Docs"
            className="hidden md:inline-flex h-9 bg-burnt-orange px-5 text-[13px] font-medium text-white hover:bg-orange-600"
          />
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-8 w-8 items-center justify-center rounded-full text-white/50 hover:bg-white/6 md:hidden"
          aria-label="Menu"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? <path d="M3 3l10 10M13 3L3 13"/> : <path d="M2 5h12M2 8h12M2 11h12"/>}
          </svg>
        </button>
      </nav>

      <div
        className={`absolute top-16 left-4 right-4 rounded-2xl border border-white/6 bg-[#0a0a0a]/95 p-4 backdrop-blur-xl transition-all duration-300 ease-out md:hidden ${
          mobileOpen
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-2 scale-95 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col">
          <div className="flex flex-col gap-1">
            {[
              { label: "Home", href: "#top" },
              { label: "Works", href: "#works" },
              { label: "Capabilities", href: "#services" },
              { label: "FAQ", href: "#faq" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-host block rounded-lg px-4 py-2 text-sm text-white/60 hover:bg-white/4"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-4">
            <AnimatedCharsButton
              href="/components"
              label="Docs"
              className="w-full justify-center h-11 bg-burnt-orange px-5 text-[13px] font-medium text-white hover:bg-orange-600"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
