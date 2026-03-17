"use client";

import Link from "next/link";
import { useState } from "react";
import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full max-w-[1400px] mx-auto border-t border-white/10 py-16 px-6 lg:px-12 mt-12 bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_auto_1.2fr] gap-16 lg:gap-0">
        {/* Left Section */}
        <div className="flex flex-col lg:pr-24 relative min-h-[400px]">
          <h2 className="text-3xl tracking-tight font-normal text-white mb-8">
            Stay connected
          </h2>

          {/* Input Group */}
          <div className="relative flex items-center bg-white/5 rounded-full p-1.5 mb-6 max-w-md w-full border border-white/10 backdrop-blur">
            <input
              type="email"
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border-none focus:ring-0 text-base text-white placeholder-gray-400 px-5 w-full outline-none"
            />
            <button className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-200 transition-colors shrink-0">
              {/* simple arrow icon */}
              <span className="text-lg leading-none">→</span>
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-12">
            By providing your email, you agree to receive news and updates
            related to Rayden UI. You can unsubscribe at any time.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 relative z-10">
            <button className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors border border-white/15">
              <Twitter className="h-4 w-4" />
            </button>
            <button className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors border border-white/15">
              <Instagram className="h-4 w-4" />
            </button>
            <button className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors border border-white/15">
              <Facebook className="h-4 w-4" />
            </button>
            <button className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors border border-white/15">
              <Linkedin className="h-4 w-4" />
            </button>
          </div>

          {/* Watermark */}
          <div className="mt-auto lg:absolute lg:-bottom-6 lg:-left-2 pointer-events-none overflow-hidden w-full">
            <span className="text-9xl tracking-tighter font-medium text-orange-500/30 uppercase select-none leading-none block">
              RAYDEN
            </span>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-px bg-white/10" />

        {/* Right Section */}
        <div className="flex flex-col lg:pl-24 space-y-14">
          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-4 sm:gap-8">
            <div className="text-sm text-gray-400 uppercase tracking-widest font-mono pt-1">
              [ QUICK LINKS ]
            </div>
            <div className="flex flex-col space-y-4 text-base text-gray-200">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/components" className="hover:text-white transition-colors">
                Components
              </Link>
              <Link href="#services" className="hover:text-white transition-colors">
                Capabilities
              </Link>
              <Link href="#why" className="hover:text-white transition-colors">
                Why Rayden
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-4 sm:gap-8">
            <div className="text-sm text-gray-400 uppercase tracking-widest font-mono pt-1">
              [ COMPANY ]
            </div>
            <div className="flex flex-col space-y-4 text-base text-gray-200">
              <a
                href="https://github.com/nicksarma24/rayden-ui"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.npmjs.com/package/@raydenui/ui"
                className="hover:text-white transition-colors"
              >
                npm
              </a>
              <Link href="/components" className="hover:text-white transition-colors">
                Docs
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-4 sm:gap-8">
            <div className="text-sm text-gray-400 uppercase tracking-widest font-mono pt-1">
              [ CONTACT ]
            </div>
            <div className="flex flex-col space-y-4 text-base text-gray-200">
              <div className="flex gap-1.5">
                <span className="font-medium text-white">Email:</span>
                <a
                  href="mailto:support@raydenui.com"
                  className="hover:text-white transition-colors"
                >
                  support@raydenui.com
                </a>
              </div>
              <div className="flex gap-1.5">
                <span className="font-medium text-white">Location:</span>
                <span className="text-gray-300">Remote-first</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
