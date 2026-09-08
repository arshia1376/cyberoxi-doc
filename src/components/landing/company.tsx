"use client";

import { motion, useReducedMotion, useTransform, type MotionValue } from "motion/react";
import { CinematicVideo } from "@/components/ui/cinematic-video";
import { useContent } from "@/i18n/content";
import { StickyScene } from "@/components/ui/sticky-scene";

function CompanyInner({ progress }: { progress: MotionValue<number> }) {
  const { company } = useContent();
  const reduce = useReducedMotion();
  const tilt = useTransform(progress, [0, 1], reduce ? [0, 0] : [12, -12]);
  const tiltX = useTransform(progress, [0, 1], reduce ? [0, 0] : [8, -8]);
  const scale = useTransform(progress, [0, 1], reduce ? [1, 1] : [0.9, 1.04]);

  return (
    <div className="mx-auto grid h-full w-full max-w-7xl items-center gap-8 px-4 sm:px-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="min-w-0">
        <p className="text-xs tracking-[0.3em] text-[var(--gold)]">COMPANY</p>
        <h2 className="mt-3 text-4xl font-bold">{company.legalName}</h2>
        <p className="mt-4 max-w-xl leading-8 text-[var(--muted)]">{company.address}</p>
        <div className="mt-8 space-y-3">
          {company.people.map((person) => (
            <a
              key={person.tel}
              href={`tel:${person.tel}`}
              className="glass flex items-center justify-between rounded-2xl px-5 py-4 transition hover:border-[var(--gold)]/35"
            >
              <span>
                <span className="block text-xs text-[var(--muted)]">{person.role}</span>
                <span className="mt-1 block font-semibold">{person.name}</span>
              </span>
              <span className="text-[var(--gold)]" dir="ltr">
                {person.phone}
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="device-stage">
        <motion.div style={{ rotateY: tilt, rotateX: tiltX, scale }} className="device-frame aspect-[16/10]">
          <CinematicVideo src={company.film} />
        </motion.div>
      </div>
    </div>
  );
}

export function Company() {
  const { company, licenses, ui } = useContent();
  const facts = [
    [ui.factType, company.type],
    [ui.factStatus, company.status],
    [ui.factFounded, company.established],
    [ui.factNationalId, company.nationalId],
    [ui.factEconomic, company.economicCode],
    [ui.factRegistration, company.registrationNo],
  ];

  return (
    <section id="company">
      <StickyScene heightClass="h-[220vh]">
        {(progress) => <CompanyInner progress={progress} />}
      </StickyScene>

      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-8 sm:pb-24">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map(([label, value]) => (
            <div key={label} className="glass min-w-0 rounded-2xl p-5">
              <p className="text-xs text-[var(--muted)]">{label}</p>
              <p className="mt-2 text-lg font-semibold">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {company.people.map((person) => (
            <a
              key={person.role}
              href={`tel:${person.tel}`}
              className="glass min-w-0 rounded-2xl p-6"
            >
              <p className="text-sm text-[var(--muted)]">{person.role}</p>
              <p className="mt-2 text-xl font-bold">{person.name}</p>
              <p className="mt-3 text-[var(--gold)]" dir="ltr">
                {person.phone}
              </p>
            </a>
          ))}
          <div className="glass min-w-0 rounded-2xl p-6">
            <p className="text-sm text-[var(--muted)]">{ui.boardMembers}</p>
            <p className="mt-2 text-xl font-bold">{company.board.join(" · ")}</p>
          </div>
        </div>

        <h3 className="mt-14 text-2xl font-bold">{ui.licensesHeading}</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {licenses.map((item) => (
            <article key={item.title} className="glass min-w-0 rounded-2xl p-6">
              <p className="font-semibold">{item.title}</p>
              <p className="mt-3 text-sm text-[var(--muted)]">{item.issuer}</p>
              {item.start ? (
                <p className="mt-2 text-sm text-[var(--gold)]">{ui.licenseStart} {item.start}</p>
              ) : null}
            </article>
          ))}
        </div>

        <p className="mt-8 text-[var(--muted)]">
          {ui.softwareExportsTo} {company.exports.join(ui.listSep)}.
        </p>
      </div>
    </section>
  );
}
