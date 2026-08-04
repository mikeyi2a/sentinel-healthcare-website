"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";

import Button from "@/components/ui/button";
import { Envelope, Phone, MapPin, ShieldCheck, CheckCircle, PaperPlaneTilt, Clock } from "@phosphor-icons/react";
import Badge from "@/components/ui/badge";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    institution: "",
    email: "",
    phone: "",
    service: "Rapid Risk Diagnostic",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="w-full bg-[#0D4655] py-28 lg:py-36 text-white">
          <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12 flex flex-col gap-6">
            <Badge variant="dark">
              FREE 45-MINUTE CONSULTATION
            </Badge>

            <h1 className="font-serif text-[36px] sm:text-[52px] lg:text-[64px] font-medium leading-[1.1] tracking-[-0.02em] text-white max-w-[800px] text-balance">
              Start with a conversation, not a contract.
            </h1>

            <p className="text-base sm:text-lg text-[#E2F0F3]/90 max-w-[720px] leading-relaxed text-balance">
              Tell us what is keeping you up at night. We will spend 45 minutes with you at no cost and tell you honestly whether you need us — and if so, where to start.
            </p>
          </div>
        </section>

        {/* Section: Contact Grid & Form */}
        <section id="contact-form" className="w-full py-28 lg:py-36 bg-tint-1">
          <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12 flex flex-col gap-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Contact Details & Guarantee */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <h2 className="font-serif text-3xl font-medium text-[#0D4655]">
                    Direct Office Contact
                  </h2>
                  <p className="text-sm text-[#4A6570] leading-relaxed">
                    Reach out directly to our leadership team. We respond to all inquiry calls and written requests within 24 business hours.
                  </p>
                </div>

                {/* Info Cards */}
                <div className="flex flex-col gap-4">
                  <div className="rounded-[6px] bg-white p-5 flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-[#E2F0F3] text-[#0D4655]">
                      <Envelope className="w-5 h-5 text-[#FF6F4B]" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase text-[#1D6B7D]">Email Address</span>
                      <p className="text-sm font-medium text-[#0D4655]">hello@sentinelhc.com</p>
                    </div>
                  </div>

                  <div className="rounded-[6px] bg-white p-5 flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-[#E2F0F3] text-[#0D4655]">
                      <Phone className="w-5 h-5 text-[#FF6F4B]" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase text-[#1D6B7D]">Phone & WhatsApp</span>
                      <p className="text-sm font-medium text-[#0D4655]">+234 905 278 0290</p>
                    </div>
                  </div>

                  <div className="rounded-[6px] bg-white p-5 flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-[#E2F0F3] text-[#0D4655]">
                      <MapPin className="w-5 h-5 text-[#FF6F4B]" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase text-[#1D6B7D]">Head Office Location</span>
                      <p className="text-sm font-medium text-[#0D4655]">Lekki, Lagos State, Nigeria</p>
                    </div>
                  </div>
                </div>

                {/* Governance Footer Note */}
                <div className="rounded-[6px] bg-[#0D4655] p-6 text-white flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#E2F0F3]">
                    Corporate Registration
                  </span>
                  <p className="text-xs text-[#E2F0F3]/80 leading-relaxed">
                    Sentinel Healthcare Consulting Limited · RC 9683677 · Incorporated under CAMA 2020
                  </p>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Request Form */}
              <div className="lg:col-span-7">
                <div className="rounded-[6px] bg-white p-8 sm:p-10">
                  {formSubmitted ? (
                    <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E2F0F3] text-[#1D6B7D]">
                        <CheckCircle className="w-10 h-10 text-[#FF6F4B]" />
                      </div>
                      <h3 className="font-serif text-2xl font-medium text-[#0D4655]">
                        Consultation Request Received
                      </h3>
                      <p className="text-sm text-[#4A6570] max-w-[440px]">
                        Thank you for reaching out. A senior adviser will contact you at <strong>{formData.email}</strong> within 24 hours to schedule your 45-minute consultation.
                      </p>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="mt-4 rounded-[6px] bg-[#0D4655] px-6 py-2.5 text-xs font-semibold text-white uppercase tracking-wider hover:bg-[#1D6B7D] transition-colors"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                      <div className="flex flex-col gap-1">
                        <h3 className="font-serif text-2xl font-medium text-[#0D4655]">
                          Book Your 45-Minute Consultation
                        </h3>
                        <p className="text-xs text-[#4A6570]">
                          Zero commitment required. We will discuss your current risk posture and advise on practical next steps.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold uppercase tracking-wider text-[#0D4655]">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Dr. / Mr. / Mrs. Full Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="rounded-[6px] bg-[#E2F0F3] px-4 py-2.5 text-sm text-[#0D4655] outline-none focus-visible:ring-2 focus-visible:ring-[#1D6B7D]"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold uppercase tracking-wider text-[#0D4655]">
                            Institution / Organization *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Hospital, HMO, or Agency Name"
                            value={formData.institution}
                            onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                            className="rounded-[6px] bg-[#E2F0F3] px-4 py-2.5 text-sm text-[#0D4655] outline-none focus-visible:ring-2 focus-visible:ring-[#1D6B7D]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold uppercase tracking-wider text-[#0D4655]">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="name@institution.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="rounded-[6px] bg-[#E2F0F3] px-4 py-2.5 text-sm text-[#0D4655] outline-none focus-visible:ring-2 focus-visible:ring-[#1D6B7D]"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold uppercase tracking-wider text-[#0D4655]">
                            Phone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+234..."
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="rounded-[6px] bg-[#E2F0F3] px-4 py-2.5 text-sm text-[#0D4655] outline-none focus-visible:ring-2 focus-visible:ring-[#1D6B7D]"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#0D4655]">
                          Primary Area of Interest
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="rounded-[6px] bg-[#E2F0F3] px-4 py-2.5 text-sm text-[#0D4655] outline-none focus-visible:ring-2 focus-visible:ring-[#1D6B7D]"
                        >
                          <option value="Rapid Risk Diagnostic">Rapid Risk Diagnostic (2 Weeks)</option>
                          <option value="Clinical Risk Management">Clinical Risk Management</option>
                          <option value="Patient Safety Intelligence">Patient Safety Intelligence</option>
                          <option value="Governance & Accreditation">Clinical Governance & Accreditation</option>
                          <option value="Training & Capacity Building">Training & Capacity Building</option>
                          <option value="Digital Safety Solutions">Digital Safety Solutions</option>
                          <option value="Retained Risk Partner">Retained Risk Partner</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#0D4655]">
                          Tell Us About Your Facility / Challenge *
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="What is keeping you up at night regarding risk, compliance, or patient safety?"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="rounded-[6px] bg-[#E2F0F3] px-4 py-2.5 text-sm text-[#0D4655] outline-none focus-visible:ring-2 focus-visible:ring-[#1D6B7D]"
                        />
                      </div>

                      <Button type="submit" variant="primary" className="w-full justify-center">
                        <span>Submit Consultation Request</span>
                        <PaperPlaneTilt className="w-4 h-4" />
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
