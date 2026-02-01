import axios from "axios";

const cartService = {
  getCart: async (userId) => {
    console.log("cartService getCart", userId);
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER}/cart/${userId}`,
      { headers: { "Content-Type": "application/json" } }
    );
  },
  addToCart: async (userId, product) => {
    // console.log("cartService addToCart", userId, product);
    return await axios.put(
      `${import.meta.env.VITE_NODE_SERVER}/cart/${userId}`,
      {
        userId,
        product,
      },
      { headers: { "Content-Type": "application/json" } }
    );
  },
  removeFromCart: async (userId, product) => {
    // console.log("cartService removeFromCart", userId, product);
    try {
      return await axios.put(
        `${import.meta.env.VITE_NODE_SERVER}/cart/${userId}`,
        {
          product,
        },
        { headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      console.error("Error removing from cart:", error); // Log the error for debugging
      throw new Error("Failed to remove item from cart."); // Re-throw an error for Redux handling
    }
  },

  checkout: async (user, shippingAddress, subtotal, total, tax, savings, shipping, testCart) => {
    console.log(
      "cartService checkout",
      user,
      shippingAddress,
      subtotal,
      total,
      tax,
      savings,
      shipping,
      testCart
    );
    const response = await axios.post(
      `${import.meta.env.VITE_NODE_SERVER}/completed`,
      {
        user,
        shippingAddress,
        subtotal,
        total,
        tax,
        savings,
        shipping,
        testCart,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    console.log("CART SERVICE RESPONSE", response)
    return response
  },

  // removeFromCart: async (userId, product) => {
  //   console.log("cartService", userId, product);
  //   return await axios.delete(
  //     `${import.meta.env.VITE_NODE_SERVER}/cart/${userId}`,
  //     {
  //       userId,
  //       product,
  //     },
  //     { headers: { "Content-Type": "application/json" } }
  //   );
  // },
  // cartCreate: async (cart) => {
  //   return await axios.post(
  //     `${import.meta.env.VITE_NODE_SERVER}/cart`,
  //     cart
  //   );
  // },
  // cartGetMany: async () => {
  //   return await axios.get(`${import.meta.env.VITE_NODE_SERVER}/cart`);
  // },
  // cartGetAll: async () => {
  //   return await axios.get(`${import.meta.env.VITE_NODE_SERVER}/cart`);
  // },
  // cartGetOne: async (id) => {
  //   console.log("serviceID", id);
  //   return await axios.get(
  //     `${import.meta.env.VITE_NODE_SERVER}/cart/details/${id}`
  //   );
  // },
  // cartUpdate: async (cart) => {
  //   console.log("cart", cart);
  //   return await axios.put(
  //     `${import.meta.env.VITE_NODE_SERVER}/cart/update/${cart.id}`,
  //     cart,
  //     { headers: { "Content-Type": "application/json" } }
  //   );
  // },
};

export default cartService;
