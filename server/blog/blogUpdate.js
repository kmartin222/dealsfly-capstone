import blogModel from "./blogModel.js";

const blogUpdate = async (req, res) => {
  const { id } = req.params;
  const {
    stars,
    title,
    author,
    email,
    body,
    comments,
    date,
    hidden,
    meta = { votes: 0, favs: 0 },
  } = req.body;
 
  // Validation goes here
  const blog = await blogModel.findByIdAndUpdate(
    { _id: id },
    { stars, title, author, email, body, comments, date, hidden, meta }
  );
  console.log("blogUpdate blog", blog);
  res.status(200).json({ success: true, blog: blog });
};

export default blogUpdate;
