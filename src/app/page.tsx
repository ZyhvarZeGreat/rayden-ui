import Header from "@/components/layout/Header";
import HeroSection from "@/components/homepage/HeroSection";
import AboutSection from "@/components/homepage/AboutSection";
import StatsSection from "@/components/homepage/StatsSection";
import SplitSection from "@/components/homepage/SplitSection";
import FaqSection from "@/components/homepage/FaqSection";
import CtaSection from "@/components/homepage/CtaSection";
import Footer from "@/components/homepage/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <SplitSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
