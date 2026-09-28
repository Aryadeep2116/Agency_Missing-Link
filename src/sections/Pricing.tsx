import { PRICING_MATRIX, SERVICES } from "@/data";
import { ACCENT, Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Check, Close } from "@/components/Icons";

export function Pricing() {
  return (
    <Section id="pricing">
      <SectionHeading
        eyebrow="Pricing recap"
        title={
          <>
            Compare the three, then{" "}
            <span className="gradient-text">pick one.</span>
          </>
        }
        subtitle="Everything below is included in the starting price. GST extra where applicable. No lock-in, no surprise invoices."
      />

      <Reveal delay={120} variant="scale" className="mt-12">
        <div className="overflow-x-auto rounded-3xl border border-black/[0.08] bg-white shadow-soft [scrollbar-width:thin]">
          <div className="min-w-[540px]">
          {/* Header row */}
          <div className="grid grid-cols-[1.2fr_repeat(3,1fr)] border-b border-black/[0.08] bg-[#ffefe0]">
            <div className="px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-soft sm:px-6 sm:py-5">
              Package
            </div>
            {SERVICES.map((s) => {
              const a = ACCENT[s.accent];
              return (
                <div
                  key={s.id}
                  className="relative border-l border-black/[0.06] px-3 py-4 text-center sm:px-5 sm:py-5"
                >
                  <span className={`absolute inset-x-0 top-0 h-[3px] ${a.bar}`} />
                  <div className="text-[13px] font-bold leading-tight text-ink sm:text-[15px]">
                    {s.title}
                  </div>
                  <div className="mt-1 font-display text-[15px] font-extrabold sm:text-[19px]">
                    <span className={a.text}>{s.price}</span>
                  </div>
                  <div className="mt-0.5 hidden text-[11px] text-slate-soft sm:block">
                    starting
                  </div>
                </div>
              );
            })}
          </div>

          {/* Body rows */}
          {PRICING_MATRIX.rows.map((row, ri) => (
            <div
              key={row.label}
              className={`grid grid-cols-[1.2fr_repeat(3,1fr)] ${
                ri !== PRICING_MATRIX.rows.length - 1
                  ? "border-b border-black/[0.05]"
                  : ""
              } transition-colors duration-300 hover:bg-[#fff6ec]`}
            >
              <div className="px-4 py-3.5 text-[13px] font-medium text-[#3f4557] sm:px-6 sm:py-4 sm:text-[14px]">
                {row.label}
              </div>
              {row.values.map((v, i) => {
                const a = ACCENT[SERVICES[i].accent];
                return (
                  <div
                    key={i}
                    className="flex items-center justify-center border-l border-black/[0.05] px-3 py-3.5 sm:py-4"
                  >
                    {typeof v === "boolean" ? (
                      v ? (
                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-full ${a.bgSoft} ${a.text}`}
                        >
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </span>
                      ) : (
                        <Close className="h-3.5 w-3.5 text-black/15" strokeWidth={2.4} />
                      )
                    ) : (
                      <span className="text-[12.5px] font-bold text-ink sm:text-[13.5px]">
                        {v}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}

          {/* CTA row */}
          <div className="grid grid-cols-[1.2fr_repeat(3,1fr)] border-t border-black/[0.08] bg-[#ffefe0]">
            <div className="hidden px-6 py-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-soft sm:block">
              Get started
            </div>
            {SERVICES.map((s) => {
              const a = ACCENT[s.accent];
              return (
                <div
                  key={s.id}
                  className="border-l border-black/[0.06] p-3 sm:p-4"
                >
                  <a
                    href="#contact"
                    className={`group flex w-full items-center justify-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3 py-2.5 text-[12.5px] font-semibold text-ink transition-all duration-300 sm:text-[13.5px] ${a.chipHover}`}
                  >
                    Enquire
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </Reveal>

      {/* Footnote cards */}
      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        {[
          { k: "What's always included", v: "Copywriting help, stock imagery, hosting setup and domain connection." },
          { k: "Payment terms", v: "40% to start, 60% on launch. UPI, bank transfer or card link." },
          { k: "Add-ons", v: "Chatbot, AI features, data entry and maintenance priced separately above." },
        ].map((f, i) => (
          <Reveal key={f.k} delay={i * 90}>
            <div className="h-full rounded-2xl border border-black/[0.06] bg-[#ffefe0] p-5">
              <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-ink">
                {f.k}
              </div>
              <p className="mt-2 text-[13.5px] leading-relaxed text-slate-body">{f.v}</p>
            </div>
          </Reveal>
        ))}
      </div>

    </Section>
  );
}
