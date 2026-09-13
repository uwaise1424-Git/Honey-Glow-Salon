"use client";

import { Phone, MessageCircle, Scissors, Sparkles, Droplets, MapPin } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Floating animation for decorative elements
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-12 flex items-center overflow-hidden bg-background">

      {/* Abstract Background Design */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[80px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text & CTA */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-start text-center lg:text-left z-20"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Premium Salon Experience</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight text-text-primary mb-6 leading-[1.1]"
            >
              Mastering the Art of <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">
                Men's Grooming
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-text-muted text-base md:text-lg max-w-xl mb-8 font-light leading-relaxed"
            >
              Experience the pinnacle of men's grooming. From precision cuts to revitalizing treatments, we craft looks that turn heads and make you feel unstoppable.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="https://wa.me/917449223356?text=Hi%2C%20I%27d%20like%20to%20enquire."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-background font-semibold py-3.5 px-8 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] text-sm tracking-wide"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire</span>
              </a>

              <a
                href="tel:+917449223356"
                className="flex items-center justify-center gap-2 bg-transparent border border-gold/40 text-gold hover:bg-gold/10 font-semibold py-3.5 px-8 rounded-full transition-all duration-300 text-sm tracking-wide"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
            </motion.div>

            {/* Quick Stats/Features */}
            <motion.div variants={itemVariants} className="mt-12 grid grid-cols-3 gap-6 border-t border-white/5 pt-8 w-full max-w-lg">
              <div className="flex flex-col items-center lg:items-start">
                <Scissors className="w-6 h-6 text-gold mb-2 opacity-80" />
                <span className="text-text-primary font-bold text-lg">Master</span>
                <span className="text-text-muted text-xs uppercase tracking-wider">Stylist</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <Droplets className="w-6 h-6 text-gold mb-2 opacity-80" />
                <span className="text-text-primary font-bold text-lg">Premium</span>
                <span className="text-text-muted text-xs uppercase tracking-wider">Products</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <MapPin className="w-6 h-6 text-gold mb-2 opacity-80" />
                <span className="text-text-primary font-bold text-lg">Walajapet</span>
                <span className="text-text-muted text-xs uppercase tracking-wider">Location</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Image Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative hidden lg:block h-[600px] w-full"
          >
            {/* Main large image */}
            <div className="absolute top-0 right-0 w-4/5 h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/5">
              <Image
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=1000"
                alt="Barber cutting hair"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-500"></div>
            </div>

            {/* Overlapping smaller image */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute bottom-10 left-0 w-[280px] h-[320px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-background"
            >
              <Image
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600"
                alt="Salon tools"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}