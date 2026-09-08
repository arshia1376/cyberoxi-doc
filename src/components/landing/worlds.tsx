"use client";

import { motion, useReducedMotion, useTransform, type MotionValue } from "motion/react";
import { StickyScene, useDesktopSticky } from "@/components/ui/sticky-scene";
import { IconMachinery, IconSoftware } from "@/components/ui/icons";
import { useContent } from "@/i18n/content";

function SoftwareHud({ progress, reduce }: { progress: MotionValue<number>; reduce: boolean | null }) {
  const scan = useTransform(progress, [0, 1], reduce ? ["22%", "22%"] : ["10%", "82%"]);
  const radar = useTransform(progress, [0, 1], reduce ? [0, 0] : [0, 180]);

  const windows = [
    { x: 10, y: 22, w: 34, h: 22 },
    { x: 48, y: 18, w: 40, h: 18 },
    { x: 12, y: 50, w: 28, h: 26 },
    { x: 46, y: 42, w: 42, h: 34 },
  ];

  return (
    <>
      <div className="absolute inset-0 bg-[#07090f]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(94,234,212,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,0.07) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(94,234,212,0.16),transparent_55%)]" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {windows.map((box) => (
          <g key={`${box.x}-${box.y}`}>
            <rect
              x={box.x}
              y={box.y}
              width={box.w}
              height={box.h}
              rx="1.4"
              fill="rgba(8,14,18,0.7)"
              stroke="rgba(94,234,212,0.28)"
              strokeWidth="0.35"
            />
            <rect x={box.x} y={box.y} width={box.w} height="3.2" rx="1.4" fill="rgba(94,234,212,0.12)" />
          </g>
        ))}
        <motion.g style={{ rotate: radar, transformOrigin: "78% 78%" }}>
          <circle cx="78" cy="78" r="10" fill="none" stroke="rgba(94,234,212,0.22)" strokeWidth="0.3" />
          <circle cx="78" cy="78" r="16" fill="none" stroke="rgba(224,177,90,0.16)" strokeWidth="0.25" />
          <line x1="78" y1="62" x2="78" y2="94" stroke="rgba(94,234,212,0.12)" strokeWidth="0.2" />
        </motion.g>
        {[
          [18, 28],
          [62, 26],
          [28, 58],
          [70, 52],
          [54, 70],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="0.9" fill="#5eead4" opacity="0.9" />
        ))}
      </svg>

      <motion.div
        style={{ top: scan }}
        className="pointer-events-none absolute right-0 left-0 h-px bg-gradient-to-l from-transparent via-[var(--cyan)] to-transparent opacity-80"
      />
    </>
  );
}

function MachineryHud({ progress, reduce }: { progress: MotionValue<number>; reduce: boolean | null }) {
  const belt = useTransform(progress, [0, 1], reduce ? [0, 0] : [0, 28]);
  const scan = useTransform(progress, [0, 1], reduce ? ["40%", "40%"] : ["18%", "72%"]);
  const gear = useTransform(progress, [0, 1], reduce ? [0, 0] : [0, 140]);

  return (
    <>
      <div className="absolute inset-0 bg-[#0b0c10]" />
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(rgba(224,177,90,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(224,177,90,0.08) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(224,177,90,0.16),transparent_55%)]" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <rect x="8" y="58" width="84" height="10" rx="1" fill="#161820" stroke="rgba(224,177,90,0.28)" strokeWidth="0.35" />
        <motion.g style={{ x: belt }}>
          {[10, 26, 42, 58, 74].map((x) => (
            <rect key={x} x={x} y="60" width="10" height="6" rx="0.6" fill="rgba(224,177,90,0.35)" />
          ))}
        </motion.g>
        <rect x="22" y="22" width="28" height="28" rx="1.5" fill="none" stroke="rgba(94,234,212,0.55)" strokeWidth="0.45" />
        <path d="M22 22h5M45 22h5M22 50h5M45 50h5" stroke="rgba(94,234,212,0.7)" strokeWidth="0.5" />
        <text x="24" y="20" fill="rgba(94,234,212,0.7)" fontSize="3.2" fontFamily="sans-serif">
          LOCK · PART
        </text>
        <motion.g style={{ rotate: gear, transformOrigin: "78px 30px" }}>
          <circle cx="78" cy="30" r="8" fill="none" stroke="rgba(224,177,90,0.55)" strokeWidth="0.5" />
          <circle cx="78" cy="30" r="3" fill="rgba(224,177,90,0.35)" />
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <rect
              key={deg}
              x="76.6"
              y="20"
              width="2.8"
              height="4"
              rx="0.3"
              fill="rgba(224,177,90,0.55)"
              transform={`rotate(${deg} 78 30)`}
            />
          ))}
        </motion.g>
      </svg>

      <motion.div
        style={{ top: scan }}
        className="pointer-events-none absolute right-0 left-0 h-px bg-gradient-to-l from-transparent via-[var(--gold)] to-transparent opacity-80"
      />
    </>
  );
}

function WorldCard({
  href,
  kicker,
  title,
  summary,
  status,
  tone,
  progress,
  reduce,
}: {
  href: string;
  kicker: string;
  title: string;
  summary: string;
  status: string;
  tone: "cyan" | "gold";
  progress: MotionValue<number>;
  reduce: boolean | null;
}) {
  const tiltX = useTransform(progress, [0, 1], reduce ? [0, 0] : tone === "cyan" ? [10, -8] : [8, -10]);
  const tiltY = useTransform(progress, [0, 1], reduce ? [0, 0] : tone === "cyan" ? [-8, 12] : [10, -8]);
  const scale = useTransform(progress, [0, 1], reduce ? [1, 1] : [0.94, 1.03]);
  const cyan = tone === "cyan";

  return (
    <motion.a
      href={href}
      style={
        reduce
          ? undefined
          : { rotateX: tiltX, rotateY: tiltY, scale, transformPerspective: 1600 }
      }
      className="device-frame relative block aspect-[16/11] min-w-0 w-full overflow-hidden"
    >
      {cyan ? <SoftwareHud progress={progress} reduce={reduce} /> : <MachineryHud progress={progress} reduce={reduce} />}

      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4">
        <p className={`max-w-[50%] truncate text-[0.65rem] tracking-[0.28em] max-md:tracking-[0.12em] ${cyan ? "text-[var(--cyan)]" : "text-[var(--gold)]"}`}>
          {kicker}
        </p>
        <p className="flex min-w-0 items-center gap-2 text-[0.65rem] tracking-[0.22em] text-[var(--muted)] max-md:tracking-[0.08em]">
          <span className={`h-1.5 w-1.5 rounded-full ${cyan ? "bg-[var(--cyan)]" : "bg-[var(--gold)]"}`} />
          {status}
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-4 pb-4 pt-12 sm:px-5 sm:pb-5">
        <span
          className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl border ${
            cyan
              ? "border-[var(--cyan)]/25 bg-[rgba(94,234,212,0.1)] text-[var(--cyan)]"
              : "border-[var(--gold)]/25 bg-[rgba(224,177,90,0.1)] text-[var(--gold)]"
          }`}
        >
          {cyan ? <IconSoftware /> : <IconMachinery />}
        </span>
        <h2 className="text-3xl font-bold lg:text-4xl">{title}</h2>
        <p className="mt-2 max-w-md text-sm leading-7 text-[var(--muted)]">{summary}</p>
      </div>
    </motion.a>
  );
}

function WorldsInner({ progress }: { progress: MotionValue<number> }) {
  const { worlds } = useContent();
  const reduceMotion = useReducedMotion();
  const desktop = useDesktopSticky();
  const reduce = Boolean(reduceMotion) || !desktop;

  return (
    <div className="mx-auto flex h-full w-full min-w-0 max-w-7xl flex-col justify-center gap-6 overflow-x-hidden px-4 max-md:justify-start sm:px-8">
      <div className="max-w-3xl min-w-0">
        <p className="text-xs tracking-[0.3em] text-[var(--gold)] max-md:tracking-[0.12em]">{worlds.kicker}</p>
        <h2 className="mt-3 max-w-full text-3xl font-bold sm:text-5xl">{worlds.title}</h2>
        <p className="mt-4 max-w-full leading-8 text-[var(--muted)] sm:max-w-2xl">{worlds.fusion}</p>
      </div>

      <div className="device-stage grid min-w-0 gap-5 lg:grid-cols-2">
        <WorldCard
          href={worlds.software.href}
          kicker={worlds.software.kicker}
          title={worlds.software.title}
          summary={worlds.software.summary}
          status={worlds.software.status}
          tone="cyan"
          progress={progress}
          reduce={reduce}
        />
        <WorldCard
          href={worlds.machinery.href}
          kicker={worlds.machinery.kicker}
          title={worlds.machinery.title}
          summary={worlds.machinery.summary}
          status={worlds.machinery.status}
          tone="gold"
          progress={progress}
          reduce={reduce}
        />
      </div>
    </div>
  );
}

export function Worlds() {
  return (
    <StickyScene id="worlds" heightClass="h-[220vh]">
      {(progress) => <WorldsInner progress={progress} />}
    </StickyScene>
  );
}
