"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Zap, Shield, Palette } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const benefits = [
  {
    icon: Sparkles,
    title: "Stunning Visual Experiences",
    description: "Create immersive, eye-catching interfaces that captivate your audience from the first glance.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Performance",
    description: "Optimized rendering ensures smooth 60fps animations without compromising user experience.",
  },
  {
    icon: Palette,
    title: "Fully Customizable Design",
    description: "Adapt every color, motion, and element to perfectly match your unique brand identity.",
  },
  {
    icon: Shield,
    title: "Production-Ready Quality",
    description: "Built with best practices and tested across devices for reliable, professional results.",
  },
];

export function BenefitsSection() {
  return (
    <section className="relative bg-black">
      <ContainerScroll
        titleComponent={
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-4">
              Why Choose Our Solution
            </h2>
            <p className="text-lg text-cyan-100/70 font-cormorant max-w-2xl mx-auto">
              Transform your digital presence with cutting-edge technology designed for creators who demand excellence.
            </p>
          </div>
        }
      >
        <div className="relative h-full w-full bg-gradient-to-br from-black via-cyan-950/20 to-pink-950/20 p-4 md:p-6">
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/10 hover:border-pink-400/30 transition-all duration-300"
                >
                  {/* Gradient Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-cyan-500/5 group-hover:via-pink-500/5 group-hover:to-orange-500/5 rounded-xl transition-all duration-300" />
                  
                  <div className="relative flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/20 via-pink-400/20 to-orange-400/20 flex items-center justify-center border border-pink-400/30 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-cyan-300" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-playfair font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-cyan-50/70 font-cormorant leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Check Mark */}
                    <CheckCircle2 className="w-5 h-5 text-pink-400/60 flex-shrink-0 mt-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-6">
            <p className="text-cyan-100/60 font-cormorant mb-3 text-sm">
              Ready to elevate your project?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 via-pink-400 to-orange-400 text-black font-cormorant font-semibold shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-all duration-300"
            >
              Start Your Journey
            </motion.button>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
