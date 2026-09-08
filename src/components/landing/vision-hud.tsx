"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useEffect } from "react";

export function usePointerField() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const move = (event: PointerEvent) => {
      x.set(event.clientX / window.innerWidth - 0.5);
      y.set(event.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [reduce, x, y]);

  return { x, y };
}

const nodes = [
  [12, 18],
  [22, 42],
  [18, 68],
  [34, 28],
  [41, 56],
  [58, 22],
  [64, 48],
  [72, 71],
  [81, 34],
  [88, 58],
] as const;

const links: Array<[number, number]> = [
  [0, 1],
  [0, 3],
  [1, 2],
  [1, 4],
  [3, 5],
  [4, 6],
  [5, 6],
  [6, 7],
  [5, 8],
  [8, 9],
  [7, 9],
];

const glyphs = [
  { label: "ALPR", x: "14%", y: "22%" },
  { label: "CONF 0.984", x: "78%", y: "18%" },
  { label: "LENS · 50mm", x: "18%", y: "74%" },
  { label: "NODE 07", x: "72%", y: "68%" },
  { label: "FPS 30", x: "86%", y: "42%" },
] as const;

export function VisionHud({
  progress,
  pointerX,
  pointerY,
}: {
  progress: MotionValue<number>;
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
}) {
  const reduce = useReducedMotion();
  const fade = useTransform(progress, [0, 0.78, 1], [1, 1, 0]);
  const beamX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 40,
    damping: 22,
  });
  const boxX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-18, 18]), {
    stiffness: 28,
    damping: 24,
  });
  const boxY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-12, 12]), {
    stiffness: 28,
    damping: 24,
  });

  return (
    <motion.div
      aria-hidden
      style={{ opacity: fade }}
      className="pointer-events-none absolute inset-0 hidden lg:block"
    >
      <div className="vision-reticle" />
      <div className="vision-scanline" />
      <motion.div className="vision-beam" style={{ x: reduce ? 0 : beamX }} />

      <motion.div
        className="alpr-box"
        style={{ x: reduce ? 0 : boxX, y: reduce ? 0 : boxY }}
      >
        <span />
        <span />
        <span />
        <span />
        <em>LOCK · PLATE</em>
      </motion.div>

      <svg className="neural-map" viewBox="0 0 100 100" preserveAspectRatio="none">
        {links.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
          />
        ))}
        {nodes.map(([nx, ny], index) => (
          <circle key={`${nx}-${ny}`} cx={nx} cy={ny} r={index % 3 === 0 ? 0.7 : 0.45} />
        ))}
      </svg>

      {glyphs.map((glyph, index) => (
        <motion.span
          key={glyph.label}
          className="data-glyph"
          style={{ left: glyph.x, top: glyph.y }}
          animate={
            reduce
              ? undefined
              : { y: [0, index % 2 === 0 ? -8 : 8, 0], opacity: [0.35, 0.8, 0.35] }
          }
          transition={{ duration: 9 + index, repeat: Infinity, ease: "easeInOut" }}
        >
          {glyph.label}
        </motion.span>
      ))}
    </motion.div>
  );
}
