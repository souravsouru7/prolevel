"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Award, Users, TrendingUp, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Creative Director",
    company: "Design Studio Pro",
    image: "https://i.pravatar.cc/150?img=1",
    content: "This transformed our entire workflow. The animations are buttery smooth and our clients are absolutely blown away by the results.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Lead Developer",
    company: "Tech Innovations Inc",
    image: "https://i.pravatar.cc/150?img=13",
    content: "Performance is incredible. We've seen a 40% increase in user engagement since implementing this solution.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "StartUp Ventures",
    image: "https://i.pravatar.cc/150?img=5",
    content: "The customization options are endless. We were able to perfectly match our brand identity without any compromises.",
    rating: 5,
  },
];

const clients = [
  { name: "Client 1", logo: "/logo.png" },
  { name: "Client 2", logo: "/logo.png" },
  { name: "Client 3", logo: "/logo.png" },
  { name: "Client 4", logo: "/logo.png" },
  { name: "Client 5", logo: "/logo.png" },
  { name: "Client 6", logo: "/logo.png" },
];

const stats = [
  { icon: Users, value: "10K+", label: "Happy Clients" },
  { icon: Star, value: "4.9/5", label: "Average Rating" },
  { icon: Award, value: "15+", label: "Awards Won" },
  { icon: TrendingUp, value: "98%", label: "Success Rate" },
];

export function SocialProofSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-20 px-6 bg-black overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/5 to-black pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-4">
            Trusted by Creators Worldwide
          </h2>
          <p className="text-lg text-cyan-100/70 font-cormorant max-w-2xl mx-auto">
            Join thousands of satisfied clients who&apos;ve transformed their digital presence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 via-pink-400/20 to-orange-400/20 border border-pink-400/30 mb-3">
                  <Icon className="w-6 h-6 text-cyan-300" />
                </div>
                <h3 className="text-3xl font-playfair font-bold text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm text-cyan-100/60 font-cormorant">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Modern Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
                {/* Quote Icon */}
                <Quote className="w-16 h-16 text-pink-400/20 absolute top-8 left-8" />
                
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-6 h-6 fill-orange-400 text-orange-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-2xl md:text-3xl font-cormorant text-white/90 mb-8 leading-relaxed italic">
                    &quot;{testimonials[activeTestimonial].content}&quot;
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      className="w-16 h-16 rounded-full border-2 border-gradient-to-r from-cyan-400 to-pink-400"
                    />
                    <div>
                      <h4 className="text-xl font-playfair font-bold bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-cyan-100/60 font-cormorant">
                        {testimonials[activeTestimonial].role} at {testimonials[activeTestimonial].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400/20 to-pink-400/20 border border-pink-400/30 flex items-center justify-center hover:from-cyan-400/30 hover:to-pink-400/30 transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-cyan-300" />
            </motion.button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "w-8 bg-gradient-to-r from-cyan-400 to-pink-400"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400/20 to-pink-400/20 border border-pink-400/30 flex items-center justify-center hover:from-cyan-400/30 hover:to-pink-400/30 transition-all"
            >
              <ChevronRight className="w-6 h-6 text-cyan-300" />
            </motion.button>
          </div>
        </div>

        {/* Client Logos Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-cyan-100/50 font-cormorant text-sm mb-8">
            Trusted by leading brands
          </p>
          <InfiniteSlider gap={24} duration={30} className="py-4">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-32 h-20 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-pink-400/30 transition-all duration-300 px-4"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={100}
                  height={40}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </InfiniteSlider>
        </motion.div>

        {/* Awards Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-white/5 to-white/0 border border-pink-400/30 backdrop-blur-sm">
            <Award className="w-5 h-5 text-orange-400" />
            <span className="text-cyan-100/80 font-cormorant font-medium">
              Award-Winning Design Excellence 2024
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
