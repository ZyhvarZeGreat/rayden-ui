"use client";

import Link from "next/link";
import { useState } from "react";
import AnimatedCharsButton from "@/components/AnimatedCharsButton";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav className="flex h-14 max-w-2xl flex-1 items-center justify-between rounded-full border border-white/6 bg-[#050505]/90 px-4 backdrop-blur-xl">
        <div className="flex items-center gap-2.5">
          <Link href="/" className="flex items-center gap-2.5 pr-2">
          <svg width="22" height="20" viewBox="0 0 208 194" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M120.242 1.158L199.49 30.987L199.385 115.663L87.755 192.818L8.507 162.989L8.612 78.313L120.242 1.158Z" fill="black"/>
            <path d="M9.041 162.436L8.837 78.181L88.711 107.37L87.997 192.652L9.041 162.436Z" fill="url(#hn0)"/>
            <path d="M119.734 85.928L120.217 1.164L199.405 30.862L199.386 115.662L119.734 85.928Z" fill="url(#hn1)"/>
            <path d="M119.736 85.928L120.195 1.214L8.138 78.665L8.494 162.816L119.736 85.928Z" fill="#6B2B03"/>
            <defs>
              <linearGradient id="hn0" x1="78" y1="119.7" x2="-36" y2="176.4"><stop stopColor="#230E00"/><stop offset="1" stopColor="#893700"/></linearGradient>
              <linearGradient id="hn1" x1="119.8" y1="86" x2="199.5" y2="31"><stop stopColor="#FF6200"/><stop offset="1" stopColor="#FFBF10"/></linearGradient>
            </defs>
          </svg>
          <span className="hidden text-[13px] font-semibold tracking-[0.18em] text-white/55 sm:inline">
            <span className="font-host">RAYDEN&nbsp;UI</span>
          </span>
        </Link>
        </div>

        <div className="hidden items-center gap-0.5 md:flex">
          {[
            { label: "Home", href: "/" },
            { label: "Components", href: "#works" },
            { label: "Capabilities", href: "#services" },
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
            className="h-9 bg-burnt-orange px-5 text-[13px] font-medium text-white hover:bg-orange-600"
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

      {mobileOpen && (
        <div className="absolute top-16 left-4 right-4 rounded-2xl border border-white/6 bg-[#0a0a0a]/95 p-4 backdrop-blur-xl md:hidden">
          {[
            { label: "Home", href: "/" },
            { label: "Components", href: "#works" },
            { label: "Capabilities", href: "#services" },
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
      )}
    </header>
  );
}
