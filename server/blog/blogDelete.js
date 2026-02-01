import blogModel from "./blogModel.js";

const blogDelete = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  // Validation goes here
  const blog = await blogModel.findByIdAndDelete({ _id: id });
  console.log("blog", blog);
  res.status(200).json({ success: true });
};

export default blogDelete;
