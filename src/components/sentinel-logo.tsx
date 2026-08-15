import React from "react";
import Link from "next/link";

export interface SentinelLogoProps {
  variant?: "default" | "light" | "iconOnly";
  className?: string;
}

export const SentinelLogo: React.FC<SentinelLogoProps> = ({
  variant = "default",
  className = "",
}) => {
  const isLight = variant === "light";

  if (variant === "iconOnly") {
    return (
      <Link href="/" className={`inline-flex items-center select-none ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icon.png"
          alt="Sentinel Healthcare Consulting"
          className="h-10 w-10 object-contain"
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3 select-none group ${className}`}
    >
      <div className="relative h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11 flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icon.png"
          alt="Sentinel Logo"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex flex-col justify-center text-left">
        <span
          className={`font-serif text-[17px] sm:text-lg lg:text-xl font-bold tracking-[0.05em] leading-tight transition-colors ${
            isLight ? "text-white" : "text-[#0D4655]"
          }`}
        >
          SENTINEL
        </span>
        <span
          className={`text-[8.5px] sm:text-[9.5px] font-semibold tracking-[0.16em] uppercase leading-none mt-0.5 transition-colors ${
            isLight ? "text-[#E2F0F3]/80" : "text-[#1D6B7D]"
          }`}
        >
          Healthcare Consulting
        </span>
      </div>
    </Link>
  );
};

export default SentinelLogo;
