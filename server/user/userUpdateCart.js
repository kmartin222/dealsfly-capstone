import UserModel from "./userModel.js";

// TODO: Need to return the updated user object

const userUpdateCart = async (req, res) => {
  const { id } = req.params;
  const { img, name, text, type, size, color, gender, price } = req.body;
  console.log(id, img, name, text, type, size, color, gender, price);

  try {
    // Get user
    const user = await UserModel.findOne({ _id: id });

    // Is item in cart
    const isInCart = user.cart.find(
      (product) => product.id === product.id && product.size === product.size
    );

    // If item is already in cart remove it
    if (isInCart) {
      state.user.cart = state.user.cart.filter(
        (product) => product.id !== product.id && product.size === product.size
      );
    }
    // If item is not in cart, add it
    else {
      user.cart.push({
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
    }

    // Save updates
    user.save();

    console.log("user", user);

    res
      .status(200)
      .json({ message: "User has been Updated.", user: user, success: true });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export default userUpdateCart;