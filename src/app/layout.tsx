import type { Metadata } from "next";
import { Inter, Ovo } from "next/font/google";
import { AgentationProvider } from "@/components/AgentationProvider";
import CtaBand from "@/components/cta-band";
import Footer from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ovo = Ovo({
  weight: "400",
  variable: "--font-ovo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sentinelhcl.com"),
  title: {
    default: "Sentinel Healthcare Consulting | Safer care, by design.",
    template: "%s | Sentinel Healthcare Consulting",
  },
  description:
    "Lagos-based clinical risk management, clinical governance, and patient safety consultancy helping hospitals, HMOs, and healthcare boards anticipate harm and achieve accreditation.",
  keywords: [
    "Healthcare Risk Management Nigeria",
    "Clinical Governance Lagos",
    "Patient Safety Intelligence",
    "Hospital Risk Audit Nigeria",
    "SafeCare Accreditation Nigeria",
    "JCI Readiness Lagos",
    "HMO Clinical Risk Management",
    "Healthcare Consulting Lagos",
    "Dr Bibian Ofoegbu",
    "Sentinel Healthcare Consulting",
  ],
  authors: [{ name: "Sentinel Healthcare Consulting Limited" }],
  creator: "Sentinel Healthcare Consulting Limited",
  publisher: "Sentinel Healthcare Consulting Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  openGraph: {
    title: "Sentinel Healthcare Consulting | Safer care, by design.",
    description:
      "Clinical risk management, governance, and patient safety solutions for hospitals, insurers, and healthcare boards across Nigeria.",
    url: "https://sentinelhcl.com",
    siteName: "Sentinel Healthcare Consulting",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentinel Healthcare Consulting | Safer care, by design.",
    description:
      "Clinical risk management, governance, and patient safety solutions in Lagos, Nigeria.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: "#0D4655",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ovo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-[#4A6570]">
        <AgentationProvider>
          {children}
          <CtaBand />
          <Footer />
        </AgentationProvider>
      </body>
    </html>
  );
}

