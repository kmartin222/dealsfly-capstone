import voucherModel from "../voucher/voucherModel.js"

const voucherGetOne = async (req, res) => {
  const { id } = req.params;
  const voucher = await voucherModel.find({ _id: id });
  res.status(200).json(voucher);
};

export default voucherGetOne;
