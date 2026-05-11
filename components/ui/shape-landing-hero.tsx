"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.06]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border border-white/[0.08]",
            "shadow-[0_8px_32px_0_rgba(102,58,243,0.08)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(102,58,243,0.12),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export function HeroShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <ElegantShape
        delay={0.3}
        width={560}
        height={130}
        rotate={12}
        gradient="from-[#663af3]/[0.18]"
        className="left-[-8%] top-[18%]"
      />
      <ElegantShape
        delay={0.5}
        width={420}
        height={110}
        rotate={-15}
        gradient="from-[#b6d9fc]/[0.12]"
        className="right-[-4%] top-[65%]"
      />
      <ElegantShape
        delay={0.4}
        width={280}
        height={70}
        rotate={-8}
        gradient="from-[#663af3]/[0.1]"
        className="left-[8%] bottom-[12%]"
      />
      <ElegantShape
        delay={0.6}
        width={180}
        height={55}
        rotate={20}
        gradient="from-[#d1e4fa]/[0.08]"
        className="right-[18%] top-[12%]"
      />
      <ElegantShape
        delay={0.7}
        width={140}
        height={38}
        rotate={-25}
        gradient="from-[#663af3]/[0.12]"
        className="left-[22%] top-[8%]"
      />
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.4 + i * 0.18, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export function HeroContent() {
  return (
    <motion.div
      className="relative z-10 max-w-[780px] mx-auto text-center px-5"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        custom={0}
        variants={fadeUp}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-8"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#663af3]" />
        <span className="text-xs text-[#d1e4fa]/70 tracking-widest uppercase">
          Proxy service for modern data teams
        </span>
      </motion.div>

      <motion.h1
        custom={1}
        variants={fadeUp}
        className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-bold leading-[1.05] tracking-tight mb-6"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        <span className="text-white">Simple proxy access</span>
        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b6d9fc] via-white/90 to-[#663af3]/80">
          for every business need.
        </span>
      </motion.h1>

      <motion.p
        custom={2}
        variants={fadeUp}
        className="text-[#d8ecf8]/60 text-base md:text-lg leading-relaxed mb-10 max-w-[520px] mx-auto"
      >
        No flashy marketing. No hidden tricks. Just fast residential and mobile proxies with real IPs, honest pricing, and a dashboard built for teams.
      </motion.p>

      <motion.div
        custom={3}
        variants={fadeUp}
        className="flex flex-wrap gap-4 justify-center mb-14"
      >
        <a
          href="https://app.simplynode.io/sign-up"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3.5 rounded-full bg-[#663af3] text-white font-semibold text-sm shadow-[0_10px_30px_rgba(102,58,243,0.35)] hover:bg-[#7249ff] hover:shadow-[0_14px_40px_rgba(102,58,243,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#663af3] active:scale-[0.98] transition-[background,box-shadow,transform] duration-200"
        >
          Get Started
        </a>
        <a
          href="#features"
          className="px-6 py-3.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-[#d1e4fa] font-semibold text-sm hover:bg-white/[0.1] hover:border-white/[0.2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 active:scale-[0.98] transition-[background,border-color,transform] duration-200"
        >
          Check Price
        </a>
      </motion.div>

      <motion.div
        custom={4}
        variants={fadeUp}
        className="grid grid-cols-2 gap-4 max-w-sm mx-auto"
      >
        {[
          { value: "8M+", label: "ethically-sourced IPs" },
          { value: "99.3%", label: "success rate" },
        ].map((stat) => (
          <div
            key={stat.value}
            className="p-5 rounded-2xl border border-white/[0.1] bg-white/[0.04]"
            style={{ boxShadow: "inset rgba(199,211,234,0.12) 0px 1px 1px 0px, inset rgba(199,211,234,0.05) 0px 24px 48px 0px" }}
          >
            <span className="block text-2xl font-bold text-white mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {stat.value}
            </span>
            <span className="text-xs text-[#d1e4fa]/60">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
