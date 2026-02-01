import productModel from "./productModel.js";

const productCreate = async (req, res) => {
  const { id, img, name, text, type, size, color, gender, price } = req.body;
  // Validation goes here
  const product = await productModel.create({
    id,
    img,
    name,
    text,
    type,
    size,
    color,
    gender,
    price,
  });
  // console.log("product", product);
  res.status(200).json({ message: "Success!", product: product });
};

export default productCreate;
