"use client";

import { motion, useReducedMotion, useTransform, type MotionValue } from "motion/react";
import { useEffect, useState } from "react";
import { useContent } from "@/i18n/content";
import { Reveal } from "@/components/ui/reveal";
import { StickyScene } from "@/components/ui/sticky-scene";
import { IconCamera, IconCheck, IconFire, IconShield } from "@/components/ui/icons";

type VisionMode = "idle" | "scan" | "infer" | "fire" | "theft";

const cycle: Array<{ mode: Exclude<VisionMode, "idle">; ms: number }> = [
  { mode: "scan", ms: 2800 },
  { mode: "infer", ms: 1600 },
  { mode: "fire", ms: 4800 },
  { mode: "infer", ms: 1200 },
  { mode: "theft", ms: 4800 },
];

function useVisionCycle(reduce: boolean | null) {
  const [mode, setMode] = useState<VisionMode>(reduce ? "idle" : "scan");

  useEffect(() => {
    if (reduce) {
      setMode("idle");
      return;
    }
    let index = 0;
    let timer: ReturnType<typeof setTimeout>;
    const run = () => {
      setMode(cycle[index].mode);
      timer = setTimeout(() => {
        index = (index + 1) % cycle.length;
        run();
      }, cycle[index].ms);
    };
    run();
    return () => clearTimeout(timer);
  }, [reduce]);

  return mode;
}

function EmberField({ active }: { active: boolean }) {
  const sparks = [18, 34, 48, 62, 76, 88];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparks.map((left, i) => (
        <span
          key={left}
          className="ofogh-ember absolute bottom-[18%] h-1.5 w-1.5 rounded-full bg-[#ffb347]"
          style={{
            left: `${left}%`,
            animationDelay: `${i * 0.32}s`,
            animationPlayState: active ? "running" : "paused",
            opacity: active ? undefined : 0,
          }}
        />
      ))}
    </div>
  );
}

function HuntBox({
  tone,
  locked,
  reduce,
}: {
  tone: "idle" | "fire" | "theft";
  locked: boolean;
  reduce: boolean | null;
}) {
  const fire = tone === "fire";
  const color =
    fire ? "rgba(255,107,61,0.9)" : tone === "theft" ? "rgba(94,234,212,0.9)" : "rgba(224,177,90,0.55)";

  return (
    <motion.div
      className="pointer-events-none absolute"
      animate={
        reduce || locked
          ? {
              left: fire ? "42%" : "54%",
              top: fire ? "38%" : "28%",
              width: fire ? "28%" : "22%",
              height: fire ? "34%" : "42%",
            }
          : {
              left: ["18%", "52%", "34%", "18%"],
              top: ["22%", "18%", "46%", "22%"],
              width: ["22%", "18%", "26%", "22%"],
              height: ["28%", "32%", "24%", "28%"],
            }
      }
      transition={
        reduce || locked
          ? { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
          : { duration: 8.5, repeat: Infinity, ease: "easeInOut" }
      }
    >
      <span className="absolute top-0 left-0 h-2.5 w-2.5 border-t border-l" style={{ borderColor: color }} />
      <span className="absolute top-0 right-0 h-2.5 w-2.5 border-t border-r" style={{ borderColor: color }} />
      <span className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l" style={{ borderColor: color }} />
      <span className="absolute right-0 bottom-0 h-2.5 w-2.5 border-r border-b" style={{ borderColor: color }} />
      {locked && (
        <em className="absolute bottom-1 left-1 not-italic text-[0.58rem] tracking-[0.18em]" style={{ color }}>
          {fire ? "LOCK · FIRE" : "LOCK · THEFT"}
        </em>
      )}
    </motion.div>
  );
}

function FloorScene({ kind }: { kind: "aisle" | "checkout" | "stock" | "corridor" }) {
  if (kind === "checkout") {
    return (
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice">
        <rect width="160" height="100" fill="#0b0f16" />
        <rect x="18" y="58" width="124" height="8" rx="1" fill="#1a2230" />
        <rect x="22" y="48" width="36" height="12" rx="1.5" fill="#222b3b" />
        <rect x="66" y="46" width="36" height="14" rx="1.5" fill="#1d2636" />
        <rect x="110" y="48" width="30" height="12" rx="1.5" fill="#222b3b" />
        {[38, 80, 124].map((x) => (
          <circle key={x} cx={x} cy="42" r="3" fill="#f4efe6" opacity="0.35" />
        ))}
        <line x1="0" y1="72" x2="160" y2="72" stroke="rgba(244,239,230,0.08)" />
      </svg>
    );
  }

  if (kind === "stock") {
    return (
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice">
        <rect width="160" height="100" fill="#0a0d13" />
        {[16, 46, 76, 106].map((x, i) => (
          <g key={x}>
            <rect x={x} y={22 + (i % 2) * 6} width="26" height="54" rx="1" fill="#161c28" />
            <rect x={x + 3} y={28 + (i % 2) * 6} width="20" height="8" fill="#1e2634" />
            <rect x={x + 3} y={40 + (i % 2) * 6} width="20" height="8" fill="#1a222f" />
            <rect x={x + 3} y={52 + (i % 2) * 6} width="20" height="8" fill="#1e2634" />
          </g>
        ))}
      </svg>
    );
  }

  if (kind === "corridor") {
    return (
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice">
        <rect width="160" height="100" fill="#090c12" />
        <polygon points="58,18 102,18 148,100 12,100" fill="#10151e" />
        <polygon points="64,18 96,18 118,100 42,100" fill="#0c1119" />
        <line x1="80" y1="18" x2="80" y2="100" stroke="rgba(94,234,212,0.12)" strokeWidth="0.6" />
        <line x1="58" y1="18" x2="12" y2="100" stroke="rgba(244,239,230,0.1)" strokeWidth="0.5" />
        <line x1="102" y1="18" x2="148" y2="100" stroke="rgba(244,239,230,0.1)" strokeWidth="0.5" />
        {[36, 52, 68, 84].map((y) => (
          <line
            key={y}
            x1={58 + (y - 18) * -0.55}
            y1={y}
            x2={102 + (y - 18) * 0.55}
            y2={y}
            stroke="rgba(244,239,230,0.06)"
          />
        ))}
      </svg>
    );
  }

  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice">
      <rect width="160" height="100" fill="#0a0e15" />
      <polygon points="28,100 132,100 150,22 10,22" fill="#121826" />
      <line x1="10" y1="22" x2="28" y2="100" stroke="rgba(244,239,230,0.12)" />
      <line x1="150" y1="22" x2="132" y2="100" stroke="rgba(244,239,230,0.12)" />
      <line x1="80" y1="22" x2="80" y2="100" stroke="rgba(224,177,90,0.12)" />
      <rect x="4" y="26" width="22" height="68" fill="#171e2b" />
      <rect x="134" y="26" width="22" height="68" fill="#171e2b" />
      {[34, 48, 62, 76].map((y) => (
        <rect key={y} x="8" y={y} width="14" height="6" fill="#222b3b" />
      ))}
      {[34, 48, 62, 76].map((y) => (
        <rect key={`r-${y}`} x="138" y={y} width="14" height="6" fill="#222b3b" />
      ))}
    </svg>
  );
}

function Figure({ active, reduce }: { active: boolean; reduce: boolean | null }) {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice">
      <motion.g
        animate={
          reduce || !active
            ? { x: 86, opacity: 0.7 }
            : { x: [58, 112, 58], opacity: [0.55, 0.95, 0.55] }
        }
        transition={
          reduce || !active ? { duration: 0.35 } : { duration: 5.6, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <circle cx="0" cy="46" r="3.1" fill="#f4efe6" opacity="0.9" />
        <rect x="-2.2" y="50" width="4.4" height="11" rx="1.4" fill="#f4efe6" opacity="0.72" />
        <path d="M-2 62 L-5 72 M2 62 L6 72" stroke="#f4efe6" strokeWidth="1.1" opacity="0.55" />
      </motion.g>
    </svg>
  );
}

function CamTile({
  cam,
  label,
  kind,
  mode,
  reduce,
  alert,
}: {
  cam: string;
  label: string;
  kind: "aisle" | "checkout" | "stock" | "corridor";
  mode: VisionMode;
  reduce: boolean | null;
  alert: "fire" | "theft" | null;
}) {
  const focused = mode === "fire" || mode === "theft";
  const dim = focused && alert === null;
  const locked = alert !== null && (mode === "fire" || mode === "theft" || mode === "idle");

  return (
    <div
      className={`relative overflow-hidden rounded-xl border transition-[opacity,border-color] duration-500 ${
        alert === "fire"
          ? "ofogh-siren-fire border-[#ff6b3d]/70"
          : alert === "theft"
            ? "ofogh-siren-theft border-[var(--cyan)]/70"
            : "border-[var(--line)]"
      } ${dim ? "opacity-35" : "opacity-100"}`}
    >
      <FloorScene kind={kind} />
      {kind === "corridor" && <Figure active={mode === "theft" || mode === "scan"} reduce={reduce} />}
      {alert === "fire" && <div className="ofogh-heat absolute inset-0" />}
      {alert === "fire" && <EmberField active={!reduce && mode === "fire"} />}
      {(mode === "scan" || locked) && <HuntBox tone={alert ?? "idle"} locked={locked} reduce={reduce} />}
      {(mode === "scan" || mode === "infer") && <div className="ofogh-scan" />}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-2.5 py-1.5">
        <p className="font-mono text-[0.58rem] tracking-[0.16em] text-[var(--muted)]">{cam}</p>
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            alert === "fire" ? "bg-[#ff6b3d]" : alert === "theft" ? "bg-[var(--cyan)]" : "bg-[var(--gold)]"
          }`}
        />
      </div>
      <p className="absolute right-2.5 bottom-1.5 text-[0.62rem] text-[var(--muted)]">{label}</p>
    </div>
  );
}

function AlarmWave({ tone, active }: { tone: "fire" | "theft"; active: boolean }) {
  if (tone === "fire") {
    return (
      <svg className="mt-1 h-8 w-28" viewBox="0 0 120 32" aria-hidden>
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx="16"
            cy="16"
            r={5 + i * 3}
            fill="none"
            stroke="rgba(255,107,61,0.7)"
            strokeWidth="1.1"
            animate={active ? { r: [5 + i * 3, 18 + i * 5], opacity: [0.75, 0] } : { r: 8 + i * 4, opacity: 0.22 }}
            transition={active ? { duration: 1.8 + i * 0.25, repeat: Infinity, ease: "easeOut" } : { duration: 0.3 }}
          />
        ))}
        <path
          d="M48 22 C56 8 64 8 72 22 C80 8 88 8 96 22"
          fill="none"
          stroke="rgba(255,179,71,0.8)"
          strokeWidth="1.4"
        />
      </svg>
    );
  }

  const bars = [6, 14, 9, 18, 7, 16, 11, 20];
  return (
    <svg className="mt-1 h-8 w-28" viewBox="0 0 120 32" aria-hidden>
      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={8 + i * 14}
          y={32 - h}
          width="7"
          height={h}
          rx="1"
          fill={i % 2 ? "#5eead4" : "#e0b15a"}
          animate={
            active
              ? { y: [32 - h, 32 - h * 1.35, 32 - h * 0.45], height: [h, h * 1.35, h * 0.45] }
              : { y: 22, height: 8, opacity: 0.35 }
          }
          transition={
            active ? { duration: 0.42, repeat: Infinity, delay: i * 0.05, ease: "easeInOut" } : { duration: 0.3 }
          }
        />
      ))}
    </svg>
  );
}

function ClassifyHud({ mode }: { mode: VisionMode }) {
  const { ui } = useContent();

  return (
    <motion.div
      aria-hidden
      animate={{ opacity: mode === "infer" ? 1 : 0 }}
      className={`pointer-events-none absolute inset-0 z-10 grid place-items-center ${
        mode === "infer" ? "bg-[#07090f]/55 backdrop-blur-[2px]" : ""
      }`}
    >
      <div className="text-center">
        <p className="text-[0.65rem] tracking-[0.32em] text-[var(--gold)]">VISION · INFERENCE</p>
        <p className="mt-2 text-sm text-[var(--ink)]">{ui.ofoghClassify}</p>
        <div className="mt-4 flex items-center justify-center gap-6">
          <span className="text-xs tracking-[0.14em] text-[#ff6b3d]">{ui.ofoghFire}</span>
          <span className="h-px w-10 bg-[var(--line)]" />
          <span className="text-xs tracking-[0.14em] text-[var(--cyan)]">{ui.ofoghTheft}</span>
        </div>
      </div>
    </motion.div>
  );
}

function StoreOpsPanel({
  progress,
  mode,
  reduce,
}: {
  progress: MotionValue<number>;
  mode: VisionMode;
  reduce: boolean | null;
}) {
  const { ui } = useContent();
  const tiltX = useTransform(progress, [0, 1], reduce ? [0, 0] : [12, -10]);
  const tiltY = useTransform(progress, [0, 1], reduce ? [0, 0] : [-10, 12]);
  const scale = useTransform(progress, [0, 1], reduce ? [1, 1] : [0.92, 1.04]);
  const fireOn = mode === "fire" || mode === "idle";
  const theftOn = mode === "theft" || mode === "idle";

  return (
    <motion.div
      style={{ rotateX: tiltX, rotateY: tiltY, scale, transformPerspective: 1600 }}
      className="device-frame relative aspect-[16/11] overflow-hidden lg:aspect-[4/5]"
      role="img"
      aria-label={ui.ofoghAria}
    >
      <div className="absolute inset-0 bg-[#07090f]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,239,230,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(244,239,230,0.05) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-4">
        <p className="text-[0.65rem] tracking-[0.28em] text-[var(--gold)]">OFOGH · VISION OPS</p>
        <p className="flex items-center gap-2 text-[0.65rem] tracking-[0.22em] text-[var(--cyan)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan)]" />
          LIVE
        </p>
      </div>

      <div className="absolute inset-x-4 top-12 bottom-[5.6rem]">
        <div className="grid h-full grid-cols-2 grid-rows-2 gap-2.5">
          <CamTile cam="CAM-04" label={ui.ofoghAisle} kind="aisle" mode={mode} reduce={reduce} alert={null} />
          <CamTile cam="CAM-12" label={ui.ofoghCheckout} kind="checkout" mode={mode} reduce={reduce} alert={null} />
          <CamTile
            cam="CAM-21"
            label={ui.ofoghStock}
            kind="stock"
            mode={mode}
            reduce={reduce}
            alert={mode === "fire" || mode === "idle" ? "fire" : null}
          />
          <CamTile
            cam="CAM-33"
            label={ui.ofoghCorridor}
            kind="corridor"
            mode={mode}
            reduce={reduce}
            alert={mode === "theft" || mode === "idle" ? "theft" : null}
          />
        </div>
        <ClassifyHud mode={mode} />
      </div>

      <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-2 px-4 pb-4">
        <div
          className={`rounded-xl border px-3 py-2 ${
            fireOn ? "border-[#ff6b3d]/50 bg-[rgba(255,107,61,0.1)]" : "border-[var(--line)] bg-black/20"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="text-[0.65rem] tracking-[0.18em] text-[#ff6b3d]">{ui.ofoghFire}</p>
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-[#ff6b3d]" fill="none" aria-hidden>
              <path
                d="M12 3c1.5 3 1 5-1 7 3 .2 5 2.2 5 5a6 6 0 1 1-12 0c0-3.4 2.4-6.2 4-8 0 2 1 3.4 2 4-1.5-3 .2-5.8 2-8Z"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
          </div>
          <AlarmWave tone="fire" active={!reduce && mode === "fire"} />
        </div>
        <div
          className={`rounded-xl border px-3 py-2 ${
            theftOn ? "border-[var(--cyan)]/50 bg-[rgba(94,234,212,0.08)]" : "border-[var(--line)] bg-black/20"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="text-[0.65rem] tracking-[0.18em] text-[var(--cyan)]">{ui.ofoghTheft}</p>
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-[var(--gold)]" fill="none" aria-hidden>
              <path d="M12 4v4M12 16v4M4 12h4M16 12h4" stroke="currentColor" strokeWidth="1.4" />
              <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </div>
          <AlarmWave tone="theft" active={!reduce && mode === "theft"} />
        </div>
      </div>
    </motion.div>
  );
}

function OfoghInner({ progress }: { progress: MotionValue<number> }) {
  const { ofogh, ui } = useContent();
  const reduce = useReducedMotion();
  const mode = useVisionCycle(reduce);
  const copy = useTransform(progress, [0.08, 0.32], reduce ? [1, 1] : [0, 1]);

  return (
    <div className="mx-auto grid h-full w-full max-w-7xl items-center gap-8 px-4 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
      <div className="min-w-0">
        <img
          src="/clients/ofogh.png"
          alt={ui.ofoghLogoAlt}
          className="h-12 w-auto rounded-lg sm:h-14"
        />
        <p className="mt-5 text-xs tracking-[0.3em] text-[var(--cyan)]">{ofogh.kicker}</p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">{ofogh.title}</h2>
        <p className="mt-2 text-[var(--gold)]">{ofogh.product}</p>
        <p className="mt-2 text-sm text-[var(--muted)]">{ofogh.client}</p>
        <p className="mt-5 leading-8 text-[var(--muted)]">{ofogh.story}</p>
        <motion.ul style={{ opacity: copy }} className="mt-6 space-y-2.5 text-sm text-[var(--muted)]">
          {ofogh.features.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <IconCheck className="mt-0.5 h-4 w-4 text-[var(--cyan)]" />
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {ofogh.events.map((item) => (
            <span
              key={item.title}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1.5 text-xs tracking-[0.08em] text-[var(--ink)]"
            >
              {item.id === "fire" ? (
                <IconFire className="h-3.5 w-3.5 text-[#ff6b3d]" />
              ) : (
                <IconShield className="h-3.5 w-3.5 text-[var(--cyan)]" />
              )}
              <span className={`tracking-[0.18em] ${item.id === "fire" ? "text-[#ff6b3d]" : "text-[var(--cyan)]"}`}>
                {item.kicker}
              </span>
              {item.title}
            </span>
          ))}
        </div>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--cyan)] px-5 py-2.5 font-semibold text-[#08221d]"
        >
          <IconCamera className="h-4 w-4" />
          {ofogh.cta}
        </a>
      </div>
      <div className="device-stage relative">
        <StoreOpsPanel progress={progress} mode={mode} reduce={reduce} />
      </div>
    </div>
  );
}

export function Ofogh() {
  const { ofogh } = useContent();

  return (
    <section>
      <StickyScene id="ofogh" heightClass="h-[240vh]">
        {(progress) => <OfoghInner progress={progress} />}
      </StickyScene>
      <div className="mx-auto grid max-w-7xl gap-5 px-4 pb-16 sm:px-8 sm:pb-24 md:grid-cols-2 lg:grid-cols-4">
        {ofogh.pillars.map((pillar) => (
          <Reveal key={pillar.title}>
            <article className="glass h-full min-w-0 rounded-[1.6rem] p-6">
              <p className="text-xs tracking-[0.22em] text-[var(--gold)]">{pillar.kicker}</p>
              <h3 className="mt-3 text-xl font-bold">{pillar.title}</h3>
              <p className="mt-3 leading-8 text-[var(--muted)]">{pillar.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
