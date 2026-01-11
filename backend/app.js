import express from "express"
import cors from "cors"
import healthCheckRouter from "./routes/healthcheck.routes.js"

const app = express()

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
))

app.use("/api/healthcheck", healthCheckRouter)

export default app
