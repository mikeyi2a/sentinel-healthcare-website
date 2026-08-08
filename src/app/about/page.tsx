"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Button from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Handshake, Eye, Medal, CheckCircle, Lock, Scales, Sparkle } from "@phosphor-icons/react";
import Badge from "@/components/ui/badge";
import { motion, useReducedMotion } from "framer-motion";

const companyFacts = [
  { label: "Full Legal Name", value: "Sentinel Healthcare Consulting Limited" },
  { label: "Registration Date", value: "15 July 2026" },
  { label: "RC Number", value: "9683677" },
  { label: "Tax ID (TIN)", value: "2622447272211" },
  { label: "Corporate Structure", value: "Private company limited by shares" },
  { label: "Share Capital", value: "₦1,000,000" },
  { label: "Head Office", value: "T6-10D CoopEast Beach Resort Estate, Platinum Way, Lekki, Lagos State" },
];

const visionMarkers = [
  {
    num: "01",
    title: "Reporting is routine",
    desc: "Staff raise near-misses without fear — and report counts rise before harm falls.",
    highlight: false,
  },
  {
    num: "02",
    title: "Governance is practical",
    desc: "Controls fit real shift patterns, real staffing levels and real hospital budgets.",
    highlight: true,
  },
  {
    num: "03",
    title: "Accreditation is predictable",
    desc: "Surveys verify what a facility already does every day, with zero last-minute panic.",
    highlight: false,
  },
  {
    num: "04",
    title: "Leadership has visibility",
    desc: "Boards and CEOs receive plain-language risk registers they can act on with confidence.",
    highlight: false,
  },
];

const coreValues = [
  {
    icon: <Handshake className="w-6 h-6 text-[#FF6F4B]" />,
    title: "Patient Safety First",
    desc: "Every control, SOP and diagnostic we deliver must answer one question: does this protect the person in the bed?",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#FF6F4B]" />,
    title: "Respect for Staff",
    desc: "Risk works best when it feels like blame. We build cultures where reporting a near-miss is rewarded, not punished.",
  },
  {
    icon: <Eye className="w-6 h-6 text-[#FF6F4B]" />,
    title: "Candour",
    desc: "We say what we see. Comfortable reports do not prevent harm; honest ones do.",
  },
  {
    icon: <Lock className="w-6 h-6 text-[#FF6F4B]" />,
    title: "Confidentiality",
    desc: "We handle sensitive clinical, financial and personal data. It stays yours — protected to NDPA standards, always.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-[#FF6F4B]" />,
    title: "Practicality",
    desc: "A control that cannot be run on a busy Tuesday is not a control. We design for the real world.",
  },
  {
    icon: <Scales className="w-6 h-6 text-[#FF6F4B]" />,
    title: "Stewardship",
    desc: "Health resources in Nigeria are precious. Waste and leakage are risks to patients too.",
  },
];

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function AboutPage() {
  const reduceMotion = useReducedMotion();

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
              backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          {/* Gradient Overlay: 100% #0D4655 on left, fading to transparent on right */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0D4655] via-[#0D4655]/95 via-50% to-[#0D4655]/20 sm:to-transparent" />

          <motion.div
            className="relative z-20 mx-auto w-full max-w-[1440px] px-6 lg:px-12 flex flex-col gap-6"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE_EXPO }}
          >
            <Badge variant="dark">
              WHO WE ARE
            </Badge>

            <h1 className="font-serif text-[36px] sm:text-[52px] lg:text-[64px] font-medium leading-[1.1] tracking-[-0.02em] text-white max-w-[840px] text-balance">
              A risk partner built for Nigerian healthcare.
            </h1>

            <p className="text-base sm:text-lg text-[#E2F0F3]/90 max-w-[760px] leading-relaxed text-balance">
              Sentinel Healthcare Consulting Limited provides healthcare organisations with practical, data-driven solutions that improve patient safety, clinical governance and organisational performance.
            </p>
          </motion.div>
        </section>

        {/* Section: Who We Are & Corporate Facts */}
        <section className="w-full py-28 lg:py-36 bg-[#FFFFFF]">
          <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12 flex flex-col gap-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Corporate Information */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#0D4655]">
                  Grounding clinical safety in local reality
                </h2>

                <p className="text-base text-[#4A6570] leading-relaxed">
                  We support hospitals, healthcare providers, government agencies and development partners to establish robust risk management systems that reduce preventable harm, strengthen regulatory compliance and improve the quality of care.
                </p>

                {/* Company Facts Grid Table */}
                <div className="mt-2 rounded-[6px] bg-tint-1 p-6">
                  <h3 className="font-serif text-lg font-medium text-[#0D4655] mb-4">
                    Corporate Registration Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                    {companyFacts.map((fact, idx) => (
                      <div key={idx} className="flex flex-col border-b border-[#DCEAEE] pb-2">
                        <span className="font-semibold text-[#1D6B7D]">{fact.label}</span>
                        <span className="text-[#0D4655] font-medium">{fact.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: "Our Name is Our Method" Callout */}
              <div className="lg:col-span-5">
                <div className="rounded-[6px] bg-[#0D4655] p-8 lg:p-10 text-white flex flex-col gap-6">
                  <div className="flex items-center gap-2 text-[#FF6F4B] font-semibold text-xs uppercase tracking-wider">
                    <Sparkle className="w-4 h-4" />
                    <span>Our Name is Our Method</span>
                  </div>

                  <blockquote className="font-serif text-xl sm:text-2xl font-medium leading-snug text-white italic">
                    &ldquo;A sentinel keeps watch so that everyone else can get on with the work. That is the role we play.&rdquo;
                  </blockquote>

                  <p className="text-xs text-[#E2F0F3]/80 leading-relaxed">
                    We stand watch over clinical workflows, regulatory shifts, and system vulnerabilities so clinical teams can focus on healing patients safely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Our Mission */}
        <section className="w-full py-28 lg:py-36 bg-tint-1">
          <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12 flex flex-col gap-12">
            {/* Header & Clause 3(A) Verification */}
            <div className="flex flex-col gap-4 max-w-[1180px]">
              <Badge>
                OUR MISSION
              </Badge>

              <blockquote className="font-serif text-xl sm:text-2xl lg:text-[28px] font-medium text-[#0D4655] leading-snug italic">
                &ldquo;To make quality healthcare safer and more resilient across Nigeria by helping health institutions anticipate, understand and manage risk — turning everyday data into decisions that protect patients, people and the organisations that serve them.&rdquo;
              </blockquote>

              <p className="text-xs sm:text-sm font-medium text-[#1D6B7D] pl-6 text-balance">
                Taken from Clause 3(A) of our Memorandum of Association — the objects Sentinel Healthcare Consulting Limited was legally registered to pursue. Our stated mission and legal purpose say the same thing.
              </p>
            </div>

            {/* "What That Means in Practice" 3 Verbs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="min-h-[280px] rounded-[6px] bg-[#FFFFFF] p-8 flex flex-col justify-between gap-8">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1D6B7D]">
                    Practice 01
                  </span>
                  <span className="font-serif text-3xl font-medium text-[#0D4655]">Anticipate</span>
                </div>
                <p className="text-sm text-[#4A6570] leading-relaxed">
                  We look for the harm that has not happened yet — in near-misses, workarounds and the things staff already worry about on shift.
                </p>
              </div>

              <div className="min-h-[280px] rounded-[6px] bg-[#FFFFFF] p-8 flex flex-col justify-between gap-8">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1D6B7D]">
                    Practice 02
                  </span>
                  <span className="font-serif text-3xl font-medium text-[#0D4655]">Understand</span>
                </div>
                <p className="text-sm text-[#4A6570] leading-relaxed">
                  We turn incidents, complaints and audit findings into clear patterns a board can read and a ward can act on.
                </p>
              </div>

              <div className="min-h-[280px] rounded-[6px] bg-[#FFFFFF] p-8 flex flex-col justify-between gap-8">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1D6B7D]">
                    Practice 03
                  </span>
                  <span className="font-serif text-3xl font-medium text-[#0D4655]">Manage</span>
                </div>
                <p className="text-sm text-[#4A6570] leading-relaxed">
                  Every control we design is judged on one thing: whether a busy clinical team can actually run it on a Tuesday afternoon.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Our Vision & 4 Markers */}
        <section className="w-full py-28 lg:py-36 bg-[#FFFFFF]">
          <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12 flex flex-col gap-12">
            <div className="flex flex-col gap-4 max-w-[800px]">
              <Badge>
                OUR VISION
              </Badge>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0D4655] leading-tight">
                A Nigerian health sector where every institution knows its risks, owns them, and acts before harm occurs.
              </h2>

              <p className="text-base text-[#4A6570] leading-relaxed">
                Where &ldquo;we did not see it coming&rdquo; is a rare sentence across all healthcare facilities in Nigeria.
              </p>
            </div>

            {/* 4 Markers Grid with Highlighted Marker 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {visionMarkers.map((marker) => (
                <div
                  key={marker.num}
                  className={`rounded-[6px] p-6 flex flex-col justify-between gap-4 transition-colors ${
                    marker.highlight
                      ? "bg-[#0D4655] text-white"
                      : "bg-tint-1 text-[#0D4655]"
                  }`}
                >
                  <span
                    className={`font-serif text-2xl font-bold ${
                      marker.highlight ? "text-[#FF6F4B]" : "text-[#1D6B7D]"
                    }`}
                  >
                    {marker.num}
                  </span>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-lg font-medium leading-snug">
                      {marker.title}
                    </h3>
                    <p
                      className={`text-xs leading-relaxed ${
                        marker.highlight ? "text-[#E2F0F3]/90" : "text-[#4A6570]"
                      }`}
                    >
                      {marker.desc}
                    </p>
                  </div>

                  {marker.highlight && (
                    <span className="rounded-[6px] bg-[#FF6F4B] text-white px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase w-fit mt-2">
                      Core Trust Signal
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Callout — "Our promise to every client" */}
            <div className="rounded-[6px] bg-[#E2F0F3] p-8 sm:p-10 flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1D6B7D]">
                OUR PROMISE TO EVERY CLIENT
              </span>
              <p className="font-serif text-xl sm:text-2xl font-medium text-[#0D4655] leading-relaxed">
                &ldquo;We will not sell you work you do not need. And we will not leave until your team can carry the system forward on their own. We will tell you the truth about what we find, even when it is uncomfortable.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Section: Our Values Grid */}
        <section className="w-full py-28 lg:py-36 bg-[#0D4655] text-white">
          <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12 flex flex-col gap-12">
            <div className="flex flex-col gap-4 max-w-[760px]">
              <Badge variant="dark">
                OUR VALUES
              </Badge>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white">
                What we will not compromise on.
              </h2>

              <p className="text-sm sm:text-base text-[#E2F0F3]/90 leading-relaxed italic">
                Values are only real when they cost something. Each of these has, at some point, meant saying a thing a client did not want to hear.
              </p>
            </div>

            {/* 6-Value Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="rounded-[6px] bg-[#09333E] p-6 flex flex-col gap-4 transition-colors hover:bg-[#072B35]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[6px] bg-[#1D6B7D]/30">
                    {val.icon}
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-xl font-medium text-white">{val.title}</h3>
                    <p className="text-sm text-[#E2F0F3]/80 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA Button */}
            <div className="pt-4 flex justify-center">
              <Button href="/contact" variant="white">
                <span>Engage Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
