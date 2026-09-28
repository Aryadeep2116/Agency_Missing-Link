import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import type { Accent } from "@/data";
import { Reveal } from "@/components/Reveal";

export const ACCENT: Record<
  Accent,
  {
    text: string;
    bg: string;
    bgSoft: string;
    border: string;
    bar: string;
    chip: string;
    glow: string;
    shadow: string;
    ring: string;
    from: string;
    wash: string;
    num: string;
    chipHover: string;
    borderHover: string;
  }
> = {
  magenta: {
    text: "text-[#E11D74]",
    bg: "bg-[#E11D74]",
    bgSoft: "bg-[#E11D74]/[0.1]",
    border: "border-[#E11D74]/25",
    bar: "bg-[#E11D74]",
    chip: "bg-[#E11D74] text-white",
    glow: "shadow-[0_0_0_1px_rgba(225,29,116,0.18),0_18px_40px_-16px_rgba(225,29,116,0.55)]",
    shadow: "shadow-glow-magenta",
    ring: "group-hover:ring-[#E11D74]/30",
    from: "from-[#E11D74] to-[#FF7A1A]",
    wash: "from-[#E11D74]/12 to-[#FF7A1A]/[0.05]",
    num: "text-[#E11D74]/30 opacity-70",
    chipHover: "hover:bg-[#E11D74] hover:text-white",
    borderHover: "hover:border-[#E11D74]/40",
  },
  orange: {
    text: "text-[#D45F00]",
    bg: "bg-[#FF7A1A]",
    bgSoft: "bg-[#FF7A1A]/[0.12]",
    border: "border-[#FF7A1A]/30",
    bar: "bg-[#FF7A1A]",
    chip: "bg-[#FF7A1A] text-white",
    glow: "shadow-[0_0_0_1px_rgba(255,122,26,0.2),0_18px_40px_-16px_rgba(255,122,26,0.5)]",
    shadow: "shadow-glow-orange",
    ring: "group-hover:ring-[#FF7A1A]/30",
    from: "from-[#FF7A1A] to-[#FFC145]",
    wash: "from-[#FF7A1A]/14 to-[#FFC145]/[0.06]",
    num: "text-[#FF7A1A]/35 opacity-70",
    chipHover: "hover:bg-[#FF7A1A] hover:text-white",
    borderHover: "hover:border-[#FF7A1A]/40",
  },
  gold: {
    text: "text-[#B77900]",
    bg: "bg-[#FFC145]",
    bgSoft: "bg-[#FFC145]/[0.16]",
    border: "border-[#FFC145]/40",
    bar: "bg-[#FFC145]",
    chip: "bg-[#FFC145] text-[#1F1720]",
    glow: "shadow-[0_0_0_1px_rgba(255,193,69,0.28),0_18px_40px_-16px_rgba(255,193,69,0.5)]",
    shadow: "shadow-glow-gold",
    ring: "group-hover:ring-[#FFC145]/35",
    from: "from-[#FFC145] to-[#FF7A1A]",
    wash: "from-[#FFC145]/16 to-[#FF7A1A]/[0.05]",
    num: "text-[#B77900]/35 opacity-70",
    chipHover: "hover:bg-[#FFC145] hover:text-[#1F1720]",
    borderHover: "hover:border-[#FFC145]/50",
  },
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "dark" | "outline" | "light" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: string;
};

export function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  target,
}: ButtonProps) {
  const sizes = {
    sm: "px-4 py-2 text-[13px]",
    md: "px-5 py-3 text-[14.5px]",
    lg: "px-7 py-3.5 text-[15px]",
  };

  const variants = {
    primary:
      "btn-sunset text-white shadow-[0_10px_30px_rgba(225,29,116,0.35)] hover:brightness-110 hover:-translate-y-0.5",
    dark: "bg-ink text-white hover:bg-[#1C1024] shadow-[0_14px_30px_-14px_rgba(15,10,18,0.7)]",
    outline:
      "btn-sunset-border bg-transparent text-ink hover:bg-[#FFF6EC]",
    light:
      "border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:border-white/35",
    ghost: "text-ink/70 hover:text-ink",
  };

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.01em] transition-all duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D74]/60 focus-visible:ring-offset-2",
    sizes[size],
    variants[variant],
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        onClick={onClick}
        rel={target === "_blank" ? "noreferrer noopener" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export function Eyebrow({
  children,
  dark = false,
  accent = "magenta",
  className,
}: {
  children: ReactNode;
  dark?: boolean;
  accent?: Accent;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em]",
        dark
          ? "border-white/15 bg-white/[0.06] text-white/70"
          : cn(ACCENT[accent].border, ACCENT[accent].bgSoft, ACCENT[accent].text),
        className,
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          dark ? "bg-[#FFC145]" : ACCENT[accent].bar,
        )}
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
  accent = "magenta",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  dark?: boolean;
  accent?: Accent;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <Reveal>
        <Eyebrow dark={dark} accent={accent}>
          {eyebrow}
        </Eyebrow>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={cn(
            "text-balance-tight max-w-3xl text-[clamp(1.9rem,5vw,3.1rem)] leading-[1.08]",
            dark ? "text-white" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={150}>
          <p
            className={cn(
              "max-w-2xl text-[15.5px] leading-relaxed",
              align === "center" && "mx-auto",
              dark ? "text-white/60" : "text-slate-body",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function Section({
  id,
  children,
  className,
  dark = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-20 sm:py-24 lg:py-28",
        dark ? "bg-ink text-white" : "bg-surface",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function tiltCard(event: React.PointerEvent<HTMLElement>) {
  if (
    event.pointerType !== "mouse" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }
  const card = event.currentTarget;
  const bounds = card.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;
  card.style.transform = `perspective(1050px) rotateX(${-y * 7}deg) rotateY(${x * 8}deg) translate3d(0, -6px, 0)`;
}

export function resetCardTilt(event: React.PointerEvent<HTMLElement>) {
  event.currentTarget.style.transform = "";
}
