import { ApolloServer } from "apollo-server-express"
import { typeDefs, resolvers } from "../resolvers/schema"
import redis from "./redis"
import { ClerkExpressWithAuth } from "@clerk/clerk-sdk-node"
import dotenv from "dotenv"
import { AuthenticatedRequest } from "../interface"

dotenv.config()

const createGraphQLServer = () => {
  return new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req, res }) => {
      let auth: any
      await ClerkExpressWithAuth()(req, res, (err: any) => {
        if (err) {
          throw new Error("Unauthorized: Please log in to access this resource.")
        }
        auth = (req as AuthenticatedRequest).auth
      })

      if (!auth || !auth.userId) {
        throw new Error("Unauthorized: Please log in to access this resource.")
      }

      return {
        redis,
        userId: auth.userId,
        sessionId: auth.sessionId
      }
    }
  })
}

export default createGraphQLServer
