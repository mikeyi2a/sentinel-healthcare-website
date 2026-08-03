import Navbar from "@/components/navbar";
import HeroVideo from "@/components/hero-video";
import ServicesFeatures from "@/components/services-features";
import WhoWeServe from "@/components/who-we-serve";
import WhySentinel from "@/components/why-sentinel";
import HowWeWork from "@/components/how-we-work";


export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar overlay />
      <main className="flex-1">
        <HeroVideo />
        <ServicesFeatures />
        <WhoWeServe />
        <WhySentinel />
        <HowWeWork />
      </main>
    </div>
  );
}
