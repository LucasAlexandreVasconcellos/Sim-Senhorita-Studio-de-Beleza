import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const SearchIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const PinIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const CalendarIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </svg>
);

export const SunIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export const MoonIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
  </svg>
);

export const MenuIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const StarIcon = (p: P) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9L12 2.8Z" />
  </svg>
);

export const ArrowIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* ---------- Feature icons (solid, like the reference) ---------- */

export const ScissorsIcon = (p: P) => (
  <svg {...base} width={24} height={24} strokeWidth={1.8} {...p}>
    <circle cx="6" cy="6.5" r="3" fill="currentColor" />
    <circle cx="6" cy="17.5" r="3" fill="currentColor" />
    <path d="M8.5 8 20 18.5M8.5 16 20 5.5" />
  </svg>
);

export const SparkleIcon = (p: P) => (
  <svg {...base} width={24} height={24} fill="currentColor" stroke="none" {...p}>
    <path d="M12 2c.6 4.6 2.4 6.4 7 7-4.6.6-6.4 2.4-7 7-.6-4.6-2.4-6.4-7-7 4.6-.6 6.4-2.4 7-7Z" />
    <path d="M19 14c.3 2.2 1.1 3 3.3 3.3-2.2.3-3 1.1-3.3 3.3-.3-2.2-1.1-3-3.3-3.3 2.2-.3 3-1.1 3.3-3.3Z" />
  </svg>
);

export const LocationSolidIcon = (p: P) => (
  <svg {...base} width={24} height={24} fill="currentColor" stroke="none" {...p}>
    <path d="M12 1.8a7.7 7.7 0 0 0-7.7 7.7c0 5.8 7.7 12.7 7.7 12.7s7.7-6.9 7.7-12.7A7.7 7.7 0 0 0 12 1.8Zm0 10.6a2.9 2.9 0 1 1 0-5.8 2.9 2.9 0 0 1 0 5.8Z" />
  </svg>
);

/* ---------- Social ---------- */

export const InstagramIcon = (p: P) => (
  <svg {...base} width={14} height={14} strokeWidth={1.9} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
  </svg>
);

export const FacebookIcon = (p: P) => (
  <svg {...base} width={14} height={14} fill="currentColor" stroke="none" {...p}>
    <path d="M20 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8.6v-7.7H10v-3h2.6V9.1c0-2.6 1.6-4 3.9-4 1.1 0 2 .1 2.3.1v2.7h-1.6c-1.3 0-1.5.6-1.5 1.5v1.9h3l-.4 3h-2.6V22H20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
  </svg>
);

export const WhatsappIcon = (p: P) => (
  <svg {...base} width={14} height={14} fill="currentColor" stroke="none" {...p}>
    <path d="M12 2a9.9 9.9 0 0 0-8.5 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.8 14.1c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1a17 17 0 0 1-1.7-.6 13.4 13.4 0 0 1-5.1-4.5c-.6-.8-1.1-1.8-1.1-2.9 0-1.1.6-1.6.8-1.8.2-.3.5-.3.6-.3h.5c.2 0 .4 0 .6.4l.8 2c.1.2.1.3 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 2a7.4 7.4 0 0 0 2.2 1.3c.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.9.9.6.3c0 .1 0 .7-.2 1.4Z" />
  </svg>
);

export const GoogleIcon = (p: P) => (
  <svg {...base} width={14} height={14} fill="currentColor" stroke="none" {...p}>
    <path d="M21.6 10.2H12v3.9h5.5c-.5 2.5-2.7 4.1-5.5 4.1a6.2 6.2 0 0 1 0-12.4c1.5 0 2.9.6 4 1.5l2.9-2.9A10.2 10.2 0 0 0 12 1.8a10.2 10.2 0 1 0 0 20.4c5.1 0 9.8-3.7 9.8-10.2 0-.6-.1-1.2-.2-1.8Z" />
  </svg>
);
