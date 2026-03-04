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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      <AnnouncementTicker />
      <AboutSection />
      <ResultsSection />
      <TeachersSection />
      <GallerySection />
      <EventsSection />
      <AdmissionsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
