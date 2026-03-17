import type { Metadata } from "next";
import { Inter, Host_Grotesk } from "next/font/google";
import "./globals.css";
import "./rayden-components.css";
import GsapTextRevealBoot from "@/components/GsapTextRevealBoot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const hostGrotesk = Host_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Rayden UI — Build UI faster",
  description:
    "A React UI system designed for humans and AI. 24+ production-ready components built with Tailwind CSS v4.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${hostGrotesk.variable} antialiased`}
      >
        <GsapTextRevealBoot />
        {children}
      </body>
    </html>
  );
}
