import userModel from "../user/userModel.js";

const cartGetOne = async (req, res) => {
  const { userId } = req.params;
  // console.log("cartGetOne userId", userId);
  const user = await userModel.findOne({ _id: userId });
  // console.log("user", user);
  res.status(200).json({ cart: user.cart });
};

export default cartGetOne;
