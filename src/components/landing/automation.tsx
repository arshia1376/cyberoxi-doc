"use client";

import { useReducedMotion } from "motion/react";
import { automation } from "@/data/site";
import { IconBadge, IconMachinery } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";

function HumanMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 48" className={className} aria-hidden>
      <circle cx="16" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M6 46v-8c0-5.5 4.5-10 10-10s10 4.5 10 10v8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LaborStage() {
  const reduce = useReducedMotion();

  return (
    <div className="labor-stage relative overflow-hidden rounded-[1.8rem]">
      <div className="labor-grid" />
      <div className="labor-scan" />

      <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
        <div className="flex items-center justify-between text-[0.65rem] tracking-[0.28em]">
          <p className="text-[var(--cyan)]">VISION · SHIFT LOCK</p>
          <p className="text-[var(--gold)]">AI ON LINE</p>
        </div>

        <div className="flex items-end justify-between gap-3">
          <div className="flex items-end gap-3 text-[var(--muted)]">
            {[0, 1, 2, 3].map((index) => (
              <HumanMark
                key={index}
                className={`h-14 w-9 sm:h-16 sm:w-10 ${reduce ? "opacity-25" : `labor-human labor-human-${index}`}`}
              />
            ))}
          </div>
          <div className={reduce ? "" : "labor-bot"}>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--gold)]/35 bg-[rgba(224,177,90,0.12)] text-[var(--gold)] sm:h-20 sm:w-20">
              <IconMachinery className="h-8 w-8" />
            </div>
          </div>
        </div>

        <div className="labor-belt" />

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.22em] text-[var(--muted)]">{automation.stat.label}</p>
            <p className="mt-1 font-bold">
              <span className="gold-text text-4xl sm:text-5xl">{automation.stat.from}</span>
              <span className="mx-2 text-[var(--muted)]">→</span>
              <span className="text-4xl text-[var(--cyan)] sm:text-5xl">{automation.stat.to}</span>
            </p>
          </div>
          <p className="max-w-[10rem] text-left text-xs leading-6 text-[var(--muted)]" dir="ltr">
            HUMAN OUT
            <br />
            MODEL IN
          </p>
        </div>
      </div>
    </div>
  );
}

export function Automation() {
  return (
    <section id="automation" className="relative overflow-hidden scroll-mt-28 px-4 py-16 sm:px-8 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(94,234,212,0.1),transparent_50%),radial-gradient(ellipse_at_80%_10%,rgba(224,177,90,0.12),transparent_48%)]" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <IconBadge>
            <IconMachinery />
          </IconBadge>
          <p className="mt-5 text-xs tracking-[0.3em] text-[var(--gold)]">{automation.kicker}</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">{automation.title}</h2>
          <p className="mt-2 text-[var(--cyan)]">{automation.product}</p>
          <p className="mt-5 max-w-2xl leading-8 text-[var(--muted)]">{automation.lead}</p>
        </Reveal>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <Reveal delay={0.08}>
            <LaborStage />
            <p className="mt-4 text-center text-xs tracking-[0.22em] text-[var(--gold)]">
              جایگزینی ایستگاه با هوش مصنوعی · بدون خستگی شیفت
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {automation.benefits.map((item, index) => (
              <Reveal key={item.title} delay={0.1 + index * 0.06}>
                <article className="glass relative overflow-hidden rounded-[1.6rem] p-6">
                  <span className="labor-pulse" aria-hidden />
                  <p className="text-xs tracking-[0.28em] text-[var(--gold)]">{item.index}</p>
                  <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-8 text-[var(--muted)]">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
