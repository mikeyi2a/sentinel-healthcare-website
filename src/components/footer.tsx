"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { Envelope, Phone, MapPin, ArrowUp } from "@phosphor-icons/react";

const MeshGradient = dynamic(
  () => import("@paper-design/shaders-react").then((mod) => mod.MeshGradient),
  {
    ssr: false,
    loading: () => <div className="hero-gradient h-full w-full" aria-hidden="true" />,
  }
);

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "How to Engage", href: "/engage" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact" },
];

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const reduceMotion = useReducedMotion();
  const wordmarkRef = useRef<HTMLSpanElement>(null);

  // A CSS clamp can't know the font's metrics, so it can only ever approximate
  // a full-width fit. Measure the rendered word instead and solve for the exact
  // font size that spans the container.
  useEffect(() => {
    const el = wordmarkRef.current;
    const container = el?.parentElement;
    if (!el || !container) return;

    const fit = () => {
      el.style.fontSize = "100px";
      const naturalWidth = el.getBoundingClientRect().width;
      if (!naturalWidth) return;
      el.style.fontSize = `${(100 * container.clientWidth) / naturalWidth}px`;
    };

    fit();
    // Ovo loads asynchronously; without this the size is solved against the
    // fallback serif and lands wrong once the real face swaps in.
    document.fonts?.ready.then(fit).catch(() => {});

    const observer = new ResizeObserver(fit);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <footer
      className={`relative w-full overflow-hidden bg-[#0D4655] text-white font-sans ${className}`}
    >
      {/* Shader layer */}
      <div className="absolute inset-0" aria-hidden="true">
        <MeshGradient
          speed={reduceMotion ? 0 : 0.32}
          scale={1}
          distortion={1}
          swirl={0.06}
          colors={["#253338", "#0C3C49", "#FE6E4B", "#095667"]}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Legibility scrim */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#0D4655]/85 via-[#0D4655]/55 to-[#0D4655]/75 pointer-events-none"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-12 pt-16 lg:pt-20 pb-8">
        {/* Top Grid Layout: 3 Columns (Brand & Contact, Navigation, Governance & Legal) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Column 1: Brand & Contact Info (Logo removed per feedback) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <p className="text-sm text-white/85 leading-relaxed max-w-[40ch]">
              Safer care, by design. Providing hospitals, insurers, and health institutions with clinical risk management and governance solutions.
            </p>

            <div className="flex flex-col gap-2 pt-2 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF6F4B] flex-shrink-0" />
                <span>Lekki, Lagos State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF6F4B] flex-shrink-0" />
                <span>+234 905 278 0290</span>
              </div>
              <div className="flex items-center gap-2">
                <Envelope className="w-4 h-4 text-[#FF6F4B] flex-shrink-0" />
                <span>hello@sentinelhc.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-white/85">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Governance & Legal Details + Back to top */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
                Corporate Governance
              </h4>

              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#0D4655]"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col gap-1.5 text-xs text-white/80 leading-relaxed">
              <p className="font-semibold text-white">
                Sentinel Healthcare Consulting Limited
              </p>
              <p>RC Number: 9683677 · TIN: 2622447272211</p>
              <p>Incorporated 15 July 2026 (CAMA 2020)</p>
              <p className="text-[11px] text-white/60 pt-3">
                © 2026 Sentinel Healthcare Consulting Limited. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Oversized wordmark — font size is solved at runtime to span the
            container exactly. The clamp is only the pre-hydration fallback. */}
        <div className="pt-12 lg:pt-16">
          <span
            ref={wordmarkRef}
            className="inline-block whitespace-nowrap font-serif font-medium text-white leading-[0.82] tracking-[-0.03em] text-[clamp(3.5rem,25.5vw,24.5rem)] select-none"
          >
            Sentinel
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
