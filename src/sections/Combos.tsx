import { COMBOS, requestQuote } from "@/data";
import { ACCENT, Button, Section, SectionHeading, resetCardTilt, tiltCard } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Check } from "@/components/Icons";
import { cn } from "@/utils/cn";

export function Combos() {
  return (
    <Section id="combos" className="relative overflow-hidden bg-ink text-white" dark>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-[#E11D74]/20 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#FF7A1A]/16 blur-[130px]" />
        <div className="film-grain" />
      </div>
      <div className="section-edge section-edge-light-to-dark" />
      <div className="section-edge section-edge-dark-to-light" />

      <div className="relative z-10">
        <SectionHeading
          dark
          accent="gold"
          eyebrow="Combo packages"
          title={
            <>
              Bundles that{" "}
              <span className="gradient-text">save ~15%.</span>
            </>
          }
          subtitle="Website plus the extras most businesses buy anyway — priced as one invoice instead of four."
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3 lg:items-center">
          {COMBOS.map((combo, i) => {
            const a = ACCENT[combo.accent];
            return (
              <Reveal key={combo.id} delay={i * 110} className="h-full">
                <article
                  className={cn(
                    "combo-card group relative flex h-full flex-col rounded-[1.6rem] border p-7 sm:p-8",
                    combo.popular
                      ? "combo-popular z-10 bg-[#1C1024] lg:scale-[1.06]"
                      : "border-white/[0.08] bg-[#1C1024] hover:border-white/20",
                  )}
                  onPointerMove={tiltCard}
                  onPointerLeave={resetCardTilt}
                >
                  {combo.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#FFC145] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1F1720] shadow-[0_8px_20px_rgba(255,193,69,0.35)]">
                      Most Popular
                    </span>
                  )}

                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-[22px] font-bold text-white">{combo.title}</h3>
                    <span className={`rounded-full ${a.chip} px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.12em]`}>
                      Save ~15%
                    </span>
                  </div>

                  <p className="mt-4 font-display text-[26px] font-extrabold leading-tight text-white">
                    {combo.price}
                  </p>

                  <ul className="mt-6 flex flex-1 flex-col gap-3">
                    {combo.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[14.5px] text-white/75">
                        <span className={`mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full ${a.bgSoft} ${combo.accent === "gold" ? "text-[#FFC145]" : a.text}`}>
                          <Check className="h-[11px] w-[11px]" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="#contact"
                    className="mt-8 w-full"
                    onClick={() => requestQuote(combo.quoteValue)}
                  >
                    Choose This Combo
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
