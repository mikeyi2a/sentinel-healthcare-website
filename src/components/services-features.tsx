"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/button";
import {
  ShieldWarning,
  Pulse,
  Medal,
  GraduationCap,
  CaretRight,
  Monitor,
  ArrowRight,
} from "@phosphor-icons/react";
import Badge from "@/components/ui/badge";

export type ServiceItem = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  slug: string;
};

const defaultServices: ServiceItem[] = [
  {
    id: 1,
    icon: <ShieldWarning className="w-6 h-6" />,
    title: "Clinical Risk Management",
    description: "Finding, rating and closing out the risks that lead to patient harm.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    slug: "clinical-risk-management",
  },
  {
    id: 2,
    icon: <Pulse className="w-6 h-6" />,
    title: "Patient Safety Intelligence",
    description: "Turning your safety data into dashboards leaders actually use.",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80",
    slug: "patient-safety-intelligence",
  },
  {
    id: 3,
    icon: <Medal className="w-6 h-6" />,
    title: "Clinical Governance & Accreditation",
    description: "Frameworks, policies and readiness for JCI, SafeCare and national standards.",
    image:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
    slug: "clinical-governance-accreditation",
  },
  {
    id: 4,
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Training & Capacity Building",
    description: "Building the skills and safety culture that make the system stick.",
    image:
      "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=1000&q=80",
    slug: "training-capacity-building",
  },
  {
    id: 5,
    icon: <Monitor className="w-6 h-6" />,
    title: "Digital Safety Solutions",
    description: "Affordable reporting platforms and BI dashboards for decision support.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
    slug: "digital-safety-solutions",
  },
];

export interface ServicesFeaturesProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  viewAllText?: string;
  viewAllHref?: string;
  services?: ServiceItem[];
  className?: string;
}

export const ServicesFeatures: React.FC<ServicesFeaturesProps> = ({
  eyebrow = "OUR SERVICES",
  title = "Clinical risk & safety management solutions",
  subtitle = "Practical, data-driven services that support healthcare providers, HMOs, and public health partners.",
  viewAllText = "Explore All Services",
  viewAllHref = "/services",
  services = defaultServices,
  className = "",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // Auto-rotate tabs every 4 seconds
  useEffect(() => {
    if (!isAutoRotating) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoRotating, services.length]);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoRotating(false);

    const timer = setTimeout(() => {
      setIsAutoRotating(true);
    }, 10000);
    return () => clearTimeout(timer);
  };

  return (
    <section
      id="services"
      className={`w-full bg-tint-1 py-24 md:py-28 lg:py-36 font-sans ${className}`}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12 flex flex-col gap-12">
        {/* Section Header with View All Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
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

          {/* View All Services Header Button */}
          <div className="flex-shrink-0">
            <Button href={viewAllHref} variant="white">
              <span>{viewAllText}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Accordion & Visual Split Grid */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full lg:items-center">
          {/* Left Accordion Column with Stable Height. `min-h` rather than `h`:
              with a hard height the cards (flex-shrink: 1 by default) get squashed
              once titles/descriptions wrap to two lines at narrower desktop widths,
              and the squash amount changes mid-animation. */}
          <div className="flex-1 lg:min-h-[460px] flex flex-col justify-start gap-2.5">
            {services.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={item.id}
                  onClick={() => handleTabClick(index)}
                  className={`relative shrink-0 rounded-[6px] transition-colors duration-200 cursor-pointer overflow-hidden ${
                    isActive
                      ? "bg-[#FFFFFF]"
                      : "bg-transparent hover:bg-[#FFFFFF]/60"
                  }`}
                >
                  {/* No `gap` here: a flex gap would appear/disappear the instant
                      the panel mounts/unmounts, outside the height animation. The
                      panel supplies its own spacing from inside the animated box. */}
                  <div className="p-4 flex flex-col">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-[6px] transition-colors ${
                            isActive
                              ? "bg-[#0D4655] text-white"
                              : "bg-[#E2F0F3] text-[#0D4655]"
                          }`}
                        >
                          {item.icon}
                        </div>

                        <h3 className="text-base sm:text-lg font-medium text-[#0D4655] text-balance">
                          {item.title}
                        </h3>
                      </div>

                      <Link
                        href={`/services#${item.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D6B7D] hover:text-[#0D4655] hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>View Details</span>
                        <CaretRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          {/* Padding lives on the inner element. On the animated
                              element, border-box sizing would floor its height at
                              the padding, so `height: 0` would never reach 0. */}
                          <div className="pt-3 pl-[48px]">
                            {/* Reserve two lines so every tab expands by the same
                                amount. Otherwise descriptions that wrap to two lines
                                at some widths make the list grow/shrink on switch. */}
                            <p className="text-sm font-normal text-[#4A6570] leading-relaxed text-balance min-h-[2lh]">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Image Visual Display with Fixed Aspect Height */}
          <div className="flex-1 h-[360px] sm:h-[400px] lg:h-[460px] relative rounded-[6px] bg-[#E2F0F3] overflow-hidden">
            <AnimatePresence>
              {services.map(
                (item, index) =>
                  activeIndex === index && (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full flex flex-col justify-end"
                    >
                      {/* Background Image */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Overlay Caption Card */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0D4655]/95 via-[#0D4655]/70 to-transparent p-6 text-white">
                        <div>
                          <span className="text-xs uppercase tracking-wider font-semibold text-[#E2F0F3]">
                            0{item.id} — Service Overview
                          </span>
                          <h4 className="font-serif text-xl font-medium text-white mb-1 text-balance">
                            {item.title}
                          </h4>
                          <p className="text-xs text-[#E2F0F3]/90 max-w-[50ch] text-balance">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFeatures;
