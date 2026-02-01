import axios from "axios";

const authService = {
  login: async (email, password) => {
    console.log("authService before Post");
    return await axios.post(`${import.meta.env.VITE_NODE_SERVER}/users/login`, {
      email,
      password,
    });
  },
  checkLogin: async (token) => {
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER}/users/me/${token}`
    );
  },
  logout: async (token) => {
    console.log("logout Service");
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER}/users/logout/${token}`
    );
  },
  updateUserWishList: async (userId, item) => {
    return await axios.put(
      `${import.meta.env.VITE_NODE_SERVER}/users/wishlist/${userId}`,
      item,
      { headers: { "Content-Type": "application/json" } }
    );
  },
  updateUserCart: async (userId, item) => {
    return await axios.put(
      `${import.meta.env.VITE_NODE_SERVER}/users/cart/${userId}`,
      item,
      { headers: { "Content-Type": "application/json" } }
    );
  },
  // updateUser: async (id) => {
  //   return await axios.put(
  //     `${import.meta.env.VITE_NODE_SERVER}/user/${id}`,
  //     { headers: { "Content-Type": "application/json" } }
  //   );
  // },
  userUpdate: async (userForm) => {
    console.log("userService", userForm);
    const { id } = userForm;
    console.log("id ", id);
    const response = await axios.put(
      `${import.meta.env.VITE_NODE_SERVER}/users/update/${id}`,
      userForm,
      { headers: { "Content-Type": "application/json" } }
    );
    console.log("authService respose", response);
    return response;
  },
  userGetOne: async (id) => {
    console.log("serviceID", id);
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER}/users/details/${id}`
    );
  },
  addUser: async (
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
    wishList
  ) => {
    return axios.post(
      `${import.meta.env.VITE_NODE_SERVER}/users`,
      {
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
      },
      { headers: { "Content-Type": "application/json" } }
    );
  },
};

export default authService;
