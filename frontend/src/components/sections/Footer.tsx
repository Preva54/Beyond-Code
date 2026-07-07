"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t" style={{ borderColor: "var(--glass-border)" }}>
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3
            className="text-2xl font-bold mb-2"
            style={{ color: "var(--primary)" }}
          >
            Beyond Code
          </h3>
          <p className="text-foreground/40 text-sm mb-8">
            Building the future, one pixel at a time.
          </p>

          <div className="flex justify-center gap-6 mb-8">
            {["GitHub", "LinkedIn", "Twitter", "Email"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-foreground/40 hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <p className="text-foreground/30 text-xs font-mono">
            &copy; {new Date().getFullYear()} Beyond Code. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
