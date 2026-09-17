"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: "haircut",
    num: "01",
    title: "Precision Haircut",
    shortDesc: "Expert, clean cuts tailored to your style.",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop",
    details: "We don't just cut hair; we architect it. From classic tapers to modern textured crops, our 20+ years of expertise ensures your haircut perfectly frames your face and suits your daily lifestyle.",
    steps: ["Style Consultation", "Precision Cut & Fade", "Clean Line-Up & Styling"]
  },
  {
    id: "beard",
    num: "02",
    title: "Beard Trim & Shaping",
    shortDesc: "Precise trimming and sharp razor line-ups for a clean look.",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop",
    details: "Get a clean, neat beard. We trim the hair evenly to your required length, use a straight razor to make the cheek and neck lines sharp, and apply a standard aftershave to finish.",
    steps: ["Machine Trimming", "Setting the Shape", "Clean Blade Line-Up"]
  },
  {
    id: "facial",
    num: "03",
    title: "De-Tan Facial",
    shortDesc: "Removes sun tan, dirt, and oil for clear skin.",
    image: "/facial.jpeg",
    details: "Daily travel and sun exposure leave your skin tanned and dull. We start with a good scrub to clear out dirt and blackheads, give you a relaxing face massage, and apply a cooling de-tan pack to instantly brighten and clean your face.",
    steps: ["Basic Face Wash", "De-Tan Cream Application", "Clean Rinse & Wipe"]
  },
  {
    id: "color",
    num: "04",
    title: "Hair Coloring",
    shortDesc: "Subtle grey blending or bold transformations.",
    image: "/hair-colouring.jpeg",
    details: "Get rid of grey hairs with a quick, natural-looking dye. We carefully mix the color, apply it evenly across your hair using a brush to ensure full coverage, and finish with a thorough wash to leave it looking completely natural.",
    steps: ["Dye Mixing", "Brush Application", "Final Hair Wash"]
  }
];

export default function ProcessShowcase() {
  return (
    <section id="process" className="bg-background py-24 px-6 min-h-screen relative overflow-hidden">

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-20">

        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="preheader text-gold mb-4 block"
          >
            The Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl mb-6"
          >
            Grooming, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)]">Elevated.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="description max-w-xl mx-auto text-lg drop-shadow-md"
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
                  <div className="flex items-center gap-6 mb-6">
                    <span className="font-serif text-5xl md:text-6xl font-bold text-[var(--color-gold)] opacity-50 drop-shadow-md">
                      {service.num}
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl text-white">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-white text-xl md:text-2xl mb-4 font-serif tracking-tight">
                    {service.shortDesc}
                  </p>

                  <p className="font-description font-light italic text-zinc-300 leading-loose text-lg md:text-xl drop-shadow-lg mb-8">
                    {service.details}
                  </p>

                  <div className="bg-black/30 backdrop-blur-sm border border-white/5 p-6 md:p-8 rounded-2xl">
                    <h4 className="font-serif font-bold uppercase tracking-[0.2em] text-sm text-[var(--color-gold)] mb-6 block">
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
                          className="flex items-center gap-4"
                        >
                          <span className="text-[var(--color-gold)] opacity-70 flex-shrink-0">—</span>
                          <span className="font-description font-light italic text-zinc-300 text-lg md:text-xl drop-shadow-lg leading-loose">{step}</span>
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