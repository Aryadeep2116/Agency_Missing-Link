import { VALUE_PROPS } from "@/data";
import { ACCENT, Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Check } from "@/components/Icons";

const HIGHLIGHTS = [
  "Fixed prices published on this page",
  "You own your domain, code and data",
  "Weekly progress updates, no chasing",
  "Free 30-day bug-fix window after launch",
  "One team for website, marketing and automation — no juggling vendors",
];

export function WhyUs() {
  return (
    <Section id="why-us">
      <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
        {/* Left — heading + highlights */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Why choose us"
            title={
              <>
                An agency that{" "}
                <span className="gradient-text">shows up</span>, not one that
                disappears.
              </>
            }
            subtitle="We're small on purpose. You talk to the people building your site, you get straight answers, and you know exactly what things cost before we start."
          />

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h} delay={i * 70} variant="left">
                <li className="flex items-start gap-2.5 rounded-2xl border border-black/[0.06] bg-white px-4 py-3.5">
                  <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#E11D74]/15 text-[#E11D74]">
                    <Check className="h-[11px] w-[11px]" strokeWidth={3} />
                  </span>
                  <span className="text-[13.5px] font-medium leading-snug text-[#3f4557]">
                    {h}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Right — icon grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          {VALUE_PROPS.map((prop, i) => {
            const a = ACCENT[prop.accent];
            const Icon = prop.icon;
            return (
              <Reveal
                key={prop.title}
                delay={i * 100}
                variant={i % 2 === 0 ? "up" : "up"}
                className="h-full"
              >
                <div className="group relative h-full overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <div
                    className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full ${a.bgSoft} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                  />
                  <div className="relative flex items-start gap-4">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white ${a.bg} ${a.shadow} transition-transform duration-500 group-hover:scale-110`}
                    >
                      <Icon className="h-[21px] w-[21px]" />
                    </span>
                    <div>
                      <h3 className="text-[16.5px] font-bold leading-snug">
                        {prop.title}
                      </h3>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-slate-body">
                        {prop.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
