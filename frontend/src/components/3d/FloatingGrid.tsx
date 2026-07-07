"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export default function FloatingGrid() {
  const mesh = useRef<THREE.Points>(null)

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const pts: number[] = []
    const size = 20
    const divisions = 40
    const step = size / divisions

    for (let i = -divisions / 2; i <= divisions / 2; i++) {
      for (let j = -divisions / 2; j <= divisions / 2; j++) {
        pts.push(i * step, 0, j * step)
      }
    }
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3))
    return geo
  }, [])

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.position.y =
        Math.sin(clock.elapsedTime * 0.5) * 0.3 - 3
    }
  })

  return (
    <points ref={mesh} geometry={geometry}>
      <pointsMaterial size={0.03} color="#00f0ff" transparent opacity={0.3} />
    </points>
  )
}
