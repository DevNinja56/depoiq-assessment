import * as dotenv from "dotenv"
dotenv.config()

const config = {
  MONGO: {
    NAMESPACE: "MongoDB",
    URL: process.env.MONGO_URL || "mongodb://127.0.0.1:27017/development",
    ENCRYPTION_KEY: process.env.MONGO_ENCRYPTION_KEY || ""
  },
  SERVER: {
    NAMESPACE: "Server",
    API_PREFIX: process.env.API_PREFIX || "/api",
    PORT: process.env.PORT || 4000
  },
  REDIS: {
    NAMESPACE: "Redis",
    HOST: process.env.REDIS_HOST || "127.0.0.1",
    PORT: process.env.REDIS_PORT || 6379
  },
  CLERK: {
    NAMESPACE: "Clerk",
    PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY || "",
    SECRET_KEY: process.env.CLERK_SECRET_KEY || ""
  }
}

export default config
