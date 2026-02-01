import completedModel from "./completedModel.js";

const completedGetMany = async (req, res) => {
  try {
    const completed = await completedModel.find();
    res.status(200).json({ success: true, completed: completed });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export default completedGetMany;
