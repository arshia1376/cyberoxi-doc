export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#07080d]" />
      <div className="orb orb-gold top-[-12%] right-[8%] h-[42vw] w-[42vw] max-h-[520px] max-w-[520px]" />
      <div className="orb orb-cyan bottom-[8%] left-[-8%] h-[48vw] w-[48vw] max-h-[620px] max-w-[620px]" />
      <div className="orb orb-copper top-[42%] left-[38%] h-[28vw] w-[28vw] max-h-[340px] max-w-[340px] opacity-70" />
      <div className="grid-veil absolute inset-0" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
    </div>
  );
}
