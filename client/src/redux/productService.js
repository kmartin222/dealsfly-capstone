import axios from "axios";

const productService = {
  addProduct: async (
    id,
    img,
    name,
    text,
    type,
    size,
    color,
    gender,
    price,
  ) => {
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER}/product/addProduct`,
      {
    id,
    img,
    name,
    text,
    type,
    size,
    color,
    gender,
    price,
      },
      { headers: { "Content-Type": "application/json" } }
    );
  },
  productCreate: async (product) => {
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER}/product`,
      product
    );
  },
  productGetMany: async () => {
    return await axios.get(`${import.meta.env.VITE_NODE_SERVER}/product`);
  },
  productGetAll: async () => {
    return await axios.get(`${import.meta.env.VITE_NODE_SERVER}/product`);
  },
  productGetOne: async (id) => {
    console.log("serviceID", id);
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER}/product/details/${id}`
    );
  },
  productDelete: async (id) => {
    console.log("id", id);
    return await axios.delete(
      `${import.meta.env.VITE_NODE_SERVER}/product/${id}`,
      { headers: { "Content-Type": "application/json" } }
    );
  },
  productUpdate: async (product) => {
    console.log("product", product);
    return await axios.put(
      `${import.meta.env.VITE_NODE_SERVER}/product/update/${product.id}`,
      product,
      { headers: { "Content-Type": "application/json" } }
    );
  },
};

export default productService;
