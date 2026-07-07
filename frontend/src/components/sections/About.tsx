"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ABOUT_ITEMS, type AboutItem } from "@/types"

function AboutCard({ item, onSelect }: { item: AboutItem; onSelect: (item: AboutItem) => void }) {
  return (
    <motion.button
      onClick={() => onSelect(item)}
      className="group relative flex flex-col items-center gap-4 p-8 rounded-2xl transition-all duration-300 cursor-pointer"
      style={{
        background: "var(--glass)",
        border: "1px solid var(--glass-border)",
        backdropFilter: "blur(12px)",
      }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-5xl">{item.icon}</span>
      <span className="text-sm font-medium text-foreground/80">{item.label}</span>
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(255, 0, 229, 0.05))",
        }}
      />
    </motion.button>
  )
}

export default function About() {
  const [selected, setSelected] = useState<AboutItem | null>(null)

  return (
    <section id="about" className="relative min-h-screen flex items-center py-32 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About <span style={{ color: "var(--primary)" }}>Me</span>
        </motion.h2>

        <motion.p
          className="text-foreground/60 text-center mb-16 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Click an object to learn more about what I do.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {ABOUT_ITEMS.map((item) => (
            <AboutCard key={item.id} item={item} onSelect={setSelected} />
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-12 max-w-xl mx-auto p-8 rounded-2xl text-center"
              style={{
                background: "var(--glass)",
                border: "1px solid var(--primary)",
                backdropFilter: "blur(12px)",
              }}
            >
              <span className="text-4xl mb-4 block">{selected.icon}</span>
              <h3 className="text-xl font-bold mb-3">{selected.label}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {selected.content}
              </p>
              <button
                onClick={() => setSelected(null)}
                className="mt-6 text-sm text-primary hover:underline"
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
