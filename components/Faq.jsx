"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";

const faqs = [
  {
    q: "Do you work with startups?",
    a: "Yes. We help startups and modern businesses scale through growth-focused digital strategies.",
  },

  {
    q: "Do you provide custom marketing plans?",
    a: "Every business is different, so we create tailored growth systems based on your goals.",
  },

  {
    q: "Can you handle both marketing and development?",
    a: "Yes. We provide complete digital solutions including websites, SEO, branding, and paid marketing.",
  },

  {
    q: "How do we start working together?",
    a: "Simply book a strategy call and we’ll discuss your goals and roadmap.",
  },

  {
    q: "Do you offer SEO services?",
    a: "Yes. We provide technical SEO, local SEO, content optimization, and growth strategies.",
  },

  {
    q: "Can you manage social media accounts?",
    a: "Absolutely. We create and manage content, campaigns, and growth strategies across platforms.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 2);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative px-5 sm:px-6 md:px-16 py-20 sm:py-28 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 left-0 w-[240px] sm:w-[400px] h-[240px] sm:h-[400px] bg-amber-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[240px] sm:w-[400px] h-[240px] sm:h-[400px] bg-orange-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center">

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl">

            <Sparkles className="w-4 h-4 text-amber-400" />

            <span className="text-sm text-gray-300">
              FAQ
            </span>
          </div>

          {/* TITLE */}
          <h2 className="mt-8 text-3xl sm:text-4xl md:text-6xl font-black leading-tight">

            Frequently Asked

            <span className="block bg-gradient-to-r from-amber-300 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          {/* DESC */}
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know before working with Growwlance.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="mt-16 space-y-5">

          {visibleFaqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[28px]
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-2xl"
            >

              {/* BUTTON */}
              <button
                onClick={() => toggleIndex(i)}
                className="w-full flex items-center justify-between px-5 sm:px-7 py-5 sm:py-6 text-left"
              >

                <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-100 pr-4">
                  {item.q}
                </span>

                <motion.div
                  animate={{
                    rotate: openIndex === i ? 90 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center"
                >

                  <ChevronRight className="w-5 h-5 text-amber-400" />
                </motion.div>
              </button>

              {/* ANSWER */}
              <AnimatePresence>

                {openIndex === i && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="overflow-hidden"
                  >

                    <div className="px-7 pb-7 text-gray-400 leading-relaxed text-[16px] border-t border-white/5 pt-5">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* SHOW MORE BUTTON */}
        {faqs.length > 2 && (
          <div className="mt-10 flex justify-center">

            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300"
            >

              <span className="font-medium text-gray-200">
                {showAll ? "Show Less" : "Show More Questions"}
              </span>

              <motion.div
                animate={{
                  rotate: showAll ? 90 : 0,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <ChevronRight className="w-5 h-5 text-amber-400" />
              </motion.div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}