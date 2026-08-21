"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Works", href: "/works" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close mobile menu with Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      {/* NAV BACKGROUND */}
      <div
        className="absolute inset-0 border-b border-white/10 bg-[#050816]/75 backdrop-blur-2xl"
        aria-hidden="true"
      />

      {/* AMBIENT GLOW */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-20 h-40 w-40 bg-amber-500/10 blur-3xl" />
        <div className="absolute top-0 right-20 h-40 w-40 bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* LOGO */}
          <Link
            href="/"
            aria-label="Growwlance - Go to homepage"
            className="group flex max-w-[12rem] items-center gap-2 rounded-xl outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-amber-400 sm:max-w-none"
          >
            <div>
              <p className="text-xl font-black leading-none tracking-tight text-white sm:text-2xl">
                Growwlance
                <span className="text-amber-500">.</span>
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.28em] text-gray-500 sm:text-[10px] sm:tracking-[0.3em]">
                Digital Growth Agency
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-2 backdrop-blur-xl lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                    active
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {/* Active / Hover Background */}
                  <span
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      active
                        ? "scale-100 bg-white/[0.07]"
                        : "scale-0 bg-white/[0.05] group-hover:scale-100"
                    }`}
                  />

                  <span className="relative z-10">
                    {link.name}
                  </span>

                  {/* Active / Hover Indicator */}
                  <span
                    className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-300 ${
                      active
                        ? "w-8"
                        : "w-0 group-hover:w-8"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden items-center lg:flex">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 to-orange-700 px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all duration-300 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />

              <span className="relative z-10">
                Start a Project
              </span>

              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white backdrop-blur-xl transition hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative mt-4 overflow-hidden rounded-[28px] border border-white/10 bg-[#0B0F19]/95 p-3 shadow-2xl backdrop-blur-2xl sm:mt-5 sm:rounded-[32px] sm:p-4 lg:hidden"
            >
              {/* MOBILE MENU GLOW */}
              <div
                className="pointer-events-none absolute top-0 right-0 h-40 w-40 bg-amber-500/10 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* NAVIGATION LINKS */}
                <div className="space-y-2">
                  {navLinks.map((link) => {
                    const active = isActive(link.href);

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={`group flex items-center justify-between rounded-2xl border px-4 py-4 transition-all duration-300 sm:px-5 ${
                          active
                            ? "border-amber-500/20 bg-amber-500/10"
                            : "border-white/5 bg-white/[0.03] hover:bg-white/[0.06]"
                        }`}
                      >
                        <span
                          className={`font-medium transition ${
                            active
                              ? "text-amber-300"
                              : "text-gray-300 group-hover:text-white"
                          }`}
                        >
                          {link.name}
                        </span>

                        <ArrowRight
                          className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${
                            active
                              ? "text-amber-400"
                              : "text-gray-500 group-hover:text-amber-500"
                          }`}
                        />
                      </Link>
                    );
                  })}
                </div>

                {/* MOBILE CTA */}
                <Link
                  href="/contact"
                  className="group mt-5 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-700 px-6 py-4 font-semibold text-white shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all duration-300 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                >
                  Start Your Project

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}