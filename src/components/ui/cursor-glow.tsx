"use client";

import { motion, useMotionValue, useReducedMotion } from "motion/react";
import { useEffect } from "react";

export function CursorGlow() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);

  useEffect(() => {
    if (reduce) return;
    const move = (event: MouseEvent) => {
      x.set(event.clientX - 180);
      y.set(event.clientY - 180);
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [reduce, x, y]);

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-30 hidden h-[360px] w-[360px] rounded-full md:block"
      style={{
        x,
        y,
        background:
          "radial-gradient(circle, rgba(224,177,90,0.16) 0%, rgba(94,234,212,0.08) 38%, transparent 70%)",
      }}
    />
  );
}
