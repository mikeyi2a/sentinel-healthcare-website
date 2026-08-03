import React from "react";
import Badge from "@/components/ui/badge";

export interface AudienceItem {
  id: string;
  title: string;
  description: string;
}

export interface WhoWeServeProps {
  eyebrow?: string;
  heading?: string;
  subtext?: string;
  audiences?: AudienceItem[];
  className?: string;
}

const defaultAudiences: AudienceItem[] = [
  {
    id: "hospitals",
    title: "Hospitals & Clinics",
    description:
      "We partner with private and public hospital leadership to embed clinical governance frameworks, reduce patient safety incidents, streamline accreditation audits, and train healthcare workers on risk protocols.",
  },
  {
    id: "hmos",
    title: "HMOs & Health Insurers",
    description:
      "We assist healthcare insurers and HMOs in evaluating provider risk profiles, auditing clinical quality, controlling claim inflation driven by medical errors, and enforcing standardized quality assurance.",
  },
  {
    id: "government",
    title: "Government & Development Partners",
    description:
      "We advise health ministries, state agencies, and international development organizations on policy diagnostics, public health safety frameworks, and systemic capacity-building programs across Nigeria.",
  },
];

export const WhoWeServe: React.FC<WhoWeServeProps> = ({
  eyebrow = "WHO WE SERVE",
  heading = "Tailored clinical risk solutions for key healthcare stakeholders",
  subtext = "Addressing unique compliance, patient safety, and operational challenges across the entire health ecosystem.",
  audiences = defaultAudiences,
  className = "",
}) => {
  return (
    <section
      id="who-we-serve"
      className={`w-full bg-[#FFFFFF] py-12 md:py-16 lg:py-24 font-sans ${className}`}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12 flex flex-col gap-10">
        {/* Section Header Stack matching reference layout */}
        <div className="flex flex-col gap-4 max-w-[780px]">
          <div className="inline-flex">
            <Badge>
              {eyebrow}
            </Badge>
          </div>

          <h2 className="font-serif text-[28px] sm:text-[40px] lg:text-[48px] font-medium text-[#0D4655] leading-[1.15] tracking-[-0.02em] text-balance">
            {heading}
          </h2>

          <p className="text-[15px] sm:text-[17px] text-[#4A6570] leading-relaxed text-balance">
            {subtext}
          </p>
        </div>

        {/* Vertical Stack of Horizontal Cards matching reference layout */}
        <div className="flex flex-col gap-4 w-full">
          {audiences.map((audience) => (
            <div
              key={audience.id}
              className="w-full rounded-[6px] bg-tint-1 p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors hover:bg-[#E2F0F3]/50"
            >
              {/* Left Title Column */}
              <div className="md:w-1/3 flex-shrink-0">
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#0D4655] tracking-[-0.01em] text-balance">
                  {audience.title}
                </h3>
              </div>

              {/* Right Description Column */}
              <div className="md:w-2/3">
                <p className="text-sm sm:text-base text-[#4A6570] leading-relaxed text-balance">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
