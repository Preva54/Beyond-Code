import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import projectRoutes from "./routes/projectRoutes"
import skillRoutes from "./routes/skillRoutes"
import serviceRoutes from "./routes/serviceRoutes"
import testimonialRoutes from "./routes/testimonialRoutes"
import contactRoutes from "./routes/contactRoutes"
import blogRoutes from "./routes/blogRoutes"
import { errorHandler } from "./middleware/errorHandler"

dotenv.config()

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.get("/api/health", (_, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() })
})

app.use("/api/projects", projectRoutes)
app.use("/api/skills", skillRoutes)
app.use("/api/services", serviceRoutes)
app.use("/api/testimonials", testimonialRoutes)
app.use("/api/contact", contactRoutes)
app.use("/api/blog", blogRoutes)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

export default app
