import type { Request, Response } from "express"
import { prisma } from "../lib/prisma"
import { AppError } from "../middleware/errorHandler"
import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export async function getMessages(_req: Request, res: Response) {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  })
  res.json(messages)
}

export async function createMessage(req: Request, res: Response) {
  const { name, email, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    throw new AppError("All fields are required", 400)
  }

  const msg = await prisma.contactMessage.create({
    data: { name, email, subject, message },
  })

  if (resend) {
    await resend.emails.send({
      from: "portfolio@yourdomain.com",
      to: "you@yourdomain.com",
      subject: `New Contact: ${subject}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    })
  }

  res.status(201).json(msg)
}

export async function markAsRead(req: Request, res: Response) {
  const { id } = req.params
  const msg = await prisma.contactMessage.update({
    where: { id },
    data: { read: true },
  })
  res.json(msg)
}

export async function deleteMessage(req: Request, res: Response) {
  const { id } = req.params
  await prisma.contactMessage.delete({ where: { id } })
  res.status(204).send()
}
