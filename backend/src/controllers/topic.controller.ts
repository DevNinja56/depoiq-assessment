import { Request, Response } from "express"
import TopicService from "../services/topic.service"

// Add a new topic
export const addTopic = async (req: Request, res: Response) => {
  const { title } = req.body

  if (!title) {
    return res.status(400).json({ error: "Title is required" })
  }

  try {
    const newTopic = await TopicService.addTopic({ title })
    res.status(201).json({
      status: "success",
      message: "Topic created successfully",
      data: newTopic
    })
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: (error as Error).message,
      data: null
    })
  }
}

export const getAllTopics = async (_req: Request, res: Response) => {
  try {
    // Fetch all topics
    const topics = await TopicService.getAllTopics()
    res.status(200).json({
      status: "success",
      message: "Topics fetched successfully",
      data: topics
    })
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: (error as Error).message,
      data: null
    })
  }
}

export default {
  addTopic,
  getAllTopics
}
