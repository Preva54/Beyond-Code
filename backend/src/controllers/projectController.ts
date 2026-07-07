import type { Request, Response } from "express"
import { prisma } from "../lib/prisma"
import { AppError } from "../middleware/errorHandler"

export async function getProjects(_req: Request, res: Response) {
  const projects = await prisma.project.findMany({
    orderBy: { order: "asc" },
  })
  res.json(projects)
}

export async function getProject(req: Request, res: Response) {
  const { id } = req.params
  const project = await prisma.project.findUnique({ where: { id } })
  if (!project) throw new AppError("Project not found", 404)
  res.json(project)
}

export async function createProject(req: Request, res: Response) {
  const project = await prisma.project.create({ data: req.body })
  res.status(201).json(project)
}

export async function updateProject(req: Request, res: Response) {
  const { id } = req.params
  const project = await prisma.project.update({
    where: { id },
    data: req.body,
  })
  res.json(project)
}

export async function deleteProject(req: Request, res: Response) {
  const { id } = req.params
  await prisma.project.delete({ where: { id } })
  res.status(204).send()
}
