"use client";

import { FaqAccordion } from "@/components/ui/faq-chat-accordion";

const faqData = [
  {
    id: 1,
    question: "How does the performance optimization work?",
    answer: "Our solution uses advanced rendering techniques and lazy loading to ensure 60fps animations even on mobile devices, resulting in lightning-fast performance."
  },
  {
    id: 2,
    question: "Can I customize the colors and design?",
    answer: "Absolutely! Every element is fully customizable through props and CSS. You have complete control over colors, animations, and styling to match your brand perfectly."
  },
  {
    id: 3,
    question: "Is it production-ready?",
    answer: "Yes! Built with industry best practices, tested across all major browsers and devices. It's enterprise-grade and ready for production deployment."
  },
  {
    id: 4,
    question: "What makes this solution unique?",
    answer: "The combination of stunning visuals, optimized performance, and complete customization sets us apart. Plus, you get dedicated support and regular updates."
  },
  {
    id: 5,
    question: "Do you provide support and documentation?",
    answer: "Yes! We offer comprehensive documentation, video tutorials, and dedicated support to help you get the most out of your investment."
  }
];

export function FAQSection() {
  return (
    <section className="relative bg-black py-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/5 to-black pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-cyan-100/70 font-cormorant text-lg max-w-2xl mx-auto">
            Find answers to common questions about our graphic assets, components, and licensing.
          </p>
        </div>

        <FaqAccordion
          data={faqData}
          timestamp={null}
          questionClassName="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-pink-400/30 data-[state=open]:border-cyan-400/50 data-[state=open]:bg-gradient-to-br data-[state=open]:from-cyan-500/10 data-[state=open]:via-pink-500/10 data-[state=open]:to-orange-500/10 transition-all duration-300 rounded-xl p-4 text-white font-playfair"
          answerClassName="bg-gradient-to-r from-cyan-400 via-pink-400 to-orange-400 text-black font-cormorant"
        />
      </div>
    </section>
  );
}
