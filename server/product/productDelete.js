import productModel from "./productModel";

const productDelete = async (req, res) => {
  let { id } = req.params;

  try {
    const Product = await productModel.deleteOne({ _id: id });
    res.status(200).json({ message: "Success. Product deleted." });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export default productDelete;
