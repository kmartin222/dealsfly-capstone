import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DownArrow from "../SVG/DownArrow";

const CheckoutForm = ({shippingDetails, setShippingDetails}) => {
  const { user } = useSelector((state) => state.auth);
  const [paymentMethod, setPaymentMethod] = useState(false);
  const [shipping, setShipping] = useState(false);
  const [billingAddress, setBillingAddress] = useState(false);




  return (
    <div className='mt-1 lg:flex lg:items-start lg:gap-12 xl:gap-16'>
      <form className='min-w-0 flex-1 space-y-8'>
        <div className='space-y-4'>
          <h3 className='text-white text-lg font-semibold'>Contact Info</h3>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <div>
              <label
                htmlFor='your_name'
                className='mb-2 block text-sm font-medium text-white'
              >
                First Name
              </label>
              <input
                defaultValue={user.firstName}
                type='text'
                id='your_name'
                className='block w-full rounded-lg border border-neutral-800 bg-neutral-800 p-2.5 text-sm text-white focus:border-primary-500 focus:ring-primary-500  placeholder:text-neutral-400 focus:border-primary-500 focus:ring-primary-500'
                placeholder='Bonnie Green'
                required
              />
            </div>
            <div>
              <label
                htmlFor='your_name'
                className='mb-2 block text-sm font-medium text-white'
              >
                Last Name
              </label>
              <input
                defaultValue={user.lastName}
                type='text'
                id='your_name'
                className='block w-full rounded-lg border border-neutral-800 bg-neutral-800 p-2.5 text-sm text-white focus:border-primary-500 focus:ring-primary-500    placeholder:text-neutral-400 focus:border-primary-500 focus:ring-primary-500'
                placeholder='Bonnie Green'
                required
              />
            </div>

            <div>
              <label
                htmlFor='your_email'
                className='mb-2 block text-sm font-medium text-white'
              >
                Email
              </label>
              <input
                defaultValue={user.email}
                type='email'
                id='your_email'
                className='block w-full rounded-lg border border-neutral-800 bg-neutral-800 p-2.5 text-sm text-white focus:border-primary-500 focus:ring-primary-500    placeholder:text-neutral-400 focus:border-primary-500 focus:ring-primary-500'
                placeholder='name@flowbite.com'
                required
              />
            </div>

            <div>
              <label
                htmlFor='phone-input-3'
                className='mb-2 block text-sm font-medium text-white'
              >
                Phone Number
              </label>
              <div className='flex items-center'>
                <div className='relative w-full'>
                  <input
                    defaultValue={user.contactNumber}
                    type='text'
                    id='phone-input'
                    className='z-20 block w-full rounded-lg border border-s-0 border-neutral-800 bg-neutral-800 p-2.5 text-sm  focus:border-primary-500 focus:ring-primary-500    text-white placeholder:text-neutral-400 focus:border-primary-500'
                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    placeholder='123-456-7890'
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id='accordion-flush'
          data-accordion='collapse'
          data-active-classes=' bg-neutral-900 text-white'
          data-inactive-classes='text-white '
        >
          <h2 id='accordion-flush-heading-1'>
            <button
              onClick={() => setPaymentMethod(!paymentMethod)}
              type='button'
              className='flex items-center justify-between w-full py-5 font-medium rtl:text-right text-white border-b  border-teal-300  gap-3'
              data-accordion-target='#accordion-flush-body-1'
              aria-expanded='true'
              aria-controls='accordion-flush-body-1'
            >
              <span className='flex items-center'>
                <b className='ml-2'>Payment Details</b>
              </span>
              <DownArrow />
            </button>
          </h2>
          {paymentMethod && (
            <div
              id='accordion-flush-body-1'
              aria-labelledby='accordion-flush-heading-1'
            >
              <div className='py-5 border-b  border-teal-300'>
                <div className=' mx-auto'>
                  <label
                    htmlFor='street-address'
                    className='block text-sm/6 font-medium text-white'
                  >
                    Card Number
                  </label>
                  <div className='relative'>
                    <input
                      defaultValue={"**** **** **** ".concat(
                        user.paymentMethod.cardNumber.slice(-4)
                      )}
                      type='text'
                      id='card-number-input'
                      className='  mt-3   text-sm rounded-lg  block w-full pe-10 p-2.5  bg-neutral-800  placeholder-neutral-400 text-white focus:border-primary-500 focus:ring-primary-500'
                      placeholder='4242 4242 4242 4242'
                      required
                    />
                    <div className='absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none'>
                      <svg
                        fill='none'
                        className='h-6  text-white'
                        viewBox='0 0 36 21'
                      >
                        <path
                          fill='currentColor'
                          d='M23.315 4.773c-2.542 0-4.813 1.3-4.813 3.705 0 2.756 4.028 2.947 4.028 4.332 0 .583-.676 1.105-1.832 1.105-1.64 0-2.866-.73-2.866-.73l-.524 2.426s1.412.616 3.286.616c2.78 0 4.966-1.365 4.966-3.81 0-2.913-4.045-3.097-4.045-4.383 0-.457.555-.957 1.708-.957 1.3 0 2.36.53 2.36.53l.514-2.343s-1.154-.491-2.782-.491zM.062 4.95L0 5.303s1.07.193 2.032.579c1.24.442 1.329.7 1.537 1.499l2.276 8.664h3.05l4.7-11.095h-3.043l-3.02 7.543L6.3 6.1c-.113-.732-.686-1.15-1.386-1.15H.062zm14.757 0l-2.387 11.095h2.902l2.38-11.096h-2.895zm16.187 0c-.7 0-1.07.37-1.342 1.016L25.41 16.045h3.044l.589-1.68h3.708l.358 1.68h2.685L33.453 4.95h-2.447zm.396 2.997l.902 4.164h-2.417l1.515-4.164z'
                        />
                      </svg>
                    </div>
                  </div>
                  <div className='grid grid-cols-4 gap-4 my-8'>
                    <div className='relative col-span-3'>
                      <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                        <svg
                          className='w-4 h-4 mt-4 text-neutral-500 text-neutral-400'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                        </svg>
                      </div>
                      <label
                        htmlFor='street-address'
                        className='block text-sm/6 font-medium -mt-4 text-white'
                      >
                        Expiration Date
                      </label>
                      <input
                        defaultValue={user.paymentMethod.expirationDate}
                        datepicker='true'
                        datepicker-format='mm/yy'
                        id='card-expiration-input'
                        type='text'
                        className='  mt-3   text-sm rounded-lg  block w-full ps-10 p-2.5 bg-neutral-800  placeholder-neutral-400 text-white focus:border-gray-500 focus:ring-primary-500'
                        placeholder='12/23'
                        required
                      />
                    </div>
                    <div className='col-span-1 -mt-4'>
                      <label
                        htmlFor='street-address'
                        className='block text-sm/6 font-medium text-white'
                      >
                        CVV Number
                      </label>
                      <input
                        defaultValue={user.paymentMethod.ccv}
                        type='number'
                        id='cvv-input'
                        aria-describedby='helper-text-explanation'
                        className='  mt-3   text-sm rounded-lg  block w-full p-2.5 bg-neutral-800  placeholder-neutral-400 text-white focus:border-primary-500 focus:ring-primary-500'
                        placeholder='CVV'
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <h2 id='accordion-flush-heading-2'>
            <button
              onClick={() => setShipping(!shipping)}
              type='button'
              className='flex items-center justify-between w-full py-5 font-medium rtl:text-right text-white border-b  border-teal-300  gap-3'
              data-accordion-target='#accordion-flush-body-2'
              aria-expanded='false'
              aria-controls='accordion-flush-body-2'
            >
              <span className='flex items-center'>
                {" "}
                {/* <MagicWand /> */}
                <b className='ml-2'>Shipping Address</b>
              </span>
              <DownArrow />
            </button>
          </h2>
          {shipping && (
            <div
              id='accordion-flush-body-2'
              aria-labelledby='accordion-flush-heading-2'
            >
              <div className='py-5 border-b  border-teal-300'>
                <div className='border-b border-gray-900/10 pb-12'>
                  <div className='mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                    <div className='col-span-full'>
                      <label
                        htmlFor='street-address'
                        className='block text-sm/6 font-medium text-white'
                      >
                        Street address
                      </label>
                      <div className='mt-2'>
                        <input
                          required
                          onChange={(e) =>
                            setShippingDetails({
                              ...shippingDetails,
                              street: e.target.value,
                            })
                          }
                          value={shippingDetails.street}
                          type='text'
                          name='street-address'
                          id='street-address'
                          autoComplete='street-address'
                          className='block w-full rounded-md bg-neutral-800 px-3 py-2 text-base text-white   placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:border-neutral-500 focus:ring-neutral-500 sm:text-sm/6'
                        />
                      </div>
                    </div>

                    <div className='sm:col-span-2 -mt-4 sm:col-start-1'>
                      <label
                        htmlFor='city'
                        className='block text-sm/6 font-medium text-white'
                      >
                        City
                      </label>
                      <div className='mt-2'>
                        <input
                          required
                          onChange={(e) =>
                            setShippingDetails({
                              ...shippingDetails,
                              city: e.target.value,
                            })
                          }
                          value={shippingDetails.city}
                          type='text'
                          name='city'
                          id='city'
                          autoComplete='address-level2'
                          className='block w-full rounded-md bg-neutral-800 px-3 py-2 text-base text-white   placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:border-primary-500 focus:ring-primary-500 sm:text-sm/6'
                        />
                      </div>
                    </div>

                    <div className='sm:col-span-2 -mt-4'>
                      <label
                        htmlFor='region'
                        className='block text-sm/6 font-medium text-white'
                      >
                        State / Province
                      </label>
                      <div className='mt-2'>
                        <input
                          required
                          onChange={(e) =>
                            setShippingDetails({
                              ...shippingDetails,
                              state: e.target.value,
                            })
                          }
                          value={shippingDetails.state}
                          type='text'
                          name='region'
                          id='region'
                          autoComplete='address-level1'
                          className='block w-full rounded-md bg-neutral-800 px-3 py-2 text-base text-white   placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:border-primary-500 focus:ring-primary-500 sm:text-sm/6'
                        />
                      </div>
                    </div>

                    <div className='sm:col-span-2 -mt-4'>
                      <label
                        htmlFor='postal-code'
                        className='block text-sm/6 font-medium text-white'
                      >
                        ZIP / Postal code
                      </label>
                      <div className='mt-2'>
                        <input
                          required
                          onChange={(e) =>
                            setShippingDetails({
                              ...shippingDetails,
                              zip: e.target.value,
                            })
                          }
                          value={shippingDetails.zip}
                          type='text'
                          name='postal-code'
                          id='postal-code'
                          autoComplete='postal-code'
                          className='block w-full rounded-md bg-neutral-800 px-3 py-2 text-base text-white   placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:border-primary-500 focus:ring-primary-500 sm:text-sm/6'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <h2 id='accordion-flush-heading-3'>
            <button
              onClick={() => setBillingAddress(!billingAddress)}
              type='button'
              className='flex items-center justify-between w-full py-5 font-medium rtl:text-right text-white border-b  border-teal-300  gap-3'
              data-accordion-target='#accordion-flush-body-3'
              aria-expanded='false'
              aria-controls='accordion-flush-body-3'
            >
              <span className='flex items-center'>
                {" "}
                {/* <Phone /> */}
                <b className='ml-2'>Billing Address</b>
              </span>
              <DownArrow />
            </button>
          </h2>
          {billingAddress && (
            <div
              id='accordion-flush-body-3'
              aria-labelledby='accordion-flush-heading-3'
            >
              <div className='py-3 '>
                <div
                  id='accordion-flush-body-2'
                  aria-labelledby='accordion-flush-heading-2'
                >
                  <div className='py-5 border-b  border-teal-300'>
                    <div className='border-b border-gray-900/10 pb-12'>
                      <div className='mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                        <div className='col-span-full'>
                          <label
                            htmlFor='street-address'
                            className='block text-sm/6 font-medium text-white'
                          >
                            Street address
                          </label>
                          <div className='mt-2'>
                            <input
                              required
                              defaultValue={user.billingAddress.street}
                              type='text'
                              name='street-address'
                              id='street-address'
                              autoComplete='street-address'
                              className='block w-full rounded-md bg-neutral-800 px-3 py-2 text-base text-white   placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:border-primary-500 focus:ring-primary-500 sm:text-sm/6'
                            />
                          </div>
                        </div>

                        <div className='sm:col-span-2 -mt-4 sm:col-start-1'>
                          <label
                            htmlFor='city'
                            className='block text-sm/6 font-medium text-white'
                          >
                            City
                          </label>
                          <div className='mt-2'>
                            <input
                              required
                              defaultValue={user.billingAddress.city}
                              type='text'
                              name='city'
                              id='city'
                              autoComplete='address-level2'
                              className='block w-full rounded-md bg-neutral-800 px-3 py-2 text-base text-white   placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:border-primary-500 focus:ring-primary-500 sm:text-sm/6'
                            />
                          </div>
                        </div>

                        <div className='sm:col-span-2 -mt-4'>
                          <label
                            htmlFor='region'
                            className='block text-sm/6 font-medium text-white'
                          >
                            State / Province
                          </label>
                          <div className='mt-2'>
                            <input
                              required
                              defaultValue={user.billingAddress.state}
                              type='text'
                              name='region'
                              id='region'
                              autoComplete='address-level1'
                              className='block w-full rounded-md bg-neutral-800 px-3 py-2 text-base text-white   placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:border-primary-500 focus:ring-primary-500 sm:text-sm/6'
                            />
                          </div>
                        </div>

                        <div className='sm:col-span-2 -mt-4'>
                          <label
                            htmlFor='postal-code'
                            className='block text-sm/6 font-medium text-white'
                          >
                            ZIP / Postal code
                          </label>
                          <div className='mt-2'>
                            <input
                              required
                              defaultValue={user.billingAddress.zip}
                              type='text'
                              name='postal-code'
                              id='postal-code'
                              autoComplete='postal-code'
                              className='block w-full rounded-md bg-neutral-800 px-3 py-2 text-base text-white   placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:border-primary-500 focus:ring-primary-500 sm:text-sm/6'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
