import mongoose from "mongoose";
const { Schema } = mongoose

const productSchema = new Schema({
    id: String,
    img: String,
    name: String,
    text: String,
    type: String,
    size: [],
    color: [],
    gender: String,
    price: Number,
})

export default productSchema