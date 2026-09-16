"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative lg:sticky lg:top-32"
          >
            <div className="absolute inset-0 bg-gold/20 rounded-2xl blur-3xl" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gold/30 shadow-2xl">
              {/* Cinematic slow scale on the image */}
              <motion.div
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 bg-[url('/ramalingam.jpeg')] bg-cover bg-center grayscale-[10%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
            </div>
          </motion.div>

          {/* Text Column */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-gold uppercase tracking-[0.25em] text-xs font-bold mb-4 block"
            >
              Meet The Founder
            </motion.span>

            {/* Sharpened Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif font-light text-4xl md:text-5xl text-text-primary tracking-tight mb-8 leading-tight"
            >
              Ramalingam <br />
              <span className="text-gold font-medium text-3xl md:text-4xl mt-2 block">20+ Years of Excellence</span>
            </motion.h2>

            {/* Expanded & Bolded Body Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 text-zinc-300 font-sans font-light text-lg md:text-xl leading-relaxed mb-12 tracking-wide"
            >
              <p>
                With over two decades of dedicated experience in the premium grooming and beauty industry, Ramalingam has built a legendary career centered around creativity, absolute precision, and a genuine passion for making every client look and feel their absolute best.
              </p>
              <p>
                His professional journey began by rigorously honing his craft at some of the industry&apos;s most respected and demanding names, including <span className="text-[#D4AF37] uppercase tracking-widest text-base">TONI&GUY, Green Trends, and Naturals</span>. Through these elite associations, he developed extensive hands-on expertise across all aspects of modern men&apos;s grooming.
              </p>
              <p>
                Driven by a desire to offer a superior, uncompromised grooming experience, Ramalingam took his vision to the next level in 2020 by founding <span className="text-[#D4AF37] uppercase tracking-widest text-base">Honey Glow Men&apos;s Salon</span>. His goal was simple: to create an exclusive, luxurious space where high-end professional expertise meets personalized, everyday care.
              </p>

            </motion.div>

            {/* Stat Badges - Staggered Animation */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-surface/50 backdrop-blur-sm border border-gold/20 rounded-lg p-4 text-center shadow-lg transition-transform hover:-translate-y-1"
              >
                <span className="block text-gold font-semibold text-3xl mb-1 tracking-tighter">20+</span>
                <span className="text-text-primary text-[10px] font-medium uppercase tracking-widest">Years Exp</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-surface/50 backdrop-blur-sm border border-gold/20 rounded-lg p-4 text-center shadow-lg transition-transform hover:-translate-y-1"
              >
                <span className="block text-gold font-semibold text-3xl mb-1 tracking-tighter">2020</span>
                <span className="text-text-primary text-[10px] font-medium uppercase tracking-widest">Founded</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-surface/50 backdrop-blur-sm border border-gold/20 rounded-lg p-3 text-center shadow-lg transition-transform hover:-translate-y-1 flex flex-col justify-center"
              >
                <span className="block text-gold font-bold text-sm leading-tight tracking-wide">TONI&GUY<br />Naturals</span>
                <span className="text-text-muted text-[9px] font-medium mt-1 uppercase tracking-widest">Certified</span>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-10 flex items-center"
            >
              <a 
                href="https://www.instagram.com/honey_glow_salon?stkn=MXd4cGthbzU5d3doaA%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 text-zinc-300 hover:text-gold transition-colors group"
              >
                <div className="bg-surface/50 p-3.5 rounded-full border border-gold/20 group-hover:border-gold/50 shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 text-gold group-hover:text-white transition-colors">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </div>
                <span className="font-serif text-lg tracking-wide group-hover:text-white transition-colors">Follow on Instagram</span>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}