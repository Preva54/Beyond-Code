import { Router } from "express"
import {
  getSkills,
  getSkill,
  createSkill,
  updateSkill,
  deleteSkill,
} from "../controllers/skillController"
import { authenticate } from "../middleware/auth"

const router = Router()

router.get("/", getSkills)
router.get("/:id", getSkill)
router.post("/", authenticate, createSkill)
router.put("/:id", authenticate, updateSkill)
router.delete("/:id", authenticate, deleteSkill)

export default router
