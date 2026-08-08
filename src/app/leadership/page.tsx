"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Button from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Network, User as UserIcon, X, BookOpen, SealCheck } from "@phosphor-icons/react";
import Badge from "@/components/ui/badge";

interface Director {
  name: string;
  qualifications: string;
  title: string;
  shareholding: string;
  focus: string;
  image: string | null;
  bioParagraphs: string[] | null;
}

const directors: Director[] = [
  {
    name: "Dr. Bibian Nwanyioma Ofoegbu",
    qualifications: "MBBS, MRCPCH, FRCPCH, MSc",
    title: "Founder & Managing Director",
    shareholding: "Majority Shareholder (800,000 ordinary shares)",
    focus: "Clinical Governance, Pediatrics, Patient Safety Systems & Quality Improvement",
    image: "/dr-bibian-ofoegbu.png",
    bioParagraphs: [
      "Dr Bibian Ofoegbu is a consultant neonatologist, senior healthcare leader and patient-safety advocate currently practising in the United Arab Emirates. Trained in Nigeria and the United Kingdom, she has extensive clinical and leadership experience spanning neonatal medicine, clinical governance, patient safety, quality improvement, enterprise risk management and healthcare accreditation.",
      "She obtained her primary medical degree from the University of Benin, Nigeria, and completed her specialist training in Paediatrics in Nigeria before undertaking subspecialty training in Neonatology in the United Kingdom.",
      "Throughout her career, Dr Ofoegbu has combined frontline clinical practice with a sustained commitment to improving the quality and safety of healthcare. Her experience encompasses hospital leadership, accreditation readiness, quality improvement and the development of effective clinical-governance and risk-management systems. She has a particular interest in helping healthcare organisations establish robust processes for identifying, reporting, escalating and investigating clinical risks—and, crucially, translating the lessons learned into safer patient care.",
      "In July 2026, Dr Ofoegbu served as part of the Medical Association of Nigerians Across Great Britain (MANSAG) team delivering obstetric and neonatal education and training to healthcare professionals in Nigeria. This formed part of the Diaspora Health Impact Initiative during National Diaspora Week, undertaken in partnership with the Nigerians in Diaspora Commission (NiDCOM)."
    ]
  },
  {
    name: "Dr. Hadrian Onuegbu Ofoegbu",
    qualifications: "MBBS, FRCPGP",
    title: "Director",
    shareholding: "Shareholder (200,000 ordinary shares)",
    focus: "Clinical Medicine, Health Systems Management & Operational Risk Control",
    image: null,
    bioParagraphs: null
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
  const [activeBioDirector, setActiveBioDirector] = useState<Director | null>(null);

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

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveBioDirector(null);
      }
    };
    if (activeBioDirector) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeBioDirector]);

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
        <section className="w-full pt-20 lg:pt-28 pb-24 lg:pb-32 bg-[#FFFFFF]">
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
                    className="rounded-[6px] bg-tint-1 overflow-hidden flex flex-col justify-between border border-[#E2F0F3] shadow-xs"
                  >
                    <div>
                      {/* Portrait image or placeholder */}
                      <div className="relative w-full aspect-[4/5] bg-[#E2F0F3] flex flex-col items-center justify-center overflow-hidden">
                        {dir.image ? (
                          <Image
                            src={dir.image}
                            alt={dir.name}
                            fill
                            sizes="(max-width: 640px) 100vw, 400px"
                            className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                            priority={idx === 0}
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center gap-3">
                            <UserIcon className="w-16 h-16 text-[#1D6B7D]/60" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.11em] text-[#1D6B7D]">
                              Director Profile
                            </span>
                          </div>
                        )}
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

                        <div className="flex flex-col gap-1 pt-1">
                          <span className="text-[11px] font-semibold uppercase tracking-[0.11em] text-[#0D4655]">
                            Focus & Expertise
                          </span>
                          <span className="text-xs text-[#4A6570] leading-relaxed">{dir.focus}</span>
                        </div>
                      </div>
                    </div>

                    {dir.bioParagraphs && (
                      <div className="p-6 pt-0">
                        <button
                          type="button"
                          onClick={() => setActiveBioDirector(dir)}
                          className="w-full flex items-center justify-center gap-2 rounded-[6px] bg-[#0D4655] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#1D6B7D] transition-colors"
                        >
                          <BookOpen className="w-4 h-4 text-[#FF6F4B]" />
                          <span>Read Full Biography</span>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Associate Network — horizontal slideshow */}
        <section className="w-full py-28 lg:py-36 bg-[#F4F9FB] border-t border-[#DCEAEE]">
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

      {/* Biography Modal Drawer */}
      {activeBioDirector && activeBioDirector.bioParagraphs && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#0D4655]/70 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
          onClick={() => setActiveBioDirector(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[12px] shadow-2xl overflow-hidden flex flex-col border border-[#DCEAEE]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveBioDirector(null)}
              className="absolute top-4 right-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-[#0D4655] text-white hover:bg-[#FF6F4B] transition-colors shadow-md"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Below lg, the portrait column has no height cap, so it alone can
                exceed 90vh — this wrapper scrolls as one unit there. At lg it hands
                scrolling back to the two columns below so they scroll independently. */}
            <div className="flex-1 min-h-0 flex flex-col lg:flex-row overflow-y-auto lg:overflow-visible">
            {/* Left Column: Portrait & Highlights (Fixed/Static on Desktop) */}
            <div className="w-full lg:w-2/5 bg-[#F4F9FB] p-6 lg:p-8 flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-[#DCEAEE] shrink-0 lg:overflow-y-auto lg:max-h-[90vh]">
              <div className="relative w-full aspect-[4/5] rounded-[8px] overflow-hidden bg-[#E2F0F3] shadow-sm">
                {activeBioDirector.image && (
                  <Image
                    src={activeBioDirector.image}
                    alt={activeBioDirector.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 360px"
                    className="object-cover object-top"
                  />
                )}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-2xl font-medium text-[#0D4655]">
                  {activeBioDirector.name}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1D6B7D]">
                  {activeBioDirector.title}
                </span>
                <span className="text-xs text-[#4A6570] font-medium">
                  {activeBioDirector.qualifications}
                </span>
              </div>

              <div className="rounded-[6px] bg-[#E2F0F3]/70 p-4 flex flex-col gap-2 text-xs text-[#0D4655]">
                <div className="flex items-center gap-2 font-semibold text-[#1D6B7D]">
                  <SealCheck className="w-4 h-4 text-[#FF6F4B]" />
                  <span>Key Leadership Role</span>
                </div>
                <p className="text-[#4A6570] leading-relaxed">
                  Managing Director driving clinical governance, patient safety diagnostics, and risk transformation across hospitals and HMOs.
                </p>
              </div>
            </div>

            {/* Right Column: Full Biography Content (Independently Scrollable at lg) */}
            <div className="w-full lg:w-3/5 p-6 lg:p-10 flex flex-col gap-6 lg:overflow-y-auto lg:max-h-[90vh]">
              <div className="flex flex-col gap-1 border-b border-[#DCEAEE] pb-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#FF6F4B]">
                  Executive Biography
                </span>
                <h2 className="font-serif text-2xl lg:text-3xl font-medium text-[#0D4655]">
                  Professional Background & Impact
                </h2>
              </div>

              <div className="flex flex-col gap-4 text-sm sm:text-base text-[#4A6570] leading-relaxed">
                {activeBioDirector.bioParagraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-[#DCEAEE] flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveBioDirector(null)}
                  className="rounded-[6px] bg-[#0D4655] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#1D6B7D] transition-colors"
                >
                  Close Profile
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
