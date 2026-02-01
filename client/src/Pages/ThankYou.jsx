import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, NavLink } from "react-router";
import { completedGetOne } from "../redux/completedSlice";

const ThankYou = () => {
  const { user } = useSelector((state) => state.auth);
  const { cart, completedId, cartCompleted, isFinished } = useSelector(
    (state) => state.cart
  );
  const { completed } = useSelector((state) => state.completed);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("user", user);
    if (id) {
      dispatch(userGetOne(id));
    }
  }, []);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    console.log("completedId ThankYou", completedId);
    if (completedId) {
      dispatch(completedGetOne(completedId));
      console.log("ThankYou completed", completed);
    }
  }, [cart]);

  useEffect(() => {
    console.log("cartCompleted", cartCompleted);
  }, [cartCompleted]);

  return (
    <>
      <div>
        <div className='bg-neutral-800 '>
          <div className='mx-auto max-w-7xl px-4  sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-20'>
              <div>
                <p className='text-green-600 mb-1'>Payment Successful</p>
                <h2 className='text-5xl font-extrabold text-gray-200'>
                  Thanks for ordering
                </h2>
                <p className='mb-8 mt-2 text-white'>
                  {user.firstName}, We appreciate your order, we’re currently
                  processing it. So hang tight and we’ll send you confirmation
                  very soon!
                </p>
                <p className='border-b border-neutral-500 pb-4 text-white'>
                  Order # -{" "}
                  <a className='font-bold text-teal-300 tracking-wider'>{completed.id}</a>{" "}
                </p>
              </div>

              {isFinished && (
                <>
                  {cartCompleted ? (
                    <>
                      {cartCompleted.products.map((item, index) => (
                        <div
                          key={item.id}
                          className='mt-6 rounded-lg image space-y-12 lg:grid lg:grid-cols-3 bg-neutral-400 lg:space-y-0 lg:gap-x-6'
                        >
                          <div className='group m-5 ml-4 relative'>
                            <NavLink to={`/product-detail/${item.id}`}>
                              <img
                                src={
                                  new URL(
                                    `../Images/${item.img}`,
                                    import.meta.url
                                  ).href
                                }
                                alt='Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.'
                                className='image w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-30 sm:aspect-2/1 lg:aspect-square'
                              />
                            </NavLink>
                          </div>

                          <div className='group relative'>
                            <div>
                              <h3 className='mt-6 text-2xl font-bold  '>
                                {item.name}{" "}
                              </h3>
                              <p className='text-2xl font-bold  text-gray-500'>
                                ${item.price}{" "}
                                <span className='text-black text-sm'>
                                  x {item.quantity}
                                </span>
                              </p>

                              <p className='font-semibold w-190 mt-4 '>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed porttitor lacus quis nisl
                                pharetra. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Sed porttitor lacus
                                quis nisl pharetra.
                              </p>
                            </div>
                            <div className=''>
                              <div className='grid grid-cols-1 xl:grid-cols-2 gap-100  py-7 '>
                                <div className='w-60 h-30  rounded-xl'>
                                  <div className=''>
                                    <h6 className='font-bold mb-2'>Customer</h6>
                                    <p>
                                      {user.firstName} {user.lastName}
                                    </p>
                                    <span>
                                      <p>
                                        {user.address.street}{" "}
                                        {user.address.street2}
                                      </p>{" "}
                                      {user.address.city}, {user.address.state}{" "}
                                      {user.address.zip}
                                    </span>
                                  </div>
                                </div>
                                <div className='w-60 h-30  rounded-xl'>
                                  <div className=''>
                                    <h6 className='font-bold mb-2'>
                                      Shipping Details
                                    </h6>
                                    <p>
                                      {user.firstName} {user.lastName}
                                    </p>
                                    <span>
                                      <p>
                                        {cartCompleted.shippingAddress?.street}
                                      </p>{" "}
                                      {cartCompleted.shippingAddress.city},{" "}
                                  {cartCompleted.shippingAddress.state}{" "}
                                  {cartCompleted.shippingAddress.zip}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='flex justify-between mb-1'>
                              <span className='text-base font-medium text-blue-700 dark:text-white'>
                                Order Proccessing
                              </span>
                              <span className='text-sm font-medium text-blue-700 dark:text-white'>
                                25%
                              </span>
                            </div>
                            <div className='w-190 bg-neutral-900 rounded-full h-2.5 '>
                              <div
                                className='bg-teal-500 h-2.5 rounded-full'
                                style={{ width: "25%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      {completed.products.map((item, index) => (
                        <div
                          key={item.id}
                          className='mt-6 rounded-lg image space-y-12 lg:grid lg:grid-cols-3 bg-neutral-400 lg:space-y-0 lg:gap-x-6'
                        >
                          <div className='group m-5 ml-4 relative'>
                            <NavLink to={`/product-detail/${item.id}`}>
                              <img
                                src={
                                  new URL(
                                    `../Images/${item.img}`,
                                    import.meta.url
                                  ).href
                                }
                                alt='Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.'
                                className='image w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-30 sm:aspect-2/1 lg:aspect-square'
                              />
                            </NavLink>
                          </div>

                          <div className='group relative'>
                            <div>
                              <h3 className='mt-6 text-2xl font-bold  '>
                                {item.name}{" "}
                              </h3>
                              <p className='text-2xl font-bold  text-gray-500'>
                                ${item.price}{" "}
                                <span className='text-black text-sm'>
                                  x {item.quantity}
                                </span>
                              </p>

                              <p className='font-semibold w-190 mt-4 '>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed porttitor lacus quis nisl
                                pharetra. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Sed porttitor lacus
                                quis nisl pharetra.
                              </p>
                            </div>
                            <div className=''>
                              <div className='grid grid-cols-1 xl:grid-cols-2 gap-100  py-7 '>
                                <div className='w-60 h-30  rounded-xl'>
                                  <div className=''>
                                    <h6 className='font-bold mb-2'>Customer</h6>
                                    <p>
                                      {user.firstName} {user.lastName}
                                    </p>
                                    <span>
                                      <p>
                                        {user.address.street}{" "}
                                        {user.address.street2}
                                      </p>{" "}
                                      {user.address.city}, {user.address.state}{" "}
                                      {user.address.zip}
                                    </span>
                                  </div>
                                </div>
                                <div className='w-60 h-30  rounded-xl'>
                                  <div className=''>
                                    <h6 className='font-bold mb-2'>
                                      Shipping Details
                                    </h6>
                                    <p>
                                      {completed.firstName} {completed.lastName}
                                    </p>
                                    <span>
                                      <p>{completed.shippingAddress.street}</p>{" "}
                                      {completed.shippingAddress.city},{" "}
                                      {completed.shippingAddress.state}{" "}
                                      {completed.shippingAddress.zip}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='flex justify-between mb-1'>
                              <span className='text-base font-medium text-blue-700 dark:text-white'>
                                Order Proccessing
                              </span>
                              <span className='text-sm font-medium text-blue-700 dark:text-white'>
                                25%
                              </span>
                            </div>
                            <div className='w-190 bg-neutral-900 rounded-full h-2.5 '>
                              <div
                                className='bg-teal-500 h-2.5 rounded-full'
                                style={{ width: "25%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </>
              )}

              <div className='space-y-4 rounded-lg image p-6 mt-6 bg-neutral-900'>
                <div className='space-y-2'>
                  <dl className='flex items-center justify-between gap-4'>
                    <dt className='font-normal text-gray-500 dark:text-gray-400'>
                      Original price
                    </dt>
                    <dd className='font-medium text-gray-900 dark:text-white'>
                      {formatter.format(completed.subtotal)}
                    </dd>
                  </dl>
                  <dl className='flex items-center justify-between gap-4'>
                    <dt className='font-normal text-gray-500 dark:text-gray-400'>
                      Savings
                    </dt>
                    <dd className='text-base font-medium text-green-500'>
                      {formatter.format(completed.savings)}
                    </dd>
                  </dl>

                  <dl className='flex items-center justify-between gap-4'>
                    <dt className='font-normal text-gray-500 dark:text-gray-400'>
                      Shipping
                    </dt>
                    <dd className='font-medium text-gray-900 dark:text-white'>
                      {formatter.format(completed.shipping)}
                    </dd>
                  </dl>
                  <dl className='flex items-center justify-between gap-4'>
                    <dt className='font-normal text-gray-500 dark:text-gray-400'>
                      Tax
                    </dt>
                    <dd className='font-medium text-gray-900 dark:text-white'>
                      {formatter.format(completed.tax)}
                    </dd>
                  </dl>
                </div>

                <dl className='flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700'>
                  <dt className='text-lg font-bold text-gray-900 dark:text-white'>
                    Total
                  </dt>
                  <dd className='text-lg font-bold text-gray-900 dark:text-white'>
                    {formatter.format(completed.total)}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
