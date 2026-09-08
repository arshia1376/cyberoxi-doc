"use client";

import { motion } from "motion/react";
import { clients } from "@/data/site";

function logoClass(id: string, size: "marquee" | "card") {
  if (id === "ofogh") {
    return size === "marquee"
      ? "h-12 w-auto rounded-md shadow-[0_8px_20px_rgba(230,25,55,0.28)]"
      : "h-11 w-auto rounded-md";
  }
  return size === "marquee" ? "h-12 w-auto object-contain" : "h-12 w-16 object-contain";
}

function invertClass(id: string) {
  return id === "qonnectify" || id === "hamedan" ? "logo-on-dark" : "";
}

export function Clients() {
  const loop = [...clients, ...clients];

  return (
    <section id="clients" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs tracking-[0.3em] text-[var(--gold)]">PARTNERS</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">همکاران</h2>
        <p className="mt-4 max-w-2xl leading-8 text-[var(--muted)]">
          برندهایی که با آن‌ها ماشین یا سامانه ساخته‌ایم. شهرداری همدان یک‌بار آمده، هرچند دو محصول نرم‌افزاری دارد.
        </p>
      </div>

      <div className="relative mt-10 overflow-hidden border-y border-[var(--line)] py-8">
        <div className="marquee-track flex w-max items-center gap-12 pr-12 sm:gap-16 sm:pr-16">
          {loop.map((client, index) => (
            <a
              key={`${client.id}-${index}`}
              href={client.href}
              className="flex h-16 items-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className={`${logoClass(client.id, "marquee")} ${invertClass(client.id)}`}
              />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {clients.map((client, index) => (
          <motion.a
            key={client.id}
            href={client.href}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
            className="glass flex items-center gap-4 rounded-[1.4rem] p-5"
            style={{ transformPerspective: 800 }}
          >
            <img
              src={client.logo}
              alt=""
              className={`${logoClass(client.id, "card")} ${invertClass(client.id)}`}
            />
            <div>
              <p className="font-semibold">{client.name}</p>
              <p className="text-sm text-[var(--muted)]">{client.world}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
