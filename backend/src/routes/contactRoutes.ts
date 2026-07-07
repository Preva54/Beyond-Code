import { Router } from "express"
import {
  getMessages,
  createMessage,
  markAsRead,
  deleteMessage,
} from "../controllers/contactController"
import { authenticate } from "../middleware/auth"

const router = Router()

router.get("/", authenticate, getMessages)
router.post("/", createMessage)
router.put("/:id/read", authenticate, markAsRead)
router.delete("/:id", authenticate, deleteMessage)

export default router
