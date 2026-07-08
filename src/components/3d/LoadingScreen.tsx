"use client"

import { motion } from "framer-motion"

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-16 h-16">
          <motion.div
            className="absolute inset-0 border-2 rounded-full"
            style={{ borderColor: "var(--primary)" }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-2 rounded-full"
            style={{ backgroundColor: "var(--primary)" }}
            animate={{
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <motion.p
          className="text-sm font-mono tracking-widest"
          style={{ color: "var(--primary)" }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          LOADING...
        </motion.p>
      </div>
    </motion.div>
  )
}
