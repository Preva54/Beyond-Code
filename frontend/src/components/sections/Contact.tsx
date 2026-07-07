"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="relative min-h-screen flex items-center py-32 px-4">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In <span style={{ color: "var(--primary)" }}>Touch</span>
        </motion.h2>

        <motion.p
          className="text-foreground/60 text-center mb-16 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Send a message across the digital universe.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto p-8 rounded-2xl space-y-6"
          style={{
            background: "var(--glass)",
            border: "1px solid var(--glass-border)",
            backdropFilter: "blur(12px)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {(["name", "email", "subject"] as const).map((field) => (
            <div key={field}>
              <label className="block text-xs font-mono tracking-wider text-foreground/40 mb-2 uppercase">
                {field}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                className="w-full bg-transparent border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-primary"
                style={{ borderColor: "var(--glass-border)" }}
                required
              />
            </div>
          ))}

          <div>
            <label className="block text-xs font-mono tracking-wider text-foreground/40 mb-2 uppercase">
              message
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="w-full bg-transparent border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-primary resize-none"
              style={{ borderColor: "var(--glass-border)" }}
              required
            />
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 rounded-xl font-medium text-sm tracking-wider uppercase transition-all duration-300"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--background)",
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {sent ? "Message Sent! 🚀" : "Send Message"}
          </motion.button>

          {sent && (
            <motion.p
              className="text-center text-sm"
              style={{ color: "var(--primary)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Your message is flying through space!
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
