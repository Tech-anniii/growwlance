import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Team", href: "/team" },
  { name: "Works", href: "/works" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Performance Marketing",
  "SEO & Local Marketing",
  "Website Development",
  "AI Automation Systems",
  "Social Media Marketing",
  "Graphic Design",
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1CdA4VHAgm/",
    icon: FaFacebookF,
    hoverClass: "hover:bg-blue-600 hover:border-blue-600",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/growlance.in?igsh=MWh4ZzM5NmpleGc4eg==",
    icon: FaInstagram,
    hoverClass: "hover:bg-orange-500 hover:border-orange-500",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/growwlance",
    icon: FaLinkedinIn,
    hoverClass: "hover:bg-blue-500 hover:border-blue-500",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919243467007",
    icon: FaWhatsapp,
    hoverClass: "hover:bg-green-500 hover:border-green-500",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden bg-[#050816] border-t border-white/10 text-gray-400"
      aria-label="Website footer"
    >
      {/* BACKGROUND EFFECTS */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amber-500/5 blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/5 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* MAIN FOOTER */}
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14">
          
          {/* BRAND */}
          <div className="lg:max-w-sm">
            <Link
              href="/"
              aria-label="Growwlance Home"
              className="inline-block"
            >
              <h2 className="text-3xl font-black tracking-tight text-white">
                Growwlance
                <span className="text-amber-400">.</span>
              </h2>
            </Link>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Growwlance is a digital marketing agency helping businesses grow
              through performance marketing, SEO, website development, social
              media marketing, AI automation, branding, and creative digital
              experiences.
            </p>

            {/* SOCIAL LINKS */}
            <div className="flex flex-wrap gap-3 mt-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Growwlance on ${social.name}`}
                    title={`Growwlance on ${social.name}`}
                    className={`w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03]
                    flex items-center justify-center text-white
                    transition-all duration-300 hover:scale-110
                    focus:outline-none focus:ring-2 focus:ring-amber-400/60
                    ${social.hoverClass}`}
                  >
                    <Icon className="text-lg" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* QUICK LINKS */}
          <nav aria-label="Footer navigation">
            <h3 className="text-xl font-bold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <ArrowRight
                      className="w-4 h-4 text-amber-400 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />

                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* SERVICES */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">
              Our Services
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70 group-hover:bg-amber-400 transition-colors" />

                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/services"
              className="group inline-flex items-center gap-2 mt-7 text-sm text-amber-400 hover:text-amber-300 transition"
            >
              Explore all services

              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">
              Contact Growwlance
            </h3>

            <address className="not-italic space-y-5">
              
              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <Mail
                    className="w-5 h-5 text-amber-400"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="text-white font-medium">
                    Email
                  </p>

                  <a
                    href="mailto:agencygrowlance@gmail.com"
                    className="inline-block mt-1 text-sm text-gray-400 hover:text-amber-400 transition-colors break-all"
                  >
                    agencygrowlance@gmail.com
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                  <Phone
                    className="w-5 h-5 text-orange-400"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="text-white font-medium">
                    Phone
                  </p>

                  <a
                    href="tel:+919243467007"
                    className="block mt-1 text-sm text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    +91 92434 67007
                  </a>

                  <a
                    href="tel:+917652313169"
                    className="block text-sm text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    +91 76523 13169
                  </a>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                  <MapPin
                    className="w-5 h-5 text-yellow-400"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="text-white font-medium">
                    Serving Businesses
                  </p>

                  <p className="text-sm text-gray-400 mt-1">
                    India & Worldwide
                  </p>
                </div>
              </div>
            </address>

            {/* CTA */}
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 px-6 py-4 rounded-2xl
              bg-gradient-to-r from-amber-500 to-orange-700
              text-white font-semibold
              shadow-[0_0_30px_rgba(245,158,11,0.25)]
              hover:scale-[1.03]
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              Start Your Project

              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            
            <p className="text-sm text-gray-500">
              © {currentYear} Growwlance. All rights reserved.
            </p>

            <div className="flex items-center gap-5 text-sm text-gray-500">
              <span>Digital Growth Partner</span>

              <span
                className="hidden sm:block w-1 h-1 rounded-full bg-amber-400"
                aria-hidden="true"
              />

              <span>India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}