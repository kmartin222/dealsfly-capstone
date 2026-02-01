import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import XClose from "../SVG/XClose";
import Stars from "../SVG/Stars";
import "animate.css";

const UpdateBlog = ({ blogId, setBlogs, blogs, setShowEditPage }) => {
  const navigate = useNavigate();

  const [blogForm, setBlogForm] = useState({
    id: "",
    stars: 0,
    author: "",
    title: "",
    body: "",
    date: new Date(),
    hidden: false,
  });

  useEffect(() => {
    const getBlog = async () => {
      const blogData = await axios.get(
        `${import.meta.env.VITE_NODE_SERVER}/blog/${blogId}`
      );
      setBlogForm({
        ...blogData.data[0],
        date: new Date(), //changing this updates the date to the correct time when updating the review
      });
    };
    getBlog();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    // console.log("handleUpdate");
    const updateBlog = await axios.put(
      `${import.meta.env.VITE_NODE_SERVER}/blog/${blogId}`,
      blogForm
    );
    // console.log(updateBlog);
    // console.log("blogForm", blogForm);
    if (updateBlog.data.success === true) {
      setBlogs(
        blogs.map((blog) => (blog.id === blogForm.id ? blogForm : blog))
      );
      setTimeout(() => {
        navigate("/reviews"); // Navigate back to main blog list
      }, 3000);
    }
    setShowEditPage(false);
  };

  return (
    <div
      id='review-modal'
      tabIndex='-1'
      aria-hidden='true'
      className={`fixed left-0 right-0 top-0 z-50 h-[calc(100%-1rem)] animate__animated animate__zoomIn mt-10 max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 antialiased `}
    >
      <div className='relative max-h-full mr-auto ml-auto w-1/2 p-4'>
        {/* <!-- Modal content --> */}
        <div className=' relative rounded-lg bg-white shadow border border-teal-300 dark:bg-neutral-800 '>
          {/* <!-- Modal header --> */}

          {/* <!-- Modal body --> */}
          <form className='p-4 md:p-5' onSubmit={handleUpdate}>
            <button
              onClick={() => setShowEditPage(false)}
              type='button'
              className='absolute right-5 top-5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-neutral-400 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-600 dark:hover:text-white'
              data-modal-toggle='review-modal'
            >
              <XClose />
              <span className='sr-only'>Close modal</span>
            </button>
            <div className='mb-4 grid grid-cols-2 gap-4'>
              {/* Stars */}
              <div className='flex items-center'>
                <Stars blogForm={blogForm} setBlogForm={setBlogForm} />
              </div>

              {/* Name */}
              <div className='col-span-2'>
                <label
                  htmlFor='title'
                  className='mb-2 block text-sm font-medium text-neutral-900 dark:text-white'
                >
                  Full Name
                </label>
                <input
                  value={blogForm.author}
                  onChange={(e) =>
                    setBlogForm({ ...blogForm, author: e.target.value })
                  }
                  type='text'
                  name='author'
                  id='author'
                  className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-yellow-500 focus:ring-yellow-300  dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-primary-500 dark:focus:ring-primary-500'
                  required=''
                />
              </div>

              {/* Review Title */}
              <div className='col-span-2'>
                <label
                  htmlFor='title'
                  className='mb-2 block text-sm font-medium text-neutral-900 dark:text-white'
                >
                  Review title
                </label>
                <input
                  value={blogForm.title}
                  onChange={(e) =>
                    setBlogForm({ ...blogForm, title: e.target.value })
                  }
                  type='text'
                  name='title'
                  id='title'
                  className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-yellow-500 focus:ring-yellow-300  dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-primary-500 dark:focus:ring-primary-500'
                  required=''
                />
              </div>

              {/* Review Description */}
              <div className='col-span-2'>
                <label
                  htmlFor='description'
                  className='mb-2 block text-sm font-medium text-neutral-900 dark:text-white'
                >
                  Review description
                </label>
                <textarea
                  value={blogForm.body}
                  onChange={(e) =>
                    setBlogForm({ ...blogForm, body: e.target.value })
                  }
                  id='body'
                  name='body'
                  rows='6'
                  className='mb-2 block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-yellow-500 focus:ring-yellow-300  dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-primary-500 dark:focus:ring-primary-500'
                  required
                ></textarea>

                <p className='ms-auto text-xs text-neutral-500 dark:text-neutral-400'>
                  Problems with the product or service?{" "}
                  <a
                    href='#'
                    className='text-primary-600 hover:underline dark:text-primary-500'
                  >
                    Send a report
                  </a>
                  .
                </p>
              </div>

              {/* Checkbox for terms and conditions */}
              <div className='col-span-2'>
                <div className='flex items-center'>
                  <input
                    required
                    id='review-checkbox'
                    type='checkbox'
                    value=''
                    className='h-4 w-4 rounded border-neutral-300 bg-neutral-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-neutral-600 dark:bg-neutral-700 dark:ring-offset-neutral-800 dark:focus:ring-primary-600'
                  />
                  <label
                    htmlFor='review-checkbox'
                    className='ms-2 text-sm font-medium text-neutral-500 dark:text-neutral-400'
                  >
                    By publishing this review you agree with the{" "}
                    <a
                      href='#'
                      className='text-primary-600 hover:underline dark:text-primary-500'
                    >
                      terms and conditions
                    </a>
                    .
                  </label>
                </div>
              </div>
            </div>
            <div className='border-t border-neutral-200 pt-4 dark:border-neutral-700 md:pt-5'>
              {/* Add Review Button */}
              <button
                type='submit'
                className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-neutral-900 focus:outline-none bg-white rounded-lg border border-black hover:bg-neutral-100 hover:text-neutral-700 focus:z-10 focus:ring-4 focus:ring-neutral-100 dark:focus:ring-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:border-neutral-600 dark:hover:text-white dark:hover:bg-neutral-700'
              >
                Update review
              </button>

              {/* Cancel Review Button*/}
              <button
                onClick={() => setShowEditPage(false)}
                type='button'
                data-modal-toggle='review-modal'
                className='text-neutral-900 hover:text-white border border-neutral-800 hover:bg-neutral-900 focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-neutral-600 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-600 dark:focus:ring-neutral-800'
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;
