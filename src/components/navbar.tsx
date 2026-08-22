"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import SentinelLogo from "@/components/sentinel-logo";
import { LinkedinLogo, FacebookLogo } from "@phosphor-icons/react";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  navLinks?: NavLink[];
  primaryCtaText?: string;
  primaryCtaHref?: string;
  overlay?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Engage", href: "/engage" },
    { label: "Leadership", href: "/leadership" },
    { label: "Contact", href: "/contact" },
  ],
  primaryCtaText = "Book Consultation",
  primaryCtaHref = "/contact",
  overlay = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolledPastHero, setScrolledPastHero] = React.useState(false);

  React.useEffect(() => {
    if (!overlay) return;

    const onScroll = () => {
      setScrolledPastHero(window.scrollY > window.innerHeight * 0.82);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  const isTransparent = overlay && !scrolledPastHero && !mobileMenuOpen;

  const shell = overlay
    ? `fixed inset-x-0 z-50 w-full transition-all duration-300 ${
        isTransparent
          ? "top-3 sm:top-4 border-b border-transparent bg-transparent"
          : "top-0 border-b border-[#DCEAEE]/80 bg-white/95 backdrop-blur-md shadow-sm"
      }`
    : "sticky top-0 z-50 w-full border-b border-[#DCEAEE]/80 bg-white/95 backdrop-blur-md";

  const content = (
    <>
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-6 lg:px-12 transition-all">
        {/* Left: official Sentinel Logo from Paper MCP */}
        <SentinelLogo variant={isTransparent ? "light" : "default"} />

        {/* Right: links and CTA grouped together */}
        <div className="flex items-center gap-3">
          <div
            className={`hidden items-center gap-1 rounded-[6px] p-1.5 pl-3 transition-colors lg:flex ${
              isTransparent
                ? "bg-white/90 shadow-sm backdrop-blur-md"
                : ""
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative overflow-hidden rounded-[6px] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.11em] text-[#4A6570] transition-colors hover:text-[#0D4655]"
              >
                {/* Normal visible text block */}
                <span className="block transition-all duration-200 group-hover:opacity-0 group-hover:-translate-y-full">
                  {link.label}
                </span>

                {/* Hover slide-up barrel text block */}
                <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-all duration-200 group-hover:translate-y-0 text-[#0D4655]">
                  {link.label}
                </span>
              </Link>
            ))}
            <Button href={primaryCtaHref} variant="primary">
              {primaryCtaText}
            </Button>
          </div>

          {/* Mobile / Tablet toggle with 6px radius */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`flex h-10 w-10 items-center justify-center rounded-[6px] transition-colors lg:hidden ${
              isTransparent
                ? "bg-white/20 text-white backdrop-blur-md"
                : "bg-[#E2F0F3] text-[#0D4655]"
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#DCEAEE] bg-[#FFFFFF] px-6 py-6 space-y-4 shadow-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#0D4655] hover:text-[#1D6B7D]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#DCEAEE] flex flex-col gap-3">
            <Button
              href={primaryCtaHref}
              variant="primary"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              {primaryCtaText}
            </Button>

            <div className="flex items-center justify-center gap-3 pt-1">
              <span className="font-semibold uppercase tracking-wider text-[10px] text-[#1D6B7D]">Follow Us:</span>
              <a
                href="https://www.linkedin.com/company/sentinel-healthcare-consulting-limited/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sentinel LinkedIn Page"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#E2F0F3] px-3 py-1.5 text-[11px] font-semibold text-[#0D4655] hover:bg-[#0077B5] hover:text-white transition-colors"
              >
                <LinkedinLogo className="w-3.5 h-3.5" weight="fill" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61593096647779"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sentinel Facebook Page"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#E2F0F3] px-3 py-1.5 text-[11px] font-semibold text-[#0D4655] hover:bg-[#1877F2] hover:text-white transition-colors"
              >
                <FacebookLogo className="w-3.5 h-3.5" weight="fill" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );

  if (overlay) {
    return (
      <motion.header
        className={shell}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        {content}
      </motion.header>
    );
  }

  return <header className={shell}>{content}</header>;
};

export default Navbar;
