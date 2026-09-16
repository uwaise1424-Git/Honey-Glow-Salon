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
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="process" className="bg-[#050505] py-24 px-6 min-h-screen relative overflow-hidden">

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
        <div className="absolute inset-0 bg-[#050505]/80 z-10" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-20">

        {/* Header Section */}
        <div className="text-center mb-20">
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
            className="text-zinc-300 max-w-xl mx-auto text-lg font-light drop-shadow-md"
          >
            Discover the meticulous craftsmanship behind every signature service.
          </motion.p>
        </div>

        {/* The Process Sequence (Alternating Layout) */}
        <div className="space-y-24 md:space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-stretch gap-10 lg:gap-16`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2 relative rounded-[2rem] overflow-hidden shadow-2xl group min-h-[300px] md:min-h-[450px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle vignette on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-black/50 p-4 rounded-full border border-[#D4AF37]/20 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-zinc-200 text-xl font-light leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  <p className="text-zinc-400 text-base leading-relaxed mb-10 font-light">
                    {service.details}
                  </p>

                  <div className="bg-black/30 backdrop-blur-sm border border-white/5 p-6 md:p-8 rounded-2xl">
                    <h4 className="text-[#D4AF37] font-semibold mb-6 text-xs uppercase tracking-widest">
                      The Breakdown
                    </h4>
                    <ul className="space-y-4">
                      {service.steps.map((step, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + (idx * 0.1) }}
                          className="flex items-start gap-4"
                        >
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                          <span className="text-zinc-300 text-sm md:text-base font-light">{step}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}