import express from "express";
import cartGetOne from "./cartGetOne.js";
import cartUpdate from "./cartUpdate.js";
// import cartDelete from "./cartDelete.js";
// import cartGetMany from "./cartGetMany.js"

const cartRouter = express.Router();
// Read Cart
cartRouter.get("/:userId", cartGetOne);
// Create cart API
cartRouter.put("/:userId", cartUpdate);
// Delete one Cart
// cartRouter.delete("/:userId", cartDelete)
// Read all carts
// cartRouter.get("/", cartGetMany)
// Get one
// cartRouter.get("/details/:id", cartGetOne)

export default cartRouter;
