import type { Service } from "@/lib/services";

const paths: Record<Service["icon"] | "arrow" | "check" | "pin" | "phone" | "doc" | "mail", React.ReactNode> = {
  drain: (<><circle cx="24" cy="24" r="15" /><path d="M24 9v30M9 24h30M13.5 13.5l21 21M34.5 13.5l-21 21" /></>),
  sewer: (<><path d="M8 12h12a6 6 0 0 1 6 6v12a6 6 0 0 0 6 6h8" /><path d="M8 20h8a2 2 0 0 1 2 2v8a14 14 0 0 0 14 14h8" /></>),
  jet: (<><path d="M6 24h16" /><path d="M22 18v12l8-3v-6z" /><path d="M34 24h8M33 17l7-4M33 31l7 4" /></>),
  truck: (<><path d="M5 30V17a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v13" /><path d="M29 20h7l6 7v5h-4" /><path d="M5 32h5M20 32h10" /><circle cx="15" cy="33" r="4" /><circle cx="34" cy="33" r="4" /></>),
  grease: (<><path d="M9 16h30v19a4 4 0 0 1-4 4H13a4 4 0 0 1-4-4z" /><path d="M6 16h36M24 16v14" /><path d="M9 26c4-3 7 3 11 0M28 26c4-3 7 3 11 0" /></>),
  tank: (<><path d="M10 14h28v21a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4z" /><path d="M7 14h34M18 14V9h12v5" /><path d="M10 25c5-3 9 3 14 0s9 3 14 0" /></>),
  arrow: (<path d="M10 24h28M28 14l10 10-10 10" />),
  check: (<path d="M10 25l9 9 19-20" />),
  pin: (<><path d="M24 43s14-12 14-23a14 14 0 0 0-28 0c0 11 14 23 14 23z" /><circle cx="24" cy="20" r="5" /></>),
  phone: (<path d="M14 6h6l3 9-4 3a22 22 0 0 0 11 11l3-4 9 3v6a4 4 0 0 1-4 4C20 38 10 28 10 10a4 4 0 0 1 4-4z" />),
  doc: (<><path d="M13 6h15l9 9v23a4 4 0 0 1-4 4H13a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4z" /><path d="M28 6v9h9M16 25h16M16 32h11" /></>),
  mail: (<><rect x="6" y="11" width="36" height="26" rx="4" /><path d="M7 14l17 13 17-13" /></>),
};

export function Icon({ name, size = 28 }: { name: keyof typeof paths; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
