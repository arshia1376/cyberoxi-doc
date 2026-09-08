"use client";

import { useMotionValue, useMotionValueEvent, useScroll, type MotionValue } from "motion/react";
import { type ReactNode, useEffect, useRef, useState } from "react";

type StickySceneProps = {
  children: (progress: MotionValue<number>) => ReactNode;
  heightClass?: string;
  id?: string;
  className?: string;
  fillMobile?: boolean;
};

export function useDesktopSticky() {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return desktop;
}

export function StickyScene({
  children,
  heightClass = "md:h-[240vh]",
  id,
  className,
  fillMobile = false,
}: StickySceneProps) {
  const ref = useRef<HTMLDivElement>(null);
  const desktop = useDesktopSticky();
  const idle = useMotionValue(0);
  const safe = useMotionValue(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (!desktop) {
      safe.set(0);
      return;
    }
    const el = ref.current;
    const tall = (el?.offsetHeight ?? 0) > window.innerHeight * 1.35;
    if (!tall || window.scrollY < 4) {
      safe.set(0);
      return;
    }
    safe.set(value);
  });

  useEffect(() => {
    if (!desktop) safe.set(0);
  }, [desktop, safe]);

  return (
    <section id={id} ref={ref} className={`relative h-auto ${heightClass} ${className ?? ""}`}>
      <div
        className={`flex w-full min-w-0 max-w-full items-center max-md:overflow-x-clip md:sticky md:top-0 md:h-dvh md:overflow-hidden ${
          fillMobile ? "max-md:min-h-[100svh]" : "max-md:min-h-0 max-md:py-12"
        }`}
      >
        {children(desktop ? safe : idle)}
      </div>
    </section>
  );
}
