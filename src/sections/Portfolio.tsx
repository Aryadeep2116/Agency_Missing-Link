import { useMemo, useState } from "react";
import { cn } from "@/utils/cn";
import { PROJECT_CATEGORIES, PROJECTS } from "@/data";
import { ACCENT, Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "@/components/Icons";
import { SiteMock } from "@/components/SiteMock";

export function Portfolio() {
  const [active, setActive] = useState<(typeof PROJECT_CATEGORIES)[number]>("All");

  const visible = useMemo(
    () => (active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active],
  );

  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Our work"
        accent="orange"
        title={
          <>
            Sites that pay for{" "}
            <span className="gradient-text">themselves.</span>
          </>
        }
        subtitle="A few recent builds across retail, healthcare, hospitality and D2C. Client names are placeholders — swap in your real case studies whenever you're ready."
      />

      {/* Filters */}
      <Reveal delay={120}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {PROJECT_CATEGORIES.map((cat) => {
            const isActive = cat === active;
            const count =
              cat === "All"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={cn(
                  "group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13.5px] font-semibold transition-all duration-300 active:scale-95",
                  isActive
                    ? "border-transparent bg-ink text-white shadow-[0_12px_26px_-12px_rgba(11,13,20,0.6)]"
                    : "border-black/[0.09] bg-white text-slate-body hover:border-ink/25 hover:text-ink",
                )}
              >
                {cat}
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.5 text-[10.5px] font-bold tabular-nums transition-colors",
                    isActive ? "bg-white/15 text-white/70" : "bg-black/[0.05] text-black/35",
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => {
          const a = ACCENT[project.accent];
          return (
            <Reveal key={project.id} delay={(i % 3) * 90} variant="scale">
              <article
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/[0.07] bg-white p-3 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift"
              >
                {/* mockup */}
                <div className="relative overflow-hidden rounded-2xl bg-[#ffefe0] p-1">
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${a.from} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                  />
                  <SiteMock
                    variant={project.mock}
                    accent={project.accent}
                    url={`${project.id.replace(/-/g, "")}.in`}
                    className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                </div>

                {/* meta */}
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`rounded-full ${a.chip} px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.12em]`}
                    >
                      {project.category}
                    </span>
                    <span className="text-[11.5px] font-medium text-slate-soft">
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="mt-3.5 text-[19px] font-bold leading-tight">
                    {project.client}
                  </h3>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-slate-body">
                    {project.result}
                  </p>

                  <a
                    href="#contact"
                    className={`mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold ${a.text} transition-colors`}
                  >
                    View case study
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
