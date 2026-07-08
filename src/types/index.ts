export interface Project {
  id: string
  title: string
  description: string
  image?: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  caseStudy?: string
  category: string
  featured: boolean
  order: number
  createdAt: string
}

export interface Skill {
  id: string
  name: string
  category: string
  level: number
  icon?: string
  color?: string
  experience?: string
  projects?: string
  animation?: string
  certification?: string
  order: number
}

export interface Service {
  id: string
  title: string
  description: string
  icon?: string
  features: string[]
  price?: string
  order: number
}

export interface Testimonial {
  id: string
  name: string
  role?: string
  company?: string
  content: string
  rating: number
  image?: string
  featured: boolean
}

export interface ContactMessage {
  name: string
  email: string
  subject: string
  message: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt?: string
  content: string
  image?: string
  tags: string[]
  published: boolean
  createdAt: string
  updatedAt: string
}

export interface AboutItem {
  id: string
  label: string
  icon: string
  content: string
}

export const ABOUT_ITEMS: AboutItem[] = [
  {
    id: "laptop",
    label: "Laptop",
    icon: "💻",
    content:
      "Full Stack Developer specializing in scalable web applications with 5+ years of experience.",
  },
  {
    id: "rocket",
    label: "Rocket",
    icon: "🚀",
    content:
      "I build fast, optimized websites that score 95+ on Lighthouse performance audits.",
  },
  {
    id: "lightning",
    label: "Lightning",
    icon: "⚡",
    content:
      "Lightning-fast development cycles with modern tooling and CI/CD pipelines.",
  },
  {
    id: "globe",
    label: "Globe",
    icon: "🌍",
    content:
      "Available worldwide for remote collaboration. Based in EST timezone.",
  },
]
