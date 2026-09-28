import { TESTIMONIALS } from "@/data";
import { ACCENT, Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Quote, Star } from "@/components/Icons";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          filled={i < count}
          className={`h-[15px] w-[15px] ${i < count ? "text-[#ffb020]" : "text-black/15"}`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-surface">
      <SectionHeading
        eyebrow="Client words"
        accent="magenta"
        title={
          <>
            People who stopped{" "}
            <span className="gradient-text">losing leads.</span>
          </>
        }
        subtitle="Placeholder testimonials — replace with your real client quotes, photos and Google review links."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => {
          const a = ACCENT[t.accent];
          return (
            <Reveal key={t.name} delay={i * 110} className="h-full">
              <figure className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                <span className={`absolute left-0 top-0 h-full w-[3px] ${a.bar} opacity-60`} />
                <Quote className={`h-8 w-8 ${a.bgSoft} rounded-lg p-1.5 ${a.text}`} />

                <Stars count={t.rating} />

                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-[#3f4557]">
                  “{t.quote}”
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3.5 border-t border-black/[0.06] pt-5">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${a.chip} font-display text-[15px] font-bold`}
                  >
                    {t.name
                      .split(" ")
                      .filter((w) => !w.includes("."))
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")}
                  </span>
                  <div className="min-w-0">
                    <div className="truncate text-[14.5px] font-bold text-ink">
                      {t.name}
                    </div>
                    <div className="truncate text-[12.5px] text-slate-body">
                      {t.role}
                    </div>
                    <div className={`mt-0.5 truncate text-[11px] font-semibold uppercase tracking-[0.1em] ${a.text}`}>
                      {t.type}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
