"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const TITLE = "I Don't Just Build Websites. I Build Digital Experiences."
const SUBTITLE =
  "Full-stack developer crafting immersive 3D web experiences with modern technology."

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < TITLE.length) {
        setDisplayedText(TITLE.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 30)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.p
            className="text-sm font-mono tracking-[0.3em] mb-6"
            style={{ color: "var(--primary)" }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            WELCOME TO THE FUTURE OF WEB
          </motion.p>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {displayedText}
          <span
            className="font-light ml-0.5"
            style={{ color: "var(--primary)" }}
          >
            {showCursor ? "|" : " "}
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {SUBTITLE}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#about"
            className="group relative px-8 py-3 rounded-full font-medium text-sm tracking-wider uppercase overflow-hidden transition-all duration-300"
            style={{
              color: "var(--background)",
              backgroundColor: "var(--primary)",
            }}
          >
            <span className="relative z-10">Explore My World</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `linear-gradient(90deg, var(--primary), var(--secondary), var(--primary))`,
                backgroundSize: "200% 100%",
              }}
            />
          </a>

          <a
            href="#projects"
            className="px-8 py-3 rounded-full font-medium text-sm tracking-wider uppercase border transition-all duration-300 hover:bg-white/5"
            style={{ borderColor: "var(--glass-border)" }}
          >
            View My Work
          </a>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div
            className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-1.5"
            style={{ borderColor: "var(--primary)" }}
          >
            <div
              className="w-1.5 h-3 rounded-full"
              style={{ backgroundColor: "var(--primary)" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
