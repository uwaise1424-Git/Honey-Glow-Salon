"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle, ArrowRight, Copy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LeaveReviewPage() {
    const [rating, setRating] = useState(5);
    const [hoverRating, setHoverRating] = useState(0);
    const [reviewText, setReviewText] = useState("");
    const [submitted, setSubmitted] = useState(false);

    // This link automatically opens Google Maps directly to Honey Glow in Walajapet
    const GOOGLE_MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Honey+Glow+Mens+Salon+And+Tattoo+Walajapet";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!reviewText.trim()) return;

        // Automatically copy their text to their clipboard so they don't have to re-type it
        navigator.clipboard.writeText(reviewText);
        setSubmitted(true);
    };

    return (
        <main className="bg-background min-h-screen flex flex-col pt-32">
            <Navbar />

            <div className="flex-1 container mx-auto px-6 max-w-2xl mb-24 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full bg-surface/50 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

                    {!submitted ? (
                        <div>
                            <div className="text-center mb-10">
                                <span className="text-gold uppercase tracking-[0.25em] text-xs font-bold mb-3 block">
                                    Honey Glow Men&apos;s Salon
                                </span>
                                <h1 className="font-serif font-light text-3xl md:text-4xl text-text-primary tracking-tight">
                                    Leave a <span className="font-medium text-gold">Review</span>
                                </h1>
                                <p className="text-text-muted text-sm font-light mt-2">
                                    We value your feedback. Let Ramalingam know about your experience.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="flex flex-col items-center">
                                    <label className="text-text-muted text-xs uppercase tracking-widest mb-3">
                                        Tap to Rate
                                    </label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                type="button"
                                                key={star}
                                                onClick={() => setRating(star)}
                                                onMouseEnter={() => setHoverRating(star)}
                                                onMouseLeave={() => setHoverRating(0)}
                                                className="p-1 focus:outline-none transition-transform hover:scale-110"
                                            >
                                                <Star
                                                    className={`w-8 h-8 ${star <= (hoverRating || rating)
                                                            ? "fill-gold text-gold"
                                                            : "text-text-muted/30"
                                                        }`}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-text-primary text-sm font-medium mb-2 tracking-wide">
                                        Your Experience
                                    </label>
                                    <textarea
                                        rows={5}
                                        value={reviewText}
                                        onChange={(e) => setReviewText(e.target.value)}
                                        placeholder="How was your haircut, shave, or facial? Tell us what you loved..."
                                        required
                                        className="w-full bg-background/50 border border-gold/20 rounded-xl p-4 text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-gold transition-colors font-light text-sm"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gold hover:bg-gold-light text-background font-semibold py-4 rounded-xl transition-all duration-300 uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                                >
                                    Continue to Google <ArrowRight className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-8"
                        >
                            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 text-gold">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                            <h2 className="font-serif text-3xl text-text-primary mb-4 font-light">
                                Text Copied!
                            </h2>
                            <p className="text-text-muted font-light text-sm leading-relaxed mb-8 max-w-md mx-auto">
                                We have copied your review to your clipboard. Click the button below to open Google Maps, tap the <strong>Reviews</strong> tab, and simply hit paste!
                            </p>

                            <a
                                href={GOOGLE_MAPS_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-background font-semibold py-4 px-8 rounded-xl transition-all duration-300 uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                                    alt="Google"
                                    className="w-4 h-4"
                                />
                                Open Google Maps
                            </a>
                        </motion.div>
                    )}
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}