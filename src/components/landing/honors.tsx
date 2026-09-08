"use client";

import { honors, leadershipQuotes } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";
import { ViewHotspot } from "@/components/ui/lightbox";

export function Honors() {
  const featured = honors.find((item) => item.featured);
  const featuredIndex = honors.findIndex((item) => item.featured);
  const rest = honors.filter((item) => !item.featured);

  return (
    <section id="honors" className="scroll-mt-28 px-4 pb-16 sm:px-8 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs tracking-[0.3em] text-[var(--gold)]">HONORS · PRESS</p>
        <h2 className="mt-3 text-4xl font-bold">افتخارات و رسانه</h2>
        <p className="mt-4 max-w-2xl leading-8 text-[var(--muted)]">
          رتبه اول میدون شبکه سه، گواهی‌های رتبه، رونمایی ملی، مجوز واحد فناوری، و بازتاب رسانه‌ای شرکت.
        </p>

        {featured ? (
          <article className="glass mt-10 overflow-hidden rounded-[1.8rem]">
            <div className="device-frame relative aspect-[16/10] sm:aspect-[16/7]">
              <img
                src={featured.src}
                alt={featured.label}
                loading="lazy"
                decoding="async"
                className="!object-cover bg-[#0b0d12]"
              />
              <ViewHotspot items={honors} index={Math.max(featuredIndex, 0)} />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs tracking-[0.28em] text-[var(--gold)]">{featured.kicker}</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{featured.label}</h3>
              <p className="mt-3 max-w-3xl leading-8 text-[var(--muted)]">{featured.summary}</p>
            </div>
          </article>
        ) : null}

        <div className="mt-8">
          <p className="text-xs tracking-[0.3em] text-[var(--gold)]">VOICE · LEADERSHIP</p>
          <h3 className="mt-3 text-3xl font-bold">از زبان مدیران</h3>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {leadershipQuotes.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.08}>
                <blockquote className="glass relative overflow-hidden rounded-[1.8rem] p-7 sm:p-8">
                  <span className="gold-text pointer-events-none absolute left-5 top-2 text-7xl leading-none opacity-40">
                    »
                  </span>
                  <p className="relative text-lg leading-9 text-[var(--ink)]">{item.quote}</p>
                  <footer className="relative mt-6 border-t border-[var(--line)] pt-5">
                    <cite className="not-italic">
                      <span className="block text-lg font-bold">{item.name}</span>
                      <span className="mt-1 block text-sm text-[var(--cyan)]">{item.role}</span>
                    </cite>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((item) => {
            const index = honors.findIndex((honor) => honor.src === item.src);
            return (
              <article key={item.src} className="glass overflow-hidden rounded-[1.8rem]">
                <div className="device-frame relative aspect-[4/5]">
                  <img
                    src={item.src}
                    alt={item.label}
                    loading="lazy"
                    decoding="async"
                    className="!object-contain bg-[#0b0d12]"
                  />
                  <ViewHotspot items={honors} index={index} />
                </div>
                <div className="p-6">
                  <p className="text-xs tracking-[0.28em] text-[var(--gold)]">{item.kicker}</p>
                  <h3 className="mt-3 text-2xl font-bold">{item.label}</h3>
                  <p className="mt-3 leading-8 text-[var(--muted)]">{item.summary}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
