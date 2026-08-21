"use client";

import { motion, useReducedMotion } from "framer-motion";
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
  Target,
  Clock3,
  CheckCircle2,
  Zap,
  Layers3,
  TrendingUp,
} from "lucide-react";

const serviceCategories = [
  {
    id: "marketing",
    label: "Marketing & Growth",
    icon: TrendingUp,
    services: [
      {
        title: "Performance Marketing",
        desc: "Google Ads and Meta advertising campaigns structured around reach, qualified leads, conversions, and measurable business goals.",
        icon: BarChart3,
        gradient: "from-yellow-500 to-orange-700",
      },
      {
        title: "SEO & Local Marketing",
        desc: "Technical SEO, on-page optimization, local SEO, content strategy, and visibility improvements for sustainable organic growth.",
        icon: Search,
        gradient: "from-amber-600 to-yellow-500",
      },
      {
        title: "Social Media Marketing",
        desc: "Growth-focused social media strategy, content planning, campaign execution, and community engagement for a stronger digital presence.",
        icon: BadgeCheck,
        gradient: "from-amber-500 to-yellow-500",
      },
      {
        title: "Influencer & PR Marketing",
        desc: "Influencer collaborations and PR opportunities designed to improve reach, credibility, brand awareness, and audience trust.",
        icon: Megaphone,
        gradient: "from-yellow-500 to-amber-700",
      },
      {
        title: "Email & WhatsApp Marketing",
        desc: "Targeted campaigns and customer communication workflows designed to improve engagement, retention, and repeat business.",
        icon: Mail,
        gradient: "from-amber-400 to-orange-600",
      },
      {
        title: "Lead Generation",
        desc: "Targeted campaigns, landing pages, forms, and marketing workflows designed to attract and qualify potential customers.",
        icon: Users,
        gradient: "from-yellow-500 to-amber-700",
      },
    ],
  },

  {
    id: "creative",
    label: "Creative & Brand",
    icon: Sparkles,
    services: [
      {
        title: "Content Creation",
        desc: "Creative visuals, videos, blogs, and campaign content designed to communicate your brand clearly and engage the right audience.",
        icon: PenTool,
        gradient: "from-orange-500 to-yellow-600",
      },
      {
        title: "Branding & Identity",
        desc: "Brand identity systems including logos, visual direction, typography, guidelines, and storytelling for a consistent brand presence.",
        icon: Palette,
        gradient: "from-orange-500 to-stone-700",
      },
      {
        title: "Ads Creative Design",
        desc: "Campaign visuals, thumbnails, carousels, banners, and ad creatives designed to capture attention and support conversions.",
        icon: MonitorPlay,
        gradient: "from-amber-500 to-orange-600",
      },
      {
        title: "Graphic Design",
        desc: "Professional visual design for social media, print, presentations, campaigns, and other business communication.",
        icon: Brush,
        gradient: "from-yellow-500 to-orange-700",
      },
      {
        title: "Video Editing & Reels",
        desc: "Short-form videos, promotional edits, reels, and visual storytelling optimized for modern digital platforms.",
        icon: Clapperboard,
        gradient: "from-orange-500 to-yellow-600",
      },
    ],
  },

  {
    id: "digital",
    label: "Web, UX & Automation",
    icon: Layers3,
    services: [
      {
        title: "Website Design & Development",
        desc: "Fast, responsive websites, landing pages, and digital experiences built around usability, performance, and conversion goals.",
        icon: Globe,
        gradient: "from-amber-500 to-orange-700",
      },
      {
        title: "UI/UX Design",
        desc: "Modern user interfaces and intuitive digital experiences designed to reduce friction and improve customer interaction.",
        icon: LayoutDashboard,
        gradient: "from-amber-500 to-stone-700",
      },
      {
        title: "AI Automation Systems",
        desc: "AI chatbots, lead workflows, CRM automation, and smart systems that reduce repetitive work and improve response speed.",
        icon: Bot,
        gradient: "from-orange-500 to-amber-700",
      },
      {
        title: "E-commerce Solutions",
        desc: "Online store development and optimization focused on product discovery, user experience, checkout flow, and customer journeys.",
        icon: ShoppingCart,
        gradient: "from-orange-500 to-yellow-500",
      },
      {
        title: "Marketing Funnel Setup",
        desc: "Lead capture, landing pages, nurturing flows, and conversion systems designed around your customer journey.",
        icon: Funnel,
        gradient: "from-amber-500 to-orange-700",
      },
    ],
  },
];

const whyChooseUs = [
  {
    title: "Strategy Before Execution",
    desc: "We start by understanding your business goals, audience, market, and opportunities before choosing the right channels and tactics.",
    icon: Target,
  },
  {
    title: "Creative Meets Technology",
    desc: "We combine marketing, design, websites, automation, and creative execution so your digital presence works as one connected system.",
    icon: Sparkles,
  },
  {
    title: "Built for Continuous Improvement",
    desc: "Digital growth is not a one-time launch. We focus on learning, optimization, and improving the parts of the system that matter.",
    icon: TrendingUp,
  },
];

const process = [
  {
    step: "01",
    title: "Discover & Research",
    desc: "We understand your business, target audience, competitors, current digital presence, and growth objectives.",
  },
  {
    step: "02",
    title: "Plan the Strategy",
    desc: "We define priorities and choose the right combination of marketing, creative, website, SEO, and automation activities.",
  },
  {
    step: "03",
    title: "Execute & Launch",
    desc: "We build and launch campaigns, content, websites, creatives, and digital workflows based on the agreed strategy.",
  },
  {
    step: "04",
    title: "Measure & Improve",
    desc: "We review performance, identify opportunities, reduce friction, and continuously improve the strongest growth activities.",
  },
];

export default function ServicesPage() {
  const reduceMotion = useReducedMotion();

  const cardAnimation = {
    initial: {
      opacity: 0,
      y: reduceMotion ? 0 : 30,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: reduceMotion ? 0.3 : 0.6,
    },
    viewport: {
      once: true,
    },
  };

  return (
    <main className="relative overflow-hidden bg-[#050816] text-white">
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-amber-500/[0.09] blur-[150px]" />

        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-orange-500/[0.09] blur-[150px]" />

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
        aria-labelledby="services-heading"
        className="relative z-10 px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 md:px-16 md:pt-36"
      >
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.35 : 0.7 }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-5 py-2 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-amber-400" />

            <span className="text-sm text-gray-300">
              Digital Marketing, Creative & Technology
            </span>
          </div>

          <h1
            id="services-heading"
            className="mt-7 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-7xl"
          >
            Digital Marketing Services
            <span className="mt-3 block bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Built for Business Growth
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg md:text-xl">
            Growwlance provides digital marketing, SEO, social media marketing,
            website development, branding, performance advertising, creative
            content, AI automation, and conversion-focused digital solutions
            for businesses looking to build a stronger online presence.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-700 px-8 py-4 font-semibold text-white shadow-[0_0_35px_rgba(245,158,11,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(245,158,11,0.35)]"
            >
              Discuss Your Project

              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/works"
              className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 font-semibold text-gray-200 backdrop-blur-xl transition hover:bg-white/[0.07]"
            >
              Explore Our Work
            </Link>
          </div>

          {/* QUICK NAVIGATION */}
          <nav
            aria-label="Service categories"
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {serviceCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-sm text-gray-300 transition hover:border-amber-400/30 hover:bg-amber-400/[0.06] hover:text-amber-200"
              >
                {category.label}
              </a>
            ))}
          </nav>
        </motion.div>
      </section>

      {/* VALUE STRIP */}
      <section className="relative z-10 px-5 pb-10 sm:px-6 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Strategy",
              desc: "Clear digital priorities",
              icon: Target,
            },
            {
              title: "Creative",
              desc: "Content and brand execution",
              icon: Sparkles,
            },
            {
              title: "Performance",
              desc: "Data-informed optimization",
              icon: Rocket,
            },
            {
              title: "Scalable Systems",
              desc: "Web and automation solutions",
              icon: Zap,
            },
          ].map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/[0.06]">
                <Icon className="h-5 w-5 text-amber-400" />
              </div>

              <h2 className="mt-4 text-lg font-bold">{title}</h2>

              <p className="mt-1 text-sm text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section
        aria-labelledby="all-services-heading"
        className="relative z-10 px-5 py-20 sm:px-6 md:px-16 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
              What We Offer
            </p>

            <h2
              id="all-services-heading"
              className="mt-3 text-3xl font-black sm:text-4xl md:text-5xl"
            >
              Services designed to strengthen every part of your digital
              presence.
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Choose a focused service or combine multiple capabilities into a
              digital growth strategy built around your business objectives.
            </p>
          </div>

          <div className="space-y-24">
            {serviceCategories.map((category) => {
              const CategoryIcon = category.icon;

              return (
                <section
                  key={category.id}
                  id={category.id}
                  className="scroll-mt-28"
                  aria-labelledby={`${category.id}-heading`}
                >
                  <div className="mb-9 flex flex-col gap-4 border-b border-white/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/[0.06]">
                          <CategoryIcon className="h-6 w-6 text-amber-400" />
                        </div>

                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
                          {category.label}
                        </p>
                      </div>

                      <h2
                        id={`${category.id}-heading`}
                        className="mt-4 text-3xl font-black sm:text-4xl"
                      >
                        {category.label} Services
                      </h2>
                    </div>

                    <p className="max-w-md text-sm leading-6 text-gray-400 sm:text-right">
                      Select the services that best match your current goals and
                      build from there.
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {category.services.map((service, index) => {
                      const Icon = service.icon;

                      return (
                        <motion.article
                          key={service.title}
                          {...cardAnimation}
                          transition={{
                            duration: reduceMotion ? 0.3 : 0.55,
                            delay: reduceMotion ? 0 : index * 0.05,
                          }}
                          whileHover={
                            reduceMotion ? undefined : { y: -7 }
                          }
                          className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-2xl transition duration-300 hover:border-amber-300/20 hover:bg-white/[0.045] sm:p-8"
                        >
                          <div
                            aria-hidden="true"
                            className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition duration-500 group-hover:opacity-[0.06]`}
                          />

                          <div
                            aria-hidden="true"
                            className={`absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gradient-to-br ${service.gradient} opacity-20 blur-3xl`}
                          />

                          <div
                            className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}
                          >
                            <Icon className="h-8 w-8 text-white" />
                          </div>

                          <h3 className="relative z-10 mt-7 text-xl font-bold sm:text-2xl">
                            {service.title}
                          </h3>

                          <p className="relative z-10 mt-4 leading-7 text-gray-400">
                            {service.desc}
                          </p>

                          <Link
                            href="/contact"
                            className="relative z-10 mt-auto inline-flex w-fit items-center gap-2 pt-7 text-sm font-semibold text-amber-300 transition hover:text-white"
                            aria-label={`Discuss ${service.title} with Growwlance`}
                          >
                            Discuss this service

                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </motion.article>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY GROWWLANCE */}
      <section className="relative z-10 border-y border-white/10 bg-white/[0.018] px-5 py-20 sm:px-6 md:px-16 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
              Why Growwlance
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl md:text-5xl">
              One connected approach to digital growth.
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Instead of treating your website, marketing, content, and
              technology as completely separate activities, we look for ways to
              make them work together.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  {...cardAnimation}
                  transition={{
                    duration: reduceMotion ? 0.3 : 0.6,
                    delay: reduceMotion ? 0 : index * 0.1,
                  }}
                  className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-500/15 to-orange-700/15">
                    <Icon className="h-6 w-6 text-amber-400" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>

                  <p className="mt-4 leading-7 text-gray-400">{item.desc}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative z-10 px-5 py-20 sm:px-6 md:px-16 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
              Our Process
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl md:text-5xl">
              From business goals to continuous improvement.
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              A structured workflow helps us keep strategy, execution, and
              optimization connected to your actual objectives.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item, index) => (
              <motion.article
                key={item.step}
                {...cardAnimation}
                transition={{
                  duration: reduceMotion ? 0.3 : 0.6,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-8"
              >
                <span className="absolute right-5 top-3 text-6xl font-black text-white/[0.04]">
                  {item.step}
                </span>

                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-700 text-lg font-black">
                  {item.step}
                </div>

                <h3 className="relative z-10 mt-7 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="relative z-10 mt-4 leading-7 text-gray-400">
                  {item.desc}
                </p>

                <div className="relative z-10 mt-7 h-px bg-white/10">
                  <div className="h-full w-1/2 bg-gradient-to-r from-amber-500 to-orange-500" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 px-5 pb-20 sm:px-6 md:px-16 md:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-amber-500/10 via-orange-500/[0.08] to-transparent p-8 text-center backdrop-blur-2xl sm:p-12 md:p-16">
          <div
            aria-hidden="true"
            className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-amber-500/10 blur-[100px]"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-500/10 blur-[100px]"
          />

          <div className="relative z-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-700">
              <Rocket className="h-7 w-7 text-white" />
            </div>

            <h2 className="mx-auto mt-7 max-w-4xl text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
              Ready to build a stronger
              <span className="block bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                digital growth system?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Whether you need a new website, SEO, performance marketing,
              content, branding, social media, or automation, start by telling
              us what you want to achieve.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-700 px-8 py-4 font-semibold text-white shadow-[0_0_35px_rgba(245,158,11,0.3)] transition hover:-translate-y-0.5"
              >
                Start a Conversation

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/works"
                className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-4 font-semibold text-gray-200 transition hover:bg-white/[0.08]"
              >
                View Our Work
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-400">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-400" />
                Marketing Strategy
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-400" />
                Creative Execution
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-400" />
                Digital Growth Systems
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}