import "dotenv/config";
import express from "express";

import cors from "cors";
import mongoose from "mongoose";
import productRouter from "./product/index.js";
import userIndex from "./user/userIndex.js";
import cartRouter from "./cart/index.js";
import voucherRouter from "./voucher/index.js";
import completedRouter from "./completed/index.js";
import blogRouter from "./blog/index.js";

const app = express();
app.use(express.json());
app.use(cors());
const port = 8000;



app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/product", productRouter);
app.use("/users", userIndex);
app.use("/cart", cartRouter);
app.use("/voucher", voucherRouter);
app.use("/completed", completedRouter);
app.use("/blog", blogRouter);

// app.all("*", (req, res) => {
//     res.status(404).json({
//         success: false,
//         data: "404"
//     })
// })

try {
  const mongoURL = process.env.MONGODB_URL || "";
  await mongoose.connect(mongoURL);
  console.log(`Connected to MongoDB at ${mongoURL}`);

  app.listen(port, () => {
    console.log(`Shopping App ${port}`);
  });
} catch (err) {
  console.log(err);
}
