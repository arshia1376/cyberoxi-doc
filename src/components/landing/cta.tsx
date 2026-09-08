"use client";

import { motion, useReducedMotion, useTransform, type MotionValue } from "motion/react";
import { cta } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";
import { StickyScene } from "@/components/ui/sticky-scene";

function ClassifiedPanel({ progress }: { progress: MotionValue<number> }) {
  const reduce = useReducedMotion();
  const tiltX = useTransform(progress, [0, 1], reduce ? [0, 0] : [12, -10]);
  const tiltY = useTransform(progress, [0, 1], reduce ? [0, 0] : [-10, 12]);
  const scale = useTransform(progress, [0, 1], reduce ? [1, 1] : [0.92, 1.04]);
  const scan = useTransform(progress, [0, 1], reduce ? ["18%", "18%"] : ["8%", "88%"]);
  const radar = useTransform(progress, [0, 1], reduce ? [0, 0] : [0, 220]);

  const nodes = [
    { x: 22, y: 28 },
    { x: 48, y: 18 },
    { x: 74, y: 26 },
    { x: 18, y: 52 },
    { x: 82, y: 48 },
    { x: 30, y: 74 },
    { x: 62, y: 70 },
    { x: 78, y: 78 },
  ];

  return (
    <motion.div
      style={{ rotateX: tiltX, rotateY: tiltY, scale, transformPerspective: 1600 }}
      className="device-frame relative aspect-[4/5] overflow-hidden sm:aspect-[16/11] lg:aspect-[4/5]"
    >
      <div className="absolute inset-0 bg-[#07090f]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,239,230,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(244,239,230,0.06) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(94,234,212,0.12),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(224,177,90,0.16),transparent_42%)]" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <motion.g style={{ rotate: radar, transformOrigin: "50% 50%" }} className="origin-center">
          <circle cx="50" cy="50" r="18" fill="none" stroke="rgba(94,234,212,0.18)" strokeWidth="0.3" />
          <circle cx="50" cy="50" r="28" fill="none" stroke="rgba(224,177,90,0.16)" strokeWidth="0.25" />
          <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(244,239,230,0.08)" strokeWidth="0.2" />
          <line x1="50" y1="12" x2="50" y2="88" stroke="rgba(94,234,212,0.08)" strokeWidth="0.2" />
          <line x1="12" y1="50" x2="88" y2="50" stroke="rgba(94,234,212,0.08)" strokeWidth="0.2" />
        </motion.g>
        {nodes.map((node) => (
          <g key={`${node.x}-${node.y}`}>
            <circle cx={node.x} cy={node.y} r="1.15" fill="#5eead4" opacity="0.85" />
            <circle cx={node.x} cy={node.y} r="2.4" fill="none" stroke="rgba(94,234,212,0.35)" strokeWidth="0.25" />
          </g>
        ))}
      </svg>

      <motion.div
        style={{ top: scan }}
        className="pointer-events-none absolute right-0 left-0 h-px bg-gradient-to-l from-transparent via-[var(--cyan)] to-transparent opacity-70"
      />

      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4">
        <p className="text-[0.65rem] tracking-[0.28em] text-[var(--gold)]">CLASSIFIED · NDA</p>
        <p className="text-[0.65rem] tracking-[0.22em] text-[var(--cyan)]">LOCKED</p>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <div className="relative mb-5 grid h-16 w-16 place-items-center">
          <span className="absolute inset-0 rounded-full border border-[var(--gold)]/35" />
          <span className="absolute inset-2 rounded-full border border-dashed border-[var(--cyan)]/40" />
          <svg viewBox="0 0 24 24" className="relative h-7 w-7 text-[var(--gold)]" fill="none" aria-hidden>
            <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </div>
        <p className="gold-text text-5xl font-bold sm:text-6xl">{cta.stat.value}</p>
        <p className="mt-2 text-sm tracking-[0.28em] text-[var(--cyan)]">{cta.stat.unit}</p>
        <p className="mt-3 max-w-xs text-sm leading-7 text-[var(--muted)]">{cta.stat.label}</p>
      </div>

      <div className="absolute inset-x-0 bottom-0 px-5 pb-5">
        <p className="text-center text-[0.7rem] leading-6 text-[var(--muted)]">{cta.nda}</p>
      </div>
    </motion.div>
  );
}

function CtaInner({ progress }: { progress: MotionValue<number> }) {
  const reduce = useReducedMotion();
  const copy = useTransform(progress, [0.08, 0.32], reduce ? [1, 1] : [0, 1]);

  return (
    <div className="mx-auto grid h-full w-full max-w-7xl items-center gap-8 px-4 sm:px-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div>
        <p className="text-xs tracking-[0.3em] text-[var(--cyan)]">{cta.kicker}</p>
        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">{cta.title}</h2>
        <p className="mt-2 text-[var(--gold)]">{cta.product}</p>
        <p className="mt-2 text-sm text-[var(--muted)]">{cta.client}</p>
        <p className="mt-5 leading-8 text-[var(--muted)]">{cta.story}</p>
        <motion.ul style={{ opacity: copy }} className="mt-6 space-y-2 text-sm text-[var(--muted)]">
          {cta.features.map((item) => (
            <li key={item}>— {item}</li>
          ))}
        </motion.ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {cta.coverage.map((item) => (
            <span
              key={item.title}
              className="rounded-full border border-[var(--line)] px-3 py-1.5 text-xs tracking-[0.08em] text-[var(--ink)]"
            >
              <span className="me-2 tracking-[0.18em] text-[var(--cyan)]">{item.kicker}</span>
              {item.title}
            </span>
          ))}
        </div>
        <a
          href="#contact"
          className="mt-8 inline-flex rounded-full bg-[var(--cyan)] px-5 py-2.5 font-semibold text-[#08221d]"
        >
          {cta.cta}
        </a>
      </div>
      <div className="device-stage relative">
        <ClassifiedPanel progress={progress} />
      </div>
    </div>
  );
}

export function Cta() {
  return (
    <section>
      <StickyScene id="cta" heightClass="h-[240vh]">
        {(progress) => <CtaInner progress={progress} />}
      </StickyScene>
      <div className="mx-auto grid max-w-7xl gap-5 px-4 pb-16 sm:px-8 sm:pb-24 md:grid-cols-2 lg:grid-cols-4">
        {cta.pillars.map((pillar) => (
          <Reveal key={pillar.title}>
            <article className="glass h-full rounded-[1.6rem] p-6">
              <p className="text-xs tracking-[0.22em] text-[var(--gold)]">{pillar.kicker}</p>
              <h3 className="mt-3 text-xl font-bold">{pillar.title}</h3>
              <p className="mt-3 leading-8 text-[var(--muted)]">{pillar.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
