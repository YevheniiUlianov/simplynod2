"use client";

const items = [
  {
    label: "Fair Pricing",
    icon: (
      <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="8" />
        <path d="M10 6v1m0 6v1M7.5 8.5A1.5 1.5 0 0 1 9 7.5h2a1.5 1.5 0 0 1 0 3H9a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 0 1.5-1.5" />
      </svg>
    ),
  },
  {
    label: "Pay as you go",
    icon: (
      <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="16" height="11" rx="2" />
        <path d="M2 9h16" />
        <path d="M6 13h2" />
      </svg>
    ),
  },
  {
    label: "No expiration",
    icon: (
      <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 9.5A5.5 5.5 0 0 1 15.5 7" />
        <path d="M15.5 10.5A5.5 5.5 0 0 1 4.5 13" />
        <path d="M4.5 9.5 3 8m1.5 1.5L3 11" />
        <path d="M15.5 10.5 17 9m-1.5 1.5L17 12" />
      </svg>
    ),
  },
  {
    label: "Seamless domain access",
    icon: (
      <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="8" />
        <path d="M10 2c0 0-3 3.5-3 8s3 8 3 8" />
        <path d="M10 2c0 0 3 3.5 3 8s-3 8-3 8" />
        <path d="M2 10h16" />
      </svg>
    ),
  },
  {
    label: "Ultimate coverage",
    icon: (
      <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2L3 5.5v4.5c0 3.5 3 6.5 7 8 4-1.5 7-4.5 7-8V5.5L10 2z" />
        <path d="M7 10l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "No commitment",
    icon: (
      <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 8.5C6.5 7.1 7.6 6 9 6h2a3 3 0 0 1 0 6H9" />
        <path d="M9 12H7a3 3 0 0 1 0-6" />
      </svg>
    ),
  },
];

// Separator dot between items
function Dot() {
  return <span className="w-1 h-1 rounded-full bg-[#663af3]/60 shrink-0" />;
}

export function MarqueeStrip() {
  // Triplicate for seamless infinite loop
  const repeated = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden py-6 border-y border-white/[0.06]">
      {/* fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#05060f] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#05060f] to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-10 w-max"
        style={{
          animation: "marquee 28s linear infinite",
        }}
      >
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center gap-8 shrink-0">
            <div className="flex items-center gap-2.5 text-[#d1e4fa]/90 text-sm font-medium whitespace-nowrap">
              <span className="text-[#663af3]">{item.icon}</span>
              {item.label}
            </div>
            <Dot />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .flex:hover { animation-play-state: paused; }
      `}</style>
    </div>
  );
}
