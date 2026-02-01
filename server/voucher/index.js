import express from "express";
import voucherGetMany from "./voucherGetMany.js"
import voucherGetOne  from "./voucherGetOne.js"
import voucherCreate from "./voucherCreate.js";

const voucherRouter = express.Router()

// Create voucher API
voucherRouter.post("/", voucherCreate)
// Read all vouchers
voucherRouter.get("/", voucherGetMany)
// Get one
voucherRouter.get("/details/:id", voucherGetOne)

export default voucherRouter

