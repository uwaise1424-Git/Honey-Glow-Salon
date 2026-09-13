"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
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

            {/* Sharpened Body Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-5 text-text-muted font-light text-[1.05rem] leading-loose mb-12 tracking-wide"
            >
              <p>
                With over two decades of experience in the grooming and beauty industry, Ramalingam has built his career around creativity, precision, and a genuine passion for making people look and feel their absolute best.
              </p>
              <p>
                His professional journey began by honing his craft at some of the industry&apos;s most respected names, including <strong className="text-text-primary font-medium">TONI&GUY, Green Trends, and Naturals</strong>. Through these associations, he developed extensive hands-on expertise across all aspects of premium men&apos;s grooming.
              </p>
              <p>
                In 2020, Ramalingam took his vision to the next level by founding <strong className="text-text-primary font-medium">Honey Glow Men&apos;s Salon</strong>—creating an exclusive space where high-end professional expertise meets personalized care.
              </p>
              <p>
                Today, he specializes in everything from classic and contemporary haircuts to detailed facial treatments and bridal styling. Whether it is a sharp fade or a rejuvenating de-tan, Ramalingam brings the same unmatched dedication and attention to detail to every single chair.
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
          </div>

        </div>
      </div>
    </section>
  );
}