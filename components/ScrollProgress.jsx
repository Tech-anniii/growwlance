"use client";

import { useScroll, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 via-cyan-400 to-blue-500 origin-left z-50 shadow-lg"
    />
  );
}