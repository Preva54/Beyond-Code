import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog | Beyond Code",
  description: "Thoughts on web development, 3D design, and full-stack engineering.",
}

const POSTS = [
  {
    slug: "building-3d-portfolios",
    title: "Building 3D Portfolios with React Three Fiber",
    excerpt:
      "Learn how to create immersive 3D experiences for your portfolio using Three.js and React.",
    date: "2026-06-15",
    tags: ["Three.js", "React", "3D"],
  },
  {
    slug: "full-stack-optimization",
    title: "Full-Stack Performance Optimization Guide",
    excerpt:
      "Techniques for optimizing both frontend and backend for maximum speed.",
    date: "2026-05-20",
    tags: ["Performance", "Full-Stack"],
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span style={{ color: "var(--primary)" }}>Blog</span>
        </h1>
        <p className="text-foreground/60 mb-12 max-w-lg">
          Thoughts on web development, 3D design, and full-stack engineering.
        </p>

        <div className="space-y-6">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "var(--glass)",
                border: "1px solid var(--glass-border)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: "var(--primary)11",
                      color: "var(--primary)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
                <span className="text-xs text-foreground/40 ml-auto">
                  {post.date}
                </span>
              </div>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-sm text-foreground/60">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
