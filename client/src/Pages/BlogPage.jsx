import { useState, useEffect } from "react";
import axios from "axios";
import MultiStars from "../SVG/MultiStars.jsx";
import ReviewModal from "../components/ReviewModal.jsx";
import BlogList from "../Components/BlogList.jsx";
import RatingsBar from "../SVG/RatingsBar.jsx";

const BlogPage = () => {
  const [showModal, setShowModal] = useState(false);
  //  const [blogs, setBlogs] = useState([]);
  const [blogs, setBlogs] = useState([].reverse());
  const [blog, setBlog] = useState({
    title: "",
    author: "",
    body: "",
    comments: [],
    date: "",
    hidden: false,
  });

  useEffect(() => {
    const getBlogs = async () => {
      const blogData = await axios.get(
        `${import.meta.env.VITE_NODE_SERVER}/blog`
      );
      // console.log("blogData", blogData);
      console.log(
        "App blogData.data.blogs.reverse()",
        blogData.data.blogs.reverse()
      );
      setBlogs(blogData.data.blogs);
    };
    getBlogs();
  }, []);

      // useEffect(() => {
      //   window.scrollTo({ top: 0, behavior: "smooth" });
      // }, [useLocation()]);

  return (
    <>
      <section className='py-8 antialiased ml-20 mr-20 md:py-16'>
        <div className='mx-auto bg-neutral-900 max-w-screen  p-14 4xl:px-15'>
          <div className='flex items-center gap-2'>
            <h1 className='text-2xl font-semibold  text-neutral-900 dark:text-white'>
              Reviews
            </h1>

            <div className='mt-2 flex items-center gap-2 sm:mt-0'>
              <div className='flex items-center gap-0.5'>
                <MultiStars />
              </div>
              <p className='text-sm font-medium leading-none text-neutral-500 dark:text-neutral-400'>
                (4.6)
              </p>
              <a
                href='#'
                className='text-sm font-medium leading-none text-neutral-900 underline hover:no-underline dark:text-white'
              >
                {" "}
                645 Reviews{" "}
              </a>
            </div>
          </div>

          <div className='my-6 gap-8 sm:flex sm:items-start md:my-8'>
            <div className='shrink-0 space-y-4'>
              <p className='text-2xl font-semibold leading-none text-neutral-900 dark:text-white'>
                4.65 out of 5
              </p>

              {/* Write a review Button */}
              <button
                id='writeReview'
                onClick={() => setShowModal(!showModal)}
                type='button'
                data-modal-target='review-modal'
                data-modal-toggle='review-modal'
                className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-neutral-900 focus:outline-none bg-white rounded-lg border border-black hover:bg-neutral-100 hover:text-neutral-700 focus:z-10 focus:ring-4 focus:ring-neutral-100 dark:focus:ring-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:border-neutral-600 dark:hover:text-white dark:hover:bg-neutral-700 '
              >
                Write a review
              </button>
            </div>
            <RatingsBar />
          </div>

          <BlogList blogs={blogs} setBlogs={setBlogs} />
        </div>
      </section>

      {showModal && (
        <ReviewModal
          setShowModal={setShowModal}
          blogs={blogs}
          setBlogs={setBlogs}
        />
      )}
    </>
  );
};

export default BlogPage;
