"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const CODE_LINES = [
  { delay: 0, text: "> Initializing developer profile..." },
  { delay: 800, text: "> Loading skills: React, Next.js, Node.js..." },
  { delay: 1600, text: "> 15+ projects deployed successfully." },
  { delay: 2400, text: "> 5+ years of full-stack experience." },
  { delay: 3200, text: "> Ready to build your next project." },
  { delay: 4000, text: "> " },
]

export default function CodingTerminal() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const timers = CODE_LINES.map(
      (line) =>
        setTimeout(() => setVisibleLines((prev) => prev + 1), line.delay + 500) // extra initial delay
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div
      className="w-full rounded-2xl p-6 font-mono text-sm"
      style={{
        background: "#0a0a0f",
        border: "1px solid var(--glass-border)",
        boxShadow: "0 0 30px rgba(0, 240, 255, 0.05)",
      }}
    >
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      {CODE_LINES.slice(0, visibleLines).map((line, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: i % 2 === 0 ? "var(--primary)" : "var(--foreground)" }}
        >
          {line.text}
          {i === visibleLines - 1 && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.7, repeat: Infinity }}
              style={{ color: "var(--primary)" }}
            >
              _
            </motion.span>
          )}
        </motion.p>
      ))}
    </div>
  )
}
