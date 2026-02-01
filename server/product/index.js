import express from "express";
import productCreate from "./productCreate.js";
import productGetMany from "./productGetMany.js"
import productGetOne  from "./productGetOne.js"

const productRouter = express.Router()

// Create product API
productRouter.post("/", productCreate)
// Read all products
productRouter.get("/", productGetMany)
// Get one
productRouter.get("/details/:id", productGetOne)

export default productRouter

