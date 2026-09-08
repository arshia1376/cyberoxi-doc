"use client";

import { motion, useReducedMotion, useTransform, type MotionValue } from "motion/react";
import { CinematicVideo } from "@/components/ui/cinematic-video";
import { FrameViewLayer } from "@/components/ui/lightbox";
import { zar } from "@/data/site";
import { StickyScene } from "@/components/ui/sticky-scene";

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
  items: typeof zar.frames;
  index: number;
  progress: MotionValue<number>;
  start: number;
  mid: number;
  end: number;
  tiltX: MotionValue<number>;
  tiltY: MotionValue<number>;
  scale: MotionValue<number>;
}) {
  const stay = end >= 1;
  const opacity = useTransform(
    progress,
    [start, mid, end],
    start === 0 ? (stay ? [1, 1, 1] : [1, 1, 0]) : stay ? [0, 1, 1] : [0, 1, 0],
  );
  const label = items[index]?.label ?? "";

  return (
    <>
      <FrameViewLayer
        items={items}
        index={index}
        opacity={opacity}
        tiltX={tiltX}
        tiltY={tiltY}
        scale={scale}
        imgClassName="!object-contain bg-[#0b0d12]"
      />
      <motion.p
        style={{ opacity }}
        className="pointer-events-none absolute inset-x-0 -bottom-9 text-center text-xs tracking-[0.18em] text-[var(--gold)]"
      >
        {label}
      </motion.p>
    </>
  );
}

function ZarInner({ progress }: { progress: MotionValue<number> }) {
  const reduce = useReducedMotion();
  const tiltX = useTransform(progress, [0, 1], reduce ? [0, 0] : [14, -14]);
  const tiltY = useTransform(progress, [0, 1], reduce ? [0, 0] : [12, -12]);
  const scale = useTransform(progress, [0, 1], reduce ? [1, 1] : [0.88, 1.04]);
  const copy = useTransform(progress, [0.08, 0.28], [0, 1]);

  return (
    <div className="mx-auto grid h-full w-full max-w-7xl items-center gap-8 px-4 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-xs tracking-[0.3em] text-[var(--gold)]">MACHINERY · ZAR</p>
        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">{zar.title}</h2>
        <p className="mt-2 text-[var(--cyan)]">{zar.product}</p>
        <p className="mt-2 text-sm text-[var(--muted)]">{zar.client}</p>
        <p className="mt-4 leading-8 text-[var(--muted)]">{zar.story}</p>
        <motion.ul style={{ opacity: copy }} className="mt-6 space-y-2 text-sm text-[var(--muted)]">
          {zar.facts.slice(0, 6).map((item) => (
            <li key={item}>— {item}</li>
          ))}
        </motion.ul>
      </div>
      <div className="device-stage relative flex h-[62vh] items-center pb-10">
        <div className="relative w-full aspect-[2/1]">
          {zar.frames.map((frame, index) => {
            const start = index / zar.frames.length;
            const mid = (index + 0.55) / zar.frames.length;
            const end = Math.min(1, (index + 1.05) / zar.frames.length);
            return (
              <FrameLayer
                key={frame.src}
                items={zar.frames}
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
    </div>
  );
}

export function Zar() {
  return (
    <section>
      <StickyScene id="zar" heightClass="h-[520vh]">
        {(progress) => <ZarInner progress={progress} />}
      </StickyScene>
      <div className="mx-auto grid max-w-7xl gap-5 px-4 pb-16 sm:px-8 sm:pb-24 md:grid-cols-3">
        {zar.videos.map((src) => (
          <div key={src} className="device-frame aspect-video">
            <CinematicVideo src={src} />
          </div>
        ))}
      </div>
    </section>
  );
}
