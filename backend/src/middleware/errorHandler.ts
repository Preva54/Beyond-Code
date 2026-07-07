import type { Request, Response, NextFunction } from "express"

export class AppError extends Error {
  statusCode: number
  constructor(message: string, statusCode = 500) {
    super(message)
    this.statusCode = statusCode
  }
}

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  const statusCode = err instanceof AppError ? err.statusCode : 500
  res.status(statusCode).json({
    error: err.message || "Internal Server Error",
    status: statusCode,
  })
}
