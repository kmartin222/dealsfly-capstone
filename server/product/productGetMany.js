import productModel from "./productModel.js";

const productGetMany = async (req, res) => {
  // Validation goes here
  const products = await productModel.find();
  // console.log("products", products);
  res.status(200).json({ message: "Success!", products: products });
};

export default productGetMany;
