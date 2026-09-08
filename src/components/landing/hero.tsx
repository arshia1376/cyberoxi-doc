"use client";

import { motion, useReducedMotion, useTransform, type MotionValue } from "motion/react";
import { HeroFlameMark, HeroWordmark } from "@/components/brand/logo";
import { VisionHud, usePointerField } from "@/components/landing/vision-hud";
import { CinematicVideo } from "@/components/ui/cinematic-video";
import { company } from "@/data/site";
import { StickyScene } from "@/components/ui/sticky-scene";

function HeroFilm({ progress }: { progress: MotionValue<number> }) {
  const reduce = useReducedMotion();
  const scale = useTransform(progress, [0, 1], reduce ? [1, 1] : [1.1, 1.28]);
  const y = useTransform(progress, [0, 1], reduce ? [0, 0] : [0, -48]);
  const fade = useTransform(progress, [0.72, 1], [1, 0]);

  return (
    <motion.div
      aria-hidden
      style={{ opacity: fade }}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div className="absolute -inset-[8%]" style={{ scale, y }}>
        <CinematicVideo
          src={company.film}
          eager
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="hero-grade" />
      <div className="hero-vignette" />
    </motion.div>
  );
}

function HeroInner({ progress }: { progress: MotionValue<number> }) {
  const reduce = useReducedMotion();
  const { x, y } = usePointerField();
  const scale = useTransform(progress, [0, 1], reduce ? [1, 1] : [1.04, 0.94]);
  const opacity = useTransform(progress, [0, 0.74, 1], [1, 1, 0]);
  const sub = useTransform(progress, [0.08, 0.36], reduce ? [1, 1] : [0, 1]);
  const markShift = useTransform(progress, [0, 1], reduce ? [0, 0] : [0, -18]);

  return (
    <div className="relative h-full w-full">
      <HeroFilm progress={progress} />
      <VisionHud progress={progress} pointerX={x} pointerY={y} />

      <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-4 sm:px-8">
        <motion.div
          aria-hidden
          style={{ y: markShift, opacity }}
          className="pointer-events-none absolute top-[18%] left-[4%] hidden lg:block"
        >
          <HeroFlameMark className="h-36 w-36" />
        </motion.div>

        <motion.p
          style={{ opacity: sub }}
          className="mb-8 text-xs tracking-[0.42em] text-[var(--gold)]"
        >
          KNOWLEDGE-BASED · MACHINE VISION
        </motion.p>
        <motion.div style={{ scale, opacity }} className="origin-right">
          <HeroWordmark pointerX={x} pointerY={y} />
        </motion.div>
        <motion.h1
          style={{ opacity: sub }}
          className="mt-6 max-w-3xl text-2xl font-medium text-[var(--ink)] sm:text-3xl lg:text-5xl"
        >
          {company.legalName}
        </motion.h1>
        <motion.p
          style={{ opacity: sub }}
          className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:mt-6 sm:text-lg sm:leading-9 lg:text-xl"
        >
          {company.tagline}. {company.description}
        </motion.p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <StickyScene id="top" heightClass="h-[240vh]">
      {(progress) => <HeroInner progress={progress} />}
    </StickyScene>
  );
}
