"use client";

import { BrandLockup } from "@/components/brand/logo";
import { IconMail } from "@/components/ui/icons";
import { useContent } from "@/i18n/content";

export function Footer() {
  const { company } = useContent();

  return (
    <footer className="px-4 pb-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 border-t border-[var(--line)] pt-8 sm:flex-row">
        <BrandLockup markClassName="h-8 w-8" wordmarkClassName="h-4 w-auto" />
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--muted)]">
          {company.people.map((person) => (
            <a key={person.tel} href={`tel:${person.tel}`} className="hover:text-[var(--gold)]">
              {person.role}
              <span className="ms-2" dir="ltr">
                {person.phone}
              </span>
            </a>
          ))}
          <a href={`mailto:${company.email}`} className="inline-flex items-center gap-1.5 hover:text-[var(--gold)]">
            <IconMail className="h-3.5 w-3.5" />
            {company.email}
          </a>
          <a href={company.website} target="_blank" rel="noreferrer" className="hover:text-[var(--gold)]">
            cyberoxi.com
          </a>
        </div>
      </div>
      <p className="mx-auto mt-5 max-w-7xl text-center text-xs text-[var(--muted)]">
        © {company.legalName} · CYBEROXI
      </p>
    </footer>
  );
}
