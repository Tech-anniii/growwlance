"use client";

import { useRef } from "react";

export default function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const raf = useRef(null);

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX ?? e.touches?.[0]?.clientX) - rect.left;
    const y = (e.clientY ?? e.touches?.[0]?.clientY) - rect.top;

    const rotateX = (y / rect.height - 0.5) * 10;
    const rotateY = (x / rect.width - 0.5) * -10;

    // throttle with rAF
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      if (!ref.current) return;
      ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;
    });
  };

  const reset = () => {
    if (!ref.current) return;
    if (raf.current) cancelAnimationFrame(raf.current);
    ref.current.style.transition = "transform 400ms cubic-bezier(.16,1,.3,1)";
    ref.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
    // remove transition after it finishes
    setTimeout(() => {
      if (!ref.current) return;
      ref.current.style.transition = "";
    }, 420);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseLeave={reset}
      onTouchEnd={reset}
      className={`will-change-transform transform-gpu rounded-2xl ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}