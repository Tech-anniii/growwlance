"use client";

import Link from "next/link";

import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050816] border-t border-white/10 text-gray-400">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amber-500/5 blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* MAIN FOOTER */}
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-14">
          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-black text-white">
              Growwlance
              <span className="text-amber-400">.</span>
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Helping brands grow through modern digital marketing,
              performance-driven strategies, AI automation systems, and premium
              digital experiences.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.facebook.com/share/1CdA4VHAgm/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-amber-500 hover:border-amber-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaFacebookF className="text-white text-lg" />
              </a>

              <a
                href="https://www.instagram.com/growlance.in?igsh=MWh4ZzM5NmpleGc4eg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-orange-500 hover:border-orange-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaInstagram className="text-white text-lg" />
              </a>

              <a
                href="https://www.linkedin.com/company/growwlance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-yellow-500 hover:border-yellow-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaLinkedinIn className="text-white text-lg" />
              </a>

              <a
                href="https://wa.me/919243467007"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-green-500 hover:border-green-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaWhatsapp className="text-white text-lg" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>

            <ul className="space-y-4">
              {[
                ["Home", "/"],
                ["Services", "/services"],
                ["Team", "/team"],
                ["Works", "/works"],
                ["Contact", "/contact"],
              ].map(([name, link], i) => (
                <li key={i}>
                  <Link
                    href={link}
                    className="group inline-flex items-center gap-2 hover:text-white transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Services</h3>

            <ul className="space-y-4">
              {[
                "Performance Marketing",
                "SEO & Local Marketing",
                "Website Development",
                "AI Automation Systems",
                "Social Media Marketing",
                "Graphic Design",
              ].map((service, i) => (
                <li
                  key={i}
                  className="hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>

            <div className="space-y-5">
              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-amber-400" />
                </div>

                <div>
                  <p className="text-white font-medium">Email</p>

                  <p className="text-sm text-gray-400 mt-1">
                    agencygrowlance@gmail.com
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-orange-400" />
                </div>

                <div>
                  <p className="text-white font-medium">Phone</p>

                  <p className="text-sm text-gray-400 mt-1">+91 9243467007</p>

                  <p className="text-sm text-gray-400">+91 7652313169</p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                </div>

                <div>
                  <p className="text-white font-medium">Location</p>

                  <p className="text-sm text-gray-400 mt-1">India</p>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-700 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.35)]"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3 text-center">
            <p className="text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} Growwlance. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
