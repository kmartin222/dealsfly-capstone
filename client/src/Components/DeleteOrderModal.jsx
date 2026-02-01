import React from 'react'

const DeleteOrderModal = () => {
  return (
    <div
      id='deleteOrderModal'
      tabIndex='-1'
      aria-hidden='true'
      className='fixed left-0 right-0 top-0 z-50 hidden h-modal w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full'
    >
      <div className='relative h-full w-full max-w-md p-4 md:h-auto'>
        {/* <!-- Modal content --> */}
        <div className='relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5'>
          <button
            type='button'
            className='absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'
            data-modal-toggle='deleteOrderModal'
          >
            <svg
              aria-hidden='true'
              className='h-5 w-5'
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
          <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700'>
            <svg
              className='h-8 w-8 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z'
              />
            </svg>
            <span className='sr-only'>Danger icon</span>
          </div>
          <p className='mb-3.5 text-gray-900 dark:text-white'>
            <a
              href='#'
              className='font-medium text-primary-700 hover:underline dark:text-primary-500'
            >
              @heleneeng
            </a>
            , are you sure you want to delete this order from your account?
          </p>
          <p className='mb-4 text-gray-500 dark:text-gray-300'>
            This action cannot be undone.
          </p>
          <div className='flex items-center justify-center space-x-4'>
            <button
              data-modal-toggle='deleteOrderModal'
              type='button'
              className='rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600'
            >
              No, cancel
            </button>
            <button
              type='submit'
              className='rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
            >
              Yes, delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteOrderModal