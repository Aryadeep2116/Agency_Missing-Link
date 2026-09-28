import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { CONTACT, NAV_LINKS } from "@/data";
import { ArrowRight, Close, LogoMark, Menu, Phone } from "@/components/Icons";
import { Button } from "@/components/ui";
import { useScrollProgress } from "@/components/Reveal";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
            scrolled
            ? "border-b border-black/[0.06] bg-[#FFF6EC]/88 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          {/* Logo */}
          <a
            href="#top"
            className="group flex items-center gap-2.5"
            aria-label="Missing-Link home"
          >
            <LogoMark className="h-8 w-8 shrink-0 transition-transform duration-500 group-hover:rotate-[8deg]" />
            <span
              className={cn(
                "font-display text-[17px] font-bold tracking-[-0.02em] transition-colors duration-500",
                scrolled ? "text-ink" : "text-white",
              )}
            >
              Missing
              <span className="gradient-text">-</span>
              Link
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors duration-300",
                  scrolled
                    ? "text-slate-body hover:text-ink"
                    : "text-white/65 hover:text-white",
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${CONTACT.phoneDial}`}
              className={cn(
                "flex items-center gap-2 text-[14px] font-semibold transition-colors duration-300",
                scrolled ? "text-ink hover:text-[#E11D74]" : "text-white/80 hover:text-white",
              )}
            >
              <Phone className="h-4 w-4" />
              {CONTACT.phoneDisplay}
            </a>
            <Button href="#contact" size="sm">
              Get a Free Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl border transition-colors lg:hidden",
              scrolled
                ? "border-black/10 bg-white text-ink"
                : "border-white/15 bg-white/10 text-white",
            )}
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>

        {/* Scroll progress */}
        <div
          className="progress-bar h-[2px] origin-left transition-transform duration-150"
          style={{ transform: `scaleX(${progress})` }}
        />
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink/60 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-[#FFF6EC] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex h-[68px] items-center justify-between border-b border-black/[0.07] px-5">
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-8 w-8" />
              <span className="font-display text-[17px] font-bold text-ink">
                Missing<span className="gradient-text">-</span>Link
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-ink"
            >
              <Close className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-1 flex-col gap-1 overflow-y-auto p-5">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-[16px] font-semibold text-ink transition-colors hover:bg-[#ffefe0]"
              >
                {link.label}
                <span className="font-sans text-[11px] font-semibold text-black/25">
                  0{i + 1}
                </span>
              </a>
            ))}
          </div>

          <div className="space-y-3 border-t border-black/[0.07] p-5">
            <Button href="#contact" className="w-full" onClick={() => setOpen(false)}>
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href={`tel:${CONTACT.phoneDial}`}
              variant="outline"
              className="w-full"
            >
              <Phone className="h-4 w-4" />
              {CONTACT.phoneDisplay}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
