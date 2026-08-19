"use client";

import React from "react";
import Navbar from "@/components/navbar";

import Button from "@/components/ui/button";
import { ArrowRight, Clock, CheckCircle } from "@phosphor-icons/react";
import Badge from "@/components/ui/badge";

const engagementTiers = [
  {
    badge: "RECOMMENDED START",
    title: "Rapid Risk Diagnostic",
    duration: "2 Weeks",
    desc: "The fastest, lowest-commitment way to uncover clinical risk, assess regulatory compliance, and get a clear roadmap.",
    points: [
      "On-site observation and staff interviews",
      "Document and data review",
      "Prioritised findings report",
      "90-day action plan you own",
    ],
    highlight: true,
    ctaText: "Request Diagnostic",
  },
  {
    badge: "DEFINED SCOPE",
    title: "Project Engagement",
    duration: "Defined Scope & End Date",
    desc: "Targeted, structured projects built to solve specific governance, accreditation, or reporting requirements.",
    points: [
      "Accreditation readiness programme (JCI / SafeCare / NHIA)",
      "Risk register implementation with named owners",
      "Incident reporting system build",
      "Shift-friendly staff training programme delivery",
    ],
    highlight: false,
    ctaText: "Scope a Project",
  },
  {
    badge: "ONGOING ADVISORY",
    title: "Retained Risk Partner",
    duration: "Ongoing Advisory",
    desc: "Continuous clinical risk oversight and expert guidance for hospital leadership, boards, and healthcare groups.",
    points: [
      "Named adviser on call for critical clinical incidents",
      "Quarterly risk review and board oversight pack",
      "Regulatory change monitoring (NHIA, NDPA, State licensing)",
      "Incident support when it matters most",
    ],
    highlight: false,
    ctaText: "Discuss Retainer",
  },
];

export default function EngagePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="relative w-full bg-[#0D4655] py-28 lg:py-36 text-white overflow-hidden">
          {/* Stock Background Image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-right lg:bg-center"
            style={{
              backgroundImage: `url('/images/training-capacity-building.jpg')`,
            }}
          />
          {/* Gradient Overlay: 100% #0D4655 on left, fading to transparent on right */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0D4655] via-[#0D4655]/95 via-50% to-[#0D4655]/20 sm:to-transparent" />

          <div className="relative z-20 mx-auto w-full max-w-[1440px] px-6 lg:px-12 flex flex-col gap-6">
            <Badge variant="dark">
              HOW TO ENGAGE
            </Badge>

            <h1 className="font-serif text-[36px] sm:text-[52px] lg:text-[64px] font-medium leading-[1.1] tracking-[-0.02em] text-white max-w-[800px] text-balance">
              Three ways to work together.
            </h1>

            <p className="text-base sm:text-lg text-[#E2F0F3]/90 max-w-[700px] leading-relaxed text-balance">
              Start small if you prefer. Most clients begin with a diagnostic and expand from there based on clear findings and measurable outcomes.
            </p>
          </div>
        </section>

        {/* 3 Tiers Grid Section */}
        <section className="w-full py-28 lg:py-36 bg-gradient-to-b from-[#F4F9FB] via-white to-[#F4F9FB]">
          <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12 flex flex-col gap-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {engagementTiers.map((tier, idx) => {
                const dark = tier.highlight;
                return (
                <div
                  key={idx}
                  className={`rounded-[8px] p-8 sm:p-9 flex flex-col justify-between gap-8 border transition-all duration-300 ${
                    dark
                      ? "bg-gradient-to-b from-[#0D4655] to-[#08303B] text-white border-[#FF6F4B]/40 shadow-[0_16px_48px_rgba(13,70,85,0.2)] md:-translate-y-2 relative z-10"
                      : "bg-gradient-to-b from-[#FFFFFF] to-[#F8FBFC] text-[#0D4655] border-[#DCEAEE] shadow-[0_4px_24px_-4px_rgba(13,70,85,0.06)] hover:shadow-[0_12px_32px_-4px_rgba(13,70,85,0.12)] hover:border-[#1D6B7D]/50"
                  }`}
                >
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <span className={`rounded-[6px] px-3 py-1 text-[11px] font-semibold tracking-wider uppercase ${
                        dark ? "bg-[#FF6F4B] text-white" : "bg-[#E2F0F3] text-[#0D4655]"
                      }`}>
                        {tier.badge}
                      </span>
                      <div className={`flex items-center gap-1.5 text-xs font-semibold ${
                        dark ? "text-[#E2F0F3]" : "text-[#1D6B7D]"
                      }`}>
                        <Clock className="w-4 h-4 text-[#FF6F4B]" />
                        <span>{tier.duration}</span>
                      </div>
                    </div>

                    <h2 className={`font-serif text-2xl sm:text-3xl font-medium mt-1 ${
                      dark ? "text-white" : "text-[#0D4655]"
                    }`}>
                      {tier.title}
                    </h2>

                    <p className={`text-sm leading-relaxed ${
                      dark ? "text-[#E2F0F3]/90" : "text-[#4A6570]"
                    }`}>
                      {tier.desc}
                    </p>

                    {/* Points list */}
                    <div className="pt-3 flex flex-col gap-3.5 border-t border-current/10">
                      {tier.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5">
                          <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            dark ? "text-[#FF6F4B]" : "text-[#1D6B7D]"
                          }`} />
                          <span className={`text-xs sm:text-sm leading-snug ${
                            dark ? "text-[#E2F0F3]/95" : "text-[#0D4655]"
                          }`}>
                            {pt}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`pt-6 border-t ${
                    dark ? "border-white/15" : "border-[#DCEAEE]"
                  }`}>
                    <Button href="/contact" variant={dark ? "white" : "primary"} className="w-full">
                      <span>{tier.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                );
              })}
            </div>

            {/* Scoped Pricing Notice */}
            <div className="relative overflow-hidden rounded-[8px] bg-gradient-to-r from-white to-[#F8FBFC] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#DCEAEE] shadow-sm">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(13,70,85,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(13,70,85,0.05) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                  WebkitMaskImage:
                    "linear-gradient(to left, black 0%, black 30%, transparent 65%)",
                  maskImage:
                    "linear-gradient(to left, black 0%, black 30%, transparent 65%)",
                }}
              />
              <div className="relative flex flex-col gap-1 max-w-[700px]">
                <h3 className="font-serif text-xl font-medium text-[#0D4655]">
                  Engagements are tailored to facility size and operational complexity
                </h3>
                <p className="text-sm text-[#4A6570] text-balance">
                  Every advisory module is scoped following a preliminary consultation. There are no hidden subscription fees or forced software licenses.
                </p>
              </div>

              <Button href="/contact" variant="primary" className="flex-shrink-0 relative">
                <span>Book 30-Min Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
