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
  const markShift = useTransform(progress, [0, 1], reduce ? [0, 0] : [0, -18]);

  return (
    <div className="relative h-full min-h-[100svh] w-full md:min-h-0">
      <HeroFilm progress={progress} />
      <VisionHud progress={progress} pointerX={x} pointerY={y} />

      <div className="relative mx-auto flex h-full min-h-[100svh] w-full max-w-7xl flex-col justify-center px-4 pt-24 pb-10 sm:px-8 md:min-h-0 md:pt-0 md:pb-0">
        <motion.div
          aria-hidden
          style={{ y: markShift, opacity }}
          className="pointer-events-none mb-6 self-end lg:absolute lg:top-[18%] lg:left-[4%] lg:mb-0 lg:self-auto"
        >
          <HeroFlameMark className="h-24 w-24 sm:h-28 sm:w-28 lg:h-36 lg:w-36" />
        </motion.div>

        <motion.p
          style={{ opacity }}
          className="mb-5 text-xs tracking-[0.42em] text-[var(--gold)] sm:mb-8"
        >
          KNOWLEDGE-BASED · MACHINE VISION
        </motion.p>
        <motion.div style={{ scale, opacity }} className="origin-right">
          <HeroWordmark pointerX={x} pointerY={y} />
        </motion.div>
        <motion.h1
          style={{ opacity }}
          className="mt-5 max-w-3xl text-2xl font-medium text-[var(--ink)] sm:mt-6 sm:text-3xl lg:text-5xl"
        >
          {company.legalName}
        </motion.h1>
        <motion.p
          style={{ opacity }}
          className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)] sm:mt-6 sm:text-lg sm:leading-9 lg:text-xl"
        >
          {company.tagline}. {company.description}
        </motion.p>
        <motion.div style={{ opacity }} className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
          <a
            href="#worlds"
            className="rounded-full bg-[var(--gold)] px-5 py-2.5 text-sm font-semibold text-[#1a1408]"
          >
            دو دنیا
          </a>
          <a href="#contact" className="text-sm text-[var(--muted)] hover:text-[var(--gold)]">
            گفت‌وگو با مجموعه
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <StickyScene id="top" heightClass="h-[240vh]" fillMobile>
      {(progress) => <HeroInner progress={progress} />}
    </StickyScene>
  );
}
