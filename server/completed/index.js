import express from "express";
import completedCreate from "./completedCreate.js";
import completedGetOne from "./completedGetOne.js";
import completedGetMany from "./completedGetMany.js";
import completedGetManyByEmail from "./completedGetManyByEmail.js";

const completedRouter = express.Router();

// Create completed API
completedRouter.post("/", completedCreate);
// Read all products
completedRouter.get("/", completedGetMany)
// Get one by id
completedRouter.get("/:completedId", completedGetOne);
completedRouter.get("/email/:email", completedGetManyByEmail);

export default completedRouter;
