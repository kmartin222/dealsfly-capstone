import mongoose from "mongoose";
import completedModel from "./completedModel.js";

const completedGetManyByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const completeds = await completedModel.find({ email });
    res.status(200).json({ success: true, completeds: completeds });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export default completedGetManyByEmail;
