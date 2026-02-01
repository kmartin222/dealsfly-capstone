import userModel from "./userModel.js";

const userGetOne = async (req, res) => {
  const { id } = req.params;
  const user = await userModel.find({ _id: id });
  res.status(200).json(user);
};

export default userGetOne;
