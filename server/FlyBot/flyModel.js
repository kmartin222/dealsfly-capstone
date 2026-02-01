import mongoose from "mongoose";
import flySchema from "./flySchema.js";

flySchema.set("toJSON", {
  transform: (doc, ret, options) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

const flyModel = mongoose.model("fly", flySchema);

export default flyModel;
