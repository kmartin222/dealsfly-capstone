import mongoose from "mongoose";
import completedSchema from "./completedSchema.js"

completedSchema.set("toJSON", {
    transform: (doc, ret, options) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
       }
})

const completedModel = mongoose.model("completed", completedSchema)

export default completedModel