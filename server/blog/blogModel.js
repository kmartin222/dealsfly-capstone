import mongoose from "mongoose";
import blogSchema from "./blogSchema.js"

blogSchema.set("toJSON", {
    transform: (doc, ret, options) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
        // ret.date = new Intl.DateTimeFormat("en-US").format(
        //   new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738))
        // );
    }
})

const blogModel = mongoose.model("Blog", blogSchema)

export default blogModel