import redis from "../config/redis"
import Topic from "../models/Topic"

const addTopic = async (data: { title: string }) => {
  const { title } = data

  try {
    // Create a new topic
    const newTopic = new Topic({ title })
    await newTopic.save()
    // Clear cache
    await redis.del("topics")
    return newTopic
  } catch (error) {
    throw new Error((error as Error).message)
  }
}

const getAllTpoics = async () => {
  try {
    // Check if topics are cached
    const cachedTopics = await redis.get("topics")
    if (cachedTopics) {
      return JSON.parse(cachedTopics)
    }
    // Fetch topics from MongoDB
    const topics = await Topic.find()
    // Cache topics for 1 hour
    await redis.set("topics", JSON.stringify(topics), "EX", 3600)
    return topics
  } catch (error) {
    throw new Error((error as Error).message)
  }
}

export default {
  addTopic,
  getAllTpoics
}
