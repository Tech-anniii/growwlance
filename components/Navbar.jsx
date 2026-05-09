"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Works", href: "/works" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-wide">
          <span className="text-white">Growwlance</span>
          <span className="text-amber-500">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}

          {/* CTA Button */}
          <Link href="/contact" className="px-5 py-2 rounded-xl bg-linear-to-r from-amber-500 to-stone-700 hover:scale-105 transition font-medium inline-block">
            Book Call
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#0B0F19] border-t border-white/10 px-6 py-6 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Link href="/contact" className="block w-full mt-4 px-5 py-3 rounded-xl bg-linear-to-r from-amber-500 to-stone-700 text-center">
              Book Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}