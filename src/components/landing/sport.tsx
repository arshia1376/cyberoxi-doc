"use client";

import { useReducedMotion } from "motion/react";
import { sport } from "@/data/site";
import { IconBadge, IconShuttle } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { ViewHotspot } from "@/components/ui/lightbox";

const trophyFrames = [{ src: sport.trophy.src, label: sport.trophy.caption }];

function ShuttleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 56" className={className} aria-hidden>
      <path
        d="M20 2.5c5.6 2.4 9.4 10.2 10.2 18.8H9.8C10.6 12.7 14.4 4.9 20 2.5Z"
        fill="rgba(244,239,230,0.12)"
        stroke="#f4efe6"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M13.2 10.5 20 20.2l6.8-9.7M11.6 17.4h16.8" stroke="#e0b15a" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M20 21.3v3.2" stroke="#f4efe6" strokeWidth="1.4" strokeLinecap="round" />
      <ellipse cx="20" cy="37.5" rx="7.2" ry="8.4" fill="#d4b07a" stroke="#f4efe6" strokeWidth="1.3" />
      <ellipse cx="20" cy="35.6" rx="4.8" ry="4.2" fill="#f4efe6" opacity="0.55" />
    </svg>
  );
}

function Racket({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 168" className={className} aria-hidden>
      <ellipse cx="36" cy="42" rx="28" ry="36" fill="none" stroke="#e0b15a" strokeWidth="3.2" />
      <ellipse cx="36" cy="42" rx="22" ry="30" fill="none" stroke="rgba(244,239,230,0.22)" strokeWidth="1" />
      <path d="M18 42h36M36 16v52M24 24l24 36M48 24 24 60" stroke="rgba(94,234,212,0.35)" strokeWidth="1" />
      <path d="M36 78v58" stroke="#f4efe6" strokeWidth="4.2" strokeLinecap="round" />
      <rect x="30" y="128" width="12" height="28" rx="5" fill="#e0b15a" />
    </svg>
  );
}

function CourtField() {
  return (
    <svg viewBox="0 0 1340 610" className="h-full w-full" aria-hidden>
      <rect x="24" y="24" width="1292" height="562" rx="8" fill="rgba(16, 42, 34, 0.55)" />
      <rect x="24" y="24" width="1292" height="562" rx="8" className="court-line" fill="none" stroke="#e0b15a" strokeWidth="3" />
      <rect x="70" y="24" width="1200" height="562" fill="none" stroke="rgba(244,239,230,0.28)" strokeWidth="2" className="court-line" />
      <line x1="670" y1="24" x2="670" y2="586" className="court-net" />
      <line x1="472" y1="24" x2="472" y2="586" className="court-line" stroke="rgba(244,239,230,0.4)" strokeWidth="2" />
      <line x1="868" y1="24" x2="868" y2="586" className="court-line" stroke="rgba(244,239,230,0.4)" strokeWidth="2" />
      <line x1="70" y1="305" x2="472" y2="305" className="court-line" stroke="rgba(244,239,230,0.35)" strokeWidth="2" />
      <line x1="868" y1="305" x2="1270" y2="305" className="court-line" stroke="rgba(244,239,230,0.35)" strokeWidth="2" />
      <line x1="100" y1="24" x2="100" y2="586" className="court-line" stroke="rgba(224,177,90,0.35)" strokeWidth="2" />
      <line x1="1240" y1="24" x2="1240" y2="586" className="court-line" stroke="rgba(224,177,90,0.35)" strokeWidth="2" />
    </svg>
  );
}

function RallyStage() {
  const reduce = useReducedMotion();

  return (
    <div className="sport-stage relative overflow-hidden rounded-[1.8rem]">
      <CourtField />
      {reduce ? (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <ShuttleMark className="h-16 w-12 text-[var(--ink)]" />
        </div>
      ) : (
        <>
          <span className="sport-trail" />
          <span className="sport-impact" />
          <div className="shuttle-rally shuttle-rally-a">
            <ShuttleMark className="shuttle-spin h-14 w-10" />
          </div>
          <div className="shuttle-rally shuttle-rally-b">
            <ShuttleMark className="shuttle-spin shuttle-spin-slow h-10 w-7 opacity-70" />
          </div>
          <div className="racket-post racket-post-near">
            <Racket className="racket-swing h-36 w-16" />
          </div>
          <div className="racket-post racket-post-far">
            <Racket className="racket-swing racket-swing-delay h-32 w-14" />
          </div>
        </>
      )}
    </div>
  );
}

export function Sport() {
  return (
    <section id="sport" className="relative overflow-hidden scroll-mt-28 px-4 py-16 sm:px-8 sm:py-24">
      <div className="sport-haze" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <IconBadge>
            <IconShuttle />
          </IconBadge>
          <p className="mt-5 text-xs tracking-[0.3em] text-[var(--gold)]">{sport.kicker}</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">{sport.title}</h2>
          <p className="mt-2 text-[var(--cyan)]">{sport.product}</p>
          <p className="mt-5 max-w-2xl leading-8 text-[var(--muted)]">{sport.lead}</p>
        </Reveal>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <Reveal delay={0.08} className="order-2 lg:order-1">
            <RallyStage />
            <p className="mt-4 text-center text-xs tracking-[0.22em] text-[var(--gold)]">
              رالی بدمینتون · لیگ استان و دسته یک کشور
            </p>
          </Reveal>

          <Reveal delay={0.14} className="order-1 lg:order-2">
            <article className="glass overflow-hidden rounded-[1.8rem]">
              <div className="device-frame relative aspect-[3/4]">
                <img
                  src={sport.trophy.src}
                  alt={sport.trophy.alt}
                  loading="lazy"
                  decoding="async"
                  className="!object-contain bg-[#0b0d12]"
                />
                <ViewHotspot items={trophyFrames} />
              </div>
              <div className="p-6">
                <p className="text-xs tracking-[0.28em] text-[var(--gold)]">TROPHY · ۱۴۰۲</p>
                <h3 className="mt-3 text-2xl font-bold">جام مقام سوم استان</h3>
                <p className="mt-3 leading-8 text-[var(--muted)]">{sport.trophy.caption}</p>
              </div>
            </article>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {sport.leagues.map((league, index) => (
            <Reveal key={league.title} delay={0.1 + index * 0.08}>
              <article className="glass relative overflow-hidden rounded-[1.8rem] p-7">
                <span className="sport-card-shuttle" aria-hidden>
                  <ShuttleMark className="h-12 w-9" />
                </span>
                <p className="text-xs tracking-[0.28em] text-[var(--gold)]">{league.index}</p>
                <h3 className="mt-3 text-2xl font-bold">{league.title}</h3>
                <p className="mt-2 text-[var(--cyan)]">{league.result}</p>
                <p className="mt-4 leading-8 text-[var(--muted)]">{league.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
