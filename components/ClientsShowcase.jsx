"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ClientsShowcase() {
  return (
    <section className="px-6 md:px-16 py-28 bg-[#0B0F19]">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-pink-500 uppercase tracking-[0.3em] text-sm">
          Trusted By
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mt-4">
          Brands We’ve Worked With
        </h2>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          Helping startups, local businesses, and modern brands grow through
          strategy, design, and performance marketing.
        </p>
      </motion.div>

      {/* Images */}
      <div className="mt-20 space-y-10">
        {/* First Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
          overflow-hidden
          rounded-[40px]
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          shadow-[0_20px_80px_rgba(0,0,0,0.4)]
          "
        >
          <Image
            src="/works/clients.jpeg"
            alt="Clients"
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Second Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="
          overflow-hidden
          rounded-[40px]
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          shadow-[0_20px_80px_rgba(0,0,0,0.4)]
          "
        >
          <Image
            src="/works/clients-2.jpeg"
            alt="Clients"
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
