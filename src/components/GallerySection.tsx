import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import heroSchool from "@/assets/hero-school.jpg";
import heroFunction from "@/assets/hero-function.jpg";
import heroSports from "@/assets/hero-sports.jpg";
import heroTrip from "@/assets/hero-trip.jpg";
import heroClassroom from "@/assets/hero-classroom.jpg";

const images = [
  { src: heroClassroom, label: "Classrooms", category: "Classrooms" },
  { src: heroFunction, label: "Annual Function", category: "Functions" },
  { src: heroSports, label: "Sports Day", category: "Sports" },
  { src: heroTrip, label: "Educational Trip", category: "Trips" },
  { src: heroSchool, label: "Campus View", category: "Campus" },
  { src: heroFunction, label: "Cultural Program", category: "Cultural" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-secondary relative overflow-hidden">
      <div className="container mx-auto relative">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            School Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            Glimpses of life at CRM High School
          </motion.p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group cursor-pointer break-inside-avoid rounded-xl overflow-hidden"
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                style={{ height: i % 3 === 0 ? 280 : i % 3 === 1 ? 220 : 300 }}
              />
              <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/60 transition-colors flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-dark/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              src={lightbox}
              alt="Gallery"
              className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center text-primary-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
