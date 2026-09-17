"use client";

import { motion } from "framer-motion";

export default function Services() {
  const servicesData = [
    {
      title: "Hair & Grooming",
      num: "01",
      items: [
        { name: "Haircut", price: "130" },
        { name: "Haircut and Trim", price: "200" },
        { name: "Kid's Cut", price: "100" },
        { name: "Hair Wash", price: "50" },
        { name: "Beard Trim / Shave", price: "70" },
        { name: "Head Oil Massage", price: "300" },
      ],
    },
    {
      title: "Color & Treatments",
      num: "02",
      items: [
        { name: "Hair Colouring L'Oréal (Black)", price: "500" },
        { name: "Brown Highlights (Per Strand)", price: "150" },
        { name: "Fashion Colour Highlights", price: "250" },
        { name: "Top Section Straightening", price: "2,500" },
        { name: "Full Head Straightening", price: "6,000" },
      ],
    },
    {
      title: "Skincare & Wedding",
      num: "03",
      items: [
        { name: "De-Tan", price: "300" },
        { name: "De-Tan Face & Neck", price: "500" },
        { name: "Groom's Glow Up (Facial)", price: "2,500" },
        { name: "Groom's Wedding Makeup", price: "5,000" },
      ],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 relative bg-surface/30 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-gold uppercase tracking-[0.25em] text-xs font-bold mb-4 block"
          >
            The Menu
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif font-light text-4xl md:text-5xl text-text-primary tracking-tight"
          >
            Grooming, <span className="font-medium">Tailored to You</span>
          </motion.h2>
        </div>

        {/* "The Sharp Lineup" - Animated Trimmer Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-[1px] bg-gradient-to-r from-transparent via-gold/80 to-transparent mb-16 max-w-3xl mx-auto"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {servicesData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-surface/50 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-shadow duration-300 group flex flex-col"
            >
              <div className="mb-6 group-hover:-translate-y-1 transition-transform duration-300">
                <span className="font-serif text-5xl md:text-6xl font-bold text-[var(--color-gold)] opacity-50 drop-shadow-md">
                  {category.num}
                </span>
              </div>

              <h3 className="font-serif font-semibold text-2xl md:text-3xl text-white mb-6 pb-4 border-b border-gold/20 tracking-wide">
                {category.title}
              </h3>

              <ul className="space-y-5 flex-1">
                {category.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.2) + (i * 0.1) }}
                    className="flex justify-between items-end gap-4 group/item"
                  >
                    <span className="font-description font-light italic text-zinc-300 text-lg md:text-xl drop-shadow-lg group-hover/item:text-[var(--color-gold)] transition-colors">
                      {item.name}
                    </span>
                    <div className="flex-1 border-b border-dashed border-gold/20 mb-2 opacity-50"></div>
                    <span className="text-[var(--color-gold)] font-serif italic text-lg md:text-xl drop-shadow-md">
                      ₹{item.price}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center text-text-muted/60 text-xs tracking-wider uppercase max-w-2xl mx-auto mt-12"
        >
          * Prices listed are standard starting rates. Final pricing may vary based on in-salon consultation.
        </motion.p>
      </div>
    </section>
  );
}