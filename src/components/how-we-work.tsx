"use client";

import React, { useRef } from "react";
import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Badge from "@/components/ui/badge";
import { motion, useReducedMotion } from "framer-motion";

export type WorkStep = {
  id: number;
  stepNum: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  image: string;
};

const defaultSteps: WorkStep[] = [
  {
    id: 1,
    stepNum: "01",
    title: "Listen",
    tagline: "On-site engagement & frontline observation",
    description:
      "We start on site with your people — clinical, administrative, and finance. The risks that matter are usually already known by someone inside the hospital.",
    deliverables: ["Frontline interviews", "Near-miss discovery", "Staff risk feedback"],
    image: "/images/how-we-work-listen.png",
  },
  {
    id: 2,
    stepNum: "02",
    title: "Diagnose",
    tagline: "Evidence-backed gap analysis & risk scoring",
    description:
      "Structured assessment against national requirements (NHIA, NDPA) and international good practice, with evidence behind every finding.",
    deliverables: ["Regulatory audit", "Risk scoring register", "Prioritised findings report"],
    image: "/images/how-we-work-diagnose.png",
  },
  {
    id: 3,
    stepNum: "03",
    title: "Design",
    tagline: "Practical controls built for real shifts",
    description:
      "Controls, workflows, and documents built around your real staffing and budget — not an idealised hospital template.",
    deliverables: ["Custom SOPs", "Incident reporting workflows", "Board oversight packs"],
    image: "/images/how-we-work-design.png",
  },
  {
    id: 4,
    stepNum: "04",
    title: "Embed",
    tagline: "Team training & sustainable handover",
    description:
      "We train your team, hand over the tools, and stay close enough to make sure the change holds long after we leave.",
    deliverables: ["Hands-on staff workshops", "Train-the-trainer kits", "Refresher modules"],
    image: "/images/how-we-work-embed.png",
  },
];

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export interface HowWeWorkProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  steps?: WorkStep[];
  className?: string;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({
  eyebrow = "HOW WE WORK",
  title = "Our four-step methodology for lasting clinical safety",
  subtitle = "No 200-page report that gathers dust. Every engagement ends with something your team can execute on Monday morning.",
  steps = defaultSteps,
  className = "",
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="how-we-work"
      className={`w-full bg-[#FFFFFF] py-24 md:py-28 lg:py-36 font-sans ${className}`}
    >
      <motion.div
        className="mx-auto w-full max-w-[1440px] px-6 lg:px-12 flex flex-col gap-10"
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: EASE_EXPO }}
      >
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-[780px]">
          <div className="inline-flex">
            <Badge>
              {eyebrow}
            </Badge>
          </div>

          <h2 className="font-serif text-[28px] sm:text-[40px] lg:text-[48px] font-medium text-[#0D4655] leading-[1.15] tracking-[-0.02em] text-balance">
            {title}
          </h2>

          <p className="text-[15px] sm:text-[17px] text-[#4A6570] leading-relaxed text-balance">
            {subtitle}
          </p>
        </div>

        {/* 4-Step Cards Grid with Tight Gap & Balanced Text Padding */}
        <div
          ref={trackRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
        >
          {steps.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: EASE_EXPO }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="h-full rounded-[6px] bg-tint-1 overflow-hidden flex flex-col justify-between transition-colors hover:bg-[#E2F0F3]/40"
            >
              {/* Image Frame with Number Badge */}
              <div className="relative aspect-[16/10] w-full bg-[#E2F0F3] overflow-hidden flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {/* Number badge matching top-left inset padding */}
                <div className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-[6px] bg-[#0D4655]/70 text-white backdrop-blur-md">
                  <span className="text-xs font-bold tracking-wide">
                    {item.stepNum}
                  </span>
                </div>
              </div>

              {/* Text Content with reduced padding matching 12px/14px top badge offset */}
              <div className="p-3.5 sm:p-4 flex flex-col justify-between gap-3 flex-1">
                <div className="flex flex-col gap-1">
                  <h3 className="font-serif text-xl font-medium text-[#0D4655] leading-tight text-balance">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#1D6B7D] text-balance">
                    {item.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#4A6570] leading-relaxed mt-1 text-balance">
                    {item.description}
                  </p>
                </div>

                {/* Clean Left-Aligned Vertical Deliverables List */}
                <div className="flex flex-col gap-1 pt-1 text-xs font-medium text-[#1D6B7D]">
                  {item.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-[#1D6B7D]/50 flex-shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Bar with Grid Pattern & Alpha Mask */}
        <div className="relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4 rounded-[6px] bg-[#E2F0F3]/60 p-6 border border-[#DCEAEE]">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(13,70,85,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(13,70,85,0.08) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              WebkitMaskImage:
                "linear-gradient(to left, black 0%, black 30%, transparent 65%)",
              maskImage:
                "linear-gradient(to left, black 0%, black 30%, transparent 65%)",
            }}
          />
          <div className="relative flex flex-col gap-0.5">
            <h4 className="font-serif text-lg font-medium text-[#0D4655] text-balance">
              Ready to assess clinical risk in your facility?
            </h4>
            <p className="text-sm text-[#4A6570] text-balance">
              Start with a 2-week Rapid Risk Diagnostic to identify gaps and build a 90-day action plan.
            </p>
          </div>

          <Button href="/contact" variant="primary" className="flex-shrink-0 relative">
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default HowWeWork;
