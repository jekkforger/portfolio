"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    window.addEventListener("mousemove", moveCursor);

    const hoverElements = document.querySelectorAll(
      "a, button, .card"
    );

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        className={`fixed top-0 left-0 z-[9999] rounded-full pointer-events-none transition-all duration-200 ease-out mix-blend-screen ${
          hovering
            ? "w-14 h-14 bg-[#00ff88]/20 border border-[#00ff88]"
            : "w-6 h-6 bg-[#00ff88]/30 border border-[#00ff88]/50"
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          boxShadow: hovering
            ? "0 0 40px rgba(0,255,136,0.6)"
            : "0 0 20px rgba(0,255,136,0.4)",
        }}
      />

      {/* Dot */}
      <div
        className="fixed top-0 left-0 z-[9999] w-2 h-2 bg-[#00ff88] rounded-full pointer-events-none"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
      />
    </>
  );
}