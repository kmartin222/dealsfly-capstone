import { useEffect, useState } from "react";
import { getCart, addToCart, removeFromCart } from "../redux/cartSlice";
import { useNavigate, Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import "animate.css";

const CartModal = ({ setShowCartModel }) => {
  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const [subtotal, setSubtotal] = useState(0.0);
  const [shippingTotal, setShippingTotal] = useState(0.0);
  const [cartTax, setCartTax] = useState(0.0);
  const [finalTotal, setFinalTotal] = useState(0.0);
  const [savingsTotal, setSavingsTotal] = useState(0.0);

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  useEffect(() => {
    console.log("user", user);
    if (user.id) {
      dispatch(getCart(user.id));
    }
  }, [user]);

  const dispatch = useDispatch();
  useEffect(() => {
    const calculateCartTotal = () => {
      let cartTotal = 0;
      let shipping = 0;
      let tax = 0;
      let savings = 0;
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      cart.forEach((item) => {
        cartTotal += item.quantity * item.price;
      });
      shipping = cartTotal >= 100 ? 0 : cartTotal * 0.1;
      tax = cartTotal * 0.06;
      savings = cartTotal <= 100 ? shippingTotal : 0;
      setSubtotal(formatter.format(cartTotal));
      setShippingTotal(formatter.format(shipping));
      setCartTax(formatter.format(cartTotal * 0.09));
      setSavingsTotal(formatter.format(savings));
      setFinalTotal(formatter.format(cartTotal + tax + shipping));
    };
    calculateCartTotal();
  }, [cart]);

  return (
    <div
      className='relative z-10 t'
      aria-labelledby='slide-over-title'
      role='dialog'
      aria-modal='true'
    >
      <div
        className='fixed inset-0 bg-gray-500/75 transition-opacity animate__animated animate__fadeInRight'
        aria-hidden='true'
      ></div>

      <div className='fixed inset-0 overflow-hidden animate__animated animate__fadeInRight'>
        <div className='absolute inset-0  overflow-hidden'>
          <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
            <div className='pointer-events-auto w-screen max-w-md '>
              <div className='flex  h-full flex-col overflow-y-scroll bg-neutral-300 shadow-xl'>
                <div className='flex-1  overflow-y-auto px-4 py-6 sm:px-6'>
                  <div className='flex  items-start  justify-between'>
                    <div className=' '>
                      <h2
                        className='text-lg font-medium  text-gray-900'
                        id='slide-over-title'
                      >
                        Shopping cart
                      </h2>
                    </div>
                    <div className='ml-3 flex  h-7 items-center'>
                      <button
                        onClick={() => setShowCartModel(false)}
                        type='button'
                        className='relative -m-2 p-2 text-gray-400 hover:text-gray-500'
                      >
                        <span className='absolute -inset-0.5'></span>
                        <span className='sr-only'>Close panel</span>
                        <svg
                          className='size-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          aria-hidden='true'
                          data-slot='icon'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M6 18 18 6M6 6l12 12'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className='mt-8 divide-y divide-gray-900'>
                    <div className='flow-root '>
                      <ul role='list' className='-my-6 '>
                        {cart.map((item, index) => (
                          <li className='flex py-6'>
                            <div className='size-24 shrink-0 overflow-hidden rounded-md border border-gray-200'>
                              <img
                                src={
                                  new URL(
                                    `../Images/${item.img}`,
                                    import.meta.url
                                  ).href
                                }
                                alt={item.name}
                                className='size-full object-cover'
                              />
                            </div>

                            <div className='ml-4 flex flex-1 flex-col'>
                              <div>
                                <div className='flex justify-between text-base font-medium text-gray-900'>
                                  <h3>
                                    <a href='#'>{item.name}</a>
                                  </h3>
                                  <p className='ml-4 text-black'>
                                    ${item.price}
                                  </p>
                                </div>
                                <p className='mt-1 text-sm text-gray-500'>
                                  {item.size[0]}
                                </p>
                              </div>
                              <div className='flex flex-1 items-end justify-between text-sm'>
                                {/* TODO: Make Quanity a dropdown option */}
                                <p className='text-gray-500'>
                                  <label
                                    htmlFor='counter-input'
                                    className='block mb-1 text-sm font-medium text-gray-900 '
                                  >
                                    Choose quantity:
                                  </label>
                                  <div className='relative flex items-center'>
                                    <button
                                      onClick={() =>
                                        dispatch(
                                          removeFromCart({
                                            userId: user.id,
                                            product: {
                                              ...item,
                                              quantity: item.quantity - 1,
                                            },
                                          })
                                        )
                                      }
                                      type='button'
                                      id='decrement-button'
                                      data-input-counter-decrement='counter-input'
                                      className='shrink-0 bg-gray-100  dark:hover:bg-teal-600  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                                    >
                                      <svg
                                        className='w-2.5 h-2.5 text-gray-900 '
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 18 2'
                                      >
                                        <path
                                          stroke='currentColor'
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                          strokeWidth='2'
                                          d='M1 1h16'
                                        />
                                      </svg>
                                    </button>
                                    <input
                                      type='text'
                                      id='counter-input'
                                      data-input-counter
                                      className='shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center'
                                      placeholder=''
                                      value={item.quantity}
                                      required
                                    />
                                    <button
                                      onClick={() =>
                                        dispatch(
                                          addToCart({
                                            userId: user.id,
                                            product: {
                                              ...item,
                                              quantity: item.quantity + 1,
                                            },
                                          })
                                        )
                                      }
                                      type='button'
                                      id='increment-button'
                                      data-input-counter-increment='counter-input'
                                      className='shrink-0 bg-gray-100  dark:hover:bg-teal-600  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                                    >
                                      <svg
                                        className='w-2.5 h-2.5 text-gray-900 '
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 18 18'
                                      >
                                        <path
                                          stroke='currentColor'
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                          strokeWidth='2'
                                          d='M9 1v16M1 9h16'
                                        />
                                      </svg>
                                    </button>
                                  </div>
                                </p>

                                <div className='flex'>
                                  <button
                                    onClick={() =>
                                      dispatch(
                                        removeFromCart({
                                          userId: user.id,
                                          product: {
                                            ...item,
                                            quantity: 0,
                                          },
                                        })
                                      )
                                    }
                                    type='button'
                                    className='font-medium text-indigo-600 hover:text-indigo-500'
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                        <li className='flex py-6'></li>

                        {/* <!-- More products... --> */}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                  <div className='flex justify-between text-base font-medium text-gray-900'>
                    <p>Subtotal</p>
                    <p>{subtotal}</p>
                  </div>
                  <p className='mt-0.5 text-sm text-gray-500'>
                    Shipping and taxes calculated at checkout.
                  </p>
                  <Link to='/cart'>
                    <div className='mt-6'>
                      <button
                        onClick={() => setShowCartModel(false)}
                        type='button'
                        className='flex items-center justify-center rounded-md border border-transparent bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 ml-1 px-28  py-2 text-base font-medium text-white shadow-xs hover:bg-indigo-700'
                      >
                        Proceed To Checkout
                      </button>
                    </div>
                  </Link>
                  <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
                    <p>
                      or{" "}
                      <button
                        onClick={() => setShowCartModel(false)}
                        type='button'
                        className='font-medium text-indigo-600 hover:text-indigo-500'
                      >
                        Continue Shopping
                        <span aria-hidden='true'> &rarr; </span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
