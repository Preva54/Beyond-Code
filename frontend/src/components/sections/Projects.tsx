"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const PROJECTS = [
  {
    title: "Project Alpha",
    description: "A full-stack e-commerce platform with real-time inventory management.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: null,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Beta",
    description: "Real-time collaboration dashboard with interactive data visualizations.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    image: null,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Gamma",
    description: "AI-powered content management system with automated workflows.",
    tech: ["Laravel", "Vue.js", "MySQL", "OpenAI"],
    image: null,
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="projects" className="relative min-h-screen flex items-center py-32 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My <span style={{ color: "var(--primary)" }}>Projects</span>
        </motion.h2>

        <motion.p
          className="text-foreground/60 text-center mb-16 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Click a project to explore.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PROJECTS.map((project, i) => (
            <motion.button
              key={project.title}
              onClick={() => setSelected(selected === i ? null : i)}
              className="group relative p-8 rounded-2xl text-left cursor-pointer transition-all duration-300"
              style={{
                background: "var(--glass)",
                border: "1px solid var(--glass-border)",
                backdropFilter: "blur(12px)",
              }}
              whileHover={{ scale: 1.03, y: -8 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className="w-full h-32 rounded-xl mb-6 flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary)22, var(--secondary)11)",
                }}
              >
                <span className="text-4xl opacity-30">⛰️</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: "var(--primary)11",
                      color: "var(--primary)",
                      border: "1px solid var(--primary)22",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-8 max-w-2xl mx-auto p-8 rounded-2xl"
              style={{
                background: "var(--glass)",
                border: "1px solid var(--primary)",
                backdropFilter: "blur(12px)",
              }}
            >
              <h3 className="text-2xl font-bold mb-3">
                {PROJECTS[selected].title}
              </h3>
              <p className="text-foreground/70 mb-6">
                {PROJECTS[selected].description}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {PROJECTS[selected].tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "var(--primary)11",
                      color: "var(--primary)",
                      border: "1px solid var(--primary)22",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={PROJECTS[selected].liveUrl}
                  className="px-6 py-2 rounded-full text-sm font-medium transition-all"
                  style={{
                    backgroundColor: "var(--primary)",
                    color: "var(--background)",
                  }}
                >
                  Live Demo
                </a>
                <a
                  href={PROJECTS[selected].githubUrl}
                  className="px-6 py-2 rounded-full text-sm font-medium border transition-all hover:bg-white/5"
                  style={{ borderColor: "var(--glass-border)" }}
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
