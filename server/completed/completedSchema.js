import mongoose from "mongoose";
const { Schema } = mongoose;

const completedSchema = new Schema({
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
  contactNumber: {
    type: String,
    default: "",
  },
  username: {
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
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    zip: Number,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  // products: [
  //   {
  //     id: String,
  //     img: String,
  //     name: String,
  //     text: String,
  //     type: String,
  //     size: [],
  //     color: [],
  //     quantity: Number,
  //     gender: String,
  //     price: Number,
  //   },
  // ],
  products: [],
  total: {
    type: Number,
    default: "",
  },
  tax: {
    type: Number,
    default: "",
  },
  subtotal: {
    type: Number,
    default: "",
  },
  savings: {
    type: Number,
    default: "",
  },
  shipping: {
    type: Number,
    default: "",
  },
});

export default completedSchema;
