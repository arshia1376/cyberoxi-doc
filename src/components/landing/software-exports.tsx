"use client";

import { motion } from "motion/react";
import { useContent } from "@/i18n/content";
import { ViewHotspot } from "@/components/ui/lightbox";

export function SoftwareExports() {
  const { softwareExports, ui, locale } = useContent();
  const frames = softwareExports.map((item) => ({
    src: item.poster,
    label: item.name,
  }));
  const countryName = (country: { label: string; labelFa: string }) =>
    locale === "en" ? country.label : country.labelFa;

  return (
    <section id="exports" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs tracking-[0.3em] text-[var(--cyan)]">SOFTWARE · EXPORTS</p>
        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">{ui.exportsTitle}</h2>
        <p className="mt-4 max-w-2xl leading-8 text-[var(--muted)]">
          {ui.exportsLead}
        </p>
        <p className="mt-3 text-sm tracking-[0.16em] text-[var(--gold)]">Made with SEVADA · CYBEROXI</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {softwareExports.map((item, index) => (
            <motion.article
              key={item.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, rotateX: 5, rotateY: -4 }}
              className="glass min-w-0 overflow-hidden rounded-[1.8rem]"
              style={{ transformPerspective: 900 }}
            >
              <div className="device-frame relative aspect-[4/5]">
                <img
                  src={item.poster}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="!object-cover bg-[#0b0d12]"
                />
                <ViewHotspot items={frames} index={index} />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="min-w-0 text-2xl font-bold">{item.name}</h3>
                  <div className="flex items-center gap-2">
                    {item.countries.map((country) => (
                      <img
                        key={country.code}
                        src={`/flags/${country.code}.svg`}
                        alt={countryName(country)}
                        title={countryName(country)}
                        className="h-8 w-8 rounded-full border border-[var(--line)] object-cover"
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-3 leading-8 text-[var(--muted)]">{item.summary}</p>
                <p className="mt-3 text-xs tracking-[0.2em] text-[var(--gold)]">
                  {item.countries.map((country) => countryName(country)).join(" · ")}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
