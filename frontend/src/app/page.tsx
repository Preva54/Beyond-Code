"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import dynamic from "next/dynamic"
import LoadingScreen from "@/components/3d/LoadingScreen"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Skills from "@/components/sections/Skills"
import Services from "@/components/sections/Services"
import Projects from "@/components/sections/Projects"
import Process from "@/components/sections/Process"
import Experience from "@/components/sections/Experience"
import Testimonials from "@/components/sections/Testimonials"
import FAQ from "@/components/sections/FAQ"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

const Scene = dynamic(() => import("@/components/3d/Scene"), { ssr: false })
const Particles = dynamic(() => import("@/components/3d/Particles"), { ssr: false })

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <Scene>
        <Particles />
      </Scene>

      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Process />
      <Experience />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}
