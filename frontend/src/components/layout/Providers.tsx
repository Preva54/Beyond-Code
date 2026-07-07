"use client"

import { type ReactNode } from "react"
import { ClerkProvider } from "@clerk/nextjs"
import Chatbot from "@/components/features/Chatbot"

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      {children}
      <Chatbot />
    </ClerkProvider>
  )
}
