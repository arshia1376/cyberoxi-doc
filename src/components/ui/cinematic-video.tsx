"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

type CinematicVideoProps = {
  src: string;
  className?: string;
  poster?: string;
  eager?: boolean;
  active?: boolean;
};

export function CinematicVideo({
  src,
  className,
  poster,
  eager = false,
  active = true,
}: CinematicVideoProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tryPlay = () => {
      if (reduce || !active) {
        el.pause();
        return;
      }
      void el.play().catch(() => undefined);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay();
        else el.pause();
      },
      { rootMargin: eager ? "120px 0px" : "320px 0px", threshold: 0 },
    );
    io.observe(el);
    el.addEventListener("canplay", tryPlay);
    tryPlay();

    return () => {
      io.disconnect();
      el.removeEventListener("canplay", tryPlay);
      el.pause();
    };
  }, [src, reduce, active, eager]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      autoPlay
      preload={eager ? "auto" : "metadata"}
      aria-hidden
      className={className}
    />
  );
}
