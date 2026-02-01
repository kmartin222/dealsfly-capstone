import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../auth/authSlice";
import { getCart, addToCart, removeFromCart } from "../redux/cartSlice";
import ShoppingBag from "../SVG/ShoppingBag";
import ButterflyLogo from "../SVG/ButterflyLogo";
import SignInModel from "./SignInModel";
import CreateAccount from "../Pages/CreateAccount";
import CartModal from "./CartModal";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [showCartModel, setShowCartModel] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const location = useLocation;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Navbar user", user);
    if (user?.id) {
      dispatch(getCart(user.id));
    }
  }, [user]);

  useEffect(() => {
    console.log("Navbar cart", cart, cart.length);
    console.log(
      "Navbar cart reduce",
      // cart.map((item) => item.quantity) //.reduce((acc, num) => num + acc)
      cart.length == 0
        ? 0
        : cart.map((item) => item.quantity).reduce((acc, num) => num + acc)
    );
  }, [cart]);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    console.log("handleLogout token", token);
    if (token) {
      console.log("handleLogout token if", token);
      const logoutToken = token.split(",")[0];
      console.log("handleLogout token if logoutToken", logoutToken);
      dispatch(logout(logoutToken));
      navigate("/");
    }
  };

  return (
    <>
      <nav className='  dark:bg-teal-700 w-screen'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen  p-1'>
          {/* <img
              src='https://flowbite.com/docs/images/logo.svg'
              className='h-8'
              alt='Flowbite Logo'
            /> */}
          <span className='self-center ml-3 flex flex-row  text-2xl font-semibold whitespace-nowrap dark:text-white'>
            <form className='max-w-sm mx-auto'>
              <label htmlFor='underline_select ' className='sr-only'>
                Underline select
              </label>
              {/* <div className=" inline-flex">
               <DownArrow/></div> */}
              <select
                id='underline_select'
                className='block py-1 px-2 w-full text-sm bg-teal-700 border-0  text-whilte focus:outline-none focus:ring-0  peer'
              >
                <option defaultValue>USA</option>
                <option value='MX'>MEX</option>
                <option value='CA'>CAN</option>
                <option value='FR'>FRA</option>
                <option value='DE'>GER</option>
              </select>
            </form>
          </span>
          {!isLoggedIn ? (
            <div className='ml-auto mr-auto text-neutral-200 font-bold'>
              Get free delivery on orders over $100
            </div>
          ) : (
            <div className='ml-auto mr-auto text-neutral-200 font-bold'>
              Welcome back, {user.firstName} {user.lastName}
            </div>
          )}
          {showLogin && <SignInModel setShowLogin={setShowLogin} />}
          <div className='flex items-center divide-x-1 divide-solid divide-gray-300 space-x-5 rtl:space-x-reverse'>
            <div>
              {!isLoggedIn ? (
                <button
                  onClick={() => setShowLogin(true)}
                  type='button'
                  className='text-sm mr-5  text-gray-500 dark:text-white hover:underline'
                >
                  Sign In
                </button>
              ) : (
                <button
                  to='/'
                  type='button'
                  onClick={handleLogout}
                  className={` ${
                    location.pathname === "/logout"
                      ? "text-red-600"
                      : "text-black"
                  }  text-sm mr-5  text-gray-500 dark:text-white hover:underline `}
                >
                  Logout
                </button>
              )}
            </div>
            <div className='mr-3'>
              {showCreateAccount && (
                <CreateAccount setShowCreateAccount={setShowCreateAccount} />
              )}
              {!isLoggedIn ? (
                <button
                  onClick={() => setShowCreateAccount(true)}
                  type='button'
                  className='text-sm mr-5  text-gray-500 dark:text-white hover:underline'
                >
                  Create Account
                </button>
              ) : (
                <NavLink to={`/profile/${user.id}`}>
                  <button
                    // onClick={() => setShowCreateAccount(true)}
                    type='button'
                    className='text-sm mr-5  text-gray-500 dark:text-white hover:underline'
                  >
                    View Profile
                  </button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>

      <nav className=' dark:bg-neutral-900 w-screen'>
        <div className='max-w-screen px-4 py-4 mx-auto'>
          <div className='flex items-center'>
            <NavLink to='/'>
              <div className='text-white ml-3 font-medium'>
                <ButterflyLogo />
              </div>
            </NavLink>
            <ul className='flex flex-row ml-6  mr-auto font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm'>
              <NavLink to='/women'>
                <li>
                  <span
                    className='text-gray-900 dark:text-white hover:underline'
                    aria-current='page'
                  >
                    Woman
                  </span>
                </li>
              </NavLink>
              <NavLink to='/men'>
                <li>
                  <span className='text-gray-900 dark:text-white hover:underline'>
                    Men
                  </span>
                </li>
              </NavLink>
              <NavLink to='/company'>
                <li>
                  <span className='text-gray-900 dark:text-white hover:underline'>
                    Company
                  </span>
                </li>
              </NavLink>
              <NavLink to='/reviews'>
                <li>
                  <span className='text-gray-900 dark:text-white hover:underline'>
                    Reviews
                  </span>
                </li>
              </NavLink>
            </ul>
            <div className='flex items-center mr-3 font-semibold space-x-6 rtl:space-x-reverse'>
              {/* <a className='text-sm   dark:text-white hover:underline'>
                Search
              </a> */}
              <NavLink to='/contact'>
                <span className='text-sm divide-x-1 divide-solid divide-gray-200 text-white  hover:underline'>
                  FAQ's
                </span>
              </NavLink>
              {showCartModel && (
                <CartModal setShowCartModel={setShowCartModel} />
              )}
              {!isLoggedIn ? (
                <span></span>
              ) : (
                //  <NavLink to='/cart-preview'>
                <button
                  onClick={() => setShowCartModel(true)}
                  type='button'
                  className='text-sm flex flex-row mr-2 text-white  hover:underline'
                >
                  <ShoppingBag />
                  {cart.length == 0
                    ? 0
                    : cart
                        .map((item) => item.quantity)
                        .reduce((acc, num) => num + acc)}
                </button>
                // </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
