"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919538329732?text=Hi%2C%20I%27d%20like%20to%20enquire"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 1
      }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] group flex items-center justify-center p-4 rounded-full bg-black/40 backdrop-blur-md border border-[var(--color-gold)]/40 shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:bg-black/60 hover:border-[var(--color-gold)]/70 transition-all duration-300"
    >
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-[var(--color-gold)]/30 pointer-events-none"
      />
      <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-gold)] relative z-10 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
    </motion.a>
  );
}
