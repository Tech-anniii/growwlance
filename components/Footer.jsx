import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F19] text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Growwlance<span className="text-amber-500">.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            We help businesses scale with performance marketing, data-driven strategies,
            and high-converting funnels.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://facebook.com/growwlance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-500 transition"
              title="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/growlancee.in?igsh=N2FwZmF4Z3kxczl3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition"
              title="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/growwlance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-600 transition"
              title="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://wa.me/919243467007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition"
              title="WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/team" className="hover:text-white">Team</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>Google Ads</li>
            <li>Facebook Ads</li>
            <li>SEO Optimization</li>
            <li>Funnel Building</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">

            <li className="flex items-center gap-2">
              <Mail size={16} /> info@Growwlance.com
            </li>

            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 9243467007
            </li>

            <li className="flex items-center gap-2">
              <MapPin size={16} /> India
            </li>
          </ul>

          {/* CTA */}
          <Link href="/contact" className="mt-5 block w-full px-4 py-2 rounded-xl bg-linear-to-r from-amber-500 to-stone-700 text-white hover:scale-105 transition text-center">
            Book Free Call
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Growwlance Media. All rights reserved.
      </div>
    </footer>
  );
}