"use client";

import { useRef } from "react";

export default function TiltCard({ children }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * 10;
    const rotateY = (x / rect.width - 0.5) * -10;

    ref.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const reset = () => {
    ref.current.style.transform = "rotateX(0) rotateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="transition duration-300 ease-out bg-white/5 p-6 rounded-2xl backdrop-blur-lg"
    >
      {children}
    </div>
  );
}