import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://beyondcode.dev", lastModified: new Date(), priority: 1 },
    { url: "https://beyondcode.dev/blog", lastModified: new Date(), priority: 0.8 },
    {
      url: "https://beyondcode.dev/blog/building-3d-portfolios",
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: "https://beyondcode.dev/blog/full-stack-optimization",
      lastModified: new Date(),
      priority: 0.6,
    },
  ]
}
