import type { Request, Response } from "express"
import { prisma } from "../lib/prisma"
import { AppError } from "../middleware/errorHandler"

export async function getServices(_req: Request, res: Response) {
  const services = await prisma.service.findMany({
    orderBy: { order: "asc" },
  })
  res.json(services)
}

export async function getService(req: Request, res: Response) {
  const { id } = req.params
  const service = await prisma.service.findUnique({ where: { id } })
  if (!service) throw new AppError("Service not found", 404)
  res.json(service)
}

export async function createService(req: Request, res: Response) {
  const service = await prisma.service.create({ data: req.body })
  res.status(201).json(service)
}

export async function updateService(req: Request, res: Response) {
  const { id } = req.params
  const service = await prisma.service.update({
    where: { id },
    data: req.body,
  })
  res.json(service)
}

export async function deleteService(req: Request, res: Response) {
  const { id } = req.params
  await prisma.service.delete({ where: { id } })
  res.status(204).send()
}
