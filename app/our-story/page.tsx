import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function OurStoryPage() {
    return (
        <main className="relative min-h-screen text-text-primary flex flex-col pt-32 pb-16">

            {/* 1. The Subtle Background Image & Overlays */}
            <div className="absolute inset-0 z-0 fixed">
                <Image
                    src="/hero.jpeg"
                    alt="Honey Glow Salon Interior"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Heavy Charcoal dimming so text stays highly readable */}
                <div className="absolute inset-0 bg-background/90" />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/90" />
            </div>

            {/* Navbar sits on top */}
            <div className="relative z-20">
                <Navbar />
            </div>

            {/* 2. Page Content */}
            <section className="relative z-10 flex-1 max-w-4xl mx-auto px-6 w-full">

                {/* Accent Line */}
                <div className="border-l-2 border-gold pl-4 mb-6 text-xs font-bold tracking-[0.2em] text-gold uppercase drop-shadow-md">
                    Established 2020
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-10 leading-[1.1] drop-shadow-lg">
                    More Than <br />
                    <span className="text-gold font-serif italic font-light">Just a Salon.</span>
                </h1>

                {/* Quick Stats Bar */}
                <div className="flex flex-wrap gap-x-8 gap-y-4 mb-12 py-6 border-y border-surface/30 text-text-muted font-medium tracking-wider text-xs md:text-sm uppercase">
                    <span className="flex items-center gap-2">
                        <span className="text-gold font-bold text-lg">20+</span> Years Experience
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="text-gold font-bold text-lg">Since</span> 2020
                    </span>
                    <span className="flex items-center gap-2 text-gold font-bold">
                        Hair <span className="text-text-muted font-normal mx-1">/</span>
                        Beauty <span className="text-text-muted font-normal mx-1">/</span>
                        Facials
                    </span>
                </div>

                {/* The Narrative */}
                <div className="space-y-8 text-text-primary/90 text-lg md:text-xl font-light leading-relaxed mb-16 drop-shadow-md">
                    <p>
                        Since opening its doors in 2020, Honey Glow Men&apos;s Salon has grown from a singular vision into Walajapet&apos;s premier grooming sanctuary. We didn&apos;t just want to create a place for haircuts; we set out to build an environment where men could unwind, reset, and elevate their personal style. It is a space built on a foundation of experience, unwavering trust, artistic creativity, and genuine personal connection.
                    </p>
                    <p>
                        With founder Ramalingam&apos;s two decades of rigorous industry knowledge behind it, every service at Honey Glow is executed with absolute mastery. We believe that true grooming is a personal craft—an art form that requires patience, skill, and a meticulous eye for detail. From classic executive cuts and flawless beard sculpting to advanced skin rejuvenation, we cater to the nuanced needs of the modern man.
                    </p>
                    <p>
                        At Honey Glow, the atmosphere is as crucial as the service. We have designed our salon to be a haven of masculine luxury, featuring premium seating, ambient lighting, and top-tier grooming products sourced from the finest brands.
                    </p>
                    <p>
                        We aren&apos;t just styling hair; we are building relationships within our community. We are deeply committed to delivering an experience that is profoundly professional, entirely comfortable, and masterfully tailored to your individual lifestyle. When you step into Honey Glow, you are the priority. Welcome to the gold standard in men&apos;s grooming.
                    </p>
                </div>

                {/* Frosted Glass Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-surface/40 backdrop-blur-md border border-surface/50 p-8 rounded-xl shadow-lg hover:border-gold/30 transition-colors duration-300">
                        <h3 className="text-gold font-bold text-xl mb-3">Precision Hair</h3>
                        <p className="text-text-primary/80 text-sm leading-relaxed">
                            From classic traditional cuts to modern architectural styling, we deliver a flawless, signature look.
                        </p>
                    </div>
                    <div className="bg-surface/40 backdrop-blur-md border border-surface/50 p-8 rounded-xl shadow-lg hover:border-gold/30 transition-colors duration-300">
                        <h3 className="text-gold font-bold text-xl mb-3">Premium Beauty</h3>
                        <p className="text-text-primary/80 text-sm leading-relaxed">
                            Comprehensive grooming and aesthetic treatments designed to refine your appearance and boost confidence.
                        </p>
                    </div>
                    <div className="bg-surface/40 backdrop-blur-md border border-surface/50 p-8 rounded-xl shadow-lg hover:border-gold/30 transition-colors duration-300">
                        <h3 className="text-gold font-bold text-xl mb-3">Restorative Facials</h3>
                        <p className="text-text-primary/80 text-sm leading-relaxed">
                            Deep-cleansing and rejuvenating skin therapies tailored specifically for men&apos;s skincare needs.
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="pt-8 border-t border-surface/30">
                    <Link
                        href="/services"
                        className="inline-block bg-gold hover:bg-gold-light text-background px-10 py-4 font-bold uppercase tracking-widest text-xs transition-all duration-300 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]"
                    >
                        Explore Our Services
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}