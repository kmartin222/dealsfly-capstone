import mongoose from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema({
  stars: Number,
  title: String,
  author: String,
  email: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});

export default blogSchema;
