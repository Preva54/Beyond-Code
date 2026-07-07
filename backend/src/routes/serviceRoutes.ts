import { Router } from "express"
import {
  getServices,
  getService,
  createService,
  updateService,
  deleteService,
} from "../controllers/serviceController"
import { authenticate } from "../middleware/auth"

const router = Router()

router.get("/", getServices)
router.get("/:id", getService)
router.post("/", authenticate, createService)
router.put("/:id", authenticate, updateService)
router.delete("/:id", authenticate, deleteService)

export default router
