import mongoose from "mongoose";
const { Schema } = mongoose

const flySchema = new Schema({
  name: {
    type: String,
    default: "",
  },
  message: {
    type: String,
    default: "",
  },
  timestamp: {
    type: Date,
    default: new Date(),
  },
});

export default flySchema