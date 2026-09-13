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
        <section className="py-20 md:py-32 bg-background relative border-t border-gold/10 overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl text-center">

                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-gold uppercase tracking-[0.25em] text-xs font-bold mb-4 block"
                >
                    The Honey Glow Story
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-serif font-light text-4xl md:text-5xl text-text-primary tracking-tight mb-8"
                >
                    More Than Just a Salon. <br className="hidden md:block" />
                    <span className="font-medium">A Standard of Excellence.</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-6 text-text-muted font-light text-[1.1rem] leading-loose mb-16 max-w-3xl mx-auto tracking-wide"
                >
                    <p>
                        Since opening its doors in 2020, Honey Glow Men&apos;s Salon has evolved into Walajapet&apos;s premier destination for high-end grooming. What began as a singular vision has grown into a sanctuary built on trust, precision, and an unwavering commitment to personal connection. We recognized that the modern man needs more than just a quick trim—he needs a space to unwind, reset, and elevate his personal style.
                    </p>
                    <p>
                        Backed by founder Ramalingam&apos;s two decades of rigorous industry expertise, every service at Honey Glow is executed with absolute mastery. We believe that true grooming is an art form that requires patience, skill, and an eye for detail. From classic executive cuts and flawless beard sculpting to advanced skin rejuvenation and relaxing facial treatments, our diverse range of services is designed to cater to your specific needs.
                    </p>
                    <p>
                        At Honey Glow, the atmosphere is just as important as the service. We have meticulously designed our salon to be a haven of luxury—featuring premium seating, ambient lighting, and top-tier grooming products sourced from the finest brands. Our team of expert stylists continually train in the latest techniques to ensure you walk out looking sharp and feeling confident.
                    </p>
                    <p>
                        We aren&apos;t just styling hair; we are building relationships within our community. We are deeply committed to delivering an experience that is distinctly professional, entirely comfortable, and perfectly tailored to your individual lifestyle. When you sit in our chair, you are the priority. Welcome to the new standard in men&apos;s grooming.
                    </p>
                </motion.div>

                {/* Staggered Stat Badges Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.5 + (index * 0.15) }}
                            className="p-6 bg-surface/40 border border-gold/20 rounded-xl hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                        >
                            <stat.icon className="w-8 h-8 text-gold mx-auto mb-4" />
                            <span className="block text-text-primary font-serif text-2xl mb-1">{stat.value}</span>
                            <span className="text-text-muted text-xs uppercase tracking-widest">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}