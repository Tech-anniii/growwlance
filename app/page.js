"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Stats = dynamic(() => import("@/components/Stats"), {
  ssr: false,
  loading: () => (
    <section className="bg-[#0B0F19] px-6 py-20">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="h-8 w-72 rounded-full bg-white/10" />
        <div className="mt-6 h-6 w-96 max-w-full rounded-full bg-white/5" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="h-40 rounded-2xl bg-white/5" />
          <div className="h-40 rounded-2xl bg-white/5" />
          <div className="h-40 rounded-2xl bg-white/5" />
          <div className="h-40 rounded-2xl bg-white/5" />
        </div>
      </div>
    </section>
  ),
});

const CaseStudies = dynamic(() => import("@/components/CaseStudies"), {
  ssr: false,
  loading: () => (
    <section className="bg-[#0B0F19] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto h-10 w-96 max-w-full rounded-full bg-white/10" />
        <div className="mx-auto mt-4 h-6 w-[32rem] max-w-full rounded-full bg-white/5" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="h-[28rem] rounded-3xl border border-white/10 bg-white/5" />
          <div className="h-[28rem] rounded-3xl border border-white/10 bg-white/5" />
          <div className="h-[28rem] rounded-3xl border border-white/10 bg-white/5" />
        </div>
      </div>
    </section>
  ),
});

const easeOutExpo = [0.16, 1, 0.3, 1];

const pageFade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.45, ease: easeOutExpo } },
};

const heroStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: easeOutExpo },
  },
};

const revealInView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
};

const cardHover = {
  y: -6,
  scale: 1.012,
  transition: { duration: 0.24, ease: easeOutExpo },
};

const cardTap = { scale: 0.992 };

const servicePillars = [
  {
    title: "Performance Marketing",
    copy: "Google + Meta campaigns built around revenue goals and conversion quality.",
  },
  {
    title: "SEO Growth",
    copy: "Technical fixes, content mapping, and authority building for long-term demand.",
  },
  {
    title: "Funnel & Website",
    copy: "Conversion-focused journeys that reduce drop-off and improve lead intent.",
  },
  {
    title: "Creative + Messaging",
    copy: "Creative testing and copy systems to improve CTR, trust, and action.",
  },
];

const process = [
  ["01", "Discovery", "Goals, audience clarity, and current funnel diagnosis."],
  ["02", "Strategy", "Channel mix, offer framing, and conversion plan."],
  ["03", "Execution", "Launch, optimize, and iterate with weekly feedback."],
  ["04", "Scale", "Expand proven campaigns and improve unit economics."],
];

export default function Home() {
  return (
    <>
      <motion.div
        className="bg-[#0B0F19] text-white overflow-hidden"
        variants={pageFade}
        initial="hidden"
        animate="show"
      >
      <section className="relative px-6 md:px-16 pt-28 pb-20">
        <div className="absolute -top-10 right-0 h-96 w-96 rounded-full bg-amber-500/12 blur-2xl" />
        <div className="absolute top-56 -left-10 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div variants={heroStagger} initial="hidden" animate="show">
            <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.3em] text-amber-400">
              Growwlance Media
            </motion.p>
            <motion.h1 variants={fadeUp} className="mt-5 text-4xl font-bold leading-tight md:text-7xl">
              We Turn Marketing Into
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-300">
                Predictable Growth
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg text-gray-400">
              Strategy, creative, paid media, and funnel execution under one roof for startups and scaling brands.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-7">
              <motion.div whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="rounded-xl bg-linear-to-r from-amber-500 to-stone-700 px-6 py-3 font-medium transition hover:scale-105"
                >
                  Book Free Strategy Call
                </Link>
              </motion.div>
              <motion.div whileTap={{ scale: 0.97 }}>
                <Link
                  href="/works"
                  className="rounded-xl border  border-white/20 px-6 py-3 font-medium transition hover:bg-white/10"
                >
                  View Our Work
                </Link>
              </motion.div>
            </motion.div>

            {/* <motion.div variants={fadeUp} className="mt-10 grid grid-cols-3 gap-4 text-center">
              <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold">120+</p>
                <p className="text-xs text-gray-400">Campaign Experiments</p>
              </motion.div>
              <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold">25+</p>
                <p className="text-xs text-gray-400">Growth Projects</p>
              </motion.div>
              <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold">4.8/5</p>
                <p className="text-xs text-gray-400">Client Feedback</p>
              </motion.div>
            </motion.div> */}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
          >
            <div className="relative h-96 overflow-hidden rounded-2xl">
              <Image
                src="/home/hero-marketing-dashboard.jpeg"
                alt="Marketing dashboard preview"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* <p className="mt-4 text-sm text-gray-400">
              Placeholder image path: /public/home/hero-marketing-dashboard.jpg
            </p> */}
          </motion.div>
        </div>
      </section>

      <Stats />

      <section className="px-6 md:px-16 py-20 border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold md:text-4xl">Core Growth Pillars</h2>
            <Link href="/services" className="text-sm text-amber-400 hover:text-amber-300">
              Explore all services →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {servicePillars.map((item, i) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                {...revealInView}
                whileHover={cardHover}
                whileTap={cardTap}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-[#111827] p-6"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">{item.copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CaseStudies />

      <section className="px-6 md:px-16 py-24 bg-white/5 border-y border-white/10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold md:text-5xl">How We Work</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-gray-400">
            We use a clear 4-step execution model to move from guesswork to repeatable growth.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map(([step, title, copy], i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                {...revealInView}
                whileHover={cardHover}
                whileTap={cardTap}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-[#111827] p-6"
              >
                <p className="text-sm font-semibold text-amber-400">{step}</p>
                <h3 className="mt-3 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">{copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <motion.div whileHover={{ y: -2, transition: { duration: 0.2 } }} className="rounded-3xl border border-white/10 bg-white/5 p-4">
            <div className="relative h-80 overflow-hidden rounded-2xl">
              <Image
                src="/home/team-collaboration.png"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* <p className="mt-4 text-sm text-gray-400">
              Placeholder image path: /public/home/team-collaboration.jpg
            </p> */}
          </motion.div>

          <div className="flex flex-col justify-center rounded-3xl border border-white/10 bg-[#111827] p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-300">Client Voice</p>
            <p className="mt-5 text-2xl font-medium leading-relaxed text-gray-200">
              &ldquo;Growwlance brought structure to our growth. We finally had a clear strategy, weekly execution rhythm, and campaigns that aligned with revenue.&rdquo;
            </p>
            <p className="mt-6 text-sm text-gray-400">Marketing Lead, Service Business</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/team" className="rounded-xl border border-white/20 px-5 py-3 hover:bg-white/10">
                Meet the Team
              </Link>
              <Link href="/about" className="rounded-xl border border-white/20 px-5 py-3 hover:bg-white/10">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 pb-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-bold">Common Questions</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">Do you work with startups?</h3>
              <p className="mt-2 text-sm text-gray-400">
                Yes. We frequently work with early-stage brands that need fast learning and focused execution.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">How soon can we start?</h3>
              <p className="mt-2 text-sm text-gray-400">
                Once we align on goals and scope, we can usually begin planning within a few days.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Do you handle both strategy and execution?</h3>
              <p className="mt-2 text-sm text-gray-400">
                Yes, from offer and funnel strategy to launch, optimization, and reporting.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">How do we discuss pricing?</h3>
              <p className="mt-2 text-sm text-gray-400">
                We provide custom pricing based on your goals, channels, and project scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 md:px-16 py-24">
        <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-r from-amber-500/10 to-amber-400/10 blur-2xl" />
        <motion.div
          className="relative mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#10172a] p-10 text-center"
          variants={fadeUp}
          {...revealInView}
        >
          <h2 className="text-4xl font-bold md:text-5xl">Ready to Build Your Growth System?</h2>
          <p className="mt-4 text-gray-400">Let&apos;s map your next 90 days with a focused strategy call.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-7">
            <motion.div whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="rounded-xl bg-linear-to-r from-amber-500 to-stone-700 px-6 py-3 font-medium hover:scale-105 transition"
              >
                Book Free Call
              </Link>
            </motion.div>
            <motion.div whileTap={{ scale: 0.97 }}>
              <Link
                href="/works"
                className="rounded-xl border border-white/20 px-6 py-3 font-medium hover:bg-white/10 transition"
              >
                See All Projects
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </motion.div>
    </>
  );
}
