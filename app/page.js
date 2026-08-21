"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
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
  MousePointerClick,
  Layers3,
  Zap,
} from "lucide-react";

import ReviewSection from "@/components/ReviewSection";

const Stats = dynamic(() => import("@/components/Stats"), {
  ssr: false,
});

const services = [
  {
    title: "Performance Marketing",
    description:
      "ROI-focused Google and Meta campaigns built around qualified leads, conversions, and scalable growth.",
    icon: Rocket,
  },
  {
    title: "SEO & Local SEO",
    description:
      "Technical SEO, content strategy, local visibility, and authority building designed for sustainable organic growth.",
    icon: TrendingUp,
  },
  {
    title: "Website Development",
    description:
      "Fast, responsive websites and conversion-focused landing pages designed to turn visitors into customers.",
    icon: Globe,
  },
  {
    title: "AI Automation",
    description:
      "AI chatbots, lead workflows, CRM automation, and smart systems that reduce repetitive work and improve response time.",
    icon: Brain,
  },
];

const process = [
  {
    number: "01",
    title: "Discovery & Research",
    description:
      "We understand your business, audience, competitors, goals, and growth opportunities before execution.",
  },
  {
    number: "02",
    title: "Strategy & Creative",
    description:
      "We build the right mix of SEO, campaigns, websites, content, funnels, and automation for your goals.",
  },
  {
    number: "03",
    title: "Launch & Execute",
    description:
      "Campaigns, websites, creatives, and growth systems are launched with clear priorities and measurable actions.",
  },
  {
    number: "04",
    title: "Optimize & Scale",
    description:
      "We use performance data to improve what works, remove friction, and scale the strongest growth opportunities.",
  },
];

const trustPoints = [
  "Performance-focused marketing",
  "Conversion-first websites",
  "SEO and organic growth",
];

const capabilities = [
  {
    title: "Creative Growth",
    description:
      "Content, campaigns, branding, and creative direction that make your brand memorable.",
    icon: Sparkles,
  },
  {
    title: "Brand Strategy",
    description:
      "Clear positioning, messaging, and digital experiences designed to build trust.",
    icon: Layers3,
  },
  {
    title: "Conversion Systems",
    description:
      "Landing pages, funnels, calls-to-action, and user journeys designed to reduce friction.",
    icon: MousePointerClick,
  },
  {
    title: "Scalable Execution",
    description:
      "A practical mix of marketing, technology, and optimization that can grow with your business.",
    icon: Rocket,
  },
];

const growthSystems = [
  "Performance Marketing",
  "SEO Optimization",
  "Creative Branding",
  "AI Automation",
];

const heroBars = [48, 64, 58, 78, 70, 92];

export default function Home() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 28,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0.35 }
        : { duration: 0.7, ease: "easeOut" },
    },
  };

  const float = (values, duration) =>
    reduceMotion
      ? undefined
      : {
          ...values,
          transition: {
            repeat: Infinity,
            duration,
            ease: "easeInOut",
          },
        };

  return (
    <main className="relative overflow-hidden bg-[#050816] text-white">
      {/* GLOBAL BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full bg-amber-500/10 blur-[140px]" />

        <div className="absolute bottom-[-180px] right-[-180px] h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* HERO */}
      <section
        aria-labelledby="hero-heading"
        className="relative z-10 flex min-h-[820px] items-center overflow-hidden px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 md:min-h-screen md:px-16 md:pt-36"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute left-[-12%] top-[-8%] h-[430px] w-[430px] rounded-full bg-amber-500/[0.07] blur-[120px]" />

          <div className="absolute bottom-[-12%] right-[-8%] h-[430px] w-[430px] rounded-full bg-orange-500/[0.07] blur-[120px]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, white 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="absolute left-1/2 top-1/2 hidden h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035] lg:block" />

          <div className="absolute left-1/2 top-1/2 hidden h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035] lg:block" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            {/* HERO CONTENT */}
            <motion.div variants={reveal} initial="hidden" animate="show">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 backdrop-blur-xl sm:px-5">
                <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.7)]" />

                <span className="text-xs text-gray-300 sm:text-sm">
                  Digital Growth Partner for Modern Brands
                </span>
              </div>

              <h1
                id="hero-heading"
                className="mt-7 max-w-5xl text-4xl font-black leading-[0.96] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.1rem]"
              >
                Digital Marketing
                <span className="mt-3 block bg-gradient-to-r from-amber-300 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  That Turns Attention
                </span>
                <span className="mt-3 block">Into Growth.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg md:text-xl">
                Growwlance is a digital marketing agency in India helping
                businesses grow through performance marketing, SEO, social
                media, conversion-focused websites, branding, content, and AI
                automation.
              </p>

              {/* CTA */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href="/contact"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-700 px-7 py-4 font-semibold text-white shadow-[0_0_40px_rgba(245,158,11,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(245,158,11,0.35)]"
                >
                  Start Your Growth

                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/works"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-7 py-4 font-semibold text-gray-100 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.07]"
                >
                  <Play className="h-4 w-4 fill-amber-400 text-amber-400" />

                  View Our Work
                </Link>
              </div>

              {/* TRUST POINTS */}
              <div className="mt-10 grid gap-4 border-t border-white/10 pt-7 sm:grid-cols-3">
                {trustPoints.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-400/15 bg-amber-400/[0.06]">
                      <CheckCircle2 className="h-4 w-4 text-amber-400" />
                    </div>

                    <span className="text-sm leading-6 text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* HERO VISUAL */}
            <motion.div
              variants={reveal}
              initial="hidden"
              animate="show"
              className="relative hidden min-h-[620px] lg:block"
              aria-hidden="true"
            >
              <div className="absolute inset-x-0 top-8 mx-auto h-[540px] w-[430px] rotate-[-5deg] rounded-[42px] border border-white/10 bg-white/[0.025] p-4 shadow-2xl backdrop-blur-2xl">
                <div className="relative h-full overflow-hidden rounded-[32px]">
                  <Image
                    src="/home/hero.jpeg"
                    alt=""
                    width={700}
                    height={840}
                    priority
                    sizes="430px"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/85 via-transparent to-transparent" />
                </div>
              </div>

              <motion.div
                animate={float({ y: [0, -10, 0] }, 5)}
                className="absolute bottom-8 right-0 w-[300px] rounded-[30px] border border-white/10 bg-[#111827]/90 p-6 shadow-2xl backdrop-blur-2xl"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-sm text-gray-400">Growth Focus</p>

                    <p className="mt-2 text-2xl font-black">
                      More Visibility.
                    </p>

                    <p className="text-2xl font-black text-amber-300">
                      Better Conversion.
                    </p>
                  </div>

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-700">
                    <TrendingUp className="h-7 w-7 text-white" />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-6 items-end gap-2">
                  {heroBars.map((height, index) => (
                    <div
                      key={index}
                      className="flex h-24 items-end overflow-hidden rounded-lg bg-white/[0.04]"
                    >
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{
                          duration: reduceMotion ? 0.35 : 0.8,
                          delay: reduceMotion ? 0 : index * 0.08,
                        }}
                        className="w-full rounded-t-lg bg-gradient-to-t from-amber-500 to-orange-500"
                      />
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs text-gray-500">
                  Example growth dashboard
                </p>
              </motion.div>

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, 8, 0],
                        x: [0, 4, 0],
                      }
                }
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute right-[-12px] top-16 rounded-2xl border border-white/10 bg-[#111827]/90 px-5 py-4 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-700">
                    <Rocket className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Conversion focused
                    </p>

                    <p className="font-semibold">Growth Systems</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        aria-label="Growwlance performance overview"
        className="relative z-10"
      >
        <Stats />
      </section>

      {/* CAPABILITIES */}
      <section className="relative z-10 px-5 py-14 sm:px-6 md:px-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl md:text-5xl">
              Digital growth systems built around your goals.
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-400 sm:text-lg">
              From getting discovered on Google to building better websites,
              campaigns, content, and automated lead workflows, we connect
              marketing and technology into one growth system.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="group rounded-[28px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-amber-300/20 hover:bg-white/[0.045]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-500/15 to-orange-700/15">
                  <Icon className="h-6 w-6 text-amber-400" />
                </div>

                <h3 className="mt-6 text-xl font-bold">{title}</h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative z-10 border-y border-white/10 bg-white/[0.018] px-5 py-20 sm:px-6 md:px-16 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
                Our Services
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl md:text-6xl">
                Marketing, technology, and creativity in one place.
              </h2>

              <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
                Build the right digital foundation with services designed to
                improve visibility, engagement, conversions, and long-term
                growth.
              </p>
            </div>

            <Link
              href="/services"
              className="group inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 font-medium text-gray-200 transition hover:border-amber-300/20 hover:bg-white/[0.06]"
            >
              Explore all services

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:border-amber-300/20 hover:bg-white/[0.045] sm:p-8"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-700">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="relative z-10 mt-6 text-2xl font-bold">
                  {title}
                </h3>

                <p className="relative z-10 mt-3 leading-7 text-gray-400">
                  {description}
                </p>

                <Link
                  href="/services"
                  className="relative z-10 mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition hover:text-white"
                >
                  Learn more

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CREATIVE SHOWCASE */}
      <section className="relative z-10 px-5 py-20 sm:px-6 md:px-16 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-amber-400" />

              <span className="text-sm text-gray-300">
                Creative Execution
              </span>
            </div>

            <h2 className="mt-7 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
              Premium digital experiences
              <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                designed to convert.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
              Your website, campaigns, content, and brand should work together.
              We design those touchpoints around clarity, trust, and the action
              you want your customers to take.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Conversion-focused website design",
                "Modern branding and visual identity",
                "Creative campaigns that drive engagement",
                "High-performance digital marketing systems",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                    <CheckCircle2 className="h-5 w-5 text-amber-400" />
                  </div>

                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href="/works"
              className="group mt-10 inline-flex items-center gap-2 rounded-xl border border-amber-400/20 bg-amber-400/[0.06] px-5 py-3 font-semibold text-amber-200 transition hover:bg-amber-400/[0.1]"
            >
              See what we have built

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <motion.div
            whileHover={reduceMotion ? undefined : { y: -6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-2xl">
              <div className="relative h-[430px] overflow-hidden rounded-[30px] sm:h-[600px]">
                <Image
                  src="/home/second.png"
                  alt="Growwlance creative digital experience design"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />

                <motion.div
                  animate={float({ y: [0, -10, 0] }, 4)}
                  className="absolute bottom-6 left-5 right-5 rounded-3xl border border-white/10 bg-black/35 p-5 backdrop-blur-xl sm:left-6 sm:right-6 sm:p-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-gray-400">
                        Creative Systems
                      </p>

                      <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                        Designed to Convert
                      </h3>
                    </div>

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-700">
                      <Zap className="h-7 w-7 text-white" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-5 pb-6 sm:px-6 md:px-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl md:text-5xl">
              Questions before you get started.
            </h2>
          </div>
        </div>

        <Faq />
      </section>

      {/* WORKFLOW */}
      <section className="relative overflow-hidden px-5 py-20 sm:px-6 sm:py-28 md:px-16 md:py-32">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-amber-400" />

              <span className="text-sm text-gray-300">Our Workflow</span>
            </div>

            <h2 className="mt-8 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
              How We
              <span className="block bg-gradient-to-r from-amber-300 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Build Growth
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
              A practical process that combines research, strategy, creative
              execution, and continuous optimization.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0.35 : 0.65,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={reduceMotion ? undefined : { y: -8 }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-2xl transition-colors duration-300 hover:border-amber-300/20 hover:bg-white/[0.045] sm:p-8"
              >
                <div className="absolute right-5 top-4 text-6xl font-black text-white/[0.045]">
                  {item.number}
                </div>

                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-700">
                  <span className="text-xl font-black">{item.number}</span>
                </div>

                <h3 className="relative z-10 mt-7 text-xl font-bold leading-snug sm:text-2xl">
                  {item.title}
                </h3>

                <p className="relative z-10 mt-4 leading-7 text-gray-400">
                  {item.description}
                </p>

                <div className="relative z-10 mt-7 h-px overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{
                      duration: reduceMotion ? 0.35 : 0.9,
                      delay: reduceMotion ? 0 : index * 0.12,
                    }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-700"
                  />
                </div>
              </motion.article>
            ))}
          </div>

          {/* GROWTH CTA */}
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 rounded-[32px] border border-white/10 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 p-8 backdrop-blur-2xl sm:p-10 md:p-14"
          >
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
                  Built to Scale
                </p>

                <h3 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
                  Growth systems
                  <span className="block bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
                    designed for momentum.
                  </span>
                </h3>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
                  We connect marketing, creative, technology, and optimization
                  so each part of your digital presence supports the next.
                </p>

                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-[#090b14] transition hover:-translate-y-0.5"
                >
                  Talk to Growwlance

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {growthSystems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-5 text-center text-sm font-medium text-gray-200 sm:px-5 sm:py-6 sm:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="relative z-10">
        <ReviewSection />
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 px-5 pb-20 pt-6 sm:px-6 md:px-16 md:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-amber-400/15 bg-gradient-to-br from-amber-500/10 via-orange-500/[0.06] to-transparent p-8 sm:p-10 md:p-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
                Ready to Grow?
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl md:text-5xl">
                Let&apos;s build a stronger digital presence for your business.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                Tell us what you&apos;re trying to achieve and we&apos;ll help
                you map the right digital strategy.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-700 px-7 py-4 font-semibold shadow-[0_0_40px_rgba(245,158,11,0.2)] transition hover:-translate-y-0.5"
            >
              Start a Conversation

              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}