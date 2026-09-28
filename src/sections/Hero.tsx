import { CONTACT, TRUST_ITEMS } from "@/data";
import { ArrowRight, Check } from "@/components/Icons";
import { Button } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { SiteMock } from "@/components/SiteMock";
import { HeroScene } from "@/components/HeroScene";

function MiniStat({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-[12.5px] font-medium text-white/55">
      <Check className="h-3.5 w-3.5 text-[#FFC145]" strokeWidth={2.6} />
      {label}
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate bg-ink">
      <HeroScene />
      <div className="film-grain z-[1]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Availability badge */}
          <Reveal>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.055] py-1.5 pl-2 pr-4 backdrop-blur-md transition-colors hover:border-white/25 hover:bg-white/10"
            >
              <span className="flex items-center gap-1.5 rounded-full bg-[#E11D74]/15 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#FFC145]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFC145] opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FFC145]" />
                </span>
                Taking new projects
              </span>
              <span className="text-[12.5px] font-medium text-white/60">
                2 slots left for this month
              </span>
            </a>
          </Reveal>

          {/* Headline */}
          <Reveal delay={90}>
            <h1 className="text-balance-tight mt-7 text-[clamp(2.4rem,7.4vw,5rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-white">
              We Build The{" "}
              <span className="relative whitespace-nowrap">
                <span className="gradient-text">Bridge</span>
                <svg
                  className="absolute -bottom-1 left-0 h-[0.22em] w-full text-[#E11D74]/70"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8C40 3 160 3 198 8"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Between Your Business and Your Customers
            </h1>
          </Reveal>

          {/* Subheadline */}
          <Reveal delay={170}>
            <p className="mx-auto mt-7 max-w-2xl text-[16px] leading-relaxed text-white/60 sm:text-[17.5px]">
              Websites, Branding, Marketing & AI Automation for businesses that
              are done looking small online. Premium design, honest pricing,
              delivered in weeks — not months.
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={240}>
            <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
              <Button href="#contact" size="lg" className="w-full sm:w-auto">
                Get a Free Quote
                <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                href="#work"
                variant="light"
                size="lg"
                className="w-full sm:w-auto"
              >
                View Our Work
              </Button>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <MiniStat label="No advance for discovery call" />
              <MiniStat label="Fixed-price packages" />
              <MiniStat label={`Talk to us on ${CONTACT.phoneDisplay}`} />
            </div>
          </Reveal>
        </div>

        {/* Showcase mockups */}
        <Reveal delay={360} variant="scale" className="relative mt-14 sm:mt-16">
          <div className="relative mx-auto max-w-5xl">
            {/* glow behind the mocks */}
            <div className="pointer-events-none absolute inset-x-8 -top-6 bottom-8 rounded-[40px] bg-[#E11D74]/20 blur-[70px]" />

            <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
              {[
                { variant: "landing" as const, accent: "magenta" as const, url: "physioplus.in" },
                { variant: "store" as const, accent: "orange" as const, url: "kalyanisilks.com" },
                { variant: "three-d" as const, accent: "gold" as const, url: "aureajewels.com" },
              ].map((m, i) => (
                <div
                  key={m.url}
                  className={[
                    "group relative rounded-2xl border border-white/10 bg-white/[0.045] p-2 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-white/25",
                    i === 1 ? "sm:-mt-6 sm:pb-2" : "",
                  ].join(" ")}
                >
                  <SiteMock
                    variant={m.variant}
                    accent={m.accent}
                    url={m.url}
                    className="shadow-[0_30px_60px_-24px_rgba(0,0,0,0.85)]"
                  />
                  <div className="flex items-center justify-between px-2 pb-1 pt-2.5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
                      {m.variant === "landing"
                        ? "Landing Page"
                        : m.variant === "store"
                          ? "E-commerce"
                          : "3D Design"}
                    </span>
                    <span className="text-[11px] font-semibold text-white/30">
                      0{i + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Trust indicators */}
        <Reveal delay={120} className="relative mt-12 sm:mt-14">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md sm:grid-cols-4">
            {TRUST_ITEMS.map((item) => (
              <div
                key={item.label}
                className="group flex flex-col items-center gap-1.5 bg-ink/40 px-3 py-5 text-center transition-colors duration-300 hover:bg-white/[0.05]"
              >
                <span className="font-display text-[clamp(1.3rem,3.4vw,1.75rem)] font-extrabold leading-none text-white">
                  {item.value}
                </span>
                <span className="text-[11.5px] font-medium uppercase tracking-[0.1em] text-white/45">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* fade into the light sections */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[#FFF6EC]/75 to-[#FFF6EC]" />
    </section>
  );
}
