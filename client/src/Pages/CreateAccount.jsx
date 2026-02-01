import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../auth/authSlice";
import Newsletter from "../Components/Newsletter";
import CreateHeader from "../Components/CreateHeader";
import "animate.css";

const CreateAccount = ({ setShowCreateAccount }) => {
  const dispatch = useDispatch();
  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: {
      street: "",
      street2: "",
      city: "",
      state: "",
      zip: null,
    },
    paymentMethod: {
      cardType: " ",
      cardNumber: " ",
      expirationDate: " ",
      ccv: null,
    },
    billingAddress: {
      street: " ",
      street2: " ",
      city: " ",
      state: " ",
      zip: null,
    },
    contactNumber: "",
    role: "User",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    if (signupForm.email === "" || signupForm.password === "") {
      console.log("handleSubmit if");
      //show some error message
    } else {
      console.log("handleSubmit else");
      dispatch(addUser({ ...signupForm }));
    }
    setShowCreateAccount(false);
  };
  return (
    <>
      {/* <!-- Main modal --> */}
      <div
        id='review-modal'
        tabIndex='-1'
        // aria-hidden='true'
        className={`fixed left-0 right-0 top-0 z-50 h-[calc(100%-1rem)] animate__animated animate__zoomIn max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 antialiased `}
      >
        <div className='relative max-h-full w-1/2  mr-auto ml-auto  p-4'>
          {/* <!-- Modal content --> */}

          <div className='relative p-4 bg-white rounded-lg border-3 border-teal-300 shadow dark:bg-neutral-900 sm:p-5'>
            {/* <!-- Modal header --> */}
            <button
              onClick={() => setShowCreateAccount(false)}
              type='button'
              className='text-neutral-400 bg-transparent hover:bg-neutral-200  hover:text-neutral-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-neutral-600 dark:hover:text-white'
              data-modal-toggle='defaultModal'
            >
              <svg
                // aria-hidden='true'
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <span className='sr-only'>Close modal</span>
            </button>

            <div className='flex justify-between items-center overflow-hidden  rounded-t -mb-28 dark:border-neutral-600'>
              <h3 className='text-lg font-semibold -mb-7 text-neutral-900 dark:text-white'>
                <CreateHeader />
              </h3>
            </div>
            {/* <!-- Modal body --> */}

            <form onSubmit={handleSubmit} className='max-w-full mt-25 mx-auto'>
              <div className='grid md:grid-cols-2 md:gap-6'>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    value={signupForm.firstName}
                    onChange={(e) =>
                      setSignupForm({
                        ...signupForm,
                        firstName: e.target.value,
                      })
                    }
                    type='text'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-sky-300 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-sky-600 peer'
                    placeholder=' '
                    required
                  />
                  <label
                    htmlFor='floating_first_name'
                    className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-sky-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    First Name
                  </label>
                </div>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    value={signupForm.lastName}
                    onChange={(e) =>
                      setSignupForm({ ...signupForm, lastName: e.target.value })
                    }
                    type='text'
                    name='floating_last_name'
                    id='floating_last_name'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-sky-300 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-sky-600 peer'
                    placeholder=' '
                    required
                  />
                  <label
                    htmlFor='floating_last_name'
                    className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-sky-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Last Name
                  </label>
                </div>
              </div>
              <div className='relative z-0 w-full mb-5 group'>
                <input
                  value={signupForm.email}
                  onChange={(e) =>
                    setSignupForm({ ...signupForm, email: e.target.value })
                  }
                  type='email'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-sky-300 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-sky-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='floating_email'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Email address
                </label>
              </div>
              <div className='relative z-0 w-full mb-5 group'>
                <input
                  value={signupForm.password}
                  onChange={(e) =>
                    setSignupForm({ ...signupForm, password: e.target.value })
                  }
                  type='text'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-sky-300 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-sky-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='floating_password'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-sky-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Password
                </label>
              </div>
              <div className='relative z-0 w-full mb-5 group'>
                <input
                  value={signupForm.address.street}
                  onChange={(e) =>
                    setSignupForm((previous) => ({
                      ...previous,
                      address: { ...previous.address, street: e.target.value },
                    }))
                  }
                  type='text'
                  //
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-sky-300 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-sky-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='floating_repeat_password'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-sky-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Street Address
                </label>
              </div>
              <div className='grid md:grid-cols-2 md:gap-6'>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    value={signupForm.address.city}
                    onChange={(e) =>
                      setSignupForm((previous) => ({
                        ...previous,
                        address: { ...previous.address, city: e.target.value },
                      }))
                    }
                    type='text'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-sky-300 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-sky-600 peer'
                    placeholder=' '
                    required
                  />
                  <label
                    htmlFor='floating_first_name'
                    className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-sky-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    City
                  </label>
                </div>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    value={signupForm.address.state}
                    onChange={(e) =>
                      setSignupForm((previous) => ({
                        ...previous,
                        address: { ...previous.address, state: e.target.value },
                      }))
                    }
                    type='text'
                    name='floating_address_state'
                    id='floating_address_state'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-sky-300 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-sky-600 peer'
                    placeholder=' '
                    required
                  />
                  <label
                    htmlFor='floating_address_state'
                    className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-sky-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    State
                  </label>
                </div>
              </div>
              <div className='grid md:grid-cols-2 md:gap-6'>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    value={signupForm.address.street2}
                    onChange={(e) =>
                      setSignupForm((previous) => ({
                        ...previous,
                        address: {
                          ...previous.address,
                          street2: e.target.value,
                        },
                      }))
                    }
                    type='text'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-sky-300 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-sky-600 peer'
                    placeholder=' '
                  />
                  <label
                    htmlFor='floating_address_street2'
                    className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-sky-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Apt/Condo
                  </label>
                </div>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    value={signupForm.address.zip}
                    onChange={(e) =>
                      setSignupForm((previous) => ({
                        ...previous,
                        address: {
                          ...previous.address,
                          zip: e.target.value,
                        },
                      }))
                    }
                    type='text'
                    name='floating_address_zip'
                    id='floating_address_zip'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-sky-300 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-sky-600 peer'
                    placeholder=' '
                    required
                  />
                  <label
                    htmlFor='floating_address_zip'
                    className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-sky-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Zip
                  </label>
                </div>
              </div>

              <div className='grid md:grid-cols-2 md:gap-6'>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    value={signupForm.contactNumber}
                    onChange={(e) =>
                      setSignupForm({
                        ...signupForm,
                        contactNumber: e.target.value,
                      })
                    }
                    type='tel'
                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    name='floating_phone'
                    id='floating_phone'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-sky-300 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-sky-600 peer'
                    placeholder=' '
                    required
                  />
                  <label
                    htmlFor='floating_phone'
                    className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-sky-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Phone number (123-456-7890)
                  </label>
                </div>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    type='text'
                    name='floating_company'
                    id='floating_company'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-sky-300 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-sky-600 peer'
                    placeholder=' '
                    required
                  />
                  <label
                    htmlFor='floating_company'
                    className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-sky-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Company (Ex. Google)
                  </label>
                </div>
              </div>
              <button
                type='submit'
                className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm w-full sm:w-auto px-20 mt-2 py-2.5 text-center '
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
