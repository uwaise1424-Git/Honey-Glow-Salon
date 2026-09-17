import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function OurStoryPage() {
    return (
        <main className="relative min-h-screen text-text-primary flex flex-col pt-32 pb-0">


            {/* Navbar sits on top */}
            <div className="relative z-20">
                <Navbar />
            </div>

            {/* 2. Page Content */}
            <section className="relative z-10 flex-1 max-w-6xl mx-auto px-6 w-full">

                {/* Accent Line */}
                <div className="border-l-2 border-gold pl-4 mb-6 text-xs font-bold tracking-[0.2em] text-gold uppercase drop-shadow-md">
                    Established 2020
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-10 leading-[1.1] drop-shadow-lg">
                    More Than <br />
                    <span className="text-gold font-serif italic font-light">Just a Salon.</span>
                </h1>

                {/* Quick Stats Bar */}
                <div className="flex flex-wrap gap-x-8 gap-y-4 mb-16 py-6 border-y border-surface/30 text-text-muted font-medium tracking-wider text-xs md:text-sm uppercase">
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

                {/* The Narrative - Visual Layout */}
                <div className="space-y-16 mb-24 max-w-4xl mx-auto">
                    {/* Section 1 */}
                    <div className="space-y-6 text-center drop-shadow-md">
                        <h2 className="text-3xl md:text-4xl font-serif text-gold mb-6">A Grooming Sanctuary</h2>
                        <p className="font-description font-light italic text-zinc-300 leading-loose text-lg md:text-xl drop-shadow-lg">
                            Since opening its doors in 2020, Honey Glow Men&apos;s Salon has grown from a singular vision into Walajapet&apos;s premier grooming sanctuary. We didn&apos;t just want to create a place for haircuts; we set out to build an environment where men could unwind, reset, and elevate their personal style. It is a space built on a foundation of experience, unwavering trust, artistic creativity, and genuine personal connection.
                        </p>
                    </div>

                    {/* Section 2 */}
                    <div className="space-y-6 text-center pt-8 border-t border-white/5 drop-shadow-md">
                        <h2 className="text-3xl md:text-4xl font-serif text-gold mb-6">Mastery & Precision</h2>
                        <p className="font-description font-light italic text-zinc-300 leading-loose text-lg md:text-xl drop-shadow-lg">
                            With founder Ramalingam&apos;s two decades of rigorous industry knowledge behind it, every service at Honey Glow is executed with absolute mastery. We believe that true grooming is a personal craft—an art form that requires patience, skill, and a meticulous eye for detail. From classic executive cuts and flawless beard sculpting to advanced skin rejuvenation, we cater to the nuanced needs of the modern man.
                        </p>
                        <p className="font-description font-light italic text-zinc-300 leading-loose text-lg md:text-xl drop-shadow-lg">
                            At Honey Glow, the atmosphere is as crucial as the service. We have designed our salon to be a haven of masculine luxury, featuring premium seating, ambient lighting, and top-tier grooming products sourced from the finest brands.
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="flex justify-center pt-8 mb-24 border-t border-surface/30">
                    <Link
                        href="/services"
                        className="inline-block bg-gold hover:bg-gold-light text-background px-10 py-4 font-bold uppercase tracking-widest text-xs transition-all duration-300 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]"
                    >
                        Explore Our Services
                    </Link>
                </div>
            </section>
            

            <div className="relative z-10">
                <Footer />
            </div>
        </main>
    );
}