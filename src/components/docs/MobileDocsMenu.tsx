"use client";

import { useState } from "react";
import Sidebar from "@/components/docs/Sidebar";

export default function MobileDocsMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="md:hidden inline-flex items-center gap-2 rounded-full border border-white/10 bg-dark-card px-4 py-2 text-[13px] text-white/70 hover:text-white hover:bg-white/5"
      >
        <span className="text-white/60">☰</span>
        Menu
      </button>

      {open && (
        <div
          className="fixed inset-0 z-80 bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()} className="relative">
            <Sidebar />
            <button
              type="button"
              aria-label="Close docs menu"
              onClick={() => setOpen(false)}
              className="absolute left-5 top-5 z-90 rounded-full border border-white/10 bg-[#050505]/90 px-3 py-1.5 text-[12px] text-white/70 hover:text-white hover:bg-[#050505]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

