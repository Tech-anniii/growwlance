"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Faq from "@/components/Faq";

import {
  ArrowRight,
  Sparkles,
  Rocket,
  TrendingUp,
  CheckCircle2,
  Play,
  Brain,
  Globe,
  BarChart3,
  MousePointerClick,
  Layers3,
  ShieldCheck,
  Star,
  ChevronRight,
  Zap,
} from "lucide-react";
import ReviewSection from "@/components/ReviewSection";

const Stats = dynamic(() => import("@/components/Stats"), {
  ssr: false,
});

const services = [
  {
    title: "Performance Marketing",
    desc: "Meta & Google campaigns focused on scalable growth and measurable ROI.",
    icon: Rocket,
  },

  {
    title: "SEO Growth",
    desc: "Technical SEO, authority building, and long-term organic growth systems.",
    icon: TrendingUp,
  },

  {
    title: "Website Development",
    desc: "Premium websites & funnels optimized for conversions and user experience.",
    icon: Globe,
  },

  {
    title: "AI Automation",
    desc: "Smart automations, AI systems, and workflows to scale faster.",
    icon: Brain,
  },
];

const process = [
  {
    step: "01",
    title: "Research & Strategy",
    desc: "We analyze your brand, audience, and opportunities before execution.",
  },

  {
    step: "02",
    title: "Creative Execution",
    desc: "Campaigns, creatives, funnels, and systems are launched strategically.",
  },

  {
    step: "03",
    title: "Optimization & Scale",
    desc: "Continuous testing and optimization to maximize ROI and growth.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#050816] text-white">
      {/* GLOBAL BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* GLOW */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[140px]" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden px-5 sm:px-6 md:px-16 pt-24 sm:pt-28 pb-16 sm:pb-20 z-10">
        {/* HERO BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-500/10 blur-[140px]" />

          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/10 blur-[140px]" />

          {/* DOTS */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, white 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* ORBITS */}
          <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 border border-white/[0.04] rounded-full" />

          <div className="absolute top-1/2 left-1/2 w-[650px] h-[650px] -translate-x-1/2 -translate-y-1/2 border border-white/[0.04] rounded-full" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl w-full">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* BADGE */}
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />

                <span className="text-sm text-gray-300">
                  Built For Modern Brands & Startups
                </span>
              </div>

              {/* HEADING */}
              <h1 className="mt-8 text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight">
                We Build
                <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-500 to-yellow-500">
                  Attention
                </span>
                <span className="block">Into Revenue.</span>
              </h1>

              {/* DESC */}
              <p className="mt-8 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-400">
                Growwlance combines performance marketing, creative
                storytelling, SEO, automation, and conversion-focused systems to
                help businesses scale faster online.
              </p>

              {/* CTA */}
              <div className="mt-12 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 sm:gap-5">
                <Link
                  href="/contact"
                  className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-700 text-white font-semibold shadow-[0_0_40px_rgba(245,158,11,0.35)] hover:scale-105 transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />

                  <span className="relative z-10">Start Your Growth</span>

                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition" />
                </Link>

                <Link
                  href="/works"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300"
                >
                  <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
                  View Works
                </Link>
              </div>

              {/* TRUST BAR */}
              <div className="mt-14 flex flex-wrap gap-5 sm:gap-8">
                {["Performance Marketing", "AI Automation", "SEO Growth"].map(
                  (item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-amber-400" />
                      </div>

                      <span className="text-gray-300">{item}</span>
                    </div>
                  ),
                )}
              </div>
            </motion.div>

            {/* RIGHT VISUAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="relative hidden lg:block"
            >
              <div className="relative mx-auto w-[520px] h-[620px]">
                {/* FLOATING IMAGE CARD */}
                <motion.div
                  animate={{
                    y: [0, -14, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                  }}
                  className="absolute top-0 left-0 w-[420px] rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-5 rotate-[-8deg]"
                >
                  <div className="overflow-hidden rounded-[28px]">
                    <Image
                      src="/home/hero.jpeg"
                      alt="Marketing Dashboard"
                      width={500}
                      height={600}
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                {/* ANALYTICS CARD */}
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                  }}
                  className="absolute bottom-0 right-0 w-[320px] rounded-[32px] border border-white/10 bg-[#111827]/80 backdrop-blur-2xl p-7"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">Growth Analytics</p>

                      <h3 className="mt-2 text-3xl font-black">+320%</h3>
                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-700 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* GRAPH */}
                  <div className="mt-8 flex items-end gap-3 h-32">
                    {[45, 60, 52, 80, 70, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{
                          delay: i * 0.1,
                          duration: 0.8,
                        }}
                        className="flex-1 rounded-t-xl bg-gradient-to-t from-amber-500 to-orange-500"
                      />
                    ))}
                  </div>
                </motion.div>

                {/* FLOATING CARD */}
                <motion.div
                  animate={{
                    x: [0, 8, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                  }}
                  className="absolute top-20 right-[-30px] px-5 py-4 rounded-2xl border border-white/10 bg-[#111827]/80 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-700 flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>

                    <div>
                      <p className="text-sm text-gray-400">
                        Conversion Focused
                      </p>

                      <h4 className="font-semibold">Growth Systems</h4>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <Stats />

      {/* FEATURE STRIP */}
      <section className="relative px-6 md:px-16 py-10 z-10">
        <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-6">
          {[
            ["Creative", "Growth Systems", Sparkles],
            ["Modern", "Brand Strategy", Layers3],
            ["Conversion", "Focused Funnels", MousePointerClick],
            ["Scalable", "Marketing Execution", Rocket],
          ].map(([title, desc, Icon], i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-700/20 border border-amber-500/20 flex items-center justify-center">
                <Icon className="w-6 h-6 text-amber-400" />
              </div>

              <h3 className="mt-6 text-2xl font-bold">{title}</h3>

              <p className="mt-2 text-gray-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SHOWCASE SECTION */}
      <section className="relative px-6 md:px-16 py-28 z-10 border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl">
                <Sparkles className="w-4 h-4 text-amber-400" />

                <span className="text-sm text-gray-300">
                  Creative Execution
                </span>
              </div>

              <h2 className="mt-8 text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
                We Build
                <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
                  Premium Digital Experiences
                </span>
              </h2>

              <p className="mt-7 text-base sm:text-lg text-gray-400 leading-relaxed">
                Every design, campaign, and interaction is carefully crafted to
                create attention, trust, and conversions.
              </p>

              {/* POINTS */}
              <div className="mt-10 space-y-6">
                {[
                  "Conversion-focused website design",
                  "Modern branding & visual identity",
                  "Creative campaigns that drive engagement",
                  "High-performance marketing systems",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-amber-400" />
                    </div>

                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <motion.div whileHover={{ y: -6 }} className="relative">
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-amber-500/10 blur-[100px]" />

              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-2xl">
                <div className="relative h-[420px] sm:h-[600px] overflow-hidden rounded-[28px] sm:rounded-[32px]">
                  <Image
                    src="/home/second.png"
                    alt="Growwlance Creative Team"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />

                  {/* FLOATING CARD */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                    }}
                    className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">
                          Creative Systems
                        </p>

                        <h3 className="mt-2 text-2xl font-bold">
                          Designed To Convert
                        </h3>
                      </div>

                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-700 flex items-center justify-center">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq />

      {/* HOW WE WORK */}
      <section className="relative px-5 sm:px-6 md:px-16 py-20 sm:py-32 overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-amber-500/10 blur-[120px]" />

          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-orange-500/10 blur-[120px]" />

          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />

              <span className="text-sm text-gray-300">Our Workflow</span>
            </div>

            <h2 className="mt-8 text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
              How We
              <span className="block bg-gradient-to-r from-amber-300 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Build Growth
              </span>
            </h2>

            <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              We combine strategy, creativity, and execution to help brands
              scale with performance-focused digital systems.
            </p>
          </div>

          {/* PROCESS */}
          <div className="mt-20 sm:mt-24 grid md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                number: "01",
                title: "Discovery & Research",
                desc: "We understand your business, audience, competitors, and growth opportunities before planning.",
              },

              {
                number: "02",
                title: "Strategy Planning",
                desc: "We create a custom roadmap including funnels, creatives, SEO, and marketing systems.",
              },

              {
                number: "03",
                title: "Execution & Launch",
                desc: "Campaigns, websites, branding, and automation systems are launched strategically.",
              },

              {
                number: "04",
                title: "Optimization & Scale",
                desc: "We continuously optimize campaigns and systems to maximize ROI and business growth.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                    className="group relative overflow-hidden rounded-[28px] sm:rounded-[32px]
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-2xl
                  p-6 sm:p-8"
              >
                {/* GLOW */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* NUMBER */}
                <div className="absolute top-5 right-5 text-5xl sm:text-7xl font-black text-white/[0.04]">
                  {item.number}
                </div>

                {/* TOP ICON */}
                <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-700 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.25)]">
                  <span className="text-2xl font-black text-white">
                    {item.number}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="relative z-10 mt-8 text-xl sm:text-2xl font-bold leading-snug">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="relative z-10 mt-5 text-gray-400 leading-relaxed">
                  {item.desc}
                </p>

                {/* LINE */}
                <div className="relative z-10 mt-8 h-[2px] w-full bg-white/5 overflow-hidden rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{
                      duration: 1,
                      delay: i * 0.15,
                    }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* BOTTOM STRIP */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="mt-20 rounded-[32px] sm:rounded-[36px] border border-white/10 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-2xl p-8 sm:p-10 md:p-14"
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* LEFT */}
              <div>
                <h3 className="text-3xl md:text-5xl font-black leading-tight">
                  Growth Systems
                  <span className="block bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
                    Designed To Scale
                  </span>
                </h3>

                <p className="mt-6 text-gray-300 text-lg leading-relaxed">
                  We don’t just create campaigns — we build complete digital
                  ecosystems that help businesses grow faster, convert better,
                  and dominate online.
                </p>
              </div>

              {/* RIGHT */}
              <div className="grid grid-cols-2 gap-5">
                {[
                  "Performance Marketing",
                  "SEO Optimization",
                  "Creative Branding",
                  "AI Automation",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 text-center text-gray-200 font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      <ReviewSection />
    </main>
  );
}
