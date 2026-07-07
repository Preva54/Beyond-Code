import type { Metadata } from "next"
import Link from "next/link"

const POSTS: Record<string, { title: string; content: string; date: string }> =
  {
    "building-3d-portfolios": {
      title: "Building 3D Portfolios with React Three Fiber",
      date: "2026-06-15",
      content: `
## Getting Started with R3F

React Three Fiber (R3F) is a React renderer for Three.js that brings the power of 3D into the React ecosystem. It allows you to build complex 3D scenes using familiar declarative patterns.

### Setting Up the Scene

Start by creating a Canvas and adding basic elements like lighting, controls, and your 3D objects.

### Performance Tips

- Use \`useMemo\` for geometry and materials
- Limit shadow maps
- Use instancing for repeated objects
- Implement LOD (Level of Detail) for complex scenes
      `,
    },
    "full-stack-optimization": {
      title: "Full-Stack Performance Optimization Guide",
      date: "2026-05-20",
      content: `
## Optimization Strategies

Performance optimization requires looking at both the frontend and backend.

### Frontend

- Code splitting and lazy loading
- Image optimization with next/image
- Bundle analysis and tree shaking
- Caching strategies

### Backend

- Database query optimization
- Redis caching
- Connection pooling
- Compression and gzip
      `,
    },
  }

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }))
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Metadata {
  return {
    title: `${POSTS[Object.keys(POSTS).find((k) => k === "") || ""]?.title || "Post"} | Beyond Code`,
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = POSTS[slug]

  if (!post) {
    return (
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-primary hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 px-4">
      <article className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="text-sm text-foreground/40 hover:text-primary transition-colors mb-8 inline-block"
        >
          ← Back to Blog
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <p className="text-sm text-foreground/40 mb-12">{post.date}</p>

        <div
          className="prose prose-invert max-w-none leading-relaxed space-y-4"
          style={{ whiteSpace: "pre-wrap" }}
        >
          {post.content}
        </div>
      </article>
    </div>
  )
}
