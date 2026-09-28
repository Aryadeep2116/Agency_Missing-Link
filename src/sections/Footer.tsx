import { CONTACT, NAV_LINKS, SERVICES } from "@/data";
import { LogoMark } from "@/components/Icons";
import { ArrowRight, Instagram, LinkedIn, Mail, Phone, Pin, WhatsApp, XSocial } from "@/components/Icons";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedIn },
  { label: "X", href: "https://x.com", Icon: XSocial },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-ink pt-16">
      <div className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-[radial-gradient(50%_100%_at_50%_100%,rgba(225,29,116,0.18),transparent_70%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 pb-14 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="group inline-flex items-center gap-2.5">
              <LogoMark className="h-9 w-9 transition-transform duration-500 group-hover:rotate-[8deg]" />
              <span className="font-display text-[19px] font-bold tracking-[-0.02em] text-white">
                Missing<span className="gradient-text">-</span>Link
              </span>
            </a>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-white/50">
              We build the bridge between your business and your customers —
              through websites, online stores and AI-powered tools that actually
              get used.
            </p>

            <div className="mt-6 flex gap-2">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] text-white/55 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
                >
                  <Icon className="h-[17px] w-[17px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.16em] text-white/40">
              Quick links
            </h3>
            <ul className="mt-5 grid gap-3">
              {[...NAV_LINKS, { label: "Contact", href: "#contact" }].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-[14px] text-white/60 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-[#E11D74] transition-all duration-300 group-hover:w-3" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.16em] text-white/40">
              Packages
            </h3>
            <ul className="mt-5 grid gap-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block text-[14px] text-white/60 transition-colors hover:text-white"
                  >
                    {s.title}
                    <span className="ml-1.5 text-[12px] text-white/30">
                      from {s.price.replace("Rs. ", "₹")}
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#addons"
                  className="block text-[14px] text-white/60 transition-colors hover:text-white"
                >
                  Add-on services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.16em] text-white/40">
              Get in touch
            </h3>
            <ul className="mt-5 grid gap-3.5 text-[14px]">
              <li>
                <a
                  href={`tel:${CONTACT.phoneDial}`}
                  className="flex items-center gap-2.5 text-white/60 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#FFC145]" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2.5 text-white/60 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#FFC145]" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/60">
                <Pin className="mt-0.5 h-4 w-4 shrink-0 text-[#FFC145]" />
                {CONTACT.location}
              </li>
            </ul>

            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-sunset group mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_10px_24px_rgba(225,29,116,0.35)] transition-all duration-300 hover:brightness-110"
            >
              <WhatsApp className="h-4 w-4" />
              WhatsApp us
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] py-7 sm:flex-row">
          <p className="text-[12.5px] text-white/35">
            © {year} Missing-Link. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="#pricing" className="text-[12.5px] text-white/35 transition-colors hover:text-white/70">
              Pricing
            </a>
            <a href="#top" className="text-[12.5px] text-white/35 transition-colors hover:text-white/70">
              Privacy
            </a>
            <a href="#top" className="text-[12.5px] text-white/35 transition-colors hover:text-white/70">
              Terms
            </a>
            <span className="hidden text-[12.5px] text-white/25 sm:inline">
              Made in India 🇮🇳
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
