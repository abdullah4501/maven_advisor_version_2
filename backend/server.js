import "dotenv/config"
import express from "express"

import { submitCfoBooking } from "./api/cfo-booking.js"
import { submitQuote } from "./api/quote.js"

const app = express()
const port = Number(process.env.PORT) || 3001
const allowedOrigins = (process.env.FRONTEND_URL || "http://localhost:8080")
  .split(",")
  .map((origin) => origin.trim().replace(/\/$/, ""))
  .filter(Boolean)

app.disable("x-powered-by")
app.use(express.json({ limit: "100kb" }))

app.use((request, response, next) => {
  const origin = request.headers.origin?.replace(/\/$/, "")

  if (origin && !allowedOrigins.includes(origin)) {
    return response.status(403).json({ error: "Origin is not allowed" })
  }

  if (origin && allowedOrigins.includes(origin)) {
    response.setHeader("Access-Control-Allow-Origin", origin)
    response.setHeader("Vary", "Origin")
    response.setHeader("Access-Control-Allow-Headers", "Content-Type")
    response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
  }

  if (request.method === "OPTIONS") return response.sendStatus(204)

  next()
})

app.get("/api/health", (_request, response) => response.status(200).json({ ok: true }))
app.post("/api/quote", submitQuote)
app.post("/api/cfo-booking", submitCfoBooking)

app.use((_request, response) => response.status(404).json({ error: "API route not found" }))

app.use((error, _request, response, _next) => {
  if (error?.type === "entity.parse.failed") return response.status(400).json({ error: "Invalid JSON request" })
  console.error("Unhandled API error", error)
  return response.status(500).json({ error: "Unexpected server error" })
})

app.listen(port, () => {
  console.log(`Mavens Advisor API listening on port ${port}`)
})
