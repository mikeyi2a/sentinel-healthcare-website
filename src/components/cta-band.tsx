"use client";

import React from "react";
import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Badge from "@/components/ui/badge";
import { motion, useReducedMotion } from "framer-motion";

import { usePathname } from "next/navigation";

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

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const CtaBand: React.FC<CtaBandProps> = ({
  eyebrow = "FREE CONSULTATION",
  heading = "Start with a conversation, not a contract.",
  subtext = "Tell us what is keeping you up at night. We will spend 30 minutes with you at no cost and tell you honestly whether you need us — and if so, where to start.",
  buttonText = "Start the Conversation",
  buttonHref = "/contact",
  imageSrc = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  imageAlt = "Sentinel Healthcare clinical consultation session",
  className = "",
}) => {
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();

  if (pathname === "/contact") {
    return null;
  }

  return (
    <section
      id="cta-band"
      className={`w-full bg-[#FFFFFF] py-24 md:py-28 lg:py-36 font-sans ${className}`}
    >
      <motion.div
        className="mx-auto w-full max-w-[1440px] px-6 lg:px-12"
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.85, ease: EASE_EXPO }}
      >
        {/* Split CTA Box matching reference layout */}
        <div className="w-full rounded-[6px] overflow-hidden bg-[#0D4655] flex flex-col lg:flex-row min-h-[440px] shadow-sm">
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
      </motion.div>
    </section>
  );
};

export default CtaBand;
