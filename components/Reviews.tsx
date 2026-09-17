"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Link from "next/link";

export default function Reviews() {
  const reviews = [
    {
      name: "Tamil Selvan",
      text: "Amazing service, very professional and friendly staff!",
    },
    {
      name: "Mohan",
      text: "Great ambience and good customer handling Satisfied with their hairstyling.",
    },
    {
      name: "Aaron Chellaya",
      text: "I've been getting my haircuts at this salon for the past two years, and the experience has always been excellent. The service is consistent, professional, and truly focused on customer satisfaction. I also chose this salon for my wedding grooming and makeup, and I was more than happy with the results. Everything was done with great attention to detail, and I felt confident and well-prepared on my big day. Fully satisfied and highly recommend this salon for anyone looking for quality grooming services.",
    },
    {
      name: "Barani Dharan",
      text: "Came for a haircut and completely satisfied, last time my hair cut went miserably failed in chennai and I came here for correction and completely satisfied with the service. Highly recommended.",
    },
    {
      name: "Harish",
      text: "Service is so good and used only branded products for both facial and Hair colouring.",
    },
  ];

  return (
    <section id="reviews" className="py-20 md:py-32 relative bg-background overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-gold uppercase tracking-[0.25em] text-xs font-bold mb-4 block"
          >
            Client Testimonials
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif font-light text-4xl md:text-5xl text-text-primary tracking-tight mb-8"
          >
            Word on the <span className="font-medium">Street</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/leave-review"
              className="inline-block bg-transparent border border-gold text-gold hover:bg-gold hover:text-background font-medium py-3 px-8 rounded-full transition-all duration-300 uppercase tracking-widest text-xs"
            >
              Leave a Review
            </Link>
          </motion.div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="break-inside-avoid bg-surface/50 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-text-muted font-light leading-loose tracking-wide mb-6 text-[0.95rem]">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center gap-3 border-t border-gold/10 pt-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-serif font-medium">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-text-primary font-medium text-sm tracking-wide">
                    {review.name}
                  </h4>
                  <span className="text-text-muted/60 text-xs flex items-center gap-1 mt-0.5">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                      alt="Google"
                      className="w-3 h-3 grayscale opacity-70"
                    />
                    Google Review
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}