import userModel from "../user/userModel.js";

// TODO: Need to return the updated user object

const cartUpdate = async (req, res) => {
  const { userId } = req.params;
  const { product } = req.body;
  console.log("cartUpdate", userId, product);

  try {
    // Get user

    const user = await userModel.findOne({
      _id: userId,
      // "cart.id": product.id,
    });
    console.log("user cartUpdate", user);
    console.log("product cartUpdate", product);

    if (user) {
      console.log("user found!");
      console.log(user.cart.find((item) => item.id === product.id));

      const productInCart = user.cart.find((item) => item.id === product.id);

      console.log("productInCart, cartUpdate", productInCart);

      // If item in cart and we are incrementing
      if (productInCart && productInCart.quantity < product.quantity) {
        // TODO: Also check for color and size
        user.cart = user.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // If item in cart and we are removing it completely
      else if (productInCart && product.quantity === 0) {
        user.cart = user.cart.filter((item) => item.id !== product.id);
      }

      // If item in cart and we are decrementing
      else if (
        productInCart &&
        productInCart.quantity > product.quantity &&
        product.quantity > 0
      ) {
        // TODO: Also check for color and size
        user.cart = user.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }

      // If item not in cart, add
      else if (!productInCart) {
        user.cart.push(product);
        // user.save();
      }

      // TODO: if item is in cart and we are removing it completely

      user.save();
      res.status(200).json({ success: true, user: user });
      // TODO: update item amount
      // TODO: res.json()
    } else {
      console.log("user not found! cartUpdate");
      res.status(500).send("Could not add to cart! cartUpdate");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export default cartUpdate;
