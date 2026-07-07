"use client"

import { motion } from "framer-motion"

const STEPS = [
  { number: "01", title: "Discovery", desc: "Understanding your vision, goals, and target audience." },
  { number: "02", title: "Design", desc: "Creating wireframes, mockups, and interactive prototypes." },
  { number: "03", title: "Develop", desc: "Building with clean code, modern frameworks, and best practices." },
  { number: "04", title: "Deploy", desc: "Launching with CI/CD, monitoring, and performance optimization." },
]

export default function Process() {
  return (
    <section id="process" className="relative min-h-screen flex items-center py-32 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My <span style={{ color: "var(--primary)" }}>Process</span>
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative p-6 rounded-2xl"
              style={{
                background: "var(--glass)",
                border: "1px solid var(--glass-border)",
                backdropFilter: "blur(12px)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <span
                className="text-4xl font-bold"
                style={{ color: "var(--primary)", opacity: 0.3 }}
              >
                {step.number}
              </span>
              <h3 className="text-lg font-bold mt-4 mb-2">{step.title}</h3>
              <p className="text-sm text-foreground/60">{step.desc}</p>
              {i < STEPS.length - 1 && (
                <div
                  className="hidden md:block absolute top-1/2 -right-3 w-6 h-px"
                  style={{ backgroundColor: "var(--primary)", opacity: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
