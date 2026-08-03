import React from "react";
import {
  Compass,
  Stethoscope,
  Network,
  KeyRound,
  FileCheck2,
  MessageSquareText,
} from "lucide-react";
import Badge from "@/components/ui/badge";

export interface Differentiator {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const defaultDifferentiators: Differentiator[] = [
  {
    id: "nigeria-first",
    icon: <Compass className="w-6 h-6 text-[#E2F0F3]" />,
    title: "Nigeria-First Frameworks",
    description:
      "Our frameworks assume Nigerian regulation, staffing, and infrastructure reality — not an imported template from another country.",
  },
  {
    id: "clinically-led",
    icon: <Stethoscope className="w-6 h-6 text-[#E2F0F3]" />,
    title: "Clinically Led Advisory",
    description:
      "Designed by specialists who have worked inside clinical environments and understand what a busy shift actually allows.",
  },
  {
    id: "whole-system",
    icon: <Network className="w-6 h-6 text-[#E2F0F3]" />,
    title: "Whole-System Perspective",
    description:
      "We advise healthcare providers, payers, and public health agencies — giving us a complete view of how risk moves across systems.",
  },
  {
    id: "handover",
    icon: <KeyRound className="w-6 h-6 text-[#E2F0F3]" />,
    title: "Handover, Not Dependency",
    description:
      "Our core goal is to build internal capability so your team can manage and run the risk function independently without us.",
  },
  {
    id: "evidence",
    icon: <FileCheck2 className="w-6 h-6 text-[#E2F0F3]" />,
    title: "Evidence Over Opinion",
    description:
      "Every diagnostic finding and recommendation traces directly back to empirical data, clinical observation, or documented standards.",
  },
  {
    id: "plain-language",
    icon: <MessageSquareText className="w-6 h-6 text-[#E2F0F3]" />,
    title: "Plain-Language Governance",
    description:
      "If your staff cannot explain a control back to us in plain terms, we have not finished our job. We build practical clarity.",
  },
];

export interface WhySentinelProps {
  eyebrow?: string;
  heading?: string;
  subtext?: string;
  differentiators?: Differentiator[];
  className?: string;
}

export const WhySentinel: React.FC<WhySentinelProps> = ({
  eyebrow = "WHY SENTINEL",
  heading = "Built specifically for the realities of Nigerian healthcare",
  subtext = "Six core principles that distinguish our clinical risk and governance advisory from traditional consulting.",
  differentiators = defaultDifferentiators,
  className = "",
}) => {
  return (
    <section
      id="why-sentinel"
      className={`w-full bg-[#0D4655] py-16 lg:py-24 font-sans text-white ${className}`}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12 flex flex-col gap-12 text-center items-center">
        {/* Section Header Stack */}
        <div className="flex flex-col items-center gap-4 max-w-[760px] text-center">
          <div className="inline-flex">
            <Badge variant="dark">
              {eyebrow}
            </Badge>
          </div>

          <h2 className="font-serif text-[28px] sm:text-[40px] lg:text-[48px] font-medium text-white leading-[1.15] tracking-[-0.02em] text-balance">
            {heading}
          </h2>

          <p className="text-[15px] sm:text-[17px] text-[#E2F0F3]/90 leading-relaxed text-balance">
            {subtext}
          </p>
        </div>

        {/* 6 Differentiators Grid: 3 columns desktop / 2 tablet / 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left">
          {differentiators.map((item) => (
            <div
              key={item.id}
              className="rounded-[6px] bg-[#09333E] p-6 lg:p-8 flex flex-col gap-4 transition-colors hover:bg-[#072B35]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[6px] bg-[#1D6B7D]/40">
                {item.icon}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-xl font-medium text-white text-balance">
                  {item.title}
                </h3>
                <p className="text-sm text-[#E2F0F3]/80 leading-relaxed text-balance">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySentinel;
