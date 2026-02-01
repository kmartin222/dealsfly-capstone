import * as argon2 from "argon2";
import userModel from "./userModel.js";

const userUpdate = async (req, res) => {
 const { id } = req.params;
  console.log("userUpdate id", id);
  const {
    firstName,
    lastName,
    email,
    username,
    password,
    address,
    billingAddress,
    paymentMethod,
    avatar,
    orders,
    role,
    contactNumber,
    cart,
    wishList,
  } = req.body;

  // const { userForm } = req.body;

  console.log("user",
    firstName,
    lastName,
    email,
    username,
    password,
    address,
    billingAddress,
    paymentMethod,
    avatar,
    role,
    orders,
    contactNumber,
    cart,
    wishList
  );

  if (!firstName || !lastName) {
    console.log("Error: user parameters are not valid.");
    res.status(500).send("Error: user parameters are not valid.");
  } else {
    try {
      // const hashedPassword = await argon2.hash(password);
      const user = await userModel.findOneAndUpdate(
        { _id: id },
        {
          firstName,
          lastName,
          email,
          username,
          // password: hashedPassword,
          address,
          billingAddress,
          paymentMethod,
          avatar,
          role,
          orders,
          contactNumber,
          cart,
          wishList,
        }
      );

      console.log("user", user);
      const updatedUser = await userModel.findOne({ _id: id });
      console.log("updatedUser", updatedUser)
      res
        .status(200)
        .json({ message: "user has been Created.", user: updatedUser, success: true });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
};

export default userUpdate;
