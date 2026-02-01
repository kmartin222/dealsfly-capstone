import voucherModel from "./voucherModel.js";

const voucherCreate = async (req, res) => {
  const {
    code,
    discountType,
    discountValue,
    minimumPurchaseAmount,
    maximumDiscountValue,
    usageLimitPerCustomer,
    numberOfUsesRemaining,
    isRedeemable,
  } = req.body;
  // Validation goes here
  const voucher = await voucherModel.create({
    code,
    discountType,
    discountValue,
    minimumPurchaseAmount,
    maximumDiscountValue,
    usageLimitPerCustomer,
    numberOfUsesRemaining,
    isRedeemable,
  });
  // console.log("voucher", voucher);
  res.status(200).json({ message: "Success!", voucher: voucher });
};

export default voucherCreate;
