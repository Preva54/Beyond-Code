"use client"

import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { type ReactNode, Suspense } from "react"
import { useReducedMotion } from "@/hooks/useReducedMotion"

function SceneContent({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion()

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#00f0ff" />
      <pointLight position={[-10, -5, -10]} intensity={0.5} color="#ff00e5" />
      <fog attach="fog" args={["#0a0a0f", 15, 30]} />
      {children}
      <Environment preset="night" />
      {!reduced && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 4}
          rotateSpeed={0.3}
        />
      )}
    </>
  )
}

export default function Scene({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false }}
      >
        <Suspense fallback={null}>
          <SceneContent>{children}</SceneContent>
        </Suspense>
      </Canvas>
    </div>
  )
}
