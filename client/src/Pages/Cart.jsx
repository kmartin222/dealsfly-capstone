import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router";
import {
  getCart,
  addToCart,
  removeFromCart,
  checkout,
} from "../redux/cartSlice";
// import { addUser } from "../auth/authSlice";
// import { ToastContainer, toast } from "react-toastify";
import PlusSign from "../SVG/PlusSign";
import MinusSign from "../SVG/MinusSign";
// import DownArrow from "../SVG/DownArrow";
import VoucherGift from "../Components/VoucherGift";
// import OrderSummary from "../Components/OrderSummary";
// import ProductPreview from "../Components/ProductPreview";
import CheckoutForm from "../Components/CheckoutForm";

const Cart = () => {
  const { user } = useSelector((state) => state.auth);
  const { cart, completedId } = useSelector((state) => state.cart);
  
  const [shippingDetails, setShippingDetails] = useState({});
  const [paymentMethod, setPaymentMethod] = useState(false);
  const [shipping, setShipping] = useState(false);
  const [billingAddress, setBillingAddress] = useState(false);
  const [subtotal, setSubtotal] = useState(0.0);
  const [shippingTotal, setShippingTotal] = useState(0.0);
  const [cartTax, setCartTax] = useState(0.0);
  const [finalTotal, setFinalTotal] = useState(0.0);
  const [savingsTotal, setSavingsTotal] = useState(0.0);
  // testing below
  const [ testCart, setTestCart ] = useState({})

  const navigate = useNavigate();

  const { id } = useParams();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (id) {
  //     dispatch(userGetOne(id));
  //   }
  // }, []);

  useEffect(() => {
    if (user.id) {
      console.log(":)", user);
      dispatch(getCart(user.id));
      // calculateCartTotal();
    } else {
      console.log(":(");
    }
  }, [user]);

  useEffect(() => {
    setTestCart(user)
    setTestCart({ ...testCart, cart: cart });
  }, [])

  useEffect(() => {
    console.log("testCart IS CHANGING", testCart);
  }, [testCart]);
  
  

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
      savings = cartTotal <= 100 ? 0 : cartTotal * 0.1;
      setSubtotal(formatter.format(cartTotal));
      setShippingTotal(formatter.format(shipping));
      setCartTax(formatter.format(cartTotal * 0.09));
      setSavingsTotal(formatter.format(savings));
      setFinalTotal(formatter.format(cartTotal + tax + shipping));
    };
    calculateCartTotal();
    console.log(cart, completedId);
    console.log("user", user);
  }, [cart]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit JUST USER", user);
    console.log("handleSubmit user.cart", user.cart);
    console.log("handleSubmit cart", cart);
    const checkoutForm = {
      user,
      shippingAddress: shippingDetails,
      subtotal: subtotal,
      tax: cartTax,
      savings: savingsTotal,
      shipping: shippingTotal,
      total: finalTotal,
      testCart
    };
    dispatch(checkout(checkoutForm));
    navigate("/thank-you");
  };

  //  const handleUpdate = (e) => {
  //    e.preventDefault();
  //    console.log("completedForm", completedForm);
  //    dispatch(userUpdate(completedForm));
  // };

  return (
    <>
      <section className='py-8 mx-auto antialiased mr-68 md:py-16'>
        <div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
          <div className='bg-neutral-900 border border-teal-400 image menu  rounded-lg'>
            <h2 className='text-xl font-semibold text-white sm:text-2xl'>
              Checkout
            </h2>
            <div className='mt-6 sm:mt-8 md:gap-6  lg:flex lg:items-start xl:gap-8'>
              <div className='mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl'>
                <div className='space-y-2 '>
                  {/* Checkout Form */}
                  <CheckoutForm
                    shippingDetails={shippingDetails}
                    setShippingDetails={setShippingDetails}
                  />
                </div>
              </div>
              <div className='mx-auto max-w-4xl flex-1 space-y-6  '>
                {/* <OrderSummary /> */}
                <p className='text-xl -mt-9 font-semibold text-white '>
                  Order summary
                </p>
                <div className='space-y-4 rounded-lg image bg-neutral-800 p-4 lg:p-6'>
                  <div className='space-y-4'>
                    <div className='space-y-2'>
                      <div className='flow-root'>
                        <ul
                          role='list'
                          className='-my-6 divide-y divide-gray-200'
                        >
                          {cart.map((item, index) => (
                            <li key={index} className='flex py-6'>
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
                                  <div className='flex justify-between text-base font-medium text-white'>
                                    <h3>
                                      <a href='#'>{item.name}</a>
                                    </h3>
                                    <p className='ml-4 text-white'>
                                      ${item.price}
                                    </p>
                                  </div>
                                  <p className='mt-1 text-sm text-gray-500'>
                                    {item.size[0]}
                                  </p>
                                </div>
                                <div className='flex flex-1 items-end justify-between text-sm'>
                                  <span className='text-gray-500'>
                                    <div className='relative flex items-center'>
                                      {/* Minus */}
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
                                        className='shrink-0 bg-neutral-700  dark:hover:bg-teal-300 hover:text-black   inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                                      >
                                        <MinusSign />
                                      </button>
                                      <span className='mr-3 ml-3 text-white '>
                                        {item.quantity}
                                      </span>
                                      {/* Plus */}
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
                                        className='shrink-0 bg-neutral-700  dark:hover:bg-teal-300 hover:text-black   inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                                      >
                                        <PlusSign />
                                      </button>
                                    </div>
                                  </span>

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
                      <dl className='flex items-center justify-between gap-4'>
                        <dt className='text-base font-normal text-gray-500 dark:text-gray-400'>
                          Original price
                        </dt>
                        <dd className='text-base font-medium text-white '>
                          {subtotal}
                        </dd>
                      </dl>

                      <dl className='flex items-center justify-between gap-4'>
                        <dt className='text-base font-normal text-gray-500 dark:text-gray-400'>
                          Shipping Costs
                        </dt>
                        <dd className='text-base font-medium text-white '>
                          {shippingTotal}
                        </dd>
                      </dl>

                      <dl className='flex items-center justify-between gap-4'>
                        <dt className='text-base font-normal text-gray-500 dark:text-gray-400'>
                          Tax
                        </dt>
                        <dd className='text-base font-medium text-white '>
                          {cartTax}
                        </dd>
                      </dl>

                      <dl className='flex items-center justify-between gap-4'>
                        <dt className='text-base font-normal text-gray-500 dark:text-gray-400'>
                          Savings
                        </dt>
                        <dd className='text-base font-medium text-green-600'>
                          {savingsTotal}
                        </dd>
                      </dl>
                    </div>

                    <dl className='flex items-center justify-between gap-4 border-t border-gray-200 pt-2 '>
                      <dt className='text-base font-bold text-white '>Total</dt>
                      <dd className='text-base font-bold text-white '>
                        {finalTotal}
                      </dd>
                    </dl>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className='flex w-full items-center justify-center rounded-lg bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                  >
                    Checkout
                  </button>

                  <div className='flex items-center justify-center gap-2'>
                    <span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
                      or
                    </span>
                    <a
                      href='/'
                      title=''
                      className='inline-flex items-center gap-2 text-sm font-medium text-blue-400 underline hover:no-underline '
                    >
                      Continue Shopping
                      <svg
                        className='h-5 w-5'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                      >
                        <path
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M19 12H5m14 0-4 4m4-4-4-4'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <VoucherGift />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <ProductPreview /> */}
    </>
  );
};

export default Cart;
