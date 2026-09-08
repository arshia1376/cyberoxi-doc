"use client";

import { useScroll, type MotionValue } from "motion/react";
import { type ReactNode, useRef } from "react";

type StickySceneProps = {
  children: (progress: MotionValue<number>) => ReactNode;
  heightClass?: string;
  id?: string;
  className?: string;
};

export function StickyScene({
  children,
  heightClass = "h-[240vh]",
  id,
  className,
}: StickySceneProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section id={id} ref={ref} className={`relative max-md:h-auto ${heightClass} ${className ?? ""}`}>
      <div className="flex items-center max-md:min-h-0 max-md:py-16 md:sticky md:top-0 md:h-screen md:overflow-hidden">
        {children(scrollYProgress)}
      </div>
    </section>
  );
}
