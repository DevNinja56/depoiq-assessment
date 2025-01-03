import express from "express"
import TopicController from "../controllers/topic.controller"
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node"

const router = express.Router()

// GET /api/topics
router.get("/", ClerkExpressRequireAuth(), TopicController.getAllTopics)

// POST /api/topics
router.post("/", ClerkExpressRequireAuth(), TopicController.addTopic)

export default router
