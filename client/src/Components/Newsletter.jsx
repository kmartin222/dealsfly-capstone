import React from "react";

const Newsletter = () => {
  return (
    <div className=' overflow-hidden z-10 bg-neutral-900 py-16 sm:py-20 lg:py-20'>
      <div className='mx-auto max-w-8xl px-6 -mb-30 lg:px-8'>
        <div className='mx-auto grid  grid-cols-1 gap-x-6 gap-y-6 lg:max-w-none lg:grid-cols-3'>
          <div className='animate-pulse'>
            <svg
              className='logo '
              xmlns='http://www.w3.org/2000/svg'
              height='34'
              width='34'
              viewBox='0 0 512 512'
            >
              <path
                fill='#63E6BE'
                d='M111.8 62.2C170.2 105.9 233 194.7 256 242.4c23-47.6 85.8-136.4 144.2-180.2c42.1-31.6 110.3-56 
		  110.3 21.8c0 15.5-8.9 130.5-14.1 149.2C478.2 298 412 314.6 353.1 304.5c102.9 17.5 129.1 75.5 72.5 133.5c-107.4 110.2-154.3-27.6-166.3-62.9l0
		  0c-1.7-4.9-2.6-7.8-3.3-7.8s-1.6 3-3.3 7.8l0 0c-12 35.3-59 173.1-166.3 62.9c-56.5-58-30.4-116 72.5-133.5C100 314.6 33.8 298 15.7 233.1C10.4 214.4
		  1.5 99.4 1.5 83.9c0-77.8 68.2-53.4 110.3-21.8z'
              />
            </svg>
          </div>
          <div className='max-w-xl -ml-65 lg:max-w-lg'>
            <h2 className='text-4xl font-semibold tracking-tight text-white'>
              Subscribe to our newsletter
            </h2>
            <p className='mt-4 text-lg text-gray-300'>
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
              velit quis. Duis tempor incididunt dolore.
            </p>
            <div className=' mt-6 flex max-w-md gap-x-4'>
              <label htmlFor='email-address' className=' sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                className=' w-80 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6'
                placeholder='Enter your email'
              />
              <button
                type='button'
                className='flex-none rounded-md bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium px-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className='grid grid-cols-1 -ml-88 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2'>
            <div className='flex flex-col items-start'>
              <div className='rounded-md bg-white/5 p-2 ring-1 ring-white/10'>
                <svg
                  className='size-6 text-white'
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
                    d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z'
                  />
                </svg>
              </div>
              <dt className='mt-4 text-base font-semibold text-white'>
                Weekly coupons
              </dt>
              <dd className='mt-2 text-base/7 text-gray-400'>
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure
                cupidatat duis commodo amet.
              </dd>
            </div>
            <div className='flex flex-col items-start'>
              <div className='rounded-md bg-white/5 p-2 ring-1 ring-white/10'>
                <svg
                  className='size-6 text-white'
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
                    d='M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002'
                  />
                </svg>
              </div>
              <dt className='mt-4 text-base font-semibold text-white'>
                No spam
              </dt>
              <dd className='mt-2 text-base/7 text-gray-400'>
                Officia excepteur ullamco ut sint duis proident non adipisicing.
                Voluptate incididunt anim.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      {/* <div className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
    <div className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div> */}
    </div>
  );
};

export default Newsletter;
