import type { Request, Response } from "express"
import { prisma } from "../lib/prisma"
import { AppError } from "../middleware/errorHandler"

export async function getSkills(_req: Request, res: Response) {
  const skills = await prisma.skill.findMany({
    orderBy: { order: "asc" },
  })
  res.json(skills)
}

export async function getSkill(req: Request, res: Response) {
  const { id } = req.params
  const skill = await prisma.skill.findUnique({ where: { id } })
  if (!skill) throw new AppError("Skill not found", 404)
  res.json(skill)
}

export async function createSkill(req: Request, res: Response) {
  const skill = await prisma.skill.create({ data: req.body })
  res.status(201).json(skill)
}

export async function updateSkill(req: Request, res: Response) {
  const { id } = req.params
  const skill = await prisma.skill.update({
    where: { id },
    data: req.body,
  })
  res.json(skill)
}

export async function deleteSkill(req: Request, res: Response) {
  const { id } = req.params
  await prisma.skill.delete({ where: { id } })
  res.status(204).send()
}
