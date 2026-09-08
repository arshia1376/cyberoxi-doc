"use client";

import { useState } from "react";
import { useContent } from "@/i18n/content";
import { Lightbox } from "@/components/ui/lightbox";

export function FamilyGallery() {
  const { familyGallery, ui } = useContent();
  const [open, setOpen] = useState<number | null>(null);
  const loop = [...familyGallery.photos, ...familyGallery.photos];

  return (
    <section id="family" className="py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <p className="text-[0.65rem] tracking-[0.3em] text-[var(--gold)]">{familyGallery.kicker}</p>
        <h2 className="mt-2 text-lg font-bold sm:text-xl">{familyGallery.title}</h2>
      </div>

      <div className="relative mt-5 w-full max-w-full overflow-hidden border-y border-[var(--line)] py-4">
        <div className="family-track flex w-max items-center gap-3 pr-3">
          {loop.map((photo, index) => {
            const realIndex = index % familyGallery.photos.length;
            return (
              <button
                key={`${photo.src}-${index}`}
                type="button"
                className="family-shot relative shrink-0 overflow-hidden rounded-xl"
                aria-label={`${ui.view} ${photo.label}`}
                onClick={() => setOpen(realIndex)}
              >
                <img src={photo.src} alt={photo.label} loading="lazy" decoding="async" />
              </button>
            );
          })}
        </div>
      </div>

      {open !== null ? (
        <Lightbox items={familyGallery.photos} index={open} onClose={() => setOpen(null)} />
      ) : null}
    </section>
  );
}
