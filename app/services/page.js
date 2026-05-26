"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  Globe,
  PenTool,
  Megaphone,
  Mail,
  Palette,
  BadgeCheck,
  BarChart3,
  Search,
  Bot,
  MonitorPlay,
  Brush,
  Clapperboard,
  LayoutDashboard,
  Users,
  ShoppingCart,
  Funnel,
  ArrowRight,
  Sparkles,
  Rocket,
  Trophy,
  Clock3,
} from "lucide-react";

const services = [
  {
    title: "Website Design & Development",
    desc: "High-performing websites and e-commerce solutions built for speed, conversions, and scalability.",
    icon: Globe,
    gradient: "from-amber-500 to-orange-700",
  },

  {
    title: "Content Creation",
    desc: "Creative visuals, videos, blogs, and ad content designed to build authority and engagement.",
    icon: PenTool,
    gradient: "from-orange-500 to-yellow-600",
  },

  {
    title: "Influencer & PR Marketing",
    desc: "Collaborations with influencers and media channels to amplify brand credibility and reach.",
    icon: Megaphone,
    gradient: "from-yellow-500 to-amber-700",
  },

  {
    title: "Email & WhatsApp Marketing",
    desc: "Personalized campaigns that increase retention, engagement, and customer loyalty.",
    icon: Mail,
    gradient: "from-amber-400 to-orange-600",
  },

  {
    title: "Branding & Identity",
    desc: "Memorable brand systems including logos, guidelines, typography, and visual storytelling.",
    icon: Palette,
    gradient: "from-orange-500 to-stone-700",
  },

  {
    title: "Social Media Marketing",
    desc: "Growth-focused social media strategies that create strong digital presence and engagement.",
    icon: BadgeCheck,
    gradient: "from-amber-500 to-yellow-500",
  },

  {
    title: "Performance Marketing",
    desc: "ROI-focused Google & Meta advertising campaigns optimized for scalable business growth.",
    icon: BarChart3,
    gradient: "from-yellow-500 to-orange-700",
  },

  {
    title: "SEO & Local Marketing",
    desc: "Boost rankings, visibility, and local authority with data-driven SEO strategies.",
    icon: Search,
    gradient: "from-amber-600 to-yellow-500",
  },

  {
    title: "AI Automation Systems",
    desc: "AI chatbots, CRM automation, workflows, and smart systems that save time and increase efficiency.",
    icon: Bot,
    gradient: "from-orange-500 to-amber-700",
  },

  {
    title: "Ads Creative Design",
    desc: "High-converting ad creatives, thumbnails, carousels, and campaign visuals.",
    icon: MonitorPlay,
    gradient: "from-amber-500 to-orange-600",
  },

  {
    title: "Graphic Design",
    desc: "Professional graphics for social media, print, branding, presentations, and campaigns.",
    icon: Brush,
    gradient: "from-yellow-500 to-orange-700",
  },

  {
    title: "Video Editing & Reels",
    desc: "Cinematic edits, reels, promotional videos, and viral-ready short-form content.",
    icon: Clapperboard,
    gradient: "from-orange-500 to-yellow-600",
  },

  {
    title: "UI/UX Design",
    desc: "Modern interfaces with intuitive experiences built to improve user interaction and conversions.",
    icon: LayoutDashboard,
    gradient: "from-amber-500 to-stone-700",
  },

  {
    title: "Lead Generation",
    desc: "Generating high-quality leads through optimized funnels and targeted campaigns.",
    icon: Users,
    gradient: "from-yellow-500 to-amber-700",
  },

  {
    title: "E-commerce Solutions",
    desc: "Complete online store setup with optimized checkout and seamless shopping experiences.",
    icon: ShoppingCart,
    gradient: "from-orange-500 to-yellow-500",
  },

  {
    title: "Marketing Funnel Setup",
    desc: "End-to-end funnel systems designed to nurture leads and maximize customer value.",
    icon: Funnel,
    gradient: "from-amber-500 to-orange-700",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden bg-[#050816] text-white">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[140px]" />
      </div>

      {/* HERO */}
      <section className="relative px-5 sm:px-6 md:px-16 pt-24 sm:pt-32 pb-16 sm:pb-20 z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          {/* TAG */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">

              <Sparkles className="w-4 h-4 text-amber-400" />

              <span className="text-sm text-gray-300">
                Premium Digital Growth Solutions
              </span>
            </div>
          </div>

          {/* HEADING */}
          <h1 className="mt-8 text-4xl sm:text-5xl md:text-7xl font-black leading-tight">
            Services That
            <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
              Scale Brands
            </span>
          </h1>

          {/* DESC */}
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            End-to-end digital solutions designed to help brands grow,
            dominate their market, and create powerful online presence.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-700 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.35)]"
            >
              Get Started

              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>

            <Link
              href="/works"
              className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              Explore Works
            </Link>
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="relative px-5 sm:px-6 md:px-16 pb-10 z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

          {[
            ["Results", "Driven Approach", Rocket],
            ["100%", "Client Satisfaction", Trophy],
            ["24/7", "Growth Support", Clock3],
            ["Creative", "Digital Campaigns", Sparkles],
          ].map(([num, label, Icon], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-7 text-center"
            >

              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-700/20 border border-amber-500/20 flex items-center justify-center">
                <Icon className="w-6 h-6 text-amber-400" />
              </div>

              <h3 className="mt-5 text-2xl sm:text-3xl font-black">
                {num}
              </h3>

              <p className="mt-2 text-gray-400 text-sm">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative px-5 sm:px-6 md:px-16 py-20 sm:py-24 z-10">

        <div className="text-center mb-16">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Services We Offer
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Powerful marketing, branding, automation, and digital
            solutions crafted for ambitious businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[32px]
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-2xl
              p-8
              hover:border-white/20
              transition-all duration-500"
            >

              {/* CARD GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10`}
                />
              </div>

              {/* TOP BLUR */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r ${service.gradient} rounded-full blur-3xl opacity-20`}
              />

              {/* ICON */}
              <div
                className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient}
                flex items-center justify-center mb-6 shadow-xl`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* CONTENT */}
              <h3 className="text-2xl font-bold relative z-10">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-relaxed relative z-10">
                {service.desc}
              </p>

              {/* BUTTON */}
              <button className="mt-6 flex items-center gap-2 text-sm font-medium text-amber-300 group-hover:text-white transition-all duration-300">
                Learn More

                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative px-5 sm:px-6 md:px-16 py-20 sm:py-24 z-10">

        <div className="text-center">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Why Choose Growwlance?
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            We combine creativity, strategy, and technology to help
            businesses achieve measurable digital growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {[
            {
              title: "Data-Driven Strategy",
              desc: "Every campaign is backed by analytics, audience research, and measurable insights.",
            },

            {
              title: "Creative & Innovative",
              desc: "We create visually stunning experiences that help brands stand out in crowded markets.",
            },

            {
              title: "Scalable Growth",
              desc: "Our systems and strategies are built to grow with your business long term.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-[30px] bg-white/[0.03] border border-white/10 p-8 backdrop-blur-xl"
            >

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-700/20 border border-amber-500/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-amber-400" />
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative px-5 sm:px-6 md:px-16 py-20 sm:py-24 z-10">

        <div className="text-center">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Our Process
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            A streamlined workflow focused on delivering results,
            consistency, and business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {[
            {
              step: "01",
              title: "Strategy & Research",
              desc: "Understanding your business goals, audience, and market opportunities.",
            },

            {
              step: "02",
              title: "Execution & Launch",
              desc: "Building campaigns, systems, and creatives optimized for conversions.",
            },

            {
              step: "03",
              title: "Scaling & Optimization",
              desc: "Analyzing performance and continuously improving growth results.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-[30px] bg-white/[0.03] border border-white/10 p-8 backdrop-blur-xl overflow-hidden"
            >

              <div className="absolute top-4 right-4 text-6xl font-black text-white/5">
                {item.step}
              </div>

              <h3 className="text-2xl font-bold relative z-10">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-relaxed relative z-10">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-5 sm:px-6 md:px-16 pb-20 sm:pb-28 z-10">

        <div className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] border border-white/10 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-2xl p-8 sm:p-12 md:p-20 text-center">

          <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/10 blur-[120px]" />

          <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/10 blur-[120px]" />

          <div className="relative z-10">

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
              Ready To Scale

              <span className="block bg-gradient-to-r from-amber-400 to-yellow-500 text-transparent bg-clip-text">
                Your Business?
              </span>
            </h2>

            <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
              Let’s build powerful digital experiences that drive
              traffic, generate leads, and increase revenue.
            </p>

            <div className="mt-10 flex justify-center gap-4 flex-wrap">

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-700 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.35)]"
              >
                Get Started Today

                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="/works"
                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                Explore Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}