import { gql } from "apollo-server-express"
import Topic from "../models/Topic"
import Redis from "ioredis"

export const resolvers = {
  Query: {
    topics: async (_: any, { page = 1, limit = 10 }: { page: number; limit: number }, { redis }: { redis: Redis }) => {
      if (page < 1 || limit < 1) {
        throw new Error("Page and limit must be positive integers.")
      }

      const cacheKey = `topics:page:${page}:limit:${limit}`
      const cachedTopics = await redis.get(cacheKey)

      if (cachedTopics) {
        return JSON.parse(cachedTopics)
      }

      // Pagination logic
      const skip = (page - 1) * limit

      try {
        const [topics, totalCount] = await Promise.all([Topic.find().skip(skip).limit(limit), Topic.countDocuments()])

        // Response object
        const response = {
          count: totalCount,
          data: topics || [],
          currentPage: page,
          nextPage: page * limit < totalCount ? page + 1 : null
        }

        // Cache the response
        await redis.set(cacheKey, JSON.stringify(response), "EX", 3600)

        return response
      } catch (error) {
        console.error("Error fetching topics:", (error as Error).message)
        throw new Error("Failed to fetch topics.")
      }
    }
  },
  Mutation: {
    addTopic: async (
      _: any,
      { title, description, page, limit }: { title: string; description: string; page: number; limit: number },
      { redis }: { redis: Redis }
    ) => {
      const newTopic = new Topic({ title, description })
      await newTopic.save()
      // Clear cache
      await redis.del(`topics:page:${page}:limit:${limit}`)
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

  type PaginatedTopics {
    count: Int!
    data: [Topic!]!
    currentPage: Int!
    nextPage: Int
  }

  type Query {
    topics(page: Int, limit: Int): PaginatedTopics!
  }

  type Mutation {
    addTopic(title: String!, description: String!, page: Int!, limit: Int!): Topic!
  }
`
