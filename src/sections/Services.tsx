import { useMemo, useState } from "react";
import { SERVICE_CATALOG, SERVICE_TABS, type ServiceCategory, requestQuote } from "@/data";
import { ACCENT, Button, Section, SectionHeading, resetCardTilt, tiltCard } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "@/components/Icons";
import { cn } from "@/utils/cn";

export function Services() {
  const [tab, setTab] = useState<ServiceCategory>("websites");
  const cards = useMemo(
    () => SERVICE_CATALOG.filter((item) => item.category === tab),
    [tab],
  );

  return (
    <Section id="services" className="relative overflow-hidden">
      <div className="blush-wash pointer-events-none absolute inset-0" />

      <div className="relative">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Four desks.{" "}
              <span className="gradient-text">One agency.</span>
            </>
          }
          subtitle="Websites, branding, marketing and custom tools — pick a category, then a package. Every card is fixed-price and quoted in rupees."
        />

        <Reveal delay={120}>
          <div
            role="tablist"
            aria-label="Service categories"
            className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-2"
          >
            {SERVICE_TABS.map((item) => {
              const active = item.id === tab;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setTab(item.id)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-[13.5px] font-semibold transition-all duration-300",
                    active
                      ? "btn-sunset border-transparent text-white shadow-[0_10px_24px_rgba(225,29,116,0.28)]"
                      : "border-black/[0.08] bg-white/70 text-slate-body hover:border-ink/20 hover:text-ink",
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div
          key={tab}
          className="tab-panel-enter mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((service, i) => {
            const a = ACCENT[service.accent];
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                id={service.id}
                style={{ animationDelay: `${i * 90}ms` }}
                className="service-card group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/[0.07] bg-white p-7 shadow-soft hover:border-transparent hover:shadow-lift sm:p-8"
                onPointerMove={tiltCard}
                onPointerLeave={resetCardTilt}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${a.wash} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <span
                  className={`absolute left-0 top-8 h-[calc(100%-4rem)] w-[3px] rounded-r-full ${a.bar} opacity-70`}
                />

                <span
                  className={`relative flex h-12 w-12 items-center justify-center rounded-2xl text-white ${a.bg} ${a.shadow}`}
                >
                  <Icon className="h-[22px] w-[22px]" />
                </span>

                <h3 className="relative mt-5 text-[20px] font-bold leading-tight">
                  {service.title}
                </h3>
                <p className="relative mt-3 flex-1 text-[14.5px] leading-relaxed text-slate-body">
                  {service.description}
                </p>

                <div className="relative mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-black/[0.06] pt-5">
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-soft">
                      From
                    </span>
                    <span className="font-display text-[18px] font-extrabold leading-tight text-ink">
                      {service.price}
                    </span>
                  </div>
                  <Button
                    href="#contact"
                    size="sm"
                    onClick={() => requestQuote(service.quoteValue)}
                  >
                    Get Quote
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
