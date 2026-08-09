"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Button from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import Badge from "@/components/ui/badge";

export default function ServicesPage() {
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
              backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          {/* Gradient Overlay: 100% #0D4655 on left, fading to transparent on right */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0D4655] via-[#0D4655]/95 via-50% to-[#0D4655]/20 sm:to-transparent" />

          <div className="relative z-20 mx-auto w-full max-w-[1440px] px-6 lg:px-12 flex flex-col gap-6">
            <Badge variant="dark">
              OUR ADVISORY & SOLUTIONS
            </Badge>

            <h1 className="font-serif text-[36px] sm:text-[52px] lg:text-[64px] font-medium leading-[1.1] tracking-[-0.02em] text-white max-w-[840px] text-balance">
              Clinical risk management & patient safety solutions
            </h1>

            <p className="text-base sm:text-lg text-[#E2F0F3]/90 max-w-[760px] leading-relaxed text-balance">
              We help healthcare providers, health insurers, and public agencies across Nigeria anticipate harm, govern with real data, and embed sustainable safety systems.
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SERVICE 01: CLINICAL RISK MANAGEMENT */}
        {/* ---------------------------------------------------- */}
        <section
          id="clinical-risk-management"
          className="w-full py-28 lg:py-36 bg-[#FFFFFF]"
        >
          <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12 flex flex-col gap-10">
            {/* Top Label & Headline matching exact reference layout */}
            <div className="flex flex-col gap-4">
              <div className="inline-flex">
                <Badge>
                  SERVICE 01
                </Badge>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0D4655] leading-tight max-w-[750px] text-balance">
                Clinical Risk Management
              </h2>

              <p className="text-base sm:text-lg text-[#1D6B7D] italic max-w-[800px] leading-relaxed text-balance">
                &ldquo;The most valuable safety data in your hospital already exists — in incident forms, complaint letters and the things staff say to each other in the corridor. We help you capture it, act on it, and prove the loop was closed.&rdquo;
              </p>
            </div>

            {/* 2-Column Split Layout from Reference Image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Feature List with Checkmarks & Dividers */}
              <div className="lg:col-span-12 flex flex-col justify-between h-full">
                <div className="flex flex-col border-t border-[#DCEAEE]">
                  {/* Feature 1 */}
                  <div className="py-5 border-b border-[#DCEAEE] flex items-start gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E2F0F3] text-[#0D4655] flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-[#0D4655]">
                        Incident & near-miss reporting
                      </h3>
                      <p className="text-sm text-[#4A6570] leading-relaxed">
                        Paper and digital channels, including anonymous routes, with structured feedback to reporters.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="py-5 border-b border-[#DCEAEE] flex items-start gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E2F0F3] text-[#0D4655] flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-[#0D4655]">
                        Risk assessment & risk registers
                      </h3>
                      <p className="text-sm text-[#4A6570] leading-relaxed">
                        Structured scoring, named owners, review dates and board-level escalation thresholds.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="py-5 border-b border-[#DCEAEE] flex items-start gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E2F0F3] text-[#0D4655] flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-[#0D4655]">
                        Root cause analysis (RCA)
                      </h3>
                      <p className="text-sm text-[#4A6570] leading-relaxed">
                        Trained investigation teams using systems thinking, not blame.
                      </p>
                    </div>
                  </div>

                  {/* Feature 4 */}
                  <div className="py-5 border-b border-[#DCEAEE] flex items-start gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E2F0F3] text-[#0D4655] flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-[#0D4655]">
                        Corrective & preventive action (CAPA)
                      </h3>
                      <p className="text-sm text-[#4A6570] leading-relaxed">
                        CAPA programmes with tracked completion and effectiveness checks.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Primary Button matching reference bottom left position */}
                <div className="pt-8 w-fit">
                  <Button href="/contact" variant="primary">
                    <span>Request Advisory</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SERVICE 02: PATIENT SAFETY INTELLIGENCE */}
        {/* ---------------------------------------------------- */}
        <section
          id="patient-safety-intelligence"
          className="w-full py-28 lg:py-36 bg-tint-1"
        >
          <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12 flex flex-col gap-10">
            {/* Top Label & Headline */}
            <div className="flex flex-col gap-4">
              <div className="inline-flex">
                <Badge>
                  SERVICE 02
                </Badge>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0D4655] leading-tight max-w-[750px] text-balance">
                Patient Safety Intelligence
              </h2>

              <p className="text-base sm:text-lg text-[#1D6B7D] italic max-w-[800px] leading-relaxed text-balance">
                &ldquo;Most boards see safety data once a year, in a format nobody can act on. We build the reporting layer that turns raw incidents into a picture leaders can govern from.&rdquo;
              </p>
            </div>

            {/* 2-Column Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Feature List */}
              <div className="lg:col-span-12 flex flex-col justify-between h-full">
                <div className="flex flex-col border-t border-[#DCEAEE]">
                  <div className="py-5 border-b border-[#DCEAEE] flex items-start gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E2F0F3] text-[#0D4655] flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-[#0D4655]">
                        Safety dashboards & executive reporting
                      </h3>
                      <p className="text-sm text-[#4A6570] leading-relaxed">
                        Clear visual tracking of safety indicators for board oversight.
                      </p>
                    </div>
                  </div>

                  <div className="py-5 border-b border-[#DCEAEE] flex items-start gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E2F0F3] text-[#0D4655] flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-[#0D4655]">
                        Trend analysis & predictive risk monitoring
                      </h3>
                      <p className="text-sm text-[#4A6570] leading-relaxed">
                        Spotting emerging clinical risks before harm occurs.
                      </p>
                    </div>
                  </div>

                  <div className="py-5 border-b border-[#DCEAEE] flex items-start gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E2F0F3] text-[#0D4655] flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-[#0D4655]">
                        Mortality & morbidity review
                      </h3>
                      <p className="text-sm text-[#4A6570] leading-relaxed">
                        Structured, non-punitive M&M audit frameworks.
                      </p>
                    </div>
                  </div>

                  <div className="py-5 border-b border-[#DCEAEE] flex items-start gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E2F0F3] text-[#0D4655] flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-[#0D4655]">
                        Clinical quality indicators & benchmarking
                      </h3>
                      <p className="text-sm text-[#4A6570] leading-relaxed">
                        Measuring facility performance against peers and international benchmarks.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 w-fit">
                  <Button href="/contact" variant="primary">
                    <span>Request Intelligence Pack</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SERVICE 03: CLINICAL GOVERNANCE & ACCREDITATION */}
        {/* ---------------------------------------------------- */}
        <section
          id="clinical-governance-accreditation"
          className="w-full py-28 lg:py-36 bg-[#FFFFFF]"
        >
          <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div className="inline-flex">
                <Badge>
                  SERVICE 03
                </Badge>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0D4655] leading-tight max-w-[750px] text-balance">
                Clinical Governance & Accreditation
              </h2>

              <p className="text-base sm:text-lg text-[#1D6B7D] italic max-w-[800px] leading-relaxed text-balance">
                &ldquo;We take facilities from &lsquo;we think we comply&rsquo; to a documented, evidenced position that survives a survey.&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-12 flex flex-col justify-between h-full">
                <div className="flex flex-col border-t border-[#DCEAEE]">
                  <div className="py-5 border-b border-[#DCEAEE] flex items-start gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E2F0F3] text-[#0D4655] flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-[#0D4655]">
                        1. Baseline assessment
                      </h3>
                      <p className="text-sm text-[#4A6570] leading-relaxed">
                        Measure the facility against the target standard with evidence for every gap.
                      </p>
                    </div>
                  </div>

                  <div className="py-5 border-b border-[#DCEAEE] flex items-start gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E2F0F3] text-[#0D4655] flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-[#0D4655]">
                        2. Gap closure plan
                      </h3>
                      <p className="text-sm text-[#4A6570] leading-relaxed">
                        Prioritised, costed and sequenced around your staffing and budget reality.
                      </p>
                    </div>
                  </div>

                  <div className="py-5 border-b border-[#DCEAEE] flex items-start gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E2F0F3] text-[#0D4655] flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-[#0D4655]">
                        3. Policy & documentation
                      </h3>
                      <p className="text-sm text-[#4A6570] leading-relaxed">
                        Governance frameworks, policies and procedures written for your facility, not generic.
                      </p>
                    </div>
                  </div>

                  <div className="py-5 border-b border-[#DCEAEE] flex items-start gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E2F0F3] text-[#0D4655] flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-[#0D4655]">
                        4. Internal audit & readiness
                      </h3>
                      <p className="text-sm text-[#4A6570] leading-relaxed">
                        Compliance reviews and mock surveys until the evidence file stands on its own.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 w-fit">
                  <Button href="/contact" variant="primary">
                    <span>Start Baseline Survey</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SERVICE 04: TRAINING & CAPACITY BUILDING */}
        {/* ---------------------------------------------------- */}
        <section
          id="training-capacity-building"
          className="w-full py-28 lg:py-36 bg-tint-1"
        >
          <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div className="inline-flex">
                <Badge>
                  SERVICE 04
                </Badge>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0D4655] leading-tight max-w-[750px] text-balance">
                Training & Capacity Building
              </h2>

              <p className="text-base sm:text-lg text-[#1D6B7D] italic max-w-[800px] leading-relaxed text-balance">
                &ldquo;A risk framework nobody understands is just a document. The strongest predictor of whether a safety system survives is whether the people using it believe in it.&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-12 flex flex-col justify-between h-full">
                <div className="flex flex-col border-t border-[#DCEAEE]">
                  <div className="py-5 border-b border-[#DCEAEE] flex items-start gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E2F0F3] text-[#0D4655] flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-[#0D4655]">
                        Patient safety & quality improvement
                      </h3>
                      <p className="text-sm text-[#4A6570] leading-relaxed">
                        Practical QI methods (PDSA cycles, run charts) applied to your own facility priorities.
                      </p>
                    </div>
                  </div>

                  <div className="py-5 border-b border-[#DCEAEE] flex items-start gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E2F0F3] text-[#0D4655] flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-[#0D4655]">
                        Clinical governance leadership
                      </h3>
                      <p className="text-sm text-[#4A6570] leading-relaxed">
                        Tailored for medical directors, matrons and board members carrying oversight duties.
                      </p>
                    </div>
                  </div>

                  <div className="py-5 border-b border-[#DCEAEE] flex items-start gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E2F0F3] text-[#0D4655] flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-[#0D4655]">
                        Human factors & safety culture
                      </h3>
                      <p className="text-sm text-[#4A6570] leading-relaxed">
                        Why competent people make errors, and how to design work so they make fewer.
                      </p>
                    </div>
                  </div>

                  <div className="py-5 border-b border-[#DCEAEE] flex items-start gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E2F0F3] text-[#0D4655] flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-[#0D4655]">
                        RCA & incident investigation
                      </h3>
                      <p className="text-sm text-[#4A6570] leading-relaxed">
                        Hands-on training using anonymised cases from your own facility.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 w-fit">
                  <Button href="/contact" variant="primary">
                    <span>Schedule Staff Training</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SERVICE 05: DIGITAL SAFETY SOLUTIONS */}
        {/* ---------------------------------------------------- */}
        <section
          id="digital-safety-solutions"
          className="w-full py-28 lg:py-36 bg-[#FFFFFF]"
        >
          <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div className="inline-flex">
                <Badge>
                  SERVICE 05
                </Badge>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0D4655] leading-tight max-w-[750px] text-balance">
                Digital Safety Solutions
              </h2>

              <p className="text-base sm:text-lg text-[#1D6B7D] italic max-w-[800px] leading-relaxed text-balance">
                &ldquo;Good risk management does not require expensive software. It requires the right data reaching the right person on time — and we build that with tools you can afford to keep.&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-12 flex flex-col justify-between h-full">
                <div className="flex flex-col border-t border-[#DCEAEE]">
                  <div className="py-5 border-b border-[#DCEAEE] flex items-start gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E2F0F3] text-[#0D4655] flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-[#0D4655]">
                        Affordable incident reporting platforms
                      </h3>
                      <p className="text-sm text-[#4A6570] leading-relaxed">
                        Digital reporting that works on the phones your staff already carry, with routing, escalation and audit trail built in — sized for a single facility or a whole group.
                      </p>
                    </div>
                  </div>

                  <div className="py-5 border-b border-[#DCEAEE] flex items-start gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E2F0F3] text-[#0D4655] flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-[#0D4655]">
                        Executive dashboards using BI tools
                      </h3>
                      <p className="text-sm text-[#4A6570] leading-relaxed">
                        Live safety and quality dashboards built on business intelligence tools you already licence, so there is no new subscription to defend at budget time.
                      </p>
                    </div>
                  </div>

                  <div className="py-5 border-b border-[#DCEAEE] flex items-start gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E2F0F3] text-[#0D4655] flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-[#0D4655]">
                        Quality reporting & data analytics
                      </h3>
                      <p className="text-sm text-[#4A6570] leading-relaxed">
                        Regular performance packs, benchmarking and analysis that support real decisions — including the reports your regulator and funders ask for.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 w-fit">
                  <Button href="/contact" variant="primary">
                    <span>Deploy Digital Tooling</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
