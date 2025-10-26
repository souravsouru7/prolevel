"use client";

import { ArrowUp, Mail, Twitter, Instagram, Linkedin, Github, Facebook, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

const navigation = {
  categories: [
    {
      id: "main",
      name: "Main",
      sections: [
        {
          id: "about",
          name: "About",
          items: [
            { name: "About", href: "#about" },
            { name: "Features", href: "#features" },
            { name: "Pricing", href: "#pricing" },
          ],
        },
        {
          id: "products",
          name: "Products",
          items: [
            { name: "Explore", href: "#explore" },
            { name: "Testimonials", href: "#testimonials" },
            { name: "FAQ", href: "#faq" },
          ],
        },
        {
          id: "resources",
          name: "Resources",
          items: [
            { name: "Documentation", href: "#docs" },
            { name: "Blog", href: "#blog" },
            { name: "Support", href: "#support" },
          ],
        },
        {
          id: "company",
          name: "Company",
          items: [
            { name: "Contact", href: "#contact" },
            { name: "Terms", href: "#terms" },
            { name: "Privacy", href: "#privacy" },
          ],
        },
      ],
    },
  ],
};

const Underline = "hover:-translate-y-1 border border-dotted border-white/20 rounded-xl p-2.5 transition-transform hover:border-pink-400/30";

const Footer = () => {
  return (
    <footer className="border-white/10 mx-auto w-full border-t bg-black">
      {/* Top Section */}
      <div className="relative mx-auto grid max-w-7xl items-center justify-center gap-4 p-4 pb-0 md:flex">
        <Link href="/">
          <div className="flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
        </Link>
        <p className="bg-transparent text-center text-xs leading-4 text-cyan-100/60 md:text-left font-cormorant">
          Welcome to our platform, where creativity meets innovation. We transform ideas into compelling visual experiences with cutting-edge technology. Specializing in immersive digital experiences and engaging animations that resonate with your audience. Our mission is to empower creators to stand out in a crowded market through the power of design, emotion, and meaningful connections.
        </p>
      </div>

      {/* Navigation Links */}
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="border-b border-dotted border-white/10"></div>
        <div className="py-4">
          {navigation.categories.map((category) => (
            <div
              key={category.name}
              className="grid grid-cols-2 flex-row justify-between gap-6 leading-6 md:flex md:grid-cols-4"
            >
              {category.sections.map((section) => (
                <div key={section.name}>
                  <h3 className="text-sm font-playfair font-semibold text-white mb-3">{section.name}</h3>
                  <ul
                    role="list"
                    className="flex flex-col space-y-2"
                  >
                    {section.items.map((item) => (
                      <li key={item.name} className="flow-root">
                        <Link
                          href={item.href}
                          className="text-sm text-cyan-100/60 hover:text-cyan-300 transition-colors font-cormorant"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="border-b border-dotted border-white/10"></div>
      </div>

      {/* Social Links & Scroll to Top */}
      <div className="flex flex-wrap justify-center gap-y-2 py-4">
        <div className="flex flex-wrap items-center justify-center gap-4 gap-y-2 px-6">
          <Link
            aria-label="Email"
            href="mailto:contact@luxe.com"
            className={Underline}
          >
            <Mail className="h-5 w-5 text-cyan-300 hover:text-pink-400 transition-colors" />
          </Link>
          <Link
            aria-label="Twitter"
            href="#"
            className={Underline}
          >
            <Twitter className="h-5 w-5 text-cyan-300 hover:text-pink-400 transition-colors" />
          </Link>
          <Link
            aria-label="Instagram"
            href="#"
            className={Underline}
          >
            <Instagram className="h-5 w-5 text-cyan-300 hover:text-pink-400 transition-colors" />
          </Link>
          <Link
            aria-label="LinkedIn"
            href="#"
            className={Underline}
          >
            <Linkedin className="h-5 w-5 text-cyan-300 hover:text-pink-400 transition-colors" />
          </Link>
          <Link
            aria-label="GitHub"
            href="#"
            className={Underline}
          >
            <Github className="h-5 w-5 text-cyan-300 hover:text-pink-400 transition-colors" />
          </Link>
          <Link
            aria-label="Facebook"
            href="#"
            className={Underline}
          >
            <Facebook className="h-5 w-5 text-cyan-300 hover:text-pink-400 transition-colors" />
          </Link>
        </div>
        
        {/* Scroll to Top */}
        <button
          type="button"
          onClick={handleScrollTop}
          className="rounded-full p-2.5 bg-gradient-to-br from-cyan-400/20 via-pink-400/20 to-orange-400/20 border border-pink-400/30 text-cyan-300 hover:text-pink-400 transition-all hover:scale-110"
        >
          <ArrowUp className="h-4 w-4" />
          <span className="sr-only">Scroll to top</span>
        </button>
      </div>

      {/* Copyright */}
      <div className="mx-auto flex flex-col justify-between text-center text-xs md:max-w-7xl pb-2">
        <div className="flex flex-row items-center justify-center gap-1 text-cyan-100/60 font-cormorant">
          <span>©</span>
          <span>{new Date().getFullYear()}</span>
          <span>Made with</span>
          <Heart className="text-pink-400 mx-1 h-4 w-4 animate-pulse fill-pink-400" />
          <span>by</span>
          <span className="hover:text-cyan-300 cursor-pointer text-white">
            <Link
              aria-label="Creator"
              className="font-bold"
              href="#"
            >
              Our Team
            </Link>
          </span>
          <span>-</span>
          <span className="hover:text-pink-400 cursor-pointer">
            <Link aria-label="Home" href="/">
              All rights reserved
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
