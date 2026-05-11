"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RESIDENTIAL_TIERS = [
  { gb: 1,    price: 4.00 },
  { gb: 50,   price: 3.75 },
  { gb: 100,  price: 3.50 },
  { gb: 200,  price: 3.25 },
  { gb: 300,  price: 3.00 },
  { gb: 500,  price: 2.75 },
  { gb: 750,  price: 2.50 },
  { gb: 1000, price: 2.25 },
];

const MOBILE_TIERS = [
  { gb: 1,    price: 6.00 },
  { gb: 50,   price: 5.75 },
  { gb: 100,  price: 5.50 },
  { gb: 200,  price: 5.25 },
  { gb: 300,  price: 5.00 },
  { gb: 500,  price: 4.75 },
  { gb: 750,  price: 4.50 },
  { gb: 1000, price: 4.25 },
];

const SLIDER_MIN = 1;
const SLIDER_MAX = 1001;

function getPricePerGB(gb: number, tiers: typeof RESIDENTIAL_TIERS) {
  if (gb >= SLIDER_MAX) return null;
  let price = tiers[0].price;
  for (let i = tiers.length - 1; i >= 0; i--) {
    if (gb >= tiers[i].gb) {
      price = tiers[i].price;
      break;
    }
  }
  return price;
}

function formatTotal(total: number) {
  return total.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function PricingCalculator() {
  const [activeTab, setActiveTab] = useState<0 | 1>(0);
  const [gb, setGb] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const tiers = activeTab === 0 ? RESIDENTIAL_TIERS : MOBILE_TIERS;
  const isMax = gb >= SLIDER_MAX;
  const pricePerGB = getPricePerGB(gb, tiers);
  const total = pricePerGB !== null ? pricePerGB * gb : null;

  const sliderPct = ((gb - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100;

  const gbFromPct = useCallback((pct: number) => {
    const clamped = Math.max(0, Math.min(1, pct));
    const raw = SLIDER_MIN + clamped * (SLIDER_MAX - SLIDER_MIN);
    return Math.round(raw);
  }, []);

  const pctFromEvent = useCallback((clientX: number) => {
    if (!trackRef.current) return 0;
    const rect = trackRef.current.getBoundingClientRect();
    return (clientX - rect.left) / rect.width;
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setGb(gbFromPct(pctFromEvent(e.clientX)));
  }, [gbFromPct, pctFromEvent]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    setGb(gbFromPct(pctFromEvent(e.clientX)));
  }, [gbFromPct, pctFromEvent]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleTrackClick = useCallback((e: React.MouseEvent) => {
    setGb(gbFromPct(pctFromEvent(e.clientX)));
  }, [gbFromPct, pctFromEvent]);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Tabs */}
      <div className="flex gap-2 mb-10 p-1 rounded-xl bg-white/[0.04] border border-white/[0.08] w-fit mx-auto">
        {["Residential Proxy", "Mobile Proxy"].map((label, i) => (
          <button
            key={label}
            onClick={() => setActiveTab(i as 0 | 1)}
            className={`relative px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-150 ${
              activeTab === i ? "text-white" : "text-[#81899b] hover:text-[#d1e4fa]/70"
            }`}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {activeTab === i && (
              <motion.div
                layoutId="pricing-tab-bg"
                className="absolute inset-0 rounded-lg bg-[#663af3]"
                style={{ zIndex: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
        >
          {/* Price display */}
          <div className="text-center mb-10">
            <div className="text-[#81899b] text-sm font-medium mb-1">Price per GB</div>
            <div className="flex items-end justify-center gap-2">
              {isMax ? (
                <span className="text-[clamp(2.5rem,6vw,4rem)] font-bold text-white leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Custom
                </span>
              ) : (
                <>
                  <span className="text-[clamp(2.5rem,6vw,4rem)] font-bold text-white leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    ${pricePerGB?.toFixed(2)}
                  </span>
                  <span className="text-[#81899b] text-lg mb-2">/GB</span>
                </>
              )}
            </div>

            {!isMax && total !== null && (
              <div className="mt-3 text-[#d1e4fa]/60 text-sm">
                Total:{" "}
                <span className="text-[#663af3] font-semibold text-base">
                  ${formatTotal(total)}
                </span>{" "}
                for {gb} GB
              </div>
            )}
          </div>

          {/* Slider */}
          <div className="relative mb-2 px-2">
            {/* Tooltip */}
            <div
              className="absolute -top-9 flex flex-col items-center pointer-events-none"
              style={{ left: `calc(${sliderPct}% - 1px)`, transform: "translateX(-50%)" }}
            >
              <div className="bg-[#663af3] text-white text-xs font-bold px-2.5 py-1 rounded-lg whitespace-nowrap shadow-lg">
                {isMax ? "1000+ GB" : `${gb} GB`}
              </div>
              <div
                className="w-2 h-2 bg-[#663af3] rotate-45 -mt-1"
                style={{ clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)" }}
              />
            </div>

            {/* Track */}
            <div
              ref={trackRef}
              className="relative h-2 rounded-full bg-white/[0.08] cursor-pointer"
              onClick={handleTrackClick}
            >
              {/* Filled */}
              <div
                className="absolute left-0 top-0 h-full rounded-full bg-[#663af3]"
                style={{ width: `${sliderPct}%` }}
              />

              {/* Thumb */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-2 border-[#663af3] shadow-lg cursor-grab active:cursor-grabbing touch-none"
                style={{ left: `${sliderPct}%`, boxShadow: "0 0 0 4px rgba(102,58,243,0.25)" }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
              />
            </div>
          </div>

          {/* Tick marks */}
          <div className="flex justify-between px-2 mb-10">
            {tiers.map((tier) => {
              const pct = ((tier.gb - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100;
              const isActive = !isMax && gb >= tier.gb;
              return (
                <button
                  key={tier.gb}
                  onClick={() => setGb(tier.gb)}
                  className="flex flex-col items-center gap-1 group"
                  style={{ width: "1px", position: "relative" }}
                >
                  <div className={`w-px h-2 ${isActive ? "bg-[#663af3]" : "bg-white/20"} transition-colors duration-150`} />
                  <span className={`text-[10px] whitespace-nowrap transition-colors duration-150 ${isActive ? "text-[#d1e4fa]/70" : "text-[#81899b]/60"} group-hover:text-[#d1e4fa]/80`}>
                    {tier.gb} GB
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tier breakdown */}
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-10">
            {tiers.map((tier) => {
              const isCurrentTier = !isMax && (() => {
                const idx = tiers.findLastIndex(t => gb >= t.gb);
                return tiers[idx]?.gb === tier.gb;
              })();
              return (
                <button
                  key={tier.gb}
                  onClick={() => setGb(tier.gb)}
                  className={`rounded-lg p-2 text-center border transition-all duration-150 ${
                    isCurrentTier
                      ? "border-[#663af3] bg-[#663af3]/15"
                      : "border-white/[0.08] bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <div className={`text-[11px] font-bold ${isCurrentTier ? "text-white" : "text-[#d1e4fa]/60"}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    ${tier.price.toFixed(2)}
                  </div>
                  <div className={`text-[10px] ${isCurrentTier ? "text-[#d1e4fa]/70" : "text-[#81899b]"}`}>
                    {tier.gb} GB
                  </div>
                </button>
              );
            })}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col items-center gap-4">
            {isMax ? (
              <button className="px-8 py-3.5 rounded-xl bg-[#663af3] hover:bg-[#7b52f5] text-white font-semibold text-sm transition-colors duration-150" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Contact Us
              </button>
            ) : (
              <button className="px-8 py-3.5 rounded-xl bg-[#663af3] hover:bg-[#7b52f5] text-white font-semibold text-sm transition-colors duration-150" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Get Started →
              </button>
            )}
            <button className="text-[#d1e4fa]/50 text-sm underline underline-offset-4 hover:text-[#d1e4fa]/80 transition-colors duration-150">
              Check Loyalty Program
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
