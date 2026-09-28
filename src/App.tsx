import { lazy, Suspense } from "react";
import { Nav } from "@/sections/Nav";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { ArrowRight, WhatsApp } from "@/components/Icons";
import { CONTACT } from "@/data";

const Combos = lazy(() => import("@/sections/Combos").then((m) => ({ default: m.Combos })));
const AddOns = lazy(() => import("@/sections/AddOns").then((m) => ({ default: m.AddOns })));
const WhyUs = lazy(() => import("@/sections/WhyUs").then((m) => ({ default: m.WhyUs })));
const Process = lazy(() => import("@/sections/Process").then((m) => ({ default: m.Process })));
const Portfolio = lazy(() => import("@/sections/Portfolio").then((m) => ({ default: m.Portfolio })));
const Testimonials = lazy(() =>
  import("@/sections/Testimonials").then((m) => ({ default: m.Testimonials })),
);
const Pricing = lazy(() => import("@/sections/Pricing").then((m) => ({ default: m.Pricing })));
const Contact = lazy(() => import("@/sections/Contact").then((m) => ({ default: m.Contact })));
const Footer = lazy(() => import("@/sections/Footer").then((m) => ({ default: m.Footer })));

function FloatingActions() {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6">
      <a
        href="#top"
        aria-label="Back to top"
        className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.08] bg-[#FFF6EC]/90 text-ink shadow-lift backdrop-blur transition-all duration-300 hover:-translate-y-0.5"
      >
        <ArrowRight className="h-4 w-4 -rotate-90" />
      </a>
      <a
        href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
          "Hi Missing-Link! I'd like a quote for websites, branding or marketing.",
        )}`}
        target="_blank"
        rel="noreferrer noopener"
        className="btn-sunset pointer-events-auto group flex items-center gap-2.5 rounded-full py-3 pl-3.5 pr-4 text-[13.5px] font-bold text-white shadow-[0_10px_30px_rgba(225,29,116,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
      >
        <WhatsApp className="h-[18px] w-[18px]" />
        <span className="hidden sm:inline">Chat with us</span>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-surface">
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink focus:shadow-lift"
      >
        Skip to main content
      </a>

      <Nav />
      <main>
        <Hero />
        <Services />
        <Suspense fallback={<div className="min-h-[40vh] bg-ink" aria-hidden="true" />}>
          <Combos />
          <AddOns />
          <WhyUs />
          <Process />
          <Portfolio />
          <Testimonials />
          <Pricing />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <FloatingActions />
    </div>
  );
}
