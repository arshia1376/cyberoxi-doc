"use client";

import { motion, useMotionValueEvent, useReducedMotion, useTransform, type MotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { CinematicVideo } from "@/components/ui/cinematic-video";
import { FrameViewLayer, useVisiblePointer, type GalleryFrame } from "@/components/ui/lightbox";
import { useContent } from "@/i18n/content";
import { StickyScene } from "@/components/ui/sticky-scene";

const STILL_SPAN = 0.68;

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
      imgClassName="!object-contain bg-[#111]"
    />
  );
}

function CallistoNews() {
  const { callisto, ui } = useContent();
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.defaultMuted = false;
    el.muted = false;
    el.volume = 1;
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-8 sm:pb-24" id="callisto-news">
      <div className="device-stage mx-auto mb-8 max-w-4xl md:hidden">
        <div className="device-frame aspect-video">
          <CinematicVideo src={callisto.video} poster={callisto.brochure} />
        </div>
        <p className="mt-4 text-center text-xs tracking-[0.18em] text-[var(--gold)]">
          {ui.callistoLine}
        </p>
      </div>
      <div className="device-stage mx-auto max-w-4xl">
        <motion.div
          className="device-frame aspect-video"
          style={{ rotateY: -8, rotateX: 5 }}
        >
          <video
            ref={ref}
            src={callisto.news.src}
            controls
            playsInline
            preload="metadata"
            className="!object-contain bg-[#111]"
            aria-label={callisto.news.label}
          />
        </motion.div>
        <p className="mt-4 text-center text-xs tracking-[0.18em] text-[var(--gold)]">
          {callisto.news.label}
        </p>
      </div>
    </div>
  );
}

function CallistoInner({ progress }: { progress: MotionValue<number> }) {
  const { callisto } = useContent();
  const reduce = useReducedMotion();
  const tiltX = useTransform(progress, [0, 1], reduce ? [0, 0] : [12, -10]);
  const tiltY = useTransform(progress, [0, 1], reduce ? [0, 0] : [-14, 12]);
  const scale = useTransform(progress, [0, 1], reduce ? [1, 1] : [0.78, 1.04]);
  const videoOpacity = useTransform(progress, [0.58, 0.74, 1], [0, 1, 1]);
  const videoPointer = useVisiblePointer(videoOpacity);
  const copy = useTransform(progress, [0.08, 0.28], [0, 1]);
  const count = callisto.frames.length;
  const [videoOn, setVideoOn] = useState(true);

  useMotionValueEvent(videoOpacity, "change", (value) => {
    setVideoOn(value > 0.12);
  });

  return (
    <div className="mx-auto grid h-full w-full max-w-7xl items-center gap-8 px-4 sm:px-8 lg:grid-cols-2">
      <div className="min-w-0">
        <p className="text-xs tracking-[0.3em] text-[var(--gold)]">MACHINERY · SAHAR</p>
        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">{callisto.title}</h2>
        <p className="mt-2 text-[var(--cyan)]">{callisto.product}</p>
        <p className="mt-2 text-sm text-[var(--muted)]">{callisto.client}</p>
        <p className="mt-4 leading-8 text-[var(--muted)]">{callisto.summary}</p>
        <motion.ul style={{ opacity: copy }} className="mt-6 space-y-2 text-sm text-[var(--muted)]">
          {callisto.capabilities.map((item) => (
            <li key={item}>— {item}</li>
          ))}
        </motion.ul>
        <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
          {callisto.facts.slice(0, 3).map((item) => (
            <li key={item}>— {item}</li>
          ))}
        </ul>
      </div>
      <div className="device-stage relative h-[62vh]">
        {callisto.frames.map((frame, index) => {
          const start = (index / count) * STILL_SPAN;
          const mid = ((index + 0.5) / count) * STILL_SPAN;
          const end = ((index + 1.05) / count) * STILL_SPAN;
          return (
            <FrameLayer
              key={frame.src}
              items={callisto.frames}
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
        <motion.div
          style={{
            opacity: videoOpacity,
            scale,
            rotateX: tiltX,
            rotateY: tiltY,
            pointerEvents: videoPointer,
          }}
          className="device-frame absolute inset-0"
        >
          <CinematicVideo
            src={callisto.video}
            poster={callisto.brochure}
            active={videoOn}
          />
        </motion.div>
      </div>
    </div>
  );
}

export function Callisto() {
  return (
    <section>
      <StickyScene id="callisto" heightClass="md:h-[380vh]">
        {(progress) => <CallistoInner progress={progress} />}
      </StickyScene>
      <CallistoNews />
    </section>
  );
}
