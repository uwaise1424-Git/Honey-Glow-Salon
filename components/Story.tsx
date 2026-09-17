"use client";

import { motion } from "framer-motion";
import { Scissors, Calendar, Award, Sparkles } from "lucide-react";

export default function Story() {
    const stats = [
        { icon: Award, value: "20+", label: "Years Exp" },
        { icon: Calendar, value: "2020", label: "Established" },
        { icon: Scissors, value: "Hair", label: "& Styling" },
        { icon: Sparkles, value: "Beauty", label: "& Facials" },
    ];

    return (
        <section className="relative py-20 md:py-32 border-t border-gold/10 overflow-hidden">

            {/* THE BACKGROUND FIX: Smooth scroll on mobile, fixed parallax on desktop */}
            {/* BRUH NOTE: Change '/your-image.jpg' to your actual background image filename! */}
            <div className="absolute inset-0 z-0 bg-[url('/your-image.jpg')] bg-cover bg-center bg-scroll md:bg-fixed opacity-20"></div>

            {/* Dark gradient overlay so the text remains readable over the image */}
            <div className="absolute inset-0 z-0 bg-background/90 md:bg-background/80"></div>

            <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center flex flex-col items-center">

                {/* Pre-header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center gap-4 mb-8"
                >
                    <span className="w-12 h-[1px] bg-gold/60"></span>
                    <span className="font-serif font-bold uppercase tracking-[0.2em] text-sm text-zinc-300">
                        The Honey Glow Story
                    </span>
                    <span className="w-12 h-[1px] bg-gold/60"></span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-tight tracking-tight"
                >
                    More Than Just a Salon.
                </motion.h2>

                {/* Subheading */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="font-serif italic text-gold text-xl md:text-2xl font-light opacity-90 block mb-12"
                >
                    A Standard of Excellence.
                </motion.span>

                {/* Paragraphs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-6 max-w-3xl mx-auto mb-20 text-left md:text-center"
                >
                    <p className="description text-zinc-300 text-lg md:text-xl drop-shadow-lg leading-relaxed">
                        Since opening its doors in 2020, Honey Glow Men&apos;s Salon has evolved into Walajapet&apos;s premier destination for high-end grooming. What began as a singular vision has grown into a sanctuary built on trust, precision, and an unwavering commitment to personal connection.
                    </p>
                    <p className="description text-zinc-300 text-lg md:text-xl drop-shadow-lg leading-relaxed">
                        Backed by founder Ramalingam&apos;s two decades of rigorous industry expertise, every service at Honey Glow is executed with absolute mastery. We believe that true grooming is an art form that requires patience, skill, and an eye for detail.
                    </p>
                    <p className="description text-zinc-300 text-lg md:text-xl drop-shadow-lg leading-relaxed">
                        At Honey Glow, the atmosphere is just as important as the service. We have meticulously designed our salon to be a haven of luxury—featuring premium seating, ambient lighting, and top-tier grooming products sourced from the finest brands.
                    </p>
                    <p className="description text-zinc-300 text-lg md:text-xl drop-shadow-lg leading-relaxed">
                        We aren&apos;t just styling hair; we are building relationships within our community. We are deeply committed to delivering an experience that is distinctly professional, entirely comfortable, and perfectly tailored to your individual lifestyle. Welcome to the new standard in men&apos;s grooming.
                    </p>
                </motion.div>

                {/* Stat Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.5 + (index * 0.15) }}
                            className="p-6 bg-surface/50 backdrop-blur-sm border border-gold/20 rounded-lg shadow-lg transition-transform hover:-translate-y-1 flex flex-col items-center justify-center text-center"
                        >
                            <stat.icon className="w-8 h-8 text-gold mb-4" />
                            <span className="block text-gold font-serif font-bold text-3xl mb-1 tracking-tighter">{stat.value}</span>
                            <span className="text-zinc-400 font-serif font-bold text-[10px] uppercase tracking-widest">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}