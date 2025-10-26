"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Next 1", href: "/next1" },
    { name: "Next 2", href: "/next2" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/40 backdrop-blur-xl shadow-lg shadow-cyan-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative h-10 w-auto flex items-center"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={40}
                className="object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative text-white/80 hover:text-white transition-colors duration-300 font-cormorant font-medium cursor-pointer group text-base"
                >
                  {link.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-cyan-400/0 via-pink-400/80 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(236, 72, 153, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 via-pink-400 to-orange-400 text-white font-cormorant font-semibold shadow-lg shadow-pink-500/20 transition-all duration-300 border border-white/10 text-sm"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white/70 hover:text-white transition-colors p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <Link key={index} href={link.href}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-white/70 hover:text-white transition-colors duration-300 font-cormorant font-medium py-2"
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-pink-400 to-orange-400 text-white font-cormorant font-semibold shadow-lg shadow-pink-500/20 border border-white/10"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
