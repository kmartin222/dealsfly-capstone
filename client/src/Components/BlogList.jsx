import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Verified from "../SVG/Verified.jsx";
import DeleteBlog from "./DeleteBlog.jsx";
import Pen from "../SVG/Pen.jsx";
import Delete from "../SVG/Delete.jsx";
import UpdateBlog from "./UpdateBlog.jsx";
import StarList from "../SVG/StarList.jsx";

const BlogList = ({blogs, setBlogs}) => {
  const [showAreYouSure, setShowAreYouSure] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const [showEditPage, setShowEditPage] = useState(false);
  const [editId, setEditId] = useState("");


  const showConfirmation = (id) => {
    const selctedDelete = blogs.find((blog) => blog.id === id);
    if (selctedDelete != "") {
      setDeleteId(id);
      setShowAreYouSure(!showAreYouSure);
    }
  };

  const showEdit = (id) => {
    const selctedEdit = blogs.find((blog) => blog.id === id);
    if (selctedEdit != "") {
      setEditId(id);
      setShowEditPage(!showEditPage);
    }
  };
  console.log("blog", blogs)

  return (
    <>
      {showAreYouSure && (
        <DeleteBlog
          blogId={deleteId}
          setShowAreYouSure={setShowAreYouSure}
          blogs={blogs}
          setBlogs={setBlogs}
        />
      )}

      {showEditPage && (
        <UpdateBlog
          blogId={editId}
          setShowEditPage={setShowEditPage}
          blogs={blogs}
          setBlogs={setBlogs}
        />
      )}

      <div
        className='mt-20 divide-y-1 divide-solid divide-neutral-600'
        id='review'
      >
        {blogs.map((blog) => (
          <div className='gap-3 pb-4 pt-4 sm:flex sm:items-start ' key={blog.id}>
            <div className='shrink-0 space-y-2 sm:w-48 md:w-72'>
              <div className='flex items-center gap-0.5'>
                <StarList blog={blog} />
              </div>
              <div className='space-y-0.5'>
                <span className='text-base font-semibold text-neutral-900 dark:text-white'>
                  <div dangerouslySetInnerHTML={{ __html: blog.author }} />
                </span>
                <p className='text-sm font-normal text-neutral-500 dark:text-neutral-400'>
                  {new Date(blog.date).toLocaleString("en-US")}
                </p>
              </div>
              <Verified />
            </div>

            <div className='mt-4 min-w-0 flex-1 space-y-4 sm:mt-0'>
              <span className='text-2xl text-base font-normal text-neutral-800 dark:text-neutral-400'>
                <h6>
                  <div
                    className='title font-bold mb-3 text-teal-500'
                    dangerouslySetInnerHTML={{ __html: blog.title }}
                  />
                </h6>

                <div dangerouslySetInnerHTML={{ __html: blog.body }} />
              </span>
              {blog.email === user.email ? ( // ternary operator checks if conditions are met
                // Display edit and delete buttons IF: 1) isLoggedIn, 2) User's first & last name match author's

                <div className='inline-flex mt-5 space-x-5'>
                  <button
                    onClick={() => showEdit(blog.id)}
                    className='edit text-blue-300'
                    id='edit'
                    type='button'
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => showConfirmation(blog.id)}
                    className='edit text-red-300 border-amber-100 hover:text-underlined'
                    id='delete'
                    type='button'
                    data-modal-toggle='review-modal'
                  >
                    Delete
                    <span className='sr-only'>Close modal</span>
                  </button>
                </div>
              ) : (
                // If any of the conditions are false, show nothing
                <p></p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogList;
