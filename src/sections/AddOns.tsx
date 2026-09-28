import { ADD_ONS } from "@/data";
import { ACCENT, Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "@/components/Icons";

export function AddOns() {
  return (
    <Section id="addons" className="bg-surface">
      <SectionHeading
        eyebrow="Add-on services"
        accent="orange"
        title={
          <>
            Bolt on the parts that{" "}
            <span className="gradient-text">compound.</span>
          </>
        }
        subtitle="Optional layers you can add to any build — now or later. Each one is priced on its own, so you only pay for what you actually use."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ADD_ONS.map((addon, i) => {
          const a = ACCENT[addon.accent];
          const Icon = addon.icon;
          return (
            <Reveal key={addon.id} delay={i * 90} className="h-full">
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift ${a.borderHover}`}
              >
                <span
                  className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 ${a.bar} transition-transform duration-500 group-hover:scale-x-100`}
                />

                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${a.bgSoft} ${a.text} transition-all duration-500 group-hover:scale-105`}
                >
                  <Icon className="h-[21px] w-[21px]" />
                </span>

                <h3 className="mt-5 text-[17.5px] font-bold leading-snug">
                  {addon.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-slate-body">
                  {addon.description}
                </p>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-black/[0.06] pt-4">
                  <span className={`text-[13.5px] font-bold ${a.text}`}>
                    {addon.price}
                  </span>
                  <a
                    href="#contact"
                    aria-label={`Enquire about ${addon.title}`}
                    className={`flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.08] text-ink/40 transition-all duration-300 group-hover:border-transparent ${a.chipHover}`}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
