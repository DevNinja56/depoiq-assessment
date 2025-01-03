import { gql } from "apollo-server-express"
import Topic from "../models/Topic"
import Redis from "ioredis"

export const resolvers = {
  Query: {
    topics: async (_: any, __: any, { redis }: { redis: Redis }) => {
      const cachedTopics = await redis.get("topics")
      if (cachedTopics) return JSON.parse(cachedTopics)

      const topics = await Topic.find()
      // Cache for 1 hour
      await redis.set("topics", JSON.stringify(topics), "EX", 3600)
      return topics
    }
  },
  Mutation: {
    addTopic: async (
      _: any,
      { title, description }: { title: string; description: string },
      { redis }: { redis: Redis }
    ) => {
      const newTopic = new Topic({ title, description })
      await newTopic.save()
      // Clear cache
      await redis.del("topics")
      return newTopic
    }
  }
}

export const typeDefs = gql`
  type Topic {
    id: ID!
    title: String!
    description: String
  }

  type Query {
    topics: [Topic]
  }

  type Mutation {
    addTopic(title: String!, description: String!): Topic!
  }
`
