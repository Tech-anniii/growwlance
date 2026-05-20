"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TiltCard from "@/components/TiltCard";

export default function WorksComingSoon() {
  return (
    <main className="bg-[#0B0F19] text-white">
      <section className="px-6 md:px-16 pt-28 pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400">Selected Work</p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">Works — Coming Soon</h1>
          <p className="mt-5 text-gray-400 md:text-lg">
            We&apos;re building a portfolio of case studies to show real outcomes. For now,
            we&apos;re focusing on helping startups get traction quickly — explore services
            or book a strategy call to start your growth journey.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-16 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            <TiltCard className="p-6">
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl bg-white/5 p-6">
                <h3 className="text-xl font-semibold">Starter Packages</h3>
                <p className="mt-3 text-sm text-gray-400">Tailored packages to get your first meaningful signal quickly.</p>
                <div className="mt-4">
                  <Link href="/services" className="text-amber-400 hover:text-amber-300">See packages →</Link>
                </div>
              </motion.div>
            </TiltCard>

            <TiltCard className="p-6">
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl bg-white/5 p-6">
                <h3 className="text-xl font-semibold">Early Access Insights</h3>
                <p className="mt-3 text-sm text-gray-400">Sign up for early insights and templates we use for fast experiments.</p>
                <div className="mt-4">
                  <Link href="/contact" className="text-amber-400 hover:text-amber-300">Request access →</Link>
                </div>
              </motion.div>
            </TiltCard>

            <TiltCard className="p-6">
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl bg-white/5 p-6">
                <h3 className="text-xl font-semibold">Book a Strategy Call</h3>
                <p className="mt-3 text-sm text-gray-400">We&apos;ll map a 90-day growth sprint tailored to your stage and budget.</p>
                <div className="mt-4">
                  <Link href="/contact" className="text-amber-400 hover:text-amber-300">Book now →</Link>
                </div>
              </motion.div>
            </TiltCard>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-block rounded-3xl border border-white/10 bg-[#0f1724] p-8">
            <h2 className="text-2xl font-bold">Want to be featured here?</h2>
            <p className="mt-2 text-sm text-gray-400">Share results with us after a campaign and we&apos;ll feature your story.</p>
            <div className="mt-6">
              <Link href="/contact" className="px-6 py-3 rounded-xl btn-primary">Tell Us Your Story</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
