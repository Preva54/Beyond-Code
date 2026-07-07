import { Router } from "express"
import {
  getTestimonials,
  getTestimonial,
  createTestimonial,
  deleteTestimonial,
} from "../controllers/testimonialController"
import { authenticate } from "../middleware/auth"

const router = Router()

router.get("/", getTestimonials)
router.get("/:id", getTestimonial)
router.post("/", authenticate, createTestimonial)
router.delete("/:id", authenticate, deleteTestimonial)

export default router
