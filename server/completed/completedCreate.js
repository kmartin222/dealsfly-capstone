import completedModel from "./completedModel.js";
import userModel from "../user/userModel.js";

const completedCreate = async (req, res) => {
  const { user, shippingAddress, total, subtotal, shipping, tax, savings, testCart } =
    req.body;
  console.log("!!!!!!!!!!!testCart", testCart);
  console.log("222222222testCart", testCart.cart);

  // Validation goes here
  const completed = await completedModel.create({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    contactNumber: user.contactNumber,
    paymentMethod: user.paymentMethod,
    billingAddress: user.billingAddress,
    username: user.username,
    shippingAddress,
    products: testCart.cart,
    date: new Date(),
    subtotal: subtotal.replace("$", "").replace(",", ""),
    total: total.replace("$", "").replace(",", ""),
    shipping: shipping.replace("$", "").replace(",", ""),
    tax: tax.replace("$", "").replace(",", ""),
    savings: savings.replace("$", "").replace(",", ""),
  });

  // TDOD: empty cart of user

  const userRecord = await userModel.findOne({ email: user.email });

  if (userRecord) {
    userRecord.cart = []; // Update the cart property directly on the document object
    await userRecord.save(); // Use .save() to persist changes to MongoDB
  }

  // const userRecord = userModel.findOne({ email: user.email })
  // if (userRecord) {
  //   userRecord.cart = []
  //   userRecord.save()
  // }

  console.log("!!!!!!!!!completed", completed);
  res.status(200).json({ message: "Success!", completed: completed });
};

export default completedCreate;
