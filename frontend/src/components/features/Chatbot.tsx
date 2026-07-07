"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const RESPONSES: Record<string, string> = {
  hello: "Hi! Welcome to Beyond Code. How can I help you today?",
  hi: "Hey there! Feel free to ask me about my skills, projects, or experience.",
  skills:
    "I specialize in React, Next.js, TypeScript, Node.js, Laravel, MongoDB, PostgreSQL, Docker, AWS, and Three.js for 3D experiences.",
  projects:
    "I've worked on e-commerce platforms, real-time dashboards, AI-powered CMS, and interactive 3D websites. Check out the Projects section!",
  experience:
    "I'm a Full Stack Developer with 5+ years of experience building scalable web applications for startups and enterprises.",
  contact:
    "You can reach me through the Contact section above, or email me directly at hello@beyondcode.dev",
  default:
    "That's a great question! Feel free to explore my portfolio sections above, or ask me about my skills, projects, or experience.",
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([
    { role: "bot", text: "Hi! Ask me anything about my work." },
  ])
  const [input, setInput] = useState("")
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg = input.trim().toLowerCase()
    setMessages((prev) => [...prev, { role: "user", text: input.trim() }])
    setInput("")

    setTimeout(() => {
      const reply = Object.entries(RESPONSES).find(([key]) =>
        userMsg.includes(key)
      )
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: reply ? reply[1] : RESPONSES.default },
      ])
    }, 500)
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        style={{ backgroundColor: "var(--primary)" }}
      >
        <span className="text-xl">{open ? "✕" : "💬"}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: "var(--background)",
              border: "1px solid var(--glass-border)",
            }}
          >
            <div
              className="p-4"
              style={{ backgroundColor: "var(--primary)", color: "var(--background)" }}
            >
              <p className="font-bold text-sm">AI Assistant</p>
              <p className="text-xs opacity-80">Trained on my portfolio</p>
            </div>

            <div className="h-80 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === "user"
                        ? ""
                        : ""
                    }`}
                    style={{
                      backgroundColor:
                        msg.role === "user"
                          ? "var(--primary)"
                          : "var(--glass)",
                      color:
                        msg.role === "user"
                          ? "var(--background)"
                          : "var(--foreground)",
                      border:
                        msg.role === "bot"
                          ? "1px solid var(--glass-border)"
                          : "none",
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <form
              onSubmit={handleSend}
              className="p-3 border-t"
              style={{ borderColor: "var(--glass-border)" }}
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent border rounded-xl px-3 py-2 text-sm outline-none"
                  style={{ borderColor: "var(--glass-border)" }}
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-sm font-medium"
                  style={{
                    backgroundColor: "var(--primary)",
                    color: "var(--background)",
                  }}
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
