"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { componentRegistry, categories } from "@/lib/component-registry";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-60 border-r border-white/4 bg-[#050505] px-4 py-4">
      <div className="flex items-center gap-3 px-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/15 ring-1 ring-orange-500/40">
          <svg width="20" height="17" viewBox="0 0 208 194" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M120.242 1.158L199.49 30.987L199.385 115.663L87.755 192.818L8.507 162.989L8.612 78.313L120.242 1.158Z"
              fill="black"
            />
            <path
              d="M9.041 162.436L8.837 78.181L88.711 107.37L87.997 192.652L9.041 162.436Z"
              fill="url(#sidebar-rayden-hn0)"
            />
            <path
              d="M119.734 85.928L120.217 1.164L199.405 30.862L199.386 115.662L119.734 85.928Z"
              fill="url(#sidebar-rayden-hn1)"
            />
            <path
              d="M119.736 85.928L120.195 1.214L8.138 78.665L8.494 162.816L119.736 85.928Z"
              fill="#6B2B03"
            />
            <defs>
              <linearGradient
                id="sidebar-rayden-hn0"
                x1="78"
                y1="119.7"
                x2="-36"
                y2="176.4"
              >
                <stop stopColor="#230E00" />
                <stop offset="1" stopColor="#893700" />
              </linearGradient>
              <linearGradient
                id="sidebar-rayden-hn1"
                x1="119.8"
                y1="86"
                x2="199.5"
                y2="31"
              >
                <stop stopColor="#FF6200" />
                <stop offset="1" stopColor="#FFBF10" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] font-semibold tracking-[0.22em] text-white/45">
            RAYDEN UI
          </span>
          <Link
            href="/components"
            className={`text-[12px] font-medium ${
              pathname === "/components"
                ? "text-white"
                : "text-white/40 hover:text-white/70"
            }`}
          >
            Components
          </Link>
        </div>
      </div>

      <div className="mt-4 border-t border-white/6 pt-4 pr-1 overflow-y-auto h-[calc(100vh-3.5rem)]">
        {categories.map((cat) => {
          const items = componentRegistry.filter((c) => c.category === cat.key);
          if (items.length === 0) return null;

          return (
            <div key={cat.key} className="mb-6">
              <div className="mb-2 px-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                {cat.label}
              </div>
              {items.map((comp) => {
                const href = `/components/${comp.slug}`;
                const isActive = pathname === href;
                return (
                  <Link
                    key={comp.slug}
                    href={href}
                    className={`block rounded-md px-3 py-1.5 text-[13px] transition-colors ${
                      isActive
                        ? "bg-orange-500/10 text-orange-400"
                        : "text-white/40 hover:bg-white/3 hover:text-white/70"
                    }`}
                  >
                    {comp.name}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
