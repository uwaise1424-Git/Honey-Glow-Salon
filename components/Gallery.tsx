"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Gallery() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const galleryItems = [
        {
            id: 1,
            url: "/fade-cut.jpeg",
            title: "Precision Fade",
            category: "Haircut",
            span: "md:col-span-2 md:row-span-2",
        },
        {
            id: 3,
            url: "/buzz-cut.jpeg",
            title: "Clean Buzz Cut",
            category: "Haircut",
            span: "md:col-span-1 md:row-span-1",
        },
        {
            id: 4,
            url: "/facial.jpeg",
            title: "Restorative Facial",
            category: "Skin Care",
            span: "md:col-span-1 md:row-span-1",
        },
        {
            id: 5,
            url: "/frenchcrop-cut.jpeg",
            title: "Textured French Crop",
            category: "Haircut",
            span: "md:col-span-2 md:row-span-1",
        },
        {
            id: 6,
            url: "/hair-colouring.jpeg",
            title: "Premium Hair Coloring",
            category: "Treatment",
            span: "md:col-span-2 md:row-span-2",
        },
        {
            id: 9,
            url: "/mullet-cut.jpeg",
            title: "Modern Mullet",
            category: "Styling",
            span: "md:col-span-2 md:row-span-1",
        },
        {
            id: 12,
            url: "/haircut-10.jpeg",
            title: "Master Styling",
            category: "Finish",
            span: "md:col-span-1 md:row-span-1",
        },
        {
            id: 13,
            url: "/de-tan.jpeg",
            title: "Advanced De-Tanning",
            category: "Skin Care",
            span: "md:col-span-1 md:row-span-1",
        },
    ];

    const selectedItem = galleryItems.find((item) => item.id === selectedId);

    return (
        <section id="gallery" className="py-24 px-6 bg-background min-h-screen">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="preheader text-gold mb-4 block"
                    >
                        The Gallery
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl mb-6"
                    >
                        Masterclass In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)]">Style.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="description max-w-xl mx-auto text-lg"
                    >
                        Browse through our portfolio of signature haircuts, meticulous beard sculpts, and premium grooming services.
                    </motion.p>
                </div>

                {/* Masonry / Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[250px] grid-flow-dense gap-4 md:gap-6">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index % 5) * 0.1, duration: 0.5 }}
                            key={item.id}
                            layoutId={`gallery-item-${item.id}`} // Magic link for Framer Motion
                            onClick={() => setSelectedId(item.id)}
                            className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-xl h-[250px] md:h-auto ${item.span}`}
                        >
                            {/* Image inside Grid (Cropped to fit nicely) */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                                style={{ backgroundImage: `url(${item.url})` }}
                            />

                            {/* Dark Overlay (Darkens strongly on hover) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Hover Text Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <span className="preheader text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-2">
                                    {item.category}
                                </span>
                                <h3 className="text-xl md:text-2xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                    {item.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* FULL SCREEN MODAL OVERLAY */}
                <AnimatePresence>
                    {selectedId && selectedItem && (
                        <>
                            {/* Dark blurred background */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[60] cursor-pointer"
                            />

                            {/* The expanded image container */}
                            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-12 pointer-events-none">
                                <motion.div
                                    layoutId={`gallery-item-${selectedItem.id}`} // Matches the grid item!
                                    className="relative w-full max-w-5xl h-full max-h-[85vh] bg-transparent rounded-2xl overflow-hidden pointer-events-auto flex flex-col"
                                >
                                    {/* Close Button */}
                                    <button
                                        onClick={() => setSelectedId(null)}
                                        className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-[#D4AF37] text-white hover:text-black p-3 rounded-full backdrop-blur-md transition-all duration-300"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>

                                    {/* Full Uncropped Image */}
                                    <img
                                        src={selectedItem.url}
                                        alt={selectedItem.title}
                                        // 'object-contain' ensures the whole image is visible without cropping!
                                        className="w-full h-full object-contain drop-shadow-2xl"
                                    />

                                    {/* Text underneath the full image */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                                    >
                                        <span className="preheader text-gold block mb-2">
                                            {selectedItem.category}
                                        </span>
                                        <h3 className="text-3xl md:text-4xl text-white">
                                            {selectedItem.title}
                                        </h3>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}