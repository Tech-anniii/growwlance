"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import {
  FaUsers,
  FaChartLine,
  FaRocket,
  FaGlobe,
} from "react-icons/fa";

const StatCard = ({
  icon: Icon,
  end,
  label,
  suffix = "",
  delay = 0,
}) => {
  const [count, setCount] = useState(0);

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  useEffect(() => {
    if (!isInView) return;

    let startValue = 0;

    const duration = 2.5;

    const increment = end / (duration * 60);

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.7,
        delay,
      }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-[28px] sm:rounded-[32px]
      border border-white/10
      bg-white/[0.03]
      backdrop-blur-2xl
      p-6 sm:p-8"
    >

      {/* GLOW */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* ICON */}
      <motion.div
        className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-700 shadow-[0_0_30px_rgba(245,158,11,0.25)]"
        whileHover={{
          scale: 1.08,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
        }}
      >
        <Icon className="text-white text-2xl" />
      </motion.div>

      {/* NUMBER */}
      <div className="relative z-10 mt-7 text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-amber-300 via-orange-500 to-yellow-500 bg-clip-text text-transparent">

        {count.toLocaleString()}
        {suffix}
      </div>

      {/* LABEL */}
      <p className="relative z-10 mt-4 text-gray-400 text-lg leading-relaxed">
        {label}
      </p>

      {/* BOTTOM LINE */}
      <div className="relative z-10 mt-8 h-[2px] w-full bg-white/5 overflow-hidden rounded-full">

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{
            duration: 1,
            delay: delay + 0.2,
          }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-amber-500 to-orange-700"
        />
      </div>
    </motion.div>
  );
};

export default function Stats() {
  const stats = [
  {
    icon: FaRocket,
    end: 5,
    label: "Startup Brands Growing With Us",
    suffix: "+",
  },

  {
    icon: FaChartLine,
    end: 12,
    label: "Projects In Progress",
    suffix: "+",
  },

  {
    icon: FaUsers,
    end: 100,
    label: "Creative Campaigns Executed",
    suffix: "+",
  },

  {
    icon: FaGlobe,
    end: 24,
    label: "Hours Dedicated To Growth",
    suffix: "/7",
  },
];

  return (
    <section className="relative py-20 sm:py-28 px-5 sm:px-6 md:px-16 overflow-hidden bg-[#050816]">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 left-0 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-amber-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-orange-500/10 blur-[120px]" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto"
      >

        {/* HEADER */}
        <div className="text-center">

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl">

            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />

            <span className="text-sm text-gray-300">
              Growth In Numbers
            </span>
          </div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-8 text-3xl sm:text-4xl md:text-6xl font-black leading-tight"
          >

            Our Impact

            <span className="block bg-gradient-to-r from-amber-300 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              By The Numbers
            </span>
          </motion.h2>

          {/* DESC */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Real growth, measurable performance, and scalable
            systems designed to help brands dominate online.
          </motion.p>
        </div>

        {/* STATS GRID */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

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

        {/* EXTRA STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="mt-16 rounded-[32px] sm:rounded-[36px] border border-white/10 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-2xl p-8 sm:p-10 text-center"
        >

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">

            Built For

            <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
              {" "}Modern Businesses
            </span>
          </h3>

          <p className="mt-5 text-gray-300 max-w-2xl mx-auto text-lg">
            From startups to scaling brands — we create
            performance-driven digital systems that generate
            visibility, leads, and revenue.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}