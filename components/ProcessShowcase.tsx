"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, Sparkles, Wind, Droplets, X, CheckCircle2 } from "lucide-react";

// 4 New, ultra-reliable high-res background images
const backgroundImages = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2000&auto=format&fit=crop",
];

const services = [
  {
    id: "haircut",
    title: "Precision Haircut",
    shortDesc: "Masterful cuts tailored to your head shape.",
    icon: <Scissors className="w-6 h-6 text-[#D4AF37]" />,
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop",
    details: "We don't just cut hair; we architect it. From classic tapers to modern textured crops, our 20+ years of expertise ensures your haircut perfectly frames your face and suits your daily lifestyle.",
    steps: ["Consultation & Blueprint", "Precision Scissor/Clipper Work", "Hot Lather Neck Shave & Style"]
  },
  {
    id: "beard",
    title: "Beard Sculpting",
    shortDesc: "Sharp lines, fading, and hot towel treatments.",
    icon: <Wind className="w-6 h-6 text-[#D4AF37]" />,
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop",
    details: "Transform your beard from unruly to undeniable. We use straight razors, premium balms, and hot towel wrapping to soften the hair and carve out razor-sharp cheek and neck lines.",
    steps: ["Hot Towel Softening", "Straight Razor Line-Up", "Beard Oil & Balm Finish"]
  },
  {
    id: "facial",
    title: "Restorative Facial",
    shortDesc: "Deep cleansing and de-tanning for men's skin.",
    icon: <Sparkles className="w-6 h-6 text-[#D4AF37]" />,
    image: "/facial.jpeg",
    details: "Men's skin takes a beating from the sun and pollution. Our restorative facial extracts deep-rooted impurities, exfoliates dead skin, and utilizes advanced de-tanning masks to bring back your natural glow.",
    steps: ["Ozone Steam & Cleanse", "Exfoliating Scrub", "De-Tanning Mask & Massage"]
  },
  {
    id: "color",
    title: "Hair & Beard Color",
    shortDesc: "Subtle grey blending or bold transformations.",
    icon: <Droplets className="w-6 h-6 text-[#D4AF37]" />,
    image: "/hair-colouring.jpeg",
    details: "Whether you want to embrace your youth by blending out the greys or try a completely new look, we use premium, ammonia-free colors that look 100% natural and keep your hair healthy.",
    steps: ["Color Matching", "Even Application", "Color-Lock Wash & Condition"]
  }
];

export default function ProcessShowcase() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const selectedService = services.find(s => s.id === selectedId);

  return (
    <section className="bg-[#050505] py-24 px-6 min-h-screen relative overflow-hidden">

      {/* Animated Background Images */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImage}
            src={backgroundImages[currentImage]}
            alt=""
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1.15 }}
            exit={{ opacity: 0, scale: 1.15 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 10, ease: "linear" }
            }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>

        {/* --- SEAMLESS BLENDING FIX --- */}
        {/* Top Gradient: Blends the top of the image into the section above it */}
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#050505] to-transparent z-10" />

        {/* Bottom Gradient: Blends the bottom of the image into the section below it */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#050505] to-transparent z-10" />

        {/* Global Darkening: Cinematic overlay so it's not too bright and text remains highly readable */}
        <div className="absolute inset-0 bg-[#050505]/60 z-10" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-20">

        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-semibold mb-4 block"
          >
            The Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Grooming, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-yellow-200">Elevated.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white max-w-xl mx-auto text-lg font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            Click on any service below to reveal the details of our signature craftsmanship.
          </motion.p>
        </div>

        {/* The Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              key={service.id}
              layoutId={`card-container-${service.id}`}
              onClick={() => setSelectedId(service.id)}
              className="bg-[#050505]/40 backdrop-blur-md border border-white/10 hover:border-[#D4AF37]/50 rounded-2xl p-6 cursor-pointer transition-colors duration-300 flex flex-col items-center text-center group shadow-xl"
            >
              <motion.div layoutId={`icon-${service.id}`} className="bg-black/50 w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-white/5 shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all">
                {service.icon}
              </motion.div>
              <motion.h3 layoutId={`title-${service.id}`} className="text-xl font-bold text-white mb-3">
                {service.title}
              </motion.h3>
              <motion.p layoutId={`desc-${service.id}`} className="text-zinc-400 text-sm font-light">
                {service.shortDesc}
              </motion.p>
              <div className="mt-6 text-[#D4AF37] text-sm font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                Explore <span className="text-lg leading-none">+</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The "Flashcard" Overlay Modal */}
        <AnimatePresence>
          {selectedId && selectedService && (
            <>
              {/* Darkened Background Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              />

              {/* The Actual Flashcard */}
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
                <motion.div
                  layoutId={`card-container-${selectedService.id}`}
                  className="bg-zinc-900 w-full max-w-3xl rounded-[2rem] overflow-hidden shadow-2xl pointer-events-auto flex flex-col md:flex-row max-h-[90vh] md:max-h-[600px]"
                >
                  {/* Left Side: Image */}
                  <div className="w-full md:w-1/2 relative h-64 md:h-auto flex-shrink-0 bg-zinc-950">
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent md:hidden" />
                    <div className="absolute inset-0 bg-gradient-to-l from-zinc-900 to-transparent hidden md:block" />
                  </div>

                  {/* Right Side: Content */}
                  <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto">



                    <motion.div layoutId={`icon-${selectedService.id}`} className="mb-4 hidden md:block">
                      {selectedService.icon}
                    </motion.div>

                    <motion.h3 layoutId={`title-${selectedService.id}`} className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 pr-8">
                      {selectedService.title}
                    </motion.h3>

                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 font-light">
                      {selectedService.details}
                    </p>

                    <div className="mt-auto">
                      <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest text-[#D4AF37]">
                        The Breakdown
                      </h4>
                      <ul className="space-y-4">
                        {selectedService.steps.map((step, idx) => (
                          <motion.li
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + (idx * 0.1) }}
                            key={idx}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                            <span className="text-zinc-300 text-sm md:text-base font-light">{step}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}