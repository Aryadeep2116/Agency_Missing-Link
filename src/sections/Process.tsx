import { PROCESS_STEPS } from "@/data";
import { ACCENT, Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "@/components/Icons";

export function Process() {
  return (
    <Section id="process" className="relative isolate overflow-hidden bg-ink">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(115%_85%_at_72%_0%,#1C1024_0%,#0F0A12_60%)]" />
        <div className="absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-[#E11D74]/20 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#FF7A1A]/15 blur-[120px]" />
        <div className="bg-grid-dark absolute inset-0 opacity-30" />
      </div>
      <div className="section-edge section-edge-light-to-dark" />
      <div className="section-edge section-edge-dark-to-light" />

      <div className="relative z-10">
        <SectionHeading
          dark
          eyebrow="How it works"
          title={
            <>
              From first call to live site in{" "}
              <span className="gradient-text">four steps.</span>
            </>
          }
          subtitle="No endless discovery phases. A tight, predictable process where you always know what happens next."
        />

        {/* Horizontal timeline (desktop) / vertical (mobile) */}
        <div className="relative mt-16">
          {/* connector line — desktop */}
          <div className="absolute left-0 right-0 top-[26px] hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block" />
          {/* connector line — mobile */}
          <div className="absolute bottom-8 left-[26px] top-8 w-px bg-gradient-to-b from-[#E11D74]/40 via-[#FF7A1A]/30 to-[#FFC145]/30 lg:hidden" />

          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {PROCESS_STEPS.map((step, i) => {
              const a = ACCENT[step.accent];
              return (
                <Reveal key={step.number} delay={i * 120} className="relative">
                  <li className="group flex flex-col lg:items-center lg:text-center">
                    {/* number tile */}
                    <div className="relative z-10 flex items-center gap-4 lg:flex-col lg:gap-0">
                      <span
                        className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-ink-800 font-display text-[20px] font-extrabold text-white transition-all duration-500 group-hover:-translate-y-1 group-hover:border-transparent lg:mx-auto ${a.glow}`}
                      >
                        {step.number}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/35 lg:mt-4">
                        {step.duration}
                      </span>
                    </div>

                    <h3 className="mt-3 text-[19px] font-bold text-white lg:mt-3">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 max-w-xs text-[14px] leading-relaxed text-white/55 lg:mx-auto">
                      {step.body}
                    </p>

                    {i < PROCESS_STEPS.length - 1 && (
                      <ArrowRight className="mt-4 hidden h-4 w-4 text-white/20 transition-colors duration-300 group-hover:text-white/50 lg:hidden" />
                    )}
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>

        <Reveal delay={150}>
          <p className="mt-14 text-center text-[14px] text-white/45">
            Typical landing page: <span className="font-semibold text-white/80">7 days</span>{" "}
            · Typical e-commerce store:{" "}
            <span className="font-semibold text-white/80">3–4 weeks</span>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
