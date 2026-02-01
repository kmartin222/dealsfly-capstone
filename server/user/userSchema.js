import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  username: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
  address: {
    street: String,
    street2: String,
    city: String,
    state: String,
    zip: Number,
  },
  token: {
    type: [String],
  },
  avatar: {
    type: String,
    default: "",
  },
  role: String,
  contactNumber: {
    type: String,
    default: "",
  },
  paymentMethod: {
    cardType: String,
    cardNumber: String,
    expirationDate: String,
    ccv: Number,
  },
  billingAddress: {
      street: String,
      street2: String,
      city: String,
      state: String,
      zip: Number,
  },
  voucher: [],
  cart: [],
  wishList: [],
});
export default userSchema;
