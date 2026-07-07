import type { Request, Response } from "express"
import { prisma } from "../lib/prisma"
import { AppError } from "../middleware/errorHandler"

export async function getPosts(_req: Request, res: Response) {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  })
  res.json(posts)
}

export async function getAllPosts(_req: Request, res: Response) {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
  })
  res.json(posts)
}

export async function getPost(req: Request, res: Response) {
  const { slug } = req.params
  const post = await prisma.blogPost.findUnique({ where: { slug } })
  if (!post) throw new AppError("Post not found", 404)
  res.json(post)
}

export async function createPost(req: Request, res: Response) {
  const { title, slug, ...rest } = req.body

  const existing = await prisma.blogPost.findUnique({ where: { slug } })
  if (existing) throw new AppError("Slug already exists", 409)

  const post = await prisma.blogPost.create({
    data: { title, slug, ...rest },
  })
  res.status(201).json(post)
}

export async function updatePost(req: Request, res: Response) {
  const { id } = req.params
  const post = await prisma.blogPost.update({
    where: { id },
    data: req.body,
  })
  res.json(post)
}

export async function deletePost(req: Request, res: Response) {
  const { id } = req.params
  await prisma.blogPost.delete({ where: { id } })
  res.status(204).send()
}
