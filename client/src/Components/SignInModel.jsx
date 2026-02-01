import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../auth/authSlice.js";
import "animate.css";
// import { isLoggedIn } from "../auth/authSlice.js";

const SignInModel = ({ setShowLogin }) => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoggedIn, user } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  // useEffect(() => {
  //   if (isLoggedIn && user.token) {
  //     navigate("/");
  //   }
  // }, [isLoggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginForm.email === "" || loginForm.password === "") {
      //show some error message
    } else {
      dispatch(login({ ...loginForm }));
      setShowLogin(false);
    }
  };

  return (
    <>
      <div className=' p-4 w-full animate__animated animate__fadeInDown absolute z-50 ml-330 mt-109 float-right max-w-md max-h-full'>
        {/* <!-- Modal content --> */}
        <div className=' rounded-lg border-3   border-teal-300 bg-neutral-800 '>
          {/* <!-- Modal header --> */}
          <div className='flex items-center  justify-between p-4 md:p-5 border-b rounded-t border-teal-700 '>
            <h3 className='text-xl font-semibold text-white '>
              
              Sign in to Deals Fly
            </h3>
            <button
              onClick={() => setShowLogin(false)}
              type='button'
              className='end-2.5 text-white bg-transparent hover:bg-neutral-200 hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-neutral-600 hover:'
              data-modal-hide='authentication-modal'
            >
              <svg
                className='w-3 h-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                />
              </svg>
              <span className='sr-only'>Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className='p-4 md:p-5'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-white '
                >
                  Your email
                </label>
                <input
                  value={loginForm.email}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, email: e.target.value })
                  }
                  type='email'
                  name='email'
                  id='email'
                  className=' border border-teal-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-neutral-600 border-neutral-500 placeholder-neutral-400 '
                  placeholder='name@company.com'
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-white '
                >
                  Your password
                </label>
                <input
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                  type='password'
                  name='password'
                  id='password'
                  placeholder='••••••••'
                  className=' border border-teal-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-neutral-600 border-neutral-500 placeholder-neutral-400 '
                  required={true}
                />
              </div>
              <div className='flex justify-between'>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      id='remember'
                      type='checkbox'
                      value=''
                      className='w-4 h-4 border border-teal-300 rounded-sm  focus:ring-3 focus:ring-blue-300 bg-neutral-600 border-neutral-500 focus:ring-blue-600 ring-offset-neutral-800 focus:ring-offset-neutral-800'
                    />
                  </div>
                  <label
                    htmlFor='remember'
                    className='ms-2 text-sm font-medium text-white '
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href='#'
                  className='text-sm text-teal-400 hover:underline text-blue-500'
                >
                  Lost Password?
                </a>
              </div>

              <button
                // onClick={() => setShowLogin(false)}
                type='submit'
                className='w-full  bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800'
              >
                Login to your account
              </button>
              <div className='text-sm font-medium text-neutral-500 '>
                Not registered?{" "}
                <a
                  href='#'
                  className='text-teal-400 hover:underline text-blue-500'
                >
                  Create account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default SignInModel;
