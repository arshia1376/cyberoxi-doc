"use client";

import { Background } from "@/components/landing/background";
import { Callisto } from "@/components/landing/callisto";
import { Automation } from "@/components/landing/automation";
import { Clients } from "@/components/landing/clients";
import { Company } from "@/components/landing/company";
import { Contact } from "@/components/landing/contact";
import { Cta } from "@/components/landing/cta";
import { CustomMachines } from "@/components/landing/custom-machines";
import { FactoryPitch } from "@/components/landing/factory-pitch";
import { FamilyGallery } from "@/components/landing/family-gallery";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Honors } from "@/components/landing/honors";
import { Iso } from "@/components/landing/iso";
import { Ofogh } from "@/components/landing/ofogh";
import { Parko } from "@/components/landing/parko";
import { Pegah } from "@/components/landing/pegah";
import { SoftwareExports } from "@/components/landing/software-exports";
import { Sport } from "@/components/landing/sport";
import { Vaede } from "@/components/landing/vaede";
import { Worlds } from "@/components/landing/worlds";
import { Zar } from "@/components/landing/zar";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { IconBadge, IconMachinery, IconSoftware } from "@/components/ui/icons";
import { useContent } from "@/i18n/content";

export default function Home() {
  const { ui } = useContent();

  return (
    <div className="relative min-w-0 max-w-full overflow-x-clip">
      <Background />
      <div className="site-noise" />
      <CursorGlow />
      <Header />
      <main className="min-w-0 max-w-full overflow-x-clip">
        <Hero />
        <Worlds />
        <Clients />
        <div id="software">
          <section className="px-4 pt-16 sm:px-8 sm:pt-20">
            <div className="mx-auto max-w-7xl min-w-0">
              <IconBadge tone="cyan">
                <IconSoftware />
              </IconBadge>
              <p className="mt-5 text-xs tracking-[0.3em] text-[var(--cyan)]">CHAPTER 01</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">{ui.softwareWorld}</h2>
            </div>
          </section>
          <Parko />
          <Vaede />
          <Cta />
          <Ofogh />
          <SoftwareExports />
        </div>
        <div id="machinery">
          <section className="px-4 pt-16 sm:px-8 sm:pt-20">
            <div className="mx-auto max-w-7xl min-w-0">
              <IconBadge>
                <IconMachinery />
              </IconBadge>
              <p className="mt-5 text-xs tracking-[0.3em] text-[var(--gold)]">CHAPTER 02</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">{ui.machineryWorld}</h2>
              <p className="mt-4 max-w-2xl leading-8 text-[var(--muted)]">
                {ui.machineryLead}{" "}
                <a href="#build" className="text-[var(--gold)] hover:text-[var(--ink)]">
                  {ui.machineryCta}
                </a>
              </p>
            </div>
          </section>
          <Callisto />
          <Zar />
          <Pegah />
          <CustomMachines />
          <Automation />
          <Honors />
        </div>
        <Sport />
        <Company />
        <Iso />
        <FactoryPitch />
        <Contact />
      </main>
      <FamilyGallery />
      <Footer />
    </div>
  );
}
