import Redis from "ioredis"
import config from "./index"
import logging from "./logging"

const redis = new Redis({
  host: config.REDIS.HOST,
  port: +config.REDIS.PORT
})

redis.on("connect", () => {
  logging.info(config.REDIS.NAMESPACE, "Connected to Redis")
})

redis.on("error", (error) => {
  logging.error(config.REDIS.NAMESPACE, error.message)
})

export default redis
