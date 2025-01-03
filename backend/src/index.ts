import http from "http"
import express, { Express, Request, Response } from "express"
import bodyParser from "body-parser"
import cors from "cors"
import connectMongoDB from "./config/mongo"
import createGraphQLServer from "./config/graphql"
import logging from "./config/logging"
import Routes from "./routes/index"
import dotenv from "dotenv"
import errorHandler from "./middlewares/errorHandler.middleware"
import config from "./config"

dotenv.config()

// Express App Setup
const app: Express = express()
const NAMESPACE = "Server"

app.use(cors({ origin: ["http://localhost", "http://13.202.240.140"] }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
  logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`)

  res.on("finish", () => {
    logging.info(
      NAMESPACE,
      `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`
    )
  })

  next()
})

// Routes
app.get("/", (_req: Request, res: Response) => {
  res.json({ status: "success", message: "Welcome to Backend API.", data: null })
})
app.use(config.SERVER.API_PREFIX, Routes)

// Error handling middleware
app.use(errorHandler)

// Connect MongoDB
connectMongoDB()

// Start Apollo GraphQL Server
;(async () => {
  try {
    const server = createGraphQLServer() // Create server instance
    await server.start().then(() => {
      logging.info(NAMESPACE, "Apollo Server started")
      server.applyMiddleware({ app }) // Apply middleware
    })

    const httpServer = http.createServer(app)
    const PORT = process.env.PORT || 4000

    httpServer.listen(PORT, () => {
      logging.info(NAMESPACE, `Server running on http://localhost:${PORT}`)
      logging.info(NAMESPACE, `GraphQL playground available at http://localhost:${PORT}${server.graphqlPath}`)
    })
  } catch (error) {
    logging.error(NAMESPACE, `Error starting Apollo Server: ${(error as Error).message}`)
  }
})()
