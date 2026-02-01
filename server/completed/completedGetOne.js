import completedModel from "./completedModel.js";

const completedGetOne = async (req, res) => {
  const { completedId } = req.params;
  const product = await completedModel.findOne({ _id: completedId });
  res.status(200).json({ success: true, completed: product });
};

export default completedGetOne;
