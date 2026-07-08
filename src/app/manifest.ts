import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Beyond Code | Full Stack Developer",
    short_name: "Beyond Code",
    description: "I don't just build websites. I build digital experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#00f0ff",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  }
}
