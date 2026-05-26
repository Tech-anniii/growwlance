"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Send } from "lucide-react";

export default function ReviewSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative px-5 sm:px-6 md:px-16 py-20 sm:py-24 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 left-0 w-[240px] sm:w-[350px] h-[240px] sm:h-[350px] bg-amber-500/10 blur-[100px]" />

        <div className="absolute bottom-0 right-0 w-[240px] sm:w-[350px] h-[240px] sm:h-[350px] bg-orange-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* REVIEW CARD */}
        <motion.div
          whileHover={{ y: -5 }}
          className="relative overflow-hidden rounded-[28px] sm:rounded-[36px]
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-2xl
          p-6 sm:p-8 md:p-10 text-center"
        >

          {/* GLOW */}
          <div className="absolute -top-20 -right-20 w-52 h-52 bg-amber-500/10 blur-3xl" />

          <div className="relative z-10">

            {/* STARS */}
            <div className="flex items-center justify-center gap-2">

              {[...Array(5)].map((_, idx) => (
                <Star
                  key={idx}
                  className="w-5 h-5 text-amber-400 fill-amber-400"
                />
              ))}
            </div>

            {/* TITLE */}
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black leading-tight">

              Loved Working

              <span className="block bg-gradient-to-r from-amber-300 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                With Growwlance?
              </span>
            </h2>

            {/* DESC */}
            <p className="mt-5 text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Share your experience and help other businesses
              discover Growwlance.
            </p>

            {/* BUTTON */}
            <button
              onClick={() => setShowForm(!showForm)}
              className="mt-10 group inline-flex items-center gap-3 px-6 sm:px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-700 text-white font-semibold shadow-[0_0_35px_rgba(245,158,11,0.3)] hover:scale-105 transition-all duration-300"
            >

              {showForm ? "Close Review Form" : "Write A Review"}

              <Send className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>

            {/* FORM */}
            <AnimatePresence>

              {showForm && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="mt-10 text-left"
                >

                  <form className="space-y-5">

                    {/* NAME */}
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-amber-500 transition"
                    />

                    {/* REVIEW */}
                    <textarea
                      rows={4}
                      placeholder="Write your feedback..."
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-amber-500 transition resize-none"
                    />

                    {/* SUBMIT */}
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] text-white transition-all duration-300"
                    >

                      Submit Review

                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}