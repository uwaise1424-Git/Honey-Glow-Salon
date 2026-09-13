"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "Do I need to book an appointment?",
      answer: "We currently do not take online bookings. Walk-ins are always welcome, and you can also give us a call or send a WhatsApp message to check current wait times.",
    },
    {
      question: "What are your working hours?",
      answer: "We are open from 7:30 AM to 9:00 PM on Mondays and Wednesday through Sunday. We are closed on Tuesdays, except during festivals.",
    },
    {
      question: "Do you offer services for kids?",
      answer: "Yes, we offer professional haircuts and styling for children. Our staff is highly experienced in providing a comfortable and quick service for kids.",
    },
    {
      question: "What kind of products do you use?",
      answer: "We use only premium, salon-grade grooming products, including specialized L'Oréal color treatments and top-tier styling clays and pomades to ensure the best results.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.25em] text-xs font-bold mb-4 block"
          >
            Got Questions?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.2 }}
            className="font-serif font-light text-4xl md:text-5xl text-text-primary tracking-tight"
          >
            Frequently Asked <span className="font-medium">Questions</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface/30 border border-white/5 p-8 rounded-2xl hover:border-gold/20 transition-colors duration-300 group"
            >
              <h3 className="text-lg font-medium text-text-primary mb-4 flex items-start gap-3">
                <Plus className="w-5 h-5 text-gold shrink-0 mt-0.5 group-hover:rotate-90 transition-transform duration-300" />
                {faq.question}
              </h3>
              <p className="text-text-muted font-light leading-relaxed pl-8">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
