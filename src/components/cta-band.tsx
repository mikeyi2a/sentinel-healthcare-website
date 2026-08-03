import React from "react";
import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Badge from "@/components/ui/badge";

export interface CtaBandProps {
  eyebrow?: string;
  heading?: string;
  subtext?: string;
  buttonText?: string;
  buttonHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export const CtaBand: React.FC<CtaBandProps> = ({
  eyebrow = "FREE CONSULTATION",
  heading = "Start with a conversation, not a contract.",
  subtext = "Tell us what is keeping you up at night. We will spend 45 minutes with you at no cost and tell you honestly whether you need us — and if so, where to start.",
  buttonText = "Start the Conversation",
  buttonHref = "#contact",
  imageSrc = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  imageAlt = "Sentinel Healthcare clinical consultation session",
  className = "",
}) => {
  return (
    <section
      id="cta-band"
      className={`w-full bg-[#FFFFFF] py-12 md:py-16 lg:py-24 font-sans ${className}`}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        {/* Split CTA Box matching reference layout */}
        <div className="w-full rounded-[6px] overflow-hidden bg-[#0D4655] flex flex-col lg:flex-row min-h-[440px]">
          {/* Left Column - Content & White-to-Orange CTA */}
          <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-start text-left gap-6 text-white">
            <Badge variant="dark">{eyebrow}</Badge>

            <h2 className="font-serif text-[30px] sm:text-[42px] lg:text-[50px] font-medium leading-[1.12] tracking-[-0.02em] text-white text-balance">
              {heading}
            </h2>

            <p className="text-[15px] sm:text-[17px] text-[#E2F0F3]/90 leading-relaxed max-w-[55ch] text-balance">
              {subtext}
            </p>

            <div className="pt-2">
              <Button href={buttonHref} variant="white">
                <span>{buttonText}</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Column - Image Side */}
          <div className="w-full lg:w-1/2 relative min-h-[280px] lg:min-h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay for smooth edge */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0D4655]/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
