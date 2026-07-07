import { Router } from "express"
import {
  getPosts,
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/blogController"
import { authenticate } from "../middleware/auth"

const router = Router()

router.get("/", getPosts)
router.get("/all", authenticate, getAllPosts)
router.get("/:slug", getPost)
router.post("/", authenticate, createPost)
router.put("/:id", authenticate, updatePost)
router.delete("/:id", authenticate, deletePost)

export default router
