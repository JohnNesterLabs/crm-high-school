import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import AnnouncementTicker from "@/components/AnnouncementTicker";
import AboutSection from "@/components/AboutSection";
import ResultsSection from "@/components/ResultsSection";
import TeachersSection from "@/components/TeachersSection";
import GallerySection from "@/components/GallerySection";
import EventsSection from "@/components/EventsSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const SCROLL_HIDE = 100;
const SCROLL_SHOW = 50;

const Index = () => {
  const [marqueeHidden, setMarqueeHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setMarqueeHidden((prev) => (y > SCROLL_HIDE ? true : y < SCROLL_SHOW ? false : prev));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Single fixed header: marquee + navbar stay in sync */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <AnnouncementTicker visible={!marqueeHidden} />
        <Navbar scrolled={marqueeHidden} />
      </header>
      {/* Content padding animates in sync with header height */}
      <div
        className={`transition-[padding] duration-300 ease-in-out ${
          marqueeHidden ? "pt-16 md:pt-20" : "pt-[6.5rem] md:pt-[7.5rem]"
        }`}
      >
        <HeroCarousel />
        <AboutSection />
        <ResultsSection />
        <TeachersSection />
        <GallerySection />
        <EventsSection />
        <AdmissionsSection />
        <ContactSection />
        <Footer />
      </div>
      <BackToTop />
    </div>
  );
};

export default Index;
