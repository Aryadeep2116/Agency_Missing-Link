import { cn } from "@/utils/cn";
import type { Accent } from "@/data";

/**
 * Lightweight, dependency-free "browser window" mockups.
 * Pure CSS/DOM — crisp at any size and effectively free to render,
 * so the portfolio still looks like real work without shipping images.
 */

const TONES: Record<Accent, { a: string; b: string; tint: string; ink: string }> = {
  magenta: { a: "#E11D74", b: "#ff7aa8", tint: "#fff0f6", ink: "#3a1024" },
  orange: { a: "#FF7A1A", b: "#ffb067", tint: "#fff4ea", ink: "#3a1c0a" },
  gold: { a: "#FFC145", b: "#ffe08a", tint: "#fff8e8", ink: "#3a2a0a" },
};

function Chrome({ url, tone }: { url: string; tone: Accent }) {
  const t = TONES[tone];
  return (
    <div className="flex items-center gap-2 border-b border-black/[0.06] bg-[#f6f7fa] px-3 py-2">
      <div className="flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
      </div>
      <div
        className="ml-1 flex h-4 flex-1 items-center truncate rounded-[4px] bg-white px-2 text-[7px] font-medium tracking-wide text-black/35"
        style={{ fontFamily: "monospace" }}
      >
        {url}
      </div>
      <span
        className="h-2.5 w-2.5 shrink-0 rounded-[3px]"
        style={{ background: t.a, opacity: 0.55 }}
      />
    </div>
  );
}

function Bar({ w, h = 4, c = "#1f1720", o = 0.12 }: { w: string; h?: number; c?: string; o?: number }) {
  return (
    <span
      className="block rounded-full"
      style={{ width: w, height: h, background: c, opacity: o }}
    />
  );
}

/* ------------------------------ Landing ------------------------------ */

function LandingMock({ tone }: { tone: Accent }) {
  const t = TONES[tone];
  return (
    <div className="flex h-full flex-col">
      {/* fake nav */}
      <div className="flex items-center justify-between px-3 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-[3px]" style={{ background: t.a }} />
          <Bar w="34px" h={4} o={0.35} />
        </div>
        <div className="flex items-center gap-2">
          <Bar w="18px" h={3} o={0.16} />
          <Bar w="22px" h={3} o={0.16} />
          <span
            className="h-3.5 w-12 rounded-full"
            style={{ background: t.a, opacity: 0.9 }}
          />
        </div>
      </div>

      {/* hero */}
      <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4">
        <div
          className="absolute inset-x-0 top-0 h-full"
          style={{
            background: `radial-gradient(120% 80% at 50% 0%, ${t.a}22 0%, transparent 70%)`,
          }}
        />
        <div className="relative flex w-full flex-col items-center gap-2">
          <span
            className="rounded-full px-2 py-[3px] text-[6px] font-semibold uppercase tracking-[0.14em]"
            style={{ background: `${t.a}1f`, color: t.ink }}
          >
            Trusted locally
          </span>
          <div className="flex w-full flex-col items-center gap-1.5">
            <Bar w="72%" h={7} o={0.85} />
            <Bar w="50%" h={7} o={0.85} />
            <Bar w="34%" h={7} c={t.a} o={0.85} />
          </div>
          <div className="mt-1.5 flex items-center gap-1.5">
            <span
              className="h-4 w-14 rounded-full"
              style={{ background: t.a }}
            />
            <span className="h-4 w-14 rounded-full border" style={{ borderColor: `${t.a}66` }} />
          </div>
        </div>
      </div>

      {/* trust strip */}
      <div className="grid grid-cols-3 gap-1.5 border-t border-black/[0.05] px-3 py-2.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex flex-col gap-1 rounded-[5px] px-1.5 py-1.5"
            style={{ background: t.tint }}
          >
            <Bar w="16px" h={3} o={0.3} />
            <Bar w="24px" h={4} c={t.a} o={0.75} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ Store ------------------------------ */

function StoreMock({ tone }: { tone: Accent }) {
  const t = TONES[tone];
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between px-3 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full" style={{ background: t.a }} />
          <Bar w="30px" h={4} o={0.35} />
        </div>
        <div className="flex items-center gap-1.5">
          <Bar w="16px" h={3} o={0.16} />
          <Bar w="20px" h={3} o={0.16} />
          <span className="flex h-3.5 w-3.5 items-center justify-center rounded-[3px] text-[6px] font-bold text-white" style={{ background: t.a }}>
            3
          </span>
        </div>
      </div>

      {/* banner */}
      <div
        className="relative mx-3 h-[54px] overflow-hidden rounded-[6px]"
        style={{ background: `linear-gradient(115deg, ${t.a}, ${t.b})` }}
      >
        <div className="absolute left-2.5 top-3 flex flex-col gap-1">
          <span className="h-2 w-20 rounded-full bg-white/85" />
          <span className="h-2 w-14 rounded-full bg-white/55" />
        </div>
        <div
          className="absolute -right-4 -bottom-8 h-20 w-20 rounded-full"
          style={{ background: "rgba(255,255,255,0.22)" }}
        />
      </div>

      {/* product grid */}
      <div className="grid flex-1 grid-cols-3 gap-1.5 p-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex flex-col gap-1.5 rounded-[6px] border border-black/[0.05] bg-white p-1.5"
          >
            <div
              className="h-[38px] w-full rounded-[4px]"
              style={{
                background:
                  i === 0
                    ? `linear-gradient(150deg, ${t.a}55, ${t.b}33)`
                    : i === 1
                      ? `linear-gradient(150deg, ${t.b}44, ${t.a}22)`
                      : t.tint,
              }}
            />
            <Bar w="80%" h={3} o={0.24} />
            <Bar w="42%" h={4} c={t.a} o={0.9} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ 3D ------------------------------ */

function ThreeDMock({ tone }: { tone: Accent }) {
  const t = TONES[tone];
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#0F0A12]">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(80% 60% at 50% 42%, ${t.a}55 0%, transparent 68%)`,
        }}
      />
      <div className="relative flex items-center justify-between px-3 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-[3px]" style={{ background: t.b }} />
          <Bar w="28px" h={4} c="#ffffff" o={0.4} />
        </div>
        <div className="flex items-center gap-2">
          <Bar w="14px" h={3} c="#ffffff" o={0.25} />
          <Bar w="18px" h={3} c="#ffffff" o={0.25} />
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center">
        {/* isometric 3D cube built from skewed faces */}
        <div className="relative h-[76px] w-[90px]">
          <span
            className="absolute left-[18px] top-0 h-[52px] w-[52px] rounded-[4px]"
            style={{
              background: t.b,
              transform: "skewY(-18deg)",
              opacity: 0.95,
            }}
          />
          <span
            className="absolute left-[44px] top-[13px] h-[52px] w-[52px] rounded-[4px]"
            style={{
              background: t.a,
              transform: "skewY(18deg)",
              opacity: 0.75,
            }}
          />
          <span
            className="absolute left-[18px] top-[26px] h-[52px] w-[52px] rounded-[4px]"
            style={{
              background: "#ffffff",
              opacity: 0.35,
              transform: "skewX(45deg) scale(0.74)",
            }}
          />
        </div>
        <span className="absolute bottom-2 h-2 w-24 rounded-full bg-black/50 blur-[6px]" />
      </div>

      <div className="relative flex flex-col items-center gap-1.5 pb-3.5">
        <span className="h-2 w-24 rounded-full bg-white/70" />
        <span className="h-2 w-14 rounded-full bg-white/35" />
        <span
          className="mt-1 h-4 w-16 rounded-full"
          style={{ background: t.b }}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export function SiteMock({
  variant,
  accent,
  url,
  className,
}: {
  variant: "landing" | "store" | "three-d";
  accent: Accent;
  url: string;
  className?: string;
}) {
  const isDark = variant === "three-d";
  return (
    <div
      className={cn(
        "relative aspect-[16/11] w-full overflow-hidden rounded-xl",
        isDark ? "bg-[#0F0A12]" : "bg-white",
        className,
      )}
    >
      {variant === "three-d" ? (
        <div className="flex h-full flex-col">
          <ChromeDark url={url} />
          <div className="min-h-0 flex-1">
            <ThreeDMock tone={accent} />
          </div>
        </div>
      ) : (
        <div className="flex h-full flex-col">
          <Chrome url={url} tone={accent} />
          <div className="min-h-0 flex-1">
            {variant === "store" ? (
              <StoreMock tone={accent} />
            ) : (
              <LandingMock tone={accent} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function ChromeDark({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.05] px-3 py-2">
      <div className="flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
      </div>
      <div
        className="ml-1 flex h-4 flex-1 items-center truncate rounded-[4px] bg-black/30 px-2 text-[7px] font-medium tracking-wide text-white/40"
        style={{ fontFamily: "monospace" }}
      >
        {url}
      </div>
    </div>
  );
}
