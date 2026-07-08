import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  turbopack: { root: process.cwd() },
  allowedDevOrigins: ["192.168.233.1"],
  images: {
    remotePatterns: [new URL("https://images.unsplash.com/**")],
    qualities: [25, 50, 75, 100],
  },
}

export default nextConfig
