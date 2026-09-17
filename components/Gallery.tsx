"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
    // Stripped span logic since thumbnails are uniform
    const galleryItems = [
        { id: 1, url: "/fade-cut.jpeg", title: "Precision Fade", category: "Haircut" },
        { id: 3, url: "/buzz-cut.jpeg", title: "Clean Buzz Cut", category: "Haircut" },
        { id: 4, url: "/facial.jpeg", title: "Restorative Facial", category: "Skin Care" },
        { id: 5, url: "/frenchcrop-cut.jpeg", title: "Textured French Crop", category: "Haircut" },
        { id: 6, url: "/hair-colouring.jpeg", title: "Premium Hair Coloring", category: "Treatment" },
        { id: 9, url: "/mullet-cut.jpeg", title: "Modern Mullet", category: "Styling" },
        { id: 12, url: "/haircut-10.jpeg", title: "Master Styling", category: "Finish" },
        { id: 13, url: "/de-tan.jpeg", title: "Advanced De-Tanning", category: "Skin Care" },
    ];

    const [activeImageId, setActiveImageId] = useState(galleryItems[0].id);
    const activeItem = galleryItems.find(item => item.id === activeImageId) || galleryItems[0];

    return (
        <section id="gallery" className="py-24 px-6 bg-background min-h-screen">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                
                {/* Header Section */}
                <div className="text-center">
                    <span className="font-serif font-bold uppercase tracking-[0.2em] text-sm text-[var(--color-gold)] mb-4 block drop-shadow-md">
                        The Gallery
                    </span>
                    <h2 className="text-4xl md:text-5xl mb-6 font-serif tracking-tight text-white">
                        Masterclass In <span className="text-[var(--color-gold)] italic font-light">Style.</span>
                    </h2>
                    <p className="font-description font-light italic text-zinc-300 text-lg md:text-xl drop-shadow-lg max-w-2xl mx-auto">
                        Browse through our portfolio of signature haircuts, meticulous beard sculpts, and premium grooming services.
                    </p>
                </div>

                {/* Master-Detail Showcase Layout */}
                <div className="flex flex-col gap-6 w-full">
                    
                    {/* Part 1: The Showcase */}
                    {/* bg-black acts as a solid, clean frame for object-contain without visible lines */}
                    <div className="w-full h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden relative bg-black">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeItem.id}
                                src={activeItem.url}
                                alt={activeItem.title}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="absolute inset-0 w-full h-full object-contain" 
                            />
                        </AnimatePresence>

                        {/* Showcase Text Overlay */}
                        <div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-6 md:p-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`text-${activeItem.id}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                >
                                    <span className="font-serif font-bold uppercase tracking-[0.2em] text-xs md:text-sm text-[var(--color-gold)] mb-2 block">
                                        {activeItem.category}
                                    </span>
                                    <h3 className="text-3xl md:text-5xl text-white font-serif tracking-tight">
                                        {activeItem.title}
                                    </h3>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Part 2: The Thumbnails */}
                    {/* Clean, uniform grid as requested */}
                    <div className="grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-4">
                        {galleryItems.map((item) => {
                            const isActive = activeImageId === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveImageId(item.id)}
                                    className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                                        isActive 
                                            ? "ring-2 ring-[var(--color-gold)] opacity-100 scale-95 md:scale-100" 
                                            : "opacity-50 hover:opacity-100 border border-white/10"
                                    }`}
                                >
                                    <img
                                        src={item.url}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Subtle hover overlay on inactive items to make active stand out */}
                                    {!isActive && (
                                        <div className="absolute inset-0 bg-black/40 hover:bg-transparent transition-colors duration-300" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}