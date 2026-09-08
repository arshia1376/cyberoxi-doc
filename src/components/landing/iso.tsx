"use client";

import { motion, useReducedMotion, useTransform, type MotionValue } from "motion/react";
import { iso } from "@/data/site";
import { FrameViewLayer } from "@/components/ui/lightbox";
import { StickyScene } from "@/components/ui/sticky-scene";

function IsoInner({ progress }: { progress: MotionValue<number> }) {
  const reduce = useReducedMotion();
  const tiltX = useTransform(progress, [0, 1], reduce ? [0, 0] : [10, -8]);
  const tiltY = useTransform(progress, [0, 1], reduce ? [0, 0] : [-12, 10]);
  const scale = useTransform(progress, [0, 1], reduce ? [1, 1] : [0.88, 1.04]);
  const copy = useTransform(progress, [0.08, 0.32], [0, 1]);
  const opacity = useTransform(progress, [0, 0.12, 1], [1, 1, 1]);

  return (
    <div className="mx-auto grid h-full w-full max-w-7xl items-center gap-8 px-4 sm:px-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div>
        <p className="text-xs tracking-[0.3em] text-[var(--gold)]">QUALITY · GERMANY</p>
        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">{iso.title}</h2>
        <p className="mt-2 text-[var(--cyan)]">{iso.product}</p>
        <p className="mt-2 text-sm text-[var(--muted)]">{iso.issuer}</p>
        <p className="mt-5 leading-8 text-[var(--muted)]">{iso.story}</p>
        <motion.ul style={{ opacity: copy }} className="mt-6 space-y-2 text-sm text-[var(--muted)]">
          {iso.facts.map((item) => (
            <li key={item}>— {item}</li>
          ))}
        </motion.ul>
      </div>
      <div className="device-stage relative flex h-[70vh] items-center">
        <div className="relative w-full aspect-[3/4]">
          <FrameViewLayer
            items={iso.frames}
            index={0}
            opacity={opacity}
            tiltX={tiltX}
            tiltY={tiltY}
            scale={scale}
            imgClassName="!object-contain bg-white"
          />
        </div>
      </div>
    </div>
  );
}

export function Iso() {
  return (
    <section>
      <StickyScene id="iso" heightClass="h-[260vh]">
        {(progress) => <IsoInner progress={progress} />}
      </StickyScene>
      <div className="mx-auto grid max-w-7xl gap-5 px-4 pb-16 sm:px-8 sm:pb-24 md:grid-cols-2 lg:grid-cols-4">
        {iso.pillars.map((pillar) => (
          <article key={pillar.title} className="glass rounded-[1.6rem] p-6">
            <p className="text-xs tracking-[0.22em] text-[var(--gold)]">{pillar.kicker}</p>
            <h3 className="mt-3 text-xl font-bold">{pillar.title}</h3>
            <p className="mt-3 leading-8 text-[var(--muted)]">{pillar.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
