"use client";

import { motion, useReducedMotion, useSpring, useTransform, type MotionValue } from "motion/react";
import { company } from "@/data/site";

type LogoProps = {
  className?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;
const prefix = ["C", "Y", "B", "E", "R"] as const;
const suffix = ["X", "I"] as const;

export function BrandMark({ className = "h-9 w-9" }: LogoProps) {
  return (
    <img
      src="/cyberoxi-mark.png"
      alt=""
      decoding="async"
      fetchPriority="high"
      className={`rounded-[0.7rem] object-cover ${className}`}
    />
  );
}

export function BrandWordmark({ className = "h-6 w-auto" }: LogoProps) {
  return (
    <img
      src="/cyberoxi-wordmark-light.png"
      alt={company.brand}
      className={`object-contain object-right ${className}`}
    />
  );
}

export function BrandLockup({
  className,
  markClassName = "h-9 w-9",
  wordmarkClassName = "h-5 w-auto",
}: LogoProps & { markClassName?: string; wordmarkClassName?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <BrandMark className={markClassName} />
      <BrandWordmark className={`hidden sm:block ${wordmarkClassName}`} />
    </span>
  );
}

function Letter({
  char,
  delay,
  reduce,
}: {
  char: string;
  delay: number;
  reduce: boolean | null;
}) {
  return (
    <motion.span
      className="hero-letter"
      initial={reduce ? false : { opacity: 0, z: -56, y: 10 }}
      animate={{ opacity: 1, z: 0, y: 0 }}
      transition={{ duration: 1.05, delay, ease }}
    >
      {char}
    </motion.span>
  );
}

export function HeroIris({
  pointerX,
  pointerY,
}: {
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
}) {
  const reduce = useReducedMotion();
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [14, -14]), {
    stiffness: 70,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-16, 16]), {
    stiffness: 70,
    damping: 22,
  });

  return (
    <motion.span
      className="hero-iris"
      style={{
        rotateX: reduce ? 0 : rotateX,
        rotateY: reduce ? 0 : rotateY,
        transformPerspective: 900,
      }}
      initial={reduce ? false : { opacity: 0, scale: 0.72, z: -40 }}
      animate={{ opacity: 1, scale: 1, z: 0 }}
      transition={{ duration: 1.2, delay: 0.55, ease }}
    >
      <span className="hero-iris-ring hero-iris-ring-a" />
      <span className="hero-iris-ring hero-iris-ring-b" />
      <span className="hero-iris-ring hero-iris-ring-c" />
      <span className="hero-iris-core" />
      <span className="hero-iris-glint" />
    </motion.span>
  );
}

export function HeroWordmark({
  pointerX,
  pointerY,
}: {
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
}) {
  const reduce = useReducedMotion();

  return (
    <div className="hero-wordmark" dir="ltr" aria-label={company.brand}>
      <svg
        className="hero-arch"
        viewBox="0 0 760 90"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="arch-metal" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#f8e7c0" />
            <stop offset="0.45" stopColor="#e0b15a" />
            <stop offset="1" stopColor="#f4efe6" />
          </linearGradient>
          <mask id="arch-reveal">
            <motion.rect
              x="0"
              y="0"
              height="90"
              fill="white"
              initial={{ width: reduce ? 760 : 0 }}
              animate={{ width: 760 }}
              transition={{ duration: 1.7, delay: 0.7, ease }}
            />
          </mask>
        </defs>
        <motion.path
          d="M48 72 C 210 10, 430 2, 718 58"
          stroke="url(#arch-metal)"
          strokeWidth="3.4"
          strokeLinecap="round"
          mask="url(#arch-reveal)"
          initial={reduce ? false : { pathLength: 0, opacity: 0.35 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.65, ease }}
        />
        <motion.path
          d="M52 76 C 214 18, 428 10, 712 62 L 718 58 C 430 2, 210 10, 48 72 Z"
          fill="url(#arch-metal)"
          opacity={0.22}
          mask="url(#arch-reveal)"
        />
      </svg>

      <div className="hero-letters">
        {prefix.map((char, index) => (
          <Letter key={char} char={char} delay={0.08 + index * 0.08} reduce={reduce} />
        ))}
        <HeroIris pointerX={pointerX} pointerY={pointerY} />
        {suffix.map((char, index) => (
          <Letter key={char} char={char} delay={0.72 + index * 0.1} reduce={reduce} />
        ))}
      </div>
    </div>
  );
}

export function HeroFlameMark({ className = "h-32 w-32" }: LogoProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`hero-flame ${className}`}
      style={{ transformPerspective: 1100, transformStyle: "preserve-3d" }}
      initial={reduce ? false : { opacity: 0, z: -30, rotateY: -24 }}
      animate={
        reduce
          ? { opacity: 1, z: 0, rotateY: 0 }
          : {
              opacity: 1,
              z: 0,
              rotateY: [-16, 16, -16],
              y: [0, -12, 0],
            }
      }
      transition={
        reduce
          ? { duration: 0.6 }
          : { duration: 14, repeat: Infinity, ease: "easeInOut" }
      }
    >
      <span className="hero-flame-ring hero-flame-ring-a" />
      <span className="hero-flame-ring hero-flame-ring-b" />
      <span className="hero-flame-ring hero-flame-ring-c" />
      <img
        src="/cyberoxi-mark.png"
        alt=""
        className="hero-flame-core"
      />
    </motion.div>
  );
}
