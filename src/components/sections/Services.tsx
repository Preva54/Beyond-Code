"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const SERVICES = [
  {
    title: "Business Websites",
    description: "Professional, high-performance websites that drive growth and engagement.",
    features: ["Responsive design", "SEO optimized", "CMS integration", "Analytics"],
    icon: "🏢",
  },
  {
    title: "E-commerce",
    description: "Scalable online stores with seamless checkout experiences.",
    features: ["Payment integration", "Inventory management", "Shopping cart", "Order tracking"],
    icon: "🛒",
  },
  {
    title: "Web Apps",
    description: "Complex web applications built with modern frameworks.",
    features: ["Real-time features", "API development", "Authentication", "Database design"],
    icon: "⚡",
  },
  {
    title: "Dashboards",
    description: "Data-rich analytics dashboards with interactive visualizations.",
    features: ["Data viz", "Real-time updates", "Export tools", "User roles"],
    icon: "📊",
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love.",
    features: ["Wireframing", "Prototyping", "Design systems", "User testing"],
    icon: "🎨",
  },
]

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="services" className="relative min-h-screen flex items-center py-32 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My <span style={{ color: "var(--primary)" }}>Services</span>
        </motion.h2>

        <motion.p
          className="text-foreground/60 text-center mb-16 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Select a terminal to view details.
        </motion.p>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {SERVICES.map((service, i) => (
            <motion.button
              key={service.title}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="group relative p-6 rounded-xl text-center cursor-pointer transition-all duration-300"
              style={{
                background: "var(--glass)",
                border: "1px solid var(--glass-border)",
                backdropFilter: "blur(12px)",
              }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <span className="text-3xl mb-3 block">{service.icon}</span>
              <h3 className="text-sm font-bold mb-2">{service.title}</h3>
              <div
                className="w-2 h-2 rounded-full mx-auto"
                style={{
                  backgroundColor: openIndex === i ? "var(--primary)" : "var(--glass-border)",
                  boxShadow: openIndex === i ? "0 0 10px var(--primary)" : "none",
                }}
              />
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {openIndex !== null && (
            <motion.div
              key={openIndex}
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 20, height: 0 }}
              className="mt-8 max-w-2xl mx-auto p-8 rounded-2xl"
              style={{
                background: "var(--glass)",
                border: "1px solid var(--primary)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{SERVICES[openIndex].icon}</span>
                <div>
                  <h3 className="text-xl font-bold">{SERVICES[openIndex].title}</h3>
                  <p className="text-foreground/60 text-sm">{SERVICES[openIndex].description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                {SERVICES[openIndex].features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 text-sm text-foreground/70"
                  >
                    <span style={{ color: "var(--primary)" }}>▸</span>
                    {f}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
