import axios from "axios";


const completedService = {
  completedGetMany: async () => {
    console.log("completed Get Many Service");
    const response = await axios.get(
      `${import.meta.env.VITE_NODE_SERVER}/completed`
    );
    console.log("response Service", response);
    //You were missing this line below
    return response
  },
  getEmail: async (email) => {
    console.log("email", email);
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER}/completed/email/${email}`,
      { headers: { "Content-Type": "application/json" } }
    );
  },
  completedGetOne: async (completedId) => {
    // console.log("completedService completedGetOne", completedId);
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER}/completed/${completedId}`,
      { headers: { "Content-Type": "application/json" } }
    );
  },
};

export default completedService;
