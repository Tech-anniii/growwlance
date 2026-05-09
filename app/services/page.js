"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Website Design & Development",
    desc: "Designing high-performing, responsive websites on platforms like WordPress, Shopify, Wix, and Custom E-commerce solutions that turn visitors into loyal customers.",
  },
  {
    title: "Content Creation",
    desc: "Producing impactful content — from graphics and videos to blogs and ad creatives — that strengthens brand voice and drives engagement.",
  },
  {
    title: "Influencer & PR Marketing",
    desc: "Connecting your brand with the right influencers and media outlets to expand visibility and credibility.",
  },
  {
    title: "Email & WhatsApp Marketing",
    desc: "Reaching your audience directly through personalized, conversion-driven communication that boosts engagement and retention.",
  },
  {
    title: "Branding & Identity",
    desc: "Crafting unique logos, brand guidelines, and visual identities that reflect your brand’s story and make it stand out.",
  },
  {
    title: "Social Media Marketing",
    desc: "Building powerful digital presence with engaging strategies that connect your brand to the right audience.",
  },
  {
    title: "Performance Marketing",
    desc: "Driving measurable growth through Google Ads, Meta Ads, and other paid marketing platforms.",
  },
  {
    title: "SEO & Local Marketing",
    desc: "Enhancing online visibility and rankings to attract high-quality traffic and build local brand authority.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#0B0F19] text-white">
      {/* HERO */}
      <section className="pt-28 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Our <span className="text-amberr-500">Services</span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          We provide data-driven digital marketing solutions to help your
          business grow faster and smarter.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="px-6 md:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden
bg-white/5
border border-white/10
p-8 rounded-[32px]
backdrop-blur-xl
hover:scale-[1.03]
hover:border-amber-500/30
hover:shadow-[0_0_40px_rgba(251,191,36,0.15)]
transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-700 mb-6 shadow-[0_0_30px_rgba(236,72,153,0.5)]" />
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <p className="mt-4 text-gray-400">{service.desc}</p>

              <button className="mt-6 px-5 py-2 rounded-xl bg-linear-to-r from-amber-500 to-stone-700 hover:scale-105 transition">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 md:px-16 py-20 bg-white/5 text-center">
        <h2 className="text-3xl font-bold">Why Choose Growwlance?</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            "Data-Driven Strategy",
            "Proven ROI Results",
            "Transparent Reporting",
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="text-gray-400 mt-2">
                We focus on measurable growth and long-term success.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 md:px-16 py-20">
        <h2 className="text-3xl font-bold text-center">Our Process</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10 text-center">
          {["Strategy", "Execution", "Scaling"].map((step, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold">{step}</h3>
              <p className="text-gray-400 mt-2">
                We follow a structured approach to deliver consistent results.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 py-20 text-center bg-linear-to-r from-amber-500/10 to-stone-700/10">
        <h2 className="text-4xl font-bold">Ready to Grow Your Business?</h2>

        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-3 bg-amber-500 rounded-xl">
            Book Free Call
          </button>
          <button className="px-6 py-3 border border-gray-600 rounded-xl">
            Get Proposal
          </button>
        </div>
      </section>
    </div>
  );
}
