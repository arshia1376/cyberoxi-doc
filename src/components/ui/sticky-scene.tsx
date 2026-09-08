"use client";

import { useMotionValue, useScroll, type MotionValue } from "motion/react";
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
  heightClass = "h-[240vh]",
  id,
  className,
  fillMobile = false,
}: StickySceneProps) {
  const ref = useRef<HTMLDivElement>(null);
  const desktop = useDesktopSticky();
  const idle = useMotionValue(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section id={id} ref={ref} className={`relative max-md:!h-auto ${heightClass} ${className ?? ""}`}>
      <div
        className={`flex w-full min-w-0 max-w-full items-center overflow-x-hidden md:sticky md:top-0 md:h-screen md:overflow-hidden ${
          fillMobile ? "max-md:min-h-[100svh]" : "max-md:min-h-0 max-md:py-12"
        }`}
      >
        {children(desktop ? scrollYProgress : idle)}
      </div>
    </section>
  );
}
