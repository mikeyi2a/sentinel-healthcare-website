import * as React from "react";
import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";

export interface HeroOptionAProps {
  eyebrow?: string;
  heading?: string;
  subtext?: string;
  primaryCta?: string;
  secondaryCta?: string;
  primaryCtaHref?: string;
  secondaryCtaHref?: string;
  socialProofText?: string;
  socialProofAvatars?: Array<{ name: string; role?: string; initial: string }>;
  imageSrc?: string;
  imageAlt?: string;
}

export const HeroOptionA: React.FC<HeroOptionAProps> = ({
  eyebrow = "HEALTHCARE RISK & COMPLIANCE",
  heading = "Safer care, by design.",
  subtext = "Sentinel Healthcare Consulting helps hospitals, HMOs, and development partners master clinical risk, elevate patient safety, and ensure regulatory compliance.",
  primaryCta = "Book Free Consultation",
  secondaryCta = "Explore Services",
  primaryCtaHref = "#contact",
  secondaryCtaHref = "#services",
  socialProofText = "Trusted clinical & risk advisory team in Lagos, Nigeria",
  socialProofAvatars = [
    { name: "Dr. A. Bello", initial: "AB" },
    { name: "O. Okonkwo", initial: "OO" },
    { name: "C. Adebayo", initial: "CA" },
  ],
  imageSrc,
  imageAlt = "Sentinel Healthcare Consulting clinical risk assessment session",
}) => {
  return (
    <section className="w-full bg-[#FFFFFF] py-12 md:py-16 lg:py-24 font-sans">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* Left Typography & Actions Column */}
        <div className="flex w-full lg:w-1/2 flex-col items-start text-left">
          {eyebrow && (
            <Badge className="mb-4">
              {eyebrow}
            </Badge>
          )}

          <h1 className="mb-5 font-serif text-[32px] sm:text-[48px] lg:text-[64px] font-medium tracking-[-0.02em] text-[#0D4655] leading-[1.1]">
            {heading}
          </h1>

          <p className="mb-8 max-w-[65ch] text-[14px] sm:text-[16px] lg:text-[18px] font-normal text-[#4A6570] leading-relaxed">
            {subtext}
          </p>

          {/* Animated Action Buttons */}
          <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-3.5 mb-10">
            <Button href={primaryCtaHref} variant="primary">
              {primaryCta}
            </Button>
            <Button href={secondaryCtaHref} variant="secondary">
              {secondaryCta}
            </Button>
          </div>

          {/* Social Proof Avatar Row */}
          {socialProofText && (
            <div className="flex items-center gap-3 pt-2 border-t border-[#DCEAEE]/60 w-full">
              <div className="flex -space-x-2">
                {socialProofAvatars.map((avatar, idx) => (
                  <div
                    key={idx}
                    className="flex h-9 w-9 items-center justify-center rounded-[6px] bg-[#0D4655] text-xs font-semibold text-[#FFFFFF]"
                    title={avatar.name}
                  >
                    {avatar.initial}
                  </div>
                ))}
              </div>
              <p className="text-xs font-medium text-[#4A6570]">
                {socialProofText}
              </p>
            </div>
          )}
        </div>

        {/* Right Image / Visual Container */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full aspect-[4/3] lg:aspect-square max-w-[560px] rounded-[6px] bg-[#E2F0F3] overflow-hidden flex flex-col items-center justify-center p-8 text-center group">
            {imageSrc ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover rounded-[6px]"
              />
            ) : (
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-[6px] bg-[#0D4655] text-[#FFFFFF]">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.75}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0D4655]">
                    Sentinel Clinical Safety Platform
                  </p>
                  <p className="mt-1 text-xs text-[#4A6570]">
                    Image Container Placeholder (`#E2F0F3`)
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroOptionA;
