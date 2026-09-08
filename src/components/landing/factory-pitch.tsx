"use client";

import { motion } from "motion/react";
import { factoryPitch } from "@/data/site";
import { IconChat, IconCheck, IconFactory, IconPen } from "@/components/ui/icons";

const stepIcons = [IconChat, IconPen, IconFactory, IconCheck];

export function FactoryPitch() {
  return (
    <section id="pitch" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="glass relative mx-auto max-w-7xl overflow-hidden rounded-[1.8rem] px-5 py-12 sm:rounded-[2.2rem] sm:px-10 sm:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(224,177,90,0.18),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(94,234,212,0.12),transparent_48%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(244,239,230,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(244,239,230,0.05) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs tracking-[0.3em] text-[var(--gold)]">{factoryPitch.kicker}</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">{factoryPitch.title}</h2>
            <p className="mt-4 max-w-xl leading-8 text-[var(--muted)]">{factoryPitch.lead}</p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-5 py-2.5 text-sm font-semibold text-[#1a1408]"
            >
              <IconChat className="h-4 w-4" />
              {factoryPitch.cta}
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {factoryPitch.steps.map((step, index) => {
              const Icon = stepIcons[index] ?? IconCheck;
              const tone = index % 2 === 0 ? "cyan" : "gold";
              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="glass rounded-2xl p-5"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl border ${
                        tone === "cyan"
                          ? "border-[var(--cyan)]/25 bg-[rgba(94,234,212,0.1)] text-[var(--cyan)]"
                          : "border-[var(--gold)]/25 bg-[rgba(224,177,90,0.1)] text-[var(--gold)]"
                      }`}
                    >
                      <Icon />
                    </span>
                    <p className="text-xs tracking-[0.22em] text-[var(--muted)]">{step.kicker}</p>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{step.body}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
