import type { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

interface AuthPayload {
  userId: string
  role: string
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthPayload
    }
  }
}

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization
  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" })
  }

  try {
    const token = header.split(" ")[1]
    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET || "fallback-secret"
    ) as AuthPayload
    req.user = payload
    next()
  } catch {
    return res.status(401).json({ error: "Invalid token" })
  }
}
