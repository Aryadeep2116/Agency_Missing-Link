import {
  IconBolt,
  IconCalendar,
  IconCart,
  IconChatbot,
  IconCreditCard,
  IconCube3D,
  IconDatabase,
  IconGlobe,
  IconHeadset,
  IconInventory,
  IconLandingPage,
  IconMegaphone,
  IconMobile,
  IconPalette,
  IconPin,
  IconSearch,
  IconSparkle,
  IconTag,
  IconTarget,
  IconTeam,
  IconWhatsApp,
  IconWrench,
  Mail,
} from "@/components/Icons";
import type { ComponentType, SVGProps } from "react";

export type Accent = "magenta" | "orange" | "gold";
export type ServiceCategory = "websites" | "branding" | "marketing" | "custom";

export const CONTACT = {
  phoneDisplay: "+91 98765 43210",
  phoneDial: "+919876543210",
  whatsapp: "919876543210",
  email: "hello@missinglink.in",
  location: "Bengaluru, India · Working pan-India",
};

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Combos", href: "#combos" },
  { label: "Add-ons", href: "#addons" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
];

export const TRUST_ITEMS = [
  { value: "50+", label: "Websites Delivered" },
  { value: "AI", label: "AI-Powered Builds" },
  { value: "IN 🇮🇳", label: "Made for Indian Businesses" },
  { value: "7–10", label: "Day Average Delivery" },
];

export type Service = {
  id: string;
  number: string;
  accent: Accent;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  tagline: string;
  description: string;
  price: string;
  features: string[];
};

export const SERVICES: Service[] = [
  {
    id: "landing-page",
    number: "01",
    accent: "magenta",
    icon: IconLandingPage,
    title: "Landing Page",
    tagline: "For local shops & small services",
    description:
      "A sharp, single-page website that tells people exactly what you do, why you're good at it, and how to reach you. Built to convert visitors into calls and enquiries.",
    price: "Rs. 10,000",
    features: [
      "Custom design, no templates",
      "Mobile-first & lightning fast",
      "WhatsApp, call & enquiry form",
      "Google Maps + SEO basics",
    ],
  },
  {
    id: "ecommerce",
    number: "02",
    accent: "orange",
    icon: IconCart,
    title: "Full E-commerce Store",
    tagline: "For retail shops selling online",
    description:
      "A complete online store with catalogue, cart, payments and an order dashboard — so you can sell across India without depending on marketplaces.",
    price: "Rs. 25,000",
    features: [
      "Unlimited catalogue & categories",
      "UPI / card / COD via Razorpay",
      "Coupons, shipping & GST rules",
      "Owner dashboard + order alerts",
    ],
  },
  {
    id: "3d-landing",
    number: "03",
    accent: "gold",
    icon: IconCube3D,
    title: "3D Design Landing Page",
    tagline: "For premium brands & launches",
    description:
      "Scroll-driven motion, 3D product showcases and cinematic art direction. For brands that want to look ten times their size from day one.",
    price: "Rs. 20,000",
    features: [
      "Interactive 3D product view",
      "Scroll & hover animations",
      "Premium typography system",
      "Launch-ready in 14 days",
    ],
  },
];

export const SERVICE_TABS: { id: ServiceCategory; label: string }[] = [
  { id: "websites", label: "Websites" },
  { id: "branding", label: "Branding & Visibility" },
  { id: "marketing", label: "Marketing & Automation" },
  { id: "custom", label: "Custom Solutions" },
];

export type CatalogService = {
  id: string;
  category: ServiceCategory;
  accent: Accent;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  price: string;
  quoteValue: string;
};

export const SERVICE_CATALOG: CatalogService[] = [
  {
    id: "landing-page",
    category: "websites",
    accent: "magenta",
    icon: IconLandingPage,
    title: "Landing Page",
    description:
      "A conversion-first single page for local shops and small services — WhatsApp, call and enquiry, built to rank locally.",
    price: "Starting Rs. 10,000",
    quoteValue: "Landing Page (Rs. 10,000+)",
  },
  {
    id: "ecommerce",
    category: "websites",
    accent: "orange",
    icon: IconCart,
    title: "Full E-commerce Store",
    description:
      "Catalogue, cart, UPI/card/COD and an owner dashboard so you can sell across India without a marketplace.",
    price: "Starting Rs. 25,000",
    quoteValue: "Full E-commerce Store (Rs. 25,000+)",
  },
  {
    id: "3d-landing",
    category: "websites",
    accent: "gold",
    icon: IconCube3D,
    title: "3D Design Landing Page",
    description:
      "Cinematic motion, 3D product views and launch-ready art direction for premium brands.",
    price: "Starting Rs. 20,000",
    quoteValue: "3D Design Landing Page (Rs. 20,000+)",
  },
  {
    id: "logo-brand",
    category: "branding",
    accent: "magenta",
    icon: IconPalette,
    title: "Logo & Brand Identity",
    description:
      "Logo, colour palette, visiting card and social profile design so you look consistent everywhere.",
    price: "Rs. 3,000 – 10,000",
    quoteValue: "Logo & Brand Identity (Rs. 3,000 – 10,000)",
  },
  {
    id: "gbp",
    category: "branding",
    accent: "orange",
    icon: IconPin,
    title: "Google Business Profile Setup",
    description:
      "Maps listing, photos, reviews and verification — so neighbours actually find you.",
    price: "Rs. 2,000 – 5,000",
    quoteValue: "Google Business Profile Setup (Rs. 2,000 – 5,000)",
  },
  {
    id: "local-seo",
    category: "branding",
    accent: "gold",
    icon: IconSearch,
    title: "Local SEO",
    description:
      "“Near me” ranking, keyword work and monthly reports for shops that live on Google.",
    price: "Rs. 3,000 – 8,000 / month",
    quoteValue: "Local SEO (Rs. 3,000 – 8,000 / month)",
  },
  {
    id: "domain-hosting",
    category: "branding",
    accent: "magenta",
    icon: IconGlobe,
    title: "Domain, Hosting & Business Email",
    description:
      "We register, connect and renew your domain, hosting and professional inbox.",
    price: "Rs. 1,500 – 4,000 / year",
    quoteValue: "Domain, Hosting & Business Email (Rs. 1,500 – 4,000 / year)",
  },
  {
    id: "social",
    category: "marketing",
    accent: "magenta",
    icon: IconMegaphone,
    title: "Social Media Management",
    description:
      "Posts, reels, captions and a content calendar so your pages stay alive without you chasing freelancers.",
    price: "Rs. 5,000 – 15,000 / month",
    quoteValue: "Social Media Management (Rs. 5,000 – 15,000 / month)",
  },
  {
    id: "ads",
    category: "marketing",
    accent: "orange",
    icon: IconTarget,
    title: "Meta & Google Ads Management",
    description:
      "Setup, targeting and weekly optimisation. Ad spend is billed separately to the platform.",
    price: "Rs. 4,000 – 12,000 / month",
    quoteValue: "Meta & Google Ads Management (Rs. 4,000 – 12,000 / month)",
  },
  {
    id: "wa-auto",
    category: "marketing",
    accent: "gold",
    icon: IconWhatsApp,
    title: "WhatsApp Business Automation",
    description:
      "Catalogue, auto-replies, order updates and broadcasts — running while you sleep.",
    price: "Rs. 5,000 – 15,000 setup + Rs. 1,000 – 3,000 / month",
    quoteValue: "WhatsApp Business Automation",
  },
  {
    id: "email-sms",
    category: "marketing",
    accent: "magenta",
    icon: Mail,
    title: "Email & SMS Campaigns",
    description:
      "Offer drops and repeat-customer messaging that bring people back without a new ad spend.",
    price: "Rs. 2,500 – 6,000 / month",
    quoteValue: "Email & SMS Campaigns (Rs. 2,500 – 6,000 / month)",
  },
  {
    id: "payments",
    category: "custom",
    accent: "magenta",
    icon: IconCreditCard,
    title: "Payment Gateway Integration",
    description:
      "Razorpay, UPI and COD wired into your site or store, with settlement alerts to WhatsApp.",
    price: "Rs. 3,000 – 8,000",
    quoteValue: "Payment Gateway Integration (Rs. 3,000 – 8,000)",
  },
  {
    id: "booking",
    category: "custom",
    accent: "orange",
    icon: IconCalendar,
    title: "Booking & Appointment System",
    description:
      "Calendars, deposits and reminders for salons, clinics and gyms — no more double-booked slots.",
    price: "Rs. 8,000 – 20,000",
    quoteValue: "Booking & Appointment System (Rs. 8,000 – 20,000)",
  },
  {
    id: "billing",
    category: "custom",
    accent: "gold",
    icon: IconInventory,
    title: "Billing & Inventory Software",
    description:
      "Stock, invoicing and GST-ready bills for small shops that have outgrown a notebook.",
    price: "Rs. 15,000 – 40,000",
    quoteValue: "Billing & Inventory Software (Rs. 15,000 – 40,000)",
  },
  {
    id: "mobile-app",
    category: "custom",
    accent: "magenta",
    icon: IconMobile,
    title: "Mobile App Development",
    description:
      "Android / iOS shop or booking app with the same catalogue and payments as your website.",
    price: "Rs. 40,000 – 1,20,000",
    quoteValue: "Mobile App Development (Rs. 40,000 – 1,20,000)",
  },
];

export type Combo = {
  id: string;
  accent: Accent;
  title: string;
  price: string;
  popular?: boolean;
  includes: string[];
  quoteValue: string;
};

export const COMBOS: Combo[] = [
  {
    id: "starter-combo",
    accent: "magenta",
    title: "Starter Combo",
    price: "Rs. 15,000 – 30,000",
    includes: [
      "Landing Page",
      "Google Business Profile",
      "Logo & brand basics",
      "WhatsApp enquiry setup",
    ],
    quoteValue: "Starter Combo (Rs. 15,000 – 30,000)",
  },
  {
    id: "growth-combo",
    accent: "orange",
    title: "Growth Combo",
    price: "Rs. 45,000 – 90,000",
    popular: true,
    includes: [
      "Full E-commerce Store",
      "Payment Gateway",
      "WhatsApp Automation",
      "3 months maintenance",
    ],
    quoteValue: "Growth Combo (Rs. 45,000 – 90,000)",
  },
  {
    id: "premium-combo",
    accent: "gold",
    title: "Premium Combo",
    price: "Rs. 60,000 – 1,20,000",
    includes: [
      "3D Landing Page",
      "Full branding kit",
      "3 months Social Media",
      "AI Chatbot",
    ],
    quoteValue: "Premium Combo (Rs. 60,000 – 1,20,000)",
  },
];

export type AddOn = {
  id: string;
  accent: Accent;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  price: string;
};

export const ADD_ONS: AddOn[] = [
  {
    id: "chatbot",
    accent: "magenta",
    icon: IconChatbot,
    title: "AI Chatbot",
    description:
      "A trained assistant on your site that answers questions, qualifies leads and books calls — 24/7, in your tone of voice.",
    price: "Rs. 8,000 – 20,000",
  },
  {
    id: "ai-implementation",
    accent: "orange",
    icon: IconSparkle,
    title: "AI Implementation",
    description:
      "Product recommendations, smart search and personalised content that quietly lift your conversion rate.",
    price: "Rs. 15,000 onwards",
  },
  {
    id: "data-entry",
    accent: "gold",
    icon: IconDatabase,
    title: "E-commerce Data Entry",
    description:
      "We upload, tag, describe and polish your catalogue so your store looks stocked and professional.",
    price: "Rs. 4,000 / month",
  },
  {
    id: "maintenance",
    accent: "magenta",
    icon: IconWrench,
    title: "Service & Maintenance",
    description:
      "Updates, backups, speed checks, content edits and bug fixes — handled before you notice them.",
    price: "Rs. 2,500 / month",
  },
];

export const VALUE_PROPS = [
  {
    accent: "magenta" as Accent,
    icon: IconBolt,
    title: "Fast turnaround",
    body: "Landing pages live in 7 days, stores in 3–4 weeks. Clear milestones, no drifting timelines.",
  },
  {
    accent: "orange" as Accent,
    icon: IconSparkle,
    title: "AI-first approach",
    body: "We bake automation, chat and personalisation into the build instead of bolting it on later.",
  },
  {
    accent: "gold" as Accent,
    icon: IconHeadset,
    title: "Ongoing support",
    body: "A real human on WhatsApp after launch. Edits, questions and fixes — not a ticket queue.",
  },
  {
    accent: "magenta" as Accent,
    icon: IconTag,
    title: "Transparent pricing",
    body: "Fixed packages published up front. No hourly surprises, no hidden 'maintenance traps'.",
  },
  {
    accent: "orange" as Accent,
    icon: IconTeam,
    title: "One team, full stack",
    body: "One team for website, marketing and automation — no juggling multiple vendors.",
  },
];

export const PROCESS_STEPS = [
  {
    number: "1",
    accent: "magenta" as Accent,
    title: "Discovery Call",
    duration: "Day 1",
    body: "A 30-minute call to understand your business, customers and what the site actually needs to achieve.",
  },
  {
    number: "2",
    accent: "orange" as Accent,
    title: "Design",
    duration: "Day 2–4",
    body: "We shape the structure and visual direction, then share a clickable preview for your sign-off.",
  },
  {
    number: "3",
    accent: "gold" as Accent,
    title: "Build",
    duration: "Day 5–9",
    body: "Development, content, integrations and testing across devices. You get daily progress updates.",
  },
  {
    number: "4",
    accent: "magenta" as Accent,
    title: "Launch & Support",
    duration: "Day 10 →",
    body: "We deploy, connect your domain and analytics, then stay on for edits, backups and improvements.",
  },
];

export type Project = {
  id: string;
  client: string;
  category: "Landing Page" | "E-commerce" | "3D";
  result: string;
  accent: Accent;
  tag: string;
  mock: "landing" | "store" | "three-d";
};

export const PROJECT_CATEGORIES = [
  "All",
  "Landing Page",
  "E-commerce",
  "3D",
] as const;

export const PROJECTS: Project[] = [
  {
    id: "kalyani",
    client: "Kalyani Silks",
    category: "E-commerce",
    result: "3.2× online orders in the first 60 days",
    accent: "orange",
    tag: "Textile retailer · Kochi",
    mock: "store",
  },
  {
    id: "aurea",
    client: "Aurea Jewels",
    category: "3D",
    result: "1,100 pre-orders before the showroom opened",
    accent: "gold",
    tag: "Fine jewellery launch · Mumbai",
    mock: "three-d",
  },
  {
    id: "physioplus",
    client: "PhysioPlus Clinic",
    category: "Landing Page",
    result: "Appointment bookings up 68%, 3 weeks booked out",
    accent: "magenta",
    tag: "Healthcare · Bengaluru",
    mock: "landing",
  },
  {
    id: "terrareta",
    client: "Terra Home Decor",
    category: "E-commerce",
    result: "Average order value up 28% after redesign",
    accent: "gold",
    tag: "D2C home decor · Jaipur",
    mock: "store",
  },
  {
    id: "urbanblend",
    client: "Urban Blend Coffee",
    category: "Landing Page",
    result: "42% more walk-ins from local Google searches",
    accent: "orange",
    tag: "Café chain · Pune",
    mock: "landing",
  },
  {
    id: "novafit",
    client: "Nova Fitness",
    category: "3D",
    result: "First coaching cohort sold out in 9 days",
    accent: "magenta",
    tag: "Fitness brand · Delhi NCR",
    mock: "three-d",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "We had a catalogue on WhatsApp and nothing else. Missing-Link built us a proper store in three weeks — the first month online beat our best marketplace month.",
    name: "Ramesh Iyer",
    role: "Owner, Kalyani Silks",
    type: "E-commerce · Retail",
    rating: 5,
    accent: "orange" as Accent,
  },
  {
    quote:
      "The chatbot they set up answers the same twelve questions my front desk used to field all day. Appointments went up and my phone finally stopped ringing off the hook.",
    name: "Dr. Ananya Menon",
    role: "Founder, PhysioPlus Clinic",
    type: "Landing Page + AI",
    rating: 5,
    accent: "magenta" as Accent,
  },
  {
    quote:
      "Every other agency quoted us something vague with a monthly retainer. These folks sent one page with fixed prices and delivered exactly that. Rare.",
    name: "Arjun Sethi",
    role: "Co-founder, Nova Fitness",
    type: "3D Landing Page",
    rating: 5,
    accent: "gold" as Accent,
  },
];

export const PRICING_MATRIX = {
  rows: [
    { label: "Custom design", values: [true, true, true] },
    { label: "Mobile responsive", values: [true, true, true] },
    { label: "Enquiry / WhatsApp form", values: [true, true, true] },
    { label: "Product catalogue & cart", values: [false, true, false] },
    { label: "Payment gateway (UPI / card)", values: [false, true, false] },
    { label: "Owner dashboard", values: [false, true, false] },
    { label: "3D & scroll animations", values: [false, false, true] },
    { label: "Basic SEO setup", values: [true, true, true] },
    { label: "Delivery time", values: ["7 days", "3–4 weeks", "14 days"] },
  ] as { label: string; values: (boolean | string)[] }[],
};

export const SERVICE_OPTIONS = [
  "Landing Page (Rs. 10,000+)",
  "Full E-commerce Store (Rs. 25,000+)",
  "3D Design Landing Page (Rs. 20,000+)",
  "Logo & Brand Identity (Rs. 3,000 – 10,000)",
  "Google Business Profile Setup (Rs. 2,000 – 5,000)",
  "Local SEO (Rs. 3,000 – 8,000 / month)",
  "Domain, Hosting & Business Email (Rs. 1,500 – 4,000 / year)",
  "Social Media Management (Rs. 5,000 – 15,000 / month)",
  "Meta & Google Ads Management (Rs. 4,000 – 12,000 / month)",
  "WhatsApp Business Automation",
  "Email & SMS Campaigns (Rs. 2,500 – 6,000 / month)",
  "Payment Gateway Integration (Rs. 3,000 – 8,000)",
  "Booking & Appointment System (Rs. 8,000 – 20,000)",
  "Billing & Inventory Software (Rs. 15,000 – 40,000)",
  "Mobile App Development (Rs. 40,000 – 1,20,000)",
  "Starter Combo (Rs. 15,000 – 30,000)",
  "Growth Combo (Rs. 45,000 – 90,000)",
  "Premium Combo (Rs. 60,000 – 1,20,000)",
  "AI Chatbot",
  "AI Implementation",
  "E-commerce Data Entry",
  "Service & Maintenance",
  "Not sure yet — advise me",
];

export function requestQuote(service: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("ml:quote", { detail: service }));
}
