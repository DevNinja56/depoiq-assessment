import mongoose, { Schema, Document } from "mongoose"
import mongooseEncryption from "mongoose-encryption"
import config from "../config"

type TopicDocument = Document & {
  title: string
}

const topicSchema = new Schema(
  {
    title: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

topicSchema.set("toJSON", {
  transform: (_doc: any, ret: any) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  }
})

topicSchema.plugin(mongooseEncryption, {
  secret: config.MONGO.ENCRYPTION_KEY
})

export default mongoose.model<TopicDocument>("Topic", topicSchema)
