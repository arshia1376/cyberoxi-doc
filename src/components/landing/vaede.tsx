"use client";

import { motion, useReducedMotion, useTransform, type MotionValue } from "motion/react";
import { useContent } from "@/i18n/content";
import { StickyScene } from "@/components/ui/sticky-scene";
import { FrameViewLayer, type GalleryFrame } from "@/components/ui/lightbox";

function FrameLayer({
  items,
  index,
  progress,
  start,
  mid,
  end,
  tiltX,
  tiltY,
  scale,
}: {
  items: GalleryFrame[];
  index: number;
  progress: MotionValue<number>;
  start: number;
  mid: number;
  end: number;
  tiltX: MotionValue<number>;
  tiltY: MotionValue<number>;
  scale: MotionValue<number>;
}) {
  const opacity = useTransform(
    progress,
    [start, mid, end],
    start === 0 ? [1, 1, 0] : [0, 1, 0],
  );

  return (
    <FrameViewLayer
      items={items}
      index={index}
      opacity={opacity}
      tiltX={tiltX}
      tiltY={tiltY}
      scale={scale}
    />
  );
}

function VaedeInner({ progress }: { progress: MotionValue<number> }) {
  const { vaede, ui } = useContent();
  const reduce = useReducedMotion();
  const tiltX = useTransform(progress, [0, 1], reduce ? [0, 0] : [14, -14]);
  const tiltY = useTransform(progress, [0, 1], reduce ? [0, 0] : [-12, 12]);
  const scale = useTransform(progress, [0, 1], reduce ? [1, 1] : [0.88, 1.04]);
  const copy = useTransform(progress, [0.08, 0.28], [0, 1]);

  return (
    <div className="mx-auto grid h-full w-full max-w-7xl items-center gap-8 px-4 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="min-w-0">
        <p className="text-xs tracking-[0.3em] text-[var(--cyan)]">SOFTWARE · VAEDE</p>
        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">{vaede.title}</h2>
        <p className="mt-2 text-[var(--gold)]">{vaede.product}</p>
        <p className="mt-2 text-sm text-[var(--muted)]">{vaede.kicker}</p>
        <p className="mt-4 leading-8 text-[var(--muted)]">{vaede.about}</p>
        <motion.ul style={{ opacity: copy }} className="mt-6 space-y-2 text-sm text-[var(--muted)]">
          {vaede.features.map((item) => (
            <li key={item}>— {item}</li>
          ))}
        </motion.ul>
        <a
          href={vaede.url}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-full bg-[var(--cyan)] px-5 py-2.5 font-semibold text-[#08221d]"
        >
          {ui.enterVaede}
        </a>
      </div>
      <div className="device-stage relative h-[62vh]">
        {vaede.frames.map((frame, index) => {
          const start = index / vaede.frames.length;
          const mid = (index + 0.55) / vaede.frames.length;
          const end = Math.min(1, (index + 1.05) / vaede.frames.length);
          return (
            <FrameLayer
              key={frame.src}
              items={vaede.frames}
              index={index}
              progress={progress}
              start={start}
              mid={mid}
              end={end}
              tiltX={tiltX}
              tiltY={tiltY}
              scale={scale}
            />
          );
        })}
      </div>
    </div>
  );
}

export function Vaede() {
  return (
    <StickyScene id="vaede" heightClass="h-[320vh]">
      {(progress) => <VaedeInner progress={progress} />}
    </StickyScene>
  );
}
