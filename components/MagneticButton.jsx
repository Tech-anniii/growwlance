"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function MagneticButton({ href = "#", children, className = "" }) {
  const ref = useRef(null);
  const router = useRouter();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tx = useTransform(mx, (v) => `${v / 6}px`);
  const ty = useTransform(my, (v) => `${v / 6}px`);

  function handleMove(e) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    mx.set(x);
    my.set(y);
  }

  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  function handleClick(e) {
    if (!href || href === '#') return;
    e.preventDefault();
    router.push(href);
  }

  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} className="inline-block">
      <motion.button
        onClick={handleClick}
        style={{ x: tx, y: ty }}
        className={`inline-flex items-center justify-center ${className}`}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.button>
    </div>
  );
}
 