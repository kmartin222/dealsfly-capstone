import { useState, useEffect } from "react";
import axios from "axios";
import XClose from "../SVG/XClose";
import ExclimationPoint from "../SVG/ExclimationPoint";

const DeleteBlog = ({ blogId, setShowAreYouSure, blogs, setBlogs }) => {
  
  const [blogForm, setBlogForm] = useState({
    id: "",
    author: "",
    email: "",
    title: "",
    body: "",
    date: new Date,
    hidden: false,
  });

  useEffect(() => {
    const getBlog = async () => {
      const blogData = await axios.get(
        `${import.meta.env.VITE_NODE_SERVER}/blog/${blogId}`
      );
      setBlogForm({
        ...blogData.data[0],
        date: blogData.data[0].date.split("T")[0],
      });
    };
    getBlog();
  }, []);

  const handleDelete = async () => {
    // console.log("handleSubmit");
    const deleteBlog = await axios.delete(
      `${import.meta.env.VITE_NODE_SERVER}/blog/${blogId}`
    );
    if (deleteBlog.data.success) {
      setBlogs(blogs.filter((blog) => blog.id !== blogId));
      setShowAreYouSure(false);
    }
  };

  return (
    <>
      <div
        id="popup-modal"
        tabIndex="-1"
        className="overflow-y-auto overflow-x-hidden fixed top-8 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-neutral-700">
            <button
              onClick={() => setShowAreYouSure(false)}
              type="button"
              className="absolute top-3 end-2.5 text-neutral-400 bg-transparent hover:bg-neutral-200 hover:text-neutral-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-neutral-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
            >
              <XClose />
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
              <ExclimationPoint />
              <h3 className="mb-5 text-lg font-normal text-neutral-500 dark:text-neutral-400">
                Are you sure you want to delete this review?
              </h3>
              <button
                onClick={() => handleDelete()}
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                Yes, I'm sure
              </button>
              <button
                onClick={() => setShowAreYouSure(false)}
                data-modal-hide="popup-modal"
                type="button"
                className="py-2.5 px-4 ms-4 text-sm font-medium text-neutral-900 focus:outline-none bg-white rounded-lg border border-neutral-200 hover:bg-neutral-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-neutral-100 dark:focus:ring-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:border-neutral-600 dark:hover:text-white dark:hover:bg-neutral-700"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteBlog;
