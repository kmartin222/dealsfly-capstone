import productModel from "../product/productModel.js"

const productGetOne = async (req, res) => {
  const { id } = req.params;
  const product = await productModel.find({ _id: id });
  res.status(200).json(product);
};

export default productGetOne;
