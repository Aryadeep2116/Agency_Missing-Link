import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ------------------------- Brand & UI ------------------------- */

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ml-grad" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0%" stopColor="#E11D74" />
          <stop offset="55%" stopColor="#FF7A1A" />
          <stop offset="100%" stopColor="#FFC145" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="30" height="30" rx="9" fill="url(#ml-grad)" />
      <path
        d="M10 22V10.5L16 17l6-6.5V22"
        fill="none"
        stroke="#0F0A12"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m4 12.5 5 5L20 6.5" />
    </svg>
  );
}

export function Star({ filled = true, ...props }: IconProps & { filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.45 6.2 20.5l1.1-6.45L2.6 9.45l6.5-.95L12 2.6z" />
    </svg>
  );
}

export function Quote(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9.6 5.5C6.5 6.9 4.6 9.8 4.6 13.2c0 3.2 1.8 5.3 4.4 5.3 2.2 0 3.9-1.6 3.9-3.7 0-2-1.4-3.5-3.3-3.5-.3 0-.6 0-.9.1.4-1.7 1.7-3.2 3.5-4.1l-1.6-1.8zm9.1 0c-3.1 1.4-5 4.3-5 7.7 0 3.2 1.8 5.3 4.4 5.3 2.2 0 3.9-1.6 3.9-3.7 0-2-1.4-3.5-3.3-3.5-.3 0-.6 0-.9.1.4-1.7 1.7-3.2 3.5-4.1l-1.6-1.8z" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.6 3.5h-.8A2.3 2.3 0 0 0 3.5 6c.4 4.3 2.4 8.2 5.4 11.1 2.9 3 6.8 5 11.1 5.4a2.3 2.3 0 0 0 2.5-2.3v-.9a1.7 1.7 0 0 0-1.3-1.7l-2.7-.7a1.7 1.7 0 0 0-1.7.6l-.8 1a14 14 0 0 1-5.4-5.4l1-.8a1.7 1.7 0 0 0 .6-1.7l-.7-2.7a1.7 1.7 0 0 0-1.6-1.3z" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function Pin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function WhatsApp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.1l-.7.9c-.1.2-.3.2-.6.1-.8-.3-1.7-.8-2.4-1.5-.6-.6-1-1.2-1.4-1.9-.1-.2 0-.4.1-.5l.7-.8c.2-.2.1-.4 0-.6l-.9-2.1c-.2-.4-.4-.4-.6-.4h-.6c-.2 0-.6.1-.9.4-1 1-1.2 2.3-.8 3.6.5 1.6 1.5 3.1 2.8 4.3 1.6 1.6 3.5 2.6 5.6 3 .9.2 1.8 0 2.5-.6.3-.3.5-.7.6-1.1v-.7c0-.1-.1-.3-.3-.4l-.3-.3zM12 2.2A9.8 9.8 0 0 0 3.6 17l-1.4 5 5.1-1.3A9.8 9.8 0 1 0 12 2.2zm0 17.8a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20z" />
    </svg>
  );
}

export function Instagram(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedIn(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9.5h4v11H3v-11zm6.5 0h3.8v1.5h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76v5.69h-4V15.6c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.2 1.47-2.2 3v5.1h-4v-11z" />
    </svg>
  );
}

export function XSocial(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.2 3h3.3l-7.2 8.2L21.5 21h-6l-4.3-5.6L6 21H2.7l7.5-8.5L2.5 3h6.1l4 5.3L17.2 3zm-1.2 16h1.8L7.9 4.8H6L16 19z" />
    </svg>
  );
}

/* ------------------------- Services ------------------------- */

export function IconLandingPage(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="4" width="19" height="16" rx="2.5" />
      <path d="M2.5 8.5h19" />
      <path d="M9 12h6M9 15.5h3.5" />
    </svg>
  );
}

export function IconCart(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 3.5h2.2l2.4 10.4h9.3l2.1-7.4H6" />
      <circle cx="9" cy="19" r="1.6" />
      <circle cx="16.5" cy="19" r="1.6" />
    </svg>
  );
}

export function IconCube3D(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.8l8.5 4.6v9.2L12 21.2 3.5 16.6V7.4L12 2.8z" />
      <path d="M3.5 7.4 12 12l8.5-4.6M12 12v9.2" />
    </svg>
  );
}

export function IconChatbot(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="12.5" rx="3.5" />
      <path d="M8 20.5l1.2-4" />
      <path d="M8.5 10.2h.01M12 10.2h.01M15.5 10.2h.01" strokeWidth="2.4" />
    </svg>
  );
}

export function IconSparkle(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5l1.9 4.6 4.6 1.9-4.6 1.9L12 16.5l-1.9-4.6L5.5 10l4.6-1.9L12 3.5z" />
      <path d="M18.5 15.5l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8.8-1.9z" />
    </svg>
  );
}

export function IconDatabase(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6" />
      <path d="M4.5 12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3" />
    </svg>
  );
}

export function IconWrench(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14.7 6.3a3.8 3.8 0 0 1 5.1 5l-1.6-.4-1.7 1.7.5 1.9-2 1.9-1.4-1.4-6.4 6.4a2 2 0 0 1-2.8-2.8l6.4-6.4-1.4-1.4 1.9-2 1.9.5 1.7-1.7-.4-1.6a3.8 3.8 0 0 1 1.2-1.7z" />
    </svg>
  );
}

/* ------------------------- Value props ------------------------- */

export function IconBolt(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2.5 5 13.5h5.5l-1 8 8.5-11.5H12l1-7.5z" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.8 4.5 6v6c0 4.4 3.1 7.9 7.5 9.2 4.4-1.3 7.5-4.8 7.5-9.2V6L12 2.8z" />
      <path d="m9 11.8 2.2 2.2 4-4" />
    </svg>
  );
}

export function IconHeadset(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 14h2.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5.5A1.5 1.5 0 0 1 4 17.5V14zM20 14h-2.5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a1.5 1.5 0 0 0 1.5-1.5V14z" />
      <path d="M17 19v.5a2.5 2.5 0 0 1-2.5 2.5H12" />
    </svg>
  );
}

export function IconTag(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20.5 12.9 12.9 20.5a2 2 0 0 1-2.8 0l-6.6-6.6a2 2 0 0 1 0-2.8L11 3.6l9.5-.1.1 9.4z" />
      <circle cx="16.2" cy="7.8" r="1.4" />
    </svg>
  );
}

export function IconPalette(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5a8.5 8.5 0 1 0 0 17h1.4a2.1 2.1 0 0 0 2-2.7 2.1 2.1 0 0 1 2-2.8H19a8.5 8.5 0 0 0-7-11.5z" />
      <circle cx="8" cy="10" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="7.6" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="10" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="9.2" cy="14.2" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.2 4.2" />
    </svg>
  );
}

export function IconGlobe(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.6 3.6 5.6 3.6 8.5s-1.2 5.9-3.6 8.5c-2.4-2.6-3.6-5.6-3.6-8.5s1.2-5.9 3.6-8.5z" />
    </svg>
  );
}

export function IconMegaphone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 10.5v3a2 2 0 0 0 2 2H8l2.2 4.2a1 1 0 0 0 1.8-.5V15.5L20 18V6L12 8.5V10.5H6.5a2 2 0 0 0-2 2z" />
    </svg>
  );
}

export function IconTarget(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCreditCard(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 9.5h19M7 15h3.5" />
    </svg>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M8 3.5v3M16 3.5v3M3 10h18" />
    </svg>
  );
}

export function IconInventory(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8.2 12 4.5l8 3.7v8.6L12 20.5 4 16.8V8.2z" />
      <path d="M12 12.2 20 8.5M12 12.2V20.5M12 12.2 4 8.5" />
    </svg>
  );
}

export function IconMobile(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.4" />
      <path d="M11 18.5h2" />
    </svg>
  );
}

export function IconTeam(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <circle cx="16.5" cy="9" r="2.3" />
      <path d="M3.5 19c.6-3 3-5 5.5-5s4.9 2 5.5 5" />
      <path d="M13.6 14.4c1.7-.4 3.6.6 4.6 2.6.4.8.6 1.6.7 2" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function IconWhatsApp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.1l-.7.9c-.1.2-.3.2-.6.1-.8-.3-1.7-.8-2.4-1.5-.6-.6-1-1.2-1.4-1.9-.1-.2 0-.4.1-.5l.7-.8c.2-.2.1-.4 0-.6l-.9-2.1c-.2-.4-.4-.4-.6-.4h-.6c-.2 0-.6.1-.9.4-1 1-1.2 2.3-.8 3.6.5 1.6 1.5 3.1 2.8 4.3 1.6 1.6 3.5 2.6 5.6 3 .9.2 1.8 0 2.5-.6.3-.3.5-.7.6-1.1v-.7c0-.1-.1-.3-.3-.4l-.3-.3zM12 2.2A9.8 9.8 0 0 0 3.6 17l-1.4 5 5.1-1.3A9.8 9.8 0 1 0 12 2.2zm0 17.8a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20z" />
    </svg>
  );
}
