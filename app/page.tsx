import { HeroShapes, HeroContent } from "@/components/ui/shape-landing-hero";
import { MarqueeStrip } from "@/components/ui/marquee-strip";
import { WorldMap } from "@/components/ui/world-map";
import { UseCasesTabs } from "@/components/ui/use-cases-tabs";
import { PricingCalculator } from "@/components/ui/pricing-calculator";
import { GlowingShadow } from "@/components/ui/glowing-shadow";

// ── helpers ──────────────────────────────────────────────────────────────────
const glass =
  "relative border border-white/[0.1] rounded-2xl bg-white/[0.04] backdrop-blur-[22px]" +
  " [box-shadow:inset_rgba(199,211,234,0.12)_0px_1px_1px_0px,inset_rgba(199,211,234,0.05)_0px_24px_48px_0px,rgba(6,6,14,0.7)_0px_24px_32px_0px]";

const eyebrow =
  "inline-block mb-4 text-[11px] uppercase tracking-[0.08em] text-[#d1e4fa]/60";

const sectionHeading =
  "text-[clamp(1.8rem,3vw,2.8rem)] font-bold leading-[1.12] text-white mt-3 mb-4" +
  " [font-family:'Space_Grotesk',sans-serif]";

// ── shared icon style ─────────────────────────────────────────────────────────
const iconStyle: React.CSSProperties = {
  fontSize: 22,
  fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
};

// ── page ──────────────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <div className="min-h-screen">
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 backdrop-blur-[18px] bg-[#05060f]/88 border-b border-white/[0.08]">
        <div className="max-w-[1160px] mx-auto px-5 flex items-center justify-between gap-6 min-h-[72px]">
          <a
            href="#"
            className="text-white font-bold text-[15px] tracking-[-0.02em] no-underline"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            SimplyNode
          </a>
          <nav className="hidden md:flex gap-6 text-sm text-[#d1e4fa]/70">
            {[
              ["What's Included", "#features"],
              ["Performance", "#performance"],
              ["Use Cases", "#use-cases"],
              ["Pricing", "#pricing"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="hover:text-white transition-colors duration-150">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            <a
              href="https://app.simplynode.io/sign-up"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full bg-white/[0.06] border border-white/[0.12] text-[#d1e4fa] text-sm font-semibold hover:bg-white/[0.1] transition-colors duration-150"
            >
              Sign Up
            </a>
            <a
              href="https://app.simplynode.io/sign-in"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full bg-[#663af3] text-white text-sm font-semibold hover:bg-[#7249ff] shadow-[0_8px_24px_rgba(102,58,243,0.3)] transition-colors duration-150"
            >
              Log In
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ── Hero ───────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-10 pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#663af3]/[0.06] via-transparent to-[#b6d9fc]/[0.04] blur-3xl" />
          <HeroShapes />
          <HeroContent />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05060f] via-transparent to-[#05060f]/70 pointer-events-none" />
        </section>

        {/* ── Marquee Strip ──────────────────────────────────────────────────── */}
        <MarqueeStrip />

        {/* ── Features ───────────────────────────────────────────────────────── */}
        <section id="features" className="py-20">
          <div className="max-w-[1160px] mx-auto px-5">
            <div className="text-center max-w-[680px] mx-auto mb-14">
              <span className={eyebrow}>What is SimplyNode?</span>
              <h2 className={sectionHeading}>Built for teams that need reliable proxy access, without the complexity.</h2>
              <p className="text-[#d8ecf8]/60 text-base leading-relaxed">
                Residential and mobile proxies delivered through real IP networks, with city-level targeting, sticky sessions, and full HTTPS/SOCKS5 support.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "vpn_lock",        title: "HTTPS & SOCKS5 support",          body: "Secure connections and broad compatibility for every automation stack." },
                { icon: "stacked_line_chart", title: "Thousands of concurrent sessions", body: "Scale from a few checks to high-volume data collection without caps." },
                { icon: "language",        title: "8M+ ethically-sourced IPs",       body: "Real residential and carrier IPs from trusted partners worldwide." },
                { icon: "task_alt",        title: "99.3% success rate",              body: "High reliability for scraping, verification, testing, and research workflows." },
                { icon: "sync",            title: "Rotating & sticky sessions",      body: "Choose the proxy behavior that fits your use case and maintain consistency." },
                { icon: "travel_explore",  title: "Country & city targeting",        body: "Focus on local markets and regional content with exact location selection." },
              ].map((f) => (
                <div key={f.title} className={`${glass} p-8 group hover:-translate-y-1 hover:border-white/[0.2] transition-[transform,border-color] duration-300`}>
                  <div className="w-11 h-11 rounded-xl bg-[#663af3]/15 flex items-center justify-center mb-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.07)]">
                    <span className="material-symbols-rounded text-white" style={iconStyle}>{f.icon}</span>
                  </div>
                  <h3 className="text-white font-semibold text-[15px] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{f.title}</h3>
                  <p className="text-[#d8ecf8]/55 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Performance ────────────────────────────────────────────────────── */}
        <section id="performance" className="py-20 bg-white/[0.015]">
          <div className="max-w-[1160px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div className="max-w-[480px]">
              <span className={eyebrow}>High-performance proxies</span>
              <h2 className={sectionHeading}>Residential and mobile proxy power, made simple.</h2>
              <p className="text-[#d8ecf8]/60 text-base leading-relaxed">
                Use the right proxy type for the job: residential IPs for broad market access, mobile IPs for the highest platform trust and the toughest anti-bot defenses.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              {[
                {
                  title: "Residential proxies",
                  desc: "Real home IPs that look like normal users to websites, ideal for price checks, SERP tracking, and large-scale scraping.",
                  items: ["Country + city targeting", "Best for ecommerce monitoring", "Fast, stable, and hard to block"],
                },
                {
                  title: "Mobile proxies",
                  desc: "Carrier IPs from 4G/5G networks that mimic smartphone traffic, perfect for social media automation, app testing, and ad verification.",
                  items: ["5G/4G/LTE support", "High trust from platforms", "Sticky sessions available"],
                },
              ].map((card) => (
                <div key={card.title} className={`${glass} p-8`}>
                  <span className="block text-white font-bold text-[15px] mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{card.title}</span>
                  <p className="text-[#d8ecf8]/55 text-sm leading-relaxed mb-4">{card.desc}</p>
                  <ul className="flex flex-col gap-2.5">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-[#d1e4fa]/70 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#663af3] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Coverage ───────────────────────────────────────────────────────── */}
        <section className="py-20">
          <div className="max-w-[1160px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
            <div className={`${glass} p-10`}>
              <span className={eyebrow}>Access global data</span>
              <h2 className={sectionHeading}>Wide coverage across 185+ countries.</h2>
              <p className="text-[#d8ecf8]/60 text-base leading-relaxed mb-6">
                Target the markets that matter. Find the same results users see from Berlin, Tokyo, São Paulo, or New York with city-level precision and redundant routing.
              </p>
              <ul className="flex flex-col gap-3">
                {["Unlimited concurrent connections", "Real-time location selection", "Automatic reroute on node issues"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[#d1e4fa]/70 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#663af3] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${glass} p-8 flex flex-col gap-6`}>
              <WorldMap
                lineColor="#663af3"
                dots={[
                  { start: { lat: 37.09,  lng: -95.71, label: "United States"  }, end: { lat: 55.38,  lng:  -3.44, label: "United Kingdom" } },
                  { start: { lat: 55.38,  lng:  -3.44, label: "United Kingdom" }, end: { lat: 36.20,  lng: 138.25, label: "Japan"          } },
                  { start: { lat: -14.24, lng: -51.93, label: "Brazil"         }, end: { lat: 55.38,  lng:  -3.44, label: "United Kingdom" } },
                  { start: { lat: 37.09,  lng: -95.71, label: "United States"  }, end: { lat: -25.27, lng: 133.78, label: "Australia"      } },
                  { start: { lat:   4.21, lng: 108.00, label: "Malaysia"       }, end: { lat: 36.20,  lng: 138.25, label: "Japan"          } },
                  { start: { lat: 37.09,  lng: -95.71, label: "United States"  }, end: { lat:  -14.24,lng: -51.93, label: "Brazil"         } },
                ]}
              />
              <div className="flex flex-col gap-2.5">
                {[
                  ["United States", "7.1M+ IPs"],
                  ["United Kingdom", "1.7M+ IPs"],
                  ["Brazil", "1M+ IPs"],
                  ["Japan", "165K+ IPs"],
                  ["Australia", "120K+ IPs"],
                  ["Malaysia", "500K+ IPs"],
                ].map(([country, count]) => (
                  <div key={country} className="flex justify-between text-sm">
                    <span className="text-white font-medium">{country}</span>
                    <span className="text-[#d1e4fa]/55">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Use Cases ──────────────────────────────────────────────────────── */}
        <section id="use-cases" className="py-20 bg-white/[0.015]">
          <div className="max-w-[1160px] mx-auto px-5">
            <div className="text-center max-w-[620px] mx-auto mb-14">
              <span className={eyebrow}>How businesses leverage proxies</span>
              <h2 className={sectionHeading}>Proxies that power real operations, not just experiments.</h2>
            </div>
            <div className="border border-white/[0.08] rounded-2xl overflow-hidden" style={{ boxShadow: "inset rgba(199,211,234,0.08) 0px 1px 1px 0px, rgba(6,6,14,0.5) 0px 24px 32px 0px" }}>
              <UseCasesTabs />
            </div>
          </div>
        </section>

        {/* ── Pricing Calculator ─────────────────────────────────────────────── */}
        <section id="pricing" className="py-20">
          <div className="max-w-[1160px] mx-auto px-5">
            <div className="text-center max-w-[620px] mx-auto mb-14">
              <span className={eyebrow}>Simple, transparent pricing</span>
              <h2 className={sectionHeading}>Get Started in Just a Few Clicks.</h2>
              <p className="text-[#d8ecf8]/60 text-base leading-relaxed">
                No fancy design, no bells and whistles — just a proper product that does its work.
              </p>
            </div>
            <div className={`${glass} p-8 md:p-12`}>
              <PricingCalculator />
            </div>
          </div>
        </section>

        {/* ── Trusted Partner ────────────────────────────────────────────────── */}
        <section className="py-20 bg-white/[0.015]">
          <div className="max-w-[1160px] mx-auto px-5">
            <div className="text-center max-w-[620px] mx-auto mb-14">
              <span className={eyebrow}>Trusted partner</span>
              <h2 className={sectionHeading}>Infrastructure, support, and pricing built for business workflows.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: "hub",            title: "Infrastructure", body: "We control routing, IP sourcing, and proxy delivery directly so performance stays stable and transparent." },
                { icon: "support_agent",  title: "Support",        body: "24/7 technical support, fast setup, and guidance for integrations, so issues do not slow your operations." },
                { icon: "receipt_long",   title: "Pricing",        body: "Upfront bandwidth pricing, no hidden fees, no connection caps, and the same full feature set at every tier." },
              ].map((p) => (
                <div key={p.title} className={`${glass} p-8`}>
                  <div className="w-11 h-11 rounded-xl bg-[#663af3]/15 flex items-center justify-center mb-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.07)]">
                    <span
                      className="material-symbols-rounded text-white"
                      style={iconStyle}
                    >
                      {p.icon}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-[15px] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.title}</h3>
                  <p className="text-[#d8ecf8]/55 text-sm leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Ethics ─────────────────────────────────────────────────────────── */}
        <section className="py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <div className="text-center mb-8">
              <span className={eyebrow}>Ethically sourced IPs</span>
              <h2 className={sectionHeading}>Real IPs from legitimate partners. No shady traffic, no hidden compromises.</h2>
            </div>
            <div className={`${glass} p-10`}>
              <p className="text-[#d8ecf8]/60 text-base leading-relaxed mb-6">
                Every proxy address is sourced through consent-based partnerships, trusted carriers, and verified ISPs. That means cleaner traffic, lower block rates, and a network that supports regulated industries.
              </p>
              <ul className="flex flex-col gap-3">
                {["Clean reputation IPs for better success", "No botnet or hijacked traffic sources", "Compliance-ready sourcing documentation available"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[#d1e4fa]/70 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#663af3] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────────────── */}
        <section className="py-20">
          <div className="max-w-[1160px] mx-auto px-5">
            <GlowingShadow>
              <div className="p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <span className={eyebrow}>Ready to move faster?</span>
                  <h2 className="text-white font-bold text-[clamp(1.6rem,2.5vw,2.4rem)] leading-tight mt-2 max-w-[600px]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Get the proxy access your team needs without the friction.
                  </h2>
                </div>
                <div className="flex flex-wrap gap-4 shrink-0">
                  <a
                    href="https://app.simplynode.io/sign-up"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3.5 rounded-full bg-[#663af3] text-white font-semibold text-sm shadow-[0_10px_30px_rgba(102,58,243,0.35)] hover:bg-[#7249ff] transition-colors duration-200"
                  >
                    Get Started
                  </a>
                  <a
                    href="#faq"
                    className="px-6 py-3.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-[#d1e4fa] font-semibold text-sm hover:bg-white/[0.1] transition-colors duration-200"
                  >
                    See FAQ
                  </a>
                </div>
              </div>
            </GlowingShadow>
          </div>
        </section>

        {/* ── Testimonials ───────────────────────────────────────────────────── */}
        <section className="py-20 bg-white/[0.015]">
          <div className="max-w-[1160px] mx-auto px-5">
            <div className="text-center max-w-[560px] mx-auto mb-14">
              <span className={eyebrow}>Our customers love us</span>
              <h2 className={sectionHeading}>Trusted by teams that need proxies that just work.</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { quote: "I looked for weeks and tested many providers. SimplyNode is the best provider on the market — outstanding support and reliable performance.", name: "Alex P.", location: "France" },
                { quote: "Uptime is very high, proxies are fast and easy to use. The support response is very fast. I can truly recommend SimplyNode.", name: "Bartosz", location: "Poland" },
                { quote: "The functionality is top-notch, and the support team goes above and beyond to solve any issue. Highly recommended.", name: "Justin B.", location: "Germany" },
                { quote: "No issues with connection or speed, and support is always available. I'm planning to work with them for a long time.", name: "Martin", location: "Latvia" },
              ].map((t) => (
                <div key={t.name} className={`${glass} p-7 flex flex-col justify-between min-h-[200px]`}>
                  <p className="text-[#d8ecf8]/65 text-sm leading-relaxed">"{t.quote}"</p>
                  <div className="mt-5 pt-5 border-t border-white/[0.08]">
                    <span className="block text-white font-semibold text-[13px]">{t.name}</span>
                    <span className="text-[#d1e4fa]/45 text-xs">{t.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────────────────────── */}
        <section id="faq" className="py-20">
          <div className="max-w-[1160px] mx-auto px-5">
            <div className="text-center max-w-[600px] mx-auto mb-14">
              <span className={eyebrow}>Frequently asked questions</span>
              <h2 className={sectionHeading}>Everything you need to know before your first proxy purchase.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { q: "Do you have any blocked sites?", a: "Some websites are blocked to prevent illegal or fraudulent activity. Financial services, government domains, and specific news platforms may be restricted to protect the IP pool." },
                { q: "Can I pay with Crypto?", a: "Yes, crypto payments are available. Users must pass KYC identity verification to use cryptocurrency as a payment method." },
                { q: "What payment methods are available?", a: "We support cards, PayPal, Apple Pay, crypto payments, and bank transfers on request. If you need another option, contact support@simplynode.io." },
                { q: "Can I test your proxies?", a: "There is no free trial, but you can purchase the smallest 1 GB package with no expiration and test the service on your use case." },
                { q: "What is your refund policy?", a: "Refunds may be available if you purchased via self-service, did not pay with crypto, requested within 14 days, and used less than 20% of traffic or 1 GB." },
                { q: "How does proxy authentication work?", a: "Access is available via username:password or IP whitelist, depending on your preferred setup." },
                { q: "Do you support SOCKS protocols?", a: "Yes, both residential and mobile proxies support SOCKS5 and HTTP(S) protocols." },
                { q: "Will I get a dedicated IP list?", a: "Currently we offer rotating residential and mobile proxies only; dedicated IP lists are not available." },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group border border-white/[0.1] rounded-2xl bg-white/[0.03] px-6 py-5 cursor-pointer"
                >
                  <summary className="flex items-center justify-between gap-4 text-white font-semibold text-[14px] list-none select-none">
                    {item.q}
                    <span className="text-[#d1e4fa]/50 text-lg leading-none shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-[#d8ecf8]/55 text-sm leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.08] py-14">
        <div className="max-w-[1160px] mx-auto px-5 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10">
          <div>
            <a
              href="#"
              className="block text-white font-bold text-[15px] tracking-[-0.02em] mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              SimplyNode
            </a>
            <p className="text-[#d1e4fa]/45 text-sm leading-relaxed max-w-[320px]">
              Proxy services for teams that need honest performance and global access.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <strong className="block text-white text-[13px] font-semibold mb-4">Product</strong>
              {[["Features", "#features"], ["Performance", "#performance"], ["Use Cases", "#use-cases"]].map(([label, href]) => (
                <a key={href} href={href} className="block text-[#d1e4fa]/50 text-sm mb-2.5 hover:text-white transition-colors duration-150">
                  {label}
                </a>
              ))}
            </div>
            <div>
              <strong className="block text-white text-[13px] font-semibold mb-4">Company</strong>
              {[
                ["About", "https://www.simplynode.io/about"],
                ["Contact", "https://www.simplynode.io/contact"],
                ["Privacy", "https://www.simplynode.io/privacy-policy"],
              ].map(([label, href]) => (
                <a key={href} href={href} className="block text-[#d1e4fa]/50 text-sm mb-2.5 hover:text-white transition-colors duration-150">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
