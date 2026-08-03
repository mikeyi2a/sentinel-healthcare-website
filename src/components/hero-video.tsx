"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

// Dynamically import MeshGradient from @paper-design/shaders-react without SSR for WebGL canvas safety
const MeshGradient = dynamic(
  () => import("@paper-design/shaders-react").then((mod) => mod.MeshGradient),
  {
    ssr: false,
    loading: () => <div className="hero-gradient h-full w-full" aria-hidden="true" />,
  }
);

/** Expo-out — fast departure, long settle. Matches the reference reveal. */
const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** The card opens from a small centred pill to the full inset frame. */
const CLIP_CLOSED = "inset(47.2% 47.5% 47.2% 47.5% round 24px)";
const CLIP_OPEN = "inset(0% 0% 0% 0% round 24px)";

export interface HeroVideoProps {
  /** Each string renders as its own line and reveals on its own beat. */
  headingLines?: string[];
  subtext?: string;
  ctaText?: string;
  ctaHref?: string;
  /** Optional. Falls back to Paper MeshGradient shader when omitted. */
  videoSrc?: string;
  videoWebmSrc?: string;
  posterSrc?: string;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({
  headingLines = ["Safer care,", "by design."],
  subtext = "We help hospitals, HMOs, and development partners master clinical risk, elevate patient safety, and stay ahead of regulation.",
  ctaText = "Book a free consultation",
  ctaHref = "#contact",
  videoSrc,
  videoWebmSrc,
  posterSrc,
}) => {
  const reduceMotion = useReducedMotion();

  const reveal: Variants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 28, filter: "blur(14px)" },
    show: reduceMotion
      ? { opacity: 1, transition: { duration: 0.3 } }
      : {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.9, ease: EASE_EXPO },
        },
  };

  return (
    <section className="relative h-[100svh] min-h-[560px] w-full bg-tint-1 p-[10px]">
      <motion.div
        className="relative h-full w-full overflow-hidden rounded-[20px] lg:rounded-[40px] bg-[#0D4655]"
        initial={{ clipPath: reduceMotion ? CLIP_OPEN : CLIP_CLOSED }}
        animate={{ clipPath: CLIP_OPEN }}
        transition={{ duration: 1.1, ease: EASE_EXPO }}
      >
        {/* Media / Shader layer — Paper MeshGradient */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: reduceMotion ? 1 : 1.14 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: EASE_EXPO }}
        >
          {videoSrc || videoWebmSrc ? (
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={posterSrc}
              aria-hidden="true"
            >
              {videoWebmSrc && <source src={videoWebmSrc} type="video/webm" />}
              {videoSrc && <source src={videoSrc} type="video/mp4" />}
            </video>
          ) : (
            <MeshGradient
              speed={0.53}
              scale={1}
              distortion={1}
              swirl={0.06}
              colors={["#253338", "#0C3C49", "#FE6E4B", "#095667"]}
              className="h-full w-full object-cover"
            />
          )}
        </motion.div>

        {/* Legibility scrim */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#0D4655]/45 via-[#0D4655]/15 to-[#0D4655]/60 pointer-events-none"
        />

        {/* Content layer — strictly centered inside max-w-[1440px] px-6 lg:px-12 to align 1:1 with all sections */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <motion.div
            className="flex h-full w-full max-w-[1440px] flex-col justify-between px-6 lg:px-12 pt-[112px] lg:pt-[148px] pb-8 lg:pb-[44px]"
            initial="hidden"
            animate="show"
            variants={{
              show: {
                transition: { delayChildren: 0.68, staggerChildren: 0.1 },
              },
            }}
          >
            <h1 className="max-w-[16ch] font-serif text-[clamp(2.5rem,7.5vw,6rem)] font-medium leading-[1.02] tracking-[-0.03em] text-white pointer-events-auto text-balance">
              {headingLines.map((line) => (
                <motion.span key={line} variants={reveal} className="block">
                  {line}
                </motion.span>
              ))}
            </h1>

            <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between md:gap-12 pointer-events-auto">
              <motion.p
                variants={reveal}
                className="max-w-[46ch] text-[15px] leading-relaxed text-white/85 sm:text-base text-balance"
              >
                {subtext}
              </motion.p>

              <motion.div variants={reveal} className="shrink-0">
                <Button href={ctaHref} variant="white">
                  <span>{ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroVideo;
