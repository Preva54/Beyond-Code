"use client"

import { motion } from "framer-motion"

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "The best developer I've ever worked with. Delivered beyond expectations.",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "CTO, DigitalFlow",
    content: "Incredible attention to detail and a deep understanding of modern web tech.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Product Manager, WebCraft",
    content: "Transformed our platform with smooth animations and a beautiful UI.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative min-h-screen flex items-center py-32 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What Clients <span style={{ color: "var(--primary)" }}>Say</span>
        </motion.h2>

        <motion.p
          className="text-foreground/60 text-center mb-16 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Feedback from people I&apos;ve worked with.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              className="p-6 rounded-2xl"
              style={{
                background: "var(--glass)",
                border: "1px solid var(--glass-border)",
                backdropFilter: "blur(12px)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} style={{ color: "var(--primary)" }}>★</span>
                ))}
              </div>
              <p className="text-sm text-foreground/70 mb-6 leading-relaxed">
                &ldquo;{t.content}&rdquo;
              </p>
              <div>
                <p className="text-sm font-bold">{t.name}</p>
                <p className="text-xs text-foreground/40">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
