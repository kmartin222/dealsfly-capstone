import blogModel from "./blogModel.js"

const blogCreate = async (req, res) => {
    const { stars, title, author, email, body, comments, date, hidden, meta } = req.body;
    // Validation goes here
  const blog = await blogModel.create({
      stars,
      title,
    author,
      email,
      body,
      comments,
      date,
      hidden,
      meta,
    });
    console.log("blog", blog)
  res.status(200).json({ "success": true, "blog": blog });
};


export default blogCreate;
