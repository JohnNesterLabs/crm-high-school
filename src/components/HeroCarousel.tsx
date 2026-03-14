import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import heroSchool from "@/assets/hero-school.jpg";
import heroImage1 from "@/assets/hero-image1.jpg";
import heroImage2 from "@/assets/hero-image2.jpg";
import heroImage3 from "@/assets/hero-image3.jpg";
import heroClassroom from "@/assets/hero-classroom.jpg";

const slides = [
  { img: heroSchool, title: "Our Campus", subtitle: "A nurturing environment for holistic growth" },
  { img: heroImage1, title: "Annual Function", subtitle: "Celebrating talent and creativity" },
  { img: heroImage2, title: "Sports Day", subtitle: "Building champions on and off the field" },
  { img: heroImage3, title: "School Trips", subtitle: "Learning beyond the classroom walls" },
  { img: heroClassroom, title: "Smart Classrooms", subtitle: "Modern education for a modern world" },
];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        speed={1200}
        pagination={{ clickable: true, el: ".hero-pagination" }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        onSlideChange={(s) => setActiveIndex(s.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full">
              <div
                className={`absolute inset-0 bg-cover bg-center ${activeIndex === i ? "animate-kenburns" : ""}`}
                style={{ backgroundImage: `url(${slide.img})`, willChange: "transform" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy-dark/50 to-navy-dark/80" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4"
          >
            <span className="inline-block text-gold text-sm md:text-base font-semibold tracking-widest uppercase">
              School Code: 14208 • Est. 1988
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg"
          >
            CRM High School
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="font-display text-xl sm:text-2xl md:text-3xl text-gold font-semibold mb-2 drop-shadow"
          >
            Chulkana Dham
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mb-8"
          >
            <span className="typewriter inline-block font-body text-white/90 text-base md:text-lg">
              "Achieving Excellence Together"
            </span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="text-white/80 text-sm md:text-base mb-8"
            >
              {slides[activeIndex].title} — {slides[activeIndex].subtitle}
            </motion.p>
          </AnimatePresence>

          <motion.a
            href="#about"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
            className="inline-block pointer-events-auto gold-gradient text-accent-foreground px-8 py-3 rounded-full font-semibold text-lg animate-pulse-glow hover:scale-105 transition-transform"
          >
            Explore Our School
          </motion.a>
        </div>
      </div>

      {/* Navigation: minimal pill buttons with subtle animation */}
      <motion.button
        ref={prevRef}
        type="button"
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white/50 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:border-gold hover:bg-black/30 hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-transparent transition-colors duration-200"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
      >
        <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
      </motion.button>
      <motion.button
        ref={nextRef}
        type="button"
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white/50 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:border-gold hover:bg-black/30 hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-transparent transition-colors duration-200"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
      >
        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
      </motion.button>

      {/* Pagination dots */}
      <div className="hero-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 [&_.swiper-pagination-bullet]:w-3 [&_.swiper-pagination-bullet]:h-3 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:bg-primary-foreground/40 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet-active]:bg-gold [&_.swiper-pagination-bullet-active]:w-8" />
    </section>
  );
};

export default HeroCarousel;
