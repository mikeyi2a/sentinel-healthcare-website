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
  const logoSrc = isLight ? "/sentinel-logo-white.svg" : "/sentinel-logo-default.svg";
  const altText = "Sentinel Healthcare Consulting";

  return (
    <Link href="/" className={`inline-flex items-center select-none overflow-visible ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoSrc}
        alt={altText}
        className="h-10 sm:h-11 lg:h-[48px] w-auto object-contain overflow-visible max-w-none transition-all"
      />
    </Link>
  );
};

export default SentinelLogo;
