"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader({ isVisible }) {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#0B0F19]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.12),transparent_35%),radial-gradient(circle_at_bottom,rgba(92,64,51,0.18),transparent_30%)]" />
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <div className="rounded-full border border-white/10 bg-linear-to-br from-amber-500/20 to-stone-700/20 p-4 shadow-[0_0_40px_rgba(245,158,11,0.15)] backdrop-blur-md">
          <Image
            src="/home/Growwlance%20Logo.jpeg"
            alt="Growwlance Logo"
            width={96}
            height={96}
            className="rounded-2xl"
            priority
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Growwlance Media</h1>
          <p className="mt-2 text-sm tracking-[0.3em] text-amber-300 uppercase">Building Digital Growth Systems</p>
        </div>
      </div>
    </motion.div>
  );
}
