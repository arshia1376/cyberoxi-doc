"use client";

import { useReducedMotion, useTransform, type MotionValue } from "motion/react";
import { parko } from "@/data/site";
import { StickyScene } from "@/components/ui/sticky-scene";
import { FrameViewLayer } from "@/components/ui/lightbox";

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
  items: typeof parko.frames;
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

function ParkoInner({ progress }: { progress: MotionValue<number> }) {
  const reduce = useReducedMotion();
  const tiltX = useTransform(progress, [0, 1], reduce ? [0, 0] : [16, -16]);
  const tiltY = useTransform(progress, [0, 1], reduce ? [0, 0] : [-14, 14]);
  const scale = useTransform(progress, [0, 1], reduce ? [1, 1] : [0.88, 1.04]);

  return (
    <div className="mx-auto grid h-full w-full max-w-7xl items-center gap-8 px-4 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-xs tracking-[0.3em] text-[var(--cyan)]">SOFTWARE · PARKO</p>
        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">{parko.title}</h2>
        <p className="mt-2 text-[var(--gold)]">{parko.product}</p>
        <p className="mt-4 leading-8 text-[var(--muted)]">{parko.story}</p>
        <ul className="mt-6 space-y-2 text-sm text-[var(--muted)]">
          {parko.features.slice(0, 5).map((item) => (
            <li key={item}>— {item}</li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-[var(--muted)]">
          اعداد داشبورد فقط نمای رابط‌اند، نه آمار رسمی سایت.
        </p>
        <a
          href={parko.url}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex rounded-full bg-[var(--cyan)] px-5 py-2.5 font-semibold text-[#08221d]"
        >
          مشاهده parko.ir
        </a>
      </div>
      <div className="device-stage relative h-[62vh]">
        {parko.frames.map((frame, index) => {
          const start = index / parko.frames.length;
          const mid = (index + 0.55) / parko.frames.length;
          const end = Math.min(1, (index + 1.05) / parko.frames.length);
          return (
            <FrameLayer
              key={frame.src}
              items={parko.frames}
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

export function Parko() {
  return (
    <StickyScene id="parko" heightClass="h-[320vh]">
      {(progress) => <ParkoInner progress={progress} />}
    </StickyScene>
  );
}
