"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: null,
    liveUrl: "#",
    githubUrl: "#",
    category: "fullstack",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time collaboration dashboard with interactive data visualizations and team management.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    image: null,
    liveUrl: "#",
    githubUrl: "#",
    category: "frontend",
  },
  {
    title: "AI Content Platform",
    description:
      "AI-powered content management system with automated workflows and smart suggestions.",
    tech: ["Laravel", "Vue.js", "MySQL", "OpenAI"],
    image: null,
    liveUrl: "#",
    githubUrl: "#",
    category: "fullstack",
  },
  {
    title: "3D Product Viewer",
    description:
      "Interactive 3D product viewer with augmented reality features for e-commerce.",
    tech: ["Three.js", "React", "TypeScript", "WebGL"],
    image: null,
    liveUrl: "#",
    githubUrl: "#",
    category: "frontend",
  },
  {
    title: "API Gateway Service",
    description:
      "Microservices API gateway with rate limiting, caching, and authentication.",
    tech: ["Node.js", "Redis", "Docker", "AWS"],
    image: null,
    liveUrl: "#",
    githubUrl: "#",
    category: "backend",
  },
  {
    title: "Mobile App Backend",
    description:
      "Scalable backend infrastructure for a social mobile application serving 100K+ users.",
    tech: ["Node.js", "MongoDB", "Redis", "AWS"],
    image: null,
    liveUrl: "#",
    githubUrl: "#",
    category: "backend",
  },
]

const FILTERS = ["all", "frontend", "fullstack", "backend"]

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null)
  const [filter, setFilter] = useState("all")

  const filtered =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter)

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center py-32 px-4"
    >
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
          className="text-foreground/60 text-center mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Click a project to explore.
        </motion.p>

        <div className="flex justify-center gap-3 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200"
              style={{
                backgroundColor:
                  filter === f ? "var(--primary)" : "var(--glass)",
                color:
                  filter === f
                    ? "var(--background)"
                    : "var(--foreground)",
                border:
                  filter === f
                    ? "1px solid var(--primary)"
                    : "1px solid var(--glass-border)",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filtered.map((project, i) => (
            <motion.button
              key={project.title}
              layout
              onClick={() =>
                setSelected(selected === i ? null : i)
              }
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
                {filtered[selected].title}
              </h3>
              <p className="text-foreground/70 mb-6">
                {filtered[selected].description}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {filtered[selected].tech.map((t) => (
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
                  href={filtered[selected].liveUrl}
                  className="px-6 py-2 rounded-full text-sm font-medium transition-all"
                  style={{
                    backgroundColor: "var(--primary)",
                    color: "var(--background)",
                  }}
                >
                  Live Demo
                </a>
                <a
                  href={filtered[selected].githubUrl}
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
