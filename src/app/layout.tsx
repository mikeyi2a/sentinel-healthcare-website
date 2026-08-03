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
  title: "Sentinel Healthcare Consulting | Safer care, by design.",
  description:
    "Lagos-based healthcare risk-management consultancy helping hospitals, HMOs, and government partners manage clinical risk, patient safety, and regulatory compliance.",
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

