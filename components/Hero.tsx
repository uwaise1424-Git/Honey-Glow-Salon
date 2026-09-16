"use client";

import { Phone, MessageCircle, Scissors, Sparkles, Droplets, MapPin } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";

const backgroundImages = [
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2000&auto=format&fit=crop", // Barber cutting hair
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2000&auto=format&fit=crop", // Luxury interior / barber tools
  "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=2000&auto=format&fit=crop", // Men's shaving/facial prep
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2000&auto=format&fit=crop", // Man getting beard trim
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-12 flex items-center overflow-hidden bg-background/black">
      {/* Animated Background Images with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImage}
            src={backgroundImages[currentImage]}
            alt="Salon Background"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ 
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 10, ease: "linear" }
            }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>
        
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/40 z-10" />
      </div>

      <div className="container relative z-20 mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gold text-xs font-semibold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-zinc-300">Premium Salon Experience</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight text-white mb-6 leading-[1.1] drop-shadow-xl"
            >
              Mastering the Art of <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-[#D4AF37]">
                Men&apos;s Grooming
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-serif italic text-zinc-200/90 text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed tracking-wide drop-shadow-lg"
            >
              Experience the pinnacle of men&apos;s grooming. From precision cuts to revitalizing treatments, we craft looks that turn heads and make you feel unstoppable.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12"
            >
              <a
                href="https://wa.me/917449223356?text=Hi%2C%20I%27d%20like%20to%20enquire."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-yellow-500 text-black font-semibold py-3.5 px-8 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] text-sm tracking-wide"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire</span>
              </a>

              <a
                href="tel:+917449223356"
                className="flex items-center justify-center gap-2 bg-black/40 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10 font-semibold py-3.5 px-8 rounded-full transition-all duration-300 text-sm tracking-wide"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
            </motion.div>

            {/* Quick Stats/Features */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 border-t border-white/20 pt-8 w-full max-w-lg">
              <div className="flex flex-col items-center lg:items-start">
                <Scissors className="w-6 h-6 text-[#D4AF37] mb-2 opacity-90" />
                <span className="text-white font-bold text-lg drop-shadow-sm">Master</span>
                <span className="text-zinc-300 text-xs uppercase tracking-wider drop-shadow-sm">Stylist</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <Droplets className="w-6 h-6 text-[#D4AF37] mb-2 opacity-90" />
                <span className="text-white font-bold text-lg drop-shadow-sm">Premium</span>
                <span className="text-zinc-300 text-xs uppercase tracking-wider drop-shadow-sm">Products</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <MapPin className="w-6 h-6 text-[#D4AF37] mb-2 opacity-90" />
                <span className="text-white font-bold text-lg drop-shadow-sm">Walajapet</span>
                <span className="text-zinc-300 text-xs uppercase tracking-wider drop-shadow-sm">Location</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}