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
  const logoSrc = isLight ? "/sentinel-logo-white.png" : "/sentinel-logo-default.png";
  const altText = "Sentinel Healthcare Consulting";

  return (
    <Link href="/" className={`inline-flex items-center select-none ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoSrc}
        alt={altText}
        width={1173}
        height={340}
        className="h-11 sm:h-12 lg:h-[52px] w-auto object-contain transition-all"
      />
    </Link>
  );
};

export default SentinelLogo;
