import express, { Express } from "express"
import TopicRoutes from "./topic.route"

const app: Express = express()

app.use("/topics", TopicRoutes)

export default app
