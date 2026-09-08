import { company } from "@/data/site";
import { IconMail, IconPhone } from "@/components/ui/icons";

export function Contact() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="glass relative mx-auto max-w-7xl overflow-hidden rounded-[1.8rem] px-5 py-12 sm:rounded-[2.2rem] sm:px-8 sm:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(224,177,90,0.16),transparent_55%)]" />
        <div className="relative text-center">
          <p className="text-xs tracking-[0.3em] text-[var(--gold)]">CONTACT</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">گفت‌وگو با مجموعه</h2>
          <p className="mx-auto mt-4 max-w-xl leading-8 text-[var(--muted)]">
            برای ماشین کاستوم، نرم‌افزار دستگاه، یا سامانه عملیاتی — مستقیم با مدیرعامل یا رئیس هیئت‌مدیره در تماس باشید.
          </p>
        </div>
        <div className="relative mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {company.people.map((person) => (
            <a
              key={person.tel}
              href={`tel:${person.tel}`}
              className="glass rounded-2xl px-6 py-6 text-right transition hover:border-[var(--gold)]/40"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--gold)]/25 bg-[rgba(224,177,90,0.1)] text-[var(--gold)]">
                <IconPhone />
              </span>
              <p className="mt-4 text-sm text-[var(--muted)]">{person.role}</p>
              <p className="mt-2 text-xl font-bold">{person.name}</p>
              <p className="mt-3 font-semibold tracking-wide text-[var(--gold)]" dir="ltr">
                {person.phone}
              </p>
            </a>
          ))}
        </div>
        <a
          href={`mailto:${company.email}`}
          className="relative mt-8 flex items-center justify-center gap-2 text-[var(--muted)] hover:text-[var(--gold)]"
        >
          <IconMail className="h-4 w-4" />
          {company.email}
        </a>
        <div className="relative mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-[var(--muted)]">
          <a href={company.website} target="_blank" rel="noreferrer" className="hover:text-[var(--gold)]">
            {company.website.replace("https://", "")}
          </a>
          <span aria-hidden>·</span>
          <a href={company.tour} target="_blank" rel="noreferrer" className="hover:text-[var(--gold)]">
            تور مجازی کارخانه
          </a>
        </div>
      </div>
    </section>
  );
}
