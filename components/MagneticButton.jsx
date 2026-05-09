"use client";

import { useRef } from "react";

export default function MagneticButton({ children }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="px-6 py-3 rounded-xl bg-linear-to-r from-amber-500 to-stone-700 
      transition duration-300 ease-out hover:shadow-[0_0_30px_rgba(245,158,11,0.6)]"
    >
      {children}
    </button>
  );
}