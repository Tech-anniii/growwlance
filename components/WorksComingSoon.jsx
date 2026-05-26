"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import TiltCard from "@/components/TiltCard";

import {
  Sparkles,
  ArrowRight,
  Rocket,
  Trophy,
  BarChart3,
  Clock3,
} from "lucide-react";

export default function WorksComingSoon() {
  return (
    <main className="relative overflow-hidden bg-[#050816] text-white">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[140px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative px-5 sm:px-6 md:px-16 pt-24 sm:pt-32 pb-16 sm:pb-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl text-center"
        >
          {/* TAG */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
              <Sparkles className="w-4 h-4 text-amber-400" />

              <span className="text-sm text-gray-300">
                Selected Work & Case Studies
              </span>
            </div>
          </div>

          {/* HEADING */}
          <h1 className="mt-8 text-4xl sm:text-5xl md:text-7xl font-black leading-tight">
            Our Work Is
            <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
              Coming Soon
            </span>
          </h1>

          {/* DESC */}
          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We’re currently building a portfolio of impactful case studies
            showcasing measurable growth, creative campaigns, and scalable
            digital systems for ambitious brands.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-700 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.35)]"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white"
            >
              Book Strategy Call
            </Link>
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="relative px-5 sm:px-6 md:px-16 pb-12 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            ["Results", "Driven Approach", Rocket],
            ["100%", "Client Satisfaction", Trophy],
            ["24/7", "Growth Support", Clock3],
            ["300%", "Average Growth", BarChart3],
          ].map(([num, label, Icon], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-7 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-700/20 border border-amber-500/20 flex items-center justify-center">
                <Icon className="w-6 h-6 text-amber-400" />
              </div>

              <h3 className="mt-5 text-2xl sm:text-3xl font-black">{num}</h3>

              <p className="mt-2 text-gray-400 text-sm">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="relative px-5 sm:px-6 md:px-16 py-20 sm:py-24 z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            What You Can Expect
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            Our upcoming portfolio will showcase real growth stories, marketing
            campaigns, and scalable digital experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* CARD 1 */}
          <TiltCard className="transition-transform duration-300">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 sm:p-8 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-amber-500/10 blur-3xl" />

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-700 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.25)]">
                <Rocket className="w-7 h-7 text-white" />
              </div>

              <h3 className="mt-7 text-2xl font-bold">Starter Packages</h3>

              <p className="mt-4 text-gray-400 leading-relaxed">
                Tailored digital growth packages designed to help startups and
                businesses gain traction quickly.
              </p>

              <Link
                href="/services"
                className="group inline-flex items-center gap-2 mt-7 text-amber-400 hover:text-amber-300 transition"
              >
                See Packages
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
            </motion.div>
          </TiltCard>

          {/* CARD 2 */}
          <TiltCard className="transition-transform duration-300">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 sm:p-8 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-orange-500/10 blur-3xl" />

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-600 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.25)]">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>

              <h3 className="mt-7 text-2xl font-bold">Growth Insights</h3>

              <p className="mt-4 text-gray-400 leading-relaxed">
                Access growth frameworks, campaign strategies, and
                performance-focused systems we use for clients.
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 mt-7 text-amber-400 hover:text-amber-300 transition"
              >
                Request Access
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
            </motion.div>
          </TiltCard>

          {/* CARD 3 */}
          <TiltCard className="transition-transform duration-300">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 sm:p-8 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-yellow-500/10 blur-3xl" />

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-700 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.25)]">
                <Trophy className="w-7 h-7 text-white" />
              </div>

              <h3 className="mt-7 text-2xl font-bold">Strategy Consultation</h3>

              <p className="mt-4 text-gray-400 leading-relaxed">
                We’ll map out a custom 90-day growth plan tailored to your
                business goals and budget.
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 mt-7 text-amber-400 hover:text-amber-300 transition"
              >
                Book Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
            </motion.div>
          </TiltCard>
        </div>
      </section>

      {/* FEATURED CTA */}
      <section className="relative px-5 sm:px-6 md:px-16 pb-20 sm:pb-28 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] border border-white/10 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-2xl p-8 sm:p-12 md:p-20 text-center"
        >
          {/* GLOW */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/10 blur-[120px]" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
              Want To Be
              <span className="block bg-gradient-to-r from-amber-400 to-yellow-500 text-transparent bg-clip-text">
                Featured Here?
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              Work with Growwlance and become one of our featured success
              stories with measurable business growth.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-700 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.35)]"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="/services"
                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
