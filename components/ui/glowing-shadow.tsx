"use client"

import { type ReactNode } from "react"

interface GlowingShadowProps {
  children: ReactNode
  className?: string
}

export function GlowingShadow({ children, className = "" }: GlowingShadowProps) {
  return (
    <>
      <style>{`
        @property --hue {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --rotate {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }

        .sngl-glow-container {
          display: block;
          width: 100%;
          padding: 2px;
          border-radius: 1.1rem;
          background: linear-gradient(
            calc(var(--rotate) * 1deg),
            hsl(calc(var(--hue) * 1deg) 100% 65%),
            transparent 35%,
            transparent 65%,
            hsl(calc((var(--hue) + 80) * 1deg) 100% 60%)
          );
          animation: sngl-rotate-border 4s linear infinite,
                     sngl-hue-animation 4s linear infinite;
        }

        .sngl-glow-content {
          background: #0b0c16;
          border-radius: 1rem;
          width: 100%;
          box-sizing: border-box;
          position: relative;
        }

        @keyframes sngl-rotate-border {
          from { --rotate: 0;   }
          to   { --rotate: 360; }
        }

        @keyframes sngl-hue-animation {
          from { --hue: 0;   }
          to   { --hue: 360; }
        }
      `}</style>

      <div className={`sngl-glow-container ${className}`}>
        <div className="sngl-glow-content">{children}</div>
      </div>
    </>
  )
}
