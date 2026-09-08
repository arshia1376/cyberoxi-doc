"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { BrandLockup } from "@/components/brand/logo";
import { navItems } from "@/data/site";
import { IconClose, IconMenu } from "@/components/ui/icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex flex-col items-center px-3 pt-3 sm:px-6 sm:pt-4"
    >
      <div
        className={`glass flex w-full max-w-7xl items-center justify-between rounded-full px-3 py-2 sm:px-5 ${
          scrolled ? "shadow-[0_16px_40px_rgba(0,0,0,0.35)]" : ""
        }`}
      >
        <a href="#top" className="flex items-center" onClick={() => setOpen(false)}>
          <BrandLockup markClassName="h-8 w-8 sm:h-9 sm:w-9" wordmarkClassName="h-[16px] w-auto sm:h-[18px]" />
        </a>
        <nav className="hidden items-center gap-4 text-sm text-[var(--muted)] lg:flex xl:gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-[var(--ink)]">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="rounded-full bg-[var(--gold)] px-3 py-2 text-xs font-semibold text-[#1a1408] sm:px-4 sm:text-sm"
            onClick={() => setOpen(false)}
          >
            تماس
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink)] lg:hidden"
            aria-expanded={open}
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="glass mt-2 grid w-full max-w-7xl gap-1 rounded-[1.6rem] p-3 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-2xl px-4 py-3 text-sm hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </motion.header>
  );
}
