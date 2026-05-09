"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaUsers, FaChartLine, FaTrophy, FaRocket } from "react-icons/fa";

const StatCard = ({ icon: Icon, end, label, suffix = "", delay = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startValue = 0;
    const duration = 2.5; // seconds
    const increment = end / (duration * 60); // 60fps
    let currentValue = startValue;

    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(currentValue));
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 text-center hover:border-blue-500/40 transition-colors"
    >
      <motion.div
        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 mb-4"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <Icon className="text-white text-2xl" />
      </motion.div>

      <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>

      <p className="text-gray-300 text-lg">{label}</p>
    </motion.div>
  );
};

export default function Stats() {
  const stats = [
    { icon: FaUsers, end: 50, label: "Happy Clients", suffix: "+" },
    // { icon: FaRocket, end: 300, label: "Growth Rate", suffix: "%" },
    // { icon: FaTrophy, end: 50, label: "Awards & Recognition", suffix: "M+" },
    { icon: FaChartLine, end: 25, label: "Projects Completed", suffix: "+" },
  ];

  return (
    <section className="py-20 px-6 bg-[#0B0F19]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Impact by Numbers
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Proven results that speak louder than words. Join thousands of businesses growing with us.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              end={stat.end}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
