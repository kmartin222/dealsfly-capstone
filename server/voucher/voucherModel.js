import mongoose from "mongoose";
import voucherSchema from "./voucherSchema.js"

voucherSchema.set("toJSON", {
    transform: (doc, ret, options) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
       }
})

const voucherModel = mongoose.model("voucher", voucherSchema)

export default voucherModel