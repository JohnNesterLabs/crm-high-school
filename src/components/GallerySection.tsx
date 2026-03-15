import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";
import VideoModal from "@/components/VideoModal";
import { TEACHERS_DAY_VIDEO_URL, SPORTS_DAY_VIDEO_URL, INDEPENDENCE_DAY_POST_URL } from "@/lib/constants";

import heroSchool from "@/assets/hero-school.jpg";
import heroImage1 from "@/assets/hero-image1.jpg";
import heroImage2 from "@/assets/hero-image2.jpg";
import heroImage3 from "@/assets/hero-image3.jpg";

import chulkanaDam from "@/assets/chulkanadam.jpg";
import crmDance from "@/assets/crm-dance.jpg";
import cultureEvent from "@/assets/culture event.jpg";
import dance from "@/assets/dance.jpg";
import dance1 from "@/assets/dance1.jpg";
import dance2 from "@/assets/dance2.jpg";
import dance7 from "@/assets/dance7.jpg";
import events from "@/assets/events.jpg";
import holi from "@/assets/holi.jpg";
import holi5 from "@/assets/holi5.jpg";
import newspaper from "@/assets/newspaper.jpg";
import newspaper1 from "@/assets/newspaper1.jpg";
import newspaper4 from "@/assets/newspaper4.jpg";
import newspaper5 from "@/assets/newspaper5.jpg";
import newpaper from "@/assets/newpaper.jpg";
import principal1 from "@/assets/principal1.jpg";
import sports1 from "@/assets/sports1.jpg";
import sports2 from "@/assets/sports2.jpg";
import sports3 from "@/assets/sports3.jpg";
import sports6 from "@/assets/sports6.jpg";
import sports7 from "@/assets/sports7.jpg";
import toper1 from "@/assets/toper1.jpg";
import topper from "@/assets/topper.jpg";
import tree from "@/assets/tree.jpg";

type GalleryImage = { type: "image"; src: string; label: string; category: string };
type GalleryVideo = { type: "video"; src: string; label: string; category: string; videoUrl: string };
type GalleryItem = GalleryImage | GalleryVideo;

/** Images from public/pratapgarh-farms – shown in Trips tab */
const PRATAPGARH_FARMS_IMAGES = [
  "599950967_1351349633703036_3562405166263323873_n.jpg",
  "600060141_1351349507036382_4202224432977843835_n.jpg",
  "600200865_1351349683703031_808642536197396901_n.jpg",
  "600218162_1351349563703043_1555991633133989798_n.jpg",
  "600219291_1351349723703027_8971325457463047308_n.jpg",
  "600235903_1351349620369704_4578484529803510045_n.jpg",
  "600285143_1351349557036377_3730686630460817465_n.jpg",
  "600302274_1351349517036381_6174114233264534583_n.jpg",
  "600322929_1351349673703032_2985449104393384695_n.jpg",
].map((file, index) => ({
  type: "image" as const,
  src: `/pratapgarh-farms/${file}`,
  label: `Pratapgarh Farms Trip ${index + 1}`,
  category: "Trips",
}));

/** Images from public/science-fair – shown in Science Fair tab */
const SCIENCE_FAIR_IMAGES = [
  "487226035_1124576766380325_2406162380215034159_n.jpg",
  "487229323_1124577213046947_5643163650061982364_n.jpg",
  "487315723_1124578503046818_3011910898737583511_n.jpg",
  "487379005_1124577403046928_6264819270321948204_n.jpg",
  "487382628_1124576823046986_2858397956041348199_n.jpg",
  "487402671_1124568666381135_173436738163303464_n.jpg",
  "487510155_1124578426380159_4628891249161532437_n.jpg",
  "487538504_1124577229713612_7794154668176539038_n.jpg",
  "487827499_1124577066380295_5551181965969942783_n.jpg",
  "487931494_1124576846380317_6832499681089763673_n.jpg",
  "487968249_1124576573047011_1844832770067797033_n.jpg",
  "488049611_1124580119713323_895051258928260110_n.jpg",
].map((file, index) => ({
  type: "image" as const,
  src: `/science-fair/${file}`,
  label: `Science Fair ${index + 1}`,
  category: "Science Fair",
}));

/** Images from public/sports – additional sports photos in Sports tab */
const SPORTS_IMAGES = [
  "491824771_1139063744931627_2906664502845220250_n.jpg",
  "528667946_1234164505421550_6051709882716020254_n.jpg",
  "529329332_1234164498754884_8341582617675253573_n.jpg",
  "533086501_1241216168049717_3809744498261828298_n.jpg",
  "533089583_1241216204716380_7706105120795646122_n.jpg",
  "600322929_1351349673703032_2985449104393384695_n.jpg",
].map((file, index) => ({
  type: "image" as const,
  src: `/sports/${file}`,
  label: `Sports Gallery ${index + 1}`,
  category: "Sports",
}));

const items: GalleryItem[] = [
  { type: "image", src: chulkanaDam, label: "Chulkana Dham", category: "Trips" },
  { type: "image", src: tree, label: "Tree Plantation", category: "Events" },
  { type: "image", src: events, label: "School Events", category: "Events" },
  { type: "image", src: holi, label: "Holi Celebration", category: "Events" },
  { type: "image", src: holi5, label: "Holi Colors", category: "Events" },

  // Teachers and Achievements
  { type: "image", src: principal1, label: "Principal's Message", category: "Functions" },
  { type: "image", src: toper1, label: "Our Topper", category: "Functions" },
  { type: "image", src: topper, label: "School Toppers", category: "Functions" },

  // Cultural
  { type: "image", src: crmDance, label: "Cultural Dance", category: "Cultural" },
  { type: "image", src: cultureEvent, label: "Cultural Event", category: "Cultural" },
  { type: "image", src: dance, label: "Folk Dance", category: "Cultural" },
  { type: "image", src: dance1, label: "Annual Dance", category: "Cultural" },
  { type: "image", src: dance2, label: "Students Performing", category: "Cultural" },
  { type: "image", src: dance7, label: "Stage Performance", category: "Cultural" },

  // Sports
  { type: "image", src: sports1, label: "Sports Competition", category: "Sports" },
  { type: "image", src: sports2, label: "Athletics", category: "Sports" },
  { type: "image", src: sports3, label: "Team Event", category: "Sports" },
  { type: "image", src: sports6, label: "Sports Winners", category: "Sports" },
  { type: "image", src: sports7, label: "Sports Activities", category: "Sports" },
  { type: "video", src: heroImage2, label: "Glimpse of Sports Day", category: "Sports", videoUrl: SPORTS_DAY_VIDEO_URL },
  ...SPORTS_IMAGES,

  // News & Media
  { type: "image", src: newspaper, label: "In the News", category: "News" },
  { type: "image", src: newspaper1, label: "Media Coverage", category: "News" },
  { type: "image", src: newspaper4, label: "Press Release", category: "News" },
  { type: "image", src: newspaper5, label: "News Achievement", category: "News" },
  { type: "image", src: newpaper, label: "School Highlights", category: "News" },

  // Legacy
  ...PRATAPGARH_FARMS_IMAGES,
  ...SCIENCE_FAIR_IMAGES,
  { type: "image", src: heroSchool, label: "Campus View", category: "Campus" },
  { type: "video", src: heroImage1, label: "Glimpse of Independence Day celebrations and award ceremony for excellence", category: "Cultural", videoUrl: INDEPENDENCE_DAY_POST_URL },
];

const TABS = [
  { id: "all", label: "All" },
  { id: "Sports", label: "Sports" },
  { id: "Cultural", label: "Cultural Events" },
  { id: "News", label: "News & Media" },
  { id: "Functions", label: "Annual Functions" },
  { id: "Events", label: "Events" },
  { id: "Trips", label: "Trips" },
  { id: "Science Fair", label: "Science Fair" },
] as const;

const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [videoModal, setVideoModal] = useState<{ url: string; title: string } | null>(null);
  const [activeTab, setActiveTab] = useState<string>("Sports");

  const filteredItems =
    activeTab === "all" ? items : items.filter((item) => item.category === activeTab);

  // Only consider images for the sliding lightbox
  const lightboxItems = filteredItems.filter(item => item.type === "image");

  const handlePrevious = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activeIndex !== null && lightboxItems.length > 0) {
      setActiveIndex((prev) => (prev === 0 ? lightboxItems.length - 1 : prev! - 1));
    }
  }, [activeIndex, lightboxItems.length]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activeIndex !== null && lightboxItems.length > 0) {
      setActiveIndex((prev) => (prev === lightboxItems.length - 1 ? 0 : prev! + 1));
    }
  }, [activeIndex, lightboxItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setActiveIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, handleNext, handlePrevious]);


  return (
    <section id="gallery" className="section-padding bg-secondary relative overflow-hidden">
      <div className="container mx-auto relative">
        <div className="text-center mb-8">
          <ScrollReveal animation="blur-in">
            <h2 className="section-title">School Gallery</h2>
          </ScrollReveal>
          <ScrollReveal animation="blur-in" delay={60}>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-2 mb-4" aria-hidden />
            <p className="section-subtitle">
              Glimpses of life at CRM High School
            </p>
          </ScrollReveal>
        </div>

        {/* Filter tabs */}
        <ScrollReveal animation="fade-up" delay={80} className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === tab.id
                ? "gold-gradient text-accent-foreground shadow-md"
                : "bg-card border border-border text-foreground hover:border-gold/50 hover:text-gold"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </ScrollReveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredItems.map((item, i) => (
            <ScrollReveal key={i} animation="scale-fade" delay={i * 80}>
              <div
                className="relative group cursor-pointer break-inside-avoid rounded-xl overflow-hidden transform-gpu"
                onClick={() => {
                  if (item.type === "video") {
                    setVideoModal({ url: item.videoUrl, title: item.label });
                  } else {
                    const idx = lightboxItems.findIndex((img) => img.src === item.src);
                    if (idx !== -1) setActiveIndex(idx);
                  }
                }}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
                  loading="lazy"
                  style={{ height: i % 3 === 0 ? 280 : i % 3 === 1 ? 220 : 300 }}
                />
                <div className="absolute inset-0 bg-navy-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {item.type === "video" && (
                    <span className="absolute flex items-center justify-center w-14 h-14 rounded-full bg-white/90 text-navy shadow-lg scale-90 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-7 h-7 ml-1" fill="currentColor" />
                    </span>
                  )}
                  <span className="text-primary-foreground font-display font-bold text-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300 p-4 text-center">
                    {item.label}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && lightboxItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-dark/95 flex items-center justify-center p-4"
            onClick={() => setActiveIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveIndex(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all hover:scale-110 z-[60] shadow-xl"
              aria-label="Close"
            >
              <X className="w-6 h-6" strokeWidth={2.5} />
            </button>

            {/* Left/Previous Button */}
            {lightboxItems.length > 1 && (
              <button
                onClick={handlePrevious}
                className="absolute left-2 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all hover:scale-110 z-[60]"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={2.5} />
              </button>
            )}

            <motion.img
              key={activeIndex}
              initial={{ scale: 0.95, opacity: 0, x: 20 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              exit={{ scale: 0.95, opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              src={lightboxItems[activeIndex].src}
              alt={lightboxItems[activeIndex].label || "Gallery Image"}
              className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain min-h-[300px]"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
            />

            {/* Right/Next Button */}
            {lightboxItems.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all hover:scale-110 z-[60]"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={2.5} />
              </button>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/10 backdrop-blur-md">
              {activeIndex + 1} / {lightboxItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <VideoModal
        open={!!videoModal}
        onClose={() => setVideoModal(null)}
        url={videoModal?.url ?? ""}
        title={videoModal?.title ?? ""}
      />
    </section>
  );
};

export default GallerySection;
