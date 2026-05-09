"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const caseStudies = [
  {
    id: 1,
    title: "D2C Funnel Upgrade",
    industry: "E-commerce",
    category: "ecommerce",
    description: "High-intent landing flow with stronger offer positioning and retargeting structure.",
    metrics: [
      { label: "Conversion Rate", before: "1.2%", after: "3.8%", change: "+216%" },
      { label: "Revenue Per Click", before: "$2.40", after: "$6.85", change: "+185%" },
      { label: "Customer Acquisition Cost", before: "$65", after: "$28", change: "-57%" },
    ],
    duration: "3 months",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "SaaS Demo Pipeline",
    industry: "B2B SaaS",
    category: "saas",
    description: "Lead qualification journey designed to increase demo quality and close rate.",
    metrics: [
      { label: "Demo Booking Rate", before: "8%", after: "24%", change: "+200%" },
      { label: "Sales Cycle Length", before: "45 days", after: "18 days", change: "-60%" },
      { label: "Deal Close Rate", before: "22%", after: "38%", change: "+73%" },
    ],
    duration: "4 months",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Clinic Lead Engine",
    industry: "Healthcare",
    category: "healthcare",
    description: "Ads + booking pages integrated with follow-up to reduce no-shows.",
    metrics: [
      { label: "Booking Rate", before: "6%", after: "18%", change: "+200%" },
      { label: "No-Show Rate", before: "25%", after: "8%", change: "-68%" },
      { label: "Cost Per Appointment", before: "$45", after: "$22", change: "-51%" },
    ],
    duration: "2.5 months",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "E-learning Student Growth",
    industry: "EdTech",
    category: "education",
    description: "Optimized enrollment funnel with segmented messaging for different student types.",
    metrics: [
      { label: "Enrollment Rate", before: "4.5%", after: "12%", change: "+167%" },
      { label: "Student Lifetime Value", before: "$450", after: "$980", change: "+118%" },
      { label: "Cost Per Enrollment", before: "$85", after: "$35", change: "-59%" },
    ],
    duration: "3 months",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 5,
    title: "Real Estate Buyer Intent",
    industry: "Real Estate",
    category: "realestate",
    description: "City-level funnels with buyer intent segmentation and follow-up sequences.",
    metrics: [
      { label: "Lead Quality Score", before: "3.2/10", after: "8.1/10", change: "+153%" },
      { label: "Showing Rate", before: "12%", after: "35%", change: "+192%" },
      { label: "Qualified Leads", before: "8/month", after: "34/month", change: "+325%" },
    ],
    duration: "3.5 months",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    title: "Brand Recall Campaign",
    industry: "Consumer Brand",
    category: "ecommerce",
    description: "Short-form creative testing framework to improve CTR and ad relevance.",
    metrics: [
      { label: "Click-Through Rate", before: "0.8%", after: "2.4%", change: "+200%" },
      { label: "Ad Relevance Score", before: "5/10", after: "9/10", change: "+80%" },
      { label: "Cost Per Acquisition", before: "$52", after: "$18", change: "-65%" },
    ],
    duration: "2 months",
    color: "from-rose-500 to-pink-500",
  },
];

const categories = [
  { id: "all", label: "All Projects", count: 6 },
  { id: "ecommerce", label: "E-commerce", count: 2 },
  { id: "saas", label: "SaaS", count: 1 },
  { id: "healthcare", label: "Healthcare", count: 1 },
  { id: "education", label: "EdTech", count: 1 },
  { id: "realestate", label: "Real Estate", count: 1 },
];

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCases = activeCategory === "all" 
    ? caseStudies 
    : caseStudies.filter(c => c.category === activeCategory);

  return (
    <section className="py-24 px-6 md:px-16 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Results That Speak Louder
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Real case studies from real clients. See the measurable impact we&apos;ve delivered across industries.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-linear-to-r from-blue-500 to-cyan-500 text-white"
                  : "border border-blue-500/20 text-gray-300 hover:border-blue-500/40 hover:text-white"
              }`}
            >
              {cat.label}
              <span className="ml-2 text-sm opacity-70">({cat.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="wait">
            {filteredCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 p-6 hover:border-blue-500/40 transition-all overflow-hidden">
                  {/* Animated Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-linear-to-r ${caseStudy.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="relative">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-medium">
                            {caseStudy.industry}
                          </p>
                          <h3 className="text-2xl font-bold mt-2">{caseStudy.title}</h3>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-500">Duration</p>
                          <p className="text-sm font-semibold text-cyan-400">{caseStudy.duration}</p>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{caseStudy.description}</p>
                    </div>

                    {/* Metrics */}
                    <div className="space-y-4 mb-6 pb-6 border-b border-blue-500/10">
                      {caseStudy.metrics.map((metric, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                          viewport={{ once: true }}
                          className="space-y-1"
                        >
                          <p className="text-xs uppercase tracking-wide text-gray-500 font-medium">
                            {metric.label}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-gray-400">{metric.before}</span>
                              <div className="w-8 h-0.5 bg-gray-600" />
                              <span className="text-sm font-semibold text-white">{metric.after}</span>
                            </div>
                            <span className={`text-sm font-bold ${
                              metric.change.startsWith("+") ? "text-green-400" : "text-green-400"
                            }`}>
                              {metric.change}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors group"
                    >
                      View Full Case Study
                      <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredCases.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400">No case studies found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
