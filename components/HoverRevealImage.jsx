"use client";
import { useState, useRef } from "react";
import Image from "next/image";

export default function HoverRevealImage({ src, alt, sizes, className = "" }) {
  const containerRef = useRef(null);
  const [origin, setOrigin] = useState("50% 50%");
  const [isHover, setIsHover] = useState(false);

  function supportsHover() {
    return typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(hover: hover)").matches
      : false;
  }

  function handleMove(e) {
    if (!supportsHover() || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
  }

  function handleLeave() {
    if (!supportsHover()) return;
    setOrigin("50% 50%");
    setIsHover(false);
  }

  function handleEnter() {
    if (!supportsHover()) return;
    setIsHover(true);
  }

  // Zoom factor on hover; balanced so the image reveals without heavy crop
  const hoverScale = 1.25;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`relative w-full h-64 rounded-xl overflow-hidden flex items-center justify-center bg-transparent cursor-zoom-in ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        style={{
            transformOrigin: origin,
            transform: isHover && (typeof window !== "undefined" ? window.matchMedia("(hover: hover)").matches : false) ? `scale(${hoverScale})` : "scale(1)",
            transition: "transform 320ms cubic-bezier(.2,.8,.2,1)",
        }}
          className="object-contain object-center will-change-transform"
      />
    </div>
  );
}
