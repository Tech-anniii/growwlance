"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";

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
    <nav className="fixed top-0 left-0 w-full z-50">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#050816]/70 backdrop-blur-2xl border-b border-white/10" />

      {/* GLOW EFFECT */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-20 w-40 h-40 bg-amber-500/10 blur-3xl" />
        <div className="absolute top-0 right-20 w-40 h-40 bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            className="group flex items-center gap-2 max-w-[12rem] sm:max-w-none"
          >
            {/* <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-700 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.35)]">
              <Sparkles className="w-5 h-5 text-white" />
            </div> */}

            <div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-none">
                Growwlance
                <span className="text-amber-500">.</span>
              </h1>

              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 -mt-1">
                Digital Growth Agency
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-2 bg-white/[0.03] border border-white/10 rounded-full px-3 py-2 backdrop-blur-xl">

            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="relative px-5 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group"
              >
                <span className="relative z-10">
                  {link.name}
                </span>

                {/* HOVER BG */}
                <span className="absolute inset-0 rounded-full bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300" />

                {/* UNDERLINE */}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-amber-500 to-orange-600 group-hover:w-8 transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-4">

            {/* CTA BUTTON */}
            <Link
              href="/contact"
              className="group relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-700 text-white font-semibold shadow-[0_0_30px_rgba(245,158,11,0.35)] hover:scale-105 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />

              <span className="relative z-10">
                Book Call
              </span>

              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-11 h-11 rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl flex items-center justify-center text-white"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 sm:mt-5 overflow-hidden rounded-[28px] sm:rounded-[32px] border border-white/10 bg-[#0B0F19]/95 backdrop-blur-2xl"
            >
              {/* GLOW */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 blur-3xl" />

              <div className="relative z-10 p-6">

                {/* LINKS */}
                <div className="space-y-2">

                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between px-4 sm:px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-all duration-300"
                    >
                      <span className="text-gray-300 group-hover:text-white transition">
                        {link.name}
                      </span>

                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-amber-500 group-hover:translate-x-1 transition" />
                    </Link>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="group mt-6 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-700 text-white font-semibold shadow-[0_0_30px_rgba(245,158,11,0.35)]"
                >
                  Book Free Strategy Call

                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}