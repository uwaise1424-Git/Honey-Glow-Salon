"use client";

import { motion } from "framer-motion";

export default function Gallery() {
    const galleryImages = [
        {
            url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop",
            title: "Precision Tools",
            category: "Grooming",
        },
        {
            url: "/hero.jpeg",
            title: "The Ambiance",
            category: "Interior",
        },
        {
            url: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=800&auto=format&fit=crop",
            title: "Premium Products",
            category: "Skin & Hair Care",
        },
        {
            url: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop",
            title: "Classic Techniques",
            category: "Hot Towel Shave",
        },
    ];

    return (
        <section id="gallery" className="py-20 md:py-32 bg-surface/30 relative border-t border-gold/10 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-gold uppercase tracking-[0.25em] text-xs font-bold mb-4 block"
                    >
                        Inside The Salon
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-serif font-light text-4xl md:text-5xl text-text-primary tracking-tight"
                    >
                        The Honey Glow <span className="font-medium">Experience</span>
                    </motion.h2>
                </div>

                {/* 2x2 Staggered Grid Layout */}
                <div className="grid md:grid-cols-2 gap-6">
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
                            className="group relative h-[300px] md:h-[400px] overflow-hidden rounded-2xl bg-surface border border-gold/20"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                style={{ backgroundImage: `url(${img.url})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent transition-opacity duration-300" />

                            <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-gold text-xs uppercase tracking-widest font-semibold mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {img.category}
                                </span>
                                <h3 className="font-serif text-2xl text-text-primary font-medium tracking-wide">
                                    {img.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}