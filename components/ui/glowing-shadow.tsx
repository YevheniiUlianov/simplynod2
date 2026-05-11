"use client"

import { type ReactNode } from "react"

interface GlowingShadowProps {
  children: ReactNode
  className?: string
}

export function GlowingShadow({ children, className = "" }: GlowingShadowProps) {
  return (
    <div className={`sngl-glow-container ${className}`}>
      <div className="sngl-glow-content">{children}</div>
    </div>
  )
}
