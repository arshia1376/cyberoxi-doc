"use client";

import { motion, useReducedMotion, useTransform, type MotionValue } from "motion/react";
import { useContent } from "@/i18n/content";
import { Reveal } from "@/components/ui/reveal";
import { StickyScene } from "@/components/ui/sticky-scene";
import { IconClock, IconLayers, IconUsers } from "@/components/ui/icons";

function BuildInner({ progress }: { progress: MotionValue<number> }) {
  const { customMachines, callisto, ui } = useContent();
  const reduce = useReducedMotion();
  const copy = useTransform(progress, [0.06, 0.28], reduce ? [1, 1] : [0, 1]);
  const shift = useTransform(progress, [0, 1], reduce ? [0, 0] : [28, -18]);
  const tilt = useTransform(progress, [0, 1], reduce ? [0, 0] : [10, -8]);

  return (
    <div className="mx-auto grid h-full w-full max-w-7xl items-center gap-8 px-4 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
      <div className="min-w-0">
        <p className="text-xs tracking-[0.3em] text-[var(--gold)]">{customMachines.kicker}</p>
        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">{customMachines.title}</h2>
        <p className="mt-2 text-[var(--cyan)]">
          <a href="#custom-ai" className="hover:text-[var(--ink)]">
            {ui.buildCustom}
          </a>
          {" · "}
          <a href="#device-os" className="hover:text-[var(--ink)]">
            {ui.buildOs}
          </a>
          {" · "}
          <a href="#support" className="hover:text-[var(--ink)]">
            {ui.buildSupport}
          </a>
        </p>
        <p className="mt-4 max-w-xl leading-8 text-[var(--muted)]">{customMachines.lead}</p>
        <motion.div style={{ opacity: copy }} className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-[var(--gold)] px-5 py-2.5 text-sm font-semibold text-[#1a1408]"
          >
            {customMachines.cta}
          </a>
          <a href="#callisto" className="text-sm text-[var(--muted)] hover:text-[var(--gold)]">
            {ui.buildCallisto}
          </a>
          <a href="#zar" className="text-sm text-[var(--muted)] hover:text-[var(--gold)]">
            {ui.buildZar}
          </a>
          <a href="#pegah" className="text-sm text-[var(--muted)] hover:text-[var(--gold)]">
            {ui.buildPegah}
          </a>
        </motion.div>
      </div>

      <div className="device-stage hidden lg:block">
        <motion.div
          style={{ x: shift, rotateY: tilt, transformPerspective: 1600 }}
          className="relative"
        >
          <a href="#callisto" className="device-frame block aspect-[16/10]">
            <img
              src={callisto.frames[0]?.src}
              alt={callisto.frames[0]?.label ?? callisto.title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain bg-[#0b0d12]"
            />
          </a>
          <p className="mt-4 text-center text-xs tracking-[0.18em] text-[var(--gold)]">
            {ui.buildProofCallisto}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function OfferingCard({
  offering,
  featured,
}: {
  offering: ReturnType<typeof useContent>["customMachines"]["offerings"][number];
  featured?: boolean;
}) {
  const { customMachines, zar, ui } = useContent();

  return (
    <Reveal>
      <article id={offering.id} className="glass scroll-mt-28 overflow-hidden rounded-[1.8rem]">
        <div className={`grid items-stretch ${featured ? "lg:grid-cols-[1.05fr_0.95fr]" : "lg:grid-cols-2"}`}>
          <div className="min-w-0 p-7 sm:p-10">
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-xs tracking-[0.28em] text-[var(--gold)]">{offering.kicker}</p>
              <p className="text-sm tracking-[0.2em] text-[var(--muted)]">{offering.index}</p>
            </div>
            <h3 className="mt-4 text-3xl font-bold">{offering.title}</h3>
            <p className="mt-2 text-[var(--cyan)]">{offering.product}</p>
            <p className="mt-4 leading-8 text-[var(--muted)]">{offering.story}</p>
            {featured ? (
              <>
                <ul className="mt-6 space-y-2 text-sm text-[var(--muted)]">
                  {offering.points.map((point) => (
                    <li key={point}>— {point}</li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 inline-flex rounded-full bg-[var(--gold)] px-5 py-2.5 text-sm font-semibold text-[#1a1408]"
                >
                  {customMachines.cta}
                </a>
              </>
            ) : null}
          </div>

          {featured ? (
            <div className="relative min-w-0 border-t border-[var(--line)] p-7 sm:p-10 lg:border-t-0 lg:border-r">
              <div className="device-stage">
                <div className="device-frame aspect-[16/10]" style={{ transform: "rotateY(-8deg) rotateX(5deg)" }}>
                  <img
                    src={zar.frames[0]?.src ?? zar.still}
                    alt={zar.frames[0]?.label ?? zar.product}
                    className="h-full w-full object-cover bg-[#0b0d12]"
                  />
                </div>
              </div>
              <p className="mt-5 text-center text-xs tracking-[0.18em] text-[var(--gold)]">
                {ui.buildProofZar}
              </p>
              <p className="mt-3 text-center text-sm leading-7 text-[var(--muted)]">
                {ui.buildSamePattern}
              </p>
            </div>
          ) : (
            <div
              className={`min-w-0 border-t border-[var(--line)] p-7 sm:p-10 lg:border-t-0 lg:border-r ${
                offering.id === "device-os"
                  ? "bg-[radial-gradient(circle_at_top,rgba(94,234,212,0.14),transparent_58%)]"
                  : "bg-[radial-gradient(circle_at_top,rgba(224,177,90,0.12),transparent_58%)]"
              }`}
            >
              <div className="grid h-full content-center gap-3">
                {offering.points.map((point) => (
                  <div key={point} className="glass rounded-2xl px-5 py-4">
                    <p className="text-sm leading-7">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export function CustomMachines() {
  const { customMachines } = useContent();
  const [machine, software, support] = customMachines.offerings;

  return (
    <section>
      <StickyScene id="build" heightClass="h-[200vh]" className="scroll-mt-24">
        {(progress) => <BuildInner progress={progress} />}
      </StickyScene>

      <div className="mx-auto max-w-7xl space-y-6 px-4 pb-16 sm:px-8 sm:pb-24">
        {machine ? <OfferingCard offering={machine} featured /> : null}
        {software ? <OfferingCard offering={software} /> : null}
        {support ? <OfferingCard offering={support} /> : null}

        <div className="grid gap-4 sm:grid-cols-3">
          {customMachines.stats.map((stat, index) => {
            const Icon = [IconUsers, IconLayers, IconClock][index] ?? IconLayers;
            return (
              <Reveal key={stat.label}>
                <article className="glass rounded-[1.6rem] px-6 py-8 text-center">
                  <span className="mx-auto mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--gold)]/25 bg-[rgba(224,177,90,0.1)] text-[var(--gold)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-4xl font-bold tracking-tight text-[var(--gold)] sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{stat.label}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <article className="glass rounded-[1.8rem] p-7 sm:p-10">
            <p className="text-xs tracking-[0.28em] text-[var(--cyan)]">OWNERSHIP · KNOW-HOW</p>
            <div className="mt-4 max-w-4xl space-y-4 text-lg leading-9 text-[var(--ink)]">
              {customMachines.ownership.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
