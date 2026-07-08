"use client"

import { motion } from "framer-motion"

const EXPERIENCES = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Corp",
    period: "2023 - Present",
    desc: "Leading development of scalable microservices architecture.",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Agency",
    period: "2021 - 2023",
    desc: "Built 20+ client projects using React, Node.js, and cloud services.",
  },
  {
    role: "Junior Developer",
    company: "StartupXYZ",
    period: "2020 - 2021",
    desc: "Developed and maintained multiple React-based web applications.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative min-h-screen flex items-center py-32 px-4">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My <span style={{ color: "var(--primary)" }}>Experience</span>
        </motion.h2>

        <div className="relative">
          <div
            className="absolute left-8 top-0 bottom-0 w-px"
            style={{ backgroundColor: "var(--glass-border)" }}
          />

          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.period}
              className="relative pl-20 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div
                className="absolute left-6 w-4 h-4 rounded-full border-2 top-1"
                style={{
                  borderColor: "var(--primary)",
                  backgroundColor: "var(--background)",
                }}
              />
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: "var(--glass)",
                  border: "1px solid var(--glass-border)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <span className="text-xs font-mono" style={{ color: "var(--primary)" }}>
                  {exp.period}
                </span>
                <h3 className="text-lg font-bold mt-1">{exp.role}</h3>
                <p className="text-sm text-foreground/60 mb-2">{exp.company}</p>
                <p className="text-sm text-foreground/70">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
