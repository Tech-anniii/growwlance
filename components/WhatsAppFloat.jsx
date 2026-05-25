"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "919243467007";
const whatsappMessage =
  "Hi Growwlance Team, I visited your website and want to discuss a project. Please share the next steps.";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.9, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_18px_40px_rgba(34,197,94,0.35)] transition-colors hover:bg-green-600 md:bottom-6 md:right-6 md:h-16 md:w-16"
    >
      <FaWhatsapp className="h-7 w-7 md:h-8 md:w-8" />
      <span className="sr-only">Chat with Growwlance on WhatsApp</span>
    </motion.a>
  );
}