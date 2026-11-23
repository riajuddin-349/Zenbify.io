const paths: Record<string, string> = {
  shield: "M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3zm-3 9l2.2 2.2L15.5 10",
  phone: "M6.5 4h3l1.5 4-2 1.3a10 10 0 005.7 5.7L16 13l4 1.5v3a2 2 0 01-2 2A14 14 0 014.5 6a2 2 0 012-2z",
  refresh: "M20 11a8 8 0 00-14-4M4 4v4h4M4 13a8 8 0 0014 4M20 20v-4h-4",
  truck: "M3 6h11v10H3zM14 9h4l3 3v4h-7M7.5 19a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6zm10 0a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6z",
};
export function Icon({ name, size = 20 }: { name: keyof typeof paths; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
