"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const FAQS = [
  {
    q: "What technologies do you specialize in?",
    a: "I specialize in React, Next.js, TypeScript, Node.js, and modern full-stack development. I'm also experienced with Three.js for 3D web experiences.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines vary by complexity. A standard business website takes 2-4 weeks, while complex web applications can take 2-3 months.",
  },
  {
    q: "Do you offer ongoing maintenance?",
    a: "Yes, I offer maintenance packages including updates, security patches, monitoring, and content changes.",
  },
  {
    q: "Can you work with my existing team?",
    a: "Absolutely. I'm experienced with collaborative workflows, code reviews, and integrating with existing codebases.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative min-h-screen flex items-center py-32 px-4">
      <div className="max-w-3xl mx-auto w-full">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Frequently Asked <span style={{ color: "var(--primary)" }}>Questions</span>
        </motion.h2>

        <motion.p
          className="text-foreground/60 text-center mb-16 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Everything you need to know before we start working together.
        </motion.p>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "var(--glass)",
                border: "1px solid var(--glass-border)",
                backdropFilter: "blur(12px)",
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
              >
                <span className="text-sm font-medium">{faq.q}</span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  className="text-lg flex-shrink-0 ml-4"
                  style={{ color: "var(--primary)" }}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-foreground/60 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
