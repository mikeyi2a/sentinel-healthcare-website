"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";

import Button from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Network, User as UserIcon } from "@phosphor-icons/react";
import Badge from "@/components/ui/badge";

const directors = [
  {
    name: "Dr. Bibian Nwanyioma Ofoegbu",
    qualifications: "MBBS, MRCPCH, FRCPCH, MSc",
    title: "Founder & Managing Director",
    shareholding: "Majority Shareholder (800,000 ordinary shares)",
    focus: "Clinical Governance, Pediatrics, Patient Safety Systems & Quality Improvement",
  },
  {
    name: "Dr. Hadrian Onuegbu Ofoegbu",
    qualifications: "MBBS, FRCPGP",
    title: "Director",
    shareholding: "Shareholder (200,000 ordinary shares)",
    focus: "Clinical Medicine, Health Systems Management & Operational Risk Control",
  },
];

const coverageAreas = [
  {
    title: "Clinical Governance",
    desc: "Medical audit, mortality & morbidity reviews, and clinical policy formulation.",
  },
  {
    title: "Regulatory & Legal",
    desc: "Compliance mapping against NHIA, NDPA, state licensing, and international standards.",
  },
  {
    title: "Quality & Analytics",
    desc: "Biostatistical analysis, safety metrics, executive dashboarding, and BI integration.",
  },
  {
    title: "Training & Facilitation",
    desc: "Shift-friendly clinical workshops, train-the-trainer toolkits, and human factors coaching.",
  },
];

export default function LeadershipPage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // The track stops overflowing at wide viewports, so the arrows disable
  // themselves rather than sitting there doing nothing.
  const syncArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanScrollPrev(track.scrollLeft > 1);
    setCanScrollNext(track.scrollLeft < maxScroll - 1);
  }, []);

  useEffect(() => {
    syncArrows();
    window.addEventListener("resize", syncArrows);
    return () => window.removeEventListener("resize", syncArrows);
  }, [syncArrows]);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-carousel-card]");
    const step = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Section: Board of Directors — top section */}
        <section className="w-full pt-12 lg:pt-20 pb-16 lg:pb-24 bg-[#FFFFFF]">
          <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12 flex flex-col gap-12">
            <h1 className="font-serif text-[40px] sm:text-[56px] lg:text-[72px] font-medium leading-[1.05] tracking-[-0.02em] text-[#0D4655] text-balance">
              Meet the <span className="text-[#1D6B7D]/40">Board</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 border-t border-[#DCEAEE] pt-10">
              {/* Left: label + intro */}
              <div className="lg:col-span-4 flex flex-col gap-5">
                <Badge>Board of Directors</Badge>

                <p className="text-base text-[#4A6570] leading-relaxed max-w-[38ch]">
                  Sentinel is directed by its founding shareholders, supported by an associate network of clinical, regulatory and analytics specialists engaged per project.
                </p>
              </div>

              {/* Right: director cards */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {directors.map((dir, idx) => (
                  <div
                    key={idx}
                    className="rounded-[6px] bg-tint-1 overflow-hidden flex flex-col"
                  >
                    {/* Portrait placeholder — swap for a real photograph */}
                    <div className="relative w-full aspect-[4/5] bg-[#E2F0F3] flex flex-col items-center justify-center gap-3">
                      <UserIcon className="w-16 h-16 text-[#1D6B7D]/60" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.11em] text-[#1D6B7D]">
                        Add photograph
                      </span>
                    </div>

                    <div className="flex flex-col gap-4 p-6">
                      <div className="flex flex-col gap-1.5">
                        <h3 className="font-serif text-xl font-medium text-[#0D4655] leading-tight">
                          {dir.name}
                        </h3>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.11em] text-[#1D6B7D]">
                          {dir.title}
                        </span>
                        <span className="text-xs text-[#4A6570]">{dir.qualifications}</span>
                      </div>

                      <div className="flex flex-col gap-1 pt-1">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.11em] text-[#0D4655]">
                          Shareholding
                        </span>
                        <span className="text-xs text-[#4A6570]">{dir.shareholding}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Associate Network — horizontal slideshow */}
        <section className="w-full py-16 lg:py-24 bg-[#F4F9FB] border-t border-[#DCEAEE]">
          <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12 flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="flex flex-col gap-4 max-w-[760px]">
                <Badge variant="light">
                  ASSOCIATE NETWORK
                </Badge>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0D4655] text-balance">
                  Specialist expertise engaged per project
                </h2>

                <p className="text-base text-[#4A6570] leading-relaxed">
                  Clients pay for the exact expertise they need, when they need it — without paying for standing overhead.
                </p>
              </div>

              {/* Slideshow controls */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => scrollByCard(-1)}
                  disabled={!canScrollPrev}
                  aria-label="Previous specialism"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D4655] text-white transition-opacity hover:opacity-80 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByCard(1)}
                  disabled={!canScrollNext}
                  aria-label="Next specialism"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D4655] text-white transition-opacity hover:opacity-80 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Horizontal card track — progressing from lightest (left) to darkest (right) */}
            <div
              ref={trackRef}
              onScroll={syncArrows}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scroll-padding-left:24px] lg:[scroll-padding-left:48px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {coverageAreas.map((area, idx) => {
                const styles = [
                  {
                    bg: "bg-[#E2F0F3] border border-[#1D6B7D]/25",
                    titleColor: "text-[#0D4655]",
                    descColor: "text-[#4A6570]",
                  },
                  {
                    bg: "bg-[#1D6B7D]",
                    titleColor: "text-white",
                    descColor: "text-[#E2F0F3]/90",
                  },
                  {
                    bg: "bg-[#0D4655]",
                    titleColor: "text-white",
                    descColor: "text-[#E2F0F3]/90",
                  },
                  {
                    bg: "bg-[#09333E]",
                    titleColor: "text-white",
                    descColor: "text-[#E2F0F3]/90",
                  },
                ];
                const style = styles[idx % styles.length];
                return (
                  <div
                    key={idx}
                    data-carousel-card
                    className={`snap-start shrink-0 w-[80vw] sm:w-[380px] min-h-[340px] rounded-[6px] ${style.bg} p-8 flex flex-col justify-between gap-10 shadow-sm transition-transform hover:-translate-y-1`}
                  >
                    <div className="flex flex-col gap-3">
                      <Network className="w-6 h-6 text-[#FF6F4B]" />
                      <h3 className={`font-serif text-2xl font-medium ${style.titleColor}`}>{area.title}</h3>
                    </div>
                    <p className={`text-sm ${style.descColor} leading-relaxed`}>{area.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex justify-center">
              <Button href="/contact" variant="primary">
                <span>Contact Leadership</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
