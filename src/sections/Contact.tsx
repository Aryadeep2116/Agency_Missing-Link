import { useEffect, useState, type FormEvent } from "react";
import { cn } from "@/utils/cn";
import { CONTACT, SERVICE_OPTIONS } from "@/data";
import { Button } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import {
  ArrowRight,
  Check,
  Instagram,
  LinkedIn,
  Mail,
  Phone,
  Pin,
  WhatsApp,
  XSocial,
} from "@/components/Icons";

type Status = "idle" | "sending" | "sent";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedIn },
  { label: "X", href: "https://x.com", Icon: XSocial },
];

function buildWhatsAppLink(msg: string) {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;
}

const inputBase =
  "w-full rounded-2xl border border-black/[0.09] bg-white px-4 py-3.5 text-[14.5px] text-ink placeholder:text-black/30 transition-all duration-300 focus:border-[#E11D74] focus:outline-none focus:ring-4 focus:ring-[#E11D74]/12";

function Field({
  label,
  htmlFor,
  children,
  hint,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="text-[12px] font-bold uppercase tracking-[0.12em] text-ink/70"
      >
        {label}
      </label>
      {children}
      {hint && <span className="text-[11.5px] text-slate-soft">{hint}</span>}
    </div>
  );
}

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    business: "",
    service: SERVICE_OPTIONS[0],
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const set = (key: keyof typeof form) => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: false }));
  };

  useEffect(() => {
    const apply = (value: string) => {
      if (SERVICE_OPTIONS.includes(value)) {
        setForm((f) => ({ ...f, service: value }));
      }
    };
    const onQuote = (event: Event) => apply((event as CustomEvent<string>).detail);
    window.addEventListener("ml:quote", onQuote);
    return () => window.removeEventListener("ml:quote", onQuote);
  }, []);

  const composedMessage = () =>
    [
      `Hi Missing-Link! I'd like a quote.`,
      ``,
      `Name: ${form.name}`,
      form.business ? `Business: ${form.business}` : null,
      `Interested in: ${form.service}`,
      form.message ? `Details: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const nextErrors: Record<string, boolean> = {
      name: form.name.trim().length < 2,
      message: form.message.trim().length < 5,
    };
    if (Object.values(nextErrors).some(Boolean)) {
      setErrors(nextErrors);
      return;
    }

    setStatus("sending");
    const url = buildWhatsAppLink(composedMessage());

    // Open WhatsApp with the pre-filled brief.
    window.open(url, "_blank", "noopener,noreferrer");

    // Mailto fallback for anyone who prefers email.
    setTimeout(() => {
      setStatus("sent");
    }, 700);
  };

  const reset = () => {
    setForm({ name: "", business: "", service: SERVICE_OPTIONS[0], message: "" });
    setErrors({});
    setStatus("idle");
  };

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-ink py-20 sm:py-24 lg:py-28">
      {/* ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(110%_80%_at_15%_0%,#1C1024_0%,#0F0A12_60%)]" />
        <div className="animate-float-slow absolute -left-20 top-10 h-80 w-80 rounded-full bg-[#E11D74]/25 blur-[120px]" />
        <div className="animate-float-slower absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-[#FF7A1A]/16 blur-[130px]" />
        <div className="animate-pulse-soft absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-[#FFC145]/14 blur-[120px]" />
        <div className="bg-grid-dark absolute inset-0 opacity-40" />
      </div>

      <div className="section-edge section-edge-light-to-dark" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* ---------------- Left: pitch + contact channels ---------------- */}
          <div className="flex flex-col">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFC145]" />
                Free quote · Reply within 24h
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="text-balance-tight mt-6 text-[clamp(2.2rem,6vw,3.9rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-white">
                Let's Build Your{" "}
                <span className="gradient-text">Website.</span>
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-white/60">
                Tell us what you sell and who you sell it to. We'll come back with
                a clear plan, a fixed price and a launch date — usually within a
                day.
              </p>
            </Reveal>

            {/* Quick actions */}
            <Reveal delay={210}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={buildWhatsAppLink(
                    "Hi Missing-Link! I'd like to know more about your website packages.",
                  )}
                  target="_blank"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <WhatsApp className="h-[18px] w-[18px]" />
                  Chat on WhatsApp
                </Button>
                <Button
                  href={`tel:${CONTACT.phoneDial}`}
                  variant="light"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Phone className="h-[17px] w-[17px]" />
                  Call {CONTACT.phoneDisplay}
                </Button>
              </div>
            </Reveal>

            {/* Contact detail cards */}
            <Reveal delay={270}>
              <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] sm:grid-cols-2">
                {[
                  { Icon: Mail, label: "Email us", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                  { Icon: Phone, label: "Call us", value: CONTACT.phoneDisplay, href: `tel:${CONTACT.phoneDial}` },
                  { Icon: WhatsApp, label: "WhatsApp", value: "Mon–Sat, 10am–8pm IST", href: buildWhatsAppLink("Hi Missing-Link!") },
                  { Icon: Pin, label: "Based in", value: CONTACT.location, href: undefined },
                ].map(({ Icon, label, value, href }) => {
                  const inner = (
                    <>
                      <Icon className="h-[18px] w-[18px] text-[#FFC145]" />
                      <div className="min-w-0">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
                          {label}
                        </div>
                        <div className="mt-0.5 truncate text-[14px] font-semibold text-white/85">
                          {value}
                        </div>
                      </div>
                    </>
                  );
                  return href ? (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer noopener"
                      className="flex items-start gap-3 bg-ink/50 p-4 transition-colors duration-300 hover:bg-white/[0.06]"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={label} className="flex items-start gap-3 bg-ink/50 p-4">
                      {inner}
                    </div>
                  );
                })}
              </div>
            </Reveal>

            {/* Socials */}
            <Reveal delay={330}>
              <div className="mt-8 flex items-center gap-3">
                <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/35">
                  Follow
                </span>
                <div className="flex gap-2">
                  {SOCIALS.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/[0.05] text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white"
                    >
                      <Icon className="h-[17px] w-[17px]" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* ---------------- Right: the form ---------------- */}
          <Reveal delay={140} variant="right">
            <div className="relative rounded-[28px] border border-white/12 bg-white p-6 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)] sm:p-8">
              {status === "sent" ? (
                <div className="flex min-h-[460px] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E11D74]/15 text-[#E11D74]">
                    <Check className="h-8 w-8" strokeWidth={2.4} />
                  </span>
                  <h3 className="mt-6 text-[24px] font-bold text-ink">
                    Your brief is on its way.
                  </h3>
                  <p className="mt-3 max-w-sm text-[14.5px] leading-relaxed text-slate-body">
                    We opened WhatsApp with your details pre-filled — hit send and
                    we'll reply within 24 hours. Prefer email? Write to{" "}
                    <a
                      className="font-semibold text-[#E11D74] hover:underline"
                      href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
                        "Project enquiry",
                      )}&body=${encodeURIComponent(composedMessage())}`}
                    >
                      {CONTACT.email}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-7 inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2.5 text-[14px] font-semibold text-ink transition-colors hover:border-ink/30"
                  >
                    Send another brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-[21px] font-bold text-ink">
                        Tell us about your project
                      </h3>
                      <p className="mt-1.5 text-[13.5px] text-slate-body">
                        Takes 40 seconds. No calls unless you want one.
                      </p>
                    </div>
                    <span className="hidden shrink-0 rounded-full bg-[#E11D74]/10 px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#E11D74] sm:block">
                      Step 1 of 1
                    </span>
                  </div>

                  <div className="mt-7 grid gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Your name" htmlFor="name">
                        <input
                          id="name"
                          name="name"
                          autoComplete="name"
                          value={form.name}
                          onChange={(e) => set("name")(e.target.value)}
                          placeholder="Priya Sharma"
                          className={cn(inputBase, errors.name && "border-[#E11D74] ring-4 ring-[#E11D74]/12")}
                        />
                      </Field>
                      <Field label="Business name" htmlFor="business">
                        <input
                          id="business"
                          name="business"
                          autoComplete="organization"
                          value={form.business}
                          onChange={(e) => set("business")(e.target.value)}
                          placeholder="Sharma Interiors"
                          className={inputBase}
                        />
                      </Field>
                    </div>

                    <Field label="Service interested in" htmlFor="service">
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={(e) => set("service")(e.target.value)}
                          className={cn(inputBase, "appearance-none pr-11")}
                        >
                          {SERVICE_OPTIONS.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/35">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </span>
                      </div>
                    </Field>

                    <Field label="What do you need?" htmlFor="message">
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => set("message")(e.target.value)}
                        placeholder="We run a 2-storey bakery in Indiranagar and want to start taking online orders for custom cakes…"
                        className={cn(
                          inputBase,
                          "resize-none",
                          errors.message && "border-[#E11D74] ring-4 ring-[#E11D74]/12",
                        )}
                      />
                    </Field>

                    {(errors.name || errors.message) && (
                      <p className="rounded-xl bg-[#E11D74]/10 px-4 py-3 text-[13px] font-medium text-[#E11D74]">
                        Please add your name and a short note about the project.
                      </p>
                    )}
                  </div>

                  <Button type="submit" size="lg" className="mt-7 w-full">
                    {status === "sending" ? "Opening WhatsApp…" : "Send my brief"}
                    <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>

                  <p className="mt-4 text-center text-[12px] leading-relaxed text-slate-soft">
                    Submitting opens WhatsApp with your details pre-filled. We never
                    share your information.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
