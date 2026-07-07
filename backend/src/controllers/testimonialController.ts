import type { Request, Response } from "express"
import { prisma } from "../lib/prisma"
import { AppError } from "../middleware/errorHandler"

export async function getTestimonials(_req: Request, res: Response) {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: { createdAt: "desc" },
  })
  res.json(testimonials)
}

export async function getTestimonial(req: Request, res: Response) {
  const { id } = req.params
  const testimonial = await prisma.testimonial.findUnique({ where: { id } })
  if (!testimonial) throw new AppError("Testimonial not found", 404)
  res.json(testimonial)
}

export async function createTestimonial(req: Request, res: Response) {
  const testimonial = await prisma.testimonial.create({ data: req.body })
  res.status(201).json(testimonial)
}

export async function deleteTestimonial(req: Request, res: Response) {
  const { id } = req.params
  await prisma.testimonial.delete({ where: { id } })
  res.status(204).send()
}
