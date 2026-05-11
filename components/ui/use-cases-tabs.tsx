"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: "01",
    title: "SEO Monitoring & Rank Tracking",
    subtitle: "Local search visibility",
    badge: "USE CASE 01",
    heading: "See exactly what users see in every city.",
    body: [
      "Google results change based on where you search from. An SEO agency that checks rankings from one office IP in one city misses the full picture. With SimplyNode, agencies send rank queries through residential proxies in every target market — getting 15 city-specific rank reports. Not estimates. Actual local results.",
      "Example: A mid-size agency handles SEO for a dental clinic chain in California. They run daily checks on 200 keywords through proxy servers in Los Angeles, San Diego, San Francisco, Sacramento, and Fresno. One Monday, they catch a ranking drop in Sacramento that does not show up anywhere else. Turns out a new competitor opened there and started running local ads. The agency adjusts the client's Sacramento strategy before patient bookings take a hit. Without city-level proxy targeting, that drop goes unnoticed for weeks.",
    ],
    cards: [
      { icon: "location_on",    title: "City-level targeting",  body: "Query from any city with exact geo precision" },
      { icon: "bar_chart",      title: "200+ keyword checks",   body: "Run at scale across unlimited target markets" },
      { icon: "notifications",  title: "Real-time rank alerts", body: "Catch drops before they affect traffic" },
    ],
  },
  {
    id: "02",
    title: "Price Intelligence",
    subtitle: "Competitive monitoring",
    badge: "USE CASE 02",
    heading: "Track competitor prices across every market.",
    body: [
      "Prices on the internet move constantly. Airlines tweak fares every few minutes. Retailers adjust based on demand, stock levels, and what the competition charges. If you monitor prices without proxies, you only see what your own location returns. And some sites catch repeated visits from the same IP and start feeding you inflated prices, hidden deals, or outright blocks.",
      "Example: A price comparison startup tracks laptop prices across 12 retailers in 8 countries. Their scrapers cycle through SimplyNode residential proxies with country-level targeting. Each instance connects from a different market, grabs the local price, converts to USD, and pushes it into a central database. The full cycle runs every 4 hours. They have done this for 11 months. Total IP bans: zero.",
    ],
    cards: [
      { icon: "sync",         title: "Rotating IPs",      body: "Every request looks like a first-time visitor" },
      { icon: "shield",       title: "Zero detection",    body: "No price manipulation, clean data every time" },
      { icon: "storefront",   title: "12+ retailers",     body: "Compare across markets in a single pipeline" },
    ],
  },
  {
    id: "03",
    title: "Web Scraping",
    subtitle: "Data aggregation at scale",
    badge: "USE CASE 03",
    heading: "Collect public data at scale without blocks.",
    body: [
      "Most useful business data lives on websites. Property listings. Job postings. Earnings reports. Court filings. Product catalogs. Collecting it manually does not scale past a few dozen pages. Automated collection through proxies does. SimplyNode supports large-scale scraping with a big IP pool, fast proxy connections, and built-in rotation. Your devs focus on extraction logic. SimplyNode handles the rest.",
      "Example: A real estate analytics firm scrapes Zillow, Realtor.com, and Redfin across 200 U.S. metro areas. Scrapers run every 6 hours, retrieve price, location, square footage, and listing date, and store them in PostgreSQL. The system processes 500,000+ requests per day. Success rate sits above 98%. Before SimplyNode, the same team burned through three other providers in a year because block rates kept climbing.",
    ],
    cards: [
      { icon: "speed",          title: "500K+ req/day",      body: "High-throughput infrastructure that scales" },
      { icon: "task_alt",       title: "98%+ success rate",  body: "Reliable delivery on the toughest targets" },
      { icon: "bolt",           title: "Fast connections",   body: "Low-latency residential and mobile IPs" },
    ],
  },
  {
    id: "04",
    title: "Brand Protection",
    subtitle: "Ad verification",
    badge: "USE CASE 04",
    heading: "See your brand as users see it, everywhere.",
    body: [
      "A brand manager in Chicago cannot see what their display ad looks like on a news site in Jakarta. Not without proxies. And if an affiliate changes your creative or a sketchy ad network drops your brand next to counterfeit products, you will not know until a customer screenshots it and complains on social media.",
      "Example: A luxury fashion brand runs display ads in 40 countries. Their team uses SimplyNode mobile proxies to spot-check placements from each market. In the second week, they found an affiliate in Brazil running modified creative without approval. The same month, they caught a Southeast Asian ad network placing brand ads next to counterfeit listings. Both get shut down within hours.",
    ],
    cards: [
      { icon: "public",         title: "40+ countries",          body: "Eyes in every market your brand runs in" },
      { icon: "verified",       title: "Creative verification",  body: "Confirm ads look right in every placement" },
      { icon: "security",       title: "Ad network monitoring",  body: "Spot unauthorized usage before damage is done" },
    ],
  },
  {
    id: "05",
    title: "Marketing Automation",
    subtitle: "Multi-account & campaign testing",
    badge: "USE CASE 05",
    heading: "Run campaigns that look like real users.",
    body: [
      "Managing multiple social accounts or running A/B tests across geographies requires IPs that platforms trust. Data center IPs get flagged immediately. Residential and mobile IPs from SimplyNode mimic genuine user traffic — making every account look like an independent person browsing from a real device.",
      "Example: A digital marketing agency runs campaign tests for clients across Instagram, TikTok, and Google Ads. Using SimplyNode mobile proxies with 4G/LTE carrier IPs, each test account connects from a unique carrier IP matching the target audience's region. Account suspension rate dropped from 30% to under 2% after switching from datacenter proxies.",
    ],
    cards: [
      { icon: "people",         title: "Multi-account",     body: "Each account gets a unique residential IP" },
      { icon: "phone_android",  title: "Mobile IPs",        body: "4G/LTE carrier IPs trusted by all platforms" },
      { icon: "science",        title: "Campaign testing",  body: "A/B test across geo markets simultaneously" },
    ],
  },
  {
    id: "06",
    title: "Market Research",
    subtitle: "Competitive intelligence",
    badge: "USE CASE 06",
    heading: "Turn public data into strategic advantage.",
    body: [
      "Competitor pricing. Feature launches. Job postings that reveal strategic direction. Patent filings. Customer reviews. All of it is available on public websites, and it matters for business decisions. Checking manually takes hours and misses items. Automated collection through proxies catches everything.",
      "Example: A SaaS company monitors feature releases from 8 competitors. Their research team scrapes product pages, changelogs, and support docs weekly through SimplyNode's fast proxy server. They compile an automated pipeline replacing 20 hours of manual analyst work per week. Paid for itself in the first month.",
    ],
    cards: [
      { icon: "query_stats",  title: "Competitor tracking",     body: "Monitor 8+ competitors on a weekly cadence" },
      { icon: "account_tree", title: "Automated pipelines",     body: "Set up once, collect continuously" },
      { icon: "savings",      title: "20 hrs/week saved",       body: "Replace manual research with proxy automation" },
    ],
  },
];

const iconStyle: React.CSSProperties = {
  fontSize: 18,
  fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
};

export function UseCasesTabs() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-0 min-h-[520px]">
      {/* ── Left sidebar ── */}
      <div className="border-r border-white/[0.08] flex flex-col">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setActive(i)}
            className={`relative flex items-center gap-4 px-6 py-5 text-left transition-colors duration-150 border-b border-white/[0.06] group
              ${active === i ? "bg-white/[0.03]" : "hover:bg-white/[0.02]"}`}
          >
            {/* active indicator */}
            {active === i && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#663af3] rounded-r-full"
              />
            )}

            {/* number badge */}
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 transition-colors duration-150
                ${active === i ? "bg-[#663af3] text-white" : "bg-white/[0.06] text-[#81899b]"}`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {t.id}
            </div>

            <div className="flex-1 min-w-0">
              <div className={`text-[13px] font-semibold truncate transition-colors duration-150 ${active === i ? "text-white" : "text-[#d1e4fa]/60 group-hover:text-[#d1e4fa]/80"}`}>
                {t.title}
              </div>
              <div className="text-[11px] text-[#81899b] mt-0.5">{t.subtitle}</div>
            </div>

            <span className={`text-[#663af3] text-sm transition-opacity duration-150 ${active === i ? "opacity-100" : "opacity-0 group-hover:opacity-40"}`}>→</span>
          </button>
        ))}
      </div>

      {/* ── Right content ── */}
      <div className="px-10 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {/* badge */}
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#663af3]/20 border border-[#663af3]/30 text-[#b6d9fc] text-[11px] font-semibold tracking-widest uppercase mb-5">
              {tab.badge}
            </span>

            {/* heading */}
            <h3
              className="text-white text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-[1.15] mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {tab.heading}
            </h3>

            {/* body */}
            <div className="flex flex-col gap-3 mb-8">
              {tab.body.map((p, i) => (
                <p key={i} className="text-[#d8ecf8]/55 text-sm leading-relaxed">{p}</p>
              ))}
            </div>

            {/* mini cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {tab.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4"
                  style={{ boxShadow: "inset rgba(199,211,234,0.08) 0px 1px 1px 0px" }}
                >
                  <span className="material-symbols-rounded text-[#663af3] mb-2 block" style={iconStyle}>
                    {card.icon}
                  </span>
                  <div className="text-white text-[13px] font-semibold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {card.title}
                  </div>
                  <div className="text-[#d8ecf8]/45 text-xs leading-relaxed">{card.body}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
