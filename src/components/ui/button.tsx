"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "navy" | "white";
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
  target,
  rel,
  ...props
}) => {
  const reduceMotion = useReducedMotion();

  // Base classes: Completely flat (no shadow) with 6px border radius, capital case uppercase typography
  const baseClasses =
    "group relative flex flex-col items-center justify-center h-11 overflow-hidden rounded-[6px] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.11em] cursor-pointer transition-colors duration-200 select-none";

  const variantClasses = {
    primary: "bg-[#FF6F4B] text-white hover:bg-[#0D4655]",
    secondary: "bg-[#E2F0F3] text-[#0D4655] hover:bg-[#0D4655]",
    white: "bg-white text-[#0D4655] hover:bg-[#FF6F4B]",
    outline: "bg-[#E2F0F3] text-[#0D4655] hover:bg-[#0D4655]",
    navy: "bg-[#0D4655] text-white hover:bg-[#FF6F4B]",
  };

  const textNormalClasses = {
    primary: "text-white",
    secondary: "text-[#0D4655]",
    white: "text-[#0D4655]",
    outline: "text-[#0D4655]",
    navy: "text-white",
  };

  const textHoverClasses = {
    primary: "text-white",
    secondary: "text-white",
    white: "text-white",
    outline: "text-white",
    navy: "text-white",
  };

  const innerContent = (
    <>
      {/* Default visible text block */}
      <div className="flex items-center justify-center gap-2 w-full h-full">
        <div
          className={`flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.11em] leading-none whitespace-nowrap transition-all duration-200 group-hover:opacity-0 group-hover:-translate-y-full ${textNormalClasses[variant]}`}
        >
          {children}
        </div>
      </div>

      {/* Hover slide-up absolute text block */}
      <div
        className={`absolute inset-0 flex items-center justify-center gap-2 w-full h-full translate-y-full transition-all duration-200 group-hover:translate-y-0 ${textHoverClasses[variant]}`}
      >
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.11em] leading-none whitespace-nowrap">
          {children}
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <motion.div
        whileHover={reduceMotion ? {} : { y: -1.5 }}
        whileTap={reduceMotion ? {} : { scale: 0.98 }}
        transition={{ duration: 0.15 }}
        className="inline-block"
      >
        <Link
          href={href}
          target={target}
          rel={rel}
          className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        >
          {innerContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={reduceMotion ? {} : { y: -1.5 }}
      whileTap={reduceMotion ? {} : { scale: 0.98 }}
      transition={{ duration: 0.15 }}
      className="inline-block"
    >
      <button
        type="button"
        onClick={onClick}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {innerContent}
      </button>
    </motion.div>
  );
};

export default Button;
