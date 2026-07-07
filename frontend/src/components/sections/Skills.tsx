"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Skill {
  name: string
  level: number
  color: string
  experience?: string
  projects?: string
}

const SKILLS: Skill[] = [
  { name: "React", level: 95, color: "#61dafb", experience: "5 years", projects: "15+" },
  { name: "Node.js", level: 90, color: "#339933", experience: "5 years", projects: "12+" },
  { name: "TypeScript", level: 88, color: "#3178c6", experience: "4 years", projects: "10+" },
  { name: "Next.js", level: 85, color: "#ffffff", experience: "3 years", projects: "8+" },
  { name: "MongoDB", level: 82, color: "#47a248", experience: "4 years", projects: "10+" },
  { name: "Laravel", level: 78, color: "#ff2d20", experience: "4 years", projects: "9+" },
]

export default function Skills() {
  const [selected, setSelected] = useState<Skill | null>(null)

  return (
    <section id="skills" className="relative min-h-screen flex items-center py-32 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My <span style={{ color: "var(--primary)" }}>Skills</span>
        </motion.h2>

        <motion.p
          className="text-foreground/60 text-center mb-16 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Click a skill orb to see details.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-8">
          {SKILLS.map((skill) => (
            <motion.button
              key={skill.name}
              onClick={() => setSelected(selected?.name === skill.name ? null : skill)}
              className="relative w-32 h-32 rounded-full flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: `radial-gradient(circle at 30% 30%, ${skill.color}33, transparent)`,
                border: `2px solid ${skill.color}44`,
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ boxShadow: selected?.name === skill.name
                  ? `0 0 30px ${skill.color}, 0 0 60px ${skill.color}44`
                  : `0 0 15px ${skill.color}44` }}
              />
              <span
                className="text-sm font-bold z-10"
                style={{ color: skill.color }}
              >
                {skill.name}
              </span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              key={selected.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="mt-12 max-w-md mx-auto p-8 rounded-2xl"
              style={{
                background: "var(--glass)",
                border: `1px solid ${selected.color}44`,
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: `${selected.color}22`, color: selected.color }}
                >
                  {selected.level}%
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: selected.color }}>
                    {selected.name}
                  </h3>
                  <p className="text-sm text-foreground/60">Proficiency</p>
                </div>
              </div>

              <div className="w-full h-2 rounded-full bg-white/5 mb-6 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: selected.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${selected.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-foreground/40">Experience</p>
                  <p className="font-medium">{selected.experience}</p>
                </div>
                <div>
                  <p className="text-foreground/40">Projects</p>
                  <p className="font-medium">{selected.projects}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
