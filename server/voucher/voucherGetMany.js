import voucherModel from "./voucherModel.js";

const voucherGetMany = async (req, res) => {
  // Validation goes here
  const vouchers = await voucherModel.find();
  // console.log("vouchers", vouchers);
  res.status(200).json({ message: "Success!", vouchers: vouchers });
};

export default voucherGetMany;
