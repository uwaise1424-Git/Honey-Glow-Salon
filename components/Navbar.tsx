"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll to trigger the frosted glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Story", href: "/our-story" },
    { name: "Process", href: "/process" },
    { name: "Services", href: "/services" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled
        ? "bg-surface/90 backdrop-blur-md border-b border-gold/20 py-4 shadow-lg"
        : "bg-transparent border-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="font-serif font-bold text-2xl text-gold tracking-wider drop-shadow-md">
          Honey Glow
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-text-primary hover:text-gold transition-colors font-medium text-sm uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/917449223356?text=Hi%2C%20I%27d%20like%20to%20enquire."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gold hover:bg-gold-light text-background font-semibold py-2.5 px-6 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm tracking-wide">Contact Us</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gold p-2 hover:bg-white/5 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay (Animated) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-surface/95 backdrop-blur-xl border-b border-gold/20 shadow-2xl py-6 px-6 flex flex-col gap-6"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-text-primary hover:text-gold transition-colors font-medium text-lg tracking-wide"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/917449223356?text=Hi%2C%20I%27d%20like%20to%20enquire."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-background font-semibold py-3.5 px-6 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}